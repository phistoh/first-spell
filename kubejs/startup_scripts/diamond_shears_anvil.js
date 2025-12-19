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

    //     if (left.item == "kubejs:diamond_shears" && right == "minecraft:diamond") {
    //       if (left.getDamageValue() <= 0) {
    //         event.setCanceled(true);
    //       }
    //       let output = left.copy();
    //       let repairAmount = Math.floor(output.getMaxDamage() * 0.5);
    //       let newDamage = Math.max(output.getDamageValue() - repairAmount, 0);
    //       output.setDamageValue(newDamage);
    //       event.setCost(0);
    //       event.setMaterialCost(1);
    //       event.setOutput(output);
    //     }
  }
);
