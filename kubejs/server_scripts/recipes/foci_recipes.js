ServerEvents.recipes((event) => {
  const spell_schools = {
    "blazing_soul": "minecraft:blaze_rod",
    "freezing_soul": "irons_spellbooks:frozen_bone",
    "crackling_soul": "irons_spellbooks:lightning_bottle",
    "immaculate_soul": "irons_spellbooks:divine_pearl",
    "cosmic_soul": "minecraft:ender_pearl",
    "crimson_soul": "irons_spellbooks:blood_vial",
    "mystical_soul": "minecraft:emerald",
    "wild_soul": "minecraft:poisonous_potato",
    "unfathomable_soul": "minecraft:echo_shard",
    "echoing_soul": "#c:music_discs",
  };
  for (const [spell_focus, ingredient] of Object.entries(spell_schools)) {
    event
      .shapeless(`kubejs:${spell_focus}`, ["kubejs:bottled_undead_soul", ingredient])
      .id(`${spell_focus}_with_bottled_soul`);
    event
      .shapeless(`kubejs:${spell_focus}`, [
        "endrem:undead_soul",
        "kubejs:arcane_infused_bottle",
        ingredient,
      ])
      .id(spell_focus);
  }
  event
    .shapeless("kubejs:bottled_undead_soul", [
      "endrem:undead_soul",
      "kubejs:arcane_infused_bottle",
    ])
    .id("bottled_undead_soul");
});
