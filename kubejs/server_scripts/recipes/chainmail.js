ServerEvents.recipes((event) => {
  event.shaped("minecraft:chainmail_helmet", ["CCC", "C C"], {
    C: "minecraft:chain",
  });
  event.shaped("minecraft:chainmail_chestplate", ["C C", "CCC", "CCC"], {
    C: "minecraft:chain",
  });
  event.shaped("minecraft:chainmail_leggings", ["CCC", "C C", "C C"], {
    C: "minecraft:chain",
  });
  event.shaped("minecraft:chainmail_boots", ["C C", "C C"], {
    C: "minecraft:chain",
  });
  event.remove({ id: "minecraft:chain" });
  event.shaped("minecraft:chain", ["N", "N", "N"], {
    N: "minecraft:iron_nugget",
  });
});
