const entry = LootEntry.alternative(
  LootEntry.of("minecraft:golden_apple").when((c) => c.randomChance(0.01)),
  LootEntry.of("minecraft:enchanted_golden_apple").when((c) =>
    c.randomChance(0.001)
  ),
  LootEntry.empty()
).when((condition) => {
  condition.matchMainHand(
    ItemFilter.anyOf(
      ItemFilter.hasEnchantment("minecraft:silk_touch"),
      ItemFilter.tag("#c:tools/shear"),
      ItemFilter.tag("#c:tools/shears")
    ).negate()
  ) &&
    condition.matchPlayerCustom((player) => {
      return player && player.tags.contains("phis.extraapples");
    });
});

LootJS.modifiers((event) => {
  event.addBlockModifier("#minecraft:leaves").addLoot(entry);
});
