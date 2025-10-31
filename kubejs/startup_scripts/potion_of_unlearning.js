StartupEvents.registry("item", (event) => {
  event
    .create("potion_of_unlearning")
    .displayName("Potion of Unlearning")
    .rarity("Uncommon")
    .tooltip("Drinking this lets you reassign your skills.")
    .texture('phis:item/potion_of_unlearning')
    .useAnimation("drink")
    .useDuration((itemstack) => 64)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      itemstack.shrink(1);
      if (level.isClientSide()) {
        entity.runCommandSilent(
          `title @s subtitle {"text": "Don't forget to reassign them.", "color": "dark_aqua"}`
        );
        entity.runCommandSilent(
          `title @s title {"text": "Your skills are reset!", "color": "aqua"}`
        );
      } else {
        entity.runCommandSilent(
          `puffish_skills skills reset @s phis:first_spell`
        );
      }
      return itemstack;
    });
});
