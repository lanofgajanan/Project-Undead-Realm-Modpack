# How to Add a Skill Tree to Pufferfish's Skills (v0.18.0, NeoForge 1.21.1)

## Overview

This guide documents the EXACT working format for Pufferfish's Skills 0.18.0 on NeoForge 1.21.1, tested and confirmed working in THE UNDEAD REALM modpack.

---

## File Locations

For modpacks using KubeJS as a global datapack loader:

```
kubejs/data/puffish_skills/puffish_skills/
├── config.json              ← lists all category IDs
├── categories/
│   └── your_category/
│       ├── category.json    ← tab appearance
│       ├── definitions.json ← skill definitions (rewards, descriptions, icons)
│       ├── skills.json      ← skill positions (x, y coordinates)
│       ├── connections.json ← links between skills (normal + exclusive)
│       └── experience.json  ← XP sources (optional)
```

Also keep an empty config at:
```
config/puffish_skills/config.json
```
With `"categories": []` — the datapack handles everything.

---

## Step 1: config.json (Root Level)

```json
{
  "version": 3,
  "categories": [
    "skills"
  ]
}
```

- `version`: Always `3`
- `categories`: Array of category folder names

---

## Step 2: category.json

```json
{
  "unlocked_by_default": true,
  "title": "Skills",
  "icon": {
    "type": "item",
    "data": {
      "item": "minecraft:nether_star"
    }
  },
  "background": "minecraft:textures/block/deepslate.png"
}
```

- `unlocked_by_default`: `true` = visible immediately, `false` = needs unlocking
- `exclusive_root`: `true` = only one root skill can be unlocked (use for class selection within a category)
- `title`: Tab name shown in UI
- `icon`: Item shown on the tab
- `background`: Texture used as background

---

## Step 3: definitions.json

Each entry defines a skill's appearance, rewards, and cost.

```json
{
  "my_skill_id": {
    "title": "Skill Name",
    "description": "What this skill does.",
    "frame": {
      "type": "advancement",
      "data": {
        "frame": "task"
      }
    },
    "icon": {
      "type": "item",
      "data": {
        "item": "minecraft:diamond_sword"
      }
    },
    "rewards": [
      {
        "type": "puffish_skills:attribute",
        "data": {
          "attribute": "minecraft:generic.attack_damage",
          "value": 2,
          "operation": "addition"
        }
      }
    ],
    "cost": 1
  }
}
```

### Frame Types
- `"task"` — square border (basic skills)
- `"goal"` — rounded border (intermediate)
- `"challenge"` — spiked border (powerful/capstone)

### Reward Types

**Attribute reward:**
```json
{
  "type": "puffish_skills:attribute",
  "data": {
    "attribute": "minecraft:generic.max_health",
    "value": 4,
    "operation": "addition"
  }
}
```

Operations: `"addition"` (flat add), `"multiply_base"` (percentage), `"multiply_total"` (final multiplier)

**Command reward:**
```json
{
  "type": "puffish_skills:command",
  "data": {
    "command": "tag {player} add class_gunner"
  }
}
```

### Valid Vanilla Attributes
- `minecraft:generic.max_health`
- `minecraft:generic.movement_speed`
- `minecraft:generic.attack_damage`
- `minecraft:generic.attack_speed`
- `minecraft:generic.knockback_resistance`
- `minecraft:generic.armor_toughness`
- `minecraft:generic.luck`
- `minecraft:player.block_break_speed`

### TACZ Attributes (requires tacz_attributes mod)
- `tacz_attributes:gun_damage`
- `tacz_attributes:recoil`
- `tacz_attributes:vertical_recoil`
- `tacz_attributes:horizontal_recoil`
- `tacz_attributes:reload_speed`
- `tacz_attributes:draw_speed`
- `tacz_attributes:ads_speed`
- `tacz_attributes:rpm_multiplier`
- `tacz_attributes:gun_movement_speed`
- `tacz_attributes:magazine_capacity`
- `tacz_attributes:ammo_save_chance` (use "addition" not "multiply_base")
- `tacz_attributes:pierce_multiplier`
- `tacz_attributes:headshot_multiplier`
- `tacz_attributes:auto_damage`
- `tacz_attributes:semi_damage`
- `tacz_attributes:ads_damage`
- `tacz_attributes:hip_fire_damage`
- `tacz_attributes:hip_fire_accuracy`
- `tacz_attributes:ads_accuracy`
- `tacz_attributes:bolt_action_speed`
- `tacz_attributes:knockback_multiplier`

### Optional Definition Properties
- `"cost": 1` — points required to unlock (default 1)
- `"cost": 0` — free (auto-unlock when available)
- `"required_exclusions": 1` — number of exclusive neighbors needed to exclude this skill

---

## Step 4: skills.json

Defines positions and root status.

```json
{
  "my_skill_id": {
    "x": 0,
    "y": 0,
    "definition": "my_skill_id",
    "root": true
  },
  "child_skill": {
    "x": 100,
    "y": 50,
    "definition": "child_skill"
  }
}
```

- `x`, `y`: Position on the skill screen (pixels)
- `definition`: Must match a key in definitions.json
- `root`: `true` makes this skill available from the start (no parent needed)

### Layout Tips
- Space nodes at least 50px apart to avoid overlap
- Use 100px between rows for readability
- For bullseye/circular: place L1 at radius 120, L2 at 240, L3 at 360 from center

---

## Step 5: connections.json (CRITICAL — v0.18.0 Format)

**THIS IS THE FORMAT THAT WORKS. The old array format `[["a","b"]]` does NOT work in 0.18.0.**

