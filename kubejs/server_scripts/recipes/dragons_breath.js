ServerEvents.recipes((event) => {
  event
    .custom({
      type: "rubinated_nether:freezing",
      category: "freezable_misc",
      cookingtime: 400,
      experience: 1.0,
      ingredient: {
        item: "supplementaries:lumisene_bottle",
      },
      result: {
        id: "minecraft:dragon_breath",
      },
    })
    .id("kubejs:dragon_breath_freezing");
});
