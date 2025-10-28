StartupEvents.registry('item', event => {
  event.create('respec_potion')
    .tooltip('Respec your skills!')
    .useAnimation('drink')
    .useDuration(itemstack => 64)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      itemstack.shrink(1)
      // if (!entity || level.clientSide) return;
      if (entity.player) {
        entity.runCommand(`puffish_skills skills reset @s phis:example`)
        // event.server.runCommand(`execute as ${player.uuid} run puffish_skills skills reset @s example`)
      }
      return itemstack
    })
})