```json
{
  "normal": {
    "bidirectional": [
      ["skill_a", "skill_b"]
    ],
    "unidirectional": [
      ["parent", "child"]
    ]
  },
  "exclusive": {
    "bidirectional": [
      ["choice_a", "choice_b"]
    ]
  }
}
```

### Connection Types

**Normal Bidirectional** — both skills can unlock each other
```json
["class_root", "pick_gunner"]
```
Use for: class root → class pick connections (player can see all options)

**Normal Unidirectional** — only the first skill can unlock the second
```json
["pick_gunner", "g_precision_1"]
```
Use for: ALL skill tree paths (parent → child flow, no backtracking)

**Exclusive Bidirectional** — unlocking one LOCKS the other permanently
```json
["pick_gunner", "pick_brawler"]
```
Use for: class picks (choose one), fork choices (pick A or B)

### Common Patterns

**Class exclusivity (8 classes, all pairs):**
```json
"exclusive": {
  "bidirectional": [
    ["pick_gunner", "pick_brawler"],
    ["pick_gunner", "pick_technician"],
    ... (all 28 pairs for 8 classes)
  ]
}
```

**Fork choice (L2a vs L2b):**
```json
"exclusive": { "bidirectional": [["skill_2a", "skill_2b"]] }
```

---

## Step 6: experience.json (Optional)

```json
{
  "experience_per_level": {
    "type": "expression",
    "data": {
      "expression": "min(level ^ 1.3 * 50 + 20, 3000)"
    }
  },
  "sources": [
    {
      "type": "puffish_skills:kill_entity",
      "data": {
        "variables": {
          "dropped_xp": {
            "operations": [
              {
                "type": "get_dropped_experience"
              }
            ]
          }
        },
        "experience": "dropped_xp * 3"
      }
    }
  ]
}
```

### What Works in 0.18.0 / 0.17.3
- ✅ `get_dropped_experience` operation
- ✅ Simple math expressions (`dropped_xp * 3`, `min(...)`)
- ❌ `test_entity_type` (NOT a valid operation in 0.17.3)
- ❌ `if()` function in expressions (NOT valid)
- ❌ `conditions` array format (old/deprecated)

---

## Common Errors and Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `Expected index 0 to be an array` | Using old `[["a","b"]]` connections format | Use object format: `{"normal": {"bidirectional": [...]}}` |
| `Expected a valid operation type` | Using `test_entity_type` in experience sources | Use `get_dropped_experience` only |
| `Unknown variable 'if'` | Using `if()` in experience expressions | Use simple math: `dropped_xp * 3` |
| `Category already exists` | Same category in both config/ AND kubejs/data/ | Use ONLY kubejs/data/, set config categories to `[]` |
| `Could not read file` | Categories listed in config.json but folder missing from config/ | Either put files in config/ OR use empty `[]` and put in kubejs/data/ |
| `Resource does not exist` | Datapack files missing | Ensure kubejs/data/puffish_skills/puffish_skills/categories/NAME/ has all 4 files |
| `Unknown attribute` | Attribute ID wrong or mod not loaded | Check attribute ID spelling, ensure mod (tacz_attributes) is installed |
| `There doesn't seem to be anything here` | Config or datapack failed to load | Check latest.log for specific error |

---

## Complete Minimal Working Example

### config.json
```json
{ "version": 3, "categories": ["combat"] }
```

### categories/combat/category.json
```json
{
  "unlocked_by_default": true,
  "title": "Combat",
  "icon": { "type": "item", "data": { "item": "minecraft:iron_sword" } },
  "background": "minecraft:textures/block/stone.png"
}
```

### categories/combat/definitions.json
```json
{
  "root": {
    "title": "Fighter",
    "description": "Begin your combat training.",
    "frame": { "type": "advancement", "data": { "frame": "task" } },
    "icon": { "type": "item", "data": { "item": "minecraft:iron_sword" } },
    "rewards": [],
    "cost": 0
  },
  "strength": {
    "title": "Strength",
    "description": "+1 Attack Damage",
    "frame": { "type": "advancement", "data": { "frame": "task" } },
    "icon": { "type": "item", "data": { "item": "minecraft:diamond_sword" } },
    "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }]
  },
  "speed": {
    "title": "Speed",
    "description": "+0.01 Movement Speed",
    "frame": { "type": "advancement", "data": { "frame": "task" } },
    "icon": { "type": "item", "data": { "item": "minecraft:feather" } },
    "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }]
  }
}
```

### categories/combat/skills.json
```json
{
  "root": { "x": 0, "y": 0, "definition": "root", "root": true },
  "strength": { "x": -80, "y": -80, "definition": "strength" },
  "speed": { "x": 80, "y": -80, "definition": "speed" }
}
```

### categories/combat/connections.json
```json
{
  "normal": {
    "unidirectional": [
      ["root", "strength"],
      ["root", "speed"]
    ]
  }
}
```

### categories/combat/experience.json
```json
{
  "experience_per_level": { "type": "expression", "data": { "expression": "50 * level + 20" } },
  "sources": [{ "type": "puffish_skills:kill_entity", "data": { "variables": { "xp": { "operations": [{ "type": "get_dropped_experience" }] } }, "experience": "xp * 2" } }]
}
```

---

## Checklist Before Testing

- [ ] All skill IDs in definitions.json match IDs in skills.json
- [ ] All skill IDs in connections.json exist in both definitions.json AND skills.json
- [ ] Connections format is object-based (`{"normal": {...}, "exclusive": {...}}`)
- [ ] At least one skill has `"root": true` in skills.json
- [ ] Config categories array is `[]` (empty) if using kubejs/data/ path
- [ ] No trailing commas in JSON
- [ ] Attribute IDs are spelled correctly (check mod is loaded)
- [ ] Frame data is `{ "frame": "task" }` not just `"task"` string
