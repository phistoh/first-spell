// Restrict tools and armor
const tiers = ["golden", "iron", "diamond", "netherite"];

// Using items
// Vanilla
for (const tier of tiers) {
  let stage = `phis_stage_${tier}`;
  if (tier == "golden") {
    stage = "phis_stage_copper_and_gold";
  }
  AStages.addRestrictionForArmor(
    `phis/use_${tier}_armor`,
    stage,
    `minecraft:${tier}_helmet`,
    `minecraft:${tier}_chestplate`,
    `minecraft:${tier}_boots`,
    `minecraft:${tier}_leggings`
  );
  AStages.addRestrictionForItem(
    `phis/use_${tier}_tools`,
    stage,
    `minecraft:${tier}_pickaxe`,
    `minecraft:${tier}_shovel`,
    `minecraft:${tier}_axe`,
    `minecraft:${tier}_hoe`,
    `minecraft:${tier}_sword`
  )
    .setCanBeStoredInInventory(true)
    .setCanBeStoredInContainers(true)
    .setCanPickedUp(true);
}

// Copper
AStages.addRestrictionForArmor(
  "phis/use_copper_armor",
  "phis_stage_copper_and_gold",
  "leafscopperbackport:copper_armor_helmet",
  "leafscopperbackport:copper_armor_chestplate",
  "leafscopperbackport:copper_armor_boots",
  "leafscopperbackport:copper_armor_leggings"
);
AStages.addRestrictionForItem(
  "phis/use_copper_tools",
  "phis_stage_copper_and_gold",
  "leafscopperbackport:copper_pickaxe",
  "leafscopperbackport:copper_shovel",
  "leafscopperbackport:copper_axe",
  "leafscopperbackport:copper_hoe",
  "leafscopperbackport:copper_sword"
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Deeper and Darker
AStages.addRestrictionForArmor(
  "phis/use_warden_armor",
  "phis_stage_warden",
  "deeperdarker:warden_helmet",
  "deeperdarker:warden_chestplate",
  "deeperdarker:warden_boots",
  "deeperdarker:warden_leggings",
  "deeperdarker:resonarium_helmet",
  "deeperdarker:resonarium_chestplate",
  "deeperdarker:resonarium_boots",
  "deeperdarker:resonarium_leggings"
);
AStages.addRestrictionForItem(
  "phis/use_warden_tools",
  "phis_stage_warden",
  "deeperdarker:warden_pickaxe",
  "deeperdarker:warden_shovel",
  "deeperdarker:warden_axe",
  "deeperdarker:warden_hoe",
  "deeperdarker:warden_sword",
  "deeperdarker:resonarium_pickaxe",
  "deeperdarker:resonarium_shovel",
  "deeperdarker:resonarium_axe",
  "deeperdarker:resonarium_hoe",
  "deeperdarker:resonarium_sword"
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);


// Crafting tools and armor

const tools = ["pickaxe", "shovel", "axe", "hoe", "sword"];
const armors = ["helmet", "chestplate", "leggings", "boots"];

for (const tier of tiers) {
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
