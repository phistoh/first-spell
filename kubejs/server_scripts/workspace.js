ItemEvents.rightClicked("minecraft:diamond_sword", (event) => {
  const item = event.item;
  const nbt = item.toNBT()?.components;

  
  console.log(nbt["minecraft:enchantments"])
});
