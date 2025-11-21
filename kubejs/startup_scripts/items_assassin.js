StartupEvents.registry('item', event => {
  const indicator_effects_offensive = [
  "kubejs:deadly_poison_indicator",
  "kubejs:amplifying_poison_indicator",
  "kubejs:instant_poison_indicator",
  ]
  
  const indicator_effects_defensive = [
  "kubejs:crippling_poison_indicator",
  "kubejs:numbing_poison_indicator",
  "kubejs:atrophic_poison_indicator",
  "kubejs:leeching_poison" // since this effect actuelly affects the player, it is not an "indicator"
  ]
  
  //offensive poisons
  event.create('deadly_poison')
    .displayName("Deadly Poison")
    .tooltip("Coats your weapons with a Offensive Poison that lasts for 1 hour. Each strike has a 30% chance to poison the enemy for 2 Void damage each second over 6 sec. Subsequent applications increase the damage by 1 per second (up to a maximum of 5 damage per second).")
    .useAnimation("crossbow")
    .useDuration(itemstack => 64)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      itemstack.shrink(1);
      if (level.isClientSide()) {
        entity.runCommandSilent(
          `playsound minecraft:entity.player.levelup master @s ~ ~ ~`
        );
      } else {
        // check if other offensive poison effect is active
        for(effect of indicator_effects_offensive){
          if(player.hasEffect(effect)){
            player.removeEffect(effect)
          }
        }
        // apply effect
        player.potionEffects.add("kubejs:deadly_poison_indicator")
      }
      return itemstack
    });
    
    // defensive poisons
    event.create('crippling_poison')
    .displayName("Crippling Poison")
    .tooltip("Coats your weapons with a Defensive Poison that lasts for 1 hour. Each strike has a 30% chance to poison the enemy, slowing movement speed by 50% for 6 sec.")
    .useAnimation("crossbow")
    .useDuration(itemstack => 64)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      itemstack.shrink(1);
      if (level.isClientSide()) {
        entity.runCommandSilent(
          `playsound minecraft:entity.player.levelup master @s ~ ~ ~`
        );
      } else {
        // check if other offensive poison effect is active
        for(effect of indicator_effects_defensive){
          if(player.hasEffect(effect)){
            player.removeEffect(effect)
          }
        }
        // apply effect
        player.potionEffects.add("kubejs:crippling_poison_indicator")
      }
      return itemstack
    });
})