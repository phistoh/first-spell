StartupEvents.registry("item", (event) => {
  event
    .create("copper_knife", "farmersdelight:knife")
    .displayName("Copper Knife")
    .tier("leafscopperbackport:copper_armor")
    .texture("phis:item/copper_knife");

  event
    .create("warden_knife", "farmersdelight:knife")
    .displayName("Warden Knife")
    .texture("phis:item/warden_knife")
    .fireResistant(true)
    .rarity("rare");
});

ItemEvents.modification((event) => {
  event.modify("kubejs:copper_knife", (item) => {
    item.setTier((tier) => {
      tier.uses = 191;
      tier.attackDamageBonus = 1;
      tier.enchantmentValue = 13;
      tier.repairIngredient = "minecraft:copper_ingot";
    });
  });
  
  event.modify("kubejs:warden_knife", (item) => {
    item.setTier((tier) => {
      tier.uses = 2519;
      tier.attackDamageBonus = 5;
      tier.enchantmentValue = 18;
      tier.repairIngredient = "deeperdarker:reinforced_echo_shard";
    });
  });
});
