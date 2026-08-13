# THE UNDEAD REALM — Gun vs. Mob Damage Balance Sheet

## TACZ GUN DAMAGE VALUES (from gun pack data)

| Gun | Caliber | Base DMG | Armor Ignore | Headshot Mult | Pierce | RPM | Weight | Category |
|-----|---------|----------|--------------|---------------|--------|-----|--------|----------|
| Glock 17 | 9mm | 6 | 0% | 1.5x | 1 | 400 | 1 kg | Pistol |
| M1911 | .45 ACP | ~7 | ~10% | 1.5x | 1 | ~350 | ~1.2 kg | Pistol |
| M9A4 | 9mm | ~6.5 | ~5% | 1.5x | 1 | ~400 | ~1 kg | Pistol |
| P320 | 9mm | ~6 | ~5% | 1.5x | 1 | ~400 | ~1 kg | Pistol |
| CZ75 | 9mm | ~6 | 0% | 1.5x | 1 | ~400 | ~1 kg | Pistol |
| B93R | 9mm | ~5.5 | 0% | 1.25x | 1 | ~900(burst) | ~1 kg | Pistol |
| Desert Eagle | .50 AE | ~12 | ~20% | 1.5x | 2 | ~250 | ~2 kg | Pistol |
| Taurus 500 | .500 S&W | ~14 | ~25% | 2x | 2 | ~180 | ~2 kg | Revolver |
| Rhino 357 | .357 Mag | ~10 | ~15% | 1.75x | 1 | ~300 | ~1.5 kg | Revolver |
| Uzi | 9mm | 6.5 | 15% | 1.25x | 1 | 600 | 4 kg | SMG |
| MP5A5 | 9mm | ~7 | ~10% | 1.25x | 1 | ~800 | ~3 kg | SMG |
| P90 | 5.7x28 | ~7 | ~20% | 1.25x | 1 | ~900 | ~3 kg | SMG |
| UMP45 | .45 ACP | ~7.5 | ~10% | 1.25x | 1 | ~600 | ~3.5 kg | SMG |
| Vector .45 | .45 ACP | ~7 | ~10% | 1.25x | 1 | ~1100 | ~3 kg | SMG |
| AK-47 | 7.62x39 | 9 | 25% | 1.5x | 1 | 600 | 3.5 kg | Rifle |
| M4A1 | 5.56x45 | 6.5 | 20% | 1.5x | 1 | 810 | 3.5 kg | Rifle |
| HK416D | 5.56x45 | ~7 | ~20% | 1.5x | 1 | ~850 | ~3.5 kg | Rifle |
| SCAR-L | 5.56x45 | ~7 | ~20% | 1.5x | 1 | ~750 | ~3.5 kg | Rifle |
| SCAR-H | 7.62x51 | ~10 | ~30% | 1.5x | 2 | ~600 | ~4 kg | Battle Rifle |
| FN FAL | 7.62x51 | ~10 | ~30% | 1.5x | 2 | ~650 | ~4.5 kg | Battle Rifle |
| HK G3 | 7.62x51 | ~10.5 | ~30% | 1.5x | 2 | ~550 | ~4.5 kg | Battle Rifle |
| MK14 | 7.62x51 | ~11 | ~35% | 2x | 2 | ~450 | ~5 kg | DMR |
| M700 | .30-06 | 24 | 50% | 2x | 2 | 180 | 6.5 kg | Sniper |
| Kar98 | 7.92x57 | ~22 | ~45% | 2x | 2 | ~40 | ~4 kg | Sniper |
| AI AWP | .338 Lapua | ~30 | ~55% | 2x | 3 | ~40 | ~7 kg | Sniper |
| M95 | .50 BMG | ~45 | ~60% | 2x | 4 | ~30 | ~12 kg | Anti-Materiel |
| M107 | .50 BMG | 55 | 50% | 1.5x | 5 | 400(semi) | 10.5 kg | Anti-Materiel |
| M249 | 5.56x45 | ~7 | ~20% | 1.25x | 1 | ~750 | ~7 kg | LMG |
| FN Evolys | 5.56x45 | ~7 | ~20% | 1.25x | 1 | ~700 | ~6 kg | LMG |
| RPK | 7.62x39 | ~8.5 | ~25% | 1.25x | 1 | ~600 | ~5 kg | LMG |
| Minigun | 7.62x51 | ~5 | ~15% | 1x | 1 | ~3000 | ~20 kg | Heavy |
| AA-12 | 12 gauge | ~3x8 | ~5% | 1x | 0 | ~300 | ~5 kg | Shotgun |
| M870 | 12 gauge | ~4x8 | ~5% | 1x | 0 | ~60 | ~3.5 kg | Shotgun |
| SPAS-12 | 12 gauge | ~3.5x8 | ~5% | 1x | 0 | ~180 | ~4 kg | Shotgun |
| M1014 | 12 gauge | ~3.5x8 | ~5% | 1x | 0 | ~200 | ~4 kg | Shotgun |
| DB Long | 12 gauge | ~5x8 | ~10% | 1x | 0 | ~120 | ~3 kg | Shotgun |
| RPG-7 | Rocket | EXPLOSIVE | 99% | N/A | N/A | ~10 | ~7 kg | Launcher |
| M320 | 40mm | EXPLOSIVE | 99% | N/A | N/A | ~15 | ~2 kg | Launcher |

