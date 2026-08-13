# BRAWLER CLASS SKILL TREE

## 1. DEFINITIONS

```json
"b_if1": {
  "title": "Iron Fist",
  "description": "+1 Attack Damage. You've punched enough rotters in the jaw to know exactly where bone gives way.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_ingot" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"b_if2a": {
  "title": "Knuckle Breaker",
  "description": "+2 Attack Damage. Your fists hit like cinder blocks. The dead don't get back up after you connect.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:cobblestone" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_if2b": {
  "title": "Heavy Hands",
  "description": "+1 Attack Damage, +0.3 Attack Speed. Faster swings backed by real power. A deadly tempo.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:anvil" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }],
  "cost": 1
},
"b_if3aa": {
  "title": "Skull Crusher",
  "description": "+3 Attack Damage. One overhead swing splits helmets and the heads inside them. Pure devastation.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:wither_skeleton_skull" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"b_if3ab": {
  "title": "Concussive Force",
  "description": "+2 Attack Damage, +2 Armor Toughness. Hits so hard the shockwave bruises YOUR hands — good thing they're calloused iron.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_block" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_if3ba": {
  "title": "Flurry",
  "description": "+0.6 Attack Speed. A storm of blows. Each swing lands before the last one's damage registers.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:sugar" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.6, "operation": "addition" } }],
  "cost": 1
},
"b_if3bb": {
  "title": "Meteor Strikes",
  "description": "+2 Attack Damage, +0.4 Attack Speed. Every hit lands like a falling star — fast AND heavy. The horde parts around you.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:fire_charge" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.4, "operation": "addition" } }],
  "cost": 1
},

"b_bl1": {
  "title": "Bloodlust",
  "description": "+0.3 Attack Speed. The smell of rot makes your heart race. Swing faster. Kill faster.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:redstone" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }],
  "cost": 1
},
"b_bl2a": {
  "title": "Frenzy",
  "description": "+0.5 Attack Speed. Your arms blur. Consciousness fades. Only the rhythm of killing remains.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:blaze_powder" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.5, "operation": "addition" } }],
  "cost": 1
},
"b_bl2b": {
  "title": "Feeding Frenzy",
  "description": "+0.3 Attack Speed, +2 Max Health. Each kill fuels you. Your body mends between swings.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:ghast_tear" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_bl3aa": {
  "title": "Berserker",
  "description": "+0.8 Attack Speed. Pure unthinking violence. Your weapon is a saw blade and the infected are timber.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:magma_cream" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.8, "operation": "addition" } }],
  "cost": 1
},
"b_bl3ab": {
  "title": "Whirlwind",
  "description": "+0.5 Attack Speed, +1 Attack Damage. A spinning vortex of steel and fury. Nothing within arm's reach survives.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:breeze_rod" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.5, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"b_bl3ba": {
  "title": "Crimson Vitality",
  "description": "+4 Max Health. Battle sustains you. Your body drinks in the carnage and grows stronger for it.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:red_dye" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"b_bl3bb": {
  "title": "Undying Fury",
  "description": "+0.4 Attack Speed, +4 Max Health. They can't kill what refuses to stop swinging. Rage is your life support.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:totem_of_undying" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},

"b_th1": {
  "title": "Thick Skin",
  "description": "+4 Max Health. Scar tissue layered on scar tissue. Your body forgot what 'soft' means.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:leather" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"b_th2a": {
  "title": "Meat Shield",
  "description": "+6 Max Health. You're built like a concrete wall. The infected bounce off you like rain.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:cooked_beef" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 6, "operation": "addition" } }],
  "cost": 1
},
"b_th2b": {
  "title": "Calloused Hide",
  "description": "+3 Max Health, +2 Armor Toughness. Skin like boiled leather and bones like rebar. Nature's armor.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:rabbit_hide" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_th3aa": {
  "title": "Juggernaut",
  "description": "+8 Max Health. A walking fortress of meat and grit. They'd need a tank to put you down.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_chestplate" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 8, "operation": "addition" } }],
  "cost": 1
},
"b_th3ab": {
  "title": "Living Bunker",
  "description": "+4 Max Health, +0.15 Knockback Resistance. Rooted deep and packed with vitality. They push, you don't budge.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:obsidian" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }],
  "cost": 1
},
"b_th3ba": {
  "title": "Iron Constitution",
  "description": "+4 Armor Toughness. Your organs shifted to protect themselves. Blows that should kill just bruise.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_chestplate" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"b_th3bb": {
  "title": "Adaptive Plating",
  "description": "+3 Armor Toughness, +4 Max Health. Your body reforges itself after every fight. Harder, denser, less human.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_scrap" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},

"b_gr1": {
  "title": "Grounded",
  "description": "+0.15 Knockback Resistance. Feet planted like roots in concrete. The horde shoves, you stand.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:chain" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }],
  "cost": 1
},
"b_gr2a": {
  "title": "Immovable",
  "description": "+0.25 Knockback Resistance. An avalanche couldn't move you. The dead pile up against you like driftwood.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:anvil" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.25, "operation": "addition" } }],
  "cost": 1
},
"b_gr2b": {
  "title": "Counter Stance",
  "description": "+0.1 Knockback Resistance, +1 Attack Damage. Stand your ground and punish everything that dares approach.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:shield" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"b_gr3aa": {
  "title": "Bedrock Will",
  "description": "+0.3 Knockback Resistance. Nothing moves you. Not explosions, not charging hordes, not God himself.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:bedrock" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.3, "operation": "addition" } }],
  "cost": 1
},
"b_gr3ab": {
  "title": "Mountain's Root",
  "description": "+0.2 Knockback Resistance, +4 Max Health. Unshakeable mass. You're an anchor point the squad rallies behind.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:deepslate" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"b_gr3ba": {
  "title": "Retaliator",
  "description": "+2 Attack Damage. They push, you hit back twice as hard. Aggression punished with broken bones.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_sword" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_gr3bb": {
  "title": "Fortress Stance",
  "description": "+1 Attack Damage, +0.15 Knockback Resistance. An immovable fighter. You hold the line AND deal punishment.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_sword" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }],
  "cost": 1
},

"b_ag1": {
  "title": "Agility",
  "description": "+0.01 Movement Speed. Light on your feet. You weave through grabbing hands like smoke.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:feather" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }],
  "cost": 1
},
"b_ag2a": {
  "title": "Sprint Killer",
  "description": "+0.015 Movement Speed. Close the gap before they react. You're on them before their arms rise.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:rabbit_foot" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.015, "operation": "addition" } }],
  "cost": 1
},
"b_ag2b": {
  "title": "Combat Reflexes",
  "description": "+0.008 Movement Speed, +0.3 Attack Speed. Faster feet, faster hands. Your whole body accelerates.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:clock" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }],
  "cost": 1
},
"b_ag3aa": {
  "title": "Wind Runner",
  "description": "+0.02 Movement Speed. You sprint past the dead like they're standing still. Pure velocity incarnate.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:elytra" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.02, "operation": "addition" } }],
  "cost": 1
},
"b_ag3ab": {
  "title": "Phantom Rush",
  "description": "+0.012 Movement Speed, +1 Attack Damage. A blur of motion and violence. They see the blade after they're already cut.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:phantom_membrane" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.012, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"b_ag3ba": {
  "title": "Blade Dancer",
  "description": "+0.5 Attack Speed. Your weapon dances in your hands — a whirlwind of precise, rapid cuts.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_sword" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.5, "operation": "addition" } }],
  "cost": 1
},
"b_ag3bb": {
  "title": "Lightning Reflexes",
  "description": "+0.01 Movement Speed, +0.4 Attack Speed. Every nerve fires in overdrive. Dodge, strike, repeat. Untouchable.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:lightning_rod" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.4, "operation": "addition" } }],
  "cost": 1
},

"b_rg1": {
  "title": "Rage",
  "description": "+1 Attack Damage. Anger boils in your blood. Every scar is fuel for the next swing.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:magma_block" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }],
  "cost": 1
},
"b_rg2a": {
  "title": "Seething Wrath",
  "description": "+2 Attack Damage. Your vision narrows to a tunnel of red. Everything in it dies.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:nether_wart" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_rg2b": {
  "title": "Furious Tempo",
  "description": "+1 Attack Damage, +0.3 Attack Speed. Rage sharpens your reflexes. Faster and harder with every heartbeat.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:blaze_rod" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }],
  "cost": 1
},
"b_rg3aa": {
  "title": "Extinction Event",
  "description": "+4 Attack Damage. You hit with the force of an ending. One swing clears the path.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:dragon_breath" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"b_rg3ab": {
  "title": "Cataclysm",
  "description": "+3 Attack Damage, +0.1 Knockback Resistance. Apocalyptic fury that roots you in place. An earthquake made flesh.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:end_crystal" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }],
  "cost": 1
},
"b_rg3ba": {
  "title": "Manic Speed",
  "description": "+0.6 Attack Speed. Your rage turns you into a machine. Arms piston back and forth without thought.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:piston" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.6, "operation": "addition" } }],
  "cost": 1
},
"b_rg3bb": {
  "title": "Berserk Engine",
  "description": "+2 Attack Damage, +0.4 Attack Speed. Rage made mechanical. A perpetual engine of destruction and fury.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:furnace" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.4, "operation": "addition" } }],
  "cost": 1
},

"b_ab1": {
  "title": "Armor Break",
  "description": "+2 Armor Toughness. You've stripped enough dead soldiers to know where armor buckles. Now you wear it better.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:iron_helmet" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_ab2a": {
  "title": "Plate Render",
  "description": "+3 Armor Toughness. You know the weak points — in armor and in flesh. Both shatter the same.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:chainmail_chestplate" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"b_ab2b": {
  "title": "Rending Blows",
  "description": "+1 Armor Toughness, +2 Attack Damage. Strikes that damage protection and the creature beneath. Two problems, one swing.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:diamond_axe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_ab3aa": {
  "title": "Unbreakable",
  "description": "+4 Armor Toughness. Your armor melds with your body. Blades skip off you like sparks off anvils.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_ingot" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"b_ab3ab": {
  "title": "Living Armor",
  "description": "+2 Armor Toughness, +4 Max Health. Your body IS the armor. Thick, resilient, regenerating. Post-human evolution.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:turtle_helmet" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"b_ab3ba": {
  "title": "Sundering Strikes",
  "description": "+3 Attack Damage. Every hit cracks chitin, dents plate, and shatters bone. Nothing stays protected.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_axe" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"b_ab3bb": {
  "title": "Breach & Destroy",
  "description": "+2 Attack Damage, +2 Armor Toughness. Armored fists that crack armored foes. Steel meets steel and you always win.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:diamond_chestplate" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 2, "operation": "addition" } }],
  "cost": 1
},

"b_en1": {
  "title": "Endurance",
  "description": "+2 Max Health, +0.005 Movement Speed. Survivors endure. Your body has adapted to the endless march.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_apple" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"b_en2a": {
  "title": "Marathon Runner",
  "description": "+0.012 Movement Speed. You can jog all day. The infected tire before you do — if they could tire.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:leather_boots" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.012, "operation": "addition" } }],
  "cost": 1
},
"b_en2b": {
  "title": "Survival Instinct",
  "description": "+4 Max Health. Your body screams 'stay alive' louder than anything else. It listened.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:heart_of_the_sea" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"b_en3aa": {
  "title": "Road Warrior",
  "description": "+0.018 Movement Speed. Born to run the broken highways. Nothing catches you on open ground.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_boots" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.018, "operation": "addition" } }],
  "cost": 1
},
"b_en3ab": {
  "title": "Nomad's Constitution",
  "description": "+0.01 Movement Speed, +3 Max Health. Built for the long haul. Fast enough to flee, tough enough to fight.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:compass" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 3, "operation": "addition" } }],
  "cost": 1
},
"b_en3ba": {
  "title": "Undying Stamina",
  "description": "+6 Max Health. Your vitality seems bottomless. Wounds that kill others merely slow you down.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:enchanted_golden_apple" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 6, "operation": "addition" } }],
  "cost": 1
},
"b_en3bb": {
  "title": "Perpetual Motion",
  "description": "+4 Max Health, +0.008 Movement Speed. A body in motion stays in motion. You never stop moving, never stop breathing.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:respawn_anchor" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }],
  "cost": 1
},

"b_pr1": {
  "title": "Predator",
  "description": "+1 Attack Damage, +0.005 Movement Speed. You don't run from the dead. You hunt them.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:wolf_armor" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"b_pr2a": {
  "title": "Apex Rush",
  "description": "+0.015 Movement Speed. Close distance like a lunging predator. They never see you coming.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:spider_eye" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.015, "operation": "addition" } }],
  "cost": 1
},
"b_pr2b": {
  "title": "Kill Instinct",
  "description": "+2 Attack Damage. That primal voice in your skull that says 'destroy.' You stopped fighting it.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:bone" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_pr3aa": {
  "title": "Cheetah Sprint",
  "description": "+0.02 Movement Speed. Explosive acceleration. You cross kill zones before the infected even lurch forward.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:sugar" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.02, "operation": "addition" } }],
  "cost": 1
},
"b_pr3ab": {
  "title": "Stalker",
  "description": "+0.01 Movement Speed, +2 Attack Damage. Patient speed and lethal precision. The perfect ambush predator.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:ender_pearl" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_pr3ba": {
  "title": "Executioner",
  "description": "+4 Attack Damage. You don't fight the dead. You execute them. Clinical, efficient, absolute.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:diamond_sword" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"b_pr3bb": {
  "title": "Alpha Predator",
  "description": "+3 Attack Damage, +0.008 Movement Speed. Top of the food chain. Fast, strong, and utterly without mercy.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:dragon_head" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }],
  "cost": 1
},

"b_ch1": {
  "title": "Champion",
  "description": "+0.2 Attack Speed, +0.1 Knockback Resistance. Arena-tested. Pit-proven. You've fought everything and won.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_helmet" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.1, "operation": "addition" } }],
  "cost": 1
},
"b_ch2a": {
  "title": "Gladiator",
  "description": "+2 Attack Damage, +2 Max Health. The roar of the crowd — or what's left of it — drives you forward.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:golden_sword" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }],
  "cost": 1
},
"b_ch2b": {
  "title": "War Machine",
  "description": "+1 Armor Toughness, +0.3 Attack Speed, +0.005 Movement Speed. Optimized for combat across every axis.",
  "frame": { "type": "advancement", "data": { "frame": "task" } },
  "icon": { "type": "item", "data": { "item": "minecraft:dispenser" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 1, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.005, "operation": "addition" } }],
  "cost": 1
},
"b_ch3aa": {
  "title": "Warlord",
  "description": "+3 Attack Damage, +4 Max Health. You command the battlefield. The dead fall, the living rally.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:netherite_helmet" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 3, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 4, "operation": "addition" } }],
  "cost": 1
},
"b_ch3ab": {
  "title": "Conqueror",
  "description": "+2 Attack Damage, +2 Max Health, +0.15 Knockback Resistance. Every stat that matters, elevated. A complete fighter.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:nether_star" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_damage", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.max_health", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.knockback_resistance", "value": 0.15, "operation": "addition" } }],
  "cost": 1
},
"b_ch3ba": {
  "title": "Overclock",
  "description": "+0.5 Attack Speed, +0.01 Movement Speed. Push the human body past its limits. Speed in every dimension.",
  "frame": { "type": "advancement", "data": { "frame": "goal" } },
  "icon": { "type": "item", "data": { "item": "minecraft:redstone_block" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.5, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.01, "operation": "addition" } }],
  "cost": 1
},
"b_ch3bb": {
  "title": "Apex Champion",
  "description": "+2 Armor Toughness, +0.4 Attack Speed, +0.008 Movement Speed. The pinnacle. Every system operating at maximum capacity.",
  "frame": { "type": "advancement", "data": { "frame": "challenge" } },
  "icon": { "type": "item", "data": { "item": "minecraft:beacon" } },
  "rewards": [{ "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.armor_toughness", "value": 2, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.attack_speed", "value": 0.4, "operation": "addition" } }, { "type": "puffish_skills:attribute", "data": { "attribute": "minecraft:generic.movement_speed", "value": 0.008, "operation": "addition" } }],
  "cost": 1
}
```

