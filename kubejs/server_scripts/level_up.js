// BlockEvents.rightClicked("minecraft:lantern", (event) => {
//   const player = event.player;
//   const item = event.item;

//   const scoreboard = player.getScoreboard();
//   const objective = scoreboard.getObjective("level");

//   if (player.level.clientSide) return;

//   if (!objective) {
//     console.log("Objective not found: level");
//     return null;
//   }
//   const scoreHolder = Java.loadClass(
//     "net.minecraft.world.scores.ScoreHolder"
//   ).forNameOnly(player.getUsername());
//   const score = scoreboard.getOrCreatePlayerScore(scoreHolder, objective);
//   const level = score.get();

//   if (level >= 50) {
//     return;
//   }

//   const xp_to_level = [
//     7, 16, 27, 40, 55, 72, 91, 112, 135, 160, 187, 216, 247, 280, 315, 352, 394,
//     441, 493, 550, 612, 679, 751, 828, 910, 997, 1089, 1186, 1288, 1395, 1507,
//     1628, 1758, 1897, 2045, 2202, 2368, 2543, 2727, 2920, 3122, 3333, 3553,
//     3782, 4020, 4267, 4523, 4788, 5062, 5345, 5637, 5938, 6248, 6567, 6895,
//     7232, 7578, 7933, 8297, 8670, 9052, 9443, 9843, 10252,
//   ];

// //   const player_data = NBTIO.read("saves/New\ World\ (1)/data/puffish_skills.dat").data.players
// //   if (player_data[player.uuid]){
// //     const unlocked = player_data[player.uuid]
// //     const first_spell_data = unlocked.categories["phis:first_spell"]

// //     console.log(first_spell_data)
// //   }


//   if (player.xp >= xp_to_level[level]) {
//     player.addXP(xp_to_level[level] * -1);
//     player.runCommandSilent("puffish_skills points add @s phis:first_spell 1");
//   }
// });