*Note: Values marked with ~ are estimates based on caliber patterns. Confirmed values from actual JSON files are without ~.*

---

## SPORE MOB STATS (from spore-startup.toml)

### Tier 0 — Fodder (Regular Infected)

| Mob | HP | DMG | Armor | Armor Class (proposed) |
|-----|-----|-----|-------|------------------------|
| Infected Human | ~20 | ~5 | ~2 | AC 2 |
| Infected Drowned | 16 | 5 | 1 | AC 1 |
| Infected Pillager | 20 | 6 | 2 | AC 2 |
| Infected Husk | ~20 | ~5 | ~2 | AC 2 |
| Infected Villager | ~20 | ~5 | ~2 | AC 2 |

### Tier 1 — Evolved

| Mob | HP | DMG | Armor | Armor Class (proposed) |
|-----|-----|-----|-------|------------------------|
| Howler | 32 | 5 | 4 | AC 5 |
| Infected Evoker | 35 | 7 | 4 | AC 5 |
| Infected Vindicator | 28 | 7 | 4 | AC 5 |
| Scavenger | 25 | 7 | 4 | AC 5 |
| Gargoyle | 35 | 8 | 6 | AC 7 |
| Phayres | 35 | 6 | 10 | AC 10 |

### Tier 2 — Hyper Evolved

| Mob | HP | DMG | Armor | Armor Class (proposed) |
|-----|-----|-----|-------|------------------------|
| Brute | 70 | 7 | 15 | AC 15 |
| Wendigo | 75 | 15 | 8 | AC 10 |
| Axtwerfer | 80 | 18 | 7 | AC 9 |
| Brotkatze | 70 | 15 | 5 | AC 7 |
| Groberfub | 85 | 15 | 8 | AC 10 |
| Inquisitor | 60 | 20 | 7 | AC 9 |
| Ogre | 100 | 20 | 12 | AC 14 |

### Tier 3 — Experiments / Mini-Bosses

| Mob | HP | DMG | Armor | Dmg Cap | Armor Class (proposed) |
|-----|-----|-----|-------|---------|------------------------|
| Proto Hivemind | 100 | 10 | 10 | 20 | AC 12 |
| Infested Construct | 60 | 15 | 10 | — | AC 12 |
| Vigil | 60 | — | 5 | — | AC 7 |
| Umarmer | 70 | 8 | 6 | — | AC 8 |
| Braurei | 80 | — | 6 | — | AC 8 |

### Tier 4 — Calamities (BOSSES)

| Mob | HP | DMG | Armor | Dmg Cap | Armor Class (proposed) |
|-----|-----|-----|-------|---------|------------------------|
| Sieger | 300 | 30 | 25 | 70 | AC 25 |
| Stahlmorder | 200 | 35 | 10 | 50 | AC 20 |
| Hohlfresser | 250 | 20 | 25 | 50 | AC 25 |
| Gazenbrecher | 350 | 25 | 15 | 100 | AC 18 |
| Grakensenker | 400 | 15 | 15 | 100 | AC 18 |
| Leviathan | 450 | 30 | 25 | 100 | AC 25 |
| Howitzer | 500 | 15 | 10 | 100 | AC 15 |
| Hindenburg | 400 | 15 | 5 | 40 | AC 8 |

---

## TIERED DAMAGE SYSTEM (v3) — Realistic Penetration

### How It Works (Based on TACZ armor_ignore data):

Every TACZ gun has a built-in `armor_ignore` value. Higher caliber = higher penetration.
The system uses **damage amount** as a proxy for caliber (they correlate perfectly).
TACZ FMJ ammo mod multiplies armor_ignore by 1.5-1.75x (less damage, more pen).

