const cauldronRecipes = [
  {
    input: "minecraft:iron_ingot",
    fluid: "supplementaries:lumisene",
    output: "minecraft:gold_ingot",
    consumeInput: true,
  },
];

// Handle cauldron right-click
BlockEvents.rightClicked("amendments:liquid_cauldron", (event) => {
  const block = event.block;
  const player = event.player;
  const item = event.item;
  const fluid = block.getEntityData()["fluid"] ?? {};

  if (!player.tags.contains("phis.irontogold")) return;

  // Cauldron water level is a string like "1", "2", "3"
  let level = parseInt(block.properties["level"] ?? "0");
  if (level <= 0) return;
  if (!item || item.empty) return;
  if (!(item.id === "minecraft:iron_ingot")) return;
  if (!fluid) return;
  if (!(fluid.id === "supplementaries:lumisene")) return;

  if (!player.creativeMode) {
    item.count--;
  }
  player.give("minecraft:gold_ingot");

  // Lower cauldron water level only in half of all crafts
  if (level > 1) {
    if (Math.random() < 0.5) {
      block.set("amendments:liquid_cauldron", { level: String(level - 1) });
    }
  } else {
    block.set("minecraft:cauldron"); // becomes empty
  }
});
