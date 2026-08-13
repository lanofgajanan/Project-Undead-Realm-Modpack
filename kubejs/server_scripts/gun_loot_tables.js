// ============================================================
// THE UNDEAD REALM — Tiered Gun Loot Table System
// ============================================================
// Injects TACZ guns, ammo, and attachments into structure chests.
// Tier system: Common (villages) → Mid (dungeons) → Top (strongholds)
// Higher-tier chests also roll lower-tier loot (cascading).
//
// EXCLUDED from all loot: M249, RPK, Minigun, AI AWP, M107, M95,
//   M700, Kar98, RPG7, Golden Desert Eagle
// ============================================================

LootJS.modifiers(event => {

  // ─── GUN DEFINITIONS ────────────────────────────────────────
  const commonGuns = [
    { id: 'tacz:glock_17',  ammo: 'tacz:9mm',    mode: 'SEMI' },
    { id: 'tacz:m1911',     ammo: 'tacz:45acp',  mode: 'SEMI' },
    { id: 'tacz:cz75',      ammo: 'tacz:9mm',    mode: 'SEMI' },
    { id: 'tacz:m9a4',      ammo: 'tacz:9mm',    mode: 'SEMI' },
    { id: 'tacz:m870',      ammo: 'tacz:12g',    mode: 'SEMI' },
    { id: 'tacz:db_short',  ammo: 'tacz:12g',    mode: 'SEMI' },
    { id: 'tacz:db_long',   ammo: 'tacz:12g',    mode: 'SEMI' },
    { id: 'tacz:spas_12',   ammo: 'tacz:12g',    mode: 'SEMI' }
  ];

  const uncommonGuns = [
    { id: 'tacz:ump45',     ammo: 'tacz:45acp',  mode: 'AUTO' },
    { id: 'tacz:hk_mp5a5',  ammo: 'tacz:9mm',    mode: 'AUTO' },
    { id: 'tacz:p90',       ammo: 'tacz:57x28',  mode: 'AUTO' },
    { id: 'tacz:vector45',  ammo: 'tacz:45acp',  mode: 'AUTO' },
    { id: 'tacz:uzi',       ammo: 'tacz:9mm',    mode: 'AUTO' },
    { id: 'tacz:taurus943', ammo: 'tacz:357mag', mode: 'SEMI' }
  ];

  const topGuns = [
    { id: 'tacz:m4a1',   ammo: 'tacz:556x45',  mode: 'AUTO' },
    { id: 'tacz:ak47',   ammo: 'tacz:762x39',  mode: 'AUTO' },
    { id: 'tacz:scar_l', ammo: 'tacz:556x45',  mode: 'AUTO' }
  ];

  // ─── ATTACHMENT DEFINITIONS ─────────────────────────────────
  const commonAttachments = [
    'tacz:grip_vertical_military',
    'tacz:grip_vertical_talon',
    'tacz:grip_td',
    'tacz:sight_coyote',
    'tacz:sight_t1',
    'tacz:sight_t2'
  ];

  const uncommonAttachments = [
    'tacz:scope_acog_ta31',
    'tacz:scope_lpvo_1_6',
    'tacz:stock_moe',
    'tacz:stock_sba3',
    'tacz:extended_mag_1'
  ];

  const rareAttachments = [
    'tacz:muzzle_silencer_knight_qd',
    'tacz:muzzle_silencer_mirage',
    'tacz:muzzle_silencer_phantom_s1',
    'tacz:muzzle_silencer_ptilopsis',
    'tacz:muzzle_silencer_ursus',
    'tacz:muzzle_silencer_vulture',
    'tacz:muzzle_silencer_wraith',
    'tacz:muzzle_silencer_sg'
  ];

  const ultraRareAttachments = [
    'tacz:ammo_mod_fmj',
    'tacz:ammo_mod_hp',
    'tacz:ammo_mod_he',
    'tacz:ammo_mod_i',
    'tacz:ammo_mod_slug'
  ];

  // ─── AMMO POOLS PER TIER ───────────────────────────────────
  const commonAmmo = [
    { id: 'tacz:9mm',    min: 16, max: 24 },
    { id: 'tacz:45acp',  min: 12, max: 20 },
    { id: 'tacz:12g',    min: 8,  max: 12 },
    { id: 'tacz:357mag', min: 8,  max: 12 }
  ];

  const midAmmo = [
    { id: 'tacz:9mm',    min: 24, max: 36 },
    { id: 'tacz:45acp',  min: 20, max: 30 },
    { id: 'tacz:12g',    min: 12, max: 16 },
    { id: 'tacz:308',    min: 6,  max: 10 },
    { id: 'tacz:357mag', min: 10, max: 16 }
  ];

  const topAmmo = [
    { id: 'tacz:556x45', min: 30, max: 60 },
    { id: 'tacz:308',    min: 10, max: 20 },
    { id: 'tacz:9mm',    min: 30, max: 48 },
    { id: 'tacz:45acp',  min: 24, max: 36 }
  ];

  // ─── LOOT TABLE TARGETS ────────────────────────────────────
  const commonChests = [
    'minecraft:chests/village/village_weaponsmith',
    'minecraft:chests/village/village_armorer',
    'minecraft:chests/village/village_toolsmith',
    'minecraft:chests/village/village_shepherd',
    'minecraft:chests/village/village_butcher',
    'minecraft:chests/village/village_tannery',
    'minecraft:chests/village/village_temple',
    'minecraft:chests/village/village_plains_house',
    'minecraft:chests/village/village_desert_house',
    'minecraft:chests/village/village_savanna_house',
    'minecraft:chests/village/village_snowy_house',
    'minecraft:chests/village/village_taiga_house',
    'minecraft:chests/abandoned_mineshaft'
  ];

  const midChests = [
    'minecraft:chests/simple_dungeon',
    'minecraft:chests/desert_pyramid',
    'minecraft:chests/jungle_temple',
    'minecraft:chests/pillager_outpost'
  ];

  const topChests = [
    'minecraft:chests/stronghold_corridor',
    'minecraft:chests/stronghold_crossing',
    'minecraft:chests/woodland_mansion',
    'minecraft:chests/end_city_treasure',
    'minecraft:chests/bastion_treasure'
  ];

  // ─── HELPER: Add gun + ammo loot to tables ─────────────────
  function addGunLoot(tables, gunPool, ammoMin, ammoMax, chance) {
    tables.forEach(table => {
      event.addTableModifier(table).customAction((context, loot) => {
        if (Math.random() > chance) return;
        let gun = gunPool[Math.floor(Math.random() * gunPool.length)];
        let ammoCount = Math.floor(Math.random() * (ammoMax - ammoMin + 1)) + ammoMin;
        loot.addItem(
          Item.of('tacz:modern_kinetic_gun[custom_data={GunId:"' + gun.id + '",GunFireMode:"' + gun.mode + '"}]')
        );
        loot.addItem(
          Item.of('tacz:ammo[custom_data={AmmoId:"' + gun.ammo + '"}]').withCount(ammoCount)
        );
      });
    });
  }

  // ─── HELPER: Add standalone ammo loot ──────────────────────
  function addAmmoLoot(tables, ammoPool, chance) {
    tables.forEach(table => {
      event.addTableModifier(table).customAction((context, loot) => {
        if (Math.random() > chance) return;
        let ammo = ammoPool[Math.floor(Math.random() * ammoPool.length)];
        let count = Math.floor(Math.random() * (ammo.max - ammo.min + 1)) + ammo.min;
        loot.addItem(
          Item.of('tacz:ammo[custom_data={AmmoId:"' + ammo.id + '"}]').withCount(count)
        );
      });
    });
  }

  // ─── HELPER: Add attachment loot ───────────────────────────
  function addAttachmentLoot(tables, attachPool, chance) {
    tables.forEach(table => {
      event.addTableModifier(table).customAction((context, loot) => {
        if (Math.random() > chance) return;
        let att = attachPool[Math.floor(Math.random() * attachPool.length)];
        loot.addItem(
          Item.of('tacz:attachment[custom_data={AttachmentId:"' + att + '"}]')
        );
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // COMMON TIER — Villages & Mineshafts
  // ═══════════════════════════════════════════════════════════
  addGunLoot(commonChests, commonGuns, 8, 16, 0.25);        // 25% pistol/shotgun + ammo
  addAmmoLoot(commonChests, commonAmmo, 0.50);               // 50% standalone ammo
  addAttachmentLoot(commonChests, commonAttachments, 0.30);  // 30% grip/sight

  // ═══════════════════════════════════════════════════════════
  // MID TIER — Dungeons, Pyramids, Temples, Outposts
  // ═══════════════════════════════════════════════════════════
  // Own tier
  addGunLoot(midChests, uncommonGuns, 16, 32, 0.20);          // 20% SMG + ammo
  addAmmoLoot(midChests, midAmmo, 0.45);                       // 45% mid-tier ammo
  addAttachmentLoot(midChests, uncommonAttachments, 0.25);     // 25% scope/stock/mag

  // Cascaded Common tier
  addGunLoot(midChests, commonGuns, 8, 16, 0.25);             // 25% pistol/shotgun
  addAttachmentLoot(midChests, commonAttachments, 0.30);       // 30% grip/sight

  // ═══════════════════════════════════════════════════════════
  // TOP TIER — Strongholds, Mansions, End Cities, Bastions
  // ═══════════════════════════════════════════════════════════
  // Own tier
  addGunLoot(topChests, topGuns, 30, 60, 0.40);               // 40% assault rifle + ammo
  addAmmoLoot(topChests, topAmmo, 0.60);                       // 60% top-tier ammo
  addAttachmentLoot(topChests, rareAttachments, 0.20);         // 20% silencer
  addAttachmentLoot(topChests, ultraRareAttachments, 0.10);    // 10% ammo mod (ultra rare)

  // Cascaded Uncommon tier
  addGunLoot(topChests, uncommonGuns, 16, 32, 0.20);          // 20% SMG
  addAttachmentLoot(topChests, uncommonAttachments, 0.25);     // 25% scope/stock

  // Cascaded Common tier
  addGunLoot(topChests, commonGuns, 8, 16, 0.25);             // 25% pistol/shotgun
  addAttachmentLoot(topChests, commonAttachments, 0.30);       // 30% grip/sight

});
