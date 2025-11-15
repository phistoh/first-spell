BlockEvents.farmlandTrampled(event => {
  if(event.player.tags.contains("phis.notrample")) event.cancel()
})