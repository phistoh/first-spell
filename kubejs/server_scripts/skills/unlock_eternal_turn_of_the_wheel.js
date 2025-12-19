// PlayerEvents.inventoryClosed((event) => {
//   const { player } = event;
//   const pData = player.persistentData
  
//   if (pData.getBoolean('maxLevel')) return

//   const points_first_spell = player.runCommandSilent('puffish_skills points get @s phis:first_spell')
//   console.log(points_first_spell)
//   if(points_first_spell >= 50){
//     player.runCommandSilent('tellraw "puffish_skills category unlock @s eternal_turn_of_the_wheel"')
//     pData.putBoolean('maxLevel', true)
//   }
// });