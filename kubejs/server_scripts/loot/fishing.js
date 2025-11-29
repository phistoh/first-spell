LootJS.lootTables((event) => {
  event
    .getLootTable("netherdepthsupgrade:gameplay/nether_fishing/treasure")
    .firstPool()
    .addEntry("rubinated_nether:molten_ruby");
});
