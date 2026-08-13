// ============================================================
// THE UNDEAD REALM — Saturday Blood Moon Raid Event
// ============================================================
// Between real-life Saturday 6 PM to 9 PM, every MC night
// triggers a raid sequence:
//   - Night 1: Spore raid (level 2 mobs)
//   - Night 2: Spore raid (level 3 mobs — harder)
//   - Night 3: Pillager raid (triggered at player)
//   - Night 4 (if still in window): Another pillager raid
//
// MC day = 1 hour (36000 day + 36000 night = 72000 ticks)
// Saturday 6PM-9PM = 3 hours = ~3 MC days
//
// Spore raid mobs are summoned in waves near the player.
// Pillager raids use vanilla /raid command (bad omen effect).
// ============================================================

ServerEvents.tick(event => {
  let server = event.server;
  let level = server.overworld();

  // Only check every 100 ticks for performance
  if (server.tickCount % 100 !== 0) return;

  let dayTime = level.getDayTime() % 72000;

  // Night starts at tick 36000, check in a 100-tick window
  if (dayTime < 36000 || dayTime > 36100) return;

  // Only trigger once per night
  let data = server.persistentData;
  let currentDay = Math.floor(level.getDayTime() / 72000);
  let lastRaidDay = data.getInt('bloodmoon_last_raid_day');
  if (currentDay <= lastRaidDay) return;

  // Check real-world time: Saturday between 6 PM and 9 PM
  let now = new (Java.loadClass('java.util.Date'))();
  let cal = Java.loadClass('java.util.Calendar').getInstance();
  cal.setTime(now);
  let dayOfWeek = cal.get(7); // 1=Sunday, 7=Saturday
  let hour = cal.get(11); // 0-23

  // Saturday = 7 in Java Calendar, between 18:00 and 20:59
  if (dayOfWeek !== 7 || hour < 18 || hour >= 21) return;

  // Mark this night as processed
  data.putInt('bloodmoon_last_raid_day', currentDay);

  // Determine which raid night this is (track consecutive raids)
  let raidNight = data.getInt('bloodmoon_raid_night') + 1;
  data.putInt('bloodmoon_raid_night', raidNight);

  // Get all online players
  let players = server.players;
  if (players.size() === 0) return;

  if (raidNight <= 2) {
    // ── NIGHTS 1-2: Spore Raid ──────────────────────────────
    let raidLevel = raidNight; // 1 or 2 → maps to spore raid difficulty
    let mobCount = raidNight === 1 ? 8 : 12;
    let spawnRadius = 30;

    // Spore mobs for each night
    let sporeMobs;
    if (raidNight === 1) {
      // Level 2 spore mobs (mid-tier)
      sporeMobs = [
        'spore:inf_human', 'spore:howler', 'spore:knight',
        'spore:brute', 'spore:slasher', 'spore:braiomil',
        'spore:jagd', 'spore:inf_pillager'
      ];
    } else {
      // Level 3 spore mobs (hard-tier, no calamity)
      sporeMobs = [
        'spore:griefer', 'spore:howler', 'spore:mephitic',
        'spore:knight', 'spore:brute', 'spore:slasher',
        'spore:volatile', 'spore:leaper', 'spore:spitter',
        'spore:stalker', 'spore:bloater', 'spore:scavenger'
      ];
    }

    // Announce
    server.runCommandSilent('tellraw @a {"text":"[THE UNDEAD REALM] ☠ BLOOD MOON — Spore Raid Night ' + raidNight + '! The infected are coming!","color":"dark_red","bold":true}');

    // Spawn mobs around each player in waves
    players.forEach(player => {
      let px = Math.floor(player.x);
      let py = Math.floor(player.y);
      let pz = Math.floor(player.z);

      for (let i = 0; i < mobCount; i++) {
        let mob = sporeMobs[Math.floor(Math.random() * sporeMobs.length)];
        let angle = Math.random() * Math.PI * 2;
        let dist = spawnRadius + Math.floor(Math.random() * 15);
        let sx = px + Math.floor(Math.cos(angle) * dist);
        let sz = pz + Math.floor(Math.sin(angle) * dist);
        server.runCommandSilent('execute in minecraft:overworld run summon ' + mob + ' ' + sx + ' ' + py + ' ' + sz);
      }
    });

    // Second wave after 60 seconds (1200 ticks) via schedule
    server.scheduleInTicks(1200, () => {
      server.runCommandSilent('tellraw @a {"text":"[THE UNDEAD REALM] ☠ Second wave incoming!","color":"red"}');
      players.forEach(player => {
        let px = Math.floor(player.x);
        let py = Math.floor(player.y);
        let pz = Math.floor(player.z);
        let waveCount = raidNight === 1 ? 6 : 10;

        for (let i = 0; i < waveCount; i++) {
          let mob = sporeMobs[Math.floor(Math.random() * sporeMobs.length)];
          let angle = Math.random() * Math.PI * 2;
          let dist = 25 + Math.floor(Math.random() * 15);
          let sx = px + Math.floor(Math.cos(angle) * dist);
          let sz = pz + Math.floor(Math.sin(angle) * dist);
          server.runCommandSilent('execute in minecraft:overworld run summon ' + mob + ' ' + sx + ' ' + py + ' ' + sz);
        }
      });
    });

  } else {
    // ── NIGHTS 3-4: Pillager Raid ───────────────────────────
    server.runCommandSilent('tellraw @a {"text":"[THE UNDEAD REALM] ☠ BLOOD MOON — Pillager Raid incoming! Defend your base!","color":"dark_red","bold":true}');

    // Give bad omen to all players to trigger a raid at their location
    players.forEach(player => {
      let name = player.name.string;
      // Give raid omen (bad omen was replaced with raid omen in 1.21)
      server.runCommandSilent('effect give ' + name + ' minecraft:raid_omen 120 2');
    });

    // If this is night 4, reset the streak
    if (raidNight >= 4) {
      data.putInt('bloodmoon_raid_night', 0);
      server.scheduleInTicks(200, () => {
        server.runCommandSilent('tellraw @a {"text":"[THE UNDEAD REALM] The Blood Moon Siege has ended. Rest while you can.","color":"gold"}');
      });
    }
  }
});

// Reset raid night counter when Saturday window ends
ServerEvents.tick(event => {
  let server = event.server;
  if (server.tickCount % 6000 !== 0) return; // Check every 5 minutes

  let cal = Java.loadClass('java.util.Calendar').getInstance();
  let dayOfWeek = cal.get(7);
  let hour = cal.get(11);

  // If it's NOT Saturday 6-9 PM, reset the counter
  if (dayOfWeek !== 7 || hour < 18 || hour >= 21) {
    let data = server.persistentData;
    if (data.getInt('bloodmoon_raid_night') > 0) {
      data.putInt('bloodmoon_raid_night', 0);
    }
  }
});
