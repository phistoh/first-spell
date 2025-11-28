ClientEvents.lang("en_us", (event) => {
  event.renameItem("supplementaries:antique_ink", "Antique™ Ink");
  event.renameItem("crittersandcompanions:grappling_hook", "Extra Sticky Silk");
});

ItemEvents.modifyTooltips(event => {
    event.add('supplementaries:antique_ink', 'Quill included.')
});