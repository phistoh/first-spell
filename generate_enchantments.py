import json
from dataclasses import dataclass
from pathlib import Path


@dataclass
class Enchantment:
    name: str
    namespace: str
    tier: int = 1
    max_level: int = 1

    def __init__(self, name: str, namespace: str, tier: int = 1, max_level: int = 1):
        self.name = name
        self.namespace = namespace
        self.tier = tier
        self.max_level = max_level

    def __hash__(self):
        return hash(tuple(self))


ENCHANTMENTS = [
    Enchantment("depth_strider", "minecraft", 1, 3),
    Enchantment("soulbound", "yigd", 1, 1),
    Enchantment("feather_falling", "minecraft", 2, 4),
]

TIERS = {
    1: "supplementaries:antique_ink",
    2: "irons_spellbooks:uncommon_ink",
    3: "irons_spellbooks:rare_ink",
    4: "irons_spellbooks:epic_ink",
    5: "irons_spellbooks:legendary_ink",
}

if __name__ == "__main__":
    for ench in ENCHANTMENTS:
        ench_dict = {"levels": {}}

        print(f"Filename: {ench.namespace}/{ench.name}")
        for i in range(ench.max_level):
            ench_dict["levels"][i + 1] = {
                "item": TIERS[ench.tier],
                "amount": 2**i,
            }
        Path(
            f"datapacks/phis_immersive_enchanting/data/immersiveenchanting/enchantment_costs/{ench.namespace}"
        ).mkdir(parents=True, exist_ok=True)
        with open(
            f"datapacks/phis_immersive_enchanting/data/immersiveenchanting/enchantment_costs/{ench.namespace}/{ench.name}.json",
            "w",
        ) as f:
            f.write(json.dumps(ench_dict, indent=2))
