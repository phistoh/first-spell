let lastClickTime = 0;

BlockEvents.rightClicked("supplementaries:pedestal", (event) => {
  const currentTime = Date.now();
  const cooldownTime = 1000;
  if (currentTime - lastClickTime >= cooldownTime) {
    const block = event.block;
    const item = event.item;
    const hand = event.hand;
    const player = event.player;
    const server = player.server;
    const player_name = player.name.string;
    const coordinates = `${block.x} ${block.y} ${block.z}`;

    if (item != "irons_spellbooks:divine_pearl") return;
    if (!player.isShiftKeyDown()) return;
    if (player.level.clientSide) return;

    const container_item = block.getInventory().getStackInSlot(0);
    const is_cursed =
      container_item.toItemString().contains("_curse") ||
      container_item.toItemString().contains("mynethersdelight:poaching");
    if (!is_cursed) return;

    const curses = [
      "minecraft:binding_curse",
      "rubinated_nether:bluntness_curse",
      "enchantencore:breeze_curse",
      "enchantencore:crank_curse",
      "rubinated_nether:crooked_shot_curse",
      "enchantencore:death_curse",
      "rubinated_nether:deficiency_curse",
      "rubinated_nether:dullness_curse",
      "rubinated_nether:exposure_curse",
      "rubinated_nether:fragility_curse",
      "enchantencore:fragility_curse",
      "enchantencore:hiding_curse",
      "rubinated_nether:leeching_curse",
      "rubinated_nether:misfortune_curse",
      "mynethersdelight:poaching",
      "enchantencore:randomness_curse",
      "rubinated_nether:ravaging_curse",
      "enchantencore:reach_curse",
      "rubinated_nether:slow_charge_curse",
      "minecraft:vanishing_curse",
      "enchantencore:welfare_curse",
    ];
    let curses_string = "{";
    for (const curse of curses) {
      curses_string += `"${curse}":-255,`;
    }
    curses_string += "}";

    server.runCommandSilent(
      `item modify block ${coordinates} container.0 {function:"minecraft:set_enchantments",enchantments:${curses_string},add:true}`,
    );

    server.runCommandSilent(
      `playsoundirons_spellbooks:cast.generic.holy block ${player_name} ${coordinates}`,
    );

    server.runCommandSilent(
      `particle minecraft:witch ${coordinates} .2 .8 .2 .05 250`,
    );

    if (hand == "OFF_HAND") {
      player.swing("off_hand", true);
    } else {
      player.swing();
    }
    player.addItemCooldown("irons_spellbooks:divine_pearl", 1 * 20);
    if (player.isCreative() == false) {
      item.count--;
    }
    lastClickTime = currentTime;
    event.cancel();
  }
});
