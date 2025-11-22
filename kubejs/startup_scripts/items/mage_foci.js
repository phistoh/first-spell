StartupEvents.registry('item', event => {  
  const iss_schools = {
    "fire": "Blazing Soul",
    "ice": "Freezing Soul",
    "lightning": "Crackling Soul",
    "holy": "Immaculate Soul",
    "ender": "Cosmic Soul",
    "blood": "Crimson Soul",
    "evocation": "Mystical Soul",
    "nature": "Wild Soul",
    "eldritch": "Unfathomable Soul"
  }
  
  for(const [school, name] of Object.entries(iss_schools)){
    let id = name.toLowerCase().split(' ').join('_')
    event.create(id)
   .displayName(name)
   .texture(`phis:item/${id}`)
   .rarity("Uncommon")
   .tooltip(`This bottled soul is used as a focus for the ${school} spell school.`)
   .tag("irons_spellbooks:school_focus")
   .tag(`irons_spellbooks:${school}_focus`)
  }
  event.create("echoing_soul")
   .displayName("Echoing Soul")
   .texture("phis:item/echoing_soul")
   .rarity("Uncommon")
   .tooltip(`This bottled soul is used as a focus for the sound spell school.`)
   .tag("irons_spellbooks:school_focus")
   .tag("irons_spellbooks:sound_focus")
})