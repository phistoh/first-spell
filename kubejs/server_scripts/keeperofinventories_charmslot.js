EntityEvents.death((event) => {
  const { entity } = event;

  if (!entity) return;
  if (entity.level.clientSide) return;
  if (!entity.isPlayer()) return;

  if (!entity.isCuriosEquipped("keeperofinventories:keeper_of_inventories"))
    return;
  // End script if a Keeper of Inventories is found in inventory to make sure only on stack shrinks
  if (
    entity.inventory.find("keeperofinventories:keeper_of_inventories") >= 0 &&
    entity.inventory.find("keeperofinventories:keeper_of_inventories") <= 35
  )
    return;

    entity.curiosInventory
      .findFirstCurio("keeperofinventories:keeper_of_inventories")
      .get()
      .stack().count--;
});
