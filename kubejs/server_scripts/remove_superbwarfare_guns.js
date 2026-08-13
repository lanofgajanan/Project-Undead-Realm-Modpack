// ============================================================
// THE UNDEAD REALM — Remove Superb Warfare Guns (Keep Vehicles/Explosives)
// ============================================================
// Superb Warfare guns are too powerful and overlap with TACZ.
// This removes all gun recipes and hides them from JEI.
// Vehicles, C4, grenades, mines, armor plates are kept.
// ============================================================

ServerEvents.recipes(event => {
  // Remove ALL superbwarfare weapon-related recipes
  // We target specific result IDs rather than blanket-removing the whole mod

  // Gun items to remove (all firearms)
  const gunsToRemove = [
    'superbwarfare:ak_47',
    'superbwarfare:m4',
    'superbwarfare:hk_416',
    'superbwarfare:scar_h',
    'superbwarfare:scar_l',
    'superbwarfare:m16',
    'superbwarfare:qbz_95',
    'superbwarfare:famas',
    'superbwarfare:aug',
    'superbwarfare:g36',
    'superbwarfare:m249',
    'superbwarfare:rpk',
    'superbwarfare:pkm',
    'superbwarfare:mg42',
    'superbwarfare:mp5',
    'superbwarfare:ump45',
    'superbwarfare:p90',
    'superbwarfare:vector',
    'superbwarfare:uzi',
    'superbwarfare:mac_10',
    'superbwarfare:m870',
    'superbwarfare:aa12',
    'superbwarfare:spas_12',
    'superbwarfare:m1014',
    'superbwarfare:glock_17',
    'superbwarfare:glock_18',
    'superbwarfare:m1911',
    'superbwarfare:desert_eagle',
    'superbwarfare:p226',
    'superbwarfare:m9',
    'superbwarfare:awm',
    'superbwarfare:m98b',
    'superbwarfare:svd',
    'superbwarfare:kar98k',
    'superbwarfare:mosin',
    'superbwarfare:m700',
    'superbwarfare:barrett',
    'superbwarfare:m82',
    'superbwarfare:minigun',
    'superbwarfare:rpg',
    'superbwarfare:javelin',
    'superbwarfare:m79'
  ];

  // Remove recipes that output these guns
  gunsToRemove.forEach(gun => {
    event.remove({ output: gun });
  });

  // Remove gun part recipes (barrels, stocks, etc.)
  event.remove({ output: /superbwarfare:.*barrel.*/ });
  event.remove({ output: /superbwarfare:.*stock.*/ });
  event.remove({ output: /superbwarfare:.*grip.*/ });
  event.remove({ output: /superbwarfare:.*receiver.*/ });
  event.remove({ output: /superbwarfare:.*scope.*/ });

  // NOTE: We KEEP these (don't remove):
  // - Vehicles (tanks, helicopters, etc.)
  // - C4, claymores, grenades, mines
  // - Armor plates
  // - Charging station and utility blocks
  // - ALL AMMO (vehicles use it)
});
