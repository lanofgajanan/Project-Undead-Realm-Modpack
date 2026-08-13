# GHOST CLASS SKILL TREE

## 1. DEFINITIONS

```json
"gh_ss1": {
  "title": "Shadow Sprint",
  "description": "+0.015 Movement Speed. You learned to run in silence — bare feet on broken glass without a sound.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:black_dye" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.015, "operation": "addition" } }],
  "cost": 1
},
"gh_ss2a": {
  "title": "Midnight Dash",
  "description": "+0.02 Movement Speed. Darkness is your highway. You blur between shadows like smoke on the wind.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:coal" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.02, "operation": "addition" } }],
  "cost": 1
},
"gh_ss2b": {
  "title": "Quicksilver Step",
  "description": "+0.01 Movement Speed, +0.3 Attack Speed. Fast feet feed fast hands. Strike before they know you're there.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_nugget" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }],
  "cost": 1
},
"gh_ss3aa": {
  "title": "Phantom Velocity",
  "description": "+0.025 Movement Speed. You move so fast the infected can't track you. A ghost on the wind.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:phantom_membrane" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.025, "operation": "addition" } }],
  "cost": 1
},
"gh_ss3ab": {
  "title": "Blur",
  "description": "+0.018 Movement Speed, +2 Max Health. Speed is survival. You outrun death itself, and it keeps you alive.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:sugar" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.018, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_ss3ba": {
  "title": "Razor Wind",
  "description": "+0.5 Attack Speed. Your blade moves with your momentum — a cutting gale that shreds the dead.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:breeze_rod" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.5, "operation": "addition" } }],
  "cost": 1
},
"gh_ss3bb": {
  "title": "Speed Demon",
  "description": "+0.015 Movement Speed, +0.4 Attack Speed. Velocity incarnate. Every step is a strike, every stride a kill.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:firework_rocket" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.015, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.4, "operation": "addition" } }],
  "cost": 1
},

"gh_bw1": {
  "title": "Blade Work",
  "description": "+0.3 Attack Speed. You've honed your dagger technique on a thousand shambling targets.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_sword" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }],
  "cost": 1
},
"gh_bw2a": {
  "title": "Twin Fangs",
  "description": "+0.5 Attack Speed. Two blades, two cuts, one heartbeat. Dual wielding perfected through apocalypse.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:shears" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.5, "operation": "addition" } }],
  "cost": 1
},
"gh_bw2b": {
  "title": "Serrated Edge",
  "description": "+0.2 Attack Speed, +2 Attack Damage. A jagged blade that tears on the way out. Maximum damage per cut.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:flint" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_bw3aa": {
  "title": "Scissor Strike",
  "description": "+0.8 Attack Speed. Blades cross and uncross in a blur. Heads separate from shoulders before bodies fall.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_sword" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.8, "operation": "addition" } }],
  "cost": 1
},
"gh_bw3ab": {
  "title": "Viper Flurry",
  "description": "+0.6 Attack Speed, +1 Attack Damage. Fast as a snake's tongue — each strike venomous and precise.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:spider_eye" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.6, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"gh_bw3ba": {
  "title": "Hemorrhage",
  "description": "+3 Attack Damage. One deep cut in the right place. The infected don't bleed out but they sure fall apart.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:red_dye" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"gh_bw3bb": {
  "title": "Death of a Thousand Cuts",
  "description": "+2 Attack Damage, +0.4 Attack Speed. Fast, sharp, relentless. They decompose faster than they regenerate.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:diamond_sword" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.4, "operation": "addition" } }],
  "cost": 1
},

"gh_ev1": {
  "title": "Evasion",
  "description": "+0.01 Movement Speed. Dodge, duck, weave. You flow around attacks like water around stone.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:feather" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }],
  "cost": 1
},
"gh_ev2a": {
  "title": "Slip Away",
  "description": "+0.015 Movement Speed. Grabbing hands close on empty air. You were there a moment ago — now you're not.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:ender_pearl" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.015, "operation": "addition" } }],
  "cost": 1
},
"gh_ev2b": {
  "title": "Deflect",
  "description": "+0.008 Movement Speed, +0.1 Knockback Resistance. Redirect force rather than absorb it. An aikido of the apocalypse.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:shield" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }],
  "cost": 1
},
"gh_ev3aa": {
  "title": "Untouchable",
  "description": "+0.02 Movement Speed. They swing, you're gone. A phantom that exists between moments of violence.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:rabbit_foot" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.02, "operation": "addition" } }],
  "cost": 1
},
"gh_ev3ab": {
  "title": "Ghost Step",
  "description": "+0.012 Movement Speed, +2 Max Health. Move like you're already dead — weightless, formless, unkillable.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:glass" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.012, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_ev3ba": {
  "title": "Iron Mist",
  "description": "+0.15 Knockback Resistance. You absorb impacts like fog absorbs light — present but immovable.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:chain" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }],
  "cost": 1
},
"gh_ev3bb": {
  "title": "Phase Shift",
  "description": "+0.1 Knockback Resistance, +0.01 Movement Speed. Exist partially in another place. Hits pass through you like you're not quite real.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:chorus_fruit" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }],
  "cost": 1
},

"gh_ws1": {
  "title": "Wind Step",
  "description": "+0.012 Movement Speed. Each step carries you further than physics allows. The wind is your ally.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:white_banner" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.012, "operation": "addition" } }],
  "cost": 1
},
"gh_ws2a": {
  "title": "Gale Runner",
  "description": "+0.018 Movement Speed. Carried by currents the dead can't feel. You surf the apocalypse winds.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:elytra" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.018, "operation": "addition" } }],
  "cost": 1
},
"gh_ws2b": {
  "title": "Tailwind Strike",
  "description": "+0.008 Movement Speed, +1 Attack Damage. The wind at your back adds force to every swing.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:arrow" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"gh_ws3aa": {
  "title": "Tempest Walker",
  "description": "+0.022 Movement Speed. You ARE the storm — chaotic, swift, impossible to predict or catch.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:lightning_rod" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.022, "operation": "addition" } }],
  "cost": 1
},
"gh_ws3ab": {
  "title": "Zephyr Blade",
  "description": "+0.012 Movement Speed, +2 Attack Damage. Wind-guided strikes that find gaps in bone and sinew.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:trident" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.012, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_ws3ba": {
  "title": "Hurricane Force",
  "description": "+2 Attack Damage. Your strikes carry the weight of a gale. Rotting limbs scatter like leaves.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:wind_charge" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_ws3bb": {
  "title": "Cyclone",
  "description": "+1 Attack Damage, +0.015 Movement Speed. A spinning vortex of blade and motion. Enter the eye and find only death.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:prismarine_shard" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.015, "operation": "addition" } }],
  "cost": 1
},

"gh_sk1": {
  "title": "Silent Kill",
  "description": "+2 Attack Damage. One strike from the shadows. They never hear you, never see you, never rise again.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_sword" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_sk2a": {
  "title": "Throat Cutter",
  "description": "+3 Attack Damage. Aim for the spine. Even the undead need a nervous system — sever it.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:bone" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"gh_sk2b": {
  "title": "Ambush Predator",
  "description": "+1 Attack Damage, +0.3 Attack Speed. Patience, then explosion. You strike like a coiled spring releasing.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:tripwire_hook" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }],
  "cost": 1
},
"gh_sk3aa": {
  "title": "Decapitator",
  "description": "+4 Attack Damage. One perfect arc. The head tumbles before the body knows it's dead — again.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:wither_skeleton_skull" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"gh_sk3ab": {
  "title": "Vital Strike",
  "description": "+3 Attack Damage, +0.005 Movement Speed. Target the critical point, close the distance instantly, end it.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:ender_eye" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"gh_sk3ba": {
  "title": "Rapid Execution",
  "description": "+0.5 Attack Speed. Kill, move, kill, move. A rhythm of silent death that clears rooms in seconds.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:clock" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.5, "operation": "addition" } }],
  "cost": 1
},
"gh_sk3bb": {
  "title": "Reaper's Tempo",
  "description": "+2 Attack Damage, +0.3 Attack Speed. Death has a rhythm and you've mastered its beat. Swing, kill, repeat.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_axe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }],
  "cost": 1
},

"gh_sv1": {
  "title": "Survivability",
  "description": "+2 Max Health. You've survived longer than most. Scar tissue and instinct keep you breathing.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_apple" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_sv2a": {
  "title": "Cockroach Tenacity",
  "description": "+4 Max Health. Can't squash what refuses to die. You keep crawling back no matter what.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:fermented_spider_eye" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"gh_sv2b": {
  "title": "Shadow Armor",
  "description": "+2 Max Health, +0.1 Knockback Resistance. Darkness wraps around you like a second skin. It absorbs what you can't dodge.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:leather_chestplate" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }],
  "cost": 1
},
"gh_sv3aa": {
  "title": "Nine Lives",
  "description": "+6 Max Health. You've cheated death so many times it feels personal. Ninth time's the charm.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:totem_of_undying" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 6, "operation": "addition" } }],
  "cost": 1
},
"gh_sv3ab": {
  "title": "Resilient Shadow",
  "description": "+4 Max Health, +0.005 Movement Speed. Tough enough to take a hit, fast enough to not take a second.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:obsidian" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"gh_sv3ba": {
  "title": "Unyielding Phantom",
  "description": "+0.15 Knockback Resistance. Anchored in shadow. Blows pass through your form without displacing you.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:crying_obsidian" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }],
  "cost": 1
},
"gh_sv3bb": {
  "title": "Deathless",
  "description": "+3 Max Health, +0.1 Knockback Resistance. Beyond mortal fragility. You exist in the space between alive and not.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:respawn_anchor" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }],
  "cost": 1
},

"gh_ph1": {
  "title": "Predator Hunt",
  "description": "+1 Attack Damage, +0.005 Movement Speed. You stalk the dead like prey. The hunter becomes the apex.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:wolf_armor" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"gh_ph2a": {
  "title": "Stalker's Patience",
  "description": "+2 Attack Damage. Wait for the perfect moment. One strike, one kill, zero wasted effort.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:fermented_spider_eye" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_ph2b": {
  "title": "Chase Down",
  "description": "+0.015 Movement Speed. Once you lock on, nothing escapes. You run prey to ground like a wolf.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:lead" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.015, "operation": "addition" } }],
  "cost": 1
},
"gh_ph3aa": {
  "title": "Assassin's Mark",
  "description": "+3 Attack Damage. You see weak points others miss — joints, fractures, exposed vertebrae. Every hit is critical.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:spectral_arrow" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"gh_ph3ab": {
  "title": "Kill Confirmed",
  "description": "+2 Attack Damage, +2 Max Health. Each kill validates your method. Stronger, more confident, more lethal.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:experience_bottle" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_ph3ba": {
  "title": "Sprint Killer",
  "description": "+0.02 Movement Speed. Close the gap in a heartbeat. They hear footsteps and then nothing else — ever.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:rabbit_foot" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.02, "operation": "addition" } }],
  "cost": 1
},
"gh_ph3bb": {
  "title": "Apex Phantom",
  "description": "+2 Attack Damage, +0.01 Movement Speed. Top of the shadow food chain. Nothing outruns or outlasts you.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:dragon_head" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }],
  "cost": 1
},

"gh_sm1": {
  "title": "Smoke Screen",
  "description": "+0.1 Knockback Resistance. Vanish into the haze. When they can't see you, they can't touch you.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:campfire" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }],
  "cost": 1
},
"gh_sm2a": {
  "title": "Fog of War",
  "description": "+0.15 Knockback Resistance. You move within a personal shroud. The dead grasp blindly and find nothing.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:cobweb" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }],
  "cost": 1
},
"gh_sm2b": {
  "title": "Choking Cloud",
  "description": "+0.1 Knockback Resistance, +1 Attack Damage. Strike from within the haze. They choke while you cut.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:soul_campfire" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"gh_sm3aa": {
  "title": "Total Concealment",
  "description": "+0.2 Knockback Resistance. Invisible to all senses. You're a void in their perception — untargetable.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:tinted_glass" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.2, "operation": "addition" } }],
  "cost": 1
},
"gh_sm3ab": {
  "title": "Smoke Dancer",
  "description": "+0.15 Knockback Resistance, +0.01 Movement Speed. Dance through the smoke trail you leave behind. Graceful annihilation.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:firework_star" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }],
  "cost": 1
},
"gh_sm3ba": {
  "title": "Poison Fog",
  "description": "+2 Attack Damage. Your smoke carries death. Breathe it in, fall down, stay down.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:poisonous_potato" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_sm3bb": {
  "title": "Noxious Shroud",
  "description": "+2 Attack Damage, +0.1 Knockback Resistance. A walking cloud of lethality. Everything near you wilts and dies.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:dragon_breath" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }],
  "cost": 1
},

"gh_lf1": {
  "title": "Lightfoot",
  "description": "+0.01 Movement Speed. Your footfalls are whispers. You cross rubble fields without disturbing a single pebble.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:leather_boots" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }],
  "cost": 1
},
"gh_lf2a": {
  "title": "Cat's Grace",
  "description": "+0.015 Movement Speed. Land from any height without sound. Move through any space without trace.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:string" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.015, "operation": "addition" } }],
  "cost": 1
},
"gh_lf2b": {
  "title": "Silent Approach",
  "description": "+0.008 Movement Speed, +2 Attack Damage. Get close without being detected. The first hit is always free.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:sculk_sensor" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_lf3aa": {
  "title": "Featherweight",
  "description": "+0.02 Movement Speed. You weigh nothing. Snow doesn't crunch, leaves don't rustle, floorboards don't creak.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:white_wool" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.02, "operation": "addition" } }],
  "cost": 1
},
"gh_lf3ab": {
  "title": "Shadow Walker",
  "description": "+0.012 Movement Speed, +2 Max Health. Walk between worlds — half in shadow, half in flesh. Barely there but very much alive.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:soul_lantern" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.012, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"gh_lf3ba": {
  "title": "Backstab",
  "description": "+3 Attack Damage. Approach unseen, strike unblocked. The perfect kill — clean, quiet, efficient.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:diamond_axe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"gh_lf3bb": {
  "title": "Shadow Assassin",
  "description": "+2 Attack Damage, +0.01 Movement Speed. Silent death walking. You were never here — only the bodies prove otherwise.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:wither_rose" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }],
  "cost": 1
},

"gh_wc1": {
  "title": "Wraith Initiate",
  "description": "+1 Attack Damage, +0.2 Attack Speed. You've begun the transformation. More spirit than flesh, more death than life.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:ghast_tear" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.2, "operation": "addition" } }],
  "cost": 1
},
"gh_wc2a": {
  "title": "Spectral Fury",
  "description": "+2 Attack Damage, +0.3 Attack Speed. Strike with the rage of the unquiet dead. Fast, vicious, relentless.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:blaze_powder" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }],
  "cost": 1
},
"gh_wc2b": {
  "title": "Ethereal Form",
  "description": "+4 Max Health, +0.008 Movement Speed. Your body phases between states. Hard to hit what's barely corporeal.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:glass_pane" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }],
  "cost": 1
},
"gh_wc3aa": {
  "title": "Wraith Lord",
  "description": "+3 Attack Damage, +0.5 Attack Speed. The ultimate ghost — all speed, all lethality, no mercy. A king of shadows.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:nether_star" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.5, "operation": "addition" } }],
  "cost": 1
},
"gh_wc3ab": {
  "title": "Doom Blade",
  "description": "+4 Attack Damage, +0.2 Attack Speed. Your weapon pulses with killing intent. Each swing reaps like a scythe through wheat.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_sword" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.2, "operation": "addition" } }],
  "cost": 1
},
"gh_wc3ba": {
  "title": "Specter's Endurance",
  "description": "+6 Max Health, +0.01 Movement Speed. An undying wraith. Fast, resilient, eternal. The apocalypse made flesh.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:enchanted_golden_apple" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 6, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }],
  "cost": 1
},
"gh_wc3bb": {
  "title": "Ascended Wraith",
  "description": "+2 Attack Damage, +4 Max Health, +0.15 Knockback Resistance. Transcended mortality entirely. A god of shadow and silence.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:beacon" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }],
  "cost": 1
}
```

