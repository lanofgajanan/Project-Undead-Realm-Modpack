# TECHNICIAN CLASS SKILL TREE

## 1. DEFINITIONS

```json
"t_ef1": {
  "title": "Efficiency",
  "description": "+2 Block Break Speed. You strip resources from ruins like a human jackhammer. Every swing counts.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_pickaxe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_ef2a": {
  "title": "Power Swing",
  "description": "+3 Block Break Speed. Concrete crumbles under your pick. Walls that took years to build fall in minutes.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:diamond_pickaxe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"t_ef2b": {
  "title": "Methodical Mining",
  "description": "+2 Block Break Speed, +1 Luck. Precision over brute force. You extract more from every block you break.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:stone_pickaxe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"t_ef3aa": {
  "title": "Demolition Expert",
  "description": "+5 Block Break Speed. Buildings aren't obstacles — they're resource caches waiting to be opened. Fast.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:tnt" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 5, "operation": "addition" } }],
  "cost": 1
},
"t_ef3ab": {
  "title": "Structural Analyst",
  "description": "+4 Block Break Speed, +2 Max Health. You know load-bearing points. Hit them and everything comes down safe — for you.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:scaffolding" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_ef3ba": {
  "title": "Lucky Salvage",
  "description": "+2 Luck. The ruins give up their treasures to you willingly. Every rubble pile hides something useful.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:emerald" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_ef3bb": {
  "title": "Strip Miner",
  "description": "+3 Block Break Speed, +1 Luck. Systematic, thorough, profitable. You leave nothing behind worth taking.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_pickaxe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }],
  "cost": 1
},

"t_ft1": {
  "title": "Fortune",
  "description": "+1 Luck. Lady luck favors the prepared. Your scavenging runs always turn up something good.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:rabbit_foot" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"t_ft2a": {
  "title": "Scrap Magnet",
  "description": "+2 Luck. Useful parts gravitate toward you. Others find junk — you find components.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:raw_iron" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_ft2b": {
  "title": "Prospector's Eye",
  "description": "+1 Luck, +1 Block Break Speed. See value where others see rubble. Dig fast, find fast.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:spyglass" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"t_ft3aa": {
  "title": "Midas Touch",
  "description": "+3 Luck. Everything you touch yields more than expected. The apocalypse is your goldmine.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:gold_ingot" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"t_ft3ab": {
  "title": "Treasure Hunter",
  "description": "+2 Luck, +2 Max Health. You've survived enough ruin dives to know where the good stuff hides — and the traps.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:chest" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_ft3ba": {
  "title": "Speed Loot",
  "description": "+2 Block Break Speed. Crack open containers and walls at blinding speed. In and out before the horde arrives.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_pickaxe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_ft3bb": {
  "title": "Jackpot",
  "description": "+2 Luck, +1 Block Break Speed. Every dig hits paydirt. Fast hands, fat loot. The scavenger's dream.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:diamond" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 1, "operation": "addition" } }],
  "cost": 1
},

"t_hh1": {
  "title": "Hard Hat",
  "description": "+2 Max Health. Helmet on, head down, work through the danger. Construction site rules saved more lives than bunkers.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_helmet" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_hh2a": {
  "title": "Reinforced Frame",
  "description": "+4 Max Health. Steel-toed boots, kevlar lining, and enough padding to survive a building collapse.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_chestplate" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"t_hh2b": {
  "title": "Impact Absorber",
  "description": "+2 Max Health, +0.1 Knockback Resistance. Shock-mounted joints and padded armor. Impacts disperse harmlessly.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:slime_block" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }],
  "cost": 1
},
"t_hh3aa": {
  "title": "Bunker Body",
  "description": "+6 Max Health. You're built like the shelters you construct — reinforced, layered, nearly indestructible.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_chestplate" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 6, "operation": "addition" } }],
  "cost": 1
},
"t_hh3ab": {
  "title": "Safety Engineer",
  "description": "+4 Max Health, +0.005 Movement Speed. OSHA compliant even in the apocalypse. Safe AND efficient.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_helmet" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"t_hh3ba": {
  "title": "Blast Resistant",
  "description": "+0.15 Knockback Resistance. Explosions, impacts, charging infected — nothing moves you from your worksite.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:obsidian" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }],
  "cost": 1
},
"t_hh3bb": {
  "title": "Foreman's Endurance",
  "description": "+3 Max Health, +0.1 Knockback Resistance. Years of hard labor forged an unbreakable constitution. You outlast everything.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:anvil" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }],
  "cost": 1
},

"t_mb1": {
  "title": "Mobility",
  "description": "+0.008 Movement Speed. Quick feet on the job site. You navigate scaffolding and rubble like a mountain goat.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:leather_boots" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }],
  "cost": 1
},
"t_mb2a": {
  "title": "Site Runner",
  "description": "+0.012 Movement Speed. Sprint between projects without breaking a sweat. Time is resources.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:feather" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.012, "operation": "addition" } }],
  "cost": 1
},
"t_mb2b": {
  "title": "Hauler",
  "description": "+0.005 Movement Speed, +2 Max Health. Move heavy loads without slowing. Your spine is reinforced steel.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:barrel" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_mb3aa": {
  "title": "Parkour Engineer",
  "description": "+0.015 Movement Speed. You designed the routes, now you run them. Urban terrain is your playground.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:ladder" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.015, "operation": "addition" } }],
  "cost": 1
},
"t_mb3ab": {
  "title": "Supply Runner",
  "description": "+0.01 Movement Speed, +1 Luck. Fast delivery, lucky finds. The supply chain is your bloodline.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:minecart" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"t_mb3ba": {
  "title": "Pack Mule",
  "description": "+4 Max Health. Carry the weight of the world on your back and keep walking. Unbreakable workhorse.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:chest_minecart" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"t_mb3bb": {
  "title": "Logistics Master",
  "description": "+0.008 Movement Speed, +2 Max Health. The perfect courier — fast, tough, and always on schedule.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:compass" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},

"t_in1": {
  "title": "Industrial",
  "description": "+1 Block Break Speed, +0.005 Movement Speed. Factory discipline — fast pace, efficient motions, zero downtime.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:furnace" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"t_in2a": {
  "title": "Assembly Line",
  "description": "+3 Block Break Speed. Repetition breeds perfection. Your arms move with mechanical precision.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:piston" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"t_in2b": {
  "title": "Factory Floor",
  "description": "+1 Block Break Speed, +0.01 Movement Speed. Work fast, move fast. The assembly never stops.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:sticky_piston" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }],
  "cost": 1
},
"t_in3aa": {
  "title": "Wrecking Ball",
  "description": "+6 Block Break Speed. You ARE the demolition machine. Walls, floors, ceilings — nothing withstands your onslaught.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_block" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 6, "operation": "addition" } }],
  "cost": 1
},
"t_in3ab": {
  "title": "Production Line",
  "description": "+4 Block Break Speed, +1 Luck. Industrial output at maximum. Every block yields something, every second counts.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:blast_furnace" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"t_in3ba": {
  "title": "Marathon Worker",
  "description": "+0.012 Movement Speed. Twelve-hour shifts with no break. Your body runs on pure work ethic.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_boots" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.012, "operation": "addition" } }],
  "cost": 1
},
"t_in3bb": {
  "title": "Perpetual Engine",
  "description": "+2 Block Break Speed, +0.008 Movement Speed. A machine that never stops. Fueled by purpose in a purposeless world.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:redstone_block" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }],
  "cost": 1
},

"t_sa1": {
  "title": "Salvage",
  "description": "+1 Luck. One man's trash is your base's next wall. You see value in everything discarded.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:raw_copper" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"t_sa2a": {
  "title": "Scrap Genius",
  "description": "+2 Luck. Turn worthless debris into vital components. Your workshop turns garbage into gold.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:copper_ingot" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_sa2b": {
  "title": "Disassembly",
  "description": "+1 Luck, +2 Block Break Speed. Take things apart faster and find more useful bits inside. Surgical deconstruction.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:grindstone" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_sa3aa": {
  "title": "Recycler Supreme",
  "description": "+4 Luck. Nothing is wasted. You extract value from what others would burn for warmth.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:lapis_lazuli" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"t_sa3ab": {
  "title": "Component Finder",
  "description": "+3 Luck, +2 Max Health. Experience taught you where parts hide — and how to survive getting to them.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:ender_eye" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_sa3ba": {
  "title": "Rapid Salvage",
  "description": "+3 Block Break Speed. Rip apart machines and structures with practiced speed. Every second in the open is dangerous.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_axe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"t_sa3bb": {
  "title": "Master Scrapper",
  "description": "+2 Luck, +2 Block Break Speed. The ultimate junkyard artist. Fast hands, keen eyes, maximum yield.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:smithing_table" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 2, "operation": "addition" } }],
  "cost": 1
},

"t_en1": {
  "title": "Engineering",
  "description": "+2 Block Break Speed. Proper technique makes all the difference. You break with knowledge, not just force.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:redstone" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_en2a": {
  "title": "Mechanical Genius",
  "description": "+3 Block Break Speed. You understand how things fit together — and more importantly, how they come apart.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:comparator" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"t_en2b": {
  "title": "Blueprint Mind",
  "description": "+1 Block Break Speed, +2 Max Health. You see the blueprints in everything. Knowledge protects as much as armor.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:map" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_en3aa": {
  "title": "Overclocked Tools",
  "description": "+5 Block Break Speed. Your modified tools shred through material at inhuman speeds. Engineering at its finest.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:diamond_axe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 5, "operation": "addition" } }],
  "cost": 1
},
"t_en3ab": {
  "title": "Calculated Precision",
  "description": "+3 Block Break Speed, +1 Luck. Every angle computed, every strike optimal. Mathematics applied to destruction.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:repeater" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"t_en3ba": {
  "title": "Structural Integrity",
  "description": "+4 Max Health. You built yourself like you build your machines — redundant, reinforced, reliable.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_bars" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"t_en3bb": {
  "title": "Master Builder",
  "description": "+2 Block Break Speed, +3 Max Health. Build it strong, break it fast. The complete engineer — creator and destroyer.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:crafting_table" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 3, "operation": "addition" } }],
  "cost": 1
},

"t_au1": {
  "title": "Automation",
  "description": "+1 Block Break Speed, +1 Luck. Why do it yourself when machines can? Your setups multiply your output.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:hopper" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"t_au2a": {
  "title": "Machine Tender",
  "description": "+2 Luck. Your machines produce more because you maintain them perfectly. Greased gears, clean filters.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:dispenser" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_au2b": {
  "title": "Conveyor Boss",
  "description": "+2 Block Break Speed, +0.005 Movement Speed. Keep the line moving. Efficiency is measured in blocks per minute.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:powered_rail" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"t_au3aa": {
  "title": "Self-Sustaining",
  "description": "+3 Luck. Your systems feed themselves. The loop is closed, the output is pure profit.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:observer" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"t_au3ab": {
  "title": "Yield Optimizer",
  "description": "+2 Luck, +2 Max Health. Maximum output, minimum input. Your body has adopted the same efficiency.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:experience_bottle" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_au3ba": {
  "title": "Speed Factory",
  "description": "+4 Block Break Speed. Industrial automation applied to your own hands. Break speeds that rival machines.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:dropper" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"t_au3bb": {
  "title": "Full Automation",
  "description": "+3 Block Break Speed, +0.008 Movement Speed. Human-machine hybrid workflow. You ARE the factory now.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:command_block" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }],
  "cost": 1
},

"t_rm1": {
  "title": "Resource Master",
  "description": "+1 Luck, +0.005 Movement Speed. Every raid fills your packs. You know where the good loot spawns.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:bundle" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"t_rm2a": {
  "title": "Hoarder",
  "description": "+2 Luck. More is more. Your stockpiles overflow while others scramble for scraps.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:trapped_chest" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_rm2b": {
  "title": "Efficient Gatherer",
  "description": "+1 Luck, +1 Block Break Speed. Quick collection, high yield. Your scavenging runs are legendary.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:shears" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"t_rm3aa": {
  "title": "Infinite Stockpile",
  "description": "+3 Luck. Your luck is supernatural. Resources materialize as if the world WANTS you to rebuild it.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:nether_star" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"t_rm3ab": {
  "title": "Fortune's Favor",
  "description": "+2 Luck, +0.008 Movement Speed. The world rewards those who move fast and think faster. Lucky and quick.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:emerald_block" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }],
  "cost": 1
},
"t_rm3ba": {
  "title": "Rapid Collection",
  "description": "+3 Block Break Speed. Gather resources at breakneck speed. Smash, grab, run — the scavenger's creed.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_axe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"t_rm3bb": {
  "title": "Resource Baron",
  "description": "+2 Luck, +2 Block Break Speed. The apocalypse's richest survivor. Everything bends to your industrial will.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:gold_block" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 2, "operation": "addition" } }],
  "cost": 1
},

"t_me1": {
  "title": "Master Engineer Initiate",
  "description": "+1 Block Break Speed, +2 Max Health. The foundation of mastery — strength to endure, skill to build.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:copper_block" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_me2a": {
  "title": "Industrial Savant",
  "description": "+3 Block Break Speed, +1 Luck. Knowledge meets execution. Every project you touch exceeds expectations.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:enchanting_table" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"t_me2b": {
  "title": "Enduring Craftsman",
  "description": "+4 Max Health, +0.005 Movement Speed. Years of dangerous work hardened your body. You build and you survive.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_apple" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"t_me3aa": {
  "title": "Architect Supreme",
  "description": "+4 Block Break Speed, +2 Luck. The master of all trades. Build empires from ash, extract gold from dust.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:beacon" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.luck", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"t_me3ab": {
  "title": "Infrastructure God",
  "description": "+5 Block Break Speed, +0.008 Movement Speed. Civilization restarts with you. Unstoppable construction incarnate.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:end_crystal" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 5, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }],
  "cost": 1
},
"t_me3ba": {
  "title": "Immortal Foreman",
  "description": "+6 Max Health, +0.1 Knockback Resistance. The last builder standing. Unkillable, unstoppable, always working.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:enchanted_golden_apple" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 6, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }],
  "cost": 1
},
"t_me3bb": {
  "title": "Grand Engineer",
  "description": "+3 Block Break Speed, +3 Max Health, +0.15 Knockback Resistance. The pinnacle of human industry. A one-person civilization.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:respawn_anchor" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:player.block_break_speed", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }],
  "cost": 1
}
```