---

## 2. SKILLS (Positions)

```json
"b_if1": { "definition": "b_if1", "x": -480, "y": 600, "root": false },
"b_if2a": { "definition": "b_if2a", "x": -360, "y": 585, "root": false },
"b_if2b": { "definition": "b_if2b", "x": -360, "y": 615, "root": false },
"b_if3aa": { "definition": "b_if3aa", "x": -240, "y": 577, "root": false },
"b_if3ab": { "definition": "b_if3ab", "x": -240, "y": 593, "root": false },
"b_if3ba": { "definition": "b_if3ba", "x": -240, "y": 607, "root": false },
"b_if3bb": { "definition": "b_if3bb", "x": -240, "y": 623, "root": false },

"b_bl1": { "definition": "b_bl1", "x": -503, "y": 671, "root": false },
"b_bl2a": { "definition": "b_bl2a", "x": -397, "y": 729, "root": false },
"b_bl2b": { "definition": "b_bl2b", "x": -415, "y": 753, "root": false },
"b_bl3aa": { "definition": "b_bl3aa", "x": -295, "y": 793, "root": false },
"b_bl3ab": { "definition": "b_bl3ab", "x": -305, "y": 806, "root": false },
"b_bl3ba": { "definition": "b_bl3ba", "x": -313, "y": 817, "root": false },
"b_bl3bb": { "definition": "b_bl3bb", "x": -322, "y": 830, "root": false },

"b_th1": { "definition": "b_th1", "x": -563, "y": 714, "root": false },
"b_th2a": { "definition": "b_th2a", "x": -512, "y": 824, "root": false },
"b_th2b": { "definition": "b_th2b", "x": -540, "y": 833, "root": false },
"b_th3aa": { "definition": "b_th3aa", "x": -467, "y": 935, "root": false },
"b_th3ab": { "definition": "b_th3ab", "x": -482, "y": 940, "root": false },
"b_th3ba": { "definition": "b_th3ba", "x": -495, "y": 945, "root": false },
"b_th3bb": { "definition": "b_th3bb", "x": -511, "y": 949, "root": false },

"b_gr1": { "definition": "b_gr1", "x": -637, "y": 714, "root": false },
"b_gr2a": { "definition": "b_gr2a", "x": -660, "y": 833, "root": false },
"b_gr2b": { "definition": "b_gr2b", "x": -688, "y": 824, "root": false },
"b_gr3aa": { "definition": "b_gr3aa", "x": -689, "y": 949, "root": false },
"b_gr3ab": { "definition": "b_gr3ab", "x": -705, "y": 945, "root": false },
"b_gr3ba": { "definition": "b_gr3ba", "x": -718, "y": 940, "root": false },
"b_gr3bb": { "definition": "b_gr3bb", "x": -733, "y": 935, "root": false },

"b_ag1": { "definition": "b_ag1", "x": -697, "y": 671, "root": false },
"b_ag2a": { "definition": "b_ag2a", "x": -785, "y": 753, "root": false },
"b_ag2b": { "definition": "b_ag2b", "x": -803, "y": 729, "root": false },
"b_ag3aa": { "definition": "b_ag3aa", "x": -878, "y": 830, "root": false },
"b_ag3ab": { "definition": "b_ag3ab", "x": -887, "y": 817, "root": false },
"b_ag3ba": { "definition": "b_ag3ba", "x": -895, "y": 806, "root": false },
"b_ag3bb": { "definition": "b_ag3bb", "x": -905, "y": 793, "root": false },

"b_rg1": { "definition": "b_rg1", "x": -720, "y": 600, "root": false },
"b_rg2a": { "definition": "b_rg2a", "x": -840, "y": 615, "root": false },
"b_rg2b": { "definition": "b_rg2b", "x": -840, "y": 585, "root": false },
"b_rg3aa": { "definition": "b_rg3aa", "x": -960, "y": 623, "root": false },
"b_rg3ab": { "definition": "b_rg3ab", "x": -960, "y": 607, "root": false },
"b_rg3ba": { "definition": "b_rg3ba", "x": -960, "y": 593, "root": false },
"b_rg3bb": { "definition": "b_rg3bb", "x": -960, "y": 577, "root": false },

"b_ab1": { "definition": "b_ab1", "x": -697, "y": 529, "root": false },
"b_ab2a": { "definition": "b_ab2a", "x": -803, "y": 471, "root": false },
"b_ab2b": { "definition": "b_ab2b", "x": -785, "y": 447, "root": false },
"b_ab3aa": { "definition": "b_ab3aa", "x": -905, "y": 407, "root": false },
"b_ab3ab": { "definition": "b_ab3ab", "x": -895, "y": 394, "root": false },
"b_ab3ba": { "definition": "b_ab3ba", "x": -887, "y": 383, "root": false },
"b_ab3bb": { "definition": "b_ab3bb", "x": -878, "y": 370, "root": false },

"b_en1": { "definition": "b_en1", "x": -637, "y": 486, "root": false },
"b_en2a": { "definition": "b_en2a", "x": -688, "y": 376, "root": false },
"b_en2b": { "definition": "b_en2b", "x": -660, "y": 367, "root": false },
"b_en3aa": { "definition": "b_en3aa", "x": -733, "y": 265, "root": false },
"b_en3ab": { "definition": "b_en3ab", "x": -718, "y": 260, "root": false },
"b_en3ba": { "definition": "b_en3ba", "x": -705, "y": 255, "root": false },
"b_en3bb": { "definition": "b_en3bb", "x": -689, "y": 251, "root": false },

"b_pr1": { "definition": "b_pr1", "x": -563, "y": 486, "root": false },
"b_pr2a": { "definition": "b_pr2a", "x": -540, "y": 367, "root": false },
"b_pr2b": { "definition": "b_pr2b", "x": -512, "y": 376, "root": false },
"b_pr3aa": { "definition": "b_pr3aa", "x": -511, "y": 251, "root": false },
"b_pr3ab": { "definition": "b_pr3ab", "x": -495, "y": 255, "root": false },
"b_pr3ba": { "definition": "b_pr3ba", "x": -482, "y": 260, "root": false },
"b_pr3bb": { "definition": "b_pr3bb", "x": -467, "y": 265, "root": false },

"b_ch1": { "definition": "b_ch1", "x": -503, "y": 529, "root": false },
"b_ch2a": { "definition": "b_ch2a", "x": -415, "y": 447, "root": false },
"b_ch2b": { "definition": "b_ch2b", "x": -397, "y": 471, "root": false },
"b_ch3aa": { "definition": "b_ch3aa", "x": -322, "y": 370, "root": false },
"b_ch3ab": { "definition": "b_ch3ab", "x": -313, "y": 383, "root": false },
"b_ch3ba": { "definition": "b_ch3ba", "x": -305, "y": 394, "root": false },
"b_ch3bb": { "definition": "b_ch3bb", "x": -295, "y": 407, "root": false }
```

