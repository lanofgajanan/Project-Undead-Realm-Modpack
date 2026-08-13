# THE UNDEAD REALM — Skill Tree Design Document

## Architecture

- **9 classes total** (1 base + 8 specializations)
- **Remnant** = base class, everyone gets it, general stats
- **8 specializations** = exclusive (pick ONE), deep skill trees
- Each specialization has **10 paths**, player can only invest in **5**
- Each path goes **3 levels deep** with branching choices at level 2 and 3
- Some paths are shared across classes (reskinned)

## Class Exclusivity

All 8 specialization categories will have `"exclusive_root": true` in category.json.
This means unlocking one class root locks all others permanently.

---

## REMNANT (Base Class — Everyone)

**Unlocked by default. 11 skills. General survival buffs.**
**Max effect: ~1.25x everything**

Unchanged from current. Already has a proper tree with:
- Health (+4, +6)
- Speed (+0.01, +0.015)
- Damage (+1, +2)
- Mining Speed (+2, +4)
- Knockback Resist (+0.2)
- Luck (+2)

XP: Kill any mob (10-20), mine ores (3-15)

---

## GUNNER (Ranged DPS Specialist)

**Tag:** `class_gunner`
**Max specialty effect:** 1.5x ranged effectiveness (attack damage + attack speed)
**XP from:** Ranged kills (15 XP), killing at distance >15 blocks (25 XP), critical hits (10 XP)

### 10 Paths:

**1. Precision (Damage)**
- L1: Steady Aim → +2 attack damage
- L2A: Hollow Point → +3 attack damage
- L2B: FMJ Rounds → +2 attack damage + armor ignore (tag)
- L3A (from Hollow Point): Stopping Power → +4 attack damage
- L3B (from FMJ): Penetrator → +3 attack damage

**2. Fire Rate (Speed)**
- L1: Quick Trigger → +0.3 attack speed
- L2A: Rapid Fire → +0.4 attack speed
- L2B: Controlled Bursts → +0.2 attack speed + 1 attack damage
- L3A (from Rapid): Bullet Hose → +0.5 attack speed
- L3B (from Controlled): Marksman Rhythm → +0.3 attack speed + 1 damage

**3. Vitality (HP — shared)**
- L1: Bulletproof Vest → +4 HP
- L2A: Trauma Plates → +4 HP
- L2B: Adrenaline Shot → +2 HP + 0.01 speed
- L3A (from Plates): Hardened → +6 HP
- L3B (from Adrenaline): Combat High → +4 HP + 0.01 speed

**4. Resilience (Knockback — shared)**
- L1: Braced Stance → +0.15 knockback resist
- L2A: Immovable → +0.2 knockback resist
- L2B: Reactive Armor → +0.1 knockback resist + 2 HP

**5. Mobility**
- L1: Combat Roll → +0.01 move speed
- L2A: Sprint Reload → +0.015 move speed
- L2B: Low Profile → +0.01 move speed + 0.1 knockback resist

**6. Ammo Conservation**
- L1: Efficient Loader → tag `gunner_ammo_efficiency`
- L2A: Scavenger Rounds → +2 luck (find more ammo in loot)
- L2B: One Shot One Kill → +3 attack damage (make each bullet count)

**7. Tactical Awareness**
- L1: Spotter → +1 luck
- L2A: Eagle Eye → +2 attack damage
- L2B: Sixth Sense → +4 HP

**8. Endurance**
- L1: Marathon Runner → +0.01 move speed
- L2A: Iron Lungs → +0.015 move speed
- L2B: Thick Boots → +2 HP + 0.1 knockback resist

**9. Headhunter**
- L1: Weak Spot → +2 attack damage
- L2A: Execution → +4 attack damage
- L2B: Crippling Shot → +2 attack damage + 0.2 attack speed

**10. Warzone Veteran (Capstone)**
- L1: Battle Tested → +2 HP + 1 attack damage
- L2A: War Hero → +4 HP + 2 attack damage
- L2B: Cold Blooded → +3 attack damage + 0.2 attack speed

---

## BRAWLER (Melee Powerhouse)

**Tag:** `class_brawler`
**Max specialty effect:** 1.5x melee attack damage + attack speed
**XP from:** Melee kills only (20 XP), killing evolved+ mobs in melee (30 XP), taking damage and surviving (5 XP)

### 10 Paths:

