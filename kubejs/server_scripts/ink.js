ServerEvents.recipes(event => {
    event.shapeless('minecraft:writable_book', [
        'supplementaries:antique_ink',
        'minecraft:book'
    ]);
    event.shapeless('supplementaries:antique_ink', [
        'minecraft:ink_sac',
        'minecraft:feather',
        'minecraft:glass_bottle'
    ]);
    event.shapeless('supplementaries:antique_ink', [
        'minecraft:glow_ink_sac',
        'minecraft:feather',
        'minecraft:glass_bottle'
    ]);
    event.shapeless('irons_spellbooks:uncommon_ink', [
    '2x supplementaries:antique_ink',
    'irons_spellbooks:arcane_essence'
    ]);
    event.shapeless('irons_spellbooks:rare_ink', [
    '2x irons_spellbooks:uncommon_ink',
    'irons_spellbooks:arcane_essence',
    'rubinated_nether:molten_ruby'
    ]);
    event.shapeless('irons_spellbooks:epic_ink', [
    '2x irons_spellbooks:rare_ink',
    'irons_spellbooks:arcane_essence',
    'endermanoverhaul:enderman_tooth'
    ]);
    event.shapeless('irons_spellbooks:legendary_ink', [
    '2x irons_spellbooks:epic_ink',
    'irons_spellbooks:arcane_essence',
    'deeperdarker:soul_crystal'
    ]);
})