---

## 2. SKILLS (Positions)

```json
"gh_ss1": { "definition": "gh_ss1", "x": 1020, "y": 300, "root": false },
"gh_ss2a": { "definition": "gh_ss2a", "x": 1139, "y": 279, "root": false },
"gh_ss2b": { "definition": "gh_ss2b", "x": 1139, "y": 321, "root": false },
"gh_ss3aa": { "definition": "gh_ss3aa", "x": 1257, "y": 253, "root": false },
"gh_ss3ab": { "definition": "gh_ss3ab", "x": 1260, "y": 284, "root": false },
"gh_ss3ba": { "definition": "gh_ss3ba", "x": 1260, "y": 316, "root": false },
"gh_ss3bb": { "definition": "gh_ss3bb", "x": 1257, "y": 347, "root": false },

"gh_bw1": { "definition": "gh_bw1", "x": 997, "y": 371, "root": false },
"gh_bw2a": { "definition": "gh_bw2a", "x": 1106, "y": 424, "root": false },
"gh_bw2b": { "definition": "gh_bw2b", "x": 1081, "y": 457, "root": false },
"gh_bw3aa": { "definition": "gh_bw3aa", "x": 1216, "y": 472, "root": false },
"gh_bw3ab": { "definition": "gh_bw3ab", "x": 1200, "y": 499, "root": false },
"gh_bw3ba": { "definition": "gh_bw3ba", "x": 1182, "y": 524, "root": false },
"gh_bw3bb": { "definition": "gh_bw3bb", "x": 1161, "y": 548, "root": false },

"gh_ev1": { "definition": "gh_ev1", "x": 937, "y": 414, "root": false },
"gh_ev2a": { "definition": "gh_ev2a", "x": 994, "y": 521, "root": false },
"gh_ev2b": { "definition": "gh_ev2b", "x": 954, "y": 534, "root": false },
"gh_ev3aa": { "definition": "gh_ev3aa", "x": 1055, "y": 625, "root": false },
"gh_ev3ab": { "definition": "gh_ev3ab", "x": 1026, "y": 637, "root": false },
"gh_ev3ba": { "definition": "gh_ev3ba", "x": 996, "y": 647, "root": false },
"gh_ev3bb": { "definition": "gh_ev3bb", "x": 966, "y": 654, "root": false },

"gh_ws1": { "definition": "gh_ws1", "x": 863, "y": 414, "root": false },
"gh_ws2a": { "definition": "gh_ws2a", "x": 846, "y": 534, "root": false },
"gh_ws2b": { "definition": "gh_ws2b", "x": 806, "y": 521, "root": false },
"gh_ws3aa": { "definition": "gh_ws3aa", "x": 834, "y": 654, "root": false },
"gh_ws3ab": { "definition": "gh_ws3ab", "x": 804, "y": 647, "root": false },
"gh_ws3ba": { "definition": "gh_ws3ba", "x": 774, "y": 637, "root": false },
"gh_ws3bb": { "definition": "gh_ws3bb", "x": 745, "y": 625, "root": false },

"gh_sk1": { "definition": "gh_sk1", "x": 803, "y": 371, "root": false },
"gh_sk2a": { "definition": "gh_sk2a", "x": 719, "y": 457, "root": false },
"gh_sk2b": { "definition": "gh_sk2b", "x": 694, "y": 424, "root": false },
"gh_sk3aa": { "definition": "gh_sk3aa", "x": 639, "y": 548, "root": false },
"gh_sk3ab": { "definition": "gh_sk3ab", "x": 618, "y": 524, "root": false },
"gh_sk3ba": { "definition": "gh_sk3ba", "x": 600, "y": 499, "root": false },
"gh_sk3bb": { "definition": "gh_sk3bb", "x": 584, "y": 472, "root": false },

"gh_sv1": { "definition": "gh_sv1", "x": 780, "y": 300, "root": false },
"gh_sv2a": { "definition": "gh_sv2a", "x": 661, "y": 321, "root": false },
"gh_sv2b": { "definition": "gh_sv2b", "x": 661, "y": 279, "root": false },
"gh_sv3aa": { "definition": "gh_sv3aa", "x": 543, "y": 347, "root": false },
"gh_sv3ab": { "definition": "gh_sv3ab", "x": 540, "y": 316, "root": false },
"gh_sv3ba": { "definition": "gh_sv3ba", "x": 540, "y": 284, "root": false },
"gh_sv3bb": { "definition": "gh_sv3bb", "x": 543, "y": 253, "root": false },

"gh_ph1": { "definition": "gh_ph1", "x": 803, "y": 229, "root": false },
"gh_ph2a": { "definition": "gh_ph2a", "x": 694, "y": 176, "root": false },
"gh_ph2b": { "definition": "gh_ph2b", "x": 719, "y": 143, "root": false },
"gh_ph3aa": { "definition": "gh_ph3aa", "x": 584, "y": 128, "root": false },
"gh_ph3ab": { "definition": "gh_ph3ab", "x": 600, "y": 101, "root": false },
"gh_ph3ba": { "definition": "gh_ph3ba", "x": 618, "y": 76, "root": false },
"gh_ph3bb": { "definition": "gh_ph3bb", "x": 639, "y": 52, "root": false },

"gh_sm1": { "definition": "gh_sm1", "x": 863, "y": 186, "root": false },
"gh_sm2a": { "definition": "gh_sm2a", "x": 806, "y": 79, "root": false },
"gh_sm2b": { "definition": "gh_sm2b", "x": 846, "y": 66, "root": false },
"gh_sm3aa": { "definition": "gh_sm3aa", "x": 745, "y": -25, "root": false },
"gh_sm3ab": { "definition": "gh_sm3ab", "x": 774, "y": -37, "root": false },
"gh_sm3ba": { "definition": "gh_sm3ba", "x": 804, "y": -47, "root": false },
"gh_sm3bb": { "definition": "gh_sm3bb", "x": 834, "y": -54, "root": false },

"gh_lf1": { "definition": "gh_lf1", "x": 937, "y": 186, "root": false },
"gh_lf2a": { "definition": "gh_lf2a", "x": 954, "y": 66, "root": false },
"gh_lf2b": { "definition": "gh_lf2b", "x": 994, "y": 79, "root": false },
"gh_lf3aa": { "definition": "gh_lf3aa", "x": 966, "y": -54, "root": false },
"gh_lf3ab": { "definition": "gh_lf3ab", "x": 996, "y": -47, "root": false },
"gh_lf3ba": { "definition": "gh_lf3ba", "x": 1026, "y": -37, "root": false },
"gh_lf3bb": { "definition": "gh_lf3bb", "x": 1055, "y": -25, "root": false },

"gh_wc1": { "definition": "gh_wc1", "x": 997, "y": 229, "root": false },
"gh_wc2a": { "definition": "gh_wc2a", "x": 1081, "y": 143, "root": false },
"gh_wc2b": { "definition": "gh_wc2b", "x": 1106, "y": 176, "root": false },
"gh_wc3aa": { "definition": "gh_wc3aa", "x": 1161, "y": 52, "root": false },
"gh_wc3ab": { "definition": "gh_wc3ab", "x": 1182, "y": 76, "root": false },
"gh_wc3ba": { "definition": "gh_wc3ba", "x": 1200, "y": 101, "root": false },
"gh_wc3bb": { "definition": "gh_wc3bb", "x": 1216, "y": 128, "root": false }
```

