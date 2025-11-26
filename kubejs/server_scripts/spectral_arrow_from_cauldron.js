BlockEvents.rightClicked("amendments:liquid_cauldron", (event) => {
  const block = event.block;
  const player = event.player;
  const item = event.item;
  const hand = event.hand;
  const fluid = block.getEntityData()["fluid"] ?? {};

  // Cauldron water level is a string like "1", "2", "3"
  let level = parseInt(block.properties["level"] ?? "0");
  if (level <= 0) return;
  if (!item || item.empty) return;
  if (!(item.id === "minecraft:arrow")) return;
  if (!fluid) return;
  if (!(fluid.id === "supplementaries:lumisene")) return;

  if (hand == "OFF_HAND") {
    player.swing("off_hand", true);
  } else {
    player.swing();
  }
  if (!player.creativeMode) {
    item.count--;
  }
  player.give("minecraft:spectral_arrow");

  // Lower cauldron water level only in half of all crafts
  if (level > 1) {
    if (Math.random() < 0.5) {
      block.set("amendments:liquid_cauldron", { level: String(level - 1) });
    }
  } else {
    block.set("minecraft:cauldron"); // becomes empty
  }
});
