// ============================================================
// THE UNDEAD REALM - Armor Penetration System (FINAL)
// ============================================================
// Realistic penetration gating for TACZ guns vs Spore infected.
// Uses TACZ's internal damage calculation as the penetration check.
// TACZ applies armor_ignore vs mob armor internally, then the
// resulting damage reaches this event. Low result = weak gun = blocked.
//
// FMJ/AP ammo: Automatically works because TACZ multiplies armor_ignore
// by 1.5-1.75x with FMJ equipped, resulting in higher damage output
// that passes our thresholds.
//
// Melee: Always bypasses with bonus damage multiplier.
// Explosions: Always bypass (different damage type).
// ============================================================

// --- MOB TIER DEFINITIONS ---
// Tier 2: Hyper Evolved - thick chitin, blocks basic pistols
// Tier 3: Experiments/Mini-bosses - reinforced armor, blocks weak guns
// Tier 4: Calamities - extreme armor, only heavy weapons penetrate
const MOB_TIER = {
  // Tier 2 - Hyper Evolved
  'spore:phayres': 2, 'spore:brute': 2, 'spore:wendigo': 2,
  'spore:axtwerfer': 2, 'spore:brot': 2, 'spore:grober': 2,
  'spore:inquisitor': 2, 'spore:ogre': 2, 'spore:hexenmeister': 2,
  'spore:hevoker': 2, 'spore:hvendicator': 2, 'spore:specter': 2,
  'spore:reaper': 2, 'spore:vanguard': 2, 'spore:plagued': 2,
  'spore:lacerator': 2, 'spore:gastgaber': 2,
  // Tier 3 - Experiments
  'spore:proto': 3, 'spore:hivetumor': 3, 'spore:inf_construct': 3,
  'spore:vigil': 3, 'spore:umarmed': 3, 'spore:usurper': 3,
  'spore:braurei': 3, 'spore:verva': 3, 'spore:delusioner': 3,
  'spore:mound': 3,
  // Tier 4 - Calamities
  'spore:sieger': 4, 'spore:stahlmorder': 4, 'spore:hohlfresser': 4,
  'spore:gazenbrecher': 4, 'spore:grakensenker': 4, 'spore:leviathan': 4,
  'spore:howitzer': 4, 'spore:hindenburg': 4
};

// --- PENETRATION THRESHOLDS ---
// Damage below this value = BLOCKED (gun too weak for this tier)
// Calculated from TACZ internal armor math for all 40+ guns.
// FMJ ammo naturally increases damage past thresholds.
const BLOCK_THRESHOLDS = {
  2: 3.0,  // Blocks: Glock, M9A4, CZ75, B93R (zero armor_ignore)
  3: 4.1,  // Blocks: Same + basic SMGs at range
  4: 2.1   // Blocks: Standard pistols, SMGs, 5.56 rifles, AK-47
           // Passes: P90, QBZ, Deagle, Rhino, battle rifles, snipers
};

// --- PARTIAL PENETRATION ---
// Bullets that barely pass threshold deal reduced damage (lost energy)
function getDamageMultiplier(damage, threshold) {
  if (damage > threshold * 2.5) return 1.0;   // Well above: full damage
  if (damage > threshold * 1.8) return 0.9;   // Comfortable: 90%
  if (damage > threshold * 1.3) return 0.75;  // Borderline: 75%
  return 0.6;                                   // Just barely: 60%
}

// --- DEFLECTION MESSAGE SYSTEM ---
// Shows message max 3 times per mob tier per player, then stops
let messageCount = {};
let messageCooldown = {};
const MAX_MESSAGES = 3;
const COOLDOWN_MS = 5000;

function showDeflectionMessage(playerUUID, mobTier) {
  let key = playerUUID + '_' + mobTier;
  let now = Date.now();

  // Cooldown check
  if (messageCooldown[key] && (now - messageCooldown[key]) < COOLDOWN_MS) return null;
  messageCooldown[key] = now;

  // Count check
  if (!messageCount[key]) messageCount[key] = 0;
  messageCount[key]++;
  if (messageCount[key] > MAX_MESSAGES) return null;

  // Return appropriate message
  if (mobTier === 2) return '\u00A7c[DEFLECTED] \u00A77This infected has hardened chitin. Use a rifle or better.';
  if (mobTier === 3) return '\u00A7c[DEFLECTED] \u00A77Reinforced bio-armor. Standard firearms ineffective.';
  return '\u00A7c[DEFLECTED] \u00A74Calamity-class armor. \u00A77Only high-caliber or AP rounds can penetrate.';
}

function showPenetrationMessage(playerUUID, mobTier) {
  let key = playerUUID + '_pen_' + mobTier;
  let now = Date.now();

  if (messageCooldown[key] && (now - messageCooldown[key]) < COOLDOWN_MS) return null;
  messageCooldown[key] = now;

  if (!messageCount[key]) messageCount[key] = 0;
  messageCount[key]++;
  if (messageCount[key] > 1) return null; // Only show penetration message ONCE

  if (mobTier === 4) return '\u00A7a[PENETRATING] \u00A77Your rounds are punching through the armor.';
  return null; // Don't spam for lower tiers
}

