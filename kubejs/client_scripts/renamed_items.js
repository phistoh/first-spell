ClientEvents.lang("en_us", (event) => {
  event.renameItem("supplementaries:antique_ink", "Antique™ Ink");
  event.renameItem("crittersandcompanions:grappling_hook", "Extra Sticky Silk");
  event.renameItem("moresnifferflowers:dragonfly", "Toy Dragonfly");
});

ItemEvents.modifyTooltips(event => {
    event.add('supplementaries:antique_ink', 'Quill included.')
    event.add('moresnifferflowers:dragonfly', 'Now with free levitation.')
});