**1. Iron Fist (Raw Damage)**
- L1: Heavy Hands → +2 attack damage
- L2A: Crushing Blow → +3 attack damage
- L2B: Sweeping Force → +2 attack damage + 0.1 knockback resist
- L3A (from Crushing): Skull Cracker → +4 attack damage
- L3B (from Sweeping): Cleave → +3 attack damage

**2. Bloodlust (Attack Speed)**
- L1: Quick Strike → +0.4 attack speed
- L2A: Frenzy → +0.5 attack speed
- L2B: Measured Strikes → +0.3 attack speed + 1 attack damage
- L3A (from Frenzy): Berserker Rage → +0.6 attack speed
- L3B (from Measured): Lethal Tempo → +0.4 attack speed + 2 damage

**3. Vitality (HP — shared)**
- L1: Thick Skin → +4 HP
- L2A: Iron Constitution → +4 HP
- L2B: Battle Scars → +2 HP + 0.01 speed
- L3A: Juggernaut → +6 HP
- L3B: War Machine → +4 HP + 0.01 speed

**4. Resilience (Knockback — shared)**
- L1: Planted Feet → +0.15 knockback resist
- L2A: Immovable Object → +0.25 knockback resist
- L2B: Counter Force → +0.15 knockback resist + 1 attack damage

**5. Agility (Speed — shared)**
- L1: Rush → +0.01 move speed
- L2A: Charge → +0.015 move speed
- L2B: Dodge → +0.01 move speed + 2 HP

**6. Rage (Damage escalation)**
- L1: Anger → +2 attack damage
- L2A: Fury → +3 attack damage
- L2B: Controlled Rage → +2 attack damage + 0.3 attack speed

**7. Armor Breaker**
- L1: Find Weakness → +1 attack damage
- L2A: Sunder → +3 attack damage (great vs armored infected)
- L2B: Expose → +2 attack damage + 1 luck

**8. Endurance**
- L1: Pain Tolerance → +4 HP
- L2A: Undying → +6 HP
- L2B: Second Wind → +4 HP + 0.01 speed

**9. Predator Instinct**
- L1: Hunter → +0.01 speed
- L2A: Apex → +0.015 speed + 1 attack damage
- L2B: Stalker → +0.01 speed + 0.15 knockback resist

**10. Primal Champion (Capstone)**
- L1: Warrior's Spirit → +2 attack damage + 2 HP
- L2A: Warlord → +4 attack damage + 4 HP
- L2B: Gladiator → +3 attack damage + 0.5 attack speed + 2 HP

---

## TECHNICIAN (Builder/Crafter)

**Tag:** `class_technician`
**Max specialty effect:** 1.5x mining/break speed + luck
**XP from:** Mining ores (15 XP), smelting items (5 XP), using crafting table (3 XP), mining diamonds/netherite (30 XP)

### 10 Paths:

**1. Efficiency (Break Speed)**
- L1: Quick Hands → +2 block break speed
- L2A: Power Drill → +3 block break speed
- L2B: Precision Cut → +2 block break speed + 1 luck
- L3A: Overclock → +4 block break speed
- L3B: Quality Cut → +2 break speed + 2 luck

**2. Resource Mastery (Luck)**
- L1: Keen Eye → +2 luck
- L2A: Fortune Finder → +3 luck
- L2B: Efficient Extraction → +2 luck + 1 break speed

**3. Vitality (HP — shared)**
- L1: Hard Hat → +4 HP
- L2A: Safety Gear → +4 HP
- L2B: Quick Reflexes → +2 HP + 0.01 speed

**4. Fortification (Knockback — shared)**
- L1: Anchored → +0.15 knockback resist
- L2A: Reinforced Frame → +0.2 knockback resist
- L2B: Counterweight → +0.1 knockback resist + 2 break speed

**5. Mobility (Speed — shared)**
- L1: Light Frame → +0.01 move speed
- L2A: Sprint → +0.015 move speed
- L2B: Nimble Fingers → +0.01 speed + 1 break speed

**6. Industrial Output**
- L1: Assembly Line → +2 block break speed
- L2A: Factory Floor → +3 block break speed
- L2B: Modular Tools → +2 break speed + 0.01 speed

**7. Salvage**
- L1: Scrapper → +1 luck
- L2A: Strip Miner → +2 luck + 1 break speed
- L2B: Recycler → +3 luck

**8. Structural Engineering**
- L1: Foundation → +4 HP
- L2A: Reinforced → +4 HP + 0.1 knockback resist
- L2B: Adaptive → +2 HP + 0.01 speed + 1 luck