---

## 2. SKILLS (Positions)

```json
"t_ef1": { "definition": "t_ef1", "x": 270, "y": -900, "root": false },
"t_ef2a": { "definition": "t_ef2a", "x": 389, "y": -921, "root": false },
"t_ef2b": { "definition": "t_ef2b", "x": 389, "y": -879, "root": false },
"t_ef3aa": { "definition": "t_ef3aa", "x": 507, "y": -947, "root": false },
"t_ef3ab": { "definition": "t_ef3ab", "x": 510, "y": -916, "root": false },
"t_ef3ba": { "definition": "t_ef3ba", "x": 510, "y": -884, "root": false },
"t_ef3bb": { "definition": "t_ef3bb", "x": 507, "y": -853, "root": false },

"t_ft1": { "definition": "t_ft1", "x": 247, "y": -829, "root": false },
"t_ft2a": { "definition": "t_ft2a", "x": 356, "y": -776, "root": false },
"t_ft2b": { "definition": "t_ft2b", "x": 331, "y": -743, "root": false },
"t_ft3aa": { "definition": "t_ft3aa", "x": 466, "y": -728, "root": false },
"t_ft3ab": { "definition": "t_ft3ab", "x": 450, "y": -701, "root": false },
"t_ft3ba": { "definition": "t_ft3ba", "x": 432, "y": -676, "root": false },
"t_ft3bb": { "definition": "t_ft3bb", "x": 411, "y": -652, "root": false },

"t_hh1": { "definition": "t_hh1", "x": 187, "y": -786, "root": false },
"t_hh2a": { "definition": "t_hh2a", "x": 244, "y": -679, "root": false },
"t_hh2b": { "definition": "t_hh2b", "x": 204, "y": -666, "root": false },
"t_hh3aa": { "definition": "t_hh3aa", "x": 305, "y": -575, "root": false },
"t_hh3ab": { "definition": "t_hh3ab", "x": 276, "y": -563, "root": false },
"t_hh3ba": { "definition": "t_hh3ba", "x": 246, "y": -553, "root": false },
"t_hh3bb": { "definition": "t_hh3bb", "x": 216, "y": -546, "root": false },

"t_mb1": { "definition": "t_mb1", "x": 113, "y": -786, "root": false },
"t_mb2a": { "definition": "t_mb2a", "x": 96, "y": -666, "root": false },
"t_mb2b": { "definition": "t_mb2b", "x": 56, "y": -679, "root": false },
"t_mb3aa": { "definition": "t_mb3aa", "x": 84, "y": -546, "root": false },
"t_mb3ab": { "definition": "t_mb3ab", "x": 54, "y": -553, "root": false },
"t_mb3ba": { "definition": "t_mb3ba", "x": 24, "y": -563, "root": false },
"t_mb3bb": { "definition": "t_mb3bb", "x": -5, "y": -575, "root": false },

"t_in1": { "definition": "t_in1", "x": 53, "y": -829, "root": false },
"t_in2a": { "definition": "t_in2a", "x": -31, "y": -743, "root": false },
"t_in2b": { "definition": "t_in2b", "x": -56, "y": -776, "root": false },
"t_in3aa": { "definition": "t_in3aa", "x": -111, "y": -652, "root": false },
"t_in3ab": { "definition": "t_in3ab", "x": -132, "y": -676, "root": false },
"t_in3ba": { "definition": "t_in3ba", "x": -150, "y": -701, "root": false },
"t_in3bb": { "definition": "t_in3bb", "x": -166, "y": -728, "root": false },

"t_sa1": { "definition": "t_sa1", "x": 30, "y": -900, "root": false },
"t_sa2a": { "definition": "t_sa2a", "x": -89, "y": -879, "root": false },
"t_sa2b": { "definition": "t_sa2b", "x": -89, "y": -921, "root": false },
"t_sa3aa": { "definition": "t_sa3aa", "x": -207, "y": -853, "root": false },
"t_sa3ab": { "definition": "t_sa3ab", "x": -210, "y": -884, "root": false },
"t_sa3ba": { "definition": "t_sa3ba", "x": -210, "y": -916, "root": false },
"t_sa3bb": { "definition": "t_sa3bb", "x": -207, "y": -947, "root": false },

"t_en1": { "definition": "t_en1", "x": 53, "y": -971, "root": false },
"t_en2a": { "definition": "t_en2a", "x": -56, "y": -1024, "root": false },
"t_en2b": { "definition": "t_en2b", "x": -31, "y": -1057, "root": false },
"t_en3aa": { "definition": "t_en3aa", "x": -166, "y": -1072, "root": false },
"t_en3ab": { "definition": "t_en3ab", "x": -150, "y": -1099, "root": false },
"t_en3ba": { "definition": "t_en3ba", "x": -132, "y": -1124, "root": false },
"t_en3bb": { "definition": "t_en3bb", "x": -111, "y": -1148, "root": false },

"t_au1": { "definition": "t_au1", "x": 113, "y": -1014, "root": false },
"t_au2a": { "definition": "t_au2a", "x": 56, "y": -1121, "root": false },
"t_au2b": { "definition": "t_au2b", "x": 96, "y": -1134, "root": false },
"t_au3aa": { "definition": "t_au3aa", "x": -5, "y": -1225, "root": false },
"t_au3ab": { "definition": "t_au3ab", "x": 24, "y": -1237, "root": false },
"t_au3ba": { "definition": "t_au3ba", "x": 54, "y": -1247, "root": false },
"t_au3bb": { "definition": "t_au3bb", "x": 84, "y": -1254, "root": false },

"t_rm1": { "definition": "t_rm1", "x": 187, "y": -1014, "root": false },
"t_rm2a": { "definition": "t_rm2a", "x": 204, "y": -1134, "root": false },
"t_rm2b": { "definition": "t_rm2b", "x": 244, "y": -1121, "root": false },
"t_rm3aa": { "definition": "t_rm3aa", "x": 216, "y": -1254, "root": false },
"t_rm3ab": { "definition": "t_rm3ab", "x": 246, "y": -1247, "root": false },
"t_rm3ba": { "definition": "t_rm3ba", "x": 276, "y": -1237, "root": false },
"t_rm3bb": { "definition": "t_rm3bb", "x": 305, "y": -1225, "root": false },

"t_me1": { "definition": "t_me1", "x": 247, "y": -971, "root": false },
"t_me2a": { "definition": "t_me2a", "x": 331, "y": -1057, "root": false },
"t_me2b": { "definition": "t_me2b", "x": 356, "y": -1024, "root": false },
"t_me3aa": { "definition": "t_me3aa", "x": 411, "y": -1148, "root": false },
"t_me3ab": { "definition": "t_me3ab", "x": 432, "y": -1124, "root": false },
"t_me3ba": { "definition": "t_me3ba", "x": 450, "y": -1099, "root": false },
"t_me3bb": { "definition": "t_me3bb", "x": 466, "y": -1072, "root": false }
```

