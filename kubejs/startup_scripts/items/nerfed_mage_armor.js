ItemEvents.modification((event) => {
  const helmets = {
    "irons_spellbooks:wandering_magician_helmet": 1,
    "irons_spellbooks:pumpkin_helmet": 2,
    "irons_spellbooks:pyromancer_helmet": 2,
    "irons_spellbooks:electromancer_helmet": 2,
    "irons_spellbooks:archevoker_helmet": 2,
    "irons_spellbooks:cultist_helmet": 2,
    "irons_spellbooks:cryomancer_helmet": 2,
    "irons_spellbooks:shadowwalker_helmet": 2,
    "irons_spellbooks:priest_helmet": 2,
    "irons_spellbooks:plagued_helmet": 2,
    "irons_spellbooks:netherite_mage_helmet": 2,
    "irons_spellbooks:wizard_helmet": 2,
  };

  const chestplates = {
    "irons_spellbooks:wandering_magician_chestplate": 3,
    "irons_spellbooks:pumpkin_chestplate": 4,
    "irons_spellbooks:pyromancer_chestplate": 4,
    "irons_spellbooks:electromancer_chestplate": 4,
    "irons_spellbooks:archevoker_chestplate": 4,
    "irons_spellbooks:cultist_chestplate": 4,
    "irons_spellbooks:cryomancer_chestplate": 4,
    "irons_spellbooks:shadowwalker_chestplate": 4,
    "irons_spellbooks:priest_chestplate": 4,
    "irons_spellbooks:plagued_chestplate": 4,
    "irons_spellbooks:netherite_mage_chestplate": 6,
    "irons_spellbooks:wizard_chestplate": 4,
    "irons_spellbooks:infernal_sorcerer_chestplate": 4,
    "irons_spellbooks:paladin_chestplate": 6,
  };

  const leggings = {
    "irons_spellbooks:wandering_magician_leggings": 2,
    "irons_spellbooks:pumpkin_leggings": 3,
    "irons_spellbooks:pyromancer_leggings": 3,
    "irons_spellbooks:electromancer_leggings": 3,
    "irons_spellbooks:archevoker_leggings": 3,
    "irons_spellbooks:cultist_leggings": 3,
    "irons_spellbooks:cryomancer_leggings": 3,
    "irons_spellbooks:shadowwalker_leggings": 3,
    "irons_spellbooks:priest_leggings": 3,
    "irons_spellbooks:plagued_leggings": 3,
    "irons_spellbooks:netherite_mage_leggings": 5,
    "irons_spellbooks:wizard_leggings": 3,
  };

  const boots = {
    "irons_spellbooks:wandering_magician_boots": 1,
    "irons_spellbooks:pumpkin_boots": 1,
    "irons_spellbooks:pyromancer_boots": 1,
    "irons_spellbooks:electromancer_boots": 1,
    "irons_spellbooks:archevoker_boots": 1,
    "irons_spellbooks:cultist_boots": 1,
    "irons_spellbooks:cryomancer_boots": 1,
    "irons_spellbooks:shadowwalker_boots": 1,
    "irons_spellbooks:priest_boots": 1,
    "irons_spellbooks:plagued_boots": 1,
    "irons_spellbooks:netherite_mage_boots": 2,
    "irons_spellbooks:wizard_boots": 1,
  };

  for (const [key, value] of Object.entries(helmets)) {
    event.modify(key, (item) => {
      // Create the updated set of modifiers
      let modifiedAttributeModifiers = Item.of(
        item.item().id
      ).attributeModifiers.withModifierAdded(
        "generic.armor",
        { amount: value, id: "minecraft:armor.helmet", operation: "add_value" },
        "head"
      );

      // Apply them to the item.
      item.setAttributeModifiersWithTooltip(
        modifiedAttributeModifiers.modifiers()
      );
    });
  }

  for (const [key, value] of Object.entries(chestplates)) {
    event.modify(key, (item) => {
      // Create the updated set of modifiers
      let modifiedAttributeModifiers = Item.of(
        item.item().id
      ).attributeModifiers.withModifierAdded(
        "generic.armor",
        {
          amount: value,
          id: "minecraft:armor.chestplate",
          operation: "add_value",
        },
        "chest"
      );

      // Apply them to the item.
      item.setAttributeModifiersWithTooltip(
        modifiedAttributeModifiers.modifiers()
      );
    });
  }

  for (const [key, value] of Object.entries(leggings)) {
    event.modify(key, (item) => {
      // Create the updated set of modifiers
      let modifiedAttributeModifiers = Item.of(
        item.item().id
      ).attributeModifiers.withModifierAdded(
        "generic.armor",
        {
          amount: value,
          id: "minecraft:armor.leggings",
          operation: "add_value",
        },
        "legs"
      );

      // Apply them to the item.
      item.setAttributeModifiersWithTooltip(
        modifiedAttributeModifiers.modifiers()
      );
    });
  }

  for (const [key, value] of Object.entries(boots)) {
    event.modify(key, (item) => {
      // Create the updated set of modifiers
      let modifiedAttributeModifiers = Item.of(
        item.item().id
      ).attributeModifiers.withModifierAdded(
        "generic.armor",
        { amount: value, id: "minecraft:armor.boots", operation: "add_value" },
        "feet"
      );

      // Apply them to the item.
      item.setAttributeModifiersWithTooltip(
        modifiedAttributeModifiers.modifiers()
      );
    });
  }
});