---

## 3. CONNECTIONS

### Normal Connections (pick_ghost to L1 nodes, and L1→L2→L3 tree structure)

```json
["pick_ghost", "gh_ss1"],
["pick_ghost", "gh_bw1"],
["pick_ghost", "gh_ev1"],
["pick_ghost", "gh_ws1"],
["pick_ghost", "gh_sk1"],
["pick_ghost", "gh_sv1"],
["pick_ghost", "gh_ph1"],
["pick_ghost", "gh_sm1"],
["pick_ghost", "gh_lf1"],
["pick_ghost", "gh_wc1"],

["gh_ss1", "gh_ss2a"],
["gh_ss1", "gh_ss2b"],
["gh_ss2a", "gh_ss3aa"],
["gh_ss2a", "gh_ss3ab"],
["gh_ss2b", "gh_ss3ba"],
["gh_ss2b", "gh_ss3bb"],

["gh_bw1", "gh_bw2a"],
["gh_bw1", "gh_bw2b"],
["gh_bw2a", "gh_bw3aa"],
["gh_bw2a", "gh_bw3ab"],
["gh_bw2b", "gh_bw3ba"],
["gh_bw2b", "gh_bw3bb"],

["gh_ev1", "gh_ev2a"],
["gh_ev1", "gh_ev2b"],
["gh_ev2a", "gh_ev3aa"],
["gh_ev2a", "gh_ev3ab"],
["gh_ev2b", "gh_ev3ba"],
["gh_ev2b", "gh_ev3bb"],

["gh_ws1", "gh_ws2a"],
["gh_ws1", "gh_ws2b"],
["gh_ws2a", "gh_ws3aa"],
["gh_ws2a", "gh_ws3ab"],
["gh_ws2b", "gh_ws3ba"],
["gh_ws2b", "gh_ws3bb"],

["gh_sk1", "gh_sk2a"],
["gh_sk1", "gh_sk2b"],
["gh_sk2a", "gh_sk3aa"],
["gh_sk2a", "gh_sk3ab"],
["gh_sk2b", "gh_sk3ba"],
["gh_sk2b", "gh_sk3bb"],

["gh_sv1", "gh_sv2a"],
["gh_sv1", "gh_sv2b"],
["gh_sv2a", "gh_sv3aa"],
["gh_sv2a", "gh_sv3ab"],
["gh_sv2b", "gh_sv3ba"],
["gh_sv2b", "gh_sv3bb"],

["gh_ph1", "gh_ph2a"],
["gh_ph1", "gh_ph2b"],
["gh_ph2a", "gh_ph3aa"],
["gh_ph2a", "gh_ph3ab"],
["gh_ph2b", "gh_ph3ba"],
["gh_ph2b", "gh_ph3bb"],

["gh_sm1", "gh_sm2a"],
["gh_sm1", "gh_sm2b"],
["gh_sm2a", "gh_sm3aa"],
["gh_sm2a", "gh_sm3ab"],
["gh_sm2b", "gh_sm3ba"],
["gh_sm2b", "gh_sm3bb"],

["gh_lf1", "gh_lf2a"],
["gh_lf1", "gh_lf2b"],
["gh_lf2a", "gh_lf3aa"],
["gh_lf2a", "gh_lf3ab"],
["gh_lf2b", "gh_lf3ba"],
["gh_lf2b", "gh_lf3bb"],

["gh_wc1", "gh_wc2a"],
["gh_wc1", "gh_wc2b"],
["gh_wc2a", "gh_wc3aa"],
["gh_wc2a", "gh_wc3ab"],
["gh_wc2b", "gh_wc3ba"],
["gh_wc2b", "gh_wc3bb"]
```

