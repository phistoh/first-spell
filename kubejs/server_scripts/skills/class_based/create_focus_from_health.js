let lastClickTime = 0;

const spell_foci = [
  "blazing_soul",
  "freezing_soul",
  "crackling_soul",
  "immaculate_soul",
  "cosmic_soul",
  "crimson_soul",
  "mystical_soul",
  "wild_soul",
  "unfathomable_soul",
  "echoing_soul",
];

ItemEvents.rightClicked("kubejs:arcane_infused_bottle", (event) => {
  const currentTime = Date.now();
  const cooldownTime = 1000;
  if (currentTime - lastClickTime >= cooldownTime) {
    const { player, item, hand, server } = event;
    const player_name = player.name.string;
    const coordinates = `${player.x} ${player.y} ${player.z}`;

    const hearts_cost = 10;

    if (!player.isShiftKeyDown()) return;
    if (player.health <= hearts_cost) return;
    if (player.level.clientSide) return;

    let focus_to_create = "";
    for (const spell_focus of spell_foci) {
      if (player.tags.contains(`phis.can_create_${spell_focus}`)) {
        focus_to_create = spell_focus
        break;
      }
    }

    if (focus_to_create == "") return;

    if (hand == "OFF_HAND") {
      player.swing("off_hand", true);
    } else {
      player.swing();
    }
    player.attack(player.level.damageSources().magic(), hearts_cost);
    server.runCommandSilent(
      `playsound minecraft:item.bottle.fill master ${player_name} ${coordinates}`,
    );
    server.runCommandSilent(
      `particle minecraft:witch ${coordinates} .2 .8 .2 .05 250`,
    );
    player.addItemCooldown("kubejs:arcane_infused_bottle", 1 * 20);
    if (player.isCreative() == false) {
      item.count--;
    }
    player.give(`kubejs:${focus_to_create}`);

    lastClickTime = currentTime;
  }
});
