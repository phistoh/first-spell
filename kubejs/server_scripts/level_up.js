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
  "amendments:wall_lantern",
];

for (const lantern of lanterns) {
  BlockEvents.rightClicked(lantern, (event) => {
    const currentTime = Date.now();
    const cooldownTime = 1000;

    if (currentTime - lastClickTime >= cooldownTime) {
      const player = event.player;
      const player_name = player.name.string;
      const coordinates = `${player.x} ${player.y} ${player.z}`;
      const item = event.item;
      const hand = event.hand;
      const block = event.block;
      const server = event.server;

      const scoreboard = player.getScoreboard();
      const objective = scoreboard.getObjective("level");

      if (!item || item.empty) return;
      if (!(item.id === "irons_spellbooks:arcane_essence")) return;

      if (hand == "OFF_HAND") return;

      if (!objective) {
        console.log("Objective not found: level");
        return null;
      }

      const scoreHolder = Java.loadClass(
        "net.minecraft.world.scores.ScoreHolder"
      ).forNameOnly(player.getUsername());
      const score = scoreboard.getOrCreatePlayerScore(scoreHolder, objective);
      const level = score.get();

      const level_to_compare = level < 50 ? level + 1 : 30;
      const category = level < 50 ? "first_spell" : "eternal_turn_of_the_wheel";

      // change to Levels instead of XP
      if (player.xpLevel >= level_to_compare) {
        if (!player.isShiftKeyDown()) {
          server.runCommandSilent(
            `title ${player_name} actionbar ["",{"text":"You have enough levels to purchase a skill point."}]`
          );
          return;
        }
        player.addXPLevels(level_to_compare * -1);
        server.runCommandSilent(
          `puffish_skills points add ${player_name} phis:${category} 1`
        );
        server.runCommandSilent(`scoreboard players add ${player_name} level 1`);
        const x = block.x;
        const y = block.y;
        const z = block.z;
        server.runCommandSilent(
          `particle supplementaries:bottling_xp ${x} ${y} ${z} 0 0 0 .25 25`
        );
        server.runCommandSilent(
          `playsound irons_spellbooks:item.cinderous_soulcaller.toll.success master ${player_name} ${coordinates}`
        );
        if (category == "first_spell") {
          server.runCommandSilent(
            `execute if score ${player_name} level matches 50.. run puffish_skills category unlock ${player_name} phis:eternal_turn_of_the_wheel`
          );
        }
        player.swing();
        player.addItemCooldown("irons_spellbooks:arcane_essence", 1 * 20);
        if (!player.creativeMode) {
          item.count--;
        }
      } else {
        server.runCommandSilent(
          `title ${player_name} actionbar ["",{"text":"You need "},{"text":"${
            level_to_compare - player.xpLevel
          }","color":"dark_aqua"},{"text":" more level${
            level_to_compare - player.xpLevel !== 1 ? "s" : ""
          } to purchase another skill point."}]`
        );
      }

      lastClickTime = currentTime;
    }
  });
}
