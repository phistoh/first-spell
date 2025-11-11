// Restrict tools and armor
const tiers = ["golden", "iron", "diamond", "netherite"];

// Using items
// Vanilla
for (const tier of tiers) {
  let stage = `phis_stage_${tier}`;
  if (tier == "golden") {
    stage = "phis_stage_copper_and_gold";
  }
  AStages.addRestrictionForItem(
    `phis/use_${tier}_equipment`,
    stage,
    `minecraft:${tier}_pickaxe`,
    `minecraft:${tier}_shovel`,
    `minecraft:${tier}_axe`,
    `minecraft:${tier}_hoe`,
    `minecraft:${tier}_sword`,
    `minecraft:${tier}_helmet`,
    `minecraft:${tier}_chestplate`,
    `minecraft:${tier}_boots`,
    `minecraft:${tier}_leggings`,
    `mounts_of_mayhem:${tier}_spear`
  )
    .setCanBeStoredInInventory(true)
    .setCanBeStoredInContainers(true)
    .setCanPickedUp(true);
}

// Copper
AStages.addRestrictionForItem(
  "phis/use_copper_equipment",
  "phis_stage_copper_and_gold",
  "leafscopperbackport:copper_pickaxe",
  "leafscopperbackport:copper_shovel",
  "leafscopperbackport:copper_axe",
  "leafscopperbackport:copper_hoe",
  "leafscopperbackport:copper_sword",
  "leafscopperbackport:copper_armor_helmet",
  "leafscopperbackport:copper_armor_chestplate",
  "leafscopperbackport:copper_armor_boots",
  "leafscopperbackport:copper_armor_leggings"
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Deeper and Darker
AStages.addRestrictionForItem(
  "phis/use_warden_equipment",
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
  "deeperdarker:resonarium_sword",
  "deeperdarker:warden_helmet",
  "deeperdarker:warden_chestplate",
  "deeperdarker:warden_boots",
  "deeperdarker:warden_leggings",
  "deeperdarker:resonarium_helmet",
  "deeperdarker:resonarium_chestplate",
  "deeperdarker:resonarium_boots",
  "deeperdarker:resonarium_leggings"
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

// Crafting Waystones

AStages.addRestrictionForRecipe(
  "phis/crafting_return_scroll",
  "phis_stage_return_scroll",
  "minecraft:crafting",
  "waystones:return_scroll"
);

AStages.addRestrictionForRecipe(
  "phis/crafting_warp_stone",
  "phis_stage_warp_stone",
  "minecraft:crafting",
  "waystones:warp_stone"
);
AStages.addRestrictionForItem(
  "phis/use_warp_stone",
  "phis_stage_warp_stone",
  "waystones:warp_stone"
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

const waystone_recipe_ids = [
  "waystones:waystone",
  "waystones:mossy_waystone",
  "waystones:mossy_waystone_from_moss_blocks",
  "waystones:mossy_waystone_from_vines",
  "waystones:sandy_waystone",
  "waystones:deepslate_waystone",
  "waystones:blackstone_waystone",
  "waystones:end_stone_waystone"
];
for (const id of waystone_recipe_ids) {
  AStages.addRestrictionForRecipe(
    "phis/crafting_waystone",
    "phis_stage_crafting_waystone",
    "minecraft:crafting",
    id
  );
}

AStages.addRestrictionForItem(
  "phis/use_waystone",
  "phis_stage_waystone",
  "waystones:waystone",
  "waystones:mossy_waystone",
  "waystones:sandy_waystone",
  "waystones:deepslate_waystone",
  "waystones:blackstone_waystone",
  "waystones:end_stone_waystone"
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Arcane Essence
AStages.addRestrictionForRecipe(
  "phis/crafting_arcane_essence",
  "phis_stage_arcane_essence",
  "minecraft:crafting",
  "phis:arcane_essence"
);