### Thresholds:
- **Tier 2 (Hyper Evolved)**: damage > 5 to penetrate
- **Tier 3 (Experiments)**: damage > 7 to penetrate
- **Tier 4 (Calamities)**: damage > 12 to penetrate

### Partial Penetration:
- Well above threshold (1.5x+): 100% damage
- Comfortably above (1.3x): 85% damage
- Just above threshold: 65% damage (bullet lost energy punching through)
- Below threshold: BLOCKED (0% damage)

### What This Means Per Gun:

| Gun | Base DMG | armor_ignore | vs Tier 2 (>5) | vs Tier 3 (>7) | vs Tier 4 (>12) |
|-----|----------|-------------|----------------|----------------|-----------------|
| Glock 17 | 6 | 0.00 | ✅ 65% (just above) | ❌ BLOCKED | ❌ BLOCKED |
| M9A4 | 6.5 | 0.00 | ✅ 65% | ❌ BLOCKED | ❌ BLOCKED |
| M1911 | 7 | 0.20 | ✅ 85% | ❌ BLOCKED | ❌ BLOCKED |
| Rhino 357 | 10 | 0.30 | ✅ 100% | ✅ 85% | ❌ BLOCKED |
| Lonetrail | 12 | 0.40 | ✅ 100% | ✅ 100% | ❌ BLOCKED |
| Taurus 943 | 8 | 0.30 | ✅ 100% | ✅ 65% | ❌ BLOCKED |
| Deagle | 12 | 0.20 | ✅ 100% | ✅ 100% | ❌ BLOCKED |
| Timeless50 | 14 | 0.50 | ✅ 100% | ✅ 100% | ✅ 65% |
| MP5 | 7 | 0.15 | ✅ 85% | ❌ BLOCKED | ❌ BLOCKED |
| P90 | 7 | 0.70 | ✅ 85% | ❌ BLOCKED | ❌ BLOCKED |
| UZI | 6.5 | 0.15 | ✅ 65% | ❌ BLOCKED | ❌ BLOCKED |
| UMP45 | 7.5 | 0.15 | ✅ 85% | ✅ 65% | ❌ BLOCKED |
| AK-47 | 9 | 0.25 | ✅ 100% | ✅ 85% | ❌ BLOCKED |
| M4A1 | 6.5 | 0.20 | ✅ 65% | ❌ BLOCKED | ❌ BLOCKED |
| SCAR-L | 7 | 0.20 | ✅ 85% | ❌ BLOCKED | ❌ BLOCKED |
| SCAR-H | 10 | 0.50 | ✅ 100% | ✅ 85% | ❌ BLOCKED |
| HK G3 | 10.5 | 0.50 | ✅ 100% | ✅ 100% | ❌ BLOCKED |
| FN FAL | 10 | 0.50 | ✅ 100% | ✅ 85% | ❌ BLOCKED |
| MK14 | 11 | 0.50 | ✅ 100% | ✅ 100% | ❌ BLOCKED |
| M700 | 24 | 0.50 | ✅ 100% | ✅ 100% | ✅ 100% |
| Kar98 | 22 | 0.40 | ✅ 100% | ✅ 100% | ✅ 100% |
| AI AWP | 30 | 0.60 | ✅ 100% | ✅ 100% | ✅ 100% |
| M95 | 45 | 0.75 | ✅ 100% | ✅ 100% | ✅ 100% |
| M107 | 55 | 0.50 | ✅ 100% | ✅ 100% | ✅ 100% |
| Minigun | 5 | 0.50 | ❌ BLOCKED | ❌ BLOCKED | ❌ BLOCKED |
| M249 | 7 | 0.30 | ✅ 85% | ❌ BLOCKED | ❌ BLOCKED |
| RPK | 8.5 | 0.25 | ✅ 100% | ✅ 85% | ❌ BLOCKED |
| RPG-7 | EXPLOSIVE | N/A | ✅ BYPASS | ✅ BYPASS | ✅ BYPASS |

### How FMJ Ammo Helps:
FMJ mod reduces damage by 10% but increases armor_ignore by 1.5-1.75x.
Example: AK-47 with FMJ → 8.1 damage (9 * 0.9). Still above Tier 3 threshold of 7.
SCAR-H with FMJ → 9 damage (10 * 0.9). Still above Tier 3 threshold.
MK14 with FMJ → 9.9 damage (11 * 0.9). Still above Tier 3.

For Tier 4: SCAR-H+FMJ = 9 damage → still blocked. Need snipers/heavy for Calamities.
But: Timeless50 (14 dmg) → with FMJ = 12.6 → just above 12 → penetrates Tier 4 at 65%!

