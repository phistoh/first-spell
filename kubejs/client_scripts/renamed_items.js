ClientEvents.lang("en_us", (event) => {
  event.renameItem("supplementaries:antique_ink", "Antique™ Ink");
  event.renameItem("crittersandcompanions:grappling_hook", "Extra Sticky Silk");
  event.renameItem("moresnifferflowers:dragonfly", "Toy Dragonfly");
  event.renameItem("keeperofinventories:keeper_of_inventories", "Totem of Keeping");
});

ItemEvents.modifyTooltips(event => {
    event.add('supplementaries:antique_ink', 'Quill included.')
    event.add('moresnifferflowers:dragonfly', 'Now with free levitation.')

    event.add("keeperofinventories:keeper_of_inventories", '§4Warning:§r Does not work in a backpack!')
});

