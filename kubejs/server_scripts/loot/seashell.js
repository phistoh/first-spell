LootJS.lootTables((event) => {
  const entries = event.getLootTable("rocks:blocks/seashell").firstPool().getEntries();
  entries.addEntry(LootEntry.of("endrem:black_eye").randomTableBonus("minecraft:fortune", [0.03, 0.033333334, 0.0375, 0.05, 0.15]));
  entries.addEntry(LootEntry.of("crittersandcompanions:pearl").randomTableBonus("minecraft:fortune", [0.045, 0.05, 0.05625, 0.075, 0.225]));
});
