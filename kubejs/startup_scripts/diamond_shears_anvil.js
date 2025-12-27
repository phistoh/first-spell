NativeEvents.onEvent(
  "net.neoforged.neoforge.event.AnvilUpdateEvent",
  (event) => {
    const { left, right } = event;

    if (left.item == "kubejs:diamond_shears") {
      event.setCanceled(true);
      return;
    }
  }
);
