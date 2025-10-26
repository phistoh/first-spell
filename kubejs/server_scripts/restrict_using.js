const tiersUsingRestriction = ["golden", "iron", "diamond", "netherite"];

// Vanilla
for (const tier of tiersUsingRestriction) {
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
  "leafscopperbackport:$copper_armor_leggings"
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
