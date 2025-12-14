BlockEvents.farmlandTrampled((event) => {
  if (!event.player) return;
  if (!event.player.tags) return;
  if (event.player.tags.contains("phis.notrample")) event.cancel();
});
