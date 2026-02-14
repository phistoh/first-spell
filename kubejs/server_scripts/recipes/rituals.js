ServerEvents.recipes((event) => {
  event
    .custom({
      type: "alshanex_familiars:ritual_recipe",
      central_item: {
        item: "deeperdarker:heart_of_the_deep",
      },
      inputs: [
        {
          ingredient: {
            item: "minecraft:nether_star",
          },
          count: 1,
          consume: true,
        },
        {
          ingredient: {
            item: "bosses_of_mass_destruction:soul_star",
          },
          count: 1,
          consume: true,
        },
        {
          ingredient: {
            item: "endrem:evil_eye",
          },
          count: 1,
          consume: true,
        },
        {
          ingredient: {
            item: "keeperofinventories:keeper_of_inventories",
          },
          count: 1,
          consume: true,
        },
      ],
      result: {
        id: "unbreakablecatalyst:unbreakable_catalyst",
      },
      particle_type: "minecraft:warped_spore",
    })
    .id("kubejs:unbreakable_catalyst_ritual");

    event
    .custom({
      type: "alshanex_familiars:ritual_recipe",
      central_item: {
        item: "minecraft:nether_star",
      },
      inputs: [
        {
          ingredient: {
            item: "minecraft:netherite_ingot",
          },
          count: 1,
          consume: true,
        },
        {
          ingredient: {
            item: "minecraft:shulker_shell",
          },
          count: 1,
          consume: true,
        },
        {
          ingredient: {
            item: "minecraft:netherite_ingot",
          },
          count: 1,
          consume: true,
        },
        {
          ingredient: {
            item: "minecraft:shulker_shell",
          },
          count: 1,
          consume: true,
        },
      ],
      result: {
        id: "cobblemon:master_ball",
      },
      particle_type: "minecraft:witch",
    })
    .id("kubejs:masterball_ritual");
});
