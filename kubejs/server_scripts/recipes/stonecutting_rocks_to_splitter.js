ServerEvents.recipes(event =>
{
  const rocks_which_generate_splitter = [
    "cobblestone",
    "granite",
    "diorite",
    "andesite",
    "sandstone",
    "red_sandstone",
    "end_stone",
    "netherrack",
    "soul_soil",
  ]
  for (const rock of rocks_which_generate_splitter)
  {
    event.stonecutting(`4x rocks:${rock}_splitter`, rock)
  }
  event.stonecutting("4x minecraft:prismarine_shard", "minecraft:prismarine")
}
)
