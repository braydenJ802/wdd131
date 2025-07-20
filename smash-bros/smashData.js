export const smashFighters = {
  "metadata": {
    "version": "2025",
    "tier_list_source": "LumiRank 2025 Official Tier List",
    "weight_source": "KuroganeHammer Ultimate Weight Data",
    "total_characters": 11,
    "note": "Featured fighter demo - reduced dataset",
    "last_updated": "2025-07-18"
  },
  "characters": [
    {
      "id": 1,
      "name": "Mario",
      "image_name": "mario",
      "description": "Nintendo's iconic plumber is a well-rounded fighter with reliable combos and versatile tools. His cape can reflect projectiles and turn opponents around, while F.L.U.D.D. provides excellent edge-guarding opportunities.",
      "game_origin": "Super Mario Bros.",
      "series": "Super Mario",
      "weight": 98,
      "weight_class": "Middleweight",
      "tier": "A+",
      "moveset": {
        "neutral_special": {
          "name": "Fireball",
          "description": "Shoots a fireball that bounces along the ground. The fireball gets weaker as it travels."
        },
        "side_special": {
          "name": "Cape",
          "description": "Swings his cape to turn foes around. Can also reflect projectiles back at opponents."
        },
        "up_special": {
          "name": "Super Jump Punch",
          "description": "Punches upward while jumping. Opponents hit at the start of the move take more damage."
        },
        "down_special": {
          "name": "F.L.U.D.D.",
          "description": "Charges up F.L.U.D.D., then shoots a stream of water. The water pushes opponents but doesn't deal damage."
        },
        "final_smash": {
          "name": "Mario Finale",
          "description": "Fires two giant fireballs that travel across the stage, dealing massive damage to anyone caught in them."
        }
      },
      "example_combo": "Down Throw → Up Air → Up Air → Up Special"
    },
    {
      "id": 2,
      "name": "Donkey Kong",
      "image_name": "donkeykong",
      "description": "The king of the jungle brings raw power and surprising mobility. His cargo throw leads to devastating combos, and his massive range makes him a formidable opponent despite his large hurtbox.",
      "game_origin": "Donkey Kong",
      "series": "Donkey Kong",
      "weight": 127,
      "weight_class": "Super Heavyweight",
      "tier": "B-",
      "moveset": {
        "neutral_special": {
          "name": "Giant Punch",
          "description": "Winds up, then unleashes a devastating punch. Can be charged by pressing the button repeatedly for more power."
        },
        "side_special": {
          "name": "Headbutt",
          "description": "Lunges forward with a powerful headbutt. Buries grounded opponents and spikes airborne ones."
        },
        "up_special": {
          "name": "Spinning Kong",
          "description": "Spins around with arms extended, hitting multiple times. Can move left and right while spinning."
        },
        "down_special": {
          "name": "Hand Slap",
          "description": "Slaps the ground repeatedly, creating shockwaves that damage nearby grounded opponents."
        },
        "final_smash": {
          "name": "Jungle Rush",
          "description": "Punches opponents into a cinematic combo featuring a massive barrage of punches."
        }
      },
      "example_combo": "Cargo Down Throw → Back Air"
    },
    {
      "id": 4,
      "name": "Samus",
      "image_name": "samus",
      "description": "The intergalactic bounty hunter excels at zoning with her charge shot and missiles. Her long-range game is complemented by strong aerial attacks and a powerful screw attack for escaping pressure.",
      "game_origin": "Metroid",
      "series": "Metroid",
      "weight": 108,
      "weight_class": "Heavyweight",
      "tier": "A+",
      "moveset": {
        "neutral_special": {
          "name": "Charge Shot",
          "description": "Charges up energy, then fires a powerful energy blast. Can be charged for increased power and size."
        },
        "side_special": {
          "name": "Missile",
          "description": "Fires a missile. Tilt input fires a faster Homing Missile, smash input fires a slower Super Missile."
        },
        "up_special": {
          "name": "Screw Attack",
          "description": "Spins upward while surrounded by energy, hitting multiple times. Provides excellent recovery distance."
        },
        "down_special": {
          "name": "Bomb",
          "description": "Drops into Morph Ball form and places a bomb. The bomb explodes after a short time."
        },
        "final_smash": {
          "name": "Zero Laser",
          "description": "Fires a massive laser beam that pierces through opponents and deals tremendous damage."
        }
      },
      "example_combo": "Neutral Air → Forward Air",
      "echo": "Dark Samus"
    },
    {
      "id": 4.5,
      "name": "Dark Samus",
      "image_name": "samusd",
      "description": "The Phazon-corrupted echo of Samus shares the same devastating zoning tools but with unique animations and slightly different properties. Her otherworldly presence strikes fear into opponents.",
      "game_origin": "Metroid",
      "series": "Metroid",
      "weight": 108,
      "weight_class": "Heavyweight",
      "tier": "A+",
      "moveset": {
        "neutral_special": {
          "name": "Charge Shot",
          "description": "Charges up energy, then fires a powerful energy blast. Can be charged for increased power and size."
        },
        "side_special": {
          "name": "Missile",
          "description": "Fires a missile. Tilt input fires a faster Homing Missile, smash input fires a slower Super Missile."
        },
        "up_special": {
          "name": "Screw Attack",
          "description": "Spins upward while surrounded by energy, hitting multiple times. Provides excellent recovery distance."
        },
        "down_special": {
          "name": "Bomb",
          "description": "Drops into Morph Ball form and places a bomb. The bomb explodes after a short time."
        },
        "final_smash": {
          "name": "Phazon Laser",
          "description": "Fires a massive Phazon-powered laser beam that pierces through opponents and deals tremendous damage."
        }
      },
      "example_combo": "Neutral Air → Forward Air",
      "echo_of": "Samus"
    },
    {
      "id": 6,
      "name": "Kirby",
      "image_name": "kirby",
      "description": "The pink puffball from Dream Land can copy any opponent's neutral special with his inhale ability. His multiple jumps and small size make him hard to hit, though he struggles against characters with good range.",
      "game_origin": "Kirby's Dream Land",
      "series": "Kirby",
      "weight": 79,
      "weight_class": "Featherweight",
      "tier": "D",
      "moveset": {
        "neutral_special": {
          "name": "Inhale",
          "description": "Sucks up opponents and copies their neutral special move. Can also inhale items and projectiles."
        },
        "side_special": {
          "name": "Hammer Flip",
          "description": "Charges up a hammer attack. Can be charged for massive damage, but Kirby takes damage if overcharged."
        },
        "up_special": {
          "name": "Final Cutter",
          "description": "Pulls out a sword and slashes upward, then downward. Sends a projectile wave when landing."
        },
        "down_special": {
          "name": "Stone",
          "description": "Transforms into a heavy stone that drops quickly. Provides armor against most attacks while transformed."
        },
        "final_smash": {
          "name": "Ultra Sword",
          "description": "Kirby grabs a massive sword and performs several devastating slashes across the stage."
        }
      },
      "example_combo": "Down Throw → Forward Air"
    },
    {
      "id": 8,
      "name": "Pikachu",
      "image_name": "pikachu",
      "description": "The electric mouse Pokémon is incredibly fast and agile with one of the best recovery moves in the game. Quick Attack allows for amazing mobility and combo extensions, making Pikachu a top-tier threat.",
      "game_origin": "Pokémon Red/Blue",
      "series": "Pokemon",
      "weight": 79,
      "weight_class": "Featherweight",
      "tier": "S-",
      "moveset": {
        "neutral_special": {
          "name": "Thunder Jolt",
          "description": "Launches an electric projectile that travels along the ground and up walls."
        },
        "side_special": {
          "name": "Skull Bash",
          "description": "Charges forward with a powerful headbutt. Can be charged for increased distance and damage."
        },
        "up_special": {
          "name": "Quick Attack",
          "description": "Warps in up to two directions. Deals damage to opponents at the start and end of each warp."
        },
        "down_special": {
          "name": "Thunder",
          "description": "Calls down a lightning bolt from above. If it hits Pikachu, it deals massive damage to nearby opponents."
        },
        "final_smash": {
          "name": "Volt Tackle",
          "description": "Pikachu transforms into a ball of electricity and flies around the stage, dealing massive damage on contact."
        }
      },
      "example_combo": "Drag-down Neutral Air → Up Tilt loops"
    },
    {
      "id": 10,
      "name": "Ness",
      "image_name": "ness",
      "description": "The PSI-powered boy from Onett brings powerful projectiles and a devastating back throw. His PK Fire can lead to extended combos, while PK Thunder offers both recovery and offensive options.",
      "game_origin": "EarthBound",
      "series": "EarthBound",
      "weight": 94,
      "weight_class": "Middleweight",
      "tier": "B-",
      "moveset": {
        "neutral_special": {
          "name": "PK Flash",
          "description": "Charges a PSI energy ball that can be controlled and detonated manually. Deals massive damage when fully charged."
        },
        "side_special": {
          "name": "PK Fire",
          "description": "Shoots a PSI projectile that bursts into flames on impact, trapping opponents in multiple hits."
        },
        "up_special": {
          "name": "PK Thunder",
          "description": "Creates a controllable ball of lightning. Can hit Ness to launch him for recovery or offense."
        },
        "down_special": {
          "name": "PSI Magnet",
          "description": "Absorbs energy-based projectiles to heal damage. Can also push opponents when activated."
        },
        "final_smash": {
          "name": "PK Starstorm",
          "description": "Calls down a barrage of falling stars that can be aimed left and right across the stage."
        }
      },
      "example_combo": "Down Throw → Forward Air → Forward Air"
    },
    {
      "id": 14,
      "name": "Bowser",
      "image_name": "bowser",
      "description": "The Koopa King is the ultimate heavyweight bruiser with incredible kill power and surprising speed. His command grab and armor on many attacks make him a terrifying close-range opponent.",
      "game_origin": "Super Mario Bros.",
      "series": "Super Mario",
      "weight": 135,
      "weight_class": "Super Heavyweight",
      "tier": "C",
      "moveset": {
        "neutral_special": {
          "name": "Fire Breath",
          "description": "Breathes a stream of fire that gets weaker with continued use. Can be angled up and down."
        },
        "side_special": {
          "name": "Flying Slam",
          "description": "Grabs an opponent and jumps into the air, then slams them down. Direction can be influenced during the grab."
        },
        "up_special": {
          "name": "Whirling Fortress",
          "description": "Spins rapidly while moving upward, hitting multiple times. Can also be used on the ground."
        },
        "down_special": {
          "name": "Bowser Bomb",
          "description": "Jumps up and slams down with tremendous force, creating shockwaves on both sides upon landing."
        },
        "final_smash": {
          "name": "Giga Bowser Punch",
          "description": "Transforms into Giga Bowser and punches opponents off the screen with incredible force."
        }
      },
      "example_combo": "Down Throw → Up Air"
    },
    {
      "id": 26,
      "name": "Mr. Game & Watch",
      "image_name": "gamewatch",
      "description": "The 2D retro character brings unpredictable gameplay with his Judge hammer and bucket that can absorb projectiles. His up air is one of the best in the game, and his mobility makes him surprisingly effective.",
      "game_origin": "Game & Watch",
      "series": "Game & Watch",
      "weight": 75,
      "weight_class": "Featherweight",
      "tier": "S",
      "moveset": {
        "neutral_special": {
          "name": "Chef",
          "description": "Flips sausages from a frying pan. The sausages travel in an arc and deal damage to opponents."
        },
        "side_special": {
          "name": "Judge",
          "description": "Swings a hammer with a random number (1-9). Higher numbers deal more damage and have special effects."
        },
        "up_special": {
          "name": "Fire",
          "description": "Extends a ladder and climbs up it. The ladder can hit opponents, and Game & Watch can attack while climbing."
        },
        "down_special": {
          "name": "Oil Spill",
          "description": "Dumps a bucket of oil that can absorb energy projectiles. When full, the bucket can be dumped for massive damage."
        },
        "final_smash": {
          "name": "Octopus",
          "description": "Transforms into a giant octopus that can grab and squeeze opponents while moving around the stage."
        }
      },
      "example_combo": "Down Throw → Up Air → Up Air"
    },
    {
      "id": 41,
      "name": "Toon Link",
      "image_name": "toonlink",
      "description": "The cel-shaded hero from Wind Waker combines Link's projectile game with increased mobility. His bombs and boomerang control space effectively, while his quick aerials make him great at pressuring opponents.",
      "game_origin": "The Legend of Zelda: The Wind Waker",
      "series": "The Legend of Zelda",
      "weight": 91,
      "weight_class": "Lightweight",
      "tier": "A-",
      "moveset": {
        "neutral_special": {
          "name": "Hero's Bow",
          "description": "Fires arrows that can be charged for increased damage and speed. Arrows travel in an arc."
        },
        "side_special": {
          "name": "Boomerang",
          "description": "Throws a boomerang that travels forward then returns. Can hit opponents on both the outward and return trips."
        },
        "up_special": {
          "name": "Spin Attack",
          "description": "Spins with sword extended, hitting multiple times. Provides both vertical recovery and offensive options."
        },
        "down_special": {
          "name": "Bomb",
          "description": "Pulls out a bomb that explodes after a few seconds or when it hits something. Can be thrown or dropped."
        },
        "final_smash": {
          "name": "Triforce Slash",
          "description": "Traps nearby opponents in the Triforce symbol and performs a devastating sword combo."
        }
      },
      "example_combo": "Down Throw → Up Air"
    },
    {
      "id": 43,
      "name": "Villager",
      "image_name": "villager",
      "description": "The peaceful resident of Animal Crossing brings a unique playstyle with the ability to pocket projectiles and use them later. The Lloid Rocket and tree provide excellent stage control and kill options.",
      "game_origin": "Animal Crossing",
      "series": "Animal Crossing",
      "weight": 92,
      "weight_class": "Middleweight",
      "tier": "D",
      "moveset": {
        "neutral_special": {
          "name": "Pocket",
          "description": "Catches projectiles and items, storing them to use later. Can also catch some opponent attacks."
        },
        "side_special": {
          "name": "Lloid Rocket",
          "description": "Fires a gyroid rocket that travels forward. Villager can ride the rocket for extra distance and damage."
        },
        "up_special": {
          "name": "Balloon Trip",
          "description": "Uses balloons to fly upward. The balloons can be popped by attacks, reducing recovery distance."
        },
        "down_special": {
          "name": "Timber",
          "description": "Plants, waters, and chops down a tree in three stages. The falling tree deals massive damage."
        },
        "final_smash": {
          "name": "Dream Town",
          "description": "Traps opponents in a house, then Tom Nook and the Nooklings remodel it with the opponents inside."
        }
      },
      "example_combo": "Down Air → Up Smash"
    }
  ]
};


