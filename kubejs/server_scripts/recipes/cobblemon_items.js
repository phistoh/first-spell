ServerEvents.recipes((event) => {
  event.shaped("cobblemon:ability_capsule", [" E ", "EPE", " E "], {
    E: "irons_spellbooks:arcane_essence",
    P: "#c:ender_pearls"
  }).id("kubejs:ability_capsule");

  event.shaped("cobblemon:ability_patch", [" E ", "EPE", " E "], {
    E: "deeperdarker:soul_dust",
    P: "irons_spellbooks:upgrade_orb"
  }).id("kubejs:ability_patch");
});
