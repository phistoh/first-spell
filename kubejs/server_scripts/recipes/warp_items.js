ServerEvents.recipes((event) => {
  event.remove({id: "waystones:return_scroll"});
  event.shapeless("waystones:return_scroll", [
    "3x minecraft:paper",
    "supplementaries:antique_ink"
  ]);
});