// Full JSON:
// export const smashFighters =
// {
//   "metadata": {
//     "version": "2025",
//     "tier_list_source": "LumiRank 2025 Official Tier List",
//     "weight_source": "KuroganeHammer Ultimate Weight Data",
//     "total_characters": 70,
//     "note": "Base roster + Piranha Plant (free DLC) - Paid DLC characters removed",
//     "last_updated": "2025-07-01"
//   },
//   "characters": [
//     {
//       "id": 1,
//       "name": "Mario",
//       "game_origin": "Super Mario Bros.",
//       "series": "Super Mario",
//       "weight": 98,
//       "weight_class": "Middleweight",
//       "tier": "A+",
//       "moveset": {
//         "neutral_special": "Fireball",
//         "side_special": "Cape",
//         "up_special": "Super Jump Punch",
//         "down_special": "F.L.U.D.D.",
//         "final_smash": "Mario Finale"
//       },
//       "example_combo": "Down Throw → Up Air → Up Air → Up Special"
//     },
//     {
//       "id": 2,
//       "name": "Donkey Kong",
//       "game_origin": "Donkey Kong",
//       "series": "Donkey Kong",
//       "weight": 127,
//       "weight_class": "Super Heavyweight",
//       "tier": "B-",
//       "moveset": {
//         "neutral_special": "Giant Punch",
//         "side_special": "Headbutt",
//         "up_special": "Spinning Kong",
//         "down_special": "Hand Slap",
//         "final_smash": "Jungle Rush"
//       },
//       "example_combo": "Cargo Down Throw → Back Air"
//     },
//     {
//       "id": 3,
//       "name": "Link",
//       "game_origin": "The Legend of Zelda",
//       "series": "The Legend of Zelda",
//       "weight": 104,
//       "weight_class": "Heavyweight",
//       "tier": "B+",
//       "moveset": {
//         "neutral_special": "Bow and Arrows",
//         "side_special": "Boomerang",
//         "up_special": "Spin Attack",
//         "down_special": "Remote Bomb",
//         "final_smash": "Ancient Bow and Arrow"
//       },
//       "example_combo": "Down Throw → Up Smash"
//     },
//     {
//       "id": 4,
//       "name": "Samus",
//       "game_origin": "Metroid",
//       "series": "Metroid",
//       "weight": 108,
//       "weight_class": "Heavyweight",
//       "tier": "A+",
//       "moveset": {
//         "neutral_special": "Charge Shot",
//         "side_special": "Missile",
//         "up_special": "Screw Attack",
//         "down_special": "Bomb",
//         "final_smash": "Zero Laser"
//       },
//       "example_combo": "Neutral Air → Forward Air",
//       "echo": "Dark Samus"
//     },
//     {
//       "id": 4.5,
//       "name": "Dark Samus",
//       "game_origin": "Metroid",
//       "series": "Metroid",
//       "weight": 108,
//       "weight_class": "Heavyweight",
//       "tier": "A+",
//       "moveset": {
//         "neutral_special": "Charge Shot",
//         "side_special": "Missile",
//         "up_special": "Screw Attack",
//         "down_special": "Bomb",
//         "final_smash": "Phazon Laser"
//       },
//       "example_combo": "Neutral Air → Forward Air",
//       "echo_of": "Samus"
//     },
//     {
//       "id": 5,
//       "name": "Yoshi",
//       "game_origin": "Super Mario World",
//       "series": "Super Mario",
//       "weight": 104,
//       "weight_class": "Heavyweight",
//       "tier": "S-",
//       "moveset": {
//         "neutral_special": "Egg Lay",
//         "side_special": "Egg Roll",
//         "up_special": "Egg Throw",
//         "down_special": "Yoshi Bomb",
//         "final_smash": "Stampede"
//       },
//       "example_combo": "Up Tilt → Up Air → Up Air"
//     },
//     {
//       "id": 6,
//       "name": "Kirby",
//       "game_origin": "Kirby's Dream Land",
//       "series": "Kirby",
//       "weight": 79,
//       "weight_class": "Featherweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Inhale",
//         "side_special": "Hammer Flip",
//         "up_special": "Final Cutter",
//         "down_special": "Stone",
//         "final_smash": "Ultra Sword"
//       },
//       "example_combo": "Down Throw → Forward Air"
//     },
//     {
//       "id": 7,
//       "name": "Fox",
//       "game_origin": "Star Fox",
//       "series": "Star Fox",
//       "weight": 77,
//       "weight_class": "Featherweight",
//       "tier": "S-",
//       "moveset": {
//         "neutral_special": "Blaster",
//         "side_special": "Fox Illusion",
//         "up_special": "Fire Fox",
//         "down_special": "Reflector",
//         "final_smash": "Team Star Fox"
//       },
//       "example_combo": "Up Throw → Up Air → Back Air"
//     },
//     {
//       "id": 8,
//       "name": "Pikachu",
//       "game_origin": "Pokémon Red/Blue",
//       "series": "Pokemon",
//       "weight": 79,
//       "weight_class": "Featherweight",
//       "tier": "S-",
//       "moveset": {
//         "neutral_special": "Thunder Jolt",
//         "side_special": "Skull Bash",
//         "up_special": "Quick Attack",
//         "down_special": "Thunder",
//         "final_smash": "Volt Tackle"
//       },
//       "example_combo": "Drag-down Neutral Air → Up Tilt loops"
//     },
//     {
//       "id": 9,
//       "name": "Luigi",
//       "game_origin": "Mario Bros.",
//       "series": "Super Mario",
//       "weight": 97,
//       "weight_class": "Middleweight",
//       "tier": "A+",
//       "moveset": {
//         "neutral_special": "Fireball",
//         "side_special": "Green Missile",
//         "up_special": "Super Jump Punch",
//         "down_special": "Luigi Cyclone",
//         "final_smash": "Poltergust G-00"
//       },
//       "example_combo": "Down Throw → Back Air"
//     },
//     {
//       "id": 10,
//       "name": "Ness",
//       "game_origin": "EarthBound",
//       "series": "EarthBound",
//       "weight": 94,
//       "weight_class": "Middleweight",
//       "tier": "B-",
//       "moveset": {
//         "neutral_special": "PK Flash",
//         "side_special": "PK Fire",
//         "up_special": "PK Thunder",
//         "down_special": "PSI Magnet",
//         "final_smash": "PK Starstorm"
//       },
//       "example_combo": "Down Throw → Forward Air → Forward Air"
//     },
//     {
//       "id": 11,
//       "name": "Captain Falcon",
//       "game_origin": "F-Zero",
//       "series": "F-Zero",
//       "weight": 104,
//       "weight_class": "Heavyweight",
//       "tier": "B+",
//       "moveset": {
//         "neutral_special": "Falcon Punch",
//         "side_special": "Raptor Boost",
//         "up_special": "Falcon Dive",
//         "down_special": "Falcon Kick",
//         "final_smash": "Blue Falcon"
//       },
//       "example_combo": "Down Throw → Knee of Justice"
//     },
//     {
//       "id": 12,
//       "name": "Jigglypuff",
//       "game_origin": "Pokémon Red/Blue",
//       "series": "Pokemon",
//       "weight": 68,
//       "weight_class": "Balloonweight",
//       "tier": "C",
//       "moveset": {
//         "neutral_special": "Rollout",
//         "side_special": "Pound",
//         "up_special": "Sing",
//         "down_special": "Rest",
//         "final_smash": "Puff Up"
//       },
//       "example_combo": "Up Throw → Rest"
//     },
//     {
//       "id": 13,
//       "name": "Peach",
//       "game_origin": "Super Mario Bros.",
//       "series": "Super Mario",
//       "weight": 89,
//       "weight_class": "Lightweight",
//       "tier": "S-",
//       "moveset": {
//         "neutral_special": "Toad",
//         "side_special": "Peach Bomber",
//         "up_special": "Peach Parasol",
//         "down_special": "Vegetable",
//         "final_smash": "Peach Blossom"
//       },
//       "example_combo": "Down Throw → Forward Air → Forward Air",
//       "echo": "Daisy"
//     },
//     {
//       "id": 13.5,
//       "name": "Daisy",
//       "game_origin": "Super Mario Land",
//       "series": "Super Mario",
//       "weight": 89,
//       "weight_class": "Lightweight",
//       "tier": "S-",
//       "moveset": {
//         "neutral_special": "Toad",
//         "side_special": "Daisy Bomber",
//         "up_special": "Daisy Parasol",
//         "down_special": "Vegetable",
//         "final_smash": "Daisy Blossom"
//       },
//       "example_combo": "Down Throw → Forward Air → Forward Air",
//       "echo_of": "Peach" // Daisy is an "echo" or clone of Peach
//     },
//     {
//       "id": 14,
//       "name": "Bowser",
//       "game_origin": "Super Mario Bros.",
//       "series": "Super Mario",
//       "weight": 135,
//       "weight_class": "Super Heavyweight",
//       "tier": "C",
//       "moveset": {
//         "neutral_special": "Fire Breath",
//         "side_special": "Flying Slam",
//         "up_special": "Whirling Fortress",
//         "down_special": "Bowser Bomb",
//         "final_smash": "Giga Bowser Punch"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 15,
//       "name": "Ice Climbers",
//       "game_origin": "Ice Climber",
//       "series": "Ice Climber",
//       "weight": 92,
//       "weight_class": "Middleweight",
//       "tier": "B-",
//       "moveset": {
//         "neutral_special": "Ice Shot",
//         "side_special": "Squall Hammer",
//         "up_special": "Belay",
//         "down_special": "Blizzard",
//         "final_smash": "Iceberg"
//       },
//       "example_combo": "Down Throw → Forward Air (desync combos)"
//     },
//     {
//       "id": 16,
//       "name": "Sheik",
//       "game_origin": "The Legend of Zelda: Ocarina of Time",
//       "series": "The Legend of Zelda",
//       "weight": 78,
//       "weight_class": "Featherweight",
//       "tier": "B-",
//       "moveset": {
//         "neutral_special": "Needle Storm",
//         "side_special": "Burst Grenade",
//         "up_special": "Vanish",
//         "down_special": "Bouncing Fish",
//         "final_smash": "Sheikah Dance"
//       },
//       "example_combo": "Down Throw → Forward Air → Forward Air"
//     },
//     {
//       "id": 17,
//       "name": "Zelda",
//       "game_origin": "The Legend of Zelda",
//       "series": "The Legend of Zelda",
//       "weight": 85,
//       "weight_class": "Lightweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Nayru's Love",
//         "side_special": "Din's Fire",
//         "up_special": "Farore's Wind",
//         "down_special": "Phantom Slash",
//         "final_smash": "Triforce of Wisdom"
//       },
//       "example_combo": "Down Throw → Back Air"
//     },
//     {
//       "id": 18,
//       "name": "Dr. Mario",
//       "game_origin": "Dr. Mario",
//       "series": "Super Mario",
//       "weight": 98,
//       "weight_class": "Middleweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Megavitamin",
//         "side_special": "Super Sheet",
//         "up_special": "Super Jump Punch",
//         "down_special": "Dr. Tornado",
//         "final_smash": "Doctor Finale"
//       },
//       "example_combo": "Down Throw → Back Air"
//     },
//     {
//       "id": 19,
//       "name": "Pichu",
//       "game_origin": "Pokémon Gold/Silver",
//       "series": "Pokemon",
//       "weight": 62,
//       "weight_class": "Balloonweight",
//       "tier": "B-",
//       "moveset": {
//         "neutral_special": "Thunder Jolt",
//         "side_special": "Skull Bash",
//         "up_special": "Agility",
//         "down_special": "Thunder",
//         "final_smash": "Volt Tackle"
//       },
//       "example_combo": "Down Tilt → Down Tilt → Forward Smash"
//     },
//     {
//       "id": 20,
//       "name": "Falco",
//       "game_origin": "Star Fox",
//       "series": "Star Fox",
//       "weight": 82,
//       "weight_class": "Featherweight",
//       "tier": "B",
//       "moveset": {
//         "neutral_special": "Blaster",
//         "side_special": "Falco Phantasm",
//         "up_special": "Fire Bird",
//         "down_special": "Reflector",
//         "final_smash": "Team Star Fox"
//       },
//       "example_combo": "Down Throw → Forward Air → Back Air"
//     },
//     {
//       "id": 21,
//       "name": "Marth",
//       "game_origin": "Fire Emblem: Shadow Dragon and the Blade of Light",
//       "series": "Fire Emblem",
//       "weight": 90,
//       "weight_class": "Lightweight",
//       "tier": "C",
//       "moveset": {
//         "neutral_special": "Shield Breaker",
//         "side_special": "Dancing Blade",
//         "up_special": "Dolphin Slash",
//         "down_special": "Counter",
//         "final_smash": "Critical Hit"
//       },
//       "example_combo": "Up Throw → Up Air (Tipper)",
//       "echo": "Lucina"
//     },
//     {
//       "id": 21.5,
//       "name": "Lucina",
//       "game_origin": "Fire Emblem Awakening",
//       "series": "Fire Emblem",
//       "weight": 90,
//       "weight_class": "Lightweight",
//       "tier": "A-",
//       "moveset": {
//         "neutral_special": "Shield Breaker",
//         "side_special": "Dancing Blade",
//         "up_special": "Dolphin Slash",
//         "down_special": "Counter",
//         "final_smash": "Critical Hit"
//       },
//       "example_combo": "Up Throw → Up Air",
//       "echo_of": "Marth"
//     },
//     {
//       "id": 22,
//       "name": "Young Link",
//       "game_origin": "The Legend of Zelda: Ocarina of Time",
//       "series": "The Legend of Zelda",
//       "weight": 88,
//       "weight_class": "Lightweight",
//       "tier": "B+",
//       "moveset": {
//         "neutral_special": "Fire Bow",
//         "side_special": "Boomerang",
//         "up_special": "Spin Attack",
//         "down_special": "Bomb",
//         "final_smash": "Triforce Slash"
//       },
//       "example_combo": "Down Throw → Forward Air"
//     },
//     {
//       "id": 23,
//       "name": "Ganondorf",
//       "game_origin": "The Legend of Zelda: Ocarina of Time",
//       "series": "The Legend of Zelda",
//       "weight": 118,
//       "weight_class": "Super Heavyweight",
//       "tier": "E",
//       "moveset": {
//         "neutral_special": "Warlock Punch",
//         "side_special": "Flame Choke",
//         "up_special": "Dark Dive",
//         "down_special": "Wizard's Foot",
//         "final_smash": "Ganon, The Demon King"
//       },
//       "example_combo": "Down Throw → Down Air"
//     },
//     {
//       "id": 24,
//       "name": "Mewtwo",
//       "game_origin": "Pokémon Red/Blue",
//       "series": "Pokemon",
//       "weight": 79,
//       "weight_class": "Featherweight",
//       "tier": "B",
//       "moveset": {
//         "neutral_special": "Shadow Ball",
//         "side_special": "Confusion",
//         "up_special": "Teleport",
//         "down_special": "Disable",
//         "final_smash": "Psystrike"
//       },
//       "example_combo": "Down Throw → Forward Air"
//     },
//     {
//       "id": 25,
//       "name": "Roy",
//       "game_origin": "Fire Emblem: The Binding Blade",
//       "series": "Fire Emblem",
//       "weight": 95,
//       "weight_class": "Middleweight",
//       "tier": "A+",
//       "moveset": {
//         "neutral_special": "Flare Blade",
//         "side_special": "Double-Edge Dance",
//         "up_special": "Blazer",
//         "down_special": "Counter",
//         "final_smash": "Critical Hit"
//       },
//       "example_combo": "Neutral Air → Jab → Forward Tilt",
//       "echo": "Chrom"
//     },
//     {
//       "id": 25.5,
//       "name": "Chrom",
//       "game_origin": "Fire Emblem Awakening",
//       "series": "Fire Emblem",
//       "weight": 95,
//       "weight_class": "Middleweight",
//       "tier": "B+",
//       "moveset": {
//         "neutral_special": "Flare Blade",
//         "side_special": "Double-Edge Dance",
//         "up_special": "Soaring Slash",
//         "down_special": "Counter",
//         "final_smash": "Awakening Aether"
//       },
//       "example_combo": "Neutral Air → Jab → Forward Tilt",
//       "echo_of": "Roy"
//     },
//     {
//       "id": 26,
//       "name": "Mr. Game & Watch",
//       "game_origin": "Game & Watch",
//       "series": "Game & Watch",
//       "weight": 75,
//       "weight_class": "Featherweight",
//       "tier": "S",
//       "moveset": {
//         "neutral_special": "Chef",
//         "side_special": "Judge",
//         "up_special": "Fire",
//         "down_special": "Oil Spill",
//         "final_smash": "Octopus"
//       },
//       "example_combo": "Down Throw → Up Air → Up Air"
//     },
//     {
//       "id": 27,
//       "name": "Meta Knight",
//       "game_origin": "Kirby's Adventure",
//       "series": "Kirby",
//       "weight": 80,
//       "weight_class": "Featherweight",
//       "tier": "B-",
//       "moveset": {
//         "neutral_special": "Mach Tornado",
//         "side_special": "Drill Rush",
//         "up_special": "Shuttle Loop",
//         "down_special": "Dimensional Cape",
//         "final_smash": "Darkness Illusion"
//       },
//       "example_combo": "Down Throw → Up Air ladder"
//     },
//     {
//       "id": 28,
//       "name": "Pit",
//       "game_origin": "Kid Icarus",
//       "series": "Kid Icarus",
//       "weight": 96,
//       "weight_class": "Middleweight",
//       "tier": "B+",
//       "moveset": {
//         "neutral_special": "Palutena Bow",
//         "side_special": "Upperdash Arm",
//         "up_special": "Power of Flight",
//         "down_special": "Guardian Orbitars",
//         "final_smash": "Lightning Chariot"
//       },
//       "example_combo": "Down Throw → Forward Air",
//       "echo": "Pit"
//     },
//     {
//       "id": 28.5,
//       "name": "Dark Pit",
//       "game_origin": "Kid Icarus: Uprising",
//       "series": "Kid Icarus",
//       "weight": 96,
//       "weight_class": "Middleweight",
//       "tier": "B+",
//       "moveset": {
//         "neutral_special": "Silver Bow",
//         "side_special": "Electroshock Arm",
//         "up_special": "Power of Flight",
//         "down_special": "Guardian Orbitars",
//         "final_smash": "Dark Pit Staff"
//       },
//       "example_combo": "Down Throw → Forward Air",
//       "echo_of": "Pit"
//     },
//     {
//       "id": 29,
//       "name": "Zero Suit Samus",
//       "game_origin": "Metroid: Zero Mission",
//       "series": "Metroid",
//       "weight": 80,
//       "weight_class": "Featherweight",
//       "tier": "A-",
//       "moveset": {
//         "neutral_special": "Paralyzer",
//         "side_special": "Plasma Whip",
//         "up_special": "Boost Kick",
//         "down_special": "Flip Jump",
//         "final_smash": "Zero Laser"
//       },
//       "example_combo": "Down Smash → Boost Kick"
//     },
//     {
//       "id": 30,
//       "name": "Wario",
//       "game_origin": "Super Mario Land 2: 6 Golden Coins",
//       "series": "Super Mario",
//       "weight": 107,
//       "weight_class": "Heavyweight",
//       "tier": "B",
//       "moveset": {
//         "neutral_special": "Chomp",
//         "side_special": "Wario Bike",
//         "up_special": "Corkscrew",
//         "down_special": "Waft",
//         "final_smash": "Wario-Man"
//       },
//       "example_combo": "Up Tilt → Up Air"
//     },
//     {
//       "id": 31,
//       "name": "Snake",
//       "game_origin": "Metal Gear",
//       "series": "Metal Gear",
//       "weight": 106,
//       "weight_class": "Heavyweight",
//       "tier": "S+",
//       "moveset": {
//         "neutral_special": "Hand Grenade",
//         "side_special": "Remote Missile",
//         "up_special": "Cypher",
//         "down_special": "C4",
//         "final_smash": "Covering Fire"
//       },
//       "example_combo": "Down Throw → Up Tilt"
//     },
//     {
//       "id": 32,
//       "name": "Ike",
//       "game_origin": "Fire Emblem: Path of Radiance",
//       "series": "Fire Emblem",
//       "weight": 107,
//       "weight_class": "Heavyweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Eruption",
//         "side_special": "Quick Draw",
//         "up_special": "Aether",
//         "down_special": "Counter",
//         "final_smash": "Great Aether"
//       },
//       "example_combo": "Neutral Air → Jab"
//     },
//     {
//       "id": 33,
//       "name": "Pokémon Trainer",
//       "game_origin": "Pokémon Red/Blue",
//       "series": "Pokemon",
//       "weight": "Variable",
//       "weight_class": "Variable",
//       "tier": "A-",
//       "moveset": {
//         "squirtle": "Water Gun, Withdraw, Waterfall, Shell Smash",
//         "ivysaur": "Bullet Seed, Razor Leaf, Vine Whip, Sleep Powder",
//         "charizard": "Flamethrower, Flare Blitz, Fly, Rock Smash"
//       },
//       "example_combo": "Squirtle: Up Throw → Up Air"
//     },
//     {
//       "id": 34,
//       "name": "Diddy Kong",
//       "game_origin": "Donkey Kong Country",
//       "series": "Donkey Kong",
//       "weight": 90,
//       "weight_class": "Lightweight",
//       "tier": "S-",
//       "moveset": {
//         "neutral_special": "Peanut Popgun",
//         "side_special": "Monkey Flip",
//         "up_special": "Rocketbarrel Boost",
//         "down_special": "Banana Peel",
//         "final_smash": "Hyper Rocketbarrel"
//       },
//       "example_combo": "Down Throw → Up Air → Up Air"
//     },
//     {
//       "id": 35,
//       "name": "Lucas",
//       "game_origin": "Mother 3",
//       "series": "EarthBound",
//       "weight": 94,
//       "weight_class": "Middleweight",
//       "tier": "B",
//       "moveset": {
//         "neutral_special": "PK Freeze",
//         "side_special": "PK Fire",
//         "up_special": "PK Thunder",
//         "down_special": "PSI Magnet",
//         "final_smash": "PK Starstorm"
//       },
//       "example_combo": "Down Throw → Down Air"
//     },
//     {
//       "id": 36,
//       "name": "Sonic",
//       "game_origin": "Sonic the Hedgehog",
//       "series": "Sonic",
//       "weight": 86,
//       "weight_class": "Lightweight",
//       "tier": "S+",
//       "moveset": {
//         "neutral_special": "Homing Attack",
//         "side_special": "Spin Dash",
//         "up_special": "Spring Jump",
//         "down_special": "Spin Charge",
//         "final_smash": "Super Sonic"
//       },
//       "example_combo": "Down Throw → Forward Air"
//     },
//     {
//       "id": 37,
//       "name": "King Dedede",
//       "game_origin": "Kirby's Dream Land",
//       "series": "Kirby",
//       "weight": 127,
//       "weight_class": "Super Heavyweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Inhale",
//         "side_special": "Gordo Throw",
//         "up_special": "Super Dedede Jump",
//         "down_special": "Jet Hammer",
//         "final_smash": "Dede-Rush"
//       },
//       "example_combo": "Down Throw → Back Air"
//     },
//     {
//       "id": 38,
//       "name": "Olimar",
//       "game_origin": "Pikmin",
//       "series": "Pikmin",
//       "weight": 79,
//       "weight_class": "Featherweight",
//       "tier": "A+",
//       "moveset": {
//         "neutral_special": "Pikmin Pluck",
//         "side_special": "Pikmin Throw",
//         "up_special": "Winged Pikmin",
//         "down_special": "Pikmin Order",
//         "final_smash": "End of Day"
//       },
//       "example_combo": "Up Throw → Up Air (with Blue Pikmin)"
//     },
//     {
//       "id": 39,
//       "name": "Lucario",
//       "game_origin": "Pokémon Diamond/Pearl",
//       "series": "Pokemon",
//       "weight": 92,
//       "weight_class": "Middleweight",
//       "tier": "C",
//       "moveset": {
//         "neutral_special": "Aura Sphere",
//         "side_special": "Force Palm",
//         "up_special": "ExtremeSpeed",
//         "down_special": "Double Team",
//         "final_smash": "Aura Storm"
//       },
//       "example_combo": "Down Tilt → Forward Air"
//     },
//     {
//       "id": 40,
//       "name": "R.O.B.",
//       "game_origin": "Stack-Up/Gyromite",
//       "series": "R.O.B.",
//       "weight": 106,
//       "weight_class": "Heavyweight",
//       "tier": "S",
//       "moveset": {
//         "neutral_special": "Robo Beam",
//         "side_special": "Arm Rotor",
//         "up_special": "Robo Burner",
//         "down_special": "Gyro",
//         "final_smash": "Guided Robo Beam"
//       },
//       "example_combo": "Down Throw → Up Air → Up Air"
//     },
//     {
//       "id": 41,
//       "name": "Toon Link",
//       "game_origin": "The Legend of Zelda: The Wind Waker",
//       "series": "The Legend of Zelda",
//       "weight": 91,
//       "weight_class": "Lightweight",
//       "tier": "A-",
//       "moveset": {
//         "neutral_special": "Hero's Bow",
//         "side_special": "Boomerang",
//         "up_special": "Spin Attack",
//         "down_special": "Bomb",
//         "final_smash": "Triforce Slash"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 42,
//       "name": "Wolf",
//       "game_origin": "Star Fox 64",
//       "series": "Star Fox",
//       "weight": 92,
//       "weight_class": "Middleweight",
//       "tier": "A",
//       "moveset": {
//         "neutral_special": "Blaster",
//         "side_special": "Wolf Flash",
//         "up_special": "Fire Wolf",
//         "down_special": "Reflector",
//         "final_smash": "Team Star Wolf"
//       },
//       "example_combo": "Down Throw → Back Air"
//     },
//     {
//       "id": 43,
//       "name": "Villager",
//       "game_origin": "Animal Crossing",
//       "series": "Animal Crossing",
//       "weight": 92,
//       "weight_class": "Middleweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Pocket",
//         "side_special": "Lloid Rocket",
//         "up_special": "Balloon Trip",
//         "down_special": "Timber",
//         "final_smash": "Dream Town"
//       },
//       "example_combo": "Down Air → Up Smash"
//     },
//     {
//       "id": 44,
//       "name": "Mega Man",
//       "game_origin": "Mega Man",
//       "series": "Mega Man",
//       "weight": 102,
//       "weight_class": "Middleweight",
//       "tier": "B-",
//       "moveset": {
//         "neutral_special": "Metal Blade",
//         "side_special": "Crash Bomber",
//         "up_special": "Rush Coil",
//         "down_special": "Leaf Shield",
//         "final_smash": "Mega Legends"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 45,
//       "name": "Wii Fit Trainer",
//       "game_origin": "Wii Fit",
//       "series": "Wii Fit",
//       "weight": 96,
//       "weight_class": "Middleweight",
//       "tier": "C+",
//       "moveset": {
//         "neutral_special": "Sun Salutation",
//         "side_special": "Header",
//         "up_special": "Super Hoop",
//         "down_special": "Deep Breathing",
//         "final_smash": "Wii Fit"
//       },
//       "example_combo": "Down Throw → Neutral Air"
//     },
//     {
//       "id": 46,
//       "name": "Rosalina & Luma",
//       "game_origin": "Super Mario Galaxy",
//       "series": "Super Mario",
//       "weight": 82,
//       "weight_class": "Featherweight",
//       "tier": "B+",
//       "moveset": {
//         "neutral_special": "Luma Shot",
//         "side_special": "Star Bits",
//         "up_special": "Launch Star",
//         "down_special": "Gravitational Pull",
//         "final_smash": "Grand Star"
//       },
//       "example_combo": "Down Throw → Up Air (with Luma)"
//     },
//     {
//       "id": 47,
//       "name": "Little Mac",
//       "game_origin": "Punch-Out!!",
//       "series": "Punch-Out",
//       "weight": 87,
//       "weight_class": "Lightweight",
//       "tier": "E+",
//       "moveset": {
//         "neutral_special": "Straight Lunge/KO Punch",
//         "side_special": "Jolt Haymaker",
//         "up_special": "Rising Uppercut",
//         "down_special": "Slip Counter",
//         "final_smash": "Giga Mac Rush"
//       },
//       "example_combo": "Down Tilt → KO Punch"
//     },
//     {
//       "id": 48,
//       "name": "Greninja",
//       "game_origin": "Pokémon X/Y",
//       "series": "Pokemon",
//       "weight": 88,
//       "weight_class": "Lightweight",
//       "tier": "A-",
//       "moveset": {
//         "neutral_special": "Water Shuriken",
//         "side_special": "Shadow Sneak",
//         "up_special": "Hydro Pump",
//         "down_special": "Substitute",
//         "final_smash": "Secret Ninja Attack"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 49,
//       "name": "Mii Brawler",
//       "game_origin": "Nintendo 3DS/Wii U System",
//       "series": "Mii",
//       "weight": 94,
//       "weight_class": "Middleweight",
//       "tier": "A-",
//       "moveset": {
//         "neutral_special": "Shot Put/Flashing Mach Punch/Exploding Side Kick",
//         "side_special": "Onslaught/Burning Dropkick/Suplex",
//         "up_special": "Soaring Axe Kick/Helicopter Kick/Thrust Uppercut",
//         "down_special": "Head-On Assault/Feint Jump/Counter Throw",
//         "final_smash": "Omega Blitz"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 50,
//       "name": "Mii Swordfighter",
//       "game_origin": "Nintendo 3DS/Wii U System",
//       "series": "Mii",
//       "weight": 100,
//       "weight_class": "Middleweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Gale Strike/Shuriken of Light/Blurring Blade",
//         "side_special": "Airborne Assault/Gale Stab/Chakram",
//         "up_special": "Stone Scabbard/Skyward Slash Dash/Hero's Spin",
//         "down_special": "Blade Counter/Reversal Slash/Power Thrust",
//         "final_smash": "Final Edge"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 51,
//       "name": "Mii Gunner",
//       "game_origin": "Nintendo 3DS/Wii U System",
//       "series": "Mii",
//       "weight": 104,
//       "weight_class": "Heavyweight",
//       "tier": "B",
//       "moveset": {
//         "neutral_special": "Charge Blast/Laser Blaze/Grenade Launch",
//         "side_special": "Flame Pillar/Stealth Burst/Gunner Missile",
//         "up_special": "Lunar Launch/Cannon Jump Kick/Arm Rocket",
//         "down_special": "Echo Reflector/Bomb Drop/Absorbing Vortex",
//         "final_smash": "Full Blast"
//       },
//       "example_combo": "Down Throw → Forward Air"
//     },
//     {
//       "id": 52,
//       "name": "Palutena",
//       "game_origin": "Kid Icarus: Uprising",
//       "series": "Kid Icarus",
//       "weight": 91,
//       "weight_class": "Lightweight",
//       "tier": "A+",
//       "moveset": {
//         "neutral_special": "Autoreticle",
//         "side_special": "Explosive Flame",
//         "up_special": "Warp",
//         "down_special": "Counter",
//         "final_smash": "Black Hole Laser"
//       },
//       "example_combo": "Down Throw → Neutral Air → Back Air"
//     },
//     {
//       "id": 53,
//       "name": "Pac-Man",
//       "game_origin": "Pac-Man",
//       "series": "Pac-Man",
//       "weight": 95,
//       "weight_class": "Middleweight",
//       "tier": "A-",
//       "moveset": {
//         "neutral_special": "Bonus Fruit",
//         "side_special": "Power Pellet",
//         "up_special": "Pac-Jump",
//         "down_special": "Fire Hydrant",
//         "final_smash": "Super Pac-Man"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 54,
//       "name": "Robin",
//       "game_origin": "Fire Emblem Awakening",
//       "series": "Fire Emblem",
//       "weight": 95,
//       "weight_class": "Middleweight",
//       "tier": "C",
//       "moveset": {
//         "neutral_special": "Thunder",
//         "side_special": "Arcfire",
//         "up_special": "Elwind",
//         "down_special": "Nosferatu",
//         "final_smash": "Pair Up"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 55,
//       "name": "Shulk",
//       "game_origin": "Xenoblade Chronicles",
//       "series": "Xenoblade Chronicles",
//       "weight": 97,
//       "weight_class": "Middleweight",
//       "tier": "A-",
//       "moveset": {
//         "neutral_special": "Monado Arts",
//         "side_special": "Back Slash",
//         "up_special": "Air Slash",
//         "down_special": "Vision",
//         "final_smash": "Chain Attack"
//       },
//       "example_combo": "Down Throw → Forward Air (in Jump/Speed Art)"
//     },
//     {
//       "id": 56,
//       "name": "Bowser Jr.",
//       "game_origin": "Super Mario Sunshine",
//       "series": "Super Mario",
//       "weight": 108,
//       "weight_class": "Heavyweight",
//       "tier": "C-",
//       "moveset": {
//         "neutral_special": "Clown Cannon",
//         "side_special": "Clown Kart Dash",
//         "up_special": "Abandon Ship!",
//         "down_special": "Mechakoopa",
//         "final_smash": "Shadow Mario Paint"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 57,
//       "name": "Duck Hunt",
//       "game_origin": "Duck Hunt",
//       "series": "Duck Hunt",
//       "weight": 86,
//       "weight_class": "Lightweight",
//       "tier": "C+",
//       "moveset": {
//         "neutral_special": "Trick Shot",
//         "side_special": "Clay Shooting",
//         "up_special": "Duck Jump",
//         "down_special": "Wild Gunman",
//         "final_smash": "NES Zapper Posse"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 58,
//       "name": "Ryu",
//       "game_origin": "Street Fighter",
//       "series": "Street Fighter",
//       "weight": 103,
//       "weight_class": "Heavyweight",
//       "tier": "A-",
//       "moveset": {
//         "neutral_special": "Hadoken",
//         "side_special": "Tatsumaki Senpukyaku",
//         "up_special": "Shoryuken",
//         "down_special": "Focus Attack",
//         "final_smash": "Shinku Hadoken"
//       },
//       "example_combo": "Light Down Tilt → Light Down Tilt → Shoryuken",
//       "echo": "Ken"
//     },
//     {
//       "id": 59,
//       "name": "Cloud",
//       "game_origin": "Final Fantasy VII",
//       "series": "Final Fantasy",
//       "weight": 100,
//       "weight_class": "Middleweight",
//       "tier": "A+",
//       "moveset": {
//         "neutral_special": "Blade Beam",
//         "side_special": "Cross Slash",
//         "up_special": "Climhazzard",
//         "down_special": "Limit Charge",
//         "final_smash": "Omnislash"
//       },
//       "example_combo": "Up Throw → Up Air → Up Air"
//     },
//     {
//       "id": 60,
//       "name": "Ken",
//       "game_origin": "Street Fighter",
//       "series": "Street Fighter",
//       "weight": 103,
//       "weight_class": "Heavyweight",
//       "tier": "B+",
//       "moveset": {
//         "neutral_special": "Hadoken",
//         "side_special": "Tatsumaki Senpukyaku",
//         "up_special": "Shoryuken",
//         "down_special": "Focus Attack",
//         "final_smash": "Shinryuken/Shippu Jinraikyaku"
//       },
//       "example_combo": "Light Jab → Light Down Tilt → Shoryuken",
//       "echo_of": "Ryu"
//     },
//     {
//       "id": 61,
//       "name": "Corrin",
//       "game_origin": "Fire Emblem Fates",
//       "series": "Fire Emblem",
//       "weight": 98,
//       "weight_class": "Middleweight",
//       "tier": "B",
//       "moveset": {
//         "neutral_special": "Dragon Fang Shot",
//         "side_special": "Dragon Lunge",
//         "up_special": "Draconic Ascent",
//         "down_special": "Counter Surge",
//         "final_smash": "Torrential Roar"
//       },
//       "example_combo": "Down Throw → Forward Air"
//     },
//     {
//       "id": 62,
//       "name": "Bayonetta",
//       "game_origin": "Bayonetta",
//       "series": "Bayonetta",
//       "weight": 81,
//       "weight_class": "Featherweight",
//       "tier": "A+",
//       "moveset": {
//         "neutral_special": "Bullet Climax",
//         "side_special": "Heel Slide/After Burner Kick",
//         "up_special": "Witch Twist",
//         "down_special": "Witch Time",
//         "final_smash": "Infernal Climax"
//       },
//       "example_combo": "Heel Slide → Witch Twist → After Burner Kick"
//     },
//     {
//       "id": 63,
//       "name": "Inkling",
//       "game_origin": "Splatoon",
//       "series": "Splatoon",
//       "weight": 94,
//       "weight_class": "Middleweight",
//       "tier": "B-",
//       "moveset": {
//         "neutral_special": "Splattershot",
//         "side_special": "Splat Roller",
//         "up_special": "Super Jump",
//         "down_special": "Splat Bomb",
//         "final_smash": "Killer Wail"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 64,
//       "name": "Ridley",
//       "game_origin": "Metroid",
//       "series": "Metroid",
//       "weight": 107,
//       "weight_class": "Heavyweight",
//       "tier": "C-",
//       "moveset": {
//         "neutral_special": "Plasma Breath",
//         "side_special": "Space Pirate Rush",
//         "up_special": "Wing Blitz",
//         "down_special": "Skewer",
//         "final_smash": "Plasma Scream"
//       },
//       "example_combo": "Down Throw → Forward Air"
//     },
//     {
//       "id": 65,
//       "name": "Simon",
//       "game_origin": "Castlevania",
//       "series": "Castlevania",
//       "weight": 107,
//       "weight_class": "Heavyweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Axe",
//         "side_special": "Cross",
//         "up_special": "Uppercut",
//         "down_special": "Holy Water",
//         "final_smash": "Grand Cross"
//       },
//       "example_combo": "Down Throw → Forward Air",
//       "echo": "Richter"
//     },
//     {
//       "id": 66,
//       "name": "Richter",
//       "game_origin": "Castlevania: Rondo of Blood",
//       "series": "Castlevania",
//       "weight": 107,
//       "weight_class": "Heavyweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Axe",
//         "side_special": "Cross",
//         "up_special": "Uppercut",
//         "down_special": "Holy Water",
//         "final_smash": "Grand Cross"
//       },
//       "example_combo": "Down Throw → Forward Air",
//       "echo_of": "Simon"
//     },
//     {
//       "id": 67,
//       "name": "King K. Rool",
//       "game_origin": "Donkey Kong Country",
//       "series": "Donkey Kong",
//       "weight": 133,
//       "weight_class": "Super Heavyweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Blunderbuss",
//         "side_special": "Crownerang",
//         "up_special": "Propellerpack",
//         "down_special": "Gut Check",
//         "final_smash": "Blast-O-Matic"
//       },
//       "example_combo": "Down Throw → Up Air"
//     },
//     {
//       "id": 68,
//       "name": "Isabelle",
//       "game_origin": "Animal Crossing: New Leaf",
//       "series": "Animal Crossing",
//       "weight": 88,
//       "weight_class": "Lightweight",
//       "tier": "C",
//       "moveset": {
//         "neutral_special": "Pocket",
//         "side_special": "Fishing Rod",
//         "up_special": "Balloon Trip",
//         "down_special": "Lloid Trap",
//         "final_smash": "Dream Town Hall"
//       },
//       "example_combo": "Down Throw → Forward Air"
//     },
//     {
//       "id": 69,
//       "name": "Incineroar",
//       "game_origin": "Pokémon Sun/Moon",
//       "series": "Pokemon",
//       "weight": 116,
//       "weight_class": "Super Heavyweight",
//       "tier": "C",
//       "moveset": {
//         "neutral_special": "Darkest Lariat",
//         "side_special": "Alolan Whip",
//         "up_special": "Cross Chop",
//         "down_special": "Revenge",
//         "final_smash": "Max Malicious Moonsault"
//       },
//       "example_combo": "Down Throw → Neutral Air"
//     },
//     {
//       "id": 70,
//       "name": "Piranha Plant",
//       "game_origin": "Super Mario Bros.",
//       "series": "Super Mario",
//       "weight": 112,
//       "weight_class": "Heavyweight",
//       "tier": "D",
//       "moveset": {
//         "neutral_special": "Ptooie",
//         "side_special": "Poison Breath",
//         "up_special": "Piranhacopter",
//         "down_special": "Long-Stem Strike",
//         "final_smash": "Petey Piranha"
//       },
//       "example_combo": "Down Throw → Up Air"
//     }
//   ],
//   "tier_breakdown": {
//     "S+": ["Snake", "Sonic"],
//     "S": ["Mr. Game & Watch", "R.O.B."],
//     "S-": ["Diddy Kong", "Fox", "Peach/Daisy", "Yoshi", "Pikachu"],
//     "A+": ["Roy", "Olimar", "Cloud", "Luigi", "Bayonetta", "Samus/Dark Samus", "Palutena", "Mario"],
//     "A": ["Wolf"],
//     "A-": ["Ryu", "Shulk", "Mii Brawler", "Zero Suit Samus", "Greninja", "Pac-Man", "Pokemon Trainer", "Toon Link", "Lucina"],
//     "B+": ["Young Link", "Pit/Dark Pit", "Captain Falcon", "Ken", "Rosalina & Luma", "Chrom"],
//     "B": ["Falco", "Mewtwo", "Lucas", "Wario", "Mii Gunner", "Corrin"],
//     "B-": ["Ness", "Sheik", "Meta Knight", "Mega Man", "Inkling", "Ice Climbers", "Pichu", "Donkey Kong"],
//     "C+": ["Wii Fit Trainer", "Duck Hunt"],
//     "C": ["Jigglypuff", "Bowser", "Lucario", "Robin", "Isabelle", "Incineroar", "Marth"],
//     "C-": ["Bowser Jr.", "Ridley"],
//     "D": ["Mii Swordfighter", "Zelda", "Ike", "Piranha Plant", "Villager", "King Dedede", "King K. Rool", "Simon/Richter", "Dr. Mario", "Kirby"],
//     "E+": ["Little Mac"],
//     "E": ["Ganondorf"]
//   },
//   "weight_classes": {
//     "Balloonweight": ["Pichu", "Jigglypuff"],
//     "Featherweight": ["Mr. Game & Watch", "Fox", "Sheik", "Pikachu", "Kirby", "Meta Knight", "Zero Suit Samus", "Bayonetta", "Rosalina & Luma", "Falco", "Mewtwo", "Olimar"],
//     "Lightweight": ["Little Mac", "Sonic", "Duck Hunt", "Zelda", "Young Link", "Isabelle", "Greninja", "Peach", "Daisy", "Diddy Kong", "Lucina", "Marth", "Toon Link", "Palutena"],
//     "Middleweight": ["Villager", "Lucario", "Ice Climbers", "Wolf", "Ness", "Lucas", "Inkling", "Mii Brawler", "Robin", "Pac-Man", "Roy", "Chrom", "Wii Fit Trainer", "Pit", "Dark Pit", "Shulk", "Luigi", "Mario", "Dr. Mario", "Corrin", "Cloud", "Mii Swordfighter"],
//     "Heavyweight": ["Mega Man", "Ken", "Ryu", "Link", "Yoshi", "Captain Falcon", "Mii Gunner", "Snake", "R.O.B.", "Wario", "Ike", "Richter", "Simon", "Ridley", "Samus", "Dark Samus", "Bowser Jr.", "Piranha Plant"],
//     "Super Heavyweight": ["Incineroar", "Ganondorf", "Donkey Kong", "King Dedede", "King K. Rool", "Bowser"]
//   }
// }