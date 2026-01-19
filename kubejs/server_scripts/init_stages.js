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
    `mounts_of_mayhem:${tier}_spear`,
    `farmersdelight:${tier}_knife`,
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
  "leafscopperbackport:copper_armor_leggings",
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
  "deeperdarker:resonarium_leggings",
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
      recipeID,
    );
  }
  let restriction = `phis/crafting_${tier}_knife`;
  let stage = `phis_stage_${tier}`;
  if (tier == "copper" || tier == "golden") {
    stage = "phis_stage_copper_and_gold";
  }
  let recipeID = `farmersdelight:${tier}_knife`;
  AStages.addRestrictionForRecipe(
    restriction,
    stage,
    "minecraft:crafting",
    recipeID,
  );
}

// Crafting Waystones

AStages.addRestrictionForRecipe(
  "phis/crafting_return_scroll",
  "phis_stage_return_scroll",
  "minecraft:crafting",
  "waystones:return_scroll",
);

AStages.addRestrictionForRecipe(
  "phis/crafting_unbound_scroll",
  "phis_stage_return_scroll",
  "minecraft:crafting",
  "waystones:blank_scroll",
);

AStages.addRestrictionForRecipe(
  "phis/crafting_warp_stone",
  "phis_stage_warp_stone",
  "minecraft:crafting",
  "waystones:warp_stone",
);
AStages.addRestrictionForItem(
  "phis/use_warp_stone",
  "phis_stage_warp_stone",
  "waystones:warp_stone",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

const waystone_recipe_ids = [
  "waystone",
  "mossy_waystone",
  "mossy_waystone_from_moss_blocks",
  "mossy_waystone_from_vines",
  "sandy_waystone",
  "deepslate_waystone",
  "blackstone_waystone",
  "end_stone_waystone",
];
for (const id of waystone_recipe_ids) {
  AStages.addRestrictionForRecipe(
    `phis/crafting_${id}`,
    "phis_stage_waystone",
    "minecraft:crafting",
    `waystones:${id}`,
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
  "waystones:end_stone_waystone",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true)
  .setJadeBlockMessage((stack) => Component.gray(stack.getHoverName()));

// Arcane Essence
AStages.addRestrictionForRecipe(
  "phis/crafting_arcane_essence",
  "phis_stage_arcane_essence",
  "minecraft:crafting",
  "kubejs:arcane_essence",
);

// Scroll Forge
AStages.addRestrictionForRecipe(
  "phis/crafting_scroll_forge",
  "phis_stage_scroll_forge",
  "minecraft:crafting",
  "irons_spellbooks:scroll_forge",
);
AStages.addRestrictionForScreen(
  "phis/opening_scroll_forge",
  "phis_stage_scroll_forge",
  "irons_spellbooks:scroll_forge_menu",
);
AStages.addRestrictionForItem(
  "phis/use_scroll_forge",
  "phis_stage_scroll_forge",
  "irons_spellbooks:scroll_forge",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Arcane Anvil
AStages.addRestrictionForRecipe(
  "phis/crafting_arcane_anvil",
  "phis_stage_arcane_anvil",
  "minecraft:crafting",
  "irons_spellbooks:arcane_anvil",
);
AStages.addRestrictionForScreen(
  "phis/opening_arcane_anvil",
  "phis_stage_arcane_anvil",
  "irons_spellbooks:arcane_anvil_menu",
);
AStages.addRestrictionForItem(
  "phis/use_arcane_anvil",
  "phis_stage_arcane_anvil",
  "irons_spellbooks:arcane_anvil",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Musket
AStages.addRestrictionForRecipe(
  "phis/crafting_simple_musket",
  "phis_stage_muskets_and_bombs",
  "minecraft:crafting",
  "simplemusket:musket",
);
AStages.addRestrictionForItem(
  "phis/use_simple_musket",
  "phis_stage_muskets_and_bombs",
  "simplemusket:musket",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

AStages.addRestrictionForRecipe(
  "phis/crafting_hellfire_ammo",
  "phis_stage_hellfire_ammo",
  "minecraft:crafting",
  "kubejs:hellfire_cartridge",
);

// Bombs
AStages.addRestrictionForRecipe(
  "phis/crafting_bomb",
  "phis_stage_muskets_and_bombs",
  "minecraft:crafting",
  "supplementaries:bomb",
);
AStages.addRestrictionForItem(
  "phis/use_bombs",
  "phis_stage_muskets_and_bombs",
  "supplementaries:bomb",
  "supplementaries:bomb_blue",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Fireworks
const fireworks_recipe_ids = ["firework_rocket", "firework_rocket_simple"];
for (const id of fireworks_recipe_ids) {
  AStages.addRestrictionForRecipe(
    `phis/crafting_${id}`,
    "phis_stage_fireworks",
    "minecraft:crafting",
    `minecraft:${id}`,
  );
}
AStages.addRestrictionForItem(
  "phis/use_fireworks",
  "phis_stage_fireworks",
  "minecraft:firework_rocket",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Linked Pouch
AStages.addRestrictionForRecipe(
  "phis/crafting_linked_pouch",
  "phis_stage_linked_pouch",
  "minecraft:crafting",
  "linkedchests:linked_pouch",
);
AStages.addRestrictionForItem(
  "phis/use_linked_pouch",
  "phis_stage_linked_pouch",
  "linkedchests:linked_pouch",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Eldritch
AStages.addRestrictionForRecipe(
  "phis/crafting_eldritch_manuscript",
  "phis_stage_eldritch_spells",
  "minecraft:crafting",
  "irons_spellbooks:eldritch_manuscript",
);
AStages.addRestrictionForItem(
  "phis/use_eldritch_manuscript",
  "phis_stage_eldritch_spells",
  "irons_spellbooks:eldritch_manuscript",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// // Fated Altar
// AStages.addRestrictionForRecipe(
//   "phis/crafting_fated_altar",
//   "phis_stage_fated_inventory",
//   "minecraft:crafting",
//   "fated_inventory:fated_altar"
// );
// AStages.addRestrictionForItem(
//   "phis/use_fated_altar",
//   "phis_stage_fated_inventory",
//   "fated_inventory:fated_altar"
// )
//   .setCanBeStoredInInventory(true)
//   .setCanBeStoredInContainers(true)
//   .setCanPickedUp(true)
//   .setJadeBlockMessage((stack) => Component.gray(stack.getHoverName()));

// Grappling Hooks
const hooks = ["diamond_hook", "redstone_hook", "ender_hook"];
for (const hook of hooks) {
  AStages.addRestrictionForRecipe(
    `phis/crafting_${hook}`,
    "phis_stage_grappling_hooks",
    "minecraft:crafting",
    `kubejs:${hook}`,
  );
  AStages.addRestrictionForItem(
    `phis/use_${hook}`,
    "phis_stage_grappling_hooks",
    `hooked:${hook}`,
  )
    .setCanBeStoredInInventory(true)
    .setCanBeStoredInContainers(true)
    .setCanPickedUp(true);
}

// Assassin poisons
const poisons = [
  "deadly_poison",
  "instant_poison",
  "amplifying_poison",
  "numbing_poison",
  "crippling_poison",
  "atrophic_poison",
  "leeching_poison",
];
for (const poison of poisons) {
  AStages.addRestrictionForRecipe(
    `phis/crafting_${poison}`,
    "phis_stage_assassin_poisons",
    "minecraft:crafting",
    `kubejs:${poison}`,
  );
}

// Manuscripts
const schools = [
  "fire",
  "ice",
  "lightning",
  "holy",
  "ender",
  "blood",
  "evocation",
  "nature",
  "sound",
];
for (const school of schools) {
  AStages.addRestrictionForRecipe(
    `phis/crafting_${school}_manuscript`,
    `phis_stage_manuscript_${school}`,
    "minecraft:crafting",
    `irons_restrictions:${school}_manuscript`,
  );
}

// Backpacks
// Tier 2
AStages.addRestrictionForRecipe(
  "phis/crafting_backpack_gold",
  "phis_stage_backpack_gold",
  "minecraft:crafting",
  "phis:gold_backpack",
);

AStages.addRestrictionForItem(
  "phis/use_gold_backpack",
  "phis_stage_backpack_gold",
  "sophisticatedbackpacks:gold_backpack",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Tier 3
AStages.addRestrictionForRecipe(
  "phis/crafting_backpack_diamond",
  "phis_stage_backpack_diamond",
  "minecraft:crafting",
  "phis:diamond_backpack",
);
AStages.addRestrictionForItem(
  "phis/use_diamond_backpack",
  "phis_stage_backpack_diamond",
  "sophisticatedbackpacks:diamond_backpack",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Tier 4
AStages.addRestrictionForRecipe(
  "phis/crafting_backpack_netherite",
  "phis_stage_backpack_netherite",
  "minecraft:crafting",
  "phis:netherite_backpack",
);

AStages.addRestrictionForItem(
  "phis/use_netherite_backpack",
  "phis_stage_backpack_netherite",
  "sophisticatedbackpacks:netherite_backpack",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Infinite Dimensions
AStages.addRestrictionForRecipe(
  "phis/crafting_infinity_key",
  "phis_stage_infinity_key",
  "minecraft:crafting",
  "kubejs:infinity_key",
);

AStages.addRestrictionForItem(
  "phis/use_infinity_key",
  "phis_stage_infinity_key",
  "kubejs:infinity_key",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);

// Dragon Breath
AStages.addRestrictionForRecipe(
  "phis/crafting_dragon_breath",
  "phis_stage_dragon_breath",
  "rubinated_nether:freezing",
  "kubejs:dragon_breath_freezing",
);

// Keep inventory
AStages.addRestrictionForRecipe(
  "phis/crafting_keeper_of_inventories",
  "phis_stage_keeper_of_inventories",
  "minecraft:crafting",
  "keeperofinventories:keeper_of_inventories_craft",
);

// Cobblemon
AStages.addRestrictionForTag(
  "phis/use_pokeballs",
  "phis_stage_cobblemon",
  "cobblemon:poke_balls",
)
  .setCanBeStoredInInventory(true)
  .setCanBeStoredInContainers(true)
  .setCanPickedUp(true);
