// Restrict crafting
const tiersCraftingRestriction = ["copper", "golden", "iron", "diamond", "netherite", "warden"];
const tools = ["pickaxe", "shovel", "axe", "hoe", "sword"];
const armors = ["helmet", "chestplate", "leggings", "boots"];

for (const tier of tiersCraftingRestriction) {
  for (const item of tools.concat(armors)) {
    let restriction = `phis/crafting_${tier}_${item}`;
    let stage = `phis_stage_${tier}`;
    if (tier == "copper" || tier == "golden") {
      stage = "phis_stage_copper_and_gold";
    }
    let recipeID = `minecraft:${tier}_${item}`;
    if (tier == "warden") {
      recipeID = `deeperdarker:${tier}_${item}_smithing`;
    } else if (tier == "copper") {
      recipeID = `leafscopperbackport:${tier}_${item}_recipe`;
    }

    AStages.addRestrictionForRecipe(
      restriction,
      stage,
      "minecraft:crafting",
      recipeID
    );
  }
}