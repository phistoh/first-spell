ServerEvents.recipes((event) => {
  const spell_schools = {
    "irons_spellbooks:fire": "kubejs:blazing_soul",
    "irons_spellbooks:ice": "kubejs:freezing_soul",
    "irons_spellbooks:lightning": "kubejs:crackling_soul",
    "irons_spellbooks:holy": "kubejs:immaculate_soul",
    "irons_spellbooks:ender": "kubejs:cosmic_soul",
    "irons_spellbooks:blood": "kubejs:crimson_soul",
    "irons_spellbooks:evocation": "kubejs:mystical_soul",
    "irons_spellbooks:nature": "kubejs:wild_soul",
    // "irons_spellbooks:eldritch": "kubejs:unfathomable_soul",
    "familiarslib:sound": "kubejs:echoing_soul",
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