---

## 3. CONNECTIONS

### Normal Connections (bidirectional — pick_brawler to L1 nodes, and L1→L2→L3 tree structure)

```json
["pick_brawler", "b_if1"],
["pick_brawler", "b_bl1"],
["pick_brawler", "b_th1"],
["pick_brawler", "b_gr1"],
["pick_brawler", "b_ag1"],
["pick_brawler", "b_rg1"],
["pick_brawler", "b_ab1"],
["pick_brawler", "b_en1"],
["pick_brawler", "b_pr1"],
["pick_brawler", "b_ch1"],

["b_if1", "b_if2a"],
["b_if1", "b_if2b"],
["b_if2a", "b_if3aa"],
["b_if2a", "b_if3ab"],
["b_if2b", "b_if3ba"],
["b_if2b", "b_if3bb"],

["b_bl1", "b_bl2a"],
["b_bl1", "b_bl2b"],
["b_bl2a", "b_bl3aa"],
["b_bl2a", "b_bl3ab"],
["b_bl2b", "b_bl3ba"],
["b_bl2b", "b_bl3bb"],

["b_th1", "b_th2a"],
["b_th1", "b_th2b"],
["b_th2a", "b_th3aa"],
["b_th2a", "b_th3ab"],
["b_th2b", "b_th3ba"],
["b_th2b", "b_th3bb"],

["b_gr1", "b_gr2a"],
["b_gr1", "b_gr2b"],
["b_gr2a", "b_gr3aa"],
["b_gr2a", "b_gr3ab"],
["b_gr2b", "b_gr3ba"],
["b_gr2b", "b_gr3bb"],

["b_ag1", "b_ag2a"],
["b_ag1", "b_ag2b"],
["b_ag2a", "b_ag3aa"],
["b_ag2a", "b_ag3ab"],
["b_ag2b", "b_ag3ba"],
["b_ag2b", "b_ag3bb"],

["b_rg1", "b_rg2a"],
["b_rg1", "b_rg2b"],
["b_rg2a", "b_rg3aa"],
["b_rg2a", "b_rg3ab"],
["b_rg2b", "b_rg3ba"],
["b_rg2b", "b_rg3bb"],

["b_ab1", "b_ab2a"],
["b_ab1", "b_ab2b"],
["b_ab2a", "b_ab3aa"],
["b_ab2a", "b_ab3ab"],
["b_ab2b", "b_ab3ba"],
["b_ab2b", "b_ab3bb"],

["b_en1", "b_en2a"],
["b_en1", "b_en2b"],
["b_en2a", "b_en3aa"],
["b_en2a", "b_en3ab"],
["b_en2b", "b_en3ba"],
["b_en2b", "b_en3bb"],

["b_pr1", "b_pr2a"],
["b_pr1", "b_pr2b"],
["b_pr2a", "b_pr3aa"],
["b_pr2a", "b_pr3ab"],
["b_pr2b", "b_pr3ba"],
["b_pr2b", "b_pr3bb"],

["b_ch1", "b_ch2a"],
["b_ch1", "b_ch2b"],
["b_ch2a", "b_ch3aa"],
["b_ch2a", "b_ch3ab"],
["b_ch2b", "b_ch3ba"],
["b_ch2b", "b_ch3bb"]
```

