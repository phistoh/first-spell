// Damage scaling for amplifying poison
EntityEvents.beforeHurt((event) => {
  const { entity, damage } = event;
  if (!entity.living) return;
  if (entity.level.clientSide) return;
  if (!entity.getEffect("kubejs:amplifying_poison")) return;

  event.setDamage(damage * 1.5);
});

// apply poisons
EntityEvents.afterHurt((event) => {
  const { server, entity } = event;
  const source = event.source.actual;
  const sourceType = event.source.getType();
  if (entity.level.clientSide) return;
  if (sourceType != "player") return;

  if (source.tags.contains("phis.the_poisonous_path")) {
    // offensive poisons
    if (source.getEffect("kubejs:deadly_poison_indicator")) {
      if (Math.random() < 0.3) {
        let amplifier = 0;
        if (entity.getEffect("kubejs:deadly_poison")) {
          amplifier = entity.getEffect("kubejs:deadly_poison").amplifier + 1;
        }
        if (amplifier > 3) {
          amplifier = 3;
        }
        entity.potionEffects.add(
          "kubejs:deadly_poison",
          20 * 6,
          amplifier,
          true,
          true
        );
      }
    } else if (source.getEffect("kubejs:amplifying_poison_indicator")) {
      if (Math.random() < 0.3) {
        entity.potionEffects.add(
          "kubejs:amplifying_poison",
          20 * 6,
          0,
          true,
          true
        );
      }
    } else if (source.getEffect("kubejs:instant_poison_indicator")) {
      if (Math.random() < 0.3) {
        const iframes = entity.invulnerableTime;
        entity.invulnerableTime = 0;
        entity.attack(entity.level.damageSources().magic(), 3);
        entity.invulnerableTime = iframes;
      }
    }
    // defensive poisons
    if (source.getEffect("kubejs:crippling_poison_indicator")) {
      if (Math.random() < 0.3) {
        entity.potionEffects.add(
          "kubejs:crippling_poison",
          20 * 6,
          0,
          true,
          true
        );
      }
    } else if (source.getEffect("kubejs:numbing_poison_indicator")) {
      if (Math.random() < 0.3) {
        entity.potionEffects.add(
          "kubejs:numbing_poison",
          20 * 10,
          0,
          true,
          true
        );
      }
    } else if (source.getEffect("kubejs:atrophic_poison_indicator")) {
      if (Math.random() < 0.3) {
        entity.potionEffects.add(
          "kubejs:atrophic_poison",
          20 * 10,
          0,
          true,
          true
        );
      }
    }
  }
});
