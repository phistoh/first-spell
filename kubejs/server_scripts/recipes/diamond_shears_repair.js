ServerEvents.recipes((event) => {
  event
    .shapeless("kubejs:diamond_shears", [
      "kubejs:diamond_shears",
      "minecraft:diamond",
    ])
    .modifyResult("repair_diamond_shears");
});

ServerEvents.modifyRecipeResult("repair_diamond_shears", (event) => {
  const shears = event.grid.find("kubejs:diamond_shears");
  if (!shears) {
    event.fail();
    return;
  }

  const result = shears.copy();
  if (shears.getDamageValue() > 0) {
    const repairAmount = Math.floor(shears.getMaxDamage() * 0.48);
    result.setDamageValue(Math.max(shears.getDamageValue() - repairAmount, 0));
  }

  event.success(result);
});
