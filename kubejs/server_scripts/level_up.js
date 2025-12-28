let lastClickTime = 0;

const lanterns = [
  "minecraft:lantern",
  "minecraft:soul_lantern",
  "minecraft:lantern",
  "minecraft:copper_lantern",
  "minecraft:weathered_copper_lantern",
  "minecraft:oxidized_copper_lantern",
  "minecraft:waxed_copper_lantern",
  "minecraft:waxed_exposed_copper_lantern",
  "minecraft:waxed_weathered_copper_lantern",
  "minecraft:waxed_oxidized_copper_lantern",
  "chipped:blue_paper_lantern",
  "chipped:burning_coal_lantern",
  "chipped:checkered_iron_lantern",
  "chipped:dark_blue_paper_lantern",
  "chipped:ender_lantern",
  "chipped:green_paper_lantern",
  "chipped:iron_bowl_lantern",
  "chipped:purple_paper_lantern",
  "chipped:red_paper_lantern",
  "chipped:small_green_lantern",
  "chipped:white_paper_lantern",
  "chipped:wooden_cage_lantern",
  "chipped:wrought_iron_lantern",
  "chipped:yellow_tube_lantern",
  "chipped:blue_paper_soul_lantern",
  "chipped:blue_tube_soul_lantern",
  "chipped:checkered_iron_soul_lantern",
  "chipped:golden_paper_soul_lantern",
  "chipped:gray_paper_soul_lantern",
  "chipped:iron_bowl_soul_lantern",
  "chipped:lime_paper_soul_lantern",
  "chipped:orange_paper_soul_lantern",
  "chipped:small_red_soul_lantern",
  "chipped:wooden_cage_soul_lantern",
  "chipped:yellow_paper_soul_lantern",
  "chipped:big_lantern",
  "chipped:donut_lantern",
  "chipped:tall_lantern",
  "chipped:wide_lantern",
  "chipped:big_soul_lantern",
  "chipped:donut_soul_lantern",
  "chipped:tall_soul_lantern",
  "chipped:wide_soul_lantern",
  "rubinated_nether:ruby_lantern",
  "suppsquared:copper_lantern",
  "suppsquared:crimson_lantern",
];

for (const lantern of lanterns) {
  BlockEvents.rightClicked(lantern, (event) => {
    const currentTime = Date.now();
    const cooldownTime = 1000;

    if (currentTime - lastClickTime >= cooldownTime) {
      const player = event.player;
      const item = event.item;
      const hand = event.hand;
      const block = event.block;

      const scoreboard = player.getScoreboard();
      const objective = scoreboard.getObjective("level");

      if (!item || item.empty) return;
      if (!(item.id === "irons_spellbooks:arcane_essence")) return;

      if (hand == "OFF_HAND") return;

      const xp_to_level = [
        7, 16, 27, 40, 55, 72, 91, 112, 135, 160, 187, 216, 247, 280, 315, 352,
        394, 441, 493, 550, 612, 679, 751, 828, 910, 997, 1089, 1186, 1288,
        1395, 1507, 1628, 1758, 1897, 2045, 2202, 2368, 2543, 2727, 2920, 3122,
        3333, 3553, 3782, 4020, 4267, 4523, 4788, 5062, 5345, 5637, 5938, 6248,
        6567, 6895, 7232, 7578, 7933, 8297, 8670, 9052, 9443, 9843, 10252,
      ];

      if (!objective) {
        console.log("Objective not found: level");
        return null;
      }
      const scoreHolder = Java.loadClass(
        "net.minecraft.world.scores.ScoreHolder"
      ).forNameOnly(player.getUsername());
      const score = scoreboard.getOrCreatePlayerScore(scoreHolder, objective);
      const level = score.get();

      if (level < 50) {
        if (player.xp >= xp_to_level[level]) {
          if (!player.isShiftKeyDown()) {
            player.runCommandSilent(
              `title @s actionbar ["",{"text":"You have enough XP to reach level "},{"text":"${
                level + 1
              }","color":"dark_aqua"},{"text":"!"}]`
            );
            return;
          }
          player.addXP(xp_to_level[level] * -1);
          player.runCommandSilent(
            "puffish_skills points add @s phis:first_spell 1"
          );
          player.runCommandSilent("scoreboard players add @s level 1");
          const x = block.x;
          const y = block.y;
          const z = block.z;
          player.runCommandSilent(
            `particle supplementaries:bottling_xp ${x} ${y} ${z} 0 0 0 .25 25`
          );
          player.runCommandSilent(
            "playsound irons_spellbooks:item.cinderous_soulcaller.toll.success master @s ~ ~ ~"
          );
          player.runCommandSilent(
            "execute if score @s level matches 50.. run puffish_skills category unlock @s phis:eternal_turn_of_the_wheel"
          );
          player.swing();
          player.addItemCooldown("irons_spellbooks:arcane_essence", 1 * 20);
          if (!player.creativeMode) {
            item.count--;
          }
        } else {
          player.runCommandSilent(
            `title @s actionbar ["",{"text":"You need additional "},{"text":"${
              xp_to_level[level] - player.xp
            }","color":"dark_aqua"},{"text":" XP to reach level "},{"text":"${
              level + 1
            }","color":"dark_aqua"},{"text":"!"}]`
          );
        }
      } else {
        if (player.xp >= xp_to_level[29]) {
          if (!player.isShiftKeyDown()) {
            player.runCommandSilent(
              `title @s actionbar ["",{"text":"You have enough XP to reach level "},{"text":"${
                level + 1
              }","color":"dark_aqua"},{"text":"!"}]`
            );
            return;
          }
          player.addXP(xp_to_level[29] * -1);
          player.runCommandSilent(
            "puffish_skills points add @s phis:eternal_turn_of_the_wheel 1"
          );
          player.runCommandSilent("scoreboard players add @s level 1");
          const x = block.x;
          const y = block.y;
          const z = block.z;
          player.runCommandSilent(
            `particle supplementaries:bottling_xp ${x} ${y} ${z} 0 0 0 .25 25`
          );
          player.runCommandSilent(
            "playsound irons_spellbooks:item.cinderous_soulcaller.toll.success master @s ~ ~ ~"
          );
          player.swing();
          player.addItemCooldown("irons_spellbooks:arcane_essence", 1 * 20);
          if (!player.creativeMode) {
            item.count--;
          }
        } else {
          player.runCommandSilent(
            `title @s actionbar ["",{"text":"You need additional "},{"text":"${
              xp_to_level[29] - player.xp
            }","color":"dark_aqua"},{"text":" XP to reach level "},{"text":"${
              level + 1
            }","color":"dark_aqua"},{"text":"!"}]`
          );
        }
      }
      lastClickTime = currentTime;
    }
  });
}
