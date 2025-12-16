LootJS.modifiers((event) => {
  event
    .addTableModifier(LootType.CHEST)
    .replaceLoot("farmersdelight:rope", "supplementaries:rope", true);
});
