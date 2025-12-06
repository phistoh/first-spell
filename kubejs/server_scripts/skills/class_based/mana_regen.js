ISSEvents.spellOnCast((event) => {
  const start_index = String(event.schoolType.id).indexOf(":") + 1;
  const iss_school = String(event.schoolType.id).substring(start_index);
  if (!event.entity.tags.contains(`phis.conserve_mana_${iss_school}`)) return;
  if (Math.random() < 0.1) {
    event.manaCost = 0;
  }
});
