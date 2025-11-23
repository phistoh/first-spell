PlayerEvents.tick((event) => {
  const player = event.player;
  if (
    player &&
    player.tags.contains("phis.regeneration") &&
    event.level.time % (20 * 5) === 0
  ) {
    player.heal(2);
  }
});
