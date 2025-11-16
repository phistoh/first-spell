// EntityEvents.beforeHurt((event) => {
//   const {
//     entity,
//     source: { player },
//     damage,
//   } = event;
//   if (!player) return;

//     console.log(player.mainHandItem.toStringJS().includes("level:1,"))
//     console.log(player.mainHandItem.id)
//     console.log(player.mainHandItem.rarity)
// });

// // AModels.createPredicateModel("astages:rarity", stack => stack.toStringJS().includes("level:1,") && stack.id == "irons_spellbooks:scroll")
// AModels.createPredicateModel("astages:rarity", stack => stack.rarity == $Rarity.EPIC)
// AStages.addRestrictionForPredicate("astages/item5/", "stage_item", "astages:rarity")