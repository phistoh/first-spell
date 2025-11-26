ServerEvents.recipes((event) => {
  // remove old recipes
  event.remove({ id: "linkedchests:linked_pouch" });
  event.remove({ id: "netherchested:nether_chest" });

  // add new recipes
  event.shaped("linkedchests:linked_pouch", ["ALA", "LEL", "AWA"], {
    A: "irons_spellbooks:arcane_essence",
    L: "netherdepthsupgrade:soul_sucker_leather",
    E: "#phis:ender_eye",
    W: "#minecraft:wool",
  });
  event.shaped("netherchested:nether_chest", ["NNN", "N N", "NNN"], {
    N: "#phis:nether_bricks",
  });
});
