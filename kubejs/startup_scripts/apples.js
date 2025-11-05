StartupEvents.registry("item", (event) => {
  event
    .create("diamond_apple")
    .texture("phis:item/diamond_apple")
    .displayName("Diamond Apple")
    .rarity("Uncommon")
    .food((food) => {
      food
        .nutrition(4)
        .saturation(1)
        .effect("minecraft:strength", 20 * 120, 0, 1)
        .effect("minecraft:regeneration", 20 * 5, 1, 1)
        .alwaysEdible()
        .eaten((ctx) => {
          ctx.player.tell(Text.gold("Yummy Yummy!"));
        });
    });
  event
    .create("enchanted_diamond_apple")
    .texture("phis:item/diamond_apple")
    .displayName("Enchanted Diamond Apple")
    .rarity("Rare")
    .glow(true)
    .food((food) => {
      food
        .nutrition(4)
        .saturation(1)
        .effect("minecraft:strength", 20 * 120, 3, 1)
        .effect("minecraft:regeneration", 20 * 5, 1, 1)
        .effect("minecraft:speed", 20 * 300, 0, 1)
        .effect("minecraft:haste", 20 * 300, 0, 1)
        .alwaysEdible()
        .eaten((ctx) => {
          ctx.player.tell(Text.gold("Yummy Yummy!"));
        });
    });
  event
    .create("prismarine_apple")
    .texture("phis:item/prismarine_apple")
    .displayName("Prismarine Apple")
    .rarity("Common");
  event
    .create("enchanted_prismarine_apple")
    .texture("phis:item/prismarine_apple")
    .displayName("Enchanted Prismarine Apple")
    .rarity("Rare")
    .glow(true);
});
