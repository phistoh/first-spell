StartupEvents.registry("item", (event) => {
  //Offensive Poison
  event
    .create("deadly_poison")
    .texture('phis:item/deadly_poison')
    .displayName("Deadly Poison")
    .tooltip(
      "Coats your weapons with an §4Offensive Poison§r that lasts for 1 hour. Each strike has a 30% chance to poison the enemy for §o2 Magic damage each second over 6 seconds§r.\nSubsequent applications increase the damage by 1 per second (up to a maximum of 5 damage per second)."
    )
    .useAnimation("crossbow")
    .useDuration((itemstack) => 32)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      return global.finishUsingOffensivePoison(itemstack, level, entity);
    });

    event
    .create("amplifying_poison")
    .texture('phis:item/amplifying_poison')
    .displayName("Amplifying Poison")
    .tooltip(
      "Coats your weapons with an §4Offensive Poison§r that lasts for 1 hour. Each strike has a 30% chance to poison the enemy for 6 seconds §oincreasing their damage taken by 50%§r."
    )
    .useAnimation("crossbow")
    .useDuration((itemstack) => 32)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      return global.finishUsingOffensivePoison(itemstack, level, entity);
    });

    event
    .create("instant_poison")
    .texture('phis:item/instant_poison')
    .displayName("Instant Poison")
    .tooltip(
      "Coats your weapons with an §4Offensive Poison§r that lasts for 1 hour. Each strike has a 30% chance of poisoning the enemy which §oinstantly inflicts 3 Magic damage§r."
    )
    .useAnimation("crossbow")
    .useDuration((itemstack) => 32)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      return global.finishUsingOffensivePoison(itemstack, level, entity);
    });

  // Defensive Poisons
  event
    .create("crippling_poison")
    .texture('phis:item/crippling_poison')
    .displayName("Crippling Poison")
    .tooltip(
      "Coats your weapons with a §2Defensive Poison§r that lasts for 1 hour. Each strike has a 30% chance to poison the enemy, §oslowing their movement speed by 50% for 6 seconds§r."
    )
    .useAnimation("crossbow")
    .useDuration((itemstack) => 32)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      return global.finishUsingDefensivePoison(itemstack, level, entity);
    });

    event
    .create("numbing_poison")
    .texture('phis:item/numbing_poison')
    .displayName("Numbing Poison")
    .tooltip(
      "Coats your weapons with a §2Defensive Poison§r that lasts for 1 hour. Each strike has a 30% chance of poisoning the enemy, clouding their mind and §oslowing their attack and casting speed by 30% for 10 seconds§r."
    )
    .useAnimation("crossbow")
    .useDuration((itemstack) => 32)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      return global.finishUsingDefensivePoison(itemstack, level, entity);
    });

    event
    .create("atrophic_poison")
    .texture('phis:item/atrophic_poison')
    .displayName("Atrophic Poison")
    .tooltip(
      "Coats your weapons with a §2Defensive Poison§r that lasts for 1 hour. Each strike has a 30% chance of poisoning the enemy, §oreducing their damage by 10% for 10 seconds§r."
    )
    .useAnimation("crossbow")
    .useDuration((itemstack) => 32)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      return global.finishUsingDefensivePoison(itemstack, level, entity);
    });

    event
    .create("leeching_poison")
    .texture('phis:item/leeching_poison')
    .displayName("Leeching Poison")
    .tooltip(
      "Coats your weapons with a §2Defensive Poison§r that lasts for 1 hour. Each strike siphons the enemies life force away, §ohealing you for 25% of the damage dealt§r."
    )
    .useAnimation("crossbow")
    .useDuration((itemstack) => 32)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      return global.finishUsingDefensivePoison(itemstack, level, entity);
    });
});

global.finishUsingOffensivePoison = (itemstack, level, entity) => {
  const indicator_effects_offensive = [
    "kubejs:deadly_poison_indicator",
    "kubejs:amplifying_poison_indicator",
    "kubejs:instant_poison_indicator",
  ];

  if (level.isClientSide()) {
    entity.runCommandSilent(
      `playsound supplementaries:entity.slimed master @s ~ ~ ~`
    );
  } else {
    // check if other poison effect is active
    for (const effect of indicator_effects_offensive) {
      if (entity.hasEffect(effect)) {
        entity.removeEffect(effect);
      }
    }

    // apply effect
    entity.potionEffects.add(
      `${itemstack.id}_indicator`,
      60 * 60 * 20,
      0,
      true,
      true
    );
  }
  itemstack.shrink(1);
  return itemstack;
};

global.finishUsingDefensivePoison = (itemstack, level, entity) => {
  const indicator_effects_defensive = [
    "kubejs:crippling_poison_indicator",
    "kubejs:numbing_poison_indicator",
    "kubejs:atrophic_poison_indicator",
    "kubejs:leeching_poison",
  ];

  if (level.isClientSide()) {
    entity.runCommandSilent(
      `playsound supplementaries:entity.slimed master @s ~ ~ ~`
    );
  } else {
    // check if other poison effect is active
    for (const effect of indicator_effects_defensive) {
      if (entity.hasEffect(effect)) {
        entity.removeEffect(effect);
      }
    }
    // apply effect
    let effect_id = "kubejs:leeching_poison"
    if(itemstack.id != "kubejs:leeching_poison"){
      effect_id = `${itemstack.id}_indicator`
    }
    entity.potionEffects.add(
      effect_id,
      60 * 60 * 20,
      0,
      true,
      true
    );
  }
  itemstack.shrink(1);
  return itemstack;
};
