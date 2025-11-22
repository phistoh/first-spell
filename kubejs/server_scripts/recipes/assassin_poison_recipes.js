ServerEvents.recipes((event) => {
  const poisons = {
    deadly_poison: "endrem:witch_pupil",
    instant_poison: "minecraft:lily_of_the_valley",
    amplifying_poison: "sweety_garden:snowdrop",
    numbing_poison: "minecraft:honey_bottle",
    crippling_poison: "irons_spellbooks:icy_fang",
    atrophic_poison: "crittersandcompanions:sea_bunny_slime_bottle",
    leeching_poison: "kubejs:bottled_undead_soul",
  };

  for (const [poison, ingredient] of Object.entries(poisons)) {
    event
      .shapeless(`2x kubejs:${poison}`, [
        "minecraft:slime_ball",
        "alshanex_familiars:poison_vial",
        ingredient,
      ])
      .id(poison);
  }
});