### Design Philosophy:
- **Realistic caliber gating** — 9mm physically cannot penetrate hardened chitin
- **High-caliber pistols (Rhino, Lonetrail, Deagle, Taurus) work against Tier 2-3** — they're powerful handguns
- **Battle rifles (7.62x51) are the backbone** — reliable against everything except Calamities
- **Snipers/.50 BMG are the boss-killers** — expensive ammo, slow fire rate, but penetrate everything
- **FMJ ammo gives an edge** — lets borderline guns punch above their weight
- **Melee ALWAYS works with bonus** — Brawler stays king of close combat at all tiers

### Standard Ammo — Effective Damage Per Shot (OLD REFERENCE)

| Gun | vs AC 2 (Fodder) | vs AC 5 (Evolved) | vs AC 10 (Hyper) | vs AC 15 (Brute/Ogre) | vs AC 20 (Stahlmorder) | vs AC 25 (Sieger/Hohlfresser) |
|-----|---|---|---|---|---|---|
| Glock 17 (PR 4) | 6 ✅ | 4 ✅ | **0 BLOCKED** | **0 BLOCKED** | **0 BLOCKED** | **0 BLOCKED** |
| Uzi (PR 5) | 6.5 ✅ | 5 ✅ | **0 BLOCKED** | **0 BLOCKED** | **0 BLOCKED** | **0 BLOCKED** |
| AK-47 (PR 10) | 9 ✅ | 9 ✅ | 7 ✅ | **0 BLOCKED** | **0 BLOCKED** | **0 BLOCKED** |
| M4A1 (PR 10) | 6.5 ✅ | 6.5 ✅ | 5 ✅ | **0 BLOCKED** | **0 BLOCKED** | **0 BLOCKED** |
| SCAR-H (PR 14) | 10 ✅ | 10 ✅ | 8 ✅ | 6 ✅ | **0 BLOCKED** | **0 BLOCKED** |
| M700 (PR 18) | 24 ✅ | 24 ✅ | 20 ✅ | 16 ✅ | 12 ✅ | **0 BLOCKED** |
| M107 (PR 22) | 55 ✅ | 55 ✅ | 45 ✅ | 38 ✅ | 30 ✅ | **0 BLOCKED** |
| RPG-7 (PR 99) | EXPLODE ✅ | EXPLODE ✅ | EXPLODE ✅ | EXPLODE ✅ | EXPLODE ✅ | EXPLODE ✅ |

### AP Ammo — Effective Damage Per Shot (+8 to +12 PR)

| Gun + AP | vs AC 2 | vs AC 5 | vs AC 10 | vs AC 15 | vs AC 20 | vs AC 25 |
|----------|---|---|---|---|---|---|
| Glock 17 AP (PR 12) | 6 ✅ | 6 ✅ | 5 ✅ | **0 BLOCKED** | **0 BLOCKED** | **0 BLOCKED** |
| AK-47 AP (PR 18) | 9 ✅ | 9 ✅ | 9 ✅ | 7 ✅ | 5 ✅ | **0 BLOCKED** |
| M4A1 AP (PR 18) | 6.5 ✅ | 6.5 ✅ | 6.5 ✅ | 5.5 ✅ | 4 ✅ | **0 BLOCKED** |
| SCAR-H AP (PR 22) | 10 ✅ | 10 ✅ | 10 ✅ | 8 ✅ | 7 ✅ | 5 ✅ |
| M700 AP (PR 28) | 24 ✅ | 24 ✅ | 24 ✅ | 20 ✅ | 18 ✅ | 14 ✅ |
| M107 AP (PR 32) | 55 ✅ | 55 ✅ | 55 ✅ | 45 ✅ | 40 ✅ | 35 ✅ |

### Melee Weapons — Always Penetrate (No PR system, use vanilla damage formula)

| Weapon | Base DMG | vs All Tiers |
|--------|----------|---|
| Iron Sword | 6 | Always damages ✅ (reduced by armor normally) |
| Diamond Sword | 7 | Always damages ✅ |
| Netherite Axe | 10 | Always damages ✅ |
| Spore Bio-Sword (crafted) | 12+ | Always damages ✅ + bonus vs infected |
| Better Weaponry Rapier | 5 (fast) | Always damages ✅ |

---

## KILL TIME COMPARISON (shots/hits to kill)

### vs. Sieger (300 HP, AC 25, Dmg Cap 70)