### Exclusive Connections (L2a vs L2b, L3aa vs L3ab, L3ba vs L3bb)

```json
["gh_ss2a", "gh_ss2b"],
["gh_ss3aa", "gh_ss3ab"],
["gh_ss3ba", "gh_ss3bb"],

["gh_bw2a", "gh_bw2b"],
["gh_bw3aa", "gh_bw3ab"],
["gh_bw3ba", "gh_bw3bb"],

["gh_ev2a", "gh_ev2b"],
["gh_ev3aa", "gh_ev3ab"],
["gh_ev3ba", "gh_ev3bb"],

["gh_ws2a", "gh_ws2b"],
["gh_ws3aa", "gh_ws3ab"],
["gh_ws3ba", "gh_ws3bb"],

["gh_sk2a", "gh_sk2b"],
["gh_sk3aa", "gh_sk3ab"],
["gh_sk3ba", "gh_sk3bb"],

["gh_sv2a", "gh_sv2b"],
["gh_sv3aa", "gh_sv3ab"],
["gh_sv3ba", "gh_sv3bb"],

["gh_ph2a", "gh_ph2b"],
["gh_ph3aa", "gh_ph3ab"],
["gh_ph3ba", "gh_ph3bb"],

["gh_sm2a", "gh_sm2b"],
["gh_sm3aa", "gh_sm3ab"],
["gh_sm3ba", "gh_sm3bb"],

["gh_lf2a", "gh_lf2b"],
["gh_lf3aa", "gh_lf3ab"],
["gh_lf3ba", "gh_lf3bb"],

["gh_wc2a", "gh_wc2b"],
["gh_wc3aa", "gh_wc3ab"],
["gh_wc3ba", "gh_wc3bb"]
```
