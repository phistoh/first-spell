// DIAMOND TIER

// Restrict crafting
AStages.addRestrictionForRecipe("phis/crafting_diamond_pickaxe", "phis_stage_diamond", "minecraft:crafting", "minecraft:diamond_pickaxe")
AStages.addRestrictionForRecipe("phis/crafting_diamond_shovel", "phis_stage_diamond", "minecraft:crafting", "minecraft:diamond_shovel")
AStages.addRestrictionForRecipe("phis/crafting_diamond_axe", "phis_stage_diamond", "minecraft:crafting", "minecraft:diamond_axe")
AStages.addRestrictionForRecipe("phis/crafting_diamond_hoe", "phis_stage_diamond", "minecraft:crafting", "minecraft:diamond_hoe")
AStages.addRestrictionForRecipe("phis/crafting_diamond_sword", "phis_stage_diamond", "minecraft:crafting", "minecraft:diamond_sword")
AStages.addRestrictionForRecipe("phis/crafting_diamond_helmet", "phis_stage_diamond", "minecraft:crafting", "minecraft:diamond_helmet")
AStages.addRestrictionForRecipe("phis/crafting_diamond_chestplate", "phis_stage_diamond", "minecraft:crafting", "minecraft:diamond_chestplate")
AStages.addRestrictionForRecipe("phis/crafting_diamond_leggings", "phis_stage_diamond", "minecraft:crafting", "minecraft:diamond_leggings")
AStages.addRestrictionForRecipe("phis/crafting_diamond_boots", "phis_stage_diamond", "minecraft:crafting", "minecraft:diamond_boots")

// Restrict usage
AStages.addRestrictionForArmor("phis/use_diamond_armor", "phis_stage_diamond", "minecraft:diamond_helmet", "minecraft:diamond_chestplate", "minecraft:diamond_boots", "minecraft:diamond_leggings")
AStages.addRestrictionForItem("phis/use_diamond_tools", "phis_stage_diamond", "minecraft:diamond_pickaxe", "minecraft:diamond_shovel", "minecraft:diamond_axe", "minecraft:diamond_hoe", "minecraft:diamond_sword").setCanBeStoredInInventory(true)
.setCanBeStoredInContainers(true)
.setCanPickedUp(true)
