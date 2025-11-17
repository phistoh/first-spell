ServerEvents.tags("item", (event) => {
  // Make Corrupted Blade behave like Farmer's Delight knives
  event.add("c:enchantable/damage_primary", "endermanoverhaul:corrupted_blade");
  event.add(
    "c:enchantable/fire_aspect_primary",
    "endermanoverhaul:corrupted_blade"
  );
  event.add("c:enchantable/knockback", "endermanoverhaul:corrupted_blade");
  event.add("c:enchantable/mob_loot", "endermanoverhaul:corrupted_blade");
  event.add("c:enchantables", "endermanoverhaul:corrupted_blade");
  event.add("c:tools", "endermanoverhaul:corrupted_blade");
  event.add("c:tools/knife", "endermanoverhaul:corrupted_blade");
  event.add(
    "farmersdelight:enchantable/knife",
    "endermanoverhaul:corrupted_blade"
  );
  event.add(
    "farmersdelight:straw_harvesters",
    "endermanoverhaul:corrupted_blade"
  );
  event.add("farmersdelight:tools/knives", "endermanoverhaul:corrupted_blade");
  event.add(
    "majospellenchantment:mana_reaper_compatible",
    "endermanoverhaul:corrupted_blade"
  );
  event.add(
    "minecraft:breaks_decorated_pots",
    "endermanoverhaul:corrupted_blade"
  );
  event.add(
    "minecraft:enchantable/durability",
    "endermanoverhaul:corrupted_blade"
  );
  event.add(
    "minecraft:enchantable/fire_aspect",
    "endermanoverhaul:corrupted_blade"
  );
  event.add("minecraft:enchantable/mining", "endermanoverhaul:corrupted_blade");
  event.add(
    "minecraft:enchantable/mining_loot",
    "endermanoverhaul:corrupted_blade"
  );
  event.add(
    "minecraft:enchantable/sharp_weapon",
    "endermanoverhaul:corrupted_blade"
  );
  event.add("minecraft:enchantable/sword", "endermanoverhaul:corrupted_blade");
  event.add(
    "minecraft:enchantable/vanishing",
    "endermanoverhaul:corrupted_blade"
  );
  event.add("minecraft:enchantable/weapon", "endermanoverhaul:corrupted_blade");
});