**9. Automation**
- L1: Clockwork → +1 block break speed + 0.1 attack speed
- L2A: Overclock → +2 break speed + 0.2 attack speed
- L2B: Turret Mind → +2 attack damage + 1 break speed

**10. Master Engineer (Capstone)**
- L1: Genius → +2 break speed + 1 luck
- L2A: Innovator → +4 break speed + 2 luck
- L2B: Mad Inventor → +3 break speed + 3 luck + 2 HP

---

## MEDIC (Healer/Tank)

**Tag:** `class_medic`
**Max specialty effect:** 1.5x max health
**XP from:** Using golden apples/potions (20 XP), healing self from critical HP (15 XP), killing undead (12 XP)

### 10 Paths:

**1. Vitality (Primary HP)**
- L1: Healthy Body → +4 HP
- L2A: Peak Condition → +6 HP
- L2B: Balanced Health → +4 HP + 0.01 speed
- L3A: Pinnacle → +8 HP
- L3B: Athletic → +4 HP + 0.015 speed

**2. Triage (Secondary HP)**
- L1: First Response → +4 HP
- L2A: Emergency Care → +4 HP
- L2B: Quick Triage → +2 HP + 0.2 attack speed

**3. Resilience (Knockback — shared)**
- L1: Steady Stance → +0.15 knockback resist
- L2A: Unshakeable → +0.25 knockback resist
- L2B: Reactive Guard → +0.15 knockback resist + 2 HP

**4. Mobility (Speed — shared)**
- L1: Swift Response → +0.01 move speed
- L2A: Emergency Sprint → +0.015 move speed
- L2B: Nimble Healer → +0.01 speed + 2 HP

**5. Combat Medic**
- L1: Field Knife → +2 attack damage
- L2A: Surgical Strike → +3 attack damage
- L2B: Defensive Slash → +1 attack damage + 4 HP

**6. Immunity**
- L1: Strong Immune → +2 HP
- L2A: Disease Resistant → +4 HP
- L2B: Adaptive Biology → +2 HP + 1 luck

**7. Recovery**
- L1: Quick Healer → +2 HP
- L2A: Regenerative → +4 HP + 0.01 speed
- L2B: Persistent → +4 HP

**8. Toughness**
- L1: Dense Bones → +4 HP
- L2A: Unbreakable → +6 HP
- L2B: Flexible → +2 HP + 0.01 speed + 0.1 knockback resist

**9. Field Surgery**
- L1: Calm Hands → +0.2 attack speed
- L2A: Precision → +0.3 attack speed + 1 attack damage
- L2B: Steady → +0.2 attack speed + 2 HP

**10. Chief Medical Officer (Capstone)**
- L1: Veteran Healer → +4 HP + 0.01 speed
- L2A: Legendary Medic → +8 HP + 0.01 speed
- L2B: Living Legend → +6 HP + 0.015 speed + 2 attack damage

---

## GHOST (Stealth/Speed)

**Tag:** `class_ghost`
**Max specialty effect:** 1.5x movement speed
**XP from:** Killing mobs while sneaking (25 XP), killing without taking damage (20 XP), backstab kills (30 XP)

### 10 Paths:

**1. Shadow Speed (Primary Speed)**
- L1: Quick Step → +0.015 move speed
- L2A: Phantom Sprint → +0.02 move speed
- L2B: Flicker → +0.015 speed + 1 attack damage
- L3A: Untouchable → +0.02 move speed
- L3B: Deadly Flicker → +0.015 speed + 2 attack damage

**2. Blade Work (Damage)**
- L1: Sharp Edge → +2 attack damage
- L2A: Assassin's Mark → +3 attack damage
- L2B: Poison Blade → +2 attack damage + 1 luck
- L3A: Lethal → +4 attack damage
- L3B: Toxic → +3 attack damage + 1 luck

**3. Evasion (Dodge/HP)**
- L1: Dodge → +2 HP + 0.01 speed
- L2A: Roll → +2 HP + 0.015 speed
- L2B: Phase → +4 HP

**4. Agility (Speed — shared)**
- L1: Wind Step → +0.015 move speed
- L2A: Gale → +0.02 move speed
- L2B: Blur → +0.01 speed + 0.15 knockback resist

**5. Silent Kill (Attack Speed)**
- L1: Quick Blade → +0.4 attack speed
- L2A: Flash Steel → +0.5 attack speed
- L2B: Patient Strike → +0.3 attack speed + 2 attack damage

