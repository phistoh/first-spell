NativeEvents.onEvent(
  "net.neoforged.neoforge.event.AnvilUpdateEvent",
  (event) => {
    const { left, right } = event;

    if (
      left.item == "kubejs:diamond_shears" &&
      right == "minecraft:iron_ingot"
    ) {
      event.setCanceled(true);
    }

    if (left.item == "kubejs:diamond_shears" && right == "minecraft:diamond") {
      if (left.getDamageValue() <= 0) {
        event.setCanceled(true);
      }
      const output = left.copy();
      const repairAmount = Math.floor(output.getMaxDamage() * 0.5);
      const newDamage = Math.max(output.getDamageValue() - repairAmount, 0);
      output.setDamageValue(newDamage);
      event.setMaterialCost(1);
      event.setOutput(output);
    }
  }
);
