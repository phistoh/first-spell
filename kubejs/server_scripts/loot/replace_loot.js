LootJS.modifiers((event) => {
  event
    .addTableModifier(LootType.CHEST)
    .replaceLoot(
      "irons_spellbooks:common_ink",
      "supplementaries:antique_ink",
      true
    );
  event
    .addTableModifier(LootType.CHEST)
    .replaceLoot("farmersdelight:rope", "supplementaries:rope", true);
});
