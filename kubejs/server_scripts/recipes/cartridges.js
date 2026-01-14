ServerEvents.recipes(event => {
    event.shaped('8x simplemusket:hellfire_cartridge', [
        'CCC',
        'CRC',
        'CCC'
    ], {
        C: 'simplemusket:cartridge',
        R: 'rubinated_nether:molten_ruby'
    }).id("hellfire_cartridge");
})
ServerEvents.recipes(event => {
    event.shaped('8x simplemusket:enchanted_cartridge', [
        'CCC',
        'CEC',
        'CCC'
    ], {
        C: 'simplemusket:cartridge',
        E: 'irons_spellbooks:arcane_essence'
    }).id("enchanted_cartridge");
})