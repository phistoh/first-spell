ServerEvents.recipes(event => {
  event.smelting('minecraft:iron_block', 'minecraft:raw_iron_block');
  event.smelting('minecraft:gold_block', 'minecraft:raw_gold_block');
  event.smelting('minecraft:copper_block', 'minecraft:raw_copper_block');
})