---

## 3. CONNECTIONS

### Normal Connections (pick_technician to L1 nodes, and L1→L2→L3 tree structure)

```json
["pick_technician", "t_ef1"],
["pick_technician", "t_ft1"],
["pick_technician", "t_hh1"],
["pick_technician", "t_mb1"],
["pick_technician", "t_in1"],
["pick_technician", "t_sa1"],
["pick_technician", "t_en1"],
["pick_technician", "t_au1"],
["pick_technician", "t_rm1"],
["pick_technician", "t_me1"],

["t_ef1", "t_ef2a"],
["t_ef1", "t_ef2b"],
["t_ef2a", "t_ef3aa"],
["t_ef2a", "t_ef3ab"],
["t_ef2b", "t_ef3ba"],
["t_ef2b", "t_ef3bb"],

["t_ft1", "t_ft2a"],
["t_ft1", "t_ft2b"],
["t_ft2a", "t_ft3aa"],
["t_ft2a", "t_ft3ab"],
["t_ft2b", "t_ft3ba"],
["t_ft2b", "t_ft3bb"],

["t_hh1", "t_hh2a"],
["t_hh1", "t_hh2b"],
["t_hh2a", "t_hh3aa"],
["t_hh2a", "t_hh3ab"],
["t_hh2b", "t_hh3ba"],
["t_hh2b", "t_hh3bb"],

["t_mb1", "t_mb2a"],
["t_mb1", "t_mb2b"],
["t_mb2a", "t_mb3aa"],
["t_mb2a", "t_mb3ab"],
["t_mb2b", "t_mb3ba"],
["t_mb2b", "t_mb3bb"],

["t_in1", "t_in2a"],
["t_in1", "t_in2b"],
["t_in2a", "t_in3aa"],
["t_in2a", "t_in3ab"],
["t_in2b", "t_in3ba"],
["t_in2b", "t_in3bb"],

["t_sa1", "t_sa2a"],
["t_sa1", "t_sa2b"],
["t_sa2a", "t_sa3aa"],
["t_sa2a", "t_sa3ab"],
["t_sa2b", "t_sa3ba"],
["t_sa2b", "t_sa3bb"],

["t_en1", "t_en2a"],
["t_en1", "t_en2b"],
["t_en2a", "t_en3aa"],
["t_en2a", "t_en3ab"],
["t_en2b", "t_en3ba"],
["t_en2b", "t_en3bb"],

["t_au1", "t_au2a"],
["t_au1", "t_au2b"],
["t_au2a", "t_au3aa"],
["t_au2a", "t_au3ab"],
["t_au2b", "t_au3ba"],
["t_au2b", "t_au3bb"],

["t_rm1", "t_rm2a"],
["t_rm1", "t_rm2b"],
["t_rm2a", "t_rm3aa"],
["t_rm2a", "t_rm3ab"],
["t_rm2b", "t_rm3ba"],
["t_rm2b", "t_rm3bb"],

["t_me1", "t_me2a"],
["t_me1", "t_me2b"],
["t_me2a", "t_me3aa"],
["t_me2a", "t_me3ab"],
["t_me2b", "t_me3ba"],
["t_me2b", "t_me3bb"]
```

