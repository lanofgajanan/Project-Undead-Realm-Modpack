// ============================================================
// THE UNDEAD REALM — Nerf Pillager Guns (Command-based)
// ============================================================
// Every 3 seconds, runs commands to find pillagers holding
// banned guns and replaces them with allowed ones.
// Uses /execute + /item replace which is guaranteed to work.
// ============================================================

ServerEvents.tick(event => {
  let server = event.server;

  // Only check every 20 ticks (1 second)
  if (server.tickCount % 20 !== 0) return;

  // List of banned gun IDs that pillagers should NOT have
  // We use /execute if to detect them, then /item replace to fix
  let bannedGuns = [
    'tacz:hk416d', 'tacz:m4a1', 'tacz:scar_h', 'tacz:scar_l',
    'tacz:m16a1', 'tacz:m16a4', 'tacz:g36k', 'tacz:aug',
    'tacz:qbz_191', 'tacz:qbz_95', 'tacz:fn_fal', 'tacz:fn_evolys',
    'tacz:hk_g3', 'tacz:spr15hb', 'tacz:m249',
    'tacz:m107', 'tacz:m95', 'tacz:ai_awp', 'tacz:m700',
    'tacz:mk14', 'tacz:p90', 'tacz:minigun', 'tacz:rpg7',
    'tacz:m320', 'tacz:deagle', 'tacz:deagle_golden', 'tacz:taurus500',
    'tacz:m1014', 'tacz:aa12', 'tacz:b93r', 'tacz:type_81',
    'tacz:timeless50', 'tacz:lonetrail',
    'tacz:hk_mk23', 'tacz:cz75', 'tacz:m9a4',
    'tacz:hk_mp5a5', 'tacz:ump45', 'tacz:vector45',
    'tacz:spas_12', 'tacz:sks_tactical'
  ];

  // Allowed replacement guns (from your confirmed list)
  let replacements = [
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:glock_17",GunFireMode:"SEMI"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:p320",GunFireMode:"SEMI"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:m1911",GunFireMode:"SEMI"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:taurus943",GunFireMode:"SEMI"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:rhino357",GunFireMode:"SEMI"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:kar98",GunFireMode:"SEMI"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:springfield1873",GunFireMode:"SEMI"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:ak47",GunFireMode:"AUTO"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:db_short",GunFireMode:"SEMI"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:db_long",GunFireMode:"SEMI"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:uzi",GunFireMode:"AUTO"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:m870",GunFireMode:"SEMI"}]',
    'tacz:modern_kinetic_gun[custom_data={GunId:"tacz:rpk",GunFireMode:"AUTO"}]'
  ];

  // Pick a random replacement for this tick
  let replacement = replacements[Math.floor(Math.random() * replacements.length)];

  // For each banned gun, replace it on any pillager holding it
  bannedGuns.forEach(gunId => {
    server.runCommandSilent(
      'execute as @e[type=minecraft:pillager,nbt={HandItems:[{id:"tacz:modern_kinetic_gun",components:{"minecraft:custom_data":{GunId:"' + gunId + '"}}}]}] run item replace entity @s weapon.mainhand with ' + replacement
    );
  });
});
