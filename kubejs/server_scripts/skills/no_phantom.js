/** @type {typeof import("net.minecraft.stats.Stat").$Stat } */
let $Stat = Java.loadClass("net.minecraft.stats.Stat");
PlayerEvents.tick((event) => {
  const player = event.player;
  if (
    player &&
    player.tags.contains("phis.no_phantoms") &&
    event.level.time % (20 * 60) === 0
  ) {
    player.stats.set(
      $Stat.byName("minecraft.custom:minecraft.time_since_rest").get(),
      0
    );
  }
});
