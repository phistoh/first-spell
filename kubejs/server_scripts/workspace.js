ItemEvents.rightClicked("minecraft:wooden_axe", (event) => {
  const item = event.item;
  const player = event.player;
  const player_name = player.name.string;
  console.log(item.toItemString());

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
  let uncursed_item = item.toItemString();

  for (const curse of curses) {
    uncursed_item = uncursed_item.replace(`"${curse}":1`, "");
  }

  while (uncursed_item.includes(",}") || uncursed_item.includes(",]")) {
    uncursed_item = uncursed_item.replace(",}", "}");
    uncursed_item = uncursed_item.replace(",]", "]");
  }
  uncursed_item = uncursed_item.slice(1, -1);

  player.server.runCommand(`/give ${player_name} ${uncursed_item}`);
});
