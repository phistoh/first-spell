// let $PlayerEvent$BreakSpeed = Java.loadClass("net.neoforged.neoforge.event.entity.player.PlayerEvent$BreakSpeed");
// NativeEvents.onEvent($PlayerEvent$BreakSpeed, event => {
//     global.harvestChecker(event)
// })

// global.harvestChecker = (/** @type {$PlayerEvent$BreakSpeed_} */ event) => {
//     const {entity, state} = event
//     if (!state.hasTag("minecraft:logs")) return
//     if (/** @type {$Player_} */ (entity).mainHandItem.hasTag("minecraft:axes")) return
//     event.setNewSpeed(0)
// }