**6. Survivability**
- L1: Thin Profile → +2 HP
- L2A: Hard to Hit → +4 HP
- L2B: Slippery → +2 HP + 0.1 knockback resist

**7. Predator**
- L1: Stalk → +1 attack damage + 0.01 speed
- L2A: Ambush → +2 attack damage + 0.01 speed
- L2B: Patient Hunter → +1 attack damage + 0.02 speed

**8. Smoke & Mirrors**
- L1: Misdirection → +0.15 knockback resist
- L2A: Vanish → +0.2 knockback resist + 0.01 speed
- L2B: Decoy → +0.15 knockback resist + 2 HP

**9. Lightfoot**
- L1: Soft Landing → +0.01 move speed
- L2A: Cat's Grace → +0.015 move speed + 2 HP
- L2B: Featherweight → +0.02 move speed

**10. Wraith (Capstone)**
- L1: Shadow Form → +0.015 speed + 1 attack damage
- L2A: Death's Hand → +0.02 speed + 3 attack damage
- L2B: Phantom → +0.025 speed + 2 HP

---

## CHEMIST (Poison/DoT Specialist)

**Tag:** `class_chemist`
**Max specialty effect:** 1.5x attack damage (through DoT/potion synergy)
**XP from:** Brewing potions (20 XP), kills with poison/fire/wither active on target (25 XP), using splash potions (15 XP)

### 10 Paths:

**1. Toxicology (Damage)**
- L1: Reactive Agent → +2 attack damage
- L2A: Concentrated Dose → +3 attack damage
- L2B: Slow Burn → +2 attack damage + 0.2 attack speed
- L3A: Lethal Injection → +4 attack damage
- L3B: Corrosive → +3 attack damage + 1 luck

**2. Volatile Compounds (Attack Speed)**
- L1: Quick Mix → +0.3 attack speed
- L2A: Chain Reaction → +0.5 attack speed
- L2B: Measured Pour → +0.3 attack speed + 2 attack damage

**3. Lab Safety (HP — shared)**
- L1: Protective Gear → +4 HP
- L2A: Hazmat Suit → +4 HP
- L2B: Chemical Resistance → +2 HP + 0.15 knockback resist

**4. Mobility (Speed — shared)**
- L1: Light Feet → +0.01 move speed
- L2A: Stimulant → +0.015 move speed
- L2B: Adrenaline → +0.01 speed + 2 attack damage

**5. Plague Doctor**
- L1: Disease Knowledge → +1 luck + 1 attack damage
- L2A: Epidemic → +2 attack damage + 1 luck
- L2B: Quarantine → +2 HP + 2 luck

**6. Acidic Touch**
- L1: Corrosive Hands → +2 attack damage
- L2A: Meltdown → +3 attack damage
- L2B: Dissolve → +2 attack damage + 0.3 attack speed

**7. Fortitude**
- L1: Thick Blood → +4 HP
- L2A: Antibodies → +4 HP + 0.1 knockback resist
- L2B: Mutagen → +2 HP + 0.01 speed + 1 attack damage

**8. Alchemist**
- L1: Transmutation → +2 luck
- L2A: Philosopher → +3 luck
- L2B: Gold Touch → +2 luck + 2 attack damage

**9. Experimental Serum**
- L1: Test Subject → +2 HP + 1 attack damage
- L2A: Enhanced → +4 HP + 2 attack damage
- L2B: Overcharged → +2 HP + 3 attack damage + 0.2 attack speed

**10. Mad Scientist (Capstone)**
- L1: Eureka → +2 attack damage + 2 HP + 1 luck
- L2A: Genius Chemist → +4 attack damage + 4 HP
- L2B: Chaotic Formula → +5 attack damage + 0.3 attack speed

---

## RECON (Mobility/Exploration)

**Tag:** `class_recon`
**Max specialty effect:** 1.5x movement speed + vertical mobility
**XP from:** Killing phantoms (25 XP), kills from above (Y > target Y + 5) (20 XP), exploration (new chunks visited, 1 XP per 5 chunks)

### 10 Paths:

**1. Fleet Footed (Primary Speed)**
- L1: Quick March → +0.015 move speed
- L2A: Double Time → +0.02 move speed
- L2B: Scout's Pace → +0.015 speed + 2 HP
- L3A: Lightning → +0.02 move speed
- L3B: Endurance Runner → +0.015 speed + 4 HP

