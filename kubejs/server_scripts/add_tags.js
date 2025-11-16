// Listen to item registry event
ServerEvents.tags("item", (event) => {
  event.add("c:tools/knife", "endermanoverhaul:corrupted_blade");
});

/*

Item in hand:
[22:47:05] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - 'endermanoverhaul:corrupted_blade[damage=1]'
[22:47:05] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#c:tools/knife'
[22:47:05] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#fated_inventory:allow_modified_components'
[22:47:05] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#yigd:soulbindable'
[22:47:05] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#c:tools'
[22:47:05] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#amendments:goes_in_tripwire_hook'
[22:47:05] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '@endermanoverhaul'
[22:47:08] [Thread-30/INFO] [EMI/]: [EMI] Finishing up
[22:47:08] [Thread-30/INFO] [EMI/]: [EMI] Reloaded EMI in 10483ms
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] Item in hand:
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - 'farmersdelight:diamond_knife'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#minecraft:enchantable/fire_aspect'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#c:tools/knife'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#c:enchantable/knockback'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#minecraft:enchantable/sword'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#minecraft:enchantable/sharp_weapon'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#c:tools'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#majospellenchantment:mana_reaper_compatible'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#farmersdelight:enchantable/knife'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#amendments:goes_in_tripwire_hook'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#c:enchantable/mob_loot'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#yigd:soulbindable'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#minecraft:enchantable/weapon'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#farmersdelight:straw_harvesters'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#c:enchantable/damage_primary'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#c:enchantables'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#minecraft:enchantable/mining'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#minecraft:enchantable/mining_loot'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#minecraft:enchantable/vanishing'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#c:enchantable/fire_aspect_primary'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#farmersdelight:tools/knives'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#minecraft:enchantable/durability'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#fated_inventory:allow_modified_components'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '#minecraft:breaks_decorated_pots'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '@farmersdelight'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '%minecraft:search'
[22:47:23] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - '%farmersdelight:farmersdelight'


*/