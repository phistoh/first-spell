StartupEvents.registry("item", (event) => {
  event
    .create("copper_knife", "farmersdelight:knife")
    .displayName("Copper Knife")
    .tier("stone")
    //.modelJson("phis:item/copper_knife")
    .texture("phis:item/copper_knife");

  event
    .create("warden_knife", "farmersdelight:knife")
    .displayName("Warden Knife")
    .modifyTier((tier) => {
      tier.uses = 2519;
      tier.speed = 2.8;
      tier.attackDamageBonus = 6;
      //tier.level = 5;
      tier.enchantmentValue = 18;
      tier.repairIngredient = "deeperdarker:reinforced_echo_shard";
    })
    //.modelJson("phis:item/warden_knife")
    .texture("phis:item/warden_knife");
});