| Weapon | Ammo Type | Can Damage? | Effective DMG/hit | Shots to Kill | Feasibility |
|--------|-----------|-------------|-------------------|---------------|-------------|
| Glock 17 | Standard | ❌ NO | 0 | ∞ | Impossible |
| Glock 17 | AP | ❌ NO | 0 | ∞ | Impossible |
| AK-47 | Standard | ❌ NO | 0 | ∞ | Impossible |
| AK-47 | AP | ❌ NO | 0 | ∞ | Impossible |
| SCAR-H | AP | ✅ YES | ~5 | ~60 shots | Very expensive |
| M700 | Standard | ❌ NO | 0 | ∞ | Impossible |
| M700 | AP | ✅ YES | ~14 | ~22 shots | Expensive |
| M107 | Standard | ❌ NO | 0 | ∞ | Impossible |
| M107 | AP | ✅ YES | ~35 (capped 70) | ~5 shots | Rare ammo |
| RPG-7 | Rocket | ✅ YES | 70 (capped) | ~5 rockets | Very rare |
| Netherite Axe | N/A | ✅ YES | ~6 (after armor) | ~50 hits | Risky but free |
| Spore Bio-Weapon | N/A | ✅ YES | ~10 (bonus) | ~30 hits | Reward loop |

### vs. Hohlfresser (250 HP, AC 25, Dmg Cap 50)

| Weapon | Ammo Type | Can Damage? | Effective DMG/hit | Shots to Kill | Feasibility |
|--------|-----------|-------------|-------------------|---------------|-------------|
| Glock 17 | Any | ❌ NO | 0 | ∞ | FIXED! No longer possible |
| AK-47 | AP | ❌ NO | 0 | ∞ | Cannot penetrate |
| SCAR-H | AP | ✅ YES | ~5 | ~50 shots | Magazine dump |
| M700 | AP | ✅ YES | ~14 | ~18 shots | Feasible |
| M107 | AP | ✅ YES | ~35 (capped 50) | ~5 shots | Rare |
| RPG-7 | Rocket | ✅ YES | 50 (capped) | ~5 rockets | |
| Netherite Axe | N/A | ✅ YES | ~5 | ~50 hits | |

---

## SUPERB WARFARE — REMOVE GUNS, KEEP VEHICLES

Superb Warfare adds overpowered modern weapons (Barrett, AK variants, etc.) that overlap with TACZ guns and can't be balanced with this system easily.

### Removal Strategy (via KubeJS)

```javascript
// kubejs/server_scripts/remove_superbwarfare_guns.js
// Remove all Superb Warfare gun items from recipes and hide from JEI
// Keep vehicles, explosives, and utility items

ServerEvents.recipes(event => {
  // Remove ALL superbwarfare gun crafting recipes
  event.remove({ mod: 'superbwarfare', type: 'minecraft:crafting_shaped' })
  event.remove({ mod: 'superbwarfare', type: 'minecraft:crafting_shapeless' })
  // Keep vehicle recipes by re-adding them if needed
})

// Hide from JEI
JEIEvents.hideItems(event => {
  // Hide all superbwarfare guns and ammo
  event.hide(/superbwarfare:.*gun.*/)
  event.hide(/superbwarfare:.*rifle.*/)
  event.hide(/superbwarfare:.*pistol.*/)
  event.hide(/superbwarfare:.*sniper.*/)
  event.hide(/superbwarfare:.*ammo.*/)
  // Keep vehicles, C4, grenades, mines, armor plates visible
})
```

**Alternative approach:** Set `spawn_mob_with_guns = false` (already done), and simply don't include Superb Warfare guns in loot tables or recipes. Players will only have access to TACZ guns which are properly balanced by this system.

**Or nuclear option:** Remove the superbwarfare mod entirely and rely only on TACZ for firearms. The vehicles from Superb Warfare might not be worth the balance headache.

---

## IMPLEMENTATION PRIORITY

1. **Remove/disable Superb Warfare guns** (keep vehicles if you want them)
2. **Implement PR vs AC system** in KubeJS damage event
3. **Create AP ammo recipes** in KubeJS (expensive crafting)
4. **Adjust Spore Global Armor Modifier** to 1.5x to boost all mob armor
5. **Test and tune** the AC thresholds

---

## NOTES

- Minecraft's vanilla armor formula: `damage_taken = damage * (1 - min(20, max(armor / 5, armor - damage / (2 + toughness / 4))) / 25)`
- TACZ `armor_ignore` percentage bypasses a portion of this calculation
- The PR system would be checked BEFORE vanilla armor calculation
- Explosives always bypass PR (they're area damage, different system)
- Melee always bypasses PR (biological weapons cut through chitin regardless of hardness)
