const entry = LootEntry.alternative(
  LootEntry.of("minecraft:golden_apple").when(
    (c) =>
      c.randomChance(0.1) &&
      c.matchMainHand(
        ItemFilter.anyOf(
          ItemFilter.hasEnchantment("minecraft:silk_touch"),
          ItemFilter.tag("#c:tools/shear"),
          ItemFilter.tag("#c:tools/shears")
        ).negate()
      ) &&
      c.matchPlayerCustom((player) => {
        return player && player.tags.contains("phis.extraapples");
      })
  ),
  LootEntry.of("minecraft:enchanted_golden_apple").when((c) =>
    c.randomChance(0.001) &&
      c.matchMainHand(
        ItemFilter.anyOf(
          ItemFilter.hasEnchantment("minecraft:silk_touch"),
          ItemFilter.tag("#c:tools/shear"),
          ItemFilter.tag("#c:tools/shears")
        ).negate()
      ) &&
      c.matchPlayerCustom((player) => {
        return player && player.tags.contains("phis.extraapples");
      })
  ),
  LootEntry.empty()
);

LootJS.modifiers((event) => {
  event.addBlockModifier("#minecraft:leaves").addLoot(entry);
});