**2. Eagle Eye (Ranged Damage)**
- L1: Spotter → +2 attack damage
- L2A: Sharpshooter → +3 attack damage
- L2B: Tracker → +2 attack damage + 1 luck

**3. Survivalist (HP — shared)**
- L1: Wilderness Training → +4 HP
- L2A: Hardened Scout → +4 HP
- L2B: Adaptive → +2 HP + 0.01 speed

**4. Agility (Speed — shared)**
- L1: Parkour → +0.015 move speed
- L2A: Free Runner → +0.02 move speed
- L2B: Wall Jump → +0.015 speed + 0.1 knockback resist

**5. High Ground**
- L1: Elevation → +1 attack damage + 0.01 speed
- L2A: Overwatch → +2 attack damage + 0.01 speed
- L2B: Vantage Point → +1 attack damage + 0.02 speed

**6. Lightweight**
- L1: Unburdened → +0.01 move speed
- L2A: Featherweight → +0.015 move speed + 2 HP
- L2B: Minimalist → +0.02 move speed

**7. Pathfinder**
- L1: Trail Blazer → +2 luck
- L2A: Navigator → +3 luck
- L2B: Cartographer → +2 luck + 0.01 speed

**8. Quick Draw**
- L1: Fast Hands → +0.3 attack speed
- L2A: Snap Shot → +0.4 attack speed + 1 damage
- L2B: Hip Fire → +0.5 attack speed

**9. Resilience (Knockback — shared)**
- L1: Steady Footing → +0.15 knockback resist
- L2A: Anchored → +0.2 knockback resist
- L2B: Balanced → +0.1 knockback resist + 0.01 speed

**10. Skyborne (Capstone)**
- L1: Wings → +0.015 speed + 2 HP
- L2A: Ace Pilot → +0.025 speed + 4 HP
- L2B: Wind Rider → +0.02 speed + 2 attack damage + 2 HP

---

## BREACHER (Explosives/Heavy Assault)

**Tag:** `class_breacher`
**Max specialty effect:** 1.5x survivability (HP + knockback resist + armor)
**XP from:** Explosion kills (25 XP), destroying structures/blocks with TNT (10 XP), killing armored mobs (20 XP)

### 10 Paths:

**1. Blast Padding (Primary HP)**
- L1: Shock Absorber → +4 HP
- L2A: Blast Vest → +6 HP
- L2B: Reactive Plates → +4 HP + 0.15 knockback resist
- L3A: Walking Fortress → +8 HP
- L3B: Explosive Resistance → +4 HP + 0.25 knockback resist

**2. Demolition (Damage)**
- L1: Shaped Charge → +2 attack damage
- L2A: Breach & Clear → +3 attack damage
- L2B: Concussive Force → +2 attack damage + 0.2 knockback resist
- L3A: Payload → +4 attack damage
- L3B: Shockwave → +3 attack damage + 0.15 knockback resist

**3. Resilience (Knockback — shared)**
- L1: Hard Target → +0.2 knockback resist
- L2A: Immovable → +0.3 knockback resist
- L2B: Counterblast → +0.2 knockback resist + 2 attack damage

**4. Vitality (HP — shared)**
- L1: Reinforced Body → +4 HP
- L2A: Iron Frame → +6 HP
- L2B: Tough & Fast → +4 HP + 0.01 speed

**5. Heavy Lifter**
- L1: Strong Back → +0.01 move speed
- L2A: Load Bearer → +0.015 move speed
- L2B: Sprint Carry → +0.01 speed + 2 HP

**6. Munitions Expert**
- L1: Ordinance → +2 attack damage
- L2A: High Explosive → +3 attack damage + 1 luck
- L2B: Fragmentation → +2 attack damage + 0.3 attack speed

**7. Fortification**
- L1: Bunker Down → +4 HP
- L2A: Pillbox → +4 HP + 0.15 knockback resist
- L2B: Trench → +2 HP + 0.01 speed + 0.1 knockback resist

**8. Assault**
- L1: Point Man → +2 attack damage + 0.01 speed
- L2A: Battering Ram → +3 attack damage + 0.15 knockback resist
- L2B: Flash & Bang → +2 attack damage + 0.3 attack speed

**9. EOD (Explosive Ordnance)**
- L1: Bomb Suit → +4 HP
- L2A: Blast Proof → +6 HP
- L2B: Quick Defuse → +2 HP + 0.01 speed + 0.2 attack speed

