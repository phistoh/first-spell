const spell_schools_for_commands = [
  "fire",
  "ice",
  "lightning",
  "holy",
  "ender",
  "blood",
  "evocation",
  "nature",
  "sound",
];
for (const school of spell_schools_for_commands) {
  for (let i = 1; i <= 5; i++) {
    // Run via eg /kubejs custom_command reward_manuscript_fire_2
    // ServerEvents.customCommand(`reward_manuscript_${school}_${i}`, (event) => {
    //   const player_data = event.player.persistentData;
    //   if (!player_data.getBoolean(`reward_manuscript_${school}_${i}`)) {
    //     player_data.putBoolean(`reward_manuscript_${school}_${i}`, true);
    //     event.player.give(
    //       Item.of(`irons_restrictions:${school}_manuscript`, 1),
    //     );
    //   }
    // });
  }
}
