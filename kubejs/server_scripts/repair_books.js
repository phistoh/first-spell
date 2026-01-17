BlockEvents.rightClicked("minecraft:anvil", (event) => {
  const player = event.player;
  const player_name = player.name.string;
  const coordinates = `${player.x} ${player.y} ${player.z}`;
  const item = event.item;
  const hand = event.hand;
  const block = event.block;
  const server = event.server;

  if (!item || item.empty) return;
  if (!(item.id === "immersiveenchanting:ancient_book")) return;
  if (!player.isShiftKeyDown()) return;
  if (hand == "OFF_HAND") return;

  const nbt = item.toNBT()?.components;

  if ("minecraft:enchantments" in nbt) {
    const enchantment = nbt["minecraft:enchantments"];
    const x = block.x;
    const y = block.y;
    const z = block.z;
    server.runCommandSilent(
      `particle supplementaries:bottling_xp ${x} ${y} ${z} 0 0 0 .25 25`
    );
    server.runCommandSilent(
      `playsound minecraft:item.wolf_armor.repair master ${player_name} ${coordinates}`
    );
    server.runCommandSilent(
      `give ${player_name} immersiveenchanting:ancient_book[stored_enchantments=${enchantment}]`
    );
    player.swing();
    if (!player.creativeMode) {
      item.count--;
    }
  }

  event.cancel();
});
