ServerEvents.recipes((event) => {
  const rarities = ["uncommon", "rare", "epic", "legendary"];
  for (const rarity of rarities) {
    event.shapeless(`irons_restrictions:${rarity}_upgrade`, [
      `irons_spellbooks:${rarity}_ink`,
      "#c:ender_pearls",
    ]);
  }
});
