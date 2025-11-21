ServerEvents.tags("item", (event) => {
  // Make Corrupted Blade behave like Farmer's Delight knives
  const knife_tags = [
    "c:enchantable/damage_primary",
    "c:enchantable/fire_aspect_primary",
    "c:enchantable/knockback",
    "c:enchantable/mob_loot",
    "c:enchantables",
    "c:tools",
    "c:tools/knife",
    "farmersdelight:enchantable/knife",
    "farmersdelight:straw_harvesters",
    "farmersdelight:tools/knives",
    "majospellenchantment:mana_reaper_compatible",
    "minecraft:breaks_decorated_pots",
    "minecraft:enchantable/durability",
    "minecraft:enchantable/fire_aspect",
    "minecraft:enchantable/mining",
    "minecraft:enchantable/mining_loot",
    "minecraft:enchantable/sharp_weapon",
    "minecraft:enchantable/sword",
    "minecraft:enchantable/vanishing",
    "minecraft:enchantable/weapon"
  ]

  for(let tag of knife_tags){
     event.add(tag, "endermanoverhaul:corrupted_blade");
  }

  // Charge Altar of Fate with Arcane Essence
  event.add("fated_inventory:charges_fated_altar", "irons_spellbooks:arcane_essence");
});