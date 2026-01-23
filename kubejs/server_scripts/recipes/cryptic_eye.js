ServerEvents.recipes(event => {
    event.shaped('endrem:cryptic_eye', [
        'BBB',
        'BPB',
        'BBB'
    ], {
        B: 'immersiveenchanting:ancient_book',
        P: '#c:ender_pearls'
    }).id("cryptic_eye");
})