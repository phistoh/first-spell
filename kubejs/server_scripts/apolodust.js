const apolodust = {
  1.7: [
    '16x irons_spellbooks:arcane_essence[custom_name=\'{"text":"Apolodust","color":"aqua"}\']',
    "kubejs:potion_of_unlearning",
  ],
};

const messages = {
  1.7: "§6§lAnnouncement§r: First Spell updated to §l1.7§r. Some skills were changed, so enjoy the free [§ePotion of Unlearning§r] and some [§bArcane Essence§r] as compensation.",
};

PlayerEvents.loggedIn((event) => {
  const player_data = event.player.persistentData;
  for (const [key, items] of Object.entries(apolodust)) {
    if (!player_data.getBoolean(`first_join_${key}`)) {
      player_data.putBoolean(`first_join_${key}`, true);
      event.player.tell(messages[key]);
      for (const item of items) {
        event.player.give(item);
      }
    }
  }
});
