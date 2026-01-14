StartupEvents.registry("item", (event) => {
  //Offensive Poison
  event
    .create("drained_ancient_tome")
    .texture("phis:item/drained_ancient_tome")
    .displayName("Drained Ancient Tome")
    .tooltip("Use to get an Ancient Book with a random enchantment.")
    .useAnimation("crossbow")
    .useDuration((itemstack) => 16)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      return global.finishUsingAncientArcaneScroll(itemstack, level, entity);
    });
});

global.finishUsingAncientArcaneScroll = (itemstack, level, entity) => {
  if (!level.isClientSide()) {
    const player_name = entity.name.string;
    const coordinates = `${entity.x} ${entity.y} ${entity.z}`;
    entity.server.runCommandSilent(
      `playsound minecraft:block.enchantment_table.use master ${player_name} ${coordinates}`
    );
    entity.server.runCommandSilent(
      `loot give ${player_name} loot phis:random_ancient_book`
    );
  }
  itemstack.shrink(1);
  return itemstack;
};
