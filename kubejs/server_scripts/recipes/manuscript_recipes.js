ServerEvents.recipes((event) => {
  const spell_schools = {
    "irons_spellbooks:fire": "minecraft:blaze_rod",
    "irons_spellbooks:ice": "irons_spellbooks:frozen_bone",
    "irons_spellbooks:lightning": "irons_spellbooks:lightning_bottle",
    "irons_spellbooks:holy": "irons_spellbooks:divine_pearl",
    "irons_spellbooks:ender": "minecraft:ender_pearl",
    "irons_spellbooks:blood": "irons_spellbooks:blood_vial",
    "irons_spellbooks:evocation": "minecraft:emerald",
    "irons_spellbooks:nature": "minecraft:poisonous_potato",
    // "irons_spellbooks:eldritch": "minecraft:echo_shard",
    "familiarslib:sound": "#c:music_discs",
  };
  for (const [school, focus] of Object.entries(spell_schools)) {
    event
      .shapeless(
        `irons_restrictions:manuscript[irons_restrictions:school_component="${school}"]`,
        ["2x irons_restrictions:manuscript", focus],
      )
      .id(`${school}_manuscript_transmutation`);
  }
});