// --- MELEE BONUS MULTIPLIERS ---
const MELEE_BONUS = {
  'netherite_axe': 2.5, 'diamond_axe': 2.2, 'iron_axe': 1.8,
  'stone_axe': 1.4, 'golden_axe': 1.6,
  'netherite_sword': 2.0, 'diamond_sword': 1.8, 'iron_sword': 1.5,
  'stone_sword': 1.3, 'golden_sword': 1.4,
  'better_weaponry:great_axe': 3.0, 'better_weaponry:battle_axe': 2.8,
  'better_weaponry:iron_rapier': 1.6, 'better_weaponry:diamond_rapier': 2.0,
  'better_weaponry:netherite_rapier': 2.2,
  'better_weaponry:iron_dagger': 1.4, 'better_weaponry:diamond_dagger': 1.8,
  'better_weaponry:netherite_dagger': 2.0,
  'better_weaponry:iron_halberd': 2.2, 'better_weaponry:diamond_halberd': 2.5,
  'better_weaponry:netherite_halberd': 2.8,
  'better_weaponry:iron_mace': 2.0, 'better_weaponry:diamond_mace': 2.4,
  'better_weaponry:netherite_mace': 2.8,
  'better_weaponry:iron_spear': 1.6, 'better_weaponry:diamond_spear': 2.0,
  'better_weaponry:netherite_spear': 2.2,
  'better_weaponry:iron_scythe': 1.8, 'better_weaponry:diamond_scythe': 2.2,
  'better_weaponry:netherite_scythe': 2.5,
  'spore:bone_blade': 2.5, 'spore:living_blade': 3.0,
  'spore:parasitic_blade': 3.5, 'spore:fleshy_axe': 3.0,
  'spore:bone_scythe': 2.8, 'spore:claw_gauntlet': 2.5,
  'immersiveengineering:hammer': 1.8, 'immersiveengineering:sword_steel': 2.0,
  'minecraft:mace': 2.8
};

function getMeleeMultiplier(player) {
  try {
    let mainHand = player.mainHandItem;
    if (!mainHand || mainHand.isEmpty()) return 1.0;
    let itemId = String(mainHand.id);
    if (MELEE_BONUS[itemId] !== undefined) return MELEE_BONUS[itemId];
    for (let key in MELEE_BONUS) {
      if (itemId.indexOf(key) !== -1) return MELEE_BONUS[key];
    }
  } catch(e) {}
  return 1.0;
}

// --- MAIN DAMAGE EVENT ---
NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre', event => {
  try {
    let entity = event.getEntity();
    let entityType = String(entity.type);

    // Only process Spore mobs that are Tier 2+
    let mobTier = MOB_TIER[entityType];
    if (mobTier === undefined) return;

    let damage = event.getNewDamage();
    if (damage <= 0) return; // Skip zero-damage duplicate events from TACZ

    // Get damage type info
    let source = event.getSource();
    let damageTypeStr = '';
    try { damageTypeStr = String(source.type()); } catch(e) {}

    // --- MELEE (msgId=player) ---
    // Always passes through with bonus damage
    if (damageTypeStr.indexOf('msgId=player') !== -1) {
      try {
        let attacker = source.getEntity();
        if (attacker && attacker.isPlayer()) {
          let mult = getMeleeMultiplier(attacker);
          if (mult > 1.0) {
            event.setNewDamage(damage * mult);
          }
        }
      } catch(e) {}
      return;
    }

    // --- TACZ BULLET (msgId=tacz.bullet) ---
    // Apply penetration threshold check
    if (damageTypeStr.indexOf('tacz.bullet') !== -1) {
      let threshold = BLOCK_THRESHOLDS[mobTier];
      if (threshold === undefined) return;

      if (damage < threshold) {
        // BLOCKED - weapon cannot penetrate this tier
        event.setNewDamage(0);

        // Show deflection message - find nearest player since TACZ doesn't expose shooter
        try {
          let pos = entity.position();
          let nearestPlayer = entity.level.getNearestPlayer(pos.x, pos.y, pos.z, 50, false);
          if (nearestPlayer) {
            let uuid = String(nearestPlayer.uuid);
            let msg = showDeflectionMessage(uuid, mobTier);
            if (msg) nearestPlayer.tell(msg);
          }
        } catch(e) {}
        return;
      }

      // PASSES - apply partial penetration reduction for borderline hits
      let mult = getDamageMultiplier(damage, threshold);
      if (mult < 1.0) {
        event.setNewDamage(damage * mult);
      }

      // Show penetration message (once per tier per player)
      try {
        let pos = entity.position();
        let nearestPlayer = entity.level.getNearestPlayer(pos.x, pos.y, pos.z, 50, false);
        if (nearestPlayer) {
          let uuid = String(nearestPlayer.uuid);
          let msg = showPenetrationMessage(uuid, mobTier);
          if (msg) nearestPlayer.tell(msg);
        }
      } catch(e) {}
      return;
    }

    // --- EVERYTHING ELSE (explosions, fire, magic, etc.) ---
    // Passes through unchanged

  } catch(e) {}
});

console.log('[THE UNDEAD REALM] Armor Penetration System loaded.');
console.log('[THE UNDEAD REALM] Tier 2 threshold: ' + BLOCK_THRESHOLDS[2] + ' | Tier 3: ' + BLOCK_THRESHOLDS[3] + ' | Tier 4: ' + BLOCK_THRESHOLDS[4]);