**10. Siege Engine (Capstone)**
- L1: Heavy Hitter → +2 attack damage + 4 HP
- L2A: Juggernaut → +4 attack damage + 6 HP + 0.2 knockback resist
- L2B: Wrecking Ball → +5 attack damage + 4 HP + 0.01 speed

---

## Experience Sources (Logical, Not Free)

| Class | Primary XP Source | Secondary XP Source | NOT Allowed |
|-------|-------------------|--------------------|----|
| Remnant | Kill any mob (10-20) | Mine ores (3-15) | — |
| Gunner | Ranged kills (15) | Kills >15 blocks away (25) | Block breaking |
| Brawler | Melee kills (20) | Killing evolved+ in melee (30) | Ranged kills |
| Technician | Mining ores (15) | Mining diamonds (30) | Killing mobs |
| Medic | Kill undead (12) | Using golden apples (20) | Block breaking |
| Ghost | Sneak kills (25) | No-damage kills (20) | Block breaking |
| Chemist | Kills with status effects (25) | Brewing (20) | Block breaking |
| Recon | Kill phantoms (25) | Kills from height (20) | Block breaking |
| Breacher | Explosion kills (25) | Kill armored mobs (20) | Block breaking |

---

## Starter Kit Function Status

The `starter_kits.js` properly checks for class tags and gives appropriate gear.
Each class root skill grants the tag via `puffish_skills:command` → `tag {player} add class_X`.
This integrates correctly with the kit system.

---

## Implementation Notes

- Total nodes: 580 (Gunner 70 + Brawler 70 + Ghost 70 + Technician 70 + Medic 70 + Chemist 70 + Recon 70 + Breacher 70 + Remnant 11 + Class picks 9)
- All 8 classes fully designed with markdown definitions
- Gunner + Recon use TACZ attributes (gun_damage, recoil, reload_speed, ads_damage, ads_accuracy, gun_movement_speed)
- Brawler + Ghost use attack_speed + attack_damage + movement_speed
- Medic + Breacher use max_health (heavy) + knockback_resistance + armor_toughness
- Technician uses block_break_speed + luck
- Chemist uses attack_damage + attack_speed + luck
- All TACZ attributes confirmed working with puffish_skills 0.18.0
- Connections format: object-based with normal.bidirectional, normal.unidirectional, exclusive.bidirectional
- Experience: `get_dropped_experience * 3` for all classes

## Markdown Files (Ready to merge into JSON)

- `BRAWLER_SKILL_TREE.md` — 70 nodes, prefix `b_`
- `GHOST_SKILL_TREE.md` — 70 nodes, prefix `gh_`
- `TECHNICIAN_SKILL_TREE.md` — 70 nodes, prefix `t_`
- `MEDIC_SKILL_TREE.md` — 70 nodes, prefix `m_`
- `CHEMIST_SKILL_TREE.md` — 70 nodes, prefix `ch_`
- `RECON_SKILL_TREE.md` — 70 nodes, prefix `rc_`
- `BREACHER_SKILL_TREE.md` — 70 nodes, prefix `br_`

## Layout Centers (Bullseye circular, no overlap)

| Class | Center Position | Quadrant |
|-------|----------------|----------|
| Gunner | (-600, -300) | Upper-left |
| Brawler | (-600, 600) | Lower-left |
| Ghost | (900, 300) | Right |
| Technician | (150, -900) | Upper-center |
| Medic | (400, -300) | Upper-right |
| Chemist | (150, 400) | Center-bottom |
| Recon | (-150, 400) | Center-bottom-left |
| Breacher | (-400, 300) | Left-center |

## Status

### Done:
- ✅ All 8 class tree markdown files generated
- ✅ PR/AC system rewritten with debug logging + entity-mismatch detection
- ✅ Starter kit timing fixed (100-tick grace period, 5-min drifter delay)
- ✅ Gunner class fully merged into puffish_skills JSON (using TACZ attributes)
- ✅ Brawler, Ghost, Technician merged into puffish_skills JSON
- ✅ Superb Warfare guns removed
- ✅ Day/night recalibrated
- ✅ Spore balance tuned
- ✅ Survival mods eased

### Next Steps:
1. Test PR/AC system — check KubeJS logs for debug output
2. Test starter kit delivery after class selection
3. Merge Medic, Chemist, Recon, Breacher into unified definitions.json/skills.json/connections.json
4. Test full 8-class skill tree in-game
5. Remove debug logging from armor_penetration_system.js once confirmed working
