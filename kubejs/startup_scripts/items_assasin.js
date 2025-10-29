StartupEvents.registry('item', event => {
  event.create('deadly_poison')
    .displayName("Deadly Poison")
    .tooltip('Coat your weapon with a deadly poison doing damage over time.')
    .useAnimation("crossbow")
    .useDuration(itemstack => 64)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      itemstack.shrink(1);
      if (level.isClientSide()) {
        // do nothing?
      } else {
        // check if other offensive poison effect is active
        // if yes: clear it
        // apply effect
      }
      return itemstack
    })
})