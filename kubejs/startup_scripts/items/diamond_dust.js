// Listen to item registry event
StartupEvents.registry('item', event => {
  event.create('diamond_dust')
   .texture('phis:item/diamond_dust')
   .displayName('Diamond Dust')
})
