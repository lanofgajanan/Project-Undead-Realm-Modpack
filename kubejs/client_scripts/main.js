// ============================================================
// THE UNDEAD REALM — Client Scripts
// ============================================================

// Hide Superb Warfare guns from JEI (keep vehicles, explosives, utility)
RecipeViewerEvents.removeEntries('item', event => {
  // Hide all superbwarfare gun items
  event.remove(/superbwarfare:.*gun.*/)
  event.remove(/superbwarfare:.*rifle.*/)
  event.remove(/superbwarfare:.*pistol.*/)
  event.remove(/superbwarfare:.*sniper.*/)
  event.remove(/superbwarfare:.*smg.*/)
  event.remove(/superbwarfare:.*shotgun.*/)
  event.remove(/superbwarfare:.*lmg.*/)
  event.remove(/superbwarfare:.*minigun.*/)
  event.remove(/superbwarfare:.*rpg.*/)
  event.remove(/superbwarfare:.*javelin.*/)

  // Hide gun parts
  event.remove(/superbwarfare:.*barrel.*/)
  event.remove(/superbwarfare:.*stock.*/)
  event.remove(/superbwarfare:.*grip.*/)
  event.remove(/superbwarfare:.*receiver.*/)
  event.remove(/superbwarfare:.*scope.*/)

  // NOTE: Ammo is KEPT visible — vehicles use it
});
