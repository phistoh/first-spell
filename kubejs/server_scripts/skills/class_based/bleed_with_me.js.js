EntityEvents.afterHurt((event) => {
  const { server, entity } = event;
  const source = event.source.actual;
  const sourceType = event.source.getType();
  if (entity.level.clientSide) return;
  if (sourceType != "player") return;

  if (source.tags.contains("phis.bleed_with_me")) {
    if (Math.random() < 0.25) {
      let amplifier = 0;
      if (entity.getEffect("apothic_attributes:bleeding")) {
        amplifier =
          entity.getEffect("apothic_attributes:bleeding").amplifier + 1;
      }
      if (amplifier > 8) {
        amplifier = 8;
      }
      entity.potionEffects.add(
        "apothic_attributes:bleeding",
        20 * 5,
        amplifier,
        true,
        true
      );
    }
  }
});
