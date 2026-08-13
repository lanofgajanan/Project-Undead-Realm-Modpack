# NEXT SESSION: Full Skill Tree Rework

## Task
Completely rework all 8 class skill trees for THE UNDEAD REALM modpack. The current trees are bland — every node is just a stat modifier (attribute +0.X). The new trees should have unique abilities, on-kill effects, conditional bonuses, and interesting choices.

## Modpack Location
`d:\Gajanan\project undead realm\UNDEAD REALM MODPACK\`

## Skill Tree Files Location
`UNDEAD REALM MODPACK\kubejs\data\puffish_skills\puffish_skills\categories\`

Each class has:
- `definitions.json` — skill names, descriptions, icons, rewards
- `skills.json` — node positions (x, y coordinates)
- `connections.json` — how nodes connect (unidirectional links)

## File Format (from existing gunner tree)

### definitions.json entry:
```json
{
  "g_a1": {
    "title": "Quick Scope",
    "description": "Snap to sights in a heartbeat.",
    "frame": { "type": "advancement", "data": { "frame": "task" } },
    "icon": { "type": "item", "data": { "item": "minecraft:spyglass" } },
    "rewards": [
      {
        "type": "puffish_skills:attribute",
        "data": { "attribute": "tacz_attributes:ads_speed", "value": 0.15, "operation": "multiply_base" }
      }
    ],
    "cost": 1
  }
}
```

### skills.json entry:
```json
{
  "g_p1": { "x": 0, "y": 0, "definition": "g_p1", "root": true },
  "g_p2a": { "x": 180, "y": -50, "definition": "g_p2a" },
  "g_p2b": { "x": 180, "y": 50, "definition": "g_p2b" }
}
```

### connections.json:
```json
{
  "normal": {
    "bidirectional": [],
    "unidirectional": [
      ["g_p1", "g_p2a"],
      ["g_p1", "g_p2b"],
      ["g_p2a", "g_p3aa"],
      ["g_p2a", "g_p3ab"]
    ]
  }
}
```

## Reward Types Available
1. `puffish_skills:attribute` — stat modifiers (vanilla + tacz_attributes)
2. `puffish_skills:tag` — gives player a tag (checked by KubeJS for abilities)
3. `puffish_skills:command` — runs a command (effects, items, etc.)

## Available Attributes
### TACZ gun attributes:
- tacz_attributes:gun_damage
- tacz_attributes:ads_speed
- tacz_attributes:ads_damage
- tacz_attributes:ads_accuracy
- tacz_attributes:hip_fire_damage
- tacz_attributes:hip_fire_accuracy
- tacz_attributes:headshot_multiplier
- tacz_attributes:pierce_multiplier
- tacz_attributes:gun_movement_speed
- tacz_attributes:reload_speed
- tacz_attributes:recoil
- tacz_attributes:horizontal_recoil
- tacz_attributes:magazine_capacity
- tacz_attributes:rpm_multiplier

### Vanilla attributes:
- minecraft:generic.max_health
- minecraft:generic.movement_speed
- minecraft:generic.attack_damage
- minecraft:generic.attack_speed
- minecraft:generic.armor
- minecraft:generic.armor_toughness
- minecraft:generic.knockback_resistance
- minecraft:generic.luck

## Tree Structure (KEEP SAME)
- 10 paths per class, labeled a-j (or similar)
- Each path: L1 (root) → L2a / L2b (branch) → L3aa / L3ab / L3ba / L3bb (capstones)
- 7 nodes per path, total 70 nodes per class
- Players get 21 skill points max (can fill 7 of 10 paths... wait no)

Actually the structure is:
- 10 paths, each with: 1 root → 2 branches → 4 capstones = 7 nodes
- But players only get 21 points = enough for 3 full paths OR mix-and-match

## Node ID Naming Convention
- Gunner: `g_a1`, `g_a2a`, `g_a2b`, `g_a3aa`, `g_a3ab`, `g_a3ba`, `g_a3bb` (path a)
- Brawler: `b_a1`, etc.
- Technician: `t_a1`, etc.
- Medic: `m_a1`, etc.
- Ghost: `gh_a1`, etc.
- Chemist: `c_a1`, etc.
- Recon: `r_a1`, etc.
- Breacher: `br_a1`, etc.

## The 8 Classes to Rework
1. **Gunner** — Ranged DPS (TACZ gun specialist)
2. **Brawler** — Melee Tank (attack damage, attack speed, armor)
3. **Technician** — Builder/Miner (block break speed, luck, crafting)
4. **Medic** — Healer/Tank (max health, regen, team support)
5. **Ghost** — Stealth/Speed (movement, attack speed, stealth)
6. **Chemist** — Poison/DoT (attack damage, luck, potion effects)
7. **Recon** — Mobile Sniper (ADS damage, gun movement, range)
8. **Breacher** — Heavy Assault (health, knockback resist, armor, explosives)

## Design Philosophy for New Trees
Each path should have a THEME, not just "more of the same stat":
- Mix stat bonuses with unique abilities
- Capstone nodes (L3) should feel powerful and game-changing
- Use `puffish_skills:tag` for KubeJS-powered abilities
- Use `puffish_skills:command` for effects (night vision, fire res, etc.)
- Branch choices should offer distinct playstyles

## Example Ability Ideas
- On-kill heal (tag: `gunner_lifesteal` → KubeJS checks on entity death)
- Explosive headshots (tag → KubeJS spawns small explosion on headshot kill)
- Sprint reload (attribute: reload_speed bonus)
- Iron skin (damage resistance when standing still)
- Adrenaline (speed boost at low HP — tag + KubeJS tick check)
- Night stalker (permanent night vision — command gives effect)
- Ammo scavenger (on-kill gives ammo — command)
- Last stand (invulnerability for 3 sec at 1 HP — tag + KubeJS)

## Companion Script Needed
Create `kubejs/server_scripts/skill_abilities.js` that checks player tags every tick/on-event and applies the active ability effects.

## What NOT to Change
- `class_picker` category — leave as-is
- `remnant` / `skills` (drifter) categories — leave as-is
- `experience.json` — leave as-is
- `category.json` — leave as-is

## Previous Session Summary
Today we completed: gun loot tables, villager trades (MoreJS), wandering trader ammo/vehicles, Saturday blood moon raids, pillager gun nerf script, player guide, server pack creation.
