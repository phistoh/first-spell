ServerEvents.recipes((event) => {
  event.shapeless("minecraft:writable_book", [
    "#phis:ink",
    "minecraft:book",
  ]);
  event.shapeless("supplementaries:antique_ink", [
    "minecraft:ink_sac",
    "minecraft:feather",
    "minecraft:glass_bottle",
  ]);
  event.shapeless("supplementaries:antique_ink", [
    "irons_spellbooks:common_ink",
  ]);
   event.shapeless("irons_spellbooks:common_ink", [
    "supplementaries:antique_ink",
  ]);

  event.shapeless("supplementaries:antique_ink", [
    "minecraft:glow_ink_sac",
    "minecraft:feather",
    "minecraft:glass_bottle",
  ]);
  
  event.shapeless("3x irons_spellbooks:common_ink", [
    "irons_spellbooks:uncommon_ink",
    'minecraft:potion[potion_contents={potion:"water"}]',
    'minecraft:potion[potion_contents={potion:"water"}]',
    'minecraft:potion[potion_contents={potion:"water"}]'
  ]);
  
  event.shapeless("3x irons_spellbooks:uncommon_ink", [
    "irons_spellbooks:rare_ink",
    'minecraft:potion[potion_contents={potion:"water"}]',
    'minecraft:potion[potion_contents={potion:"water"}]',
    'minecraft:potion[potion_contents={potion:"water"}]'
  ]);
  
  event.shapeless("3x irons_spellbooks:rare_ink", [
    "irons_spellbooks:epic_ink",
    'minecraft:potion[potion_contents={potion:"water"}]',
    'minecraft:potion[potion_contents={potion:"water"}]',
    'minecraft:potion[potion_contents={potion:"water"}]'
  ]);
  
  event.shapeless("3x irons_spellbooks:epic_ink", [
    "irons_spellbooks:legendary_ink",
    'minecraft:potion[potion_contents={potion:"water"}]',
    'minecraft:potion[potion_contents={potion:"water"}]',
    'minecraft:potion[potion_contents={potion:"water"}]'
  ]);
});