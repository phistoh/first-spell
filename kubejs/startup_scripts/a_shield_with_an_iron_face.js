NativeEvents.onEvent(
  "net.neoforged.neoforge.event.entity.living.LivingShieldBlockEvent",
  (event) => {
    global.shield(event);
  }
);
/**
 *
 * @param {Internal.ShieldBlockEvent} event
 */
global.shield = (event) => {
  const { dmgBlocked, originalBlocked, shieldTakesDamage, source, entity } =
    event;
  if (!entity.isPlayer()) return;
  if (
    !(
      entity.getUseItem().hasTag("c:tools/shield") ||
      entity.getUseItem().hasTag("c:tools/shields")
    )
  )
    return;
  if (!entity.tags.contains("phis.a_shield_with_an_iron_face")) return;
  entity.potionEffects.add("minecraft:absorption", 20 * 5, 0, true, true);
};
