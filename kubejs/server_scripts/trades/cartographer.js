MoreJS.villagerTrades((event) => {
  event.addTrade(
    "minecraft:cartographer",
    2,
    [Item.of("minecraft:emerald", 8), "minecraft:compass"],
    "supplementaries:slice_map"
  );

  //   event.addTrade(
  //     "minecraft:cartographer",
  //     3,
  //     [Item.of("minecraft:emerald", 13), "minecraft:compass"],
  //     `irons_spellbooks:furled_map[irons_spellbooks:furled_map_data={descriptionOverride:{translate:"item.irons_spellbooks.evoker_fort_battle_plans"},destination:"irons_spellbooks:evoker_fort",dimension:"minecraft:overworld"},lore=['{"color":"gold","translate":"item.irons_spellbooks.furled_map_descriptor_framing","with":[{"translate":"item.irons_spellbooks.evoker_fort_battle_plans"}]}']]`
  //   );

  event.addTrade(
    "minecraft:cartographer",
    3,
    [Item.of("minecraft:emerald", 12), "minecraft:compass"],
    "minecraft:recovery_compass"
  );

  //   event.addTrade(
  //     "minecraft:cartographer",
  //     5,
  //     [Item.of("minecraft:emerald", 14), "minecraft:compass"],
  //     "irons_spellbooks:wayward_compass"
  //   );
});

//Random Furled Map
MoreJS.updateOffer((event) => {
  const furled_maps = [
    `irons_spellbooks:furled_map[irons_spellbooks:furled_map_data={descriptionOverride:{translate:"item.irons_spellbooks.evoker_fort_battle_plans"},destination:"irons_spellbooks:evoker_fort",dimension:"minecraft:overworld"},lore=['{"color":"gold","translate":"item.irons_spellbooks.furled_map_descriptor_framing","with":[{"translate":"item.irons_spellbooks.evoker_fort_battle_plans"}]}']]`,
    `irons_spellbooks:furled_map[irons_spellbooks:furled_map_data={descriptionOverride:{translate:"item.irons_spellbooks.alchemical_trade_route"},destination:"irons_spellbooks:mangrove_hut",dimension:"minecraft:overworld"},lore=['{"color":"gold","translate":"item.irons_spellbooks.furled_map_descriptor_framing","with":[{"translate":"item.irons_spellbooks.alchemical_trade_route"}]}']]`,
    `irons_spellbooks:furled_map[irons_spellbooks:furled_map_data={descriptionOverride:{translate:"item.irons_spellbooks.ice_spider_den_map"},destination:"irons_spellbooks:ice_spider_den",dimension:"minecraft:overworld"},lore=['{"color":"gold","translate":"item.irons_spellbooks.furled_map_descriptor_framing","with":[{"translate":"item.irons_spellbooks.ice_spider_den_map"}]}']]`,
  ];

  // Furled maps on level 3
  if (
    event.isProfession("minecraft:cartographer") &&
    event.getVillagerLevel() == 3 &&
    event.random.nextDouble() <= 0.67
  ) {
    const random_furled_map =
      furled_maps[Math.floor(Math.random() * furled_maps.length)];
    const trade = VillagerUtils.createSimpleTrade(
      [Item.of("minecraft:emerald", 13), "minecraft:compass"],
      random_furled_map
    );
    event.setOffer(trade);
  }

  // chance to offer wayward compass
  if (
    event.isProfession("minecraft:cartographer") &&
    event.getVillagerLevel() == 5 &&
    event.random.nextDouble() <= 0.5
  ) {
    const trade = VillagerUtils.createSimpleTrade(
      [Item.of("minecraft:emerald", 14), "minecraft:compass"],
      "irons_spellbooks:wayward_compass"
    );
    event.setOffer(trade);
  }
});
