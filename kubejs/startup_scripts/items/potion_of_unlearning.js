StartupEvents.registry("item", (event) => {
  event
    .create("potion_of_unlearning")
    .displayName("Potion of Unlearning")
    .rarity("Uncommon")
    .tooltip("Drinking this lets you reassign your skills.")
    .texture("phis:item/potion_of_unlearning")
    .useAnimation("drink")
    .useDuration((itemstack) => 64)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      itemstack.shrink(1);
      if (!level.isClientSide()) {
        const player_name = entity.name.string
        const coordinates = `${entity.x} ${entity.y} ${entity.z}`

        entity.server.runCommandSilent(
          `title ${player_name} subtitle {"text": "Don't forget to reassign them.", "color": "dark_aqua"}`
        );
        entity.server.runCommandSilent(
          `title ${player_name} title {"text": "Your skills are reset!", "color": "aqua"}`
        );
        entity.server.runCommandSilent(
          `playsound minecraft:entity.player.levelup master ${player_name} ${coordinates}`
        );
        entity.server.runCommandSilent(
          `puffish_skills skills reset ${player_name} phis:first_spell`
        );
        entity.server.runCommandSilent(`astages remove_all ${player_name}`);

        entity.server.runCommandSilent(`execute as ${player_name} run rarity set COMMON`);
      }
      return itemstack;
    });
});