### Exclusive Connections (bidirectional — L2a vs L2b, L3aa vs L3ab, L3ba vs L3bb)

```json
["b_if2a", "b_if2b"],
["b_if3aa", "b_if3ab"],
["b_if3ba", "b_if3bb"],

["b_bl2a", "b_bl2b"],
["b_bl3aa", "b_bl3ab"],
["b_bl3ba", "b_bl3bb"],

["b_th2a", "b_th2b"],
["b_th3aa", "b_th3ab"],
["b_th3ba", "b_th3bb"],

["b_gr2a", "b_gr2b"],
["b_gr3aa", "b_gr3ab"],
["b_gr3ba", "b_gr3bb"],

["b_ag2a", "b_ag2b"],
["b_ag3aa", "b_ag3ab"],
["b_ag3ba", "b_ag3bb"],

["b_rg2a", "b_rg2b"],
["b_rg3aa", "b_rg3ab"],
["b_rg3ba", "b_rg3bb"],

["b_ab2a", "b_ab2b"],
["b_ab3aa", "b_ab3ab"],
["b_ab3ba", "b_ab3bb"],

["b_en2a", "b_en2b"],
["b_en3aa", "b_en3ab"],
["b_en3ba", "b_en3bb"],

["b_pr2a", "b_pr2b"],
["b_pr3aa", "b_pr3ab"],
["b_pr3ba", "b_pr3bb"],

["b_ch2a", "b_ch2b"],
["b_ch3aa", "b_ch3ab"],
["b_ch3ba", "b_ch3bb"]
```