### Exclusive Connections (L2a vs L2b, L3aa vs L3ab, L3ba vs L3bb)

```json
["t_ef2a", "t_ef2b"],
["t_ef3aa", "t_ef3ab"],
["t_ef3ba", "t_ef3bb"],

["t_ft2a", "t_ft2b"],
["t_ft3aa", "t_ft3ab"],
["t_ft3ba", "t_ft3bb"],

["t_hh2a", "t_hh2b"],
["t_hh3aa", "t_hh3ab"],
["t_hh3ba", "t_hh3bb"],

["t_mb2a", "t_mb2b"],
["t_mb3aa", "t_mb3ab"],
["t_mb3ba", "t_mb3bb"],

["t_in2a", "t_in2b"],
["t_in3aa", "t_in3ab"],
["t_in3ba", "t_in3bb"],

["t_sa2a", "t_sa2b"],
["t_sa3aa", "t_sa3ab"],
["t_sa3ba", "t_sa3bb"],

["t_en2a", "t_en2b"],
["t_en3aa", "t_en3ab"],
["t_en3ba", "t_en3bb"],

["t_au2a", "t_au2b"],
["t_au3aa", "t_au3ab"],
["t_au3ba", "t_au3bb"],

["t_rm2a", "t_rm2b"],
["t_rm3aa", "t_rm3ab"],
["t_rm3ba", "t_rm3bb"],

["t_me2a", "t_me2b"],
["t_me3aa", "t_me3ab"],
["t_me3ba", "t_me3bb"]
```
