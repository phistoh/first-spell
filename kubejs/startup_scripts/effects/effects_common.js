// Don't remove effect with milk
const effects_to_keep = ["kubejs:cheat_death_cooldown"];
NativeEvents.onEvent(
  "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Remove",
  (event) => global.removeEffect(event)
);
/**
 *
 * @param {Internal.MobEffectEvent$Remove} event
 * @returns
 */
global.removeEffect = (event) => {
  if (!effects_to_keep.includes(event.effect.getRegisteredName())) return;
  if (event.cure && event.cure.toString().includes("milk")) {
    event.setCanceled(true);
  }
};

StartupEvents.registry("mob_effect", (event) => {
  event.create("cheat_death_cooldown").color(0x773300);
});
