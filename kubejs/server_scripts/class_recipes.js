// Server scripts for THE UNDEAD REALM
// Crafted via Datapack Studio. Place in: kubejs/server_scripts/class_recipes.js
// Support: Oracle Free Tier, TACZ 1.21.1, and Pufferfish class rules

ServerEvents.recipes(event => {
  event.custom({"type":"minecraft:crafting_shaped","result":{"id":"tacz:ammo","count":12,"components":{"minecraft:custom_data":{"AmmoId":"tacz:9mm"}}},"conditions":[{"type":"kubejs:player_tag","tag":"class_gunner"}],"pattern":["LGL","GIG","LGL"],"key":{"L":{"item":"minecraft:iron_nugget"},"G":{"item":"minecraft:gunpowder"},"I":{"item":"minecraft:lead"}}}).id('apocalypse:gunner_9mm_ammo');

  event.custom({"type":"minecraft:crafting_shaped","result":{"id":"tacz:ammo","count":10,"components":{"minecraft:custom_data":{"AmmoId":"tacz:308"}}},"conditions":[{"type":"kubejs:player_tag","tag":"class_gunner"}],"pattern":["LGL","GIG","LGL"],"key":{"L":{"item":"minecraft:iron_ingot"},"G":{"item":"minecraft:gunpowder"},"I":{"item":"minecraft:lead"}}}).id('apocalypse:gunner_308_ammo');

  event.custom({"type":"minecraft:crafting_shaped","result":{"id":"minecraft:diamond_pickaxe","count":1},"conditions":[{"type":"kubejs:player_tag","tag":"class_technician"}],"pattern":["XDX"," S "," S "],"key":{"X":{"item":"minecraft:diamond"},"D":{"item":"minecraft:iron_ingot"},"S":{"item":"minecraft:stick"}}}).id('apocalypse:technician_diamond_pickaxe');

  event.custom({"type":"minecraft:crafting_shaped","result":{"id":"immersiveengineering:hammer","count":1},"conditions":[{"type":"kubejs:player_tag","tag":"class_technician"}],"pattern":[" XI","X  ","   "],"key":{"X":{"item":"minecraft:iron_ingot"},"I":{"item":"minecraft:stick"}}}).id('apocalypse:technician_ie_hammer');

  event.custom({"type":"minecraft:crafting_shaped","result":{"id":"minecraft:hopper","count":2},"conditions":[{"type":"kubejs:player_tag","tag":"class_technician"}],"pattern":["X X","XCX"," X "],"key":{"X":{"item":"minecraft:iron_ingot"},"C":{"item":"minecraft:chest"}}}).id('apocalypse:technician_hopper_cheap');

  event.custom({"type":"minecraft:crafting_shaped","result":{"id":"minecraft:golden_apple","count":1},"conditions":[{"type":"kubejs:player_tag","tag":"class_medic"}],"pattern":[" XX","XAX"," XX"],"key":{"X":{"item":"minecraft:gold_ingot"},"A":{"item":"minecraft:apple"}}}).id('apocalypse:medic_golden_apple');

  event.custom({"type":"minecraft:crafting_shapeless","result":{"id":"minecraft:splash_potion","count":1,"components":{"minecraft:potion_contents":{"potion":"minecraft:healing"}}},"conditions":[{"type":"kubejs:player_tag","tag":"class_medic"}],"ingredients":[{"item":"minecraft:potion"},{"item":"minecraft:gunpowder"}]}).id('apocalypse:medic_splash_healing_potion');

  event.custom({"type":"minecraft:crafting_shapeless","result":{"id":"minecraft:potion","count":1,"components":{"minecraft:potion_contents":{"potion":"minecraft:healing"}}},"conditions":[{"type":"kubejs:player_tag","tag":"class_medic"}],"ingredients":[{"item":"minecraft:glass_bottle"},{"item":"minecraft:gold_nugget"},{"item":"minecraft:glistering_melon_slice"}]}).id('apocalypse:medic_healing_potion');

  event.custom({"type":"minecraft:crafting_shaped","result":{"id":"sophisticatedbackpacks:backpack","count":1},"conditions":[{"type":"kubejs:player_tag","tag":"class_ghost"}],"pattern":["XLX","LCL","XLX"],"key":{"X":{"item":"minecraft:iron_nugget"},"L":{"item":"minecraft:leather"},"C":{"item":"minecraft:chest"}}}).id('apocalypse:ghost_backpack');

});

// Loot injection moved to: kubejs/server_scripts/gun_loot_tables.js
// (Tiered gun, ammo, and attachment loot system)
