ServerEvents.tags("item", (event) => {
  const iss_schools = {
    "fire": "minecraft:blaze_rod",
    "ice": "irons_spellbooks:frozen_bone",
    "lightning": "irons_spellbooks:lightning_bottle",
    "holy": "irons_spellbooks:divine_pearl",
    "ender": "minecraft:ender_pearl",
    "blood": "irons_spellbooks:blood_vial",
    "evocation": "minecraft:emerald",
    "nature": "minecraft:poisonous_potato",
    "eldritch": "minecraft:echo_shard"
  }

  for(const [school, name] of Object.entries(iss_schools)){
     event.remove(`irons_spellbooks:${school}_focus`, name)
  }
  event.remove("familiarslib:sound_focus", "minecraft:note_block")

});