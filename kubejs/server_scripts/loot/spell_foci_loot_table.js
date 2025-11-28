LootJS.lootTables(event => {
    const spell_foci = [
    "blazing_soul",
    "freezing_soul",
    "crackling_soul",
    "immaculate_soul",
    "cosmic_soul",
    "crimson_soul",
    "mystical_soul",
    "wild_soul",
    "unfathomable_soul",
    "echoing_soul"
  ]
    event.create("phis:spell_foci").createPool(pool => {
        for(const spell_focus of spell_foci){
        pool.addEntry(
            LootEntry.of(`kubejs:${spell_focus}`)
        )
        }
        pool.rolls([1, 2]).bonusRolls([1,2])
    })
})

LootJS.modifiers(event => {
    event.addTableModifier("minecraft:chests/simple_dungeon").pool(pool => {
        pool.addEntry(LootEntry.reference("phis:spell_foci").randomChance(0.1))
    })
})