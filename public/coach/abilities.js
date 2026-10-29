window.ABILITIES={
  "schema": 2,
  "method": "explicit-semantic-ledger-v2",
  "sourceDate": "2026-10-23",
  "reviewedOn": "2026-10-29",
  "balanceVersion": null,
  "totals": {
    "base": 109,
    "equipment": 436
  },
  "profiles": {
    "16000000": {
      "signature": "[[[23000255,\"Shelly dashes to an aimed direction or forwards, fully reloading her ammo!\"],[23000288,\"Shelly focuses her fire to a smaller area with an increased range. Can be used x times per activation.\"]],[[23000076,\"Shelly's Super shells slow down enemies for 2 sec!\"],[23000135,\"When Shelly falls below x% health, she instantly heals for x health. Band-Aid recharges in x sec.\"]]]",
      "base": {
        "modelId": "base:16000000",
        "model": [
          {
            "type": "damage",
            "operation": "antiTank",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "antiAssassin",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "burst",
            "condition": "always"
          }
        ],
        "effects": [
          "antiTank"
        ],
        "text": "Counter tanks and assassins with burst damage.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "d61c52fd9280096f84ae9daacbbdc70406b171ab34fe8e46b0521d683af0affe",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000076": {
          "modelId": "gear:23000076",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "superHit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Shelly's Super shells slow down enemies for 2 sec!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000000",
          "sourceHash": "f9d1d56094a874d7fe983a5ea14e5365b29dba992481c2dc9652c574ecfecffb",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000000"
          ]
        },
        "23000135": {
          "modelId": "gear:23000135",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "lowHealth"
            }
          ],
          "effects": [],
          "text": "When Shelly falls below x% health, she instantly heals for x health. Band-Aid recharges in x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000000",
          "sourceHash": "061a8672a7c0aef4412f7c2c7cfd1052e169a29a64a806a3fdee3d34f61ef9ce",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000000"
          ]
        },
        "23000255": {
          "modelId": "gear:23000255",
          "model": [
            {
              "type": "mobility",
              "operation": "dash",
              "condition": "always"
            },
            {
              "type": "ammo",
              "operation": "refill",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Shelly dashes to an aimed direction or forwards, fully reloading her ammo!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000000",
          "sourceHash": "daf7f591ddd3f92a3a0d57aebc32c9921b4eeaeb9a22c4b84e773f36b0777be0",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000000"
          ]
        },
        "23000288": {
          "modelId": "gear:23000288",
          "model": [
            {
              "type": "projectile",
              "operation": "focus",
              "condition": "always"
            },
            {
              "type": "projectile",
              "operation": "range",
              "condition": "nextAttack"
            }
          ],
          "effects": [
            "rangeBoost"
          ],
          "text": "Shelly focuses her fire to a smaller area with an increased range. Can be used x times per activation.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000000",
          "sourceHash": "516f358d83f13e04bcdf62bb9edcad4993934582e22f849f37544387b6248562",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000000"
          ]
        }
      },
      "modeSlots": false
    },
    "16000001": {
      "signature": "[[[23000273,\"Colt fires two quick shots that slow targets. Deals x damage.\"],[23000319,\"Colt fires a bullet that destroys the environment and pierces Brawlers. Deals x damage. Consumes ammo.\"]],[[23000077,\"Colt's movement speed is increased by x%.\"],[23000138,\"Colt's attack range and bullet speed are increased by x%.\"]]]",
      "base": {
        "modelId": "base:16000001",
        "model": [
          {
            "type": "projectile",
            "operation": "range",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "consistent",
            "condition": "always"
          }
        ],
        "effects": [
          "rangeBoost"
        ],
        "text": "Long range, consistent damage.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "50c9300c9ad592f45743cce43c269e9b13fb1d21f7eafe94a368ad9cf320df45",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000077": {
          "modelId": "gear:23000077",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Colt's movement speed is increased by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000001",
          "sourceHash": "1b8863f8733bbaefc564c7c62d49f93ca2d37a9fa44eafe9099cdafb1424ffbe",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000001"
          ]
        },
        "23000138": {
          "modelId": "gear:23000138",
          "model": [
            {
              "type": "projectile",
              "operation": "range",
              "condition": "always"
            },
            {
              "type": "projectile",
              "operation": "speed",
              "condition": "always"
            }
          ],
          "effects": [
            "rangeBoost"
          ],
          "text": "Colt's attack range and bullet speed are increased by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000001",
          "sourceHash": "fa1a7b49d3c2290c434d0c2ca810ec4e362bca3476346ad7f246fb5826184485",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000001"
          ]
        },
        "23000273": {
          "modelId": "gear:23000273",
          "model": [
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "slow",
              "condition": "hit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Colt fires two quick shots that slow targets. Deals x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000001",
          "sourceHash": "e14762e14d468d26c59434cd6ea2c26bb4ca8e29aead0b73229ca4d41eab07d7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000001"
          ]
        },
        "23000319": {
          "modelId": "gear:23000319",
          "model": [
            {
              "type": "terrain",
              "operation": "destroy",
              "condition": "always"
            },
            {
              "type": "projectile",
              "operation": "pierce",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "ammo",
              "condition": "always"
            }
          ],
          "effects": [
            "wallBreak"
          ],
          "text": "Colt fires a bullet that destroys the environment and pierces Brawlers. Deals x damage. Consumes ammo.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000001",
          "sourceHash": "09439908c1dc1a4605882439791c7762a3be1db984afbeb9bd8d28166604d7e1",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000001"
          ]
        }
      },
      "modeSlots": false
    },
    "16000002": {
      "signature": "[[[23000272,\"Bull throws a projectile at the target Brawler, dealing x damage and healing for x if he hits.\"],[23000310,\"Bull stomps the ground, slowing nearby enemies. If a target is already slowed, they are stunned!\"]],[[23000078,\"When Bull falls below x% health, his reload speed doubles!\"],[23000137,\"When Bull falls below x% health, he gains a shield that reduces all damage he takes by x%.\"]]]",
      "base": {
        "modelId": "base:16000002",
        "model": [
          {
            "type": "terrain",
            "operation": "destroy",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "approach",
            "condition": "always"
          }
        ],
        "effects": [
          "wallBreak"
        ],
        "text": "Super to break walls and close the distance!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "f12a6c0febd9d917a80f47dd1d377e8ccf3c62a188b963cde13855f41562841d",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000078": {
          "modelId": "gear:23000078",
          "model": [
            {
              "type": "ammo",
              "operation": "reload",
              "condition": "lowHealth"
            }
          ],
          "effects": [],
          "text": "When Bull falls below x% health, his reload speed doubles!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000002",
          "sourceHash": "12018eb23cfdad662f3a2851818f8963bbed0c4a075e52cc93302e85f4e1c72b",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000002"
          ]
        },
        "23000137": {
          "modelId": "gear:23000137",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "lowHealth"
            }
          ],
          "effects": [],
          "text": "When Bull falls below x% health, he gains a shield that reduces all damage he takes by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000002",
          "sourceHash": "514832e38282d4eeb4b18e5a5b46100f6d7db69c37b00f3981b911d40a752d64",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000002"
          ]
        },
        "23000272": {
          "modelId": "gear:23000272",
          "model": [
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "self",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "Bull throws a projectile at the target Brawler, dealing x damage and healing for x if he hits.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000002",
          "sourceHash": "a7e1c9d6be5a4399f64fb0987562fcc74f8f9d3ce88792d1515eaa8553264208",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000002"
          ]
        },
        "23000310": {
          "modelId": "gear:23000310",
          "model": [
            {
              "type": "control",
              "operation": "slowArea",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "stun",
              "condition": "slowed"
            }
          ],
          "effects": [
            "slow",
            "stun"
          ],
          "text": "Bull stomps the ground, slowing nearby enemies. If a target is already slowed, they are stunned!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000002",
          "sourceHash": "d323f9630be938ed214a6953f3b899b83d255ab8db32a93ab05b6a3d673dbf24",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000002"
          ]
        }
      },
      "modeSlots": false
    },
    "16000003": {
      "signature": "[[[23000245,\"Brock jumps to targeted area, knocking back nearby enemies on takeoff and landing and dealing minor damage.\"],[23000316,\"Brock fires a large rocket that destroys terrain and deals damage\"]],[[23000079,\"Rocket Rain now rains down x% more rockets.\"],[23000150,\"Brock loads a fourth rocket into his launcher, increasing his ammo capacity (and discarding the thermos bottle he's been keeping in his launcher's fourth tube).\"]]]",
      "base": {
        "modelId": "base:16000003",
        "model": [
          {
            "type": "terrain",
            "operation": "destroy",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "explosion",
            "condition": "always"
          }
        ],
        "effects": [
          "wallBreak"
        ],
        "text": "Explode Brawlers and walls!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "fe8f18eb85358cb018b3a1e91a9f6e97baed126fe0b96accda3bd5139b496d01",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000079": {
          "modelId": "gear:23000079",
          "model": [
            {
              "type": "projectile",
              "operation": "superCount",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Rocket Rain now rains down x% more rockets.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000003",
          "sourceHash": "c7f08573711f8e68bc216604595b1941764f12796246178cabba65ecb3a95420",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000003"
          ]
        },
        "23000150": {
          "modelId": "gear:23000150",
          "model": [
            {
              "type": "ammo",
              "operation": "capacity",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Brock loads a fourth rocket into his launcher, increasing his ammo capacity (and discarding the thermos bottle he's been keeping in his launcher's fourth tube).",
          "source": "https://api.brawlapi.com/v1/brawlers/16000003",
          "sourceHash": "dbbb27a91ee2eed61431e7beb8601e61521118bfbb0f59051d42b4311eeee6fc",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000003"
          ]
        },
        "23000245": {
          "modelId": "gear:23000245",
          "model": [
            {
              "type": "mobility",
              "operation": "jump",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "knockback",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "landing",
              "condition": "always"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "Brock jumps to targeted area, knocking back nearby enemies on takeoff and landing and dealing minor damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000003",
          "sourceHash": "03282f779b653b503884bddcb22a2db162036f4d80c59749abe9d047b62490e8",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000003"
          ]
        },
        "23000316": {
          "modelId": "gear:23000316",
          "model": [
            {
              "type": "terrain",
              "operation": "destroy",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            }
          ],
          "effects": [
            "wallBreak"
          ],
          "text": "Brock fires a large rocket that destroys terrain and deals damage",
          "source": "https://api.brawlapi.com/v1/brawlers/16000003",
          "sourceHash": "3f32eb162f148862b7c1a8a8c27aa482dc5eff1285c8296c81504f9dae4a6607",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000003"
          ]
        }
      },
      "modeSlots": false
    },
    "16000004": {
      "signature": "[[[23000246,\"Rico Deploys a vending machine that has x health - when destroyed fires bouncing projectiles in all directions.\"],[23000409,\"Rico fires a big bullet that, on hitting a wall or Brawler, splits into x smaller bullets.\"]],[[23000080,\"Rico's bullets, from attack and Super alike, get Supercharged by their first bounce and deal +x damage!\"],[23000156,\"Rico runs x% faster when his health falls below x%.\"]]]",
      "base": {
        "modelId": "base:16000004",
        "model": [
          {
            "type": "projectile",
            "operation": "bounce",
            "condition": "always"
          },
          {
            "type": "projectile",
            "operation": "range",
            "condition": "always"
          }
        ],
        "effects": [
          "wallDependent",
          "rangeBoost"
        ],
        "text": "Bounce shots for extra range!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "cd167abccb9d3c88c21ae30bed94bed0134e55628c7701dc46b113cf3b0fb4f4",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000080": {
          "modelId": "gear:23000080",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "bounce"
            }
          ],
          "effects": [],
          "text": "Rico's bullets, from attack and Super alike, get Supercharged by their first bounce and deal +x damage!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000004",
          "sourceHash": "273d9c61f925f5ab7aa4ba46d23d4e90d0a4376da3edd52780b120d30e5bbfce",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000004"
          ]
        },
        "23000156": {
          "modelId": "gear:23000156",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "lowHealth"
            }
          ],
          "effects": [],
          "text": "Rico runs x% faster when his health falls below x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000004",
          "sourceHash": "75a81a813d39e1f1428059a7ef061e498a7304beb68d39f79bb31c2b50bfc6a3",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000004"
          ]
        },
        "23000246": {
          "modelId": "gear:23000246",
          "model": [
            {
              "type": "summon",
              "operation": "machine",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "radial",
              "condition": "destroyed"
            },
            {
              "type": "projectile",
              "operation": "bounce",
              "condition": "always"
            }
          ],
          "effects": [
            "wallDependent"
          ],
          "text": "Rico Deploys a vending machine that has x health - when destroyed fires bouncing projectiles in all directions.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000004",
          "sourceHash": "01000103d850ffc48c5acf130ea23d4484a67fb8e4ad691de0cf9f61627b6e7f",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000004"
          ]
        },
        "23000409": {
          "modelId": "gear:23000409",
          "model": [
            {
              "type": "projectile",
              "operation": "split",
              "condition": "impact"
            }
          ],
          "effects": [],
          "text": "Rico fires a big bullet that, on hitting a wall or Brawler, splits into x smaller bullets.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000004",
          "sourceHash": "08543719ba1829c794e2e9014a5f1a309febf400da8eda37cee56108abba7237",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000004"
          ]
        }
      },
      "modeSlots": false
    },
    "16000005": {
      "signature": "[[[23000247,\"Spike aims and fires a wave of needles that deal x damage.\"],[23000406,\"Spike throws a large cactus with x health to give cover to teammates. If destroyed, the cactus bursts, and all nearby teammates recover x health.\"]],[[23000081,\"Super heals for x% of damage dealt.\"],[23000151,\"Spikes from the cactus grenade fly in a curving motion, making it easier to hit targets.\"]]]",
      "base": {
        "modelId": "base:16000005",
        "model": [
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "spikes",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Zone enemies with a Super and spikes.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "d1b9dce9e749fa31b2d4b51be31657b8de5cd21da02e1eb295cb43d2f3b4cdba",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000081": {
          "modelId": "gear:23000081",
          "model": [
            {
              "type": "heal",
              "operation": "lifesteal",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Super heals for x% of damage dealt.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000005",
          "sourceHash": "3fa989ca84b5b5f3eb566fb899fcdf76516fde9e5ceef0b9403dc4539eef7cf9",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000005"
          ]
        },
        "23000151": {
          "modelId": "gear:23000151",
          "model": [
            {
              "type": "projectile",
              "operation": "curve",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Spikes from the cactus grenade fly in a curving motion, making it easier to hit targets.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000005",
          "sourceHash": "1c77a4e6a8317c4c9dc3ed9affc1b2556e198b0d067eefecc05f19079f45f763",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000005"
          ]
        },
        "23000247": {
          "modelId": "gear:23000247",
          "model": [
            {
              "type": "damage",
              "operation": "wave",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Spike aims and fires a wave of needles that deal x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000005",
          "sourceHash": "86a8edf340b5de3bafba9a95812cfa4c7f06c8c5c5cebbe68356d637d7ca63e9",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000005"
          ]
        },
        "23000406": {
          "modelId": "gear:23000406",
          "model": [
            {
              "type": "defense",
              "operation": "allyCover",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "ally",
              "condition": "destroyed"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Spike throws a large cactus with x health to give cover to teammates. If destroyed, the cactus bursts, and all nearby teammates recover x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000005",
          "sourceHash": "3e50478bbe1cb9fdee00cb164f81a9c3fc57699a874959619ee938b8988dd618",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000005"
          ]
        }
      },
      "modeSlots": false
    },
    "16000006": {
      "signature": "[[[23000250,\"Barley drops a sticky concoction that leaves a puddle, slowing down all enemies that make contact with it.\"],[23000293,\"Barley throws a healing potion at nearby allies that creates an area that heals for x health per second.\"]],[[23000082,\"Barley regains x health from each attack.\"],[23000158,\"Adds +x damage per second to Barley's attack.\"]]]",
      "base": {
        "modelId": "base:16000006",
        "model": [
          {
            "type": "terrain",
            "operation": "overWalls",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "burnArea",
            "condition": "always"
          }
        ],
        "effects": [
          "overWalls"
        ],
        "text": "Deny space by throwing fiery bottles.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "0e63ad015c34ed885e318c8006c2ca42cdbd8342159a2b8bad180bedc1ef2588",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000082": {
          "modelId": "gear:23000082",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "attack"
            }
          ],
          "effects": [],
          "text": "Barley regains x health from each attack.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000006",
          "sourceHash": "7875337fe84057259418971f3b6caaf2c6b181012da3b14b09df3f12fdf09074",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000006"
          ]
        },
        "23000158": {
          "modelId": "gear:23000158",
          "model": [
            {
              "type": "damage",
              "operation": "periodicBoost",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Adds +x damage per second to Barley's attack.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000006",
          "sourceHash": "b7e5fe643b6887819e404a65218ee9dd06dcb836bcde0ca54452dd25ab52f427",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000006"
          ]
        },
        "23000250": {
          "modelId": "gear:23000250",
          "model": [
            {
              "type": "control",
              "operation": "slowArea",
              "condition": "always"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Barley drops a sticky concoction that leaves a puddle, slowing down all enemies that make contact with it.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000006",
          "sourceHash": "d73a3ab0aa319ab2167ac2fadc8b689156e442c48791866220396c6f71fc4392",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000006"
          ]
        },
        "23000293": {
          "modelId": "gear:23000293",
          "model": [
            {
              "type": "heal",
              "operation": "ally",
              "condition": "area"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Barley throws a healing potion at nearby allies that creates an area that heals for x health per second.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000006",
          "sourceHash": "02d37050a47076b5cb2a528f5936680c382906d227053e19fd75d5199b8137bd",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000006"
          ]
        }
      },
      "modeSlots": false
    },
    "16000007": {
      "signature": "[[[23000251,\"Jessie triggers a shockwave from her turret, slowing down all enemies within its area of effect.\"],[23000295,\"Scrappy's attack speed is doubled for x seconds.\"]],[[23000083,\"Jessie can repair her gun turret for x of its missing health by zapping it with her attack.\"],[23000149,\"Scrappy the Turret now shoots energy orbs that bounce between enemies. The orbs' range after a bounce is x% of normal range.\"]]]",
      "base": {
        "modelId": "base:16000007",
        "model": [
          {
            "type": "summon",
            "operation": "turret",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Place your turret to dominate the map!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "e73b27c00e4b5662c6b6b580b498428931aa56bf750694100679f6b73c19fb62",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000083": {
          "modelId": "gear:23000083",
          "model": [
            {
              "type": "heal",
              "operation": "summon",
              "condition": "attackHit"
            }
          ],
          "effects": [],
          "text": "Jessie can repair her gun turret for x of its missing health by zapping it with her attack.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000007",
          "sourceHash": "4fe87f107f7275ca5b6fb7c9702ae67b8e753484a9c1a836679e4a676af839db",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000007"
          ]
        },
        "23000149": {
          "modelId": "gear:23000149",
          "model": [
            {
              "type": "projectile",
              "operation": "chain",
              "condition": "summon"
            }
          ],
          "effects": [],
          "text": "Scrappy the Turret now shoots energy orbs that bounce between enemies. The orbs' range after a bounce is x% of normal range.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000007",
          "sourceHash": "f6e70881c6d447169fdb281316fcdafc92e33ed1f9f3a83043017238a4fec8eb",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000007"
          ]
        },
        "23000251": {
          "modelId": "gear:23000251",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "summonArea"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Jessie triggers a shockwave from her turret, slowing down all enemies within its area of effect.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000007",
          "sourceHash": "ac5f2ae62f6e1aed2e79be1cbb6a1ebec98d2f8f6d0c721ffb44bb36a2cd90dc",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000007"
          ]
        },
        "23000295": {
          "modelId": "gear:23000295",
          "model": [
            {
              "type": "summon",
              "operation": "attackRate",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Scrappy's attack speed is doubled for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000007",
          "sourceHash": "7b5b1e4abd00b6c1153752b1d501b1249ddca2b9556f439f083e8a3b132d0c78",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000007"
          ]
        }
      },
      "modeSlots": false
    },
    "16000008": {
      "signature": "[[[23000249,\"Nita commands her bear to slam the ground, stunning all enemies within its reach.\"],[23000314,\"For the next x seconds, Nita's bear gets a x% shield against damage.\"]],[[23000084,\"Nita recovers x health whenever her bear hits an enemy Brawler. When Nita deals damage to an enemy Brawler, her bear regains x health.\"],[23000136,\"Nita's bear attacks faster. Time between swipes is reduced by x%.\"]]]",
      "base": {
        "modelId": "base:16000008",
        "model": [
          {
            "type": "summon",
            "operation": "bear",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "pressure",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Pressure with Bruce the bear!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "eaba0fdfdf8689363303c215b94603605f97d9d197dc4cb9631237dc742c1d89",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000084": {
          "modelId": "gear:23000084",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "summonHit"
            },
            {
              "type": "heal",
              "operation": "summon",
              "condition": "attackHit"
            }
          ],
          "effects": [],
          "text": "Nita recovers x health whenever her bear hits an enemy Brawler. When Nita deals damage to an enemy Brawler, her bear regains x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000008",
          "sourceHash": "a4502e4ee63bf6849bb8453637bc80a9c29d973210ceeb744c74fc2f4c23549b",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000008"
          ]
        },
        "23000136": {
          "modelId": "gear:23000136",
          "model": [
            {
              "type": "summon",
              "operation": "attackRate",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Nita's bear attacks faster. Time between swipes is reduced by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000008",
          "sourceHash": "62f80ded16ec10f8a9140edaa8ed9e0496ed40accf4de861867bdd5c973697c8",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000008"
          ]
        },
        "23000249": {
          "modelId": "gear:23000249",
          "model": [
            {
              "type": "control",
              "operation": "stun",
              "condition": "summonNear"
            }
          ],
          "effects": [
            "stun"
          ],
          "text": "Nita commands her bear to slam the ground, stunning all enemies within its reach.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000008",
          "sourceHash": "d0cee7a6401b4b5b444eed1f145cb43ba5fbf2809c67a523835e082c8a4cbc7b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000008"
          ]
        },
        "23000314": {
          "modelId": "gear:23000314",
          "model": [
            {
              "type": "summon",
              "operation": "shield",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "For the next x seconds, Nita's bear gets a x% shield against damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000008",
          "sourceHash": "d83fb8667a6aa88741fcdbd3d96cb7edce77b3b95fd2d1d49c0fe56286e19ee6",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000008"
          ]
        }
      },
      "modeSlots": false
    },
    "16000009": {
      "signature": "[[[23000258,\"Dynamike spins furiously with 20% increased movement speed and throws multiple sticks of dynamite around himself. Each dynamite deals x damage to enemies.\"],[23000294,\"Once activated, the next main attack also stuns enemies for x seconds.\"]],[[23000085,\"Dynamike can ride the blast wave of his explosives to jump over obstacles!\"],[23000155,\"Adds +x damage to Mike's Super.\"]]]",
      "base": {
        "modelId": "base:16000009",
        "model": [
          {
            "type": "terrain",
            "operation": "overWalls",
            "condition": "always"
          },
          {
            "type": "terrain",
            "operation": "coverUse",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "bombard",
            "condition": "always"
          }
        ],
        "effects": [
          "overWalls",
          "wallDependent"
        ],
        "text": "Bombard safely from behind walls.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "e7b7b037eb139a8ed61a27db0856d2439de97236904339e7af7450ae4c7835ec",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000085": {
          "modelId": "gear:23000085",
          "model": [
            {
              "type": "mobility",
              "operation": "blastJump",
              "condition": "always"
            },
            {
              "type": "terrain",
              "operation": "overWalls",
              "condition": "always"
            }
          ],
          "effects": [
            "overWalls"
          ],
          "text": "Dynamike can ride the blast wave of his explosives to jump over obstacles!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000009",
          "sourceHash": "ad25af5ed4bc8f2d5443761567b42e9cecd2a9a4e401217442a1957ae10ec308",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000009"
          ]
        },
        "23000155": {
          "modelId": "gear:23000155",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Adds +x damage to Mike's Super.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000009",
          "sourceHash": "1216d5524a28930459ef1bc69d415450167d7551af8b071ef709f96c968f2e9e",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000009"
          ]
        },
        "23000258": {
          "modelId": "gear:23000258",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "radial",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Dynamike spins furiously with 20% increased movement speed and throws multiple sticks of dynamite around himself. Each dynamite deals x damage to enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000009",
          "sourceHash": "29b7f35c3494c988e1310d559aec9bd2a8b30cfa10c02338581c8755504e9a08",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000009"
          ]
        },
        "23000294": {
          "modelId": "gear:23000294",
          "model": [
            {
              "type": "control",
              "operation": "stun",
              "condition": "nextAttackHit"
            }
          ],
          "effects": [
            "stun"
          ],
          "text": "Once activated, the next main attack also stuns enemies for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000009",
          "sourceHash": "18db2d05fd2a5178ad5edba9944f19adfb03e773f1da07f55d4ba6f238a61abf",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000009"
          ]
        }
      },
      "modeSlots": false
    },
    "16000010": {
      "signature": "[[[23000264,\"El Primo Dashes, grabbing any hit enemies and suplexing them behind him.\"],[23000292,\"El primo flexes his pecs and destroys any incoming projectiles for x sec.\"]],[[23000086,\"Enemies caught in El Primo's Super will burn for x damage over 4 seconds.\"],[23000140,\"El Primo gains a 25% speed boost for 3 seconds after using his Super.\"]]]",
      "base": {
        "modelId": "base:16000010",
        "model": [
          {
            "type": "mobility",
            "operation": "jump",
            "condition": "always"
          },
          {
            "type": "cost",
            "operation": "groupedEnemy",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Jump in, but stay away from crowds.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "b7f1de5f05f2b874575da4fe3c216151941922ec6a41314e47b506e7f402c837",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000086": {
          "modelId": "gear:23000086",
          "model": [
            {
              "type": "damage",
              "operation": "burn",
              "condition": "superHit"
            }
          ],
          "effects": [],
          "text": "Enemies caught in El Primo's Super will burn for x damage over 4 seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000010",
          "sourceHash": "dedfb3f1474901d7edb38b8b6682b1efd6575ccee7a87eb4d175c0b9dbdb50ac",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000010"
          ]
        },
        "23000140": {
          "modelId": "gear:23000140",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "El Primo gains a 25% speed boost for 3 seconds after using his Super.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000010",
          "sourceHash": "42b98e4ba5de5ab8f2aa7a9768b9de6ce5648eb213cb12c4f2f241906cb431fc",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000010"
          ]
        },
        "23000264": {
          "modelId": "gear:23000264",
          "model": [
            {
              "type": "mobility",
              "operation": "dash",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "suplex",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "El Primo Dashes, grabbing any hit enemies and suplexing them behind him.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000010",
          "sourceHash": "7ba80abede6f28f4f499438a665533b48a18b0a62084f6d029b86d1346a56d0c",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000010"
          ]
        },
        "23000292": {
          "modelId": "gear:23000292",
          "model": [
            {
              "type": "defense",
              "operation": "blockProjectiles",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "El primo flexes his pecs and destroys any incoming projectiles for x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000010",
          "sourceHash": "25ddd6f9649717eb62a73bc23291f6bc14bedf9310c24048c4ee69dd9e3c21cc",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000010"
          ]
        }
      },
      "modeSlots": false
    },
    "16000011": {
      "signature": "[[[23000265,\"Mortis spins his shovel dealing x damage. Can also be aimed for a short-distance bat attack.\"],[23000290,\"Mortis turns into a flock of bats and travels to a target location.\"]],[[23000087,\"Mortis reaps the life essence of Brawlers he defeats, restoring x% of his max health.\"],[23000154,\"Mortis gains his longer dash x seconds faster.\"]]]",
      "base": {
        "modelId": "base:16000011",
        "model": [
          {
            "type": "mobility",
            "operation": "dive",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "isolate",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Jump in on weak or isolated enemies.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "88784e6e8e98efbe9d2ea8c2f44f707592351dbb1b80faf6689d7e3d974ba144",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000087": {
          "modelId": "gear:23000087",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "kill"
            }
          ],
          "effects": [],
          "text": "Mortis reaps the life essence of Brawlers he defeats, restoring x% of his max health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000011",
          "sourceHash": "987b88c5d499f4e7ffcd5bb4c8e491afc5765e4b52d396a1cf7434b7176b81f6",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000011"
          ]
        },
        "23000154": {
          "modelId": "gear:23000154",
          "model": [
            {
              "type": "mobility",
              "operation": "dashCooldown",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Mortis gains his longer dash x seconds faster.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000011",
          "sourceHash": "7966e9b654cbf6abdc5626caeae3a58eae50613c6cb4153f892920200d921845",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000011"
          ]
        },
        "23000265": {
          "modelId": "gear:23000265",
          "model": [
            {
              "type": "damage",
              "operation": "area",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "shortBat",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Mortis spins his shovel dealing x damage. Can also be aimed for a short-distance bat attack.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000011",
          "sourceHash": "a5ae79268d001be29a283a959eb4eafa10c6e9a0bcbbb2cdc66e093ad3f85ad5",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000011"
          ]
        },
        "23000290": {
          "modelId": "gear:23000290",
          "model": [
            {
              "type": "mobility",
              "operation": "targetTravel",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Mortis turns into a flock of bats and travels to a target location.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000011",
          "sourceHash": "4109886dc88d7d288dca82fa42f43da87bb21f9d9e86a9a5e907f93b804a46be",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000011"
          ]
        }
      },
      "modeSlots": false
    },
    "16000012": {
      "signature": "[[[23000243,\"Crow instantly deals remaining poison damage to all Crow-poisoned enemies and gains a shield for 150% of the value.\"],[23000286,\"Throw a kunai that damages, slows and poisons the first enemy hit for x sec.\"]],[[23000088,\"Crow's poison saps the strength of enemies, who deal x% less damage while poisoned.\"],[23000143,\"Crow deals +x% damage with his attack and Super to targets with x% or less health.\"]]]",
      "base": {
        "modelId": "base:16000012",
        "model": [
          {
            "type": "damage",
            "operation": "poison",
            "condition": "always"
          },
          {
            "type": "projectile",
            "operation": "range",
            "condition": "always"
          }
        ],
        "effects": [
          "poison",
          "rangeBoost"
        ],
        "text": "Poison enemies from a distance.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "edbee478a64edd1a0b890dba4e34920f531fe995698ddf847706f8fc2eecbb33",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000088": {
          "modelId": "gear:23000088",
          "model": [
            {
              "type": "control",
              "operation": "damageReduction",
              "condition": "poisoned"
            }
          ],
          "effects": [],
          "text": "Crow's poison saps the strength of enemies, who deal x% less damage while poisoned.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000012",
          "sourceHash": "a4b7bb97a172285f7c5865b3f98d87b60885b6520789d2b465564b5a2e0e186e",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000012"
          ]
        },
        "23000143": {
          "modelId": "gear:23000143",
          "model": [
            {
              "type": "damage",
              "operation": "execute",
              "condition": "lowTargetHealth"
            }
          ],
          "effects": [],
          "text": "Crow deals +x% damage with his attack and Super to targets with x% or less health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000012",
          "sourceHash": "9e34e69a7ff39a3296dfe8262cd55675c38ecbd4e1461f4aa45def8ded7f0051",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000012"
          ]
        },
        "23000243": {
          "modelId": "gear:23000243",
          "model": [
            {
              "type": "damage",
              "operation": "triggerPoison",
              "condition": "always"
            },
            {
              "type": "shield",
              "operation": "self",
              "condition": "poisoned"
            }
          ],
          "effects": [],
          "text": "Crow instantly deals remaining poison damage to all Crow-poisoned enemies and gains a shield for 150% of the value.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000012",
          "sourceHash": "232242482255cd3d99099e1678599e76fdac66f3a04127c2a88478df40ee9296",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000012"
          ]
        },
        "23000286": {
          "modelId": "gear:23000286",
          "model": [
            {
              "type": "damage",
              "operation": "poison",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "slow",
              "condition": "hit"
            }
          ],
          "effects": [
            "poison",
            "slow"
          ],
          "text": "Throw a kunai that damages, slows and poisons the first enemy hit for x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000012",
          "sourceHash": "23ab3e7b3366c61f9ce7b4e0ff4c34721171f56853a8f7fef97ed9a0665fb18b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000012"
          ]
        }
      },
      "modeSlots": false
    },
    "16000013": {
      "signature": "[[[23000267,\"Poco and all nearby allies heal for x health x times.\"],[23000350,\"Poco creates a large AoE lasting x seconds that removes all adverse effects and grants them immunity while inside.\"]],[[23000089,\"When Poco's attack hits friendly Brawlers they heal for additional x health.\"],[23000144,\"Poco's Super now also hits enemies, dealing x damage.\"]]]",
      "base": {
        "modelId": "base:16000013",
        "model": [
          {
            "type": "heal",
            "operation": "ally",
            "condition": "always"
          }
        ],
        "effects": [
          "healAlly"
        ],
        "text": "Instant heals keep your team fighting!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "67b866c59d23047b5bbc81874f896b8308851bdfad0321f3d1577c8f88e72cfa",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000089": {
          "modelId": "gear:23000089",
          "model": [
            {
              "type": "heal",
              "operation": "allyBoost",
              "condition": "attackHit"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "When Poco's attack hits friendly Brawlers they heal for additional x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000013",
          "sourceHash": "c089451098f0c78e52a6293e097583d0621e995186a94795c46f55b4f8f48fc5",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000013"
          ]
        },
        "23000144": {
          "modelId": "gear:23000144",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Poco's Super now also hits enemies, dealing x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000013",
          "sourceHash": "c2accba0ba2b32cc8603e481a30561c2fafacd6e2076a5f5b152e487b3ad4c12",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000013"
          ]
        },
        "23000267": {
          "modelId": "gear:23000267",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "ally",
              "condition": "always"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Poco and all nearby allies heal for x health x times.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000013",
          "sourceHash": "1486340681f941efad3a04bc6578f94f5664d0706611163080398ad6fc7e28f0",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000013"
          ]
        },
        "23000350": {
          "modelId": "gear:23000350",
          "model": [
            {
              "type": "defense",
              "operation": "allyControlImmune",
              "condition": "always"
            },
            {
              "type": "defense",
              "operation": "cleanse",
              "condition": "always"
            }
          ],
          "effects": [
            "immunity"
          ],
          "text": "Poco creates a large AoE lasting x seconds that removes all adverse effects and grants them immunity while inside.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000013",
          "sourceHash": "2ed36b799009350208bde9fd4a36294812f20bc5bb6f760fd383e1d150f3657a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000013"
          ]
        }
      },
      "modeSlots": false
    },
    "16000014": {
      "signature": "[[[23000263,\"Bo places a totem that increases allies' Super charging rate by x%. The totem slowly loses its health over time.\"],[23000289,\"Bo triggers all of his mines after x seconds. During the delay the mines are completely undetectable to opponents.\"]],[[23000090,\"Bo spots enemies hidden in bushes from x% longer distance than normally.\"],[23000148,\"Instead of a knockback, Bo's traps now stun the enemy for x seconds!\"]]]",
      "base": {
        "modelId": "base:16000014",
        "model": [
          {
            "type": "control",
            "operation": "traps",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Control space with hidden traps.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "9fdeed088569fb2bc6b193c96325898d6a8e182318165925f20b1f0e86e06f3c",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000090": {
          "modelId": "gear:23000090",
          "model": [
            {
              "type": "vision",
              "operation": "reveal",
              "condition": "bush"
            }
          ],
          "effects": [],
          "text": "Bo spots enemies hidden in bushes from x% longer distance than normally.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000014",
          "sourceHash": "4226dc1c67ce3d6b9de1756d25ccf83e2fff65252adc5461f08fa98e009b18c3",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000014"
          ]
        },
        "23000148": {
          "modelId": "gear:23000148",
          "model": [
            {
              "type": "control",
              "operation": "stun",
              "condition": "trap"
            },
            {
              "type": "cost",
              "operation": "trapKnockback",
              "condition": "always"
            }
          ],
          "effects": [
            "stun"
          ],
          "text": "Instead of a knockback, Bo's traps now stun the enemy for x seconds!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000014",
          "sourceHash": "9b689008065cdb8ad7c50e6d1154f0acbf4f60c0cecbad42b7f466079f3ab855",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000014"
          ]
        },
        "23000263": {
          "modelId": "gear:23000263",
          "model": [
            {
              "type": "support",
              "operation": "superRate",
              "condition": "always"
            },
            {
              "type": "summon",
              "operation": "totem",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Bo places a totem that increases allies' Super charging rate by x%. The totem slowly loses its health over time.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000014",
          "sourceHash": "2b3bedbb103203d607ca44f04def6aecded42546a8bcac7903b4c9abdb6f48b7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000014"
          ]
        },
        "23000289": {
          "modelId": "gear:23000289",
          "model": [
            {
              "type": "damage",
              "operation": "triggerMines",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Bo triggers all of his mines after x seconds. During the delay the mines are completely undetectable to opponents.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000014",
          "sourceHash": "23872869149929e7387077f4c1d694c0bbc524994206e839a619a4b3f4b522f7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000014"
          ]
        }
      },
      "modeSlots": false
    },
    "16000015": {
      "signature": "[[[23000268,\"Piper pops a defensive shot at the closest enemy, dealing x damage, while also pushing them back.\"],[23000291,\"On activation, Piper's next main attack will home in on enemies.\"]],[[23000091,\"Piper's attack deals +x extra damage (at max range) when she's hidden in a bush.\"],[23000152,\"When Piper hits an opponent with her attack, she reloads x ammo instantly.\"]]]",
      "base": {
        "modelId": "base:16000015",
        "model": [
          {
            "type": "damage",
            "operation": "snipe",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "escape",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Poke from range and escape with a Super!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "9f8a6f94833caf06622a2520a0a7c1b84f03c1d92ddca5747006b1e6b24eb317",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000091": {
          "modelId": "gear:23000091",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "bushMaxRange"
            }
          ],
          "effects": [],
          "text": "Piper's attack deals +x extra damage (at max range) when she's hidden in a bush.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000015",
          "sourceHash": "09e4b48b9085ae7fdf3e45dc0a28c40541fcb83f1739ca805d375660f183fa07",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000015"
          ]
        },
        "23000152": {
          "modelId": "gear:23000152",
          "model": [
            {
              "type": "ammo",
              "operation": "refill",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "When Piper hits an opponent with her attack, she reloads x ammo instantly.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000015",
          "sourceHash": "ba6bb2c469a50f85a9058b914842d78cc67066b8e550e3e9b85211d7b43a13ce",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000015"
          ]
        },
        "23000268": {
          "modelId": "gear:23000268",
          "model": [
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "knockback",
              "condition": "always"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "Piper pops a defensive shot at the closest enemy, dealing x damage, while also pushing them back.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000015",
          "sourceHash": "eb5fac7015a4c1e11238f5a0de6b4c9c0143ab0ca2f36fcac6090c39e78feff3",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000015"
          ]
        },
        "23000291": {
          "modelId": "gear:23000291",
          "model": [
            {
              "type": "projectile",
              "operation": "homing",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "On activation, Piper's next main attack will home in on enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000015",
          "sourceHash": "c93e7378fc52512319530d67edd4ab8b1ebe3de29216c2ed3e78154a3850774d",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000015"
          ]
        }
      },
      "modeSlots": false
    },
    "16000016": {
      "signature": "[[[23000257,\"Pam triggers her turret to emit a pulse that heals allies inside the turret's range, including herself, for x health.\"],[23000404,\"Each hit from Pam's next attack removes x% of opposing Brawlers' maximum ammo. Pam reclaims x% of the ammo for herself.\"]],[[23000092,\"Whenever Pam hits enemy Brawlers with Scrapstorm, she heals herself and nearby friendly Brawlers for x health.\"],[23000139,\"Healing turret now also damages enemies for x damage per second.\"]]]",
      "base": {
        "modelId": "base:16000016",
        "model": [
          {
            "type": "heal",
            "operation": "ally",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "holdGround",
            "condition": "always"
          }
        ],
        "effects": [
          "healAlly"
        ],
        "text": "Hold ground and heal teammates.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "e921e29ebc6bf6734e06dccc37ba1e0ddfde999fbd69ac8a8338d61c10f19578",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000092": {
          "modelId": "gear:23000092",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "attackHit"
            },
            {
              "type": "heal",
              "operation": "ally",
              "condition": "attackHit"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Whenever Pam hits enemy Brawlers with Scrapstorm, she heals herself and nearby friendly Brawlers for x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000016",
          "sourceHash": "1a31a393f4d40eda1bc8d3958e3314fc486d42979b6c591cef38ca4cf5a3a432",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000016"
          ]
        },
        "23000139": {
          "modelId": "gear:23000139",
          "model": [
            {
              "type": "damage",
              "operation": "periodicArea",
              "condition": "summon"
            }
          ],
          "effects": [],
          "text": "Healing turret now also damages enemies for x damage per second.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000016",
          "sourceHash": "07f59b521401d0b2fd692c0a6e37b39baceaa881133664e59a09c8b059709d6a",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000016"
          ]
        },
        "23000257": {
          "modelId": "gear:23000257",
          "model": [
            {
              "type": "heal",
              "operation": "ally",
              "condition": "summonArea"
            },
            {
              "type": "heal",
              "operation": "self",
              "condition": "summonArea"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Pam triggers her turret to emit a pulse that heals allies inside the turret's range, including herself, for x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000016",
          "sourceHash": "773180687ff19517905beebc862edffd1e6b59057f7ba5ebafd0255a7482e4e6",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000016"
          ]
        },
        "23000404": {
          "modelId": "gear:23000404",
          "model": [
            {
              "type": "ammo",
              "operation": "steal",
              "condition": "nextAttackHit"
            }
          ],
          "effects": [],
          "text": "Each hit from Pam's next attack removes x% of opposing Brawlers' maximum ammo. Pam reclaims x% of the ammo for herself.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000016",
          "sourceHash": "7412468a656d91b409d6c23a3b3d7b0bd1b9f3868ddc53e6aa8d267e6a8947e2",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000016"
          ]
        }
      },
      "modeSlots": false
    },
    "16000017": {
      "signature": "[[[23000266,\"Tara and her allies are able to see all enemies, even inside bushes, for x seconds.\"],[23000356,\"Tara surrounds herself with three weak Shadows that attack opponents and disappear after x seconds.\"]],[[23000093,\"Tara's Super cracks open a dimensional portal! A shadowy version of Tara appears and attacks her enemies.\"],[23000160,\"Tara's Super cracks open a dimensional portal! A shadowy version of Tara appears to heal Tara and her teammates.\"]]]",
      "base": {
        "modelId": "base:16000017",
        "model": [
          {
            "type": "damage",
            "operation": "antiGroup",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Punish grouped enemies.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "68243877e92be62d51f93baef65e2f9aebb4daf952fc8941e7f878d6220b62fb",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000093": {
          "modelId": "gear:23000093",
          "model": [
            {
              "type": "summon",
              "operation": "create",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Tara's Super cracks open a dimensional portal! A shadowy version of Tara appears and attacks her enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000017",
          "sourceHash": "16496a553803e5487072172c399a4939aefae94f0a9428d9ce05fe9993b59ea2",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000017"
          ]
        },
        "23000160": {
          "modelId": "gear:23000160",
          "model": [
            {
              "type": "summon",
              "operation": "healer",
              "condition": "super"
            },
            {
              "type": "heal",
              "operation": "ally",
              "condition": "always"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Tara's Super cracks open a dimensional portal! A shadowy version of Tara appears to heal Tara and her teammates.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000017",
          "sourceHash": "1ee41bbf6e5530a3987ebb4de953487caff97b16c7269f644fb584b09ec3cf72",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000017"
          ]
        },
        "23000266": {
          "modelId": "gear:23000266",
          "model": [
            {
              "type": "vision",
              "operation": "allyReveal",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Tara and her allies are able to see all enemies, even inside bushes, for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000017",
          "sourceHash": "c418bee3bc847d0cf5d506a6e5b528ce340e51a8dd38d72ad4bba3f48491567b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000017"
          ]
        },
        "23000356": {
          "modelId": "gear:23000356",
          "model": [
            {
              "type": "summon",
              "operation": "create",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Tara surrounds herself with three weak Shadows that attack opponents and disappear after x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000017",
          "sourceHash": "87bc66790476983fcf782dde3f4fe363f4ce59bfc3a1517fae8af62784e48354",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000017"
          ]
        }
      },
      "modeSlots": false
    },
    "16000018": {
      "signature": "[[[23000260,\"Darryl spins around and sprays a barrage of shots in all directions. Each shot deals x damage and recharges his Super by x% if it hits enemies!\"],[23000313,\"Darryl creates a slowing area around himself for x seconds.\"]],[[23000094,\"After Barrel Roll all damage Darryl takes is reduced by x% for x seconds.\"],[23000157,\"When Darryl uses his Super, he doubles his reload speed for x seconds.\"]]]",
      "base": {
        "modelId": "base:16000018",
        "model": [
          {
            "type": "mobility",
            "operation": "roll",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "burst",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Roll in and burst damage targets.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "c7988f658fcff98f988baf97a0a3b7d4661285af8973caba038d876c7429d776",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000094": {
          "modelId": "gear:23000094",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "After Barrel Roll all damage Darryl takes is reduced by x% for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000018",
          "sourceHash": "77d2e57a1733e3e4b8f0a126734bed64721ca36e9cc25717e117c249f66b0946",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000018"
          ]
        },
        "23000157": {
          "modelId": "gear:23000157",
          "model": [
            {
              "type": "ammo",
              "operation": "reload",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "When Darryl uses his Super, he doubles his reload speed for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000018",
          "sourceHash": "d6ca01da9eb6f9cf624da8ed7e8521e180fb5afc57c6f5000a75dd4b76ed391c",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000018"
          ]
        },
        "23000260": {
          "modelId": "gear:23000260",
          "model": [
            {
              "type": "damage",
              "operation": "radial",
              "condition": "always"
            },
            {
              "type": "super",
              "operation": "charge",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "Darryl spins around and sprays a barrage of shots in all directions. Each shot deals x damage and recharges his Super by x% if it hits enemies!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000018",
          "sourceHash": "a56ac5a6ba74c5af9ec20bbf5c650b79a52e244cc690cdfed0fb4ee37471f974",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000018"
          ]
        },
        "23000313": {
          "modelId": "gear:23000313",
          "model": [
            {
              "type": "control",
              "operation": "slowArea",
              "condition": "always"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Darryl creates a slowing area around himself for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000018",
          "sourceHash": "383f3da0615097e659b3b8e02e2f0787dd2851e740993f2a660c6463a8326fc1",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000018"
          ]
        }
      },
      "modeSlots": false
    },
    "16000019": {
      "signature": "[[[23000248,\"Penny drops a barrel of salt that blocks enemy projectiles. She can also use it to burst her own gold pouches.\"],[23000287,\"Penny's cannon blasts at every visible enemy position within range.\"]],[[23000099,\"Penny's gold pouches burst with a x% wider cone after each hit.\"],[23000142,\"Penny's cannon deals x damage and knocks back nearby enemies on landing.\"]]]",
      "base": {
        "modelId": "base:16000019",
        "model": [
          {
            "type": "summon",
            "operation": "cannon",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use your cannon to take over the map!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "cfaeba918f73bc254d9b68cc5d106a5c592ddc79f563b200e61901733a0f6ede",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000099": {
          "modelId": "gear:23000099",
          "model": [
            {
              "type": "projectile",
              "operation": "spread",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "Penny's gold pouches burst with a x% wider cone after each hit.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000019",
          "sourceHash": "2cd1acac1e3ff8874d5c61838ea16c39880aa6afb63d0ff039e013a3e27dad24",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000019"
          ]
        },
        "23000142": {
          "modelId": "gear:23000142",
          "model": [
            {
              "type": "damage",
              "operation": "landing",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "knockback",
              "condition": "landing"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "Penny's cannon deals x damage and knocks back nearby enemies on landing.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000019",
          "sourceHash": "052be0ab5b96f4c1855425baa5191cd5db48eaee107a956b0ebde7d4f9298f16",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000019"
          ]
        },
        "23000248": {
          "modelId": "gear:23000248",
          "model": [
            {
              "type": "defense",
              "operation": "cover",
              "condition": "always"
            },
            {
              "type": "projectile",
              "operation": "burstCombo",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Penny drops a barrel of salt that blocks enemy projectiles. She can also use it to burst her own gold pouches.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000019",
          "sourceHash": "24198dbdfe4be2fc4d8d162ae4ed3f6e529ec027520a176cf8e942872225b594",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000019"
          ]
        },
        "23000287": {
          "modelId": "gear:23000287",
          "model": [
            {
              "type": "damage",
              "operation": "targetedBarrage",
              "condition": "summon"
            }
          ],
          "effects": [],
          "text": "Penny's cannon blasts at every visible enemy position within range.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000019",
          "sourceHash": "e9780b7da136dbd607e5f574947068b847112bbea91073cb07e6d0d41055f810",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000019"
          ]
        }
      },
      "modeSlots": false
    },
    "16000020": {
      "signature": "[[[23000261,\"Fires a soundwave in a target direction, dealing x damage to Brawlers. Frank becomes immune to Crowd Control for x secs.\"],[23000351,\"Frank aims a long-range attack that pulls enemies towards him. Consumes ammo. Does x damage.\"]],[[23000104,\"Frank steals the power of a Brawler he defeats, increasing his damage by x% for x seconds!\"],[23000153,\"Frank gains +x health.\"]]]",
      "base": {
        "modelId": "base:16000020",
        "model": [
          {
            "type": "control",
            "operation": "stun",
            "condition": "always"
          },
          {
            "type": "defense",
            "operation": "frontline",
            "condition": "always"
          }
        ],
        "effects": [
          "stun"
        ],
        "text": "Control space with stuns and high health.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "6fdbdddd53494b80ae72e550bb48ac3b33961337a4103baead9d2db7c992f1a0",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000104": {
          "modelId": "gear:23000104",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "kill"
            }
          ],
          "effects": [],
          "text": "Frank steals the power of a Brawler he defeats, increasing his damage by x% for x seconds!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000020",
          "sourceHash": "a58f44349aed192e645e32f715405afd030bdad22b0eeb9c2a8048d9cdefe305",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000020"
          ]
        },
        "23000153": {
          "modelId": "gear:23000153",
          "model": [
            {
              "type": "defense",
              "operation": "maxHealth",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Frank gains +x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000020",
          "sourceHash": "b859882bba0f8e2dfab451398b5d67bc82f28b40e8bb5129dd8869a23305ed8d",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000020"
          ]
        },
        "23000261": {
          "modelId": "gear:23000261",
          "model": [
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "defense",
              "operation": "controlImmune",
              "condition": "always"
            }
          ],
          "effects": [
            "immunity"
          ],
          "text": "Fires a soundwave in a target direction, dealing x damage to Brawlers. Frank becomes immune to Crowd Control for x secs.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000020",
          "sourceHash": "6f7fb37d1e2b0454e7f3de1b524693a137692b5a6bc6ffc25d8cc29acaa2a29a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000020"
          ]
        },
        "23000351": {
          "modelId": "gear:23000351",
          "model": [
            {
              "type": "control",
              "operation": "pull",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "ammo",
              "condition": "always"
            }
          ],
          "effects": [
            "pull"
          ],
          "text": "Frank aims a long-range attack that pulls enemies towards him. Consumes ammo. Does x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000020",
          "sourceHash": "e8ec12d6e545e9efa43841b329b49196c8683cb7128ee50b7f927a3e41b111d6",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000020"
          ]
        }
      },
      "modeSlots": false
    },
    "16000021": {
      "signature": "[[[23000252,\"All enemies close to Gene are instantly pushed back. If at least one enemy Brawler is within range, Gene will also restore x% of his max health.\"],[23000352,\"Gene shoots a homing missile at all visible opponents within a large area, dealing up to x damage based on distance.\"]],[[23000109,\"Gene heals all friendly Brawlers around him for x health per second.\"],[23000159,\"Gene's Magic Hand also damages enemies, dealing x damage on hit.\"]]]",
      "base": {
        "modelId": "base:16000021",
        "model": [
          {
            "type": "control",
            "operation": "pull",
            "condition": "always"
          },
          {
            "type": "projectile",
            "operation": "range",
            "condition": "always"
          }
        ],
        "effects": [
          "pull",
          "rangeBoost"
        ],
        "text": "Single out enemies with long range pulls!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "1f2ea231a464eff7a64f55614fd194d51aa3e2b5716e32d87716c5bb471b4a62",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000109": {
          "modelId": "gear:23000109",
          "model": [
            {
              "type": "heal",
              "operation": "ally",
              "condition": "allyNear"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Gene heals all friendly Brawlers around him for x health per second.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000021",
          "sourceHash": "a00f5ab1dda69536f36b56f2e1a819cf402a4d9ab29859108059c64402f07b11",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000021"
          ]
        },
        "23000159": {
          "modelId": "gear:23000159",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "superHit"
            }
          ],
          "effects": [],
          "text": "Gene's Magic Hand also damages enemies, dealing x damage on hit.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000021",
          "sourceHash": "5e70af3f0335c4aa13986ddda93eb6d75d7d7781faef3f7d8ca3702954dc39df",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000021"
          ]
        },
        "23000252": {
          "modelId": "gear:23000252",
          "model": [
            {
              "type": "control",
              "operation": "knockback",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "self",
              "condition": "enemyNear"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "All enemies close to Gene are instantly pushed back. If at least one enemy Brawler is within range, Gene will also restore x% of his max health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000021",
          "sourceHash": "0fe0daa9e795588f7fefbb4e1bbae43250762ba996d3db4724451d761a534025",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000021"
          ]
        },
        "23000352": {
          "modelId": "gear:23000352",
          "model": [
            {
              "type": "damage",
              "operation": "homing",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "distanceScale",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Gene shoots a homing missile at all visible opponents within a large area, dealing up to x damage based on distance.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000021",
          "sourceHash": "80176afc8fafa8bae92696c1c4b5d294122371e6d503b9cd10112b670a864566",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000021"
          ]
        }
      },
      "modeSlots": false
    },
    "16000022": {
      "signature": "[[[23000253,\"Tick's next attack fires x mines.\"],[23000355,\"Tick gains a x% shield for x seconds. After that, it bursts out for x damage.\"]],[[23000114,\"When Tick takes no damage and doesn't attack, he starts recovering health x seconds sooner than normal.\"],[23000161,\"Tick's reload time is x% shorter.\"]]]",
      "base": {
        "modelId": "base:16000022",
        "model": [
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          },
          {
            "type": "terrain",
            "operation": "coverUse",
            "condition": "always"
          }
        ],
        "effects": [
          "wallDependent"
        ],
        "text": "Control space from safety.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "d39f93f9bbc5540df99117e39b8f199037cb2c5d2951457f69495ab40276a1ac",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000114": {
          "modelId": "gear:23000114",
          "model": [
            {
              "type": "heal",
              "operation": "regeneration",
              "condition": "undamaged"
            }
          ],
          "effects": [],
          "text": "When Tick takes no damage and doesn't attack, he starts recovering health x seconds sooner than normal.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000022",
          "sourceHash": "d35dde458860a532da23b05cd18206f3f1c4ae7c3edce15e38c288dbdcc29fc7",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000022"
          ]
        },
        "23000161": {
          "modelId": "gear:23000161",
          "model": [
            {
              "type": "ammo",
              "operation": "reload",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Tick's reload time is x% shorter.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000022",
          "sourceHash": "adfb30390976886827ffa19208451d90b2c40344b62d5f39a93c31840347703b",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000022"
          ]
        },
        "23000253": {
          "modelId": "gear:23000253",
          "model": [
            {
              "type": "projectile",
              "operation": "count",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "Tick's next attack fires x mines.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000022",
          "sourceHash": "a424570ac2bc88ecae9ce76f8ce03ea4a62af466d5493c48716d6cb91aafba86",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000022"
          ]
        },
        "23000355": {
          "modelId": "gear:23000355",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "delayedArea",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Tick gains a x% shield for x seconds. After that, it bursts out for x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000022",
          "sourceHash": "ba5d6dd65dcb110559436f4e3c1b798fd87d5c4adc4a7a626aefb0e224d660cc",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000022"
          ]
        }
      },
      "modeSlots": false
    },
    "16000023": {
      "signature": "[[[23000276,\"Leon creates an illusion of himself to confuse his enemies. The clone attacks enemies dealing minor damage\"],[23000408,\"Leon throws a stealthy area for his team to hide in. The lollipop slowly loses its health over time.\"]],[[23000119,\"When Leon is not visible, he gains a 30% movement speed for the duration of his invisibility.\"],[23000141,\"Leon recovers x health per second while his Super is active.\"]]]",
      "base": {
        "modelId": "base:16000023",
        "model": [
          {
            "type": "vision",
            "operation": "invisible",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "assassinate",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Sneak in and assassinate.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "02320e9e8157cd2f3715437403b3ab9fa858fa4d113f4ff3467b1f373df82cd5",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000119": {
          "modelId": "gear:23000119",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "invisible"
            }
          ],
          "effects": [],
          "text": "When Leon is not visible, he gains a 30% movement speed for the duration of his invisibility.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000023",
          "sourceHash": "cd03bfc5d2f13cc02c513b41e3fa7a90357ec40e14f9fbb5c2cadeeea514a6b1",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000023"
          ]
        },
        "23000141": {
          "modelId": "gear:23000141",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Leon recovers x health per second while his Super is active.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000023",
          "sourceHash": "4de338785c70b28a1f20fa1532e4b6a169fa623ffdf6fc29e494bae19dae0fa7",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000023"
          ]
        },
        "23000276": {
          "modelId": "gear:23000276",
          "model": [
            {
              "type": "summon",
              "operation": "decoy",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "decoy",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Leon creates an illusion of himself to confuse his enemies. The clone attacks enemies dealing minor damage",
          "source": "https://api.brawlapi.com/v1/brawlers/16000023",
          "sourceHash": "3e183b1d2ba6b3581f4fe758942c57dd546498d7d550e5188219cbf1ca7ffe8a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000023"
          ]
        },
        "23000408": {
          "modelId": "gear:23000408",
          "model": [
            {
              "type": "vision",
              "operation": "allyInvisible",
              "condition": "always"
            },
            {
              "type": "summon",
              "operation": "stealth",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Leon throws a stealthy area for his team to hide in. The lollipop slowly loses its health over time.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000023",
          "sourceHash": "bcbb2ec01742295cbf6d50ed00ff18df7977ac01eebf9e1664b97780127f2ad7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000023"
          ]
        }
      },
      "modeSlots": false
    },
    "16000024": {
      "signature": "[[[23000242,\"Rosa fertilizes the ground around her and bushes instantly grow to provide great cover.\"],[23000348,\"All opponents hiding in bushes take x damage and get slowed down for 3 seconds.\"]],[[23000124,\"Rosa recovers x health per second when inside a bush.\"],[23000147,\"Rosa's punches gain +x damage during her Super.\"]]]",
      "base": {
        "modelId": "base:16000024",
        "model": [
          {
            "type": "terrain",
            "operation": "bushUse",
            "condition": "always"
          }
        ],
        "effects": [
          "wallDependent"
        ],
        "text": "Use bushes whenever possible!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "531b566f9a1e49f5f27c77ff3de9b4d5fed9598df5c9e759f0c2b6ae177ee4d5",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000124": {
          "modelId": "gear:23000124",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "bush"
            }
          ],
          "effects": [],
          "text": "Rosa recovers x health per second when inside a bush.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000024",
          "sourceHash": "b9cc80a57d498f0494335680108cba877acb504238d575999bd7cd87502e6dbd",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000024"
          ]
        },
        "23000147": {
          "modelId": "gear:23000147",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Rosa's punches gain +x damage during her Super.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000024",
          "sourceHash": "f195bdfb23e84165a110ee4f5a2052afb3ee87bf5de1ce9b271145bcf6e90987",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000024"
          ]
        },
        "23000242": {
          "modelId": "gear:23000242",
          "model": [
            {
              "type": "terrain",
              "operation": "growBush",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Rosa fertilizes the ground around her and bushes instantly grow to provide great cover.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000024",
          "sourceHash": "b6f9526f7d2a43e885b5676941d70e2ee85b2797af1bbc8ff614a23d76ea4595",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000024"
          ]
        },
        "23000348": {
          "modelId": "gear:23000348",
          "model": [
            {
              "type": "damage",
              "operation": "bush",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "slow",
              "condition": "bush"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "All opponents hiding in bushes take x damage and get slowed down for 3 seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000024",
          "sourceHash": "fdc2d8aaa7fa07bde9606efeea0a81b20b57fe023f1800da4353200dd4d3aa74",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000024"
          ]
        }
      },
      "modeSlots": false
    },
    "16000025": {
      "signature": "[[[23000262,\"The next pickaxe Carl throws will drop a trail of hot rocks behind it! Opponents that touch them are set on fire and receive x damage per second.\"],[23000317,\"Carl's next attack makes his pickaxe pull him to the farthest point of the attack.\"]],[[23000129,\"Carl throws his Pickaxe with x% more speed, allowing it to travel and return faster.\"],[23000145,\"During Carl's Super, all damage he receives is reduced by x%.\"]]]",
      "base": {
        "modelId": "base:16000025",
        "model": [
          {
            "type": "projectile",
            "operation": "boomerang",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Boomerang your pickaxe for more damage!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "498913286f8708d5847b3ac38b3af79b849f6617dba11a50911f8137307a5930",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000129": {
          "modelId": "gear:23000129",
          "model": [
            {
              "type": "projectile",
              "operation": "speed",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Carl throws his Pickaxe with x% more speed, allowing it to travel and return faster.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000025",
          "sourceHash": "2173c3a8e013e06f4fdcb886ceeb99c732af6c19265620e6b42fcca54f3d9b0e",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000025"
          ]
        },
        "23000145": {
          "modelId": "gear:23000145",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "During Carl's Super, all damage he receives is reduced by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000025",
          "sourceHash": "9728b117932be02425bc7e30f43edec8405e61b77d746d0e6de750f53d8e9efc",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000025"
          ]
        },
        "23000262": {
          "modelId": "gear:23000262",
          "model": [
            {
              "type": "damage",
              "operation": "burnTrail",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "The next pickaxe Carl throws will drop a trail of hot rocks behind it! Opponents that touch them are set on fire and receive x damage per second.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000025",
          "sourceHash": "80f2a8999157f102cb26832d32082a2c06189af503b916e6732913fb85db1912",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000025"
          ]
        },
        "23000317": {
          "modelId": "gear:23000317",
          "model": [
            {
              "type": "mobility",
              "operation": "grapple",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "Carl's next attack makes his pickaxe pull him to the farthest point of the attack.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000025",
          "sourceHash": "34f0f43fc0efb003c7a8162052fa39dc8b2261ce6cbd58f598a740485ec07bed",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000025"
          ]
        }
      },
      "modeSlots": false
    },
    "16000026": {
      "signature": "[[[23000275,\"Bibi heals 1000 health per second for 4 seconds.\"],[23000458,\"Bibi throws bubble gum that slows all enemies in it by x%\"]],[[23000134,\"Bibi's movement speed is increased by 12% when her Home Run bar is fully charged.\"],[23000146,\"When Bibi's Home run bar is fully charged, she shields herself from all damage by x%.\"]]]",
      "base": {
        "modelId": "base:16000026",
        "model": [
          {
            "type": "mobility",
            "operation": "charge",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "knockback",
            "condition": "always"
          }
        ],
        "effects": [
          "knockback"
        ],
        "text": "Charge in and knock 'em back!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "cce3dc8b7218b37c28e201e0863f9fda4172700e9279172a72de856c76029e7a",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000134": {
          "modelId": "gear:23000134",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "charged"
            }
          ],
          "effects": [],
          "text": "Bibi's movement speed is increased by 12% when her Home Run bar is fully charged.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000026",
          "sourceHash": "097ddb3bf7a17cf02dfdc17ef60a9693c8d86af29f55b412783fc39f3bad77e6",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000026"
          ]
        },
        "23000146": {
          "modelId": "gear:23000146",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "charged"
            }
          ],
          "effects": [],
          "text": "When Bibi's Home run bar is fully charged, she shields herself from all damage by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000026",
          "sourceHash": "ab91afe1ab4e4187173bef9aa8d660c84e9f076b14366ac4336a3889b4e3fd77",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000026"
          ]
        },
        "23000275": {
          "modelId": "gear:23000275",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Bibi heals 1000 health per second for 4 seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000026",
          "sourceHash": "f77cd1dcc112da98075b9cbfe3edfe4d73d5d46e93fa82d7bf93d878efe2a88a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000026"
          ]
        },
        "23000458": {
          "modelId": "gear:23000458",
          "model": [
            {
              "type": "control",
              "operation": "slowArea",
              "condition": "always"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Bibi throws bubble gum that slows all enemies in it by x%",
          "source": "https://api.brawlapi.com/v1/brawlers/16000026",
          "sourceHash": "91046578812dd2d8f8b16e42e4434ee5c380d794d8c8faaa4280065f4bb08ee1",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000026"
          ]
        }
      },
      "modeSlots": false
    },
    "16000027": {
      "signature": "[[[23000259,\"8-Bit instantly teleports to his Damage Booster.\"],[23000318,\"8-Bit fires x projectiles. Consumes ammo.\"]],[[23000168,\"Increases the Damage Booster's range by x% and boosts damage by an additional x%.\"],[23000181,\"While near the Damage Booster 8-Bit gains +x% Movement Speed.\"]]]",
      "base": {
        "modelId": "base:16000027",
        "model": [
          {
            "type": "support",
            "operation": "damage",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "holdGround",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Hold ground and boost your team!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "b6db3651db2df8cb54b6ede12dfef8a867f55ec67f979daaed1541abf31482ed",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000168": {
          "modelId": "gear:23000168",
          "model": [
            {
              "type": "support",
              "operation": "range",
              "condition": "always"
            },
            {
              "type": "support",
              "operation": "damage",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Increases the Damage Booster's range by x% and boosts damage by an additional x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000027",
          "sourceHash": "fae4ccee7bd958e7fba284464c4a408bc420d100e089e44807b0854785de8324",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000027"
          ]
        },
        "23000181": {
          "modelId": "gear:23000181",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "summonNear"
            }
          ],
          "effects": [],
          "text": "While near the Damage Booster 8-Bit gains +x% Movement Speed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000027",
          "sourceHash": "c10d69a875433990d578f875b9f8bb72a7e68c9b624d61015044944699e0e0c7",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000027"
          ]
        },
        "23000259": {
          "modelId": "gear:23000259",
          "model": [
            {
              "type": "mobility",
              "operation": "teleport",
              "condition": "summon"
            }
          ],
          "effects": [],
          "text": "8-Bit instantly teleports to his Damage Booster.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000027",
          "sourceHash": "019773cd44436ab34ff28f79dfd250794fb7b7e9d7382c706359e32ebab14efb",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000027"
          ]
        },
        "23000318": {
          "modelId": "gear:23000318",
          "model": [
            {
              "type": "projectile",
              "operation": "burstCount",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "ammo",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "8-Bit fires x projectiles. Consumes ammo.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000027",
          "sourceHash": "099bf025601118982fc9bf103d8bca7542f9f9bd6f6ff5e3f4bd62e2689ed33a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000027"
          ]
        }
      },
      "modeSlots": false
    },
    "16000028": {
      "signature": "[[[23000270,\"Sandy falls asleep for x seconds and his health is fully restored.\"],[23000405,\"Sandy's next attack lulls opponents to sleep for x seconds. They will, however, wake up from any damage.\"]],[[23000186,\"Sandstorm now also damages enemies for x damage per second.\"],[23000187,\"Sandstorm now also heals friendly Brawlers for x health per second.\"]]]",
      "base": {
        "modelId": "base:16000028",
        "model": [
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          },
          {
            "type": "resource",
            "operation": "sandstorm",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use Sandstorm to control objectives!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "4b62f414e5deef10470dcbc76379c8ea135435cefd766d1a717716878f1fae29",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000186": {
          "modelId": "gear:23000186",
          "model": [
            {
              "type": "damage",
              "operation": "periodicArea",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Sandstorm now also damages enemies for x damage per second.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000028",
          "sourceHash": "0a7f0f1427a6ebbda1b628031f0dc085517d00172e6ec9b71d9015af6b2260e7",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000028"
          ]
        },
        "23000187": {
          "modelId": "gear:23000187",
          "model": [
            {
              "type": "heal",
              "operation": "ally",
              "condition": "superArea"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Sandstorm now also heals friendly Brawlers for x health per second.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000028",
          "sourceHash": "59c19df24dd18cc5ef516d8da89f4b8fa649264605e0b2968b8b70fe7d209d44",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000028"
          ]
        },
        "23000270": {
          "modelId": "gear:23000270",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "action",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Sandy falls asleep for x seconds and his health is fully restored.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000028",
          "sourceHash": "014d3dfefef6e4c950b98932fdd4af8f9caffeb36a364f5f8c6540028c32cbca",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000028"
          ]
        },
        "23000405": {
          "modelId": "gear:23000405",
          "model": [
            {
              "type": "control",
              "operation": "sleep",
              "condition": "nextAttackHit"
            },
            {
              "type": "control",
              "operation": "wakeOnDamage",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Sandy's next attack lulls opponents to sleep for x seconds. They will, however, wake up from any damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000028",
          "sourceHash": "b80698140c15b1a9e11abd2490b3c41907e3221d1a446d0950dc5f21f80971d8",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000028"
          ]
        }
      },
      "modeSlots": false
    },
    "16000029": {
      "signature": "[[[23000271,\"Bea drops a beehive with a splash of sticky honey around it. The honey slows down enemies that step in it.\"],[23000312,\"Bea unleashes x angry bees that circle away from her, dealing more damage the further they go (up to x damage).\"]],[[23000192,\"Instantly Supercharge Bea's Big Sting one time if she misses a Supercharged shot.\"],[23000193,\"Bea receives a x% shield while Big Sting is Supercharged.\"]]]",
      "base": {
        "modelId": "base:16000029",
        "model": [
          {
            "type": "damage",
            "operation": "chargedShot",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Land hits, then punish!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "372d15afe637a2a60f68baace5d96009d65bad3d0c418efed134b01e4724bbb3",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000192": {
          "modelId": "gear:23000192",
          "model": [
            {
              "type": "resource",
              "operation": "restoreCharge",
              "condition": "miss"
            }
          ],
          "effects": [],
          "text": "Instantly Supercharge Bea's Big Sting one time if she misses a Supercharged shot.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000029",
          "sourceHash": "ae6f6def365f6e73579a0f42ce29c6c7d08b53da4c4f6f658b6f9a3daf475bcb",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000029"
          ]
        },
        "23000193": {
          "modelId": "gear:23000193",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "charged"
            }
          ],
          "effects": [],
          "text": "Bea receives a x% shield while Big Sting is Supercharged.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000029",
          "sourceHash": "66245ac8966003b9c6f393082414ae417103c3669e8beea6b72071400657b477",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000029"
          ]
        },
        "23000271": {
          "modelId": "gear:23000271",
          "model": [
            {
              "type": "control",
              "operation": "slowArea",
              "condition": "always"
            },
            {
              "type": "summon",
              "operation": "hive",
              "condition": "always"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Bea drops a beehive with a splash of sticky honey around it. The honey slows down enemies that step in it.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000029",
          "sourceHash": "c633a59f2bb633435f5c2fb01d0b2f678187d1156a6ae7f77ff47a40d7560710",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000029"
          ]
        },
        "23000312": {
          "modelId": "gear:23000312",
          "model": [
            {
              "type": "damage",
              "operation": "distanceScale",
              "condition": "always"
            },
            {
              "type": "projectile",
              "operation": "orbit",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Bea unleashes x angry bees that circle away from her, dealing more damage the further they go (up to x damage).",
          "source": "https://api.brawlapi.com/v1/brawlers/16000029",
          "sourceHash": "dfa2771cd5f49281306dce45af61067762a99f61ee9311724e08c66cea5246a7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000029"
          ]
        }
      },
      "modeSlots": false
    },
    "16000030": {
      "signature": "[[[23000274,\"Emz fires off some hairspray that pushes enemies back. Deals x damage.\"],[23000459,\"Emz squirts out hairspray that goes through walls! Deals x damage.\"]],[[23000198,\"Enemies that stay within the cloud of Emz's toxic hair spray suffer increasing damage, x% per hit.\"],[23000199,\"Emz recovers x health per second for each enemy Brawler inside her Super's area of effect.\"]]]",
      "base": {
        "modelId": "base:16000030",
        "model": [
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "wideArea",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Control the map with large attacks.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "72631b0d0ac9747b9a735c9faf30ee218b75809077713fb661e8682f8d699044",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000198": {
          "modelId": "gear:23000198",
          "model": [
            {
              "type": "damage",
              "operation": "stacking",
              "condition": "lingering"
            }
          ],
          "effects": [],
          "text": "Enemies that stay within the cloud of Emz's toxic hair spray suffer increasing damage, x% per hit.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000030",
          "sourceHash": "04b69a4a48cf3ca4e692b6a4a70f9e95ff092a9a50a72749b65d40ae9868b256",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000030"
          ]
        },
        "23000199": {
          "modelId": "gear:23000199",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "enemyInSuper"
            }
          ],
          "effects": [],
          "text": "Emz recovers x health per second for each enemy Brawler inside her Super's area of effect.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000030",
          "sourceHash": "d074527ec31f0456f2a18b9633030062b3f71ababcc1dcfae85e7826c9281680",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000030"
          ]
        },
        "23000274": {
          "modelId": "gear:23000274",
          "model": [
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "knockback",
              "condition": "always"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "Emz fires off some hairspray that pushes enemies back. Deals x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000030",
          "sourceHash": "d89299aa0691dd58235ff327f781960e010e10a803946dcfdd5d8bba4eb63582",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000030"
          ]
        },
        "23000459": {
          "modelId": "gear:23000459",
          "model": [
            {
              "type": "projectile",
              "operation": "wallPierce",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            }
          ],
          "effects": [
            "overWalls"
          ],
          "text": "Emz squirts out hairspray that goes through walls! Deals x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000030",
          "sourceHash": "6c155ff09016175fc5897b2d86ed07b3d65391d0d6bdf371048b7199648790bf",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000030"
          ]
        }
      },
      "modeSlots": false
    },
    "16000031": {
      "signature": "[[[23000269,\"Mr. P buffs his current porter by increasing its damage by x and health by x.\"],[23000349,\"The next attack will spawn a weak porter where the attack lands.\"]],[[23000204,\"Every x seconds, the explosion damage of Mr. P's next overstuffed suitcase is increased by x%.\"],[23000205,\"All robo-porters from the home base now have x% more health and x% higher damage.\"]]]",
      "base": {
        "modelId": "base:16000031",
        "model": [
          {
            "type": "summon",
            "operation": "porters",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use porters to control the map.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "7840de43958d714fa0b4194264eb1d9b50ba6c9a9dcd3484922c3faa73acbe9e",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000204": {
          "modelId": "gear:23000204",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "periodic"
            }
          ],
          "effects": [],
          "text": "Every x seconds, the explosion damage of Mr. P's next overstuffed suitcase is increased by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000031",
          "sourceHash": "46ea59470a65db98eecdb11bdc314fb9ac8ccf0d91b021a80734b63b4743b353",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000031"
          ]
        },
        "23000205": {
          "modelId": "gear:23000205",
          "model": [
            {
              "type": "summon",
              "operation": "health",
              "condition": "always"
            },
            {
              "type": "summon",
              "operation": "damage",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "All robo-porters from the home base now have x% more health and x% higher damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000031",
          "sourceHash": "a00b19e92238d136697b79eac424d22cc2d2f2237892fe4435789f90d08a9d3d",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000031"
          ]
        },
        "23000269": {
          "modelId": "gear:23000269",
          "model": [
            {
              "type": "summon",
              "operation": "damage",
              "condition": "always"
            },
            {
              "type": "summon",
              "operation": "health",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Mr. P buffs his current porter by increasing its damage by x and health by x.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000031",
          "sourceHash": "e7a332e00afb84896d7e7acd24ec4ffa773d50fdcc6e184471df03efe9ffde74",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000031"
          ]
        },
        "23000349": {
          "modelId": "gear:23000349",
          "model": [
            {
              "type": "summon",
              "operation": "create",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "The next attack will spawn a weak porter where the attack lands.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000031",
          "sourceHash": "8e0b89133fe29de8a41d0b37d43ea738728e25374e86a3e433458353c098eb9e",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000031"
          ]
        }
      },
      "modeSlots": false
    },
    "16000032": {
      "signature": "[[[23000254,\"Max dashes forward, and becomes immune to all damage from enemies while dashing.\"],[23000311,\"Max throws a lightning bolt. If she reactivates the Gadget, or after x seconds, she blinks back to the lightning bolt and heals any damage taken since.\"]],[[23000210,\"Hitting an enemy with Max's Main Attack extends the duration of her Super by x sec.\"],[23000211,\"Max reloads faster while moving.\"]]]",
      "base": {
        "modelId": "base:16000032",
        "model": [
          {
            "type": "support",
            "operation": "speed",
            "condition": "always"
          }
        ],
        "effects": [
          "teamSpeed"
        ],
        "text": "Buff your team with tons of speed!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "5d29c9811d16b5017ef2a7118181bf8ba6f826629807629617d3185ca7cd94c4",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000210": {
          "modelId": "gear:23000210",
          "model": [
            {
              "type": "super",
              "operation": "duration",
              "condition": "attackHit"
            }
          ],
          "effects": [],
          "text": "Hitting an enemy with Max's Main Attack extends the duration of her Super by x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000032",
          "sourceHash": "b27ff79f06c74d6a6a082a810f20b9719745cdd3df812d6e83e91686652f2f4a",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000032"
          ]
        },
        "23000211": {
          "modelId": "gear:23000211",
          "model": [
            {
              "type": "ammo",
              "operation": "reload",
              "condition": "moving"
            }
          ],
          "effects": [],
          "text": "Max reloads faster while moving.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000032",
          "sourceHash": "c0d3325446bafc8f4393c81f524fa3db01b8a809627fc5ec8d2f767d16cabcfb",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000032"
          ]
        },
        "23000254": {
          "modelId": "gear:23000254",
          "model": [
            {
              "type": "mobility",
              "operation": "dash",
              "condition": "always"
            },
            {
              "type": "defense",
              "operation": "invulnerable",
              "condition": "dash"
            }
          ],
          "effects": [],
          "text": "Max dashes forward, and becomes immune to all damage from enemies while dashing.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000032",
          "sourceHash": "4580ee693f2d33f7c31afa6d8dfc78e75fe05652e2cdb28ded802cccf6baf306",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000032"
          ]
        },
        "23000311": {
          "modelId": "gear:23000311",
          "model": [
            {
              "type": "mobility",
              "operation": "rewind",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "recentDamage",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Max throws a lightning bolt. If she reactivates the Gadget, or after x seconds, she blinks back to the lightning bolt and heals any damage taken since.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000032",
          "sourceHash": "82362f4cbc977b23c84cdc114123ce1f238acc80c132974ef3b77384a7272df4",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000032"
          ]
        }
      },
      "modeSlots": false
    },
    "16000034": {
      "signature": "[[[23000256,\"Jacky gets a burst of energy and moves 25% faster for 4 seconds.\"],[23000486,\"Jacky rebuilds the environment in a small radius around her.\"]],[[23000222,\"When receiving damage, Jacky returns the favor by converting x% of the damage into a Groundbreaker counterattack.\"],[23000223,\"Jacky's Hard Hat protects her by reducing any damage she takes by x%.\"]]]",
      "base": {
        "modelId": "base:16000034",
        "model": [
          {
            "type": "damage",
            "operation": "closeArea",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "engage",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Get close to deal large area damage.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "982f07b14142991b76fe5232178687ff837ca951a250bcb50bb42d19e3bf1001",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000222": {
          "modelId": "gear:23000222",
          "model": [
            {
              "type": "damage",
              "operation": "retaliate",
              "condition": "receivedDamage"
            }
          ],
          "effects": [],
          "text": "When receiving damage, Jacky returns the favor by converting x% of the damage into a Groundbreaker counterattack.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000034",
          "sourceHash": "2ad35d88b59a3b169b7ff26d9af62bf960624703b2217c81a8ed158bba1adf46",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000034"
          ]
        },
        "23000223": {
          "modelId": "gear:23000223",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Jacky's Hard Hat protects her by reducing any damage she takes by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000034",
          "sourceHash": "80f6d0677d2e1091814708b64f3435c03b9b8a1387114f0da0d9c4cdd48717a3",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000034"
          ]
        },
        "23000256": {
          "modelId": "gear:23000256",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Jacky gets a burst of energy and moves 25% faster for 4 seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000034",
          "sourceHash": "7f625c34c9b717f9e92abd938b5576d9e3f147a664ceac5158e1f47c1d61883b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000034"
          ]
        },
        "23000486": {
          "modelId": "gear:23000486",
          "model": [
            {
              "type": "terrain",
              "operation": "rebuild",
              "condition": "always"
            }
          ],
          "effects": [
            "wallCreate"
          ],
          "text": "Jacky rebuilds the environment in a small radius around her.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000034",
          "sourceHash": "8424184f8d07540ce0eef0b7629fb69b8d2cda765dc3a951b562bcd716aa63e3",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000034"
          ]
        }
      },
      "modeSlots": false
    },
    "16000035": {
      "signature": "[[[23000277,\"Gale drops a bounce pad underfoot, launching friend and foe alike into the air.\"],[23000407,\"Gale uses his leaf blower to create a local tornado, which will push away any opponents that try to pass through.\"]],[[23000228,\"Gale's Super now stuns enemies for x seconds if they are pushed against obstacles.\"],[23000229,\"Gale's snow balls now also slow down opponents for 0.5 seconds.\"]]]",
      "base": {
        "modelId": "base:16000035",
        "model": [
          {
            "type": "control",
            "operation": "knockback",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [
          "knockback"
        ],
        "text": "Push enemies away to control the map.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "e296391fa8bad5b17ce80e588515f62ebd5190785bffda95f9b7ba7ca8b87c79",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000228": {
          "modelId": "gear:23000228",
          "model": [
            {
              "type": "control",
              "operation": "stun",
              "condition": "wallHit"
            }
          ],
          "effects": [
            "stun"
          ],
          "text": "Gale's Super now stuns enemies for x seconds if they are pushed against obstacles.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000035",
          "sourceHash": "b28538913fdd6d5b4eab864e66a16da7e8b4776ebe69e3be83ed9f5718f67a19",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000035"
          ]
        },
        "23000229": {
          "modelId": "gear:23000229",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "attackHit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Gale's snow balls now also slow down opponents for 0.5 seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000035",
          "sourceHash": "de7c0dc8516f488c4af87126b9f82f7f51e5cf16b96d9aa4daa280fc11d571df",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000035"
          ]
        },
        "23000277": {
          "modelId": "gear:23000277",
          "model": [
            {
              "type": "mobility",
              "operation": "sharedLaunch",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Gale drops a bounce pad underfoot, launching friend and foe alike into the air.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000035",
          "sourceHash": "d46d515c676bf128f87a40ebeb9c655b4cba56b6cc414554a568ca69d2f5cd0e",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000035"
          ]
        },
        "23000407": {
          "modelId": "gear:23000407",
          "model": [
            {
              "type": "control",
              "operation": "repelArea",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Gale uses his leaf blower to create a local tornado, which will push away any opponents that try to pass through.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000035",
          "sourceHash": "5d09321a7fff985ecab89571b8cfc39558392849626c16a4214991390b163029",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000035"
          ]
        }
      },
      "modeSlots": false
    },
    "16000036": {
      "signature": "[[[23000278,\"Nani teleports to Peep's last known location and ends her Super.\"],[23000353,\"For the next x seconds, the first time Nani takes damage from an enemy, x% of the damage is returned to the enemy.\"]],[[23000234,\"Peep deals up to x extra damage based on his travel distance.\"],[23000235,\"Nani takes x% less damage while her Super is active.\"]]]",
      "base": {
        "modelId": "base:16000036",
        "model": [
          {
            "type": "damage",
            "operation": "convergingShots",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "poke",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Poke with outside shots, or burst with all!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "8fc4d98d847fef6f7d61ac19e57391d4fe6ff308cb7d50673e93c6c2c5051a78",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000234": {
          "modelId": "gear:23000234",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "travelDistance"
            }
          ],
          "effects": [],
          "text": "Peep deals up to x extra damage based on his travel distance.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000036",
          "sourceHash": "d4af34deee2fddbd3fade37cd71d7c32b77652ae23579a91363733435634db07",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000036"
          ]
        },
        "23000235": {
          "modelId": "gear:23000235",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Nani takes x% less damage while her Super is active.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000036",
          "sourceHash": "1d70023f4333da05d423e4c21ea0e7588ffadac330159fdb171b992729a8ae37",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000036"
          ]
        },
        "23000278": {
          "modelId": "gear:23000278",
          "model": [
            {
              "type": "mobility",
              "operation": "teleport",
              "condition": "super"
            },
            {
              "type": "cost",
              "operation": "super",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Nani teleports to Peep's last known location and ends her Super.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000036",
          "sourceHash": "be54647551c61e382de5293ffaf62193f00d3df041ce425276dc5c34b4e6ec5e",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000036"
          ]
        },
        "23000353": {
          "modelId": "gear:23000353",
          "model": [
            {
              "type": "defense",
              "operation": "reflect",
              "condition": "nextDamage"
            }
          ],
          "effects": [],
          "text": "For the next x seconds, the first time Nani takes damage from an enemy, x% of the damage is returned to the enemy.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000036",
          "sourceHash": "6ecb063e87115f4506dbf1778f57babaef8f5761485ec899134b616f3687a4cd",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000036"
          ]
        }
      },
      "modeSlots": false
    },
    "16000037": {
      "signature": "[[[23000244,\"Sprout consumes a bush to restore x health.\"],[23000315,\"Sprout destroys its current Hedge, but will instantly have its Super fully charged again.\"]],[[23000240,\"Every x seconds, the next Seed Bomb will explode with a larger explosion radius.\"],[23000241,\"Sprout activates a shield, partially protecting itself from all attacks while inside a bush.\"]]]",
      "base": {
        "modelId": "base:16000037",
        "model": [
          {
            "type": "terrain",
            "operation": "create",
            "condition": "always"
          },
          {
            "type": "terrain",
            "operation": "coverUse",
            "condition": "always"
          },
          {
            "type": "projectile",
            "operation": "bounce",
            "condition": "always"
          }
        ],
        "effects": [
          "wallCreate",
          "wallDependent"
        ],
        "text": "Make walls and bounce projectiles off of them.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "6ebf6dfa97fba7a3d3bd3149bc7fef4b7a8677d8dec1adfe64f42fc83bcf2e05",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000240": {
          "modelId": "gear:23000240",
          "model": [
            {
              "type": "projectile",
              "operation": "explosionRadius",
              "condition": "periodic"
            }
          ],
          "effects": [],
          "text": "Every x seconds, the next Seed Bomb will explode with a larger explosion radius.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000037",
          "sourceHash": "cb2f4e908963440ca3b05670b5d7a9c4da9ddc015906551bc0c11db08a545e15",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000037"
          ]
        },
        "23000241": {
          "modelId": "gear:23000241",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "bush"
            }
          ],
          "effects": [],
          "text": "Sprout activates a shield, partially protecting itself from all attacks while inside a bush.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000037",
          "sourceHash": "ef838edfc460d7d76afe0488c032002eb7d6394818b039d642b3d98af6cea6e7",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000037"
          ]
        },
        "23000244": {
          "modelId": "gear:23000244",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "bush"
            },
            {
              "type": "cost",
              "operation": "bush",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Sprout consumes a bush to restore x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000037",
          "sourceHash": "e49205c63786cf2e9466a7864e649ea35e7849403fa76f4e082cead997e21448",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000037"
          ]
        },
        "23000315": {
          "modelId": "gear:23000315",
          "model": [
            {
              "type": "terrain",
              "operation": "removeOwn",
              "condition": "always"
            },
            {
              "type": "super",
              "operation": "refund",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Sprout destroys its current Hedge, but will instantly have its Super fully charged again.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000037",
          "sourceHash": "8809ed5d33309a98990bb32af487a8e21aadea3cae5214ad016418a37399f514",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000037"
          ]
        }
      },
      "modeSlots": false
    },
    "16000038": {
      "signature": "[[[23000285,\"Surge's power surges! Increase Super charge rate by 30% for 5 sec.\"],[23000485,\"Within the next 2 seconds, Surge consumes 50% of the damage of the next incoming hit and uses the energy to reload x ammo.\"]],[[23000283,\"Surge's Main Attack now bounces off walls.\"],[23000284,\"Surge always spawns with a full Super Charge.\"]]]",
      "base": {
        "modelId": "base:16000038",
        "model": [
          {
            "type": "resource",
            "operation": "level",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "dive",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use Supers to level up or dive in!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "a8ae420a2b09a099e975ed07a0c2e828e0b32f1b7a9a0e0858fb1370008b2d86",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000283": {
          "modelId": "gear:23000283",
          "model": [
            {
              "type": "projectile",
              "operation": "bounce",
              "condition": "always"
            }
          ],
          "effects": [
            "wallDependent"
          ],
          "text": "Surge's Main Attack now bounces off walls.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000038",
          "sourceHash": "4393d1806ca917dc2cc0f59f50f4f072df62aa2c4ae03f8dbf486b6f641ccfe4",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000038"
          ]
        },
        "23000284": {
          "modelId": "gear:23000284",
          "model": [
            {
              "type": "super",
              "operation": "initial",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Surge always spawns with a full Super Charge.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000038",
          "sourceHash": "e17a4cb36adc7b36e7aad05bfe157a3f6bde827bc643da525d0020885f5e1227",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000038"
          ]
        },
        "23000285": {
          "modelId": "gear:23000285",
          "model": [
            {
              "type": "super",
              "operation": "rate",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Surge's power surges! Increase Super charge rate by 30% for 5 sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000038",
          "sourceHash": "b040a3aa57a1490979df9fc7bac778e49261fd8c190b6bc3773df288385ae3f8",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000038"
          ]
        },
        "23000485": {
          "modelId": "gear:23000485",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "nextDamage"
            },
            {
              "type": "ammo",
              "operation": "refill",
              "condition": "nextDamage"
            }
          ],
          "effects": [],
          "text": "Within the next 2 seconds, Surge consumes 50% of the damage of the next incoming hit and uses the energy to reload x ammo.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000038",
          "sourceHash": "742eab711a6f6c1adb89d443a797abe69a512deb3b66958a7226730b6cf9a3f1",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000038"
          ]
        }
      },
      "modeSlots": false
    },
    "16000039": {
      "signature": "[[[23000302,\"Colette fires a projectile that charms a Brawler for x sec. Uses ammo.\"],[23000457,\"Colette fires a projectile that heals for x% of damage dealt. Uses ammo and can be fired 3 times before cooldown.\"]],[[23000300,\"All enemy Brawlers hit by Colette's charge are carried to the farthest point of the attack! At max distance, they are stunned for 0.2 sec.\"],[23000301,\"Colette takes x% less damage during her Super and gains 30% shield for 3 sec if she hits a Brawler.\"]]]",
      "base": {
        "modelId": "base:16000039",
        "model": [
          {
            "type": "damage",
            "operation": "antiTank",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "objective",
            "condition": "always"
          }
        ],
        "effects": [
          "antiTank"
        ],
        "text": "Shred high-health enemies and objectives.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "6468127044ee7c22d53e9938c5478f3b56cce7ea09b88187262965f40d7de213",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000300": {
          "modelId": "gear:23000300",
          "model": [
            {
              "type": "control",
              "operation": "carry",
              "condition": "super"
            },
            {
              "type": "control",
              "operation": "stun",
              "condition": "superEnd"
            }
          ],
          "effects": [
            "stun"
          ],
          "text": "All enemy Brawlers hit by Colette's charge are carried to the farthest point of the attack! At max distance, they are stunned for 0.2 sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000039",
          "sourceHash": "1b2cd9c59e9e55db0f20c15562e1c85f55aa29c1324b75f069ed46042156aa0a",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000039"
          ]
        },
        "23000301": {
          "modelId": "gear:23000301",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "super"
            },
            {
              "type": "shield",
              "operation": "self",
              "condition": "superHit"
            }
          ],
          "effects": [],
          "text": "Colette takes x% less damage during her Super and gains 30% shield for 3 sec if she hits a Brawler.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000039",
          "sourceHash": "0491ceab034bfea6b964e1e4ae4eed0712d5291253e9f63c438595c85485a5fb",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000039"
          ]
        },
        "23000302": {
          "modelId": "gear:23000302",
          "model": [
            {
              "type": "control",
              "operation": "charm",
              "condition": "hit"
            },
            {
              "type": "cost",
              "operation": "ammo",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Colette fires a projectile that charms a Brawler for x sec. Uses ammo.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000039",
          "sourceHash": "c03eda82c29be6f22a9438e88be53331a5f4d677ec4608cea88560a47b5fccbb",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000039"
          ]
        },
        "23000457": {
          "modelId": "gear:23000457",
          "model": [
            {
              "type": "heal",
              "operation": "lifesteal",
              "condition": "hit"
            },
            {
              "type": "cost",
              "operation": "ammo",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Colette fires a projectile that heals for x% of damage dealt. Uses ammo and can be fired 3 times before cooldown.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000039",
          "sourceHash": "224b34d5bb2098917a274828631a22fc59aa6d3f6d9ffd72663f8ad9537f8b14",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000039"
          ]
        }
      },
      "modeSlots": false
    },
    "16000040": {
      "signature": "[[[23000309,\"Amber summons an Oil barrel with x health, spilling oil when destroyed.\"],[23000488,\"Amber creates x orbiting flames around her for x seconds, dealing x damage on hit.\"]],[[23000307,\"Amber's Fire Fluid becomes sticky, attaching to Brawlers and leaving a trail of oil while they move.\"],[23000308,\"Amber reloads x% of her fire-breathing when an enemy takes fire damage.\"]]]",
      "base": {
        "modelId": "base:16000040",
        "model": [
          {
            "type": "terrain",
            "operation": "burnBush",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "burn",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Destroy bushes and control space with fire.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "b63399327a3bde83afae7a2b3bddcd7adbf7ade6a54182eaf90bc6861046e3cd",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000307": {
          "modelId": "gear:23000307",
          "model": [
            {
              "type": "resource",
              "operation": "oilTrail",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "Amber's Fire Fluid becomes sticky, attaching to Brawlers and leaving a trail of oil while they move.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000040",
          "sourceHash": "4cd700eceab8d53866514855198bc717f79fd47399a119cee1e2ee623e568e94",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000040"
          ]
        },
        "23000308": {
          "modelId": "gear:23000308",
          "model": [
            {
              "type": "ammo",
              "operation": "refill",
              "condition": "burnDamage"
            }
          ],
          "effects": [],
          "text": "Amber reloads x% of her fire-breathing when an enemy takes fire damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000040",
          "sourceHash": "09258b1fc3cb0e22fea75dbec60b38ae862866eac8c814757de20cbe162bc312",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000040"
          ]
        },
        "23000309": {
          "modelId": "gear:23000309",
          "model": [
            {
              "type": "summon",
              "operation": "oil",
              "condition": "always"
            },
            {
              "type": "resource",
              "operation": "oilSpread",
              "condition": "destroyed"
            }
          ],
          "effects": [],
          "text": "Amber summons an Oil barrel with x health, spilling oil when destroyed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000040",
          "sourceHash": "f156daf372dae7310346d7f14337d9992470466a333baa6ddc1f6a61009dcafd",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000040"
          ]
        },
        "23000488": {
          "modelId": "gear:23000488",
          "model": [
            {
              "type": "damage",
              "operation": "orbit",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Amber creates x orbiting flames around her for x seconds, dealing x damage on hit.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000040",
          "sourceHash": "3d621e0aceb5e5920d090697038d1ca4086b889b0f00a98cd14eb0d94316d03c",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000040"
          ]
        }
      },
      "modeSlots": false
    },
    "16000041": {
      "signature": "[[[23000326,\"Lou shields himself with ice, becoming invulnerable for x seconds.\"],[23000400,\"Instantly adds x% freeze meter to opponents inside Lou's Super.\"]],[[23000324,\"Opponents standing on Lou's Super area get frozen x% faster.\"],[23000325,\"Opponents lose up to x% of their damage based on how frozen they are from Lou's attacks.\"]]]",
      "base": {
        "modelId": "base:16000041",
        "model": [
          {
            "type": "control",
            "operation": "freeze",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [
          "stun"
        ],
        "text": "Control the map with a huge freeze.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "41322524b93d5ce61875a063b23c6a63b2bbdd57a896b4b3dbdf857430b8afdf",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000324": {
          "modelId": "gear:23000324",
          "model": [
            {
              "type": "control",
              "operation": "freezeRate",
              "condition": "superArea"
            }
          ],
          "effects": [],
          "text": "Opponents standing on Lou's Super area get frozen x% faster.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000041",
          "sourceHash": "614507c66ea924409b57d3277f53db51f751d08381a4d640b9cb066f1f07b706",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000041"
          ]
        },
        "23000325": {
          "modelId": "gear:23000325",
          "model": [
            {
              "type": "control",
              "operation": "damageReduction",
              "condition": "freeze"
            }
          ],
          "effects": [],
          "text": "Opponents lose up to x% of their damage based on how frozen they are from Lou's attacks.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000041",
          "sourceHash": "428eeb6ec9bef19d4b320182ca7cd23954942630b12418de5719516a1b6c0fbf",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000041"
          ]
        },
        "23000326": {
          "modelId": "gear:23000326",
          "model": [
            {
              "type": "defense",
              "operation": "invulnerable",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Lou shields himself with ice, becoming invulnerable for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000041",
          "sourceHash": "2300e23e9f9841083fd6d0d7e936567a32995f4e182fa655a57df34a8fae0d56",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000041"
          ]
        },
        "23000400": {
          "modelId": "gear:23000400",
          "model": [
            {
              "type": "resource",
              "operation": "freezeGain",
              "condition": "superArea"
            }
          ],
          "effects": [],
          "text": "Instantly adds x% freeze meter to opponents inside Lou's Super.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000041",
          "sourceHash": "569726acf866ba30c155604f83d76e6e1bccfbfe6c401335c83e346d9919c24b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000041"
          ]
        }
      },
      "modeSlots": false
    },
    "16000042": {
      "signature": "[[[23000333,\"Byron uses one of his shots to heal himself x per second for x seconds.\"],[23000461,\"Byron's next attack shoots x darts instead of one, each dealing x% less damage and x% less healing.\"]],[[23000331,\"Byron's Super will also cause opponents to receive x% less healing from any source for x seconds.\"],[23000332,\"Every x seconds the next basic attack will pierce through targets.\"]]]",
      "base": {
        "modelId": "base:16000042",
        "model": [
          {
            "type": "heal",
            "operation": "ally",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "poison",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "snipe",
            "condition": "always"
          }
        ],
        "effects": [
          "healAlly",
          "poison"
        ],
        "text": "Heal teammates or snipe with poison.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "41b9bb190e136d6a606a187dc085377c2f4a9f6bd97d1c86757f8199270703e0",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000331": {
          "modelId": "gear:23000331",
          "model": [
            {
              "type": "control",
              "operation": "antiHeal",
              "condition": "superHit"
            }
          ],
          "effects": [
            "antiHeal"
          ],
          "text": "Byron's Super will also cause opponents to receive x% less healing from any source for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000042",
          "sourceHash": "75747be2dbe859fb728b6835814ca5b5114234f98dc187a51890d1f7ca97b6b6",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000042"
          ]
        },
        "23000332": {
          "modelId": "gear:23000332",
          "model": [
            {
              "type": "projectile",
              "operation": "pierce",
              "condition": "periodic"
            }
          ],
          "effects": [],
          "text": "Every x seconds the next basic attack will pierce through targets.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000042",
          "sourceHash": "bb1935874dc93af4a21f720a76f9c63670688927abc5fd4843ec91a6df9b8afd",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000042"
          ]
        },
        "23000333": {
          "modelId": "gear:23000333",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "ammo",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Byron uses one of his shots to heal himself x per second for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000042",
          "sourceHash": "666b92cdf132ce49734e1f5cd0e663626bf405e6027e79a218c5222561d33e16",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000042"
          ]
        },
        "23000461": {
          "modelId": "gear:23000461",
          "model": [
            {
              "type": "projectile",
              "operation": "count",
              "condition": "nextAttack"
            },
            {
              "type": "cost",
              "operation": "projectileDamage",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "projectileHeal",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Byron's next attack shoots x darts instead of one, each dealing x% less damage and x% less healing.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000042",
          "sourceHash": "da68a15159a4fefb8e9f58e9793db38e8e5584a135fd6c65a6beb79e91e59ce4",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000042"
          ]
        }
      },
      "modeSlots": false
    },
    "16000043": {
      "signature": "[[[23000340,\"Edgar's scarf grabs the closest Brawler and he jumps behind them. His scarf can also pull him towards walls.\"],[23000403,\"Edgar gets a shield that protects him from the next x damage. The shield gets weaker over time.\"]],[[23000338,\"Edgar's Super and Let's Fly Gadget will also deal x damage to nearby enemies upon landing, or x damage on a direct hit.\"],[23000339,\"Edgar receives 30% more healing from damage he deals.\"]]]",
      "base": {
        "modelId": "base:16000043",
        "model": [
          {
            "type": "mobility",
            "operation": "jump",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "isolate",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Jump to take out isolated enemies.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "8cba2505de82f1d392d29d93b99b471ce3d159ab94ee66549997b8f8fdb66624",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000338": {
          "modelId": "gear:23000338",
          "model": [
            {
              "type": "damage",
              "operation": "landing",
              "condition": "superOrGadget"
            }
          ],
          "effects": [],
          "text": "Edgar's Super and Let's Fly Gadget will also deal x damage to nearby enemies upon landing, or x damage on a direct hit.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000043",
          "sourceHash": "64a51fc1e088f49f583cb78e9033f692e242ff0a33bd7b2a8e2183077ef0a586",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000043"
          ]
        },
        "23000339": {
          "modelId": "gear:23000339",
          "model": [
            {
              "type": "heal",
              "operation": "lifestealBoost",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Edgar receives 30% more healing from damage he deals.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000043",
          "sourceHash": "2a8954dc78b104131056c76a611c0e0342c0e4da425835a66db8976e43ba7e7f",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000043"
          ]
        },
        "23000340": {
          "modelId": "gear:23000340",
          "model": [
            {
              "type": "mobility",
              "operation": "grapple",
              "condition": "enemyOrWall"
            }
          ],
          "effects": [],
          "text": "Edgar's scarf grabs the closest Brawler and he jumps behind them. His scarf can also pull him towards walls.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000043",
          "sourceHash": "62b8b34b6483b3649d30a11e6ec9e3515dcb9a2392ed5cc53d313c866c99dcae",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000043"
          ]
        },
        "23000403": {
          "modelId": "gear:23000403",
          "model": [
            {
              "type": "shield",
              "operation": "selfDecay",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Edgar gets a shield that protects him from the next x damage. The shield gets weaker over time.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000043",
          "sourceHash": "7b4f249b74c4ae9df728c33d5d8064ddfa0d1ae8780558fea59f53081a0cf199",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000043"
          ]
        }
      },
      "modeSlots": false
    },
    "16000044": {
      "signature": "[[[23000347,\"Ruffs throws down x sandbags as cover. Each one has x% of Ruffs' max health.\"],[23000402,\"Ruffs calls a barrage around the nearest opponent, dealing x damage with each hit.\"]],[[23000345,\"Supply Drop now includes a bomb that adds x% more damage to the drop and also allows it to destroy walls.\"],[23000346,\"Friendly Brawlers have their maximum health increased by x every second that they are in range of this ability while it's active.\"]]]",
      "base": {
        "modelId": "base:16000044",
        "model": [
          {
            "type": "support",
            "operation": "buff",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "poke",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Buff teammates and poke enemies.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "57ac55f938ea95476afa9cb728dc4de8c9db6b1f4c8544b7cfb8138b816c6cb0",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000345": {
          "modelId": "gear:23000345",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "super"
            },
            {
              "type": "terrain",
              "operation": "destroy",
              "condition": "super"
            }
          ],
          "effects": [
            "wallBreak"
          ],
          "text": "Supply Drop now includes a bomb that adds x% more damage to the drop and also allows it to destroy walls.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000044",
          "sourceHash": "59991e52fc2f288c8cd4723dce38066d00c34fa5c6074df5a1b49194a612d19c",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000044"
          ]
        },
        "23000346": {
          "modelId": "gear:23000346",
          "model": [
            {
              "type": "support",
              "operation": "maxHealth",
              "condition": "allyNear"
            }
          ],
          "effects": [],
          "text": "Friendly Brawlers have their maximum health increased by x every second that they are in range of this ability while it's active.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000044",
          "sourceHash": "961704e77189c2ade742d9e5bd4016a4f9ee1fde41eb0202c4972d2f6a54c4df",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000044"
          ]
        },
        "23000347": {
          "modelId": "gear:23000347",
          "model": [
            {
              "type": "defense",
              "operation": "cover",
              "condition": "always"
            },
            {
              "type": "summon",
              "operation": "sandbag",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Ruffs throws down x sandbags as cover. Each one has x% of Ruffs' max health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000044",
          "sourceHash": "f547b0002723758ccfec12b7de5ed2f779e1aa31d0cc6f03471e4a7aaabd21ee",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000044"
          ]
        },
        "23000402": {
          "modelId": "gear:23000402",
          "model": [
            {
              "type": "damage",
              "operation": "barrage",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Ruffs calls a barrage around the nearest opponent, dealing x damage with each hit.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000044",
          "sourceHash": "fbd545697f3adecd82473bb4f72a91d9c3a188b544d3c687118f593daf50178e",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000044"
          ]
        }
      },
      "modeSlots": false
    },
    "16000045": {
      "signature": "[[[23000364,\"Stu drops a booster that makes himself, his teammates and other allies move faster while inside its area of effect.\"],[23000401,\"Stu's next Super can bash through obstacles, making debris fly forward. Each piece of debris deals x damage to any opponent it hits.\"]],[[23000362,\"Stu's Nitro Boost Super dash distance increases by x%.\"],[23000363,\"Using his Nitro Boost Super restores x of Stu's health.\"]]]",
      "base": {
        "modelId": "base:16000045",
        "model": [
          {
            "type": "mobility",
            "operation": "dash",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use your dash to get close or dodge.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "f06316167e3cca6ce9bc929ff09a1c56107086b6fda8f780375639cede3b5cc2",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000362": {
          "modelId": "gear:23000362",
          "model": [
            {
              "type": "mobility",
              "operation": "dashRange",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Stu's Nitro Boost Super dash distance increases by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000045",
          "sourceHash": "d3edce9a532c9f9f945c8dbc25b1282072e0c234b7f97b6995e78bfb541ee030",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000045"
          ]
        },
        "23000363": {
          "modelId": "gear:23000363",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Using his Nitro Boost Super restores x of Stu's health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000045",
          "sourceHash": "5807584a24e4ee6e8d2768a2989a890340442fa9c142c662112501da3ec9dea5",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000045"
          ]
        },
        "23000364": {
          "modelId": "gear:23000364",
          "model": [
            {
              "type": "support",
              "operation": "speed",
              "condition": "area"
            },
            {
              "type": "summon",
              "operation": "booster",
              "condition": "always"
            }
          ],
          "effects": [
            "teamSpeed"
          ],
          "text": "Stu drops a booster that makes himself, his teammates and other allies move faster while inside its area of effect.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000045",
          "sourceHash": "b7130b9305808edad35528a4855ac046cb524ef63c5d68dadf5c8098f6831757",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000045"
          ]
        },
        "23000401": {
          "modelId": "gear:23000401",
          "model": [
            {
              "type": "terrain",
              "operation": "destroy",
              "condition": "nextSuper"
            },
            {
              "type": "damage",
              "operation": "debris",
              "condition": "always"
            }
          ],
          "effects": [
            "wallBreak"
          ],
          "text": "Stu's next Super can bash through obstacles, making debris fly forward. Each piece of debris deals x damage to any opponent it hits.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000045",
          "sourceHash": "00a950514f8a59a0c6900db023280f3120819746163b76f98ac6f3b0f92cbfcb",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000045"
          ]
        }
      },
      "modeSlots": false
    },
    "16000046": {
      "signature": "[[[23000371,\"Belle places a trap on the ground that will explode when triggered by an opponent. The trap deals x damage, and slows down anyone within its blast radius for x seconds.\"],[23000463,\"Belle's next Electro-Bolt bounces from walls.\"]],[[23000369,\"Belle gains a x% shield whenever her Electro-Bolts hit a target.\"],[23000370,\"Getting marked by Belle's Super prevents the opponent from reloading their attack for x seconds.\"]]]",
      "base": {
        "modelId": "base:16000046",
        "model": [
          {
            "type": "damage",
            "operation": "snipe",
            "condition": "always"
          },
          {
            "type": "projectile",
            "operation": "chain",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Snipe with bouncing bullets.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "8ed0ddf8c8934a1d59ab62e97c78b7272805ef99a0a590bd4aac633de6a68cfd",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000369": {
          "modelId": "gear:23000369",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "Belle gains a x% shield whenever her Electro-Bolts hit a target.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000046",
          "sourceHash": "e38b83e1df035bf5aa877ea35663bcceee95408dbf60a48bb55928e28d3c4a56",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000046"
          ]
        },
        "23000370": {
          "modelId": "gear:23000370",
          "model": [
            {
              "type": "ammo",
              "operation": "reloadBlock",
              "condition": "superMark"
            }
          ],
          "effects": [],
          "text": "Getting marked by Belle's Super prevents the opponent from reloading their attack for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000046",
          "sourceHash": "749b6046decbaecaf3ade10dfbe53913973b509cf647c988065f86f6e8a57b5e",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000046"
          ]
        },
        "23000371": {
          "modelId": "gear:23000371",
          "model": [
            {
              "type": "control",
              "operation": "trapSlow",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "trap",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Belle places a trap on the ground that will explode when triggered by an opponent. The trap deals x damage, and slows down anyone within its blast radius for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000046",
          "sourceHash": "d9ed76197a2cbc0903b510d72e9318fa371de47c8fc0fe0fa3eb72162f352477",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000046"
          ]
        },
        "23000463": {
          "modelId": "gear:23000463",
          "model": [
            {
              "type": "projectile",
              "operation": "bounce",
              "condition": "nextAttack"
            }
          ],
          "effects": [
            "wallDependent"
          ],
          "text": "Belle's next Electro-Bolt bounces from walls.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000046",
          "sourceHash": "a1f20fd484d018d62407df79007c8bc616d0835b8f38c92bb6dfc7bb2132d426",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000046"
          ]
        }
      },
      "modeSlots": false
    },
    "16000047": {
      "signature": "[[[23000378,\"Squeak's next Sticky Blomb deals x% more damage and has x% longer range.\"],[23000462,\"Squeak's next Sticky Blomb leaves a residue area behind after exploding, slowing down enemies and giving allies sight into bushes for x seconds.\"]],[[23000376,\"Each opponent within the area of a Sticky Blomb's explosion increases the Blomb's damage by x%.\"],[23000377,\"Secondary Sticky Blomb explosions from Squeak's Super also slow down opponents for x seconds.\"]]]",
      "base": {
        "modelId": "base:16000047",
        "model": [
          {
            "type": "projectile",
            "operation": "wallSplash",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "explosion",
            "condition": "always"
          }
        ],
        "effects": [
          "overWalls"
        ],
        "text": "Hit enemies through walls with explosions!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "2a8f2c25b69fbf19a124d2bc4c0c164feefb2d6c4f6f9c18a59e7b24e2bfb00d",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000376": {
          "modelId": "gear:23000376",
          "model": [
            {
              "type": "damage",
              "operation": "stacking",
              "condition": "groupedEnemy"
            }
          ],
          "effects": [],
          "text": "Each opponent within the area of a Sticky Blomb's explosion increases the Blomb's damage by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000047",
          "sourceHash": "acd967a2a91a51ba81e9e9fedb2fd9ce2ca25b040ae24aed814e16b7e6c1f795",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000047"
          ]
        },
        "23000377": {
          "modelId": "gear:23000377",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "superExplosion"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Secondary Sticky Blomb explosions from Squeak's Super also slow down opponents for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000047",
          "sourceHash": "cfb15efd2c170174efba9cc4464ed44c0c91e379f4be3bdcd9cdd59cc2d42879",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000047"
          ]
        },
        "23000378": {
          "modelId": "gear:23000378",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "nextAttack"
            },
            {
              "type": "projectile",
              "operation": "range",
              "condition": "nextAttack"
            }
          ],
          "effects": [
            "rangeBoost"
          ],
          "text": "Squeak's next Sticky Blomb deals x% more damage and has x% longer range.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000047",
          "sourceHash": "c6fd5fe287ab755e1eda3a4b691b9ec6bb526f14ccda849d7a800af02d38e37b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000047"
          ]
        },
        "23000462": {
          "modelId": "gear:23000462",
          "model": [
            {
              "type": "control",
              "operation": "slowArea",
              "condition": "nextAttack"
            },
            {
              "type": "vision",
              "operation": "allyReveal",
              "condition": "nextAttack"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Squeak's next Sticky Blomb leaves a residue area behind after exploding, slowing down enemies and giving allies sight into bushes for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000047",
          "sourceHash": "5f6bc3267311adaaa7ccfdc32c93d26dba7aff0db54d59eb87280c412bc0b603",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000047"
          ]
        }
      },
      "modeSlots": false
    },
    "16000048": {
      "signature": "[[[23000385,\"Grom ejects a Watchtower from his Grom Bomb that gives all allies sight into bushes over a large area. The watchtower slowly loses health over time.\"],[23000460,\"Grom's next attack throws x Buds in rapid succession.\"]],[[23000383,\"When Grom's Super is fully charged, he gains +15% faster movement speed!\"],[23000384,\"The split from Grom's main attack deals up to +x% extra damage at max distance.\"]]]",
      "base": {
        "modelId": "base:16000048",
        "model": [
          {
            "type": "terrain",
            "operation": "overWalls",
            "condition": "always"
          },
          {
            "type": "terrain",
            "operation": "coverUse",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "bombard",
            "condition": "always"
          }
        ],
        "effects": [
          "overWalls",
          "wallDependent"
        ],
        "text": "Bombard safely from behind walls.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "4bc2f36636b9f75e0b91e5ab3a699083f00ffa0fc709502d6dbbd3830ce3426f",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000383": {
          "modelId": "gear:23000383",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "superReady"
            }
          ],
          "effects": [],
          "text": "When Grom's Super is fully charged, he gains +15% faster movement speed!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000048",
          "sourceHash": "7605e617eb0c72ba74a12680879d4d41cc2ee4dd941cb33726131a52680d057a",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000048"
          ]
        },
        "23000384": {
          "modelId": "gear:23000384",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "maxRange"
            }
          ],
          "effects": [],
          "text": "The split from Grom's main attack deals up to +x% extra damage at max distance.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000048",
          "sourceHash": "0f8c1d901654683749b868e6d681b0eba4850b72cb3e72a2116ef4aed3f09beb",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000048"
          ]
        },
        "23000385": {
          "modelId": "gear:23000385",
          "model": [
            {
              "type": "summon",
              "operation": "vision",
              "condition": "always"
            },
            {
              "type": "vision",
              "operation": "allyReveal",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Grom ejects a Watchtower from his Grom Bomb that gives all allies sight into bushes over a large area. The watchtower slowly loses health over time.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000048",
          "sourceHash": "89f741d32a5a47217fe17591f6b092656b6e4f7960507a7dc20872f45ee8c8d0",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000048"
          ]
        },
        "23000460": {
          "modelId": "gear:23000460",
          "model": [
            {
              "type": "projectile",
              "operation": "burstCount",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "Grom's next attack throws x Buds in rapid succession.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000048",
          "sourceHash": "d759bc1f15335f5c3ddee96ce6b17ba155b82238e58076392ac929c4fee02c69",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000048"
          ]
        }
      },
      "modeSlots": false
    },
    "16000049": {
      "signature": "[[[23000392,\"Instantly fills the Super meter, but the next Torpedo Throw doesn't stun opponents.\"],[23000490,\"Buzz can see into all bushes in his Super charging area for x seconds.\"]],[[23000390,\"The minimum duration of Buzz's Super stun is increased by x seconds.\"],[23000391,\"Buzz's Super charging area is increased by x%.\"]]]",
      "base": {
        "modelId": "base:16000049",
        "model": [
          {
            "type": "mobility",
            "operation": "approach",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "stun",
            "condition": "always"
          }
        ],
        "effects": [
          "stun"
        ],
        "text": "Travel around the map and stun enemies.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "e8d82439b8128d991aaf05b39bc6a6bbcb1b42ba924c7934600dfec2be5c1ed8",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000390": {
          "modelId": "gear:23000390",
          "model": [
            {
              "type": "control",
              "operation": "stunDuration",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "The minimum duration of Buzz's Super stun is increased by x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000049",
          "sourceHash": "60333bf9a4665fc35265c582de27451bc589ff1fb1b263fcf0b76933ba2da206",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000049"
          ]
        },
        "23000391": {
          "modelId": "gear:23000391",
          "model": [
            {
              "type": "super",
              "operation": "radius",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Buzz's Super charging area is increased by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000049",
          "sourceHash": "5ca094c1010304f9376be2fd073961cb498ca6323b511e034c87203f54b98c60",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000049"
          ]
        },
        "23000392": {
          "modelId": "gear:23000392",
          "model": [
            {
              "type": "super",
              "operation": "charge",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "nextSuperStun",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Instantly fills the Super meter, but the next Torpedo Throw doesn't stun opponents.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000049",
          "sourceHash": "0a84d597d7fceff1e71c641d7dc928758f653ef63c4037bc42e456d7b149f97a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000049"
          ]
        },
        "23000490": {
          "modelId": "gear:23000490",
          "model": [
            {
              "type": "vision",
              "operation": "reveal",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Buzz can see into all bushes in his Super charging area for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000049",
          "sourceHash": "c30ea99f46a2a626684d8471bd555fb332343aea228e8858c6ba3c4b02137e78",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000049"
          ]
        }
      },
      "modeSlots": false
    },
    "16000050": {
      "signature": "[[[23000399,\"Griff throws a firecracker-filled piggy bank that explodes after a short delay, destroying obstacles and dealing x damage to opponents within range.\"],[23000487,\"Griff throws a shower of coins at target area, dealing x damage per sec to opponents inside.\"]],[[23000397,\"Griff gains a slightly wider attack and adds another row of coins to the coin toss.\"],[23000398,\"Every 2 seconds, Griff regains up to 15% of his missing health.\"]]]",
      "base": {
        "modelId": "base:16000050",
        "model": [
          {
            "type": "damage",
            "operation": "burst",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Burst down enemies from mid-range.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "0ab93f70edd35d1d6b81e2e92a13b8a40a050703b401e919b0a15e2b7aac61e4",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000397": {
          "modelId": "gear:23000397",
          "model": [
            {
              "type": "projectile",
              "operation": "spread",
              "condition": "always"
            },
            {
              "type": "projectile",
              "operation": "count",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Griff gains a slightly wider attack and adds another row of coins to the coin toss.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000050",
          "sourceHash": "279f18c3dfd9bf52b11615f6e960ebdf2c99b9bf8de78f199acb6aa54d60b737",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000050"
          ]
        },
        "23000398": {
          "modelId": "gear:23000398",
          "model": [
            {
              "type": "heal",
              "operation": "missingHealth",
              "condition": "periodic"
            }
          ],
          "effects": [],
          "text": "Every 2 seconds, Griff regains up to 15% of his missing health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000050",
          "sourceHash": "1ae98442ded9a4f69e3af4cbb7078ccf87b28b5cb3a3d0b80dc15e021ad4553a",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000050"
          ]
        },
        "23000399": {
          "modelId": "gear:23000399",
          "model": [
            {
              "type": "damage",
              "operation": "delayedArea",
              "condition": "always"
            },
            {
              "type": "terrain",
              "operation": "destroy",
              "condition": "always"
            }
          ],
          "effects": [
            "wallBreak"
          ],
          "text": "Griff throws a firecracker-filled piggy bank that explodes after a short delay, destroying obstacles and dealing x damage to opponents within range.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000050",
          "sourceHash": "7362dac3346d79e37ede18acc79a377712dde7fd5d70e233c11f9279199fe0f6",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000050"
          ]
        },
        "23000487": {
          "modelId": "gear:23000487",
          "model": [
            {
              "type": "damage",
              "operation": "periodicArea",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Griff throws a shower of coins at target area, dealing x damage per sec to opponents inside.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000050",
          "sourceHash": "45950068bdd8ea19052b95ecf00f9c72972be169b10729c7cadbd09ff0820989",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000050"
          ]
        }
      },
      "modeSlots": false
    },
    "16000051": {
      "signature": "[[[23000416,\"Though furious, Ash has to collect himself. A full Rage meter will recover x health when this Gadget is popped - less Rage, less recovery.\"],[23000465,\"Ash loses x% health and instantly gains x% rage.\"]],[[23000414,\"When hitting an opponent with his attack charges full, Ash gets even more angry. His Rage goes up by x%.\"],[23000415,\"Ash progressively gains up to x% faster reload speed, equal to how enraged he's become.\"]]]",
      "base": {
        "modelId": "base:16000051",
        "model": [
          {
            "type": "summon",
            "operation": "rats",
            "condition": "always"
          },
          {
            "type": "resource",
            "operation": "rage",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Unleash an army of rats!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "b0d5cee066f0065a512d3e4d92566663dd261b9f7a5b770b78a2a8906a7498f5",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000414": {
          "modelId": "gear:23000414",
          "model": [
            {
              "type": "resource",
              "operation": "rageGain",
              "condition": "fullAmmoHit"
            }
          ],
          "effects": [],
          "text": "When hitting an opponent with his attack charges full, Ash gets even more angry. His Rage goes up by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000051",
          "sourceHash": "b1d3fa36b62ff57436c30260c0931d34f2e49c81b77c72ad0572f4c84410da28",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000051"
          ]
        },
        "23000415": {
          "modelId": "gear:23000415",
          "model": [
            {
              "type": "ammo",
              "operation": "reload",
              "condition": "rage"
            }
          ],
          "effects": [],
          "text": "Ash progressively gains up to x% faster reload speed, equal to how enraged he's become.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000051",
          "sourceHash": "7f832a6466d735f1002e0d8116800385b8b010509d249b52168a18a01999131f",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000051"
          ]
        },
        "23000416": {
          "modelId": "gear:23000416",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "rage"
            },
            {
              "type": "cost",
              "operation": "rage",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Though furious, Ash has to collect himself. A full Rage meter will recover x health when this Gadget is popped - less Rage, less recovery.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000051",
          "sourceHash": "5db9753cbb90c9dc51075557d3e2d1a3b5f95a4fcfc40de3ead2a9d422aec28e",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000051"
          ]
        },
        "23000465": {
          "modelId": "gear:23000465",
          "model": [
            {
              "type": "resource",
              "operation": "rageGain",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "health",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Ash loses x% health and instantly gains x% rage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000051",
          "sourceHash": "7f7fb0cdc45adfa54ff7c57ce458c5db0aeeb257574e73c7b60f92fcea21ae97",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000051"
          ]
        }
      },
      "modeSlots": false
    },
    "16000052": {
      "signature": "[[[23000423,\"Heal the Mecha by x health per second for x seconds. Can only be used in mecha form.\"],[23000489,\"Meg ejects from the Mecha, launching it forward, dealing x damage on the way. Charges Super after during the next x seconds.\"]],[[23000421,\"Meg is protected by a x% shield for x seconds when her Mecha is destroyed.\"],[23000422,\"The Mecha recovers x health for each enemy hit with Feel the Steel (Super in Mech).\"]]]",
      "base": {
        "modelId": "base:16000052",
        "model": [
          {
            "type": "transform",
            "operation": "mecha",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use the mecha for space, then run!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "435c7d9bb78ef865a913b8b453f8a71916764509eababdd4cd5a0df79fb656a1",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000421": {
          "modelId": "gear:23000421",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "mechaDestroyed"
            }
          ],
          "effects": [],
          "text": "Meg is protected by a x% shield for x seconds when her Mecha is destroyed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000052",
          "sourceHash": "6b4e05af6a8a2e7b7a6db75e67315cee37ed3a10e58c80648b8247fc18197ead",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000052"
          ]
        },
        "23000422": {
          "modelId": "gear:23000422",
          "model": [
            {
              "type": "heal",
              "operation": "mecha",
              "condition": "superHit"
            }
          ],
          "effects": [],
          "text": "The Mecha recovers x health for each enemy hit with Feel the Steel (Super in Mech).",
          "source": "https://api.brawlapi.com/v1/brawlers/16000052",
          "sourceHash": "389c6283a095b1c30fced13c7084efcaf1dd882ffc5bedbbe040043b65e92046",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000052"
          ]
        },
        "23000423": {
          "modelId": "gear:23000423",
          "model": [
            {
              "type": "heal",
              "operation": "mecha",
              "condition": "form"
            }
          ],
          "effects": [],
          "text": "Heal the Mecha by x health per second for x seconds. Can only be used in mecha form.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000052",
          "sourceHash": "3d9fb3bc60644e0872ef11a6cc2433d2ee72966c610197f50666725ab7f71f13",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000052"
          ]
        },
        "23000489": {
          "modelId": "gear:23000489",
          "model": [
            {
              "type": "damage",
              "operation": "launchMecha",
              "condition": "always"
            },
            {
              "type": "transform",
              "operation": "eject",
              "condition": "always"
            },
            {
              "type": "super",
              "operation": "rate",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Meg ejects from the Mecha, launching it forward, dealing x damage on the way. Charges Super after during the next x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000052",
          "sourceHash": "5d29762eccaacf37dab5a90679df00de674bf11d5df814f218a2a3d448b2ed3a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000052"
          ]
        }
      },
      "modeSlots": false
    },
    "16000053": {
      "signature": "[[[23000433,\"Lola's Ego stops moving to strike a pose! Gaining a x% shield for x seconds.\"],[23000456,\"Lola and her Ego switch locations, both recovering x health.\"]],[[23000431,\"When down to her last round, Lola deals an extra x% damage.\"],[23000432,\"Projectiles from Lola's Ego will heal allies that are caught in its path by x health.\"]]]",
      "base": {
        "modelId": "base:16000053",
        "model": [
          {
            "type": "summon",
            "operation": "ego",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "multiLane",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Control multiple lanes with Ego!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "f568d7f7ea52311d91c0f0d30d4752207c4896d0b86d7c8b9845f80766a3efed",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000431": {
          "modelId": "gear:23000431",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "lastAmmo"
            }
          ],
          "effects": [],
          "text": "When down to her last round, Lola deals an extra x% damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000053",
          "sourceHash": "cb726bbb26481263ed4d3260f1f9441905e72084e5e41d2c0379d4d11dadda9b",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000053"
          ]
        },
        "23000432": {
          "modelId": "gear:23000432",
          "model": [
            {
              "type": "heal",
              "operation": "ally",
              "condition": "summonHit"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Projectiles from Lola's Ego will heal allies that are caught in its path by x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000053",
          "sourceHash": "08e388a4c949164e9fad4cf16e8cc44b4e6f7675e5401936a9aa1a68464e8876",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000053"
          ]
        },
        "23000433": {
          "modelId": "gear:23000433",
          "model": [
            {
              "type": "summon",
              "operation": "shield",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "summonMovement",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Lola's Ego stops moving to strike a pose! Gaining a x% shield for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000053",
          "sourceHash": "4c87591eb8c23bfa59b3a36ee1edc6f75efcb49757c81baecd2d8766ef074edf",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000053"
          ]
        },
        "23000456": {
          "modelId": "gear:23000456",
          "model": [
            {
              "type": "mobility",
              "operation": "swap",
              "condition": "summon"
            },
            {
              "type": "heal",
              "operation": "self",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "summon",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Lola and her Ego switch locations, both recovering x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000053",
          "sourceHash": "ce006958ee4f715a1a1815532bdcf65264702451da946c1f27d917e683bb94b6",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000053"
          ]
        }
      },
      "modeSlots": false
    },
    "16000054": {
      "signature": "[[[23000440,\"Fang tosses a handful of corn kernels into the air, making it rain popcorn! Each kernel pop deals x damage.\"],[23000464,\"Fang spins and hits all enemies around him, stunning them for x seconds.\"]],[[23000438,\"When Fang defeats an enemy Brawler with his Super, it's recharged instantly, allowing him to use his Super again!\"],[23000439,\"Reduce x damage from incoming hits once every x seconds. Maximum reduction is x% of the incoming damage.\"]]]",
      "base": {
        "modelId": "base:16000054",
        "model": [
          {
            "type": "damage",
            "operation": "poke",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "dive",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Poke with range then jump in to finish.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "30c790ea592c4bd083c9f9370e7bd110b2507569eafd258b6cadce33dc004149",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000438": {
          "modelId": "gear:23000438",
          "model": [
            {
              "type": "super",
              "operation": "refund",
              "condition": "superKill"
            }
          ],
          "effects": [],
          "text": "When Fang defeats an enemy Brawler with his Super, it's recharged instantly, allowing him to use his Super again!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000054",
          "sourceHash": "dff056b66902d6240e88e91ee648834992cb7595e8df6461891d79ff1456c793",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000054"
          ]
        },
        "23000439": {
          "modelId": "gear:23000439",
          "model": [
            {
              "type": "defense",
              "operation": "flatReduction",
              "condition": "periodic"
            }
          ],
          "effects": [],
          "text": "Reduce x damage from incoming hits once every x seconds. Maximum reduction is x% of the incoming damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000054",
          "sourceHash": "7a894bfd0e9b0d31a5cf235fe16eb32a1fd89d22be61a038c812674af1fcf442",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000054"
          ]
        },
        "23000440": {
          "modelId": "gear:23000440",
          "model": [
            {
              "type": "damage",
              "operation": "area",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Fang tosses a handful of corn kernels into the air, making it rain popcorn! Each kernel pop deals x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000054",
          "sourceHash": "e9770e5bbbc6e10adfea762a622a6bc1d445caff8e3ffb6e2c77c193af2b22a7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000054"
          ]
        },
        "23000464": {
          "modelId": "gear:23000464",
          "model": [
            {
              "type": "control",
              "operation": "stun",
              "condition": "enemyNear"
            }
          ],
          "effects": [
            "stun"
          ],
          "text": "Fang spins and hits all enemies around him, stunning them for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000054",
          "sourceHash": "a83ad72866e5ee416895740d3d8b93361a0ee38e1ef0b68addf2fd9a6a219573",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000054"
          ]
        }
      },
      "modeSlots": false
    },
    "16000056": {
      "signature": "[[[23000454,\"Eve jumps away and leaves behind a hatchling.\"],[23000455,\"Hatchlings spawned from an active big egg will now heal allies over time instead of dealing damage.\"]],[[23000452,\"Reverses the order of the eggs shot by her Egg Shooter.\"],[23000453,\"Every x seconds, the next largest egg hitting an enemy of her Egg Shooter will spawn a hatchling.\"]]]",
      "base": {
        "modelId": "base:16000056",
        "model": [
          {
            "type": "terrain",
            "operation": "water",
            "condition": "always"
          },
          {
            "type": "summon",
            "operation": "create",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Walk over water and spawn hatchlings!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "14349776b0b6ccdcb9a78a5a2e0d9cb57adbaa83ac0b31dee4182d5fd49aacfa",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000452": {
          "modelId": "gear:23000452",
          "model": [
            {
              "type": "projectile",
              "operation": "reverseOrder",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Reverses the order of the eggs shot by her Egg Shooter.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000056",
          "sourceHash": "5f2be2e2d467316d18d4730a9b1a3f8f1ce258426c473962ffecb675055609fa",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000056"
          ]
        },
        "23000453": {
          "modelId": "gear:23000453",
          "model": [
            {
              "type": "summon",
              "operation": "create",
              "condition": "periodicBigEggHit"
            }
          ],
          "effects": [],
          "text": "Every x seconds, the next largest egg hitting an enemy of her Egg Shooter will spawn a hatchling.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000056",
          "sourceHash": "b805926c6f724659e87652f4501d542933425d91ea71e8a5b234f48b558e0dd7",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000056"
          ]
        },
        "23000454": {
          "modelId": "gear:23000454",
          "model": [
            {
              "type": "mobility",
              "operation": "jump",
              "condition": "always"
            },
            {
              "type": "summon",
              "operation": "create",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Eve jumps away and leaves behind a hatchling.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000056",
          "sourceHash": "acaa52719fb9caa61300a2421379fcc73f83f95b05b4c1453ceb0326fc8c2c4c",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000056"
          ]
        },
        "23000455": {
          "modelId": "gear:23000455",
          "model": [
            {
              "type": "transform",
              "operation": "summonHealer",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "summonDamage",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Hatchlings spawned from an active big egg will now heal allies over time instead of dealing damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000056",
          "sourceHash": "46e8c36b7accd738c0ced005e9b9fde22ed4782364b64336c4b7621fb7fe4374",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000056"
          ]
        }
      },
      "modeSlots": false
    },
    "16000057": {
      "signature": "[[[23000472,\"Janet deploys a speaker that deals x damage per second to all enemies in the area until it gets destroyed.\"],[23000473,\"Janet's next High Note pushes her back, even over walls. The more focused her attack is, the further she'll be pushed back.\"]],[[23000470,\"While in the air with her jetpack, Janet reveals a large area of bushes around herself.\"],[23000471,\"Janet's attack focuses x% faster.\"]]]",
      "base": {
        "modelId": "base:16000057",
        "model": [
          {
            "type": "mobility",
            "operation": "flight",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "bombs",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Super to drop bombs safely from above!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "debb79ec5d1d54aee7d38ec1c1db2c6bd6f92b8628a5cb29028a4c5c9c132884",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000470": {
          "modelId": "gear:23000470",
          "model": [
            {
              "type": "vision",
              "operation": "reveal",
              "condition": "flight"
            }
          ],
          "effects": [],
          "text": "While in the air with her jetpack, Janet reveals a large area of bushes around herself.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000057",
          "sourceHash": "033ecd375c64590981e0acd7656165b845b0eff17ad6ab281aa5566ea6ef4d11",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000057"
          ]
        },
        "23000471": {
          "modelId": "gear:23000471",
          "model": [
            {
              "type": "projectile",
              "operation": "focusSpeed",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Janet's attack focuses x% faster.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000057",
          "sourceHash": "c88471902e0ff8eb76cccdbac44d744b4e3016a1e29bb04bed2b6a5a1f560259",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000057"
          ]
        },
        "23000472": {
          "modelId": "gear:23000472",
          "model": [
            {
              "type": "summon",
              "operation": "damageArea",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Janet deploys a speaker that deals x damage per second to all enemies in the area until it gets destroyed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000057",
          "sourceHash": "1b248244be30c49374f9a3bca67db52a6a770f3980b080d21b260ddc100880bd",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000057"
          ]
        },
        "23000473": {
          "modelId": "gear:23000473",
          "model": [
            {
              "type": "mobility",
              "operation": "recoilJump",
              "condition": "nextAttack"
            },
            {
              "type": "terrain",
              "operation": "overWalls",
              "condition": "always"
            }
          ],
          "effects": [
            "overWalls"
          ],
          "text": "Janet's next High Note pushes her back, even over walls. The more focused her attack is, the further she'll be pushed back.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000057",
          "sourceHash": "1659e9043f834a43a9fb31e545730b2688d7241c3072912975f54d4e55f83589",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000057"
          ]
        }
      },
      "modeSlots": false
    },
    "16000058": {
      "signature": "[[[23000480,\"Clyde's movement and reload speed are increased by 30% for 5 seconds.\"],[23000481,\"Bonnie dashes forward, knocking back enemies and dealing x damage on hit.\"]],[[23000478,\"The range of Bonnie's Star Launcher is increased by x%.\"],[23000479,\"Loose Tooth shatters on hit, dealing x% extra damage to nearby enemies.\"]]]",
      "base": {
        "modelId": "base:16000058",
        "model": [
          {
            "type": "damage",
            "operation": "snipe",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "jump",
            "condition": "always"
          },
          {
            "type": "transform",
            "operation": "form",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Snipe, then jump in for big damage.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "0a04bb65b857f79e9dcc316e389b1761613f0e41ff18ec649c6e2d3635da1093",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000478": {
          "modelId": "gear:23000478",
          "model": [
            {
              "type": "projectile",
              "operation": "superRange",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "The range of Bonnie's Star Launcher is increased by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000058",
          "sourceHash": "c12df6f9bb6108211dcb3028ae8af69680326e707cb8477bfaa7e40a1efbebf0",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000058"
          ]
        },
        "23000479": {
          "modelId": "gear:23000479",
          "model": [
            {
              "type": "damage",
              "operation": "splash",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "Loose Tooth shatters on hit, dealing x% extra damage to nearby enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000058",
          "sourceHash": "b7abc533e174553e43ad183090a70cef5e24cf5dbe287a7fac6b202db952c4d4",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000058"
          ]
        },
        "23000480": {
          "modelId": "gear:23000480",
          "model": [
            {
              "type": "mobility",
              "operation": "formSpeed",
              "condition": "always"
            },
            {
              "type": "ammo",
              "operation": "reload",
              "condition": "cannonForm"
            }
          ],
          "effects": [],
          "text": "Clyde's movement and reload speed are increased by 30% for 5 seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000058",
          "sourceHash": "d658e973f3d2e009be82cd1a89221b56673e908cdf566e884550f9254dc36243",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000058"
          ]
        },
        "23000481": {
          "modelId": "gear:23000481",
          "model": [
            {
              "type": "mobility",
              "operation": "dash",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "contact",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "knockback",
              "condition": "always"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "Bonnie dashes forward, knocking back enemies and dealing x damage on hit.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000058",
          "sourceHash": "3e74075bf0dacd2d4565ca9f74cf21ec8d6c4261bc10562474552bfeeee89945",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000058"
          ]
        }
      },
      "modeSlots": false
    },
    "16000059": {
      "signature": "[[[23000497,\"The next starfish will stay on the ground if an enemy is not hit, laying dormant until an enemy gets close.\"],[23000498,\"Otis's next attack shoots a giant ink ball that leaves a puddle, dealing x damage over time for x seconds.\"]],[[23000495,\"Cil mightily squeezes the enemy with all his might. Preventing them from attacking for x% longer.\"],[23000496,\"Otis now shoots x% more ink drops.\"]]]",
      "base": {
        "modelId": "base:16000059",
        "model": [
          {
            "type": "damage",
            "operation": "antiTank",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "silence",
            "condition": "always"
          }
        ],
        "effects": [
          "antiTank"
        ],
        "text": "Burst tanks and silence threats.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "cafbb230a4c6e00e62cd805b638d07d206eab9957f329e6f73f21f22395a2613",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000495": {
          "modelId": "gear:23000495",
          "model": [
            {
              "type": "control",
              "operation": "silenceDuration",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Cil mightily squeezes the enemy with all his might. Preventing them from attacking for x% longer.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000059",
          "sourceHash": "675116f547086c95fe1cce88c8e68b66ea206dbebf4fd652ee5171102d097019",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000059"
          ]
        },
        "23000496": {
          "modelId": "gear:23000496",
          "model": [
            {
              "type": "projectile",
              "operation": "count",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Otis now shoots x% more ink drops.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000059",
          "sourceHash": "648609aee63bc3336f436286cf8080c22339cce5aaca2d64c34c06f7fb51119c",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000059"
          ]
        },
        "23000497": {
          "modelId": "gear:23000497",
          "model": [
            {
              "type": "control",
              "operation": "trapSilence",
              "condition": "missedSuper"
            }
          ],
          "effects": [],
          "text": "The next starfish will stay on the ground if an enemy is not hit, laying dormant until an enemy gets close.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000059",
          "sourceHash": "1871fba08738b36c711a3e54d2148e78907ca39255f37abf8eaa75030ffa724a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000059"
          ]
        },
        "23000498": {
          "modelId": "gear:23000498",
          "model": [
            {
              "type": "damage",
              "operation": "areaDuration",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "Otis's next attack shoots a giant ink ball that leaves a puddle, dealing x damage over time for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000059",
          "sourceHash": "2a6f00ce27d472dd122d3c660df0427fbac9bb5b92cd26a6b7739977c4f32a30",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000059"
          ]
        }
      },
      "modeSlots": false
    },
    "16000060": {
      "signature": "[[[23000505,\"While the Knuckle Busters are on the ground, Sam can activate them to pull in nearby enemies.\"],[23000506,\"Upon landing on the ground, Sam's next deployed Knuckle Busters releases an electric pulse that knocks back enemies.\"]],[[23000503,\"Upon recalling his Knuckle Busters, Sam instantly recovers x% of his missing health.\"],[23000504,\"While the Knuckle Busters are on the ground and near enemies, they will charge up Sam's Super.\"]]]",
      "base": {
        "modelId": "base:16000060",
        "model": [
          {
            "type": "projectile",
            "operation": "recall",
            "condition": "always"
          },
          {
            "type": "resource",
            "operation": "fists",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Throw fists, reclaim, repeat.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "0aa8524c3838336f02686efd9ce10f46fcf5120b6afd9f1caac0d6c7aaf07b58",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000503": {
          "modelId": "gear:23000503",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "recall"
            }
          ],
          "effects": [],
          "text": "Upon recalling his Knuckle Busters, Sam instantly recovers x% of his missing health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000060",
          "sourceHash": "b6c546cf547e7b888e61558f92b72d2d3d31ce4e367f21550d07a11ba4b9451e",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000060"
          ]
        },
        "23000504": {
          "modelId": "gear:23000504",
          "model": [
            {
              "type": "super",
              "operation": "charge",
              "condition": "weaponNearEnemy"
            }
          ],
          "effects": [],
          "text": "While the Knuckle Busters are on the ground and near enemies, they will charge up Sam's Super.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000060",
          "sourceHash": "c646fdb444aaa1a2aa5e59aad0c2f9e3ab86f38d2fd791f55756d487a14b3fea",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000060"
          ]
        },
        "23000505": {
          "modelId": "gear:23000505",
          "model": [
            {
              "type": "control",
              "operation": "pull",
              "condition": "weaponGround"
            }
          ],
          "effects": [
            "pull"
          ],
          "text": "While the Knuckle Busters are on the ground, Sam can activate them to pull in nearby enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000060",
          "sourceHash": "4ba9af12e6b1a880ec03ad95c9e6db3e250e48258adf134d66c2631bae000003",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000060"
          ]
        },
        "23000506": {
          "modelId": "gear:23000506",
          "model": [
            {
              "type": "control",
              "operation": "knockback",
              "condition": "nextSuperLanding"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "Upon landing on the ground, Sam's next deployed Knuckle Busters releases an electric pulse that knocks back enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000060",
          "sourceHash": "31ef7fce9685a1b4df9874c1309bd75aedd19e31d24c3a504d456a5078a04bda",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000060"
          ]
        }
      },
      "modeSlots": false
    },
    "16000061": {
      "signature": "[[[23000513,\"Explode all uncollected spirits, dealing x damage to nearby enemies.\"],[23000514,\"Gus throws a spirit, knocking back enemies and dealing x damage.\"]],[[23000511,\"Healing gained from spirits is increased by x%.\"],[23000512,\"Spooky increases the damage of a teammate by x% for x seconds.\"]]]",
      "base": {
        "modelId": "base:16000061",
        "model": [
          {
            "type": "support",
            "operation": "buff",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "snipe",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Buff teammates and snipe enemies.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "b38487f2161f0a5f3a121dd1ac75e220661823d2380f5d591f6e6f0c8f622290",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000511": {
          "modelId": "gear:23000511",
          "model": [
            {
              "type": "heal",
              "operation": "spiritBoost",
              "condition": "always"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Healing gained from spirits is increased by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000061",
          "sourceHash": "6d6fb61ed3a2b677208a3fb294ae7554d0487d800d2e8d7ad75e513a323f942a",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000061"
          ]
        },
        "23000512": {
          "modelId": "gear:23000512",
          "model": [
            {
              "type": "support",
              "operation": "damage",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Spooky increases the damage of a teammate by x% for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000061",
          "sourceHash": "3d507abf04d7bde46bd0228d2a48ebdc209342fbc26413da5b139b165ee5de2c",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000061"
          ]
        },
        "23000513": {
          "modelId": "gear:23000513",
          "model": [
            {
              "type": "damage",
              "operation": "triggerSpirits",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Explode all uncollected spirits, dealing x damage to nearby enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000061",
          "sourceHash": "395eca2ab9134c069f1e388ab3f3a3b9785febc7187abb62eff8f91db7bc3583",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000061"
          ]
        },
        "23000514": {
          "modelId": "gear:23000514",
          "model": [
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "knockback",
              "condition": "always"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "Gus throws a spirit, knocking back enemies and dealing x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000061",
          "sourceHash": "f9e5ddfdcb6ba20943e0a747249fd49980c7d4e8e6f17c9a76dce68e13a29a99",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000061"
          ]
        }
      },
      "modeSlots": false
    },
    "16000062": {
      "signature": "[[[23000521,\"Buster heals himself and all nearby allies for x health for each ally in his Super's charge area.\"],[23000522,\"Buster's next Lens Flare pulls enemies towards him.\"]],[[23000519,\"Buster's Lens Flare deals x% more damage for each ally in his Super's charge area.\"],[23000520,\"While Montage is active Buster takes x% less damage and is immune to knockbacks, slows and stuns.\"]]]",
      "base": {
        "modelId": "base:16000062",
        "model": [
          {
            "type": "defense",
            "operation": "reflectProjectiles",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Reflect enemy projectiles for big damage.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "56fd29f063f7891a8afb8a62ce802d3992b632625028060b361353b6ce709d13",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000519": {
          "modelId": "gear:23000519",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "allyNear"
            }
          ],
          "effects": [],
          "text": "Buster's Lens Flare deals x% more damage for each ally in his Super's charge area.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000062",
          "sourceHash": "32aa34e5b7e3681adfc30c27fc64dbd1046c528b8f2f7e73930d8190bc37fd79",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000062"
          ]
        },
        "23000520": {
          "modelId": "gear:23000520",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "super"
            },
            {
              "type": "defense",
              "operation": "controlImmune",
              "condition": "super"
            }
          ],
          "effects": [
            "immunity"
          ],
          "text": "While Montage is active Buster takes x% less damage and is immune to knockbacks, slows and stuns.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000062",
          "sourceHash": "9438d688100726c684b768f0016ab34a8e24dee3d9c72ae43dfbbeb7873481f0",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000062"
          ]
        },
        "23000521": {
          "modelId": "gear:23000521",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "allyNear"
            },
            {
              "type": "heal",
              "operation": "ally",
              "condition": "allyNear"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Buster heals himself and all nearby allies for x health for each ally in his Super's charge area.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000062",
          "sourceHash": "3671bc58f088befb440a7d1ff467df50a6a798562cf03fd0dd098700e851e034",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000062"
          ]
        },
        "23000522": {
          "modelId": "gear:23000522",
          "model": [
            {
              "type": "control",
              "operation": "pull",
              "condition": "nextAttackHit"
            }
          ],
          "effects": [
            "pull"
          ],
          "text": "Buster's next Lens Flare pulls enemies towards him.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000062",
          "sourceHash": "69940aa447bcb70d434ceda4a71f1bb87577ff1b121af7d970c9c726dd39b330",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000062"
          ]
        }
      },
      "modeSlots": false
    },
    "16000063": {
      "signature": "[[[23000529,\"Chester gets a new random Super that is different from his current one.\"],[23000530,\"Chester eats a mystery flavored candy bean from his cap, gaining a random buff for x seconds.\"]],[[23000527,\"The first bell of Chester's attack sequence does x% damage.\"],[23000528,\"Chester will always know what his next Super will be.\"]]]",
      "base": {
        "modelId": "base:16000063",
        "model": [
          {
            "type": "choice",
            "operation": "randomSuper",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Master randomness to control the map.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "ae2b174e9507b5b9c541b665bd85beb44e0b4d39dcbe05708c08e369b39e0673",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000527": {
          "modelId": "gear:23000527",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "firstAttack"
            }
          ],
          "effects": [],
          "text": "The first bell of Chester's attack sequence does x% damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000063",
          "sourceHash": "2e39af5f0871b4e91cc4a7548970c5510a5154a655062cae686864a5c8f4349c",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000063"
          ]
        },
        "23000528": {
          "modelId": "gear:23000528",
          "model": [
            {
              "type": "choice",
              "operation": "predictSuper",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Chester will always know what his next Super will be.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000063",
          "sourceHash": "a9fc381f47f84c275cf275d4c6279cc304b45e3f7384ed9ec65e570559c61ee2",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000063"
          ]
        },
        "23000529": {
          "modelId": "gear:23000529",
          "model": [
            {
              "type": "choice",
              "operation": "rerollSuper",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Chester gets a new random Super that is different from his current one.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000063",
          "sourceHash": "aad198a86a280daee0443cf8fc1df60a7ebf7f6e91f107b0cb2301562aa93507",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000063"
          ]
        },
        "23000530": {
          "modelId": "gear:23000530",
          "model": [
            {
              "type": "choice",
              "operation": "randomBuff",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Chester eats a mystery flavored candy bean from his cap, gaining a random buff for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000063",
          "sourceHash": "e84394553a7fcf6f317e31c55529f4cc412907041fd17e585fc4eeb16881aec4",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000063"
          ]
        }
      },
      "modeSlots": false
    },
    "16000064": {
      "signature": "[[[23000537,\"Gray's next hit from the Finger Pistol shoots a walking cane which pulls enemies back by a bit.\"],[23000538,\"Gray's next hit from the Finger Pistol will also leave a target on the ground where a piano will land and hurt enemies. It would be too bad if someone would get hurt, right?\"]],[[23000535,\"When Gray has full health, the next damage taken is reduced by x%.\"],[23000536,\"When Gray or his Allies use Doors, they recover x% of their max hit points.\"]]]",
      "base": {
        "modelId": "base:16000064",
        "model": [
          {
            "type": "mobility",
            "operation": "allyPortal",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Get your team into the action with portals!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "faa1dadc80cd9ec9be01f6dcd6340ebcfa8759901e1e21dbd3984494df86490a",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000535": {
          "modelId": "gear:23000535",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "fullHealth"
            }
          ],
          "effects": [],
          "text": "When Gray has full health, the next damage taken is reduced by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000064",
          "sourceHash": "96eaf720b5c7970d9ead3a82e37120b113d2e4336192955c3a3dc81990b55c3d",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000064"
          ]
        },
        "23000536": {
          "modelId": "gear:23000536",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "portal"
            },
            {
              "type": "heal",
              "operation": "ally",
              "condition": "portal"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "When Gray or his Allies use Doors, they recover x% of their max hit points.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000064",
          "sourceHash": "3828646cbd01599cf6a3e2e0e976bb5df4006979e11035b4012c3ba1af88815b",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000064"
          ]
        },
        "23000537": {
          "modelId": "gear:23000537",
          "model": [
            {
              "type": "control",
              "operation": "pull",
              "condition": "nextAttackHit"
            }
          ],
          "effects": [
            "pull"
          ],
          "text": "Gray's next hit from the Finger Pistol shoots a walking cane which pulls enemies back by a bit.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000064",
          "sourceHash": "66294015fa127f7d1c594188a93b99ba13edfd88303e699dcfb57b9bb0b5b9f7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000064"
          ]
        },
        "23000538": {
          "modelId": "gear:23000538",
          "model": [
            {
              "type": "damage",
              "operation": "delayedArea",
              "condition": "nextAttackHit"
            }
          ],
          "effects": [],
          "text": "Gray's next hit from the Finger Pistol will also leave a target on the ground where a piano will land and hurt enemies. It would be too bad if someone would get hurt, right?",
          "source": "https://api.brawlapi.com/v1/brawlers/16000064",
          "sourceHash": "24b664319272c542a0d67661f91f5770b5a68f7ccae99d362daea54ee1d73090",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000064"
          ]
        }
      },
      "modeSlots": false
    },
    "16000065": {
      "signature": "[[[23000545,\"Mandy's next candy from her Candy Dispenser slows down enemies on hit for 2.5 seconds.\"],[23000546,\"Mandy's next candy from her Candy Dispenser pierces enemies and environment.\"]],[[23000543,\"Mandy shoots her candies with x% more speed while Focused.\"],[23000544,\"Mandy receives x% shield while Focused.\"]]]",
      "base": {
        "modelId": "base:16000065",
        "model": [
          {
            "type": "projectile",
            "operation": "range",
            "condition": "stationary"
          }
        ],
        "effects": [
          "rangeBoost"
        ],
        "text": "Hold your ground for huge range.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "e82c59e9478e73bc7a3de2e59675fa3fd3c292cf6e45896860d4fd512c101835",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000543": {
          "modelId": "gear:23000543",
          "model": [
            {
              "type": "projectile",
              "operation": "speed",
              "condition": "focused"
            }
          ],
          "effects": [],
          "text": "Mandy shoots her candies with x% more speed while Focused.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000065",
          "sourceHash": "f6dde23763ac43ded912b4bf8874b4baa862765b127498c57116767240367ed5",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000065"
          ]
        },
        "23000544": {
          "modelId": "gear:23000544",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "focused"
            }
          ],
          "effects": [],
          "text": "Mandy receives x% shield while Focused.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000065",
          "sourceHash": "4df657e9adee09daae061d0d309d2095afb8d71ed2c8322217066cfcb5c0ad58",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000065"
          ]
        },
        "23000545": {
          "modelId": "gear:23000545",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "nextAttackHit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Mandy's next candy from her Candy Dispenser slows down enemies on hit for 2.5 seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000065",
          "sourceHash": "c3416d2d6c6daea533ef0325fbba361d2ea99238a67a19aad28fb647ab5bd534",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000065"
          ]
        },
        "23000546": {
          "modelId": "gear:23000546",
          "model": [
            {
              "type": "projectile",
              "operation": "wallPierce",
              "condition": "nextAttack"
            },
            {
              "type": "projectile",
              "operation": "pierce",
              "condition": "nextAttack"
            }
          ],
          "effects": [
            "overWalls"
          ],
          "text": "Mandy's next candy from her Candy Dispenser pierces enemies and environment.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000065",
          "sourceHash": "f050268c54714885a54535ba5bbd0811d2f06b7f7ca52713da420acc7ad67c18",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000065"
          ]
        }
      },
      "modeSlots": false
    },
    "16000066": {
      "signature": "[[[23000555,\"Instantly charges R-T's Super.\"],[23000556,\"Instantly trigger all active marks on all enemy Brawlers, dealing their damage.\"]],[[23000553,\"Marks created last x seconds longer.\"],[23000554,\"R-T and his legs take x% less damage when split.\"]]]",
      "base": {
        "modelId": "base:16000066",
        "model": [
          {
            "type": "projectile",
            "operation": "mark",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "burst",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Mark targets then deal burst damage!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "e317b0a59dc09a368bdd41047363263cc118d2a9d2686c2d36ff5fee6ab90465",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000553": {
          "modelId": "gear:23000553",
          "model": [
            {
              "type": "resource",
              "operation": "markDuration",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Marks created last x seconds longer.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000066",
          "sourceHash": "5651da892999633fd59a2f196f2678932ca705e06252e7754a25dee895f080a3",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000066"
          ]
        },
        "23000554": {
          "modelId": "gear:23000554",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "splitForm"
            }
          ],
          "effects": [],
          "text": "R-T and his legs take x% less damage when split.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000066",
          "sourceHash": "11114b873aa55c1235b0c4cbe76e62c4ced3cbb2abd7b22be063c2b729b2342e",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000066"
          ]
        },
        "23000555": {
          "modelId": "gear:23000555",
          "model": [
            {
              "type": "super",
              "operation": "charge",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Instantly charges R-T's Super.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000066",
          "sourceHash": "9d32e60d2a492b02bd2cfc4e52eac7df68abf5b8e6be4f0e3611b6a92fc8c99e",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000066"
          ]
        },
        "23000556": {
          "modelId": "gear:23000556",
          "model": [
            {
              "type": "damage",
              "operation": "triggerMarks",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Instantly trigger all active marks on all enemy Brawlers, dealing their damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000066",
          "sourceHash": "6d0df49ee2c62319e1dd3f666ecd6da58ca6bb76451c54eaf069befa59708c17",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000066"
          ]
        }
      },
      "modeSlots": false
    },
    "16000067": {
      "signature": "[[[23000563,\"Willow's next Lantern's Curse deals x more damage and applies the entire damage instantly rather than over time.\"],[23000564,\"Willow dives for x seconds, becoming untargetable but unable to take any action for the duration.\"]],[[23000561,\"Lantern's Curse also reduces reload speed of affected Brawlers by 30% for 3 seconds.\"],[23000562,\"Hexed enemies gain 33% movement speed while mind controlled.\"]]]",
      "base": {
        "modelId": "base:16000067",
        "model": [
          {
            "type": "control",
            "operation": "mindControl",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Turn enemies against themselves!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "3cf705937b03fc2d058525990567ceebdeb7e2f61add45b6b7d27e96320211c3",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000561": {
          "modelId": "gear:23000561",
          "model": [
            {
              "type": "ammo",
              "operation": "enemyReloadSlow",
              "condition": "attackHit"
            }
          ],
          "effects": [],
          "text": "Lantern's Curse also reduces reload speed of affected Brawlers by 30% for 3 seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000067",
          "sourceHash": "efe0b89c2ff426cc99a15a14d8e3cecea33ae0f0ca424807da0cfcda9265ea80",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000067"
          ]
        },
        "23000562": {
          "modelId": "gear:23000562",
          "model": [
            {
              "type": "mobility",
              "operation": "controlledEnemySpeed",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Hexed enemies gain 33% movement speed while mind controlled.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000067",
          "sourceHash": "cbe031acf7a87704d97257767643bc48332348f139055411cce5a55fe5fdb0f4",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000067"
          ]
        },
        "23000563": {
          "modelId": "gear:23000563",
          "model": [
            {
              "type": "damage",
              "operation": "burst",
              "condition": "nextAttack"
            },
            {
              "type": "transform",
              "operation": "instantDamage",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Willow's next Lantern's Curse deals x more damage and applies the entire damage instantly rather than over time.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000067",
          "sourceHash": "a3b0e7bf3b121bb3c78f08885b81c5898ed7736548dc0928151d9c9a8ce63888",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000067"
          ]
        },
        "23000564": {
          "modelId": "gear:23000564",
          "model": [
            {
              "type": "defense",
              "operation": "untargetable",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "action",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Willow dives for x seconds, becoming untargetable but unable to take any action for the duration.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000067",
          "sourceHash": "9046db7f3817e6f0a9e2ae3825fbf69703c886c45e7eb62322f9c1ec3c75ba5e",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000067"
          ]
        }
      },
      "modeSlots": false
    },
    "16000068": {
      "signature": "[[[23000571,\"Maisie blasts the ground, stunning enemies for x seconds while dashing forward.\"],[23000572,\"Maisie instantly reloads x ammo and increases the next Pressure Rocket damage by x% of the target's missing HP.\"]],[[23000569,\"Pressure rocket deals x% more damage at max distance.\"],[23000570,\"Enemies hit by Shockwave are also slowed down for x seconds.\"]]]",
      "base": {
        "modelId": "base:16000068",
        "model": [
          {
            "type": "damage",
            "operation": "antiAdvance",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Punish advancing enemies.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "0bce4f4d338e0c8c46e306bd3c53c41c0d06dd878bc5b351428647b42c171a6c",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000569": {
          "modelId": "gear:23000569",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "maxRange"
            }
          ],
          "effects": [],
          "text": "Pressure rocket deals x% more damage at max distance.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000068",
          "sourceHash": "3384564b90831fed90ff4862d2d45e4a3755ff8ce149907189c10672f2080e25",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000068"
          ]
        },
        "23000570": {
          "modelId": "gear:23000570",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "superHit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Enemies hit by Shockwave are also slowed down for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000068",
          "sourceHash": "43942d83125b9e34ddcee4344b621b6cc9b4551d2d2c0a82e3b79d06ddfa2a11",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000068"
          ]
        },
        "23000571": {
          "modelId": "gear:23000571",
          "model": [
            {
              "type": "mobility",
              "operation": "dash",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "stun",
              "condition": "always"
            }
          ],
          "effects": [
            "stun"
          ],
          "text": "Maisie blasts the ground, stunning enemies for x seconds while dashing forward.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000068",
          "sourceHash": "aebc3ae0f0eeca32f58d682586631eea7d51b355ea198fd7f10eeb765eea15b6",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000068"
          ]
        },
        "23000572": {
          "modelId": "gear:23000572",
          "model": [
            {
              "type": "ammo",
              "operation": "refill",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "execute",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "Maisie instantly reloads x ammo and increases the next Pressure Rocket damage by x% of the target's missing HP.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000068",
          "sourceHash": "789660d3f36b88fc7b30c477758907508f51b8058e0721f3021f96d4ed9fc2a3",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000068"
          ]
        }
      },
      "modeSlots": false
    },
    "16000069": {
      "signature": "[[[23000579,\"The next Balloon Blast also slows down enemies for x seconds.\"],[23000580,\"Hank takes x% reduced damage for x seconds.\"]],[[23000577,\"When Balloon Blast is charged over 80%, Hank gains 10% extra movement speed.\"],[23000578,\"Hank takes x% less damage when near a wall.\"]]]",
      "base": {
        "modelId": "base:16000069",
        "model": [
          {
            "type": "damage",
            "operation": "charged",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "engage",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Charge up your attack, then engage.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "d4dd24a89977e4cb802fccbed9c2efdfc34a58138629a84dea0378769629e82b",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000577": {
          "modelId": "gear:23000577",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "charged"
            }
          ],
          "effects": [],
          "text": "When Balloon Blast is charged over 80%, Hank gains 10% extra movement speed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000069",
          "sourceHash": "0bf77deb4847cd00d3726676d2eea0960c7074b8f2d45a6ae0cee8955620f00f",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000069"
          ]
        },
        "23000578": {
          "modelId": "gear:23000578",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "nearWall"
            }
          ],
          "effects": [],
          "text": "Hank takes x% less damage when near a wall.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000069",
          "sourceHash": "deb7677e47b8d965a411acaaa2f66bc4ed0f6e46bb4be567bb6aa30f20501d1a",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000069"
          ]
        },
        "23000579": {
          "modelId": "gear:23000579",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "nextAttackHit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "The next Balloon Blast also slows down enemies for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000069",
          "sourceHash": "5532056886b8cc045eec212d8036c53c6793fe4f65bbd18bd2fd29999b65d5af",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000069"
          ]
        },
        "23000580": {
          "modelId": "gear:23000580",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Hank takes x% reduced damage for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000069",
          "sourceHash": "303e9101505a09545e5f32dae2a6be4de9575764e31c0fdaf2f829ba02fe05bf",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000069"
          ]
        }
      },
      "modeSlots": false
    },
    "16000070": {
      "signature": "[[[23000587,\"Cordelius jumps over a piece of terrain quickly.\"],[23000588,\"Cordelius's next main attack shoots a poison mushroom that prevents the enemy from attacking for x seconds.\"]],[[23000585,\"Hitting the second mushroom to the same target as the first, deals x% extra damage.\"],[23000586,\"Cordelius spawns x mushrooms to the Shadow Realm after using his Super, healing allies and damaging enemies for x health on pickup.\"]]]",
      "base": {
        "modelId": "base:16000070",
        "model": [
          {
            "type": "defense",
            "operation": "realm",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "isolate",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use the Shadow Realm to isolate targets!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "fda98e00750efcaf29aa9d9b84182cdfff294d6eefde613e247bb83af265c60b",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000585": {
          "modelId": "gear:23000585",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "secondHit"
            }
          ],
          "effects": [],
          "text": "Hitting the second mushroom to the same target as the first, deals x% extra damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000070",
          "sourceHash": "1883ba02009c05a76e22567b0a00fc3a399da0d274e7955d0e8f53ee4af36d40",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000070"
          ]
        },
        "23000586": {
          "modelId": "gear:23000586",
          "model": [
            {
              "type": "heal",
              "operation": "ally",
              "condition": "realmPickup"
            },
            {
              "type": "damage",
              "operation": "pickup",
              "condition": "realm"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Cordelius spawns x mushrooms to the Shadow Realm after using his Super, healing allies and damaging enemies for x health on pickup.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000070",
          "sourceHash": "a1aa92caf0ee9e4883b6cdcedfa540f861395978c994894e8193ecff8ae94279",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000070"
          ]
        },
        "23000587": {
          "modelId": "gear:23000587",
          "model": [
            {
              "type": "mobility",
              "operation": "jump",
              "condition": "always"
            },
            {
              "type": "terrain",
              "operation": "overWalls",
              "condition": "always"
            }
          ],
          "effects": [
            "overWalls"
          ],
          "text": "Cordelius jumps over a piece of terrain quickly.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000070",
          "sourceHash": "fcc1a724707e980bf81fa2fa29bad6c507c6c5e44a4b089000302fc64fc2a45b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000070"
          ]
        },
        "23000588": {
          "modelId": "gear:23000588",
          "model": [
            {
              "type": "control",
              "operation": "silence",
              "condition": "nextAttackHit"
            }
          ],
          "effects": [],
          "text": "Cordelius's next main attack shoots a poison mushroom that prevents the enemy from attacking for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000070",
          "sourceHash": "0e11b9544d146f8748d05e2ce3fb6ee35fb86d99b2551febb1fbe81cbe23707a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000070"
          ]
        }
      },
      "modeSlots": false
    },
    "16000071": {
      "signature": "[[[23000595,\"The next Snack Attack only heals allies but doubles the amount.\"],[23000596,\"The next Snack Attack only damages enemies but doubles the amount.\"]],[[23000593,\"When Doug revives an ally successfully, he will heal for x% of his max health.\"],[23000594,\"Snack Attack also heals Doug by x.\"]]]",
      "base": {
        "modelId": "base:16000071",
        "model": [
          {
            "type": "damage",
            "operation": "closeArea",
            "condition": "always"
          },
          {
            "type": "defense",
            "operation": "revive",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Big close range damage and self-revival!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "00c8cd9cd836bceb3ed3a39152251f01b34ad83f506b49dbc4dd3783c46a6b59",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000593": {
          "modelId": "gear:23000593",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "allyRevive"
            }
          ],
          "effects": [],
          "text": "When Doug revives an ally successfully, he will heal for x% of his max health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000071",
          "sourceHash": "201549dd25af21d5a2f61331241140cff24474a26449148ed9d005b1854e871f",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000071"
          ]
        },
        "23000594": {
          "modelId": "gear:23000594",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "attack"
            }
          ],
          "effects": [],
          "text": "Snack Attack also heals Doug by x.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000071",
          "sourceHash": "c47c0049e7aec5c86c947d016056ee29139554279256bded1d67dd81c886d2ff",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000071"
          ]
        },
        "23000595": {
          "modelId": "gear:23000595",
          "model": [
            {
              "type": "heal",
              "operation": "allyBoost",
              "condition": "nextAttack"
            },
            {
              "type": "cost",
              "operation": "enemyDamage",
              "condition": "always"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "The next Snack Attack only heals allies but doubles the amount.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000071",
          "sourceHash": "093b4883a06cc6c00ef9f7c9137a5def1994c5d026bbc518a3d7028dc46330cd",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000071"
          ]
        },
        "23000596": {
          "modelId": "gear:23000596",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "nextAttack"
            },
            {
              "type": "cost",
              "operation": "allyHeal",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "The next Snack Attack only damages enemies but doubles the amount.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000071",
          "sourceHash": "151d532bb1fe22aa80a1d0ee99aaff3fe4804c633c1936475ac6e7ea346ed8c7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000071"
          ]
        }
      },
      "modeSlots": false
    },
    "16000072": {
      "signature": "[[[23000603,\"Next basic attack shoots burning cookies, dealing x extra damage over time.\"],[23000604,\"Next basic attack shoots perfectly baked cookies ignoring enemies and healing allies for x over time instead.\"]],[[23000601,\"Super will consume x% less Heat when used.\"],[23000602,\"While the Heat is over x%, reduce damage taken by x%.\"]]]",
      "base": {
        "modelId": "base:16000072",
        "model": [
          {
            "type": "resource",
            "operation": "heat",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "burst",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Build up Heat for burst damage!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "4f0d4e78dfd93331f7a7deaf33eecf777a49b303dd9fc199d18283b774c1bed2",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000601": {
          "modelId": "gear:23000601",
          "model": [
            {
              "type": "resource",
              "operation": "retain",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Super will consume x% less Heat when used.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000072",
          "sourceHash": "ec003db216b998373423579c8d12933082ad2cb1d611b88a720f67eea0b47a50",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000072"
          ]
        },
        "23000602": {
          "modelId": "gear:23000602",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "heat"
            }
          ],
          "effects": [],
          "text": "While the Heat is over x%, reduce damage taken by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000072",
          "sourceHash": "48369e447a4e9f25efad87800177ae1068d2d35a57fb75b1f692f8e531b80d46",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000072"
          ]
        },
        "23000603": {
          "modelId": "gear:23000603",
          "model": [
            {
              "type": "damage",
              "operation": "burn",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "Next basic attack shoots burning cookies, dealing x extra damage over time.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000072",
          "sourceHash": "31510e65f7950f15d3073e320fa6baad0ad4b894c68ed6852a483628a9d6a811",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000072"
          ]
        },
        "23000604": {
          "modelId": "gear:23000604",
          "model": [
            {
              "type": "heal",
              "operation": "ally",
              "condition": "nextAttack"
            },
            {
              "type": "cost",
              "operation": "enemyDamage",
              "condition": "always"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Next basic attack shoots perfectly baked cookies ignoring enemies and healing allies for x over time instead.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000072",
          "sourceHash": "940fc707610e25c9c68453eadd694237eab7896905e44a8285d9114b85b20840",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000072"
          ]
        }
      },
      "modeSlots": false
    },
    "16000073": {
      "signature": "[[[23000611,\"Chuck removes the nearest Post and charges 50% of his Super.\"],[23000612,\"Chuck's Supers can go through walls for 8 seconds!\"]],[[23000609,\"Placing a Pole slows x% any hit enemy for x sec.\"],[23000610,\"Dashing through enemies with his Super will also steal x% of their ammo.\"]]]",
      "base": {
        "modelId": "base:16000073",
        "model": [
          {
            "type": "mobility",
            "operation": "tracks",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Lay down tracks for offense and retreats.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "2b4c9c2a3591a72a8b741e8a33aa8a9d4ad0709c179d6d919c08d1209e963116",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000609": {
          "modelId": "gear:23000609",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "postHit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Placing a Pole slows x% any hit enemy for x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000073",
          "sourceHash": "1d89678a251aea10ee4f68e3ad0d1126169f1027170401f3994bf58f0e100e01",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000073"
          ]
        },
        "23000610": {
          "modelId": "gear:23000610",
          "model": [
            {
              "type": "ammo",
              "operation": "steal",
              "condition": "superHit"
            }
          ],
          "effects": [],
          "text": "Dashing through enemies with his Super will also steal x% of their ammo.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000073",
          "sourceHash": "8c4741eafca2d1fee3e73ce65cae76e9d362030a02b52ecc74d8ef5715071a5c",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000073"
          ]
        },
        "23000611": {
          "modelId": "gear:23000611",
          "model": [
            {
              "type": "resource",
              "operation": "removePost",
              "condition": "always"
            },
            {
              "type": "super",
              "operation": "charge",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Chuck removes the nearest Post and charges 50% of his Super.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000073",
          "sourceHash": "d63a2fdc8ea6367c0e9db2d8b9258f97483f6d160b03e4d072795ff6e513b7a1",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000073"
          ]
        },
        "23000612": {
          "modelId": "gear:23000612",
          "model": [
            {
              "type": "terrain",
              "operation": "phase",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Chuck's Supers can go through walls for 8 seconds!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000073",
          "sourceHash": "adc4a0fe3008b4a4cbdf6d70ff51641f98f42736a5f00c247028150ef90a9715",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000073"
          ]
        }
      },
      "modeSlots": false
    },
    "16000074": {
      "signature": "[[[23000625,\"Charlie releases x spiders that seek and attack the nearest enemies.\"],[23000626,\"Charlie cocoons herself, healing x% of her total health.\"]],[[23000623,\"Cocooned enemies lose x% of their health while cocooned.\"],[23000624,\"Cocoon leaves a slimy trail behind it for x seconds that slows down enemies walking over it.\"]]]",
      "base": {
        "modelId": "base:16000074",
        "model": [
          {
            "type": "control",
            "operation": "cocoon",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Cocoon enemies to remove them from play!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "59d753d93cf33e4c4c681716050ae5e7979b73dfed6683774490b5660d5cb053",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000623": {
          "modelId": "gear:23000623",
          "model": [
            {
              "type": "damage",
              "operation": "healthDrain",
              "condition": "cocoon"
            }
          ],
          "effects": [],
          "text": "Cocooned enemies lose x% of their health while cocooned.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000074",
          "sourceHash": "7eb96301facd247d4a0076a656e4d9651e83f3e09ac78257bf62388098530204",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000074"
          ]
        },
        "23000624": {
          "modelId": "gear:23000624",
          "model": [
            {
              "type": "control",
              "operation": "slowTrail",
              "condition": "super"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Cocoon leaves a slimy trail behind it for x seconds that slows down enemies walking over it.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000074",
          "sourceHash": "7f1579a3eab6830547d2eb2a3344fe6daf6fb31e7948e9f6dfc232d737ef61cf",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000074"
          ]
        },
        "23000625": {
          "modelId": "gear:23000625",
          "model": [
            {
              "type": "summon",
              "operation": "create",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Charlie releases x spiders that seek and attack the nearest enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000074",
          "sourceHash": "c2ecc86dccee17ad32f8947b30fd680a6a3b4fbb5014083e16f53098c8e240d7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000074"
          ]
        },
        "23000626": {
          "modelId": "gear:23000626",
          "model": [
            {
              "type": "defense",
              "operation": "selfCocoon",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "self",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Charlie cocoons herself, healing x% of her total health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000074",
          "sourceHash": "6a61c53c1c8b9630e0a287ed1e75bbef14a77974457d76a6b087b06b6560fd4b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000074"
          ]
        }
      },
      "modeSlots": false
    },
    "16000075": {
      "signature": "[[[23000639,\"Mico lets out a deafening scream towards the nearest enemy, dealing x damage and slowing down enemies for x seconds on hit.\"],[23000640,\"Mico's next jump has x% longer range.\"]],[[23000637,\"Every x seconds, Mico's basic attack steals ammo from his enemies after hitting them.\"],[23000638,\"Mico deals x% extra damage against non Brawlers.\"]]]",
      "base": {
        "modelId": "base:16000075",
        "model": [
          {
            "type": "mobility",
            "operation": "jump",
            "condition": "always"
          },
          {
            "type": "terrain",
            "operation": "overWalls",
            "condition": "always"
          }
        ],
        "effects": [
          "overWalls"
        ],
        "text": "Leap over walls and enemy attacks!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "eec7936ad6279b8c2c1bbfae1a2592008385e512849097b944aee494159adbe4",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000637": {
          "modelId": "gear:23000637",
          "model": [
            {
              "type": "ammo",
              "operation": "steal",
              "condition": "periodicHit"
            }
          ],
          "effects": [],
          "text": "Every x seconds, Mico's basic attack steals ammo from his enemies after hitting them.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000075",
          "sourceHash": "ce9b2539674c46750edc525d82c9b12f02c566e0808934bbd3f226f2d1465b44",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000075"
          ]
        },
        "23000638": {
          "modelId": "gear:23000638",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "nonBrawler"
            }
          ],
          "effects": [],
          "text": "Mico deals x% extra damage against non Brawlers.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000075",
          "sourceHash": "ac995e705b7514e47571dc6a60c3b2efffad44b194c20427723585116053bea9",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000075"
          ]
        },
        "23000639": {
          "modelId": "gear:23000639",
          "model": [
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "slow",
              "condition": "hit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Mico lets out a deafening scream towards the nearest enemy, dealing x damage and slowing down enemies for x seconds on hit.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000075",
          "sourceHash": "437122f38b2bd07308cd611f2c9f986b20fcefa4ed38a297a4fa80f2ee244034",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000075"
          ]
        },
        "23000640": {
          "modelId": "gear:23000640",
          "model": [
            {
              "type": "mobility",
              "operation": "jumpRange",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "Mico's next jump has x% longer range.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000075",
          "sourceHash": "eda896fe3240e3ca6cfdf0573f046aee0d644b8a53660ede6e897ef606cbbfaf",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000075"
          ]
        }
      },
      "modeSlots": false
    },
    "16000076": {
      "signature": "[[[23000648,\"Hide in a cardboard box becoming invisible for x seconds. Charges the Super x faster while stationary.\"],[23000649,\"Heals himself and the friendly Brawler he is attached to for x.\"]],[[23000646,\"Kit gains x% power from each Power Cube.\"],[23000647,\"Kit attaches to friendly Brawlers for x seconds longer.\"]]]",
      "base": {
        "modelId": "base:16000076",
        "model": [
          {
            "type": "heal",
            "operation": "ally",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "attach",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "assassinate",
            "condition": "always"
          }
        ],
        "effects": [
          "healAlly"
        ],
        "text": "Heal teammates, or assassinate enemies!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "376dfe64c61edb458a9de63ed20f2ecee1e86ec35d74b3505e62bc38f0a4da66",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000646": {
          "modelId": "gear:23000646",
          "model": [
            {
              "type": "resource",
              "operation": "cubeScaling",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Kit gains x% power from each Power Cube.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000076",
          "sourceHash": "c3d182d7d833ee0af64944cf37d4169963a3e3666815e6428297cd8202dd5ce1",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000076"
          ]
        },
        "23000647": {
          "modelId": "gear:23000647",
          "model": [
            {
              "type": "resource",
              "operation": "attachmentDuration",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Kit attaches to friendly Brawlers for x seconds longer.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000076",
          "sourceHash": "d18f0ebf61642ac6c430f30b41ec638c7f15028d0c2e04970226a03aefdca189",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000076"
          ]
        },
        "23000648": {
          "modelId": "gear:23000648",
          "model": [
            {
              "type": "vision",
              "operation": "invisible",
              "condition": "always"
            },
            {
              "type": "super",
              "operation": "rate",
              "condition": "stationary"
            }
          ],
          "effects": [],
          "text": "Hide in a cardboard box becoming invisible for x seconds. Charges the Super x faster while stationary.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000076",
          "sourceHash": "71e8a9173a6e97323b0172d30f5b5a463b796c2f7ad0af2626cd829f4ae53d2b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000076"
          ]
        },
        "23000649": {
          "modelId": "gear:23000649",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "attached"
            },
            {
              "type": "heal",
              "operation": "ally",
              "condition": "attached"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Heals himself and the friendly Brawler he is attached to for x.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000076",
          "sourceHash": "63f4f2ab7394466b8e0cae7a05386cba95a0399aa2dcfbf8ccec8e448dca9611",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000076"
          ]
        }
      },
      "modeSlots": false
    },
    "16000077": {
      "signature": "[[[23000661,\"Swap weapons with Lawrie.\"],[23000662,\"Dash towards Lawrie while Lawrie dashes towards you, healing both for x% of max health.\"]],[[23000659,\"While Lawrie is in range, transfer x% incoming damage to himself instead.\"],[23000660,\"While Lawrie is in range, reload x% of your ammo whenever he damages an enemy.\"]]]",
      "base": {
        "modelId": "base:16000077",
        "model": [
          {
            "type": "summon",
            "operation": "partner",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Overwhelm with teamwork!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "64c19f2a6b568a068a6f242bc66846160c59a7a2370e96b74a1c9d7a4318b459",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000659": {
          "modelId": "gear:23000659",
          "model": [
            {
              "type": "defense",
              "operation": "damageTransfer",
              "condition": "summonNear"
            }
          ],
          "effects": [],
          "text": "While Lawrie is in range, transfer x% incoming damage to himself instead.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000077",
          "sourceHash": "adc4da9ee8743db789db319ea8f59b71de2178b3b749daa5b9099089ca1aed67",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000077"
          ]
        },
        "23000660": {
          "modelId": "gear:23000660",
          "model": [
            {
              "type": "ammo",
              "operation": "refill",
              "condition": "summonHit"
            }
          ],
          "effects": [],
          "text": "While Lawrie is in range, reload x% of your ammo whenever he damages an enemy.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000077",
          "sourceHash": "f094baccc20c8b692a4a4110f3b84c4b00339c3d67cb7d9b5aaa6fe2e3ad34e5",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000077"
          ]
        },
        "23000661": {
          "modelId": "gear:23000661",
          "model": [
            {
              "type": "transform",
              "operation": "weaponSwap",
              "condition": "summon"
            }
          ],
          "effects": [],
          "text": "Swap weapons with Lawrie.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000077",
          "sourceHash": "4eaab3e0ef271ab3339fc931bbb7b00e84f8002dec8b243d0bcf47b0218d5e5d",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000077"
          ]
        },
        "23000662": {
          "modelId": "gear:23000662",
          "model": [
            {
              "type": "mobility",
              "operation": "swap",
              "condition": "summon"
            },
            {
              "type": "heal",
              "operation": "self",
              "condition": "summon"
            },
            {
              "type": "heal",
              "operation": "summon",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Dash towards Lawrie while Lawrie dashes towards you, healing both for x% of max health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000077",
          "sourceHash": "dc7c0e7f224857d8b025f318b965c7ef3002491fcce770a5cc92cd603b060841",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000077"
          ]
        }
      },
      "modeSlots": false
    },
    "16000078": {
      "signature": "[[[23000669,\"Melodie's notes get x% increased movement speed and x% wider orbit for x seconds.\"],[23000670,\"Melodie gains x% Shield from each note orbiting her.\"]],[[23000667,\"Melodie gains 6% increased movement speed from each note orbiting her.\"],[23000668,\"Melodie's notes last for x% longer before vanishing.\"]]]",
      "base": {
        "modelId": "base:16000078",
        "model": [
          {
            "type": "resource",
            "operation": "notes",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "dive",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Build up notes, then dive in!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "445cb83d1e24787b2d598d2915a1ebf6f91717aab6f90cd4f187a030058e8f40",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000667": {
          "modelId": "gear:23000667",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "notes"
            }
          ],
          "effects": [],
          "text": "Melodie gains 6% increased movement speed from each note orbiting her.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000078",
          "sourceHash": "a279037fc5f30469b95fb5e934df9c73e9ccf3f989c464745d60abc9da361df7",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000078"
          ]
        },
        "23000668": {
          "modelId": "gear:23000668",
          "model": [
            {
              "type": "resource",
              "operation": "duration",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Melodie's notes last for x% longer before vanishing.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000078",
          "sourceHash": "09797b3df4d693a67ab6f04b2bdeca83953fe8b31691bada6e153b2ea83851be",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000078"
          ]
        },
        "23000669": {
          "modelId": "gear:23000669",
          "model": [
            {
              "type": "projectile",
              "operation": "orbitSpeed",
              "condition": "always"
            },
            {
              "type": "projectile",
              "operation": "orbitRadius",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Melodie's notes get x% increased movement speed and x% wider orbit for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000078",
          "sourceHash": "23ab9b02a74374b3c30e34789ec5b6be5060b88d8cf003a67325782eae3b3849",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000078"
          ]
        },
        "23000670": {
          "modelId": "gear:23000670",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "notes"
            }
          ],
          "effects": [],
          "text": "Melodie gains x% Shield from each note orbiting her.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000078",
          "sourceHash": "03e54822b685ebe0fd145a1d1462a589299e9d1307600a0a2923889f13e0dfef",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000078"
          ]
        }
      },
      "modeSlots": false
    },
    "16000079": {
      "signature": "[[[23000677,\"Fly into the air for x seconds. Drains x health from nearby enemies on takeoff.\"],[23000678,\"The next Take Aim pierces enemies and the environment.\"]],[[23000675,\"Staying inside the Super will heal Angelo for x per second.\"],[23000676,\"Angelo gains 25% increased movement speed after entering water.\"]]]",
      "base": {
        "modelId": "base:16000079",
        "model": [
          {
            "type": "damage",
            "operation": "charged",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "snipe",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use charged attacks to snipe!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "48eed4527f68b3e31e02cd9350530e54ec6d96ecb2d53aa9998b9ba5c1648112",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000675": {
          "modelId": "gear:23000675",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "ownArea"
            }
          ],
          "effects": [],
          "text": "Staying inside the Super will heal Angelo for x per second.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000079",
          "sourceHash": "63729383c366d122c92ac8891a07c740e79cb8ea8f7c0b0249c68a92025761c6",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000079"
          ]
        },
        "23000676": {
          "modelId": "gear:23000676",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "water"
            }
          ],
          "effects": [],
          "text": "Angelo gains 25% increased movement speed after entering water.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000079",
          "sourceHash": "2b6befbeedd2bb4d8466c42066973d4a70299f654d1539e994c1e35a7c05c1d3",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000079"
          ]
        },
        "23000677": {
          "modelId": "gear:23000677",
          "model": [
            {
              "type": "mobility",
              "operation": "jump",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "lifesteal",
              "condition": "enemyNear"
            }
          ],
          "effects": [],
          "text": "Fly into the air for x seconds. Drains x health from nearby enemies on takeoff.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000079",
          "sourceHash": "7390f30e9f9b5195f085c7c6ea34435982ce8cb0c79def6a5444014864a5de15",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000079"
          ]
        },
        "23000678": {
          "modelId": "gear:23000678",
          "model": [
            {
              "type": "projectile",
              "operation": "wallPierce",
              "condition": "nextAttack"
            },
            {
              "type": "projectile",
              "operation": "pierce",
              "condition": "nextAttack"
            }
          ],
          "effects": [
            "overWalls"
          ],
          "text": "The next Take Aim pierces enemies and the environment.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000079",
          "sourceHash": "dea6df7648ecbfbc350f35578d1dfe54c5ca19225b37b294ffb5707648bbfccf",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000079"
          ]
        }
      },
      "modeSlots": false
    },
    "16000080": {
      "signature": "[[[23000736,\"The next Lance Stab also throws enemies in the air for a short time.\"],[23000737,\"Draco can not fall under one health for x seconds.\"]],[[23000734,\"Every x seconds, the next Lance Stab exposes enemies on hit. Exposed enemies take x% increased damage for x seconds.\"],[23000735,\"Dragon Solo now also heals for x when activated.\"]]]",
      "base": {
        "modelId": "base:16000080",
        "model": [
          {
            "type": "transform",
            "operation": "form",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "poke",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Poke, transform, then dominate!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "ebe18f8378de99429714ca778788c5e542aef9cf1e1c7632ee51083efc952ebb",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000734": {
          "modelId": "gear:23000734",
          "model": [
            {
              "type": "support",
              "operation": "vulnerability",
              "condition": "periodicHit"
            }
          ],
          "effects": [],
          "text": "Every x seconds, the next Lance Stab exposes enemies on hit. Exposed enemies take x% increased damage for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000080",
          "sourceHash": "3bedbab65b9d305811d31965feebecdb5da7991a5cd5b6b3df50efb8c51a80aa",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000080"
          ]
        },
        "23000735": {
          "modelId": "gear:23000735",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Dragon Solo now also heals for x when activated.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000080",
          "sourceHash": "282bbaa5e29daaf97ed6356e2a5e4b824ed3098fcbbd94071a580dbb2fc58687",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000080"
          ]
        },
        "23000736": {
          "modelId": "gear:23000736",
          "model": [
            {
              "type": "control",
              "operation": "knockup",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "The next Lance Stab also throws enemies in the air for a short time.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000080",
          "sourceHash": "6d75de38bc1538672e4e572db365f13dd31d415eadb565817e3f79cb407b98ae",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000080"
          ]
        },
        "23000737": {
          "modelId": "gear:23000737",
          "model": [
            {
              "type": "defense",
              "operation": "deathPrevention",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Draco can not fall under one health for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000080",
          "sourceHash": "cda1fcdcf470c0792af28a8a290efd520472eacf9bdd43d7b2b32209e0f23890",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000080"
          ]
        }
      },
      "modeSlots": false
    },
    "16000081": {
      "signature": "[[[23000754,\"Lily enters the Shadow Realm for x seconds\"],[23000755,\"The next Flourish, becomes a thrown attack, and Lily teleports to the destination on impact\"]],[[23000752,\"After teleporting to an enemy, Lily's next attack deals x more damage\"],[23000753,\"Gain 15% movement speed while an enemy is in her Super charge radius.\"]]]",
      "base": {
        "modelId": "base:16000081",
        "model": [
          {
            "type": "vision",
            "operation": "ambush",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "approach",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use bushes and a Super to get close.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "bb4dac0a9af8c5c936ee809cdd9caab8f75d373099805c87306423651da4db6b",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000752": {
          "modelId": "gear:23000752",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "afterTeleport"
            }
          ],
          "effects": [],
          "text": "After teleporting to an enemy, Lily's next attack deals x more damage",
          "source": "https://api.brawlapi.com/v1/brawlers/16000081",
          "sourceHash": "ec9482707ffe9d55e5ffa55c2d3e0dba47414c79da16cd0233949b4d607e274f",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000081"
          ]
        },
        "23000753": {
          "modelId": "gear:23000753",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "enemyNear"
            }
          ],
          "effects": [],
          "text": "Gain 15% movement speed while an enemy is in her Super charge radius.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000081",
          "sourceHash": "90bc920e05fe36d77fb234d990686f54b3c081a0c1ac39f51a2e70cb3a4e1e23",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000081"
          ]
        },
        "23000754": {
          "modelId": "gear:23000754",
          "model": [
            {
              "type": "defense",
              "operation": "realm",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Lily enters the Shadow Realm for x seconds",
          "source": "https://api.brawlapi.com/v1/brawlers/16000081",
          "sourceHash": "531da5620e27fd1663067ec1261e7404053afc13e62d727dda45fd952f62f930",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000081"
          ]
        },
        "23000755": {
          "modelId": "gear:23000755",
          "model": [
            {
              "type": "transform",
              "operation": "throwSuper",
              "condition": "always"
            },
            {
              "type": "mobility",
              "operation": "teleport",
              "condition": "impact"
            }
          ],
          "effects": [],
          "text": "The next Flourish, becomes a thrown attack, and Lily teleports to the destination on impact",
          "source": "https://api.brawlapi.com/v1/brawlers/16000081",
          "sourceHash": "79cc2f5111bf76d050f4bf75d1ec83c473be387d331416d878a80d69df95aad2",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000081"
          ]
        }
      },
      "modeSlots": false
    },
    "16000082": {
      "signature": "[[[23000766,\"Berry swipes his tail, knocking back enemies and healing nearby allies for x health.\"],[23000767,\"Berry's next main attack area lasts for x% longer.\"]],[[23000764,\"Berry gains x% increased reload speed when standing on his own melted ice cream.\"],[23000765,\"Berry's basic attack gains x% extra damage on impact in areas with no ice cream.\"]]]",
      "base": {
        "modelId": "base:16000082",
        "model": [
          {
            "type": "heal",
            "operation": "ally",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [
          "healAlly"
        ],
        "text": "Control space and heal teammates.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "706541e1016fe28de87e0faebb46c22169805751a5a917f52ca62265bb512ae4",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000764": {
          "modelId": "gear:23000764",
          "model": [
            {
              "type": "ammo",
              "operation": "reload",
              "condition": "ownArea"
            }
          ],
          "effects": [],
          "text": "Berry gains x% increased reload speed when standing on his own melted ice cream.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000082",
          "sourceHash": "ab8fc6f6719ebd93e8d7c9a0a9810008f387172785000d9ba25662a506b1e50a",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000082"
          ]
        },
        "23000765": {
          "modelId": "gear:23000765",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "freshGround"
            }
          ],
          "effects": [],
          "text": "Berry's basic attack gains x% extra damage on impact in areas with no ice cream.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000082",
          "sourceHash": "a545f9e76a0335cfc2c9e294fd4cbbed877fd01b676336f2d333616614416b5c",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000082"
          ]
        },
        "23000766": {
          "modelId": "gear:23000766",
          "model": [
            {
              "type": "control",
              "operation": "knockback",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "ally",
              "condition": "always"
            }
          ],
          "effects": [
            "knockback",
            "healAlly"
          ],
          "text": "Berry swipes his tail, knocking back enemies and healing nearby allies for x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000082",
          "sourceHash": "e080ace86e5a8718001e3a791ba3d1e3d0339239b5ddc0b42340336f623d4ae7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000082"
          ]
        },
        "23000767": {
          "modelId": "gear:23000767",
          "model": [
            {
              "type": "projectile",
              "operation": "areaDuration",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "Berry's next main attack area lasts for x% longer.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000082",
          "sourceHash": "28545abd222e215b5c13c3d058e4c1ae4ea30f16b7ce4f03efe64be823e74eb0",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000082"
          ]
        }
      },
      "modeSlots": false
    },
    "16000083": {
      "signature": "[[[23000774,\"Clancy gains double tokens for x seconds.\"],[23000775,\"Clancy dashes and reloads x ammo\"]],[[23000772,\"Clancy starts the match with x tokens.\"],[23000773,\"Clancy reloads all of his ammo on every enemy takedown.\"]]]",
      "base": {
        "modelId": "base:16000083",
        "model": [
          {
            "type": "resource",
            "operation": "level",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Poke to level up and take over!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "115da7b0778fc16a7ea670f01c84319640b55e59692cd938cd6cdcebb6b77a50",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000772": {
          "modelId": "gear:23000772",
          "model": [
            {
              "type": "resource",
              "operation": "initial",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Clancy starts the match with x tokens.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000083",
          "sourceHash": "271643c89d5df5e2a18c77cb80591c25118374b3be4bf922dfee8144377d7a95",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000083"
          ]
        },
        "23000773": {
          "modelId": "gear:23000773",
          "model": [
            {
              "type": "ammo",
              "operation": "refill",
              "condition": "kill"
            }
          ],
          "effects": [],
          "text": "Clancy reloads all of his ammo on every enemy takedown.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000083",
          "sourceHash": "c7941c499837be1bbf4e58c6d94e96f837cea65c600725144f9a87b582aa6b4d",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000083"
          ]
        },
        "23000774": {
          "modelId": "gear:23000774",
          "model": [
            {
              "type": "resource",
              "operation": "gain",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Clancy gains double tokens for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000083",
          "sourceHash": "ba286836e9f1ca663333c3f64ad39abe5a681368025737f6e50e461538396e9d",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000083"
          ]
        },
        "23000775": {
          "modelId": "gear:23000775",
          "model": [
            {
              "type": "mobility",
              "operation": "dash",
              "condition": "always"
            },
            {
              "type": "ammo",
              "operation": "refill",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Clancy dashes and reloads x ammo",
          "source": "https://api.brawlapi.com/v1/brawlers/16000083",
          "sourceHash": "f779f4c2a10025b46a43ef8b76edab1e91a0c531bb8f2df5eafee3252c78b356",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000083"
          ]
        }
      },
      "modeSlots": false
    },
    "16000084": {
      "signature": "[[[23000806,\"Moe digs up some \\\"borrowed\\\" goods, increasing his Super charge rate by x% for x seconds.\"],[23000807,\"Moe dashes a short distance in his Driller, destroying walls and knocking back Brawlers in the process.\"]],[[23000804,\"Moe's basic attacks bounce one more time. The range of the attack remains the same.\"],[23000805,\"Moe's Driller has 25% increased travel speed.\"]]]",
      "base": {
        "modelId": "base:16000084",
        "model": [
          {
            "type": "mobility",
            "operation": "drill",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Chase down enemies with the drill.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "bffcd11643d5b1ba488decdbb5c75e6ee1dd1c4513d6ff67af584b6ceeb77c5c",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000804": {
          "modelId": "gear:23000804",
          "model": [
            {
              "type": "projectile",
              "operation": "bounce",
              "condition": "always"
            },
            {
              "type": "projectile",
              "operation": "fixedRange",
              "condition": "always"
            }
          ],
          "effects": [
            "wallDependent"
          ],
          "text": "Moe's basic attacks bounce one more time. The range of the attack remains the same.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000084",
          "sourceHash": "8b278dea1ee996b76cf14a6a6855707c7e0ed933cb4f7436d57544f58379109d",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000084"
          ]
        },
        "23000805": {
          "modelId": "gear:23000805",
          "model": [
            {
              "type": "mobility",
              "operation": "formSpeed",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Moe's Driller has 25% increased travel speed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000084",
          "sourceHash": "b0a23ae4fde9f40543f103189c9c251c40c743391b7069213fcbba5e08d095d3",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000084"
          ]
        },
        "23000806": {
          "modelId": "gear:23000806",
          "model": [
            {
              "type": "super",
              "operation": "rate",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Moe digs up some \"borrowed\" goods, increasing his Super charge rate by x% for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000084",
          "sourceHash": "c2db1c6b1e520df4f323a24132a6163c8c61d8d4b49f5f27c429dcd8f0cb59f7",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000084"
          ]
        },
        "23000807": {
          "modelId": "gear:23000807",
          "model": [
            {
              "type": "mobility",
              "operation": "dash",
              "condition": "always"
            },
            {
              "type": "terrain",
              "operation": "destroy",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "knockback",
              "condition": "always"
            }
          ],
          "effects": [
            "wallBreak",
            "knockback"
          ],
          "text": "Moe dashes a short distance in his Driller, destroying walls and knocking back Brawlers in the process.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000084",
          "sourceHash": "213382cc7861e5ecc6eaf0bfb002460f47295fb942196917b69e708bd497b1a0",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000084"
          ]
        }
      },
      "modeSlots": false
    },
    "16000085": {
      "signature": "[[[23000817,\"Kenji's basic attack only uses Dash for the next x seconds.\"],[23000818,\"Kenji instantly heals x% of damage taken over the last x seconds.\"]],[[23000815,\"Slashimi's slices have x% longer range\"],[23000816,\"After avoiding damage for x seconds, gets x% damage reduction from the next enemy attack.\"]]]",
      "base": {
        "modelId": "base:16000085",
        "model": [
          {
            "type": "heal",
            "operation": "lifesteal",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "aggression",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Stay aggressive and heal with attacks.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "ca2ca5ec5450ce521284a532c6f3be31f8ffbb43316267c3dbe4b43f7b52e787",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000815": {
          "modelId": "gear:23000815",
          "model": [
            {
              "type": "projectile",
              "operation": "superRange",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Slashimi's slices have x% longer range",
          "source": "https://api.brawlapi.com/v1/brawlers/16000085",
          "sourceHash": "8272769a46c52f56c770ea38ffd89b4cf9b2883391ccb3d2458619889325a433",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000085"
          ]
        },
        "23000816": {
          "modelId": "gear:23000816",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "undamaged"
            }
          ],
          "effects": [],
          "text": "After avoiding damage for x seconds, gets x% damage reduction from the next enemy attack.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000085",
          "sourceHash": "1c2465ee8fc550e299f0aaf2040e37f59062c70abe3f8971a83fc8fe95713c69",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000085"
          ]
        },
        "23000817": {
          "modelId": "gear:23000817",
          "model": [
            {
              "type": "transform",
              "operation": "dashAttack",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Kenji's basic attack only uses Dash for the next x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000085",
          "sourceHash": "01ad0b5c13f890d61df1c01e10889ccc097fe2efe34db0089a260bd83d4591b0",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000085"
          ]
        },
        "23000818": {
          "modelId": "gear:23000818",
          "model": [
            {
              "type": "heal",
              "operation": "recentDamage",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Kenji instantly heals x% of damage taken over the last x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000085",
          "sourceHash": "9eaf9b2117a065701db2af96f8885dacf161cc70f677a74ad4a8e50225011384",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000085"
          ]
        }
      },
      "modeSlots": false
    },
    "16000086": {
      "signature": "[[[23000834,\"The next main attack has 50% longer range.\"],[23000835,\"Shade jumps a short distance, fearing enemies for x sec when landing.\"]],[[23000832,\"Hitting opponents with the center of Shade's main attack gives a short movement speed boost.\"],[23000833,\"Shade gets 30% damage reduction while in its Incorporeal Form.\"]]]",
      "base": {
        "modelId": "base:16000086",
        "model": [
          {
            "type": "terrain",
            "operation": "phase",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "approach",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use walls to avoid damage and get close.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "f7c0fcd846fd0688c120aefd9febd246d4f3569682ade1d39fe55e2a995813da",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000832": {
          "modelId": "gear:23000832",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "centerHit"
            }
          ],
          "effects": [],
          "text": "Hitting opponents with the center of Shade's main attack gives a short movement speed boost.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000086",
          "sourceHash": "cc75ea2f4fd560e160dff769ca9223b79bbbd511b0a621293fd53010b813a8bc",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000086"
          ]
        },
        "23000833": {
          "modelId": "gear:23000833",
          "model": [
            {
              "type": "defense",
              "operation": "damageReduction",
              "condition": "form"
            }
          ],
          "effects": [],
          "text": "Shade gets 30% damage reduction while in its Incorporeal Form.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000086",
          "sourceHash": "69a6d215ce2468578c1c5148c2f4624d18ba8608d7e3a4e9dca19d390dfe4a6e",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000086"
          ]
        },
        "23000834": {
          "modelId": "gear:23000834",
          "model": [
            {
              "type": "projectile",
              "operation": "range",
              "condition": "nextAttack"
            }
          ],
          "effects": [
            "rangeBoost"
          ],
          "text": "The next main attack has 50% longer range.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000086",
          "sourceHash": "4ff078ee7169e89e6928a6a59dd5fddda67558ed111ccac81322fbf3c376fa6f",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000086"
          ]
        },
        "23000835": {
          "modelId": "gear:23000835",
          "model": [
            {
              "type": "mobility",
              "operation": "jump",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "fear",
              "condition": "landing"
            }
          ],
          "effects": [],
          "text": "Shade jumps a short distance, fearing enemies for x sec when landing.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000086",
          "sourceHash": "f99629c5233eed3b7585501761f40d28479f79196aaa5404b327a65f1f3af9c8",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000086"
          ]
        }
      },
      "modeSlots": false
    },
    "16000087": {
      "signature": "[[[23000850,\"Juju's next main attack has the power of all three elements.\"],[23000851,\"Juju gains a temporary buff based on the current environment she is standing on. Earth: Damage reduction Grass: Invisibility Water: Increased movement speed\"]],[[23000848,\"Gris-Gris is summoned with a protective shield.\"],[23000849,\"Gris-Gris' attack now also slows the enemy for x sec\"]]]",
      "base": {
        "modelId": "base:16000087",
        "model": [
          {
            "type": "terrain",
            "operation": "adapt",
            "condition": "always"
          },
          {
            "type": "summon",
            "operation": "create",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use terrain, unleash Gris-Gris!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "680b55484b04640834405d3138c7c565a04b373e827b7afd21ca4ce433e2dff9",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000848": {
          "modelId": "gear:23000848",
          "model": [
            {
              "type": "summon",
              "operation": "shield",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Gris-Gris is summoned with a protective shield.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000087",
          "sourceHash": "50277c27c56735f0f316516a1e23933717e9c1cbf5e4128fe306964f6eb1bb37",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000087"
          ]
        },
        "23000849": {
          "modelId": "gear:23000849",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "summonHit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Gris-Gris' attack now also slows the enemy for x sec",
          "source": "https://api.brawlapi.com/v1/brawlers/16000087",
          "sourceHash": "fb17ccd0d6982fc80a2b973756007b945fda82f5fccacd1ef294e331cfc2cdf1",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000087"
          ]
        },
        "23000850": {
          "modelId": "gear:23000850",
          "model": [
            {
              "type": "projectile",
              "operation": "allElements",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "Juju's next main attack has the power of all three elements.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000087",
          "sourceHash": "230fc0818b582e4dbaa4547554592e651ad1da83ed8928b1a1ada01405fa287e",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000087"
          ]
        },
        "23000851": {
          "modelId": "gear:23000851",
          "model": [
            {
              "type": "choice",
              "operation": "terrainBuff",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Juju gains a temporary buff based on the current environment she is standing on. Earth: Damage reduction Grass: Invisibility Water: Increased movement speed",
          "source": "https://api.brawlapi.com/v1/brawlers/16000087",
          "sourceHash": "a088ada516db4ee24b2d5ae8917905ccd4efc5764ca98032c2a8bb5159fa96b8",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000087"
          ]
        }
      },
      "modeSlots": false
    },
    "16000088": {
      "signature": "[[[23000869,\"Buzz Lightyear activates his turbo, sprinting forward in his current direction.\"]],[[23000866,\"Buzz Lightyear's laser has extended range, allowing him to hit targets from farther away.\"],[23000867,\"Buzz Lightyear charges his Super by absorbing damage taken and benefits from increased health.\"],[23000868,\"Buzz deploys his wings, gaining a boost in movement speed.\"]]]",
      "base": {
        "modelId": "base:16000088",
        "model": [
          {
            "type": "transform",
            "operation": "modeChoice",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Buzz Lightyear has three alternative battle modes. Laser uses ranged attacks and burn, Saber combines melee attacks with a leaping knockback Super, and Wing combines close-range lasers with aerial bombing. The modes are alternatives, not simultaneous star powers.",
        "source": "https://supercell.com/en/games/brawlstars/blog/release-notes/patch-notes-toy-story/",
        "sourceHash": "33f329abc03dc8484c2fef8069087ae42b99128a07a6e304a9d1e7238a6d14e9",
        "kind": "base",
        "modeSlot": false,
        "historical": true
      },
      "gear": {
        "23000866": {
          "modelId": "gear:23000866",
          "model": [
            {
              "type": "mode",
              "operation": "laser",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Buzz Lightyear's laser has extended range, allowing him to hit targets from farther away.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000088",
          "sourceHash": "d19dd50d33854b33c33685e841beae5818ab3daa33f801c2d6c143c02db4d925",
          "kind": "stars",
          "modeSlot": true,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000088",
            "https://supercell.com/en/games/brawlstars/blog/release-notes/patch-notes-toy-story/"
          ]
        },
        "23000867": {
          "modelId": "gear:23000867",
          "model": [
            {
              "type": "mode",
              "operation": "saber",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Buzz Lightyear charges his Super by absorbing damage taken and benefits from increased health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000088",
          "sourceHash": "d2c542fbc1210bc82ac3ebaaf7339d0a213756ee7269750a3c6dc31952bc99fd",
          "kind": "stars",
          "modeSlot": true,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000088",
            "https://supercell.com/en/games/brawlstars/blog/release-notes/patch-notes-toy-story/"
          ]
        },
        "23000868": {
          "modelId": "gear:23000868",
          "model": [
            {
              "type": "mode",
              "operation": "wing",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Buzz deploys his wings, gaining a boost in movement speed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000088",
          "sourceHash": "3a12a0ca3f2539c744304f106122b8a0fafc570042c4504ef9860e61b5749148",
          "kind": "stars",
          "modeSlot": true,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000088",
            "https://supercell.com/en/games/brawlstars/blog/release-notes/patch-notes-toy-story/"
          ]
        },
        "23000869": {
          "modelId": "gear:23000869",
          "model": [
            {
              "type": "mobility",
              "operation": "dash",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Buzz Lightyear activates his turbo, sprinting forward in his current direction.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000088",
          "sourceHash": "3d993d0ddcdc87265d6b921de70aa67d8328cf0ad8df5d1e350d5665633c29bb",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000088"
          ]
        }
      },
      "modeSlots": true
    },
    "16000089": {
      "signature": "[[[23000877,\"Meeple's next attack creates dice towers around the impact area and deals x damage.\"],[23000878,\"Meeple lashes out in rage at nearby enemies, stunning and knocking them back. The less hitpoints Meeple has, the stun and knockback effects increase.\"]],[[23000875,\"When you shoot through environment deal x more damage.\"],[23000876,\"Critical success also increases allies reload speed within the area by x%.\"]]]",
      "base": {
        "modelId": "base:16000089",
        "model": [
          {
            "type": "projectile",
            "operation": "wallPierce",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [
          "overWalls"
        ],
        "text": "Shoot through walls and control the map!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "fb63358896a1507c09d52cfabba8352f79f615615c8788380963e9a15eb01d0d",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000875": {
          "modelId": "gear:23000875",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "wallPierce"
            }
          ],
          "effects": [],
          "text": "When you shoot through environment deal x more damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000089",
          "sourceHash": "7870a179c010a0aee3eff410fcd6639fbf3063976ebff67fbbb23526db827681",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000089"
          ]
        },
        "23000876": {
          "modelId": "gear:23000876",
          "model": [
            {
              "type": "support",
              "operation": "reload",
              "condition": "superArea"
            }
          ],
          "effects": [],
          "text": "Critical success also increases allies reload speed within the area by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000089",
          "sourceHash": "e48cffbf063be17faccd93ba863c41ba11b6046f7f0a31b1c69e3447f3345676",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000089"
          ]
        },
        "23000877": {
          "modelId": "gear:23000877",
          "model": [
            {
              "type": "terrain",
              "operation": "create",
              "condition": "nextAttack"
            },
            {
              "type": "damage",
              "operation": "area",
              "condition": "always"
            }
          ],
          "effects": [
            "wallCreate"
          ],
          "text": "Meeple's next attack creates dice towers around the impact area and deals x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000089",
          "sourceHash": "b09f6dbfd7831b18295913ea3b171247923f7217f738b87c594bbd7ee96ad99c",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000089"
          ]
        },
        "23000878": {
          "modelId": "gear:23000878",
          "model": [
            {
              "type": "control",
              "operation": "stun",
              "condition": "enemyNear"
            },
            {
              "type": "control",
              "operation": "knockback",
              "condition": "enemyNear"
            },
            {
              "type": "control",
              "operation": "strength",
              "condition": "lowHealth"
            }
          ],
          "effects": [
            "stun",
            "knockback"
          ],
          "text": "Meeple lashes out in rage at nearby enemies, stunning and knocking them back. The less hitpoints Meeple has, the stun and knockback effects increase.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000089",
          "sourceHash": "b170eabcf24f80e30f0e6b56860224d0cd1fe4a4b24df19d7c1323a448a2b6ed",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000089"
          ]
        }
      },
      "modeSlots": false
    },
    "16000090": {
      "signature": "[[[23000885,\"Ollie jumps and does a rad kickflip, hypnotizing all enemies where he lands for x seconds.\"],[23000886,\"Ollie's next attack will hypnotize any enemies hit for x seconds.\"]],[[23000883,\"While near walls, Ollie kicks off his hoverboard and gains 20% extra movement speed.\"],[23000884,\"After dashing forward with his Super, Ollie gains a 3000 decaying shield over 4 seconds.\"]]]",
      "base": {
        "modelId": "base:16000090",
        "model": [
          {
            "type": "control",
            "operation": "hypnosis",
            "condition": "always"
          },
          {
            "type": "defense",
            "operation": "frontline",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Soak up damage, then hypnotize.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "03cbd8f892fa22dec96cc05af52120414bb02a12ca9835c9619087990ab69c3a",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000883": {
          "modelId": "gear:23000883",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "nearWall"
            }
          ],
          "effects": [],
          "text": "While near walls, Ollie kicks off his hoverboard and gains 20% extra movement speed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000090",
          "sourceHash": "f0c3ea4c4337853dcd847e986c3da1f156d94a119d31a0e7d7f52cd6c2a49280",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000090"
          ]
        },
        "23000884": {
          "modelId": "gear:23000884",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "After dashing forward with his Super, Ollie gains a 3000 decaying shield over 4 seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000090",
          "sourceHash": "b4aa03b08cb36d98b69660f608951970e12f141ff26ca61b2890e44bce6e8aad",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000090"
          ]
        },
        "23000885": {
          "modelId": "gear:23000885",
          "model": [
            {
              "type": "mobility",
              "operation": "jump",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "hypnosis",
              "condition": "landing"
            }
          ],
          "effects": [],
          "text": "Ollie jumps and does a rad kickflip, hypnotizing all enemies where he lands for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000090",
          "sourceHash": "b66cbac7fe34a2961fc83897a361ee33b0d35bb5e0c838eaffdd273908fed9a9",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000090"
          ]
        },
        "23000886": {
          "modelId": "gear:23000886",
          "model": [
            {
              "type": "control",
              "operation": "hypnosis",
              "condition": "nextAttackHit"
            }
          ],
          "effects": [],
          "text": "Ollie's next attack will hypnotize any enemies hit for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000090",
          "sourceHash": "77d5c18bfd4c41f8251e467258e33edaa9bbce20543bb927ca143679f69d2390",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000090"
          ]
        }
      },
      "modeSlots": false
    },
    "16000091": {
      "signature": "[[[23000907,\"Lumi ignites her morning stars on the ground, producing flames which damage nearby enemies for x seconds. Damage per second: x\"],[23000908,\"Lumi creates freezing winds around her morning stars on the ground, creating a slippery surface for x secs.\"]],[[23000905,\"The explosions from Lumi's Blast Beat also set the area alight for x seconds. Fire damage also scales with explosion damage. Damage per second for the biggest explosion: x\"],[23000906,\"Lumi slows enemies hit by her recalled morning stars for x seconds.\"]]]",
      "base": {
        "modelId": "base:16000091",
        "model": [
          {
            "type": "projectile",
            "operation": "recall",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Recall weapons to create new angles of attack.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "3bbaf6e50d2f7d921aaff3124d32b5a506623b6efb4c2cda6f43b00f0d951d45",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000905": {
          "modelId": "gear:23000905",
          "model": [
            {
              "type": "damage",
              "operation": "burnArea",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "The explosions from Lumi's Blast Beat also set the area alight for x seconds. Fire damage also scales with explosion damage. Damage per second for the biggest explosion: x",
          "source": "https://api.brawlapi.com/v1/brawlers/16000091",
          "sourceHash": "27353c77c38c8e7d241c8ff968193fde00a0555c9434387b8f884d8ecb27787c",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000091"
          ]
        },
        "23000906": {
          "modelId": "gear:23000906",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "recalledHit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Lumi slows enemies hit by her recalled morning stars for x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000091",
          "sourceHash": "58e26c5024b2ae4de5ccb89cada913dbdbbe863255118272682ee5cb4d14b945",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000091"
          ]
        },
        "23000907": {
          "modelId": "gear:23000907",
          "model": [
            {
              "type": "damage",
              "operation": "burnArea",
              "condition": "weaponGround"
            }
          ],
          "effects": [],
          "text": "Lumi ignites her morning stars on the ground, producing flames which damage nearby enemies for x seconds. Damage per second: x",
          "source": "https://api.brawlapi.com/v1/brawlers/16000091",
          "sourceHash": "31fa8a38b810f2c774e04b04dfa635a7591bc4aa0acbeadff65057fa93086b8a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000091"
          ]
        },
        "23000908": {
          "modelId": "gear:23000908",
          "model": [
            {
              "type": "control",
              "operation": "slippery",
              "condition": "weaponGround"
            }
          ],
          "effects": [],
          "text": "Lumi creates freezing winds around her morning stars on the ground, creating a slippery surface for x secs.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000091",
          "sourceHash": "1a22034c7260a6d08b1ee2f51d2dea1f6a0144b8ef62601d1d5d33b4fd541310",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000091"
          ]
        }
      },
      "modeSlots": false
    },
    "16000092": {
      "signature": "[[[23000917,\"Finx steps back in time, returning to the position and ammo he had x seconds ago.\"],[23000918,\"Finx's next projectiles from his main attack freeze the enemies in time for x seconds, making them unable to take actions for the duration, but also making them immune to any damage.\"]],[[23000915,\"Finx reduces the reload speed of any enemy Brawlers hit by his main attack by 25% for 3 seconds.\"],[23000916,\"Damage dealt only from Finx's projectiles that are sped up by Time Warp, will increase the Super duration by x seconds each.\"]]]",
      "base": {
        "modelId": "base:16000092",
        "model": [
          {
            "type": "control",
            "operation": "projectileSlow",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Slow enemy projectiles to take space.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "5a1698a0c79b78e0a7bf502d864d8ceef07892732b3cb7e64aa3a65c137ed243",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000915": {
          "modelId": "gear:23000915",
          "model": [
            {
              "type": "ammo",
              "operation": "enemyReloadSlow",
              "condition": "attackHit"
            }
          ],
          "effects": [],
          "text": "Finx reduces the reload speed of any enemy Brawlers hit by his main attack by 25% for 3 seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000092",
          "sourceHash": "e8500e745151cb16c55363c8d0fc23c954f573916315932723f50b77c394a87e",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000092"
          ]
        },
        "23000916": {
          "modelId": "gear:23000916",
          "model": [
            {
              "type": "super",
              "operation": "duration",
              "condition": "acceleratedHit"
            }
          ],
          "effects": [],
          "text": "Damage dealt only from Finx's projectiles that are sped up by Time Warp, will increase the Super duration by x seconds each.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000092",
          "sourceHash": "b8855edbb079516702d3388dc765cdf1d829e7a3d04999b61e964042ace4d675",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000092"
          ]
        },
        "23000917": {
          "modelId": "gear:23000917",
          "model": [
            {
              "type": "mobility",
              "operation": "rewind",
              "condition": "always"
            },
            {
              "type": "ammo",
              "operation": "rewind",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Finx steps back in time, returning to the position and ammo he had x seconds ago.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000092",
          "sourceHash": "cf802a2255eaa38c9acb11eb75ed02e921a4fce60418c2da1060c5cb115aad8b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000092"
          ]
        },
        "23000918": {
          "modelId": "gear:23000918",
          "model": [
            {
              "type": "control",
              "operation": "stasis",
              "condition": "nextAttackHit"
            },
            {
              "type": "defense",
              "operation": "enemyInvulnerable",
              "condition": "stasis"
            }
          ],
          "effects": [],
          "text": "Finx's next projectiles from his main attack freeze the enemies in time for x seconds, making them unable to take actions for the duration, but also making them immune to any damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000092",
          "sourceHash": "85c3c92fa7ed555fc7fcecc16faf37578590d77ff4c7c07cba26cdcc34988452",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000092"
          ]
        }
      },
      "modeSlots": false
    },
    "16000093": {
      "signature": "[[[23000931,\"Deals area damage and increases main attack damage for x sec.\"],[23000932,\"Jae-yong slows enemies around him and his attacks will leave trails of slowing paperwork for x sec.\"]],[[23000929,\"Being near teammates gives Jae-yong a 15% speed boost per teammate in range.\"],[23000930,\"Main Attacks now deal an additional x% Damage per target pierced.\"]]]",
      "base": {
        "modelId": "base:16000093",
        "model": [
          {
            "type": "mobility",
            "operation": "speed",
            "condition": "always"
          },
          {
            "type": "heal",
            "operation": "mode",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use speed for aggression and heal for safety.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "c9f4ed76d338941df5402604c08d71ece0ee0396ee658a8d8b18ee12ff6dfb58",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000929": {
          "modelId": "gear:23000929",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "allyNear"
            }
          ],
          "effects": [],
          "text": "Being near teammates gives Jae-yong a 15% speed boost per teammate in range.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000093",
          "sourceHash": "4fe5f86ec5df7dbd28886d067406d50b26b48d1606934f25b742c810c81a03a1",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000093"
          ]
        },
        "23000930": {
          "modelId": "gear:23000930",
          "model": [
            {
              "type": "damage",
              "operation": "stacking",
              "condition": "piercedTarget"
            }
          ],
          "effects": [],
          "text": "Main Attacks now deal an additional x% Damage per target pierced.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000093",
          "sourceHash": "8fe69389e57e7591b91b6d392d6349986b33690ac5856c7f49e2db4ec31adca0",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000093"
          ]
        },
        "23000931": {
          "modelId": "gear:23000931",
          "model": [
            {
              "type": "damage",
              "operation": "area",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "boost",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Deals area damage and increases main attack damage for x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000093",
          "sourceHash": "3abcc3f5046d5f30e0d8c7252adb64eea10d46940ed3b5cf96068e5ff40a02bf",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000093"
          ]
        },
        "23000932": {
          "modelId": "gear:23000932",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "slowTrail",
              "condition": "always"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Jae-yong slows enemies around him and his attacks will leave trails of slowing paperwork for x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000093",
          "sourceHash": "09f5e08e1441b647995936cf0c16b226774a3af66327a2681500fffa6d9e424d",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000093"
          ]
        }
      },
      "modeSlots": false
    },
    "16000094": {
      "signature": "[[[23000940,\"Switch to Ninja Aspect and gain x% Movement Speed for x sec\"],[23000941,\"Switch to Ninja Aspect and gain short invisibility\"]],[[23000938,\"Hitting an enemy in a Strike Spot also slows them by x% for x sec\"],[23000939,\"Removes x% ammo from Brawlers initially caught in the Fan Storm\"]]]",
      "base": {
        "modelId": "base:16000094",
        "model": [
          {
            "type": "transform",
            "operation": "form",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "strike",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Zone as Geisha, strike as Ninja.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "a611782e46ec841133f87aea4e863bbc7bae6f94fb34f7d4c510116826a37b1b",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000938": {
          "modelId": "gear:23000938",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "strikeSpot"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Hitting an enemy in a Strike Spot also slows them by x% for x sec",
          "source": "https://api.brawlapi.com/v1/brawlers/16000094",
          "sourceHash": "e74948f0d9a983442206e246271715cafbbef49b410108e1717d73e241a30cec",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000094"
          ]
        },
        "23000939": {
          "modelId": "gear:23000939",
          "model": [
            {
              "type": "ammo",
              "operation": "drain",
              "condition": "superArea"
            }
          ],
          "effects": [],
          "text": "Removes x% ammo from Brawlers initially caught in the Fan Storm",
          "source": "https://api.brawlapi.com/v1/brawlers/16000094",
          "sourceHash": "85fb4c3be56b5b5cd4d7088202cb5600765be01ef8f58ceb89b1b88a7992f8df",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000094"
          ]
        },
        "23000940": {
          "modelId": "gear:23000940",
          "model": [
            {
              "type": "transform",
              "operation": "ninja",
              "condition": "always"
            },
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Switch to Ninja Aspect and gain x% Movement Speed for x sec",
          "source": "https://api.brawlapi.com/v1/brawlers/16000094",
          "sourceHash": "b344a2902e972b5535db0d92dd6cee5ad098c51edb70cf76fcec198b2d77d09d",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000094"
          ]
        },
        "23000941": {
          "modelId": "gear:23000941",
          "model": [
            {
              "type": "transform",
              "operation": "ninja",
              "condition": "always"
            },
            {
              "type": "vision",
              "operation": "invisible",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Switch to Ninja Aspect and gain short invisibility",
          "source": "https://api.brawlapi.com/v1/brawlers/16000094",
          "sourceHash": "618a0df5f58e998a8e2332813de081382d9ffec70d210f7edf037f6759097c5c",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000094"
          ]
        }
      },
      "modeSlots": false
    },
    "16000095": {
      "signature": "[[[23000991,\"The next main attack heals Alli for x% of damage dealt.\"],[23000992,\"Alli becomes enraged for the next x secs. Can only be activated when an enemy is visible.\"]],[[23000989,\"While enraged Alli regenerates health faster out of combat after only x seconds.\"],[23000990,\"Alli reloads x% faster while enraged.\"]]]",
      "base": {
        "modelId": "base:16000095",
        "model": [
          {
            "type": "vision",
            "operation": "ambush",
            "condition": "always"
          },
          {
            "type": "terrain",
            "operation": "water",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Ambush from bushes and water!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "b50afd1bb25e91c904c39bb3e6c3e22f49ee38b008974853c17170ac75345a9d",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000989": {
          "modelId": "gear:23000989",
          "model": [
            {
              "type": "heal",
              "operation": "regeneration",
              "condition": "enragedOutOfCombat"
            }
          ],
          "effects": [],
          "text": "While enraged Alli regenerates health faster out of combat after only x seconds.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000095",
          "sourceHash": "1f0e2535a3cf6ddb7074413ee392794fb751565c6ca0f1fd22fe79e8ba287a06",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000095"
          ]
        },
        "23000990": {
          "modelId": "gear:23000990",
          "model": [
            {
              "type": "ammo",
              "operation": "reload",
              "condition": "enraged"
            }
          ],
          "effects": [],
          "text": "Alli reloads x% faster while enraged.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000095",
          "sourceHash": "20e61c3b2f14354b9f8001e8e5ec64969dd7327f32230cbaf4bd6432420bf6f3",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000095"
          ]
        },
        "23000991": {
          "modelId": "gear:23000991",
          "model": [
            {
              "type": "heal",
              "operation": "lifesteal",
              "condition": "nextAttackHit"
            }
          ],
          "effects": [],
          "text": "The next main attack heals Alli for x% of damage dealt.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000095",
          "sourceHash": "dd3665dbe67e17dd3417b2d449fcf1019d5013d2c595a77097c8aec58ff64fa8",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000095"
          ]
        },
        "23000992": {
          "modelId": "gear:23000992",
          "model": [
            {
              "type": "transform",
              "operation": "enrage",
              "condition": "enemyVisible"
            }
          ],
          "effects": [],
          "text": "Alli becomes enraged for the next x secs. Can only be activated when an enemy is visible.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000095",
          "sourceHash": "af025f1be02f3756decf6f45081e036d5ace7f045f9795242840367a9427ac20",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000095"
          ]
        }
      },
      "modeSlots": false
    },
    "16000096": {
      "signature": "[[[23001000,\"Trunk instantly spreads ants in a large area.\"],[23001001,\"Trunk heals from the first source of damage taken for the next x secs.\"]],[[23000998,\"Ants also reduce the damage of enemies by x%\"],[23000999,\"Ants reveal hidden enemies.\"]]]",
      "base": {
        "modelId": "base:16000096",
        "model": [
          {
            "type": "resource",
            "operation": "ants",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "charge",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use ants for speed and charge in!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "7db14c9693207d62c76aaa46d8a80213370cc863a6bea1266586490debe0de77",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23000998": {
          "modelId": "gear:23000998",
          "model": [
            {
              "type": "control",
              "operation": "damageReduction",
              "condition": "ants"
            }
          ],
          "effects": [],
          "text": "Ants also reduce the damage of enemies by x%",
          "source": "https://api.brawlapi.com/v1/brawlers/16000096",
          "sourceHash": "cab7fd25fcfda946583546446104062c9f670c73b1e5ca5809ee7b810fe96a25",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000096"
          ]
        },
        "23000999": {
          "modelId": "gear:23000999",
          "model": [
            {
              "type": "vision",
              "operation": "reveal",
              "condition": "ants"
            }
          ],
          "effects": [],
          "text": "Ants reveal hidden enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000096",
          "sourceHash": "79ce4ed99de3cbc6973eb01da450d214831eaf3e4a155377eb810be7a814106f",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000096"
          ]
        },
        "23001000": {
          "modelId": "gear:23001000",
          "model": [
            {
              "type": "resource",
              "operation": "spread",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Trunk instantly spreads ants in a large area.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000096",
          "sourceHash": "80eed6e684d7b22bdf7c60160d62db04519556bfcaa534b4f171a46a1b237b46",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000096"
          ]
        },
        "23001001": {
          "modelId": "gear:23001001",
          "model": [
            {
              "type": "heal",
              "operation": "convertDamage",
              "condition": "nextDamage"
            }
          ],
          "effects": [],
          "text": "Trunk heals from the first source of damage taken for the next x secs.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000096",
          "sourceHash": "81417b5bd8886f2df61827512b05e03118fa23221c2227ee8a5554870e737b5d",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000096"
          ]
        }
      },
      "modeSlots": false
    },
    "16000097": {
      "signature": "[[[23001041,\"Creates a wall of wind that blocks projectiles for x sec.\"],[23001042,\"Mina's next Super recharges instantly if it hits.\"]],[[23001039,\"Mina's combo Attack 3 also heals for x% of damage done.\"],[23001040,\"Mina's Super also roots enemies on the spot.\"]]]",
      "base": {
        "modelId": "base:16000097",
        "model": [
          {
            "type": "damage",
            "operation": "combo",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Combo your Super with main attacks.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "ef41bcf0a29f9edeaa94cdaaa123e918e3b0fbfd7f64fd6437eba3e1273f39ef",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001039": {
          "modelId": "gear:23001039",
          "model": [
            {
              "type": "heal",
              "operation": "lifesteal",
              "condition": "thirdAttack"
            }
          ],
          "effects": [],
          "text": "Mina's combo Attack 3 also heals for x% of damage done.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000097",
          "sourceHash": "c715acfb6839aa5fe9bd4038bdc927621cb95cdc21c4393daf86df8f3790d518",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000097"
          ]
        },
        "23001040": {
          "modelId": "gear:23001040",
          "model": [
            {
              "type": "control",
              "operation": "root",
              "condition": "superHit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Mina's Super also roots enemies on the spot.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000097",
          "sourceHash": "6b888e31c16c62784fd136bf76106fdb88c648c0e17dd4e73f874b0c2393d8bd",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000097"
          ]
        },
        "23001041": {
          "modelId": "gear:23001041",
          "model": [
            {
              "type": "defense",
              "operation": "blockProjectiles",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Creates a wall of wind that blocks projectiles for x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000097",
          "sourceHash": "c83b162bbc940bbbf4f64f105d7547612dc6c0a02d44886b8d50c4f64bf7d9b5",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000097"
          ]
        },
        "23001042": {
          "modelId": "gear:23001042",
          "model": [
            {
              "type": "super",
              "operation": "refund",
              "condition": "superHit"
            }
          ],
          "effects": [],
          "text": "Mina's next Super recharges instantly if it hits.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000097",
          "sourceHash": "409b8d22eb50218ce99e987869a9f225256d13d5ecb609d05ac4b2e711a2ddf8",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000097"
          ]
        }
      },
      "modeSlots": false
    },
    "16000098": {
      "signature": "[[[23001049,\"Ziggy hits the nearest enemy with lightning strikes every second for x sec. These attacks cost no ammo.\"],[23001050,\"The next lightning strike also teleports Ziggy to the same location.\"]],[[23001047,\"Brawlers damaged by Ziggy's Super are slowed by x% for x sec.\"],[23001048,\"Hitting with a lightning strike increases the damage of the next main attack by x%.\"]]]",
      "base": {
        "modelId": "base:16000098",
        "model": [
          {
            "type": "damage",
            "operation": "lightning",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Call lightning to control space.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "38c4867c79d24b68965c8f599c0f42b868129e9089a847e06727e0e929485363",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001047": {
          "modelId": "gear:23001047",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "superHit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Brawlers damaged by Ziggy's Super are slowed by x% for x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000098",
          "sourceHash": "d53b23647a6e0dda974dbf660c0c9bb43f84a5a28954a80cc3c746ce9be22f4c",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000098"
          ]
        },
        "23001048": {
          "modelId": "gear:23001048",
          "model": [
            {
              "type": "damage",
              "operation": "boost",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "Hitting with a lightning strike increases the damage of the next main attack by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000098",
          "sourceHash": "6c614bc284c1c1b4e8e134acba368dce4aebe5000156b33eab791ac1814c7d24",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000098"
          ]
        },
        "23001049": {
          "modelId": "gear:23001049",
          "model": [
            {
              "type": "damage",
              "operation": "periodic",
              "condition": "always"
            },
            {
              "type": "ammo",
              "operation": "free",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Ziggy hits the nearest enemy with lightning strikes every second for x sec. These attacks cost no ammo.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000098",
          "sourceHash": "b20aacc7a7d8d07e284a6714bf9dcb4d6d54637836294a51a1f6c6ac7ded592f",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000098"
          ]
        },
        "23001050": {
          "modelId": "gear:23001050",
          "model": [
            {
              "type": "mobility",
              "operation": "teleport",
              "condition": "nextAttack"
            }
          ],
          "effects": [],
          "text": "The next lightning strike also teleports Ziggy to the same location.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000098",
          "sourceHash": "9da863b703173c3d528fc07553b801d972ca897340efe5fc437d0ed460124882",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000098"
          ]
        }
      },
      "modeSlots": false
    },
    "16000099": {
      "signature": "[[[23001062,\"Reload x ammo and drop a shell next to Pierce.\"],[23001063,\"Pierce will absorb all shells and gain x shield for each one, while also pushing back nearby enemies.\"]],[[23001060,\"Pierce's last ammo also slows enemies by x%.\"],[23001061,\"When collecting a shell, Pierce gains a short burst (15%) of movement speed.\"]]]",
      "base": {
        "modelId": "base:16000099",
        "model": [
          {
            "type": "damage",
            "operation": "lastShot",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "The last shot is key for damage.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "cbd24270b61be4ab6e81e648ab62f7952552b9ab88c281327d94077cf0a163a3",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001060": {
          "modelId": "gear:23001060",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "lastAmmo"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Pierce's last ammo also slows enemies by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000099",
          "sourceHash": "d8fd4af43d98393347ac2281c535fb1799049ecaf09f021aa91eb6b53ef3bb4f",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000099"
          ]
        },
        "23001061": {
          "modelId": "gear:23001061",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "pickup"
            }
          ],
          "effects": [],
          "text": "When collecting a shell, Pierce gains a short burst (15%) of movement speed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000099",
          "sourceHash": "d60b5a09fc0ffa1c178967d419b5d024a3fafe10c6d72db700f569f41fb8e98d",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000099"
          ]
        },
        "23001062": {
          "modelId": "gear:23001062",
          "model": [
            {
              "type": "ammo",
              "operation": "refill",
              "condition": "always"
            },
            {
              "type": "resource",
              "operation": "drop",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Reload x ammo and drop a shell next to Pierce.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000099",
          "sourceHash": "085dccb9fa6a91f5dcf8702ba7b821bd1f1fe790ec60e493206ca4e9af018542",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000099"
          ]
        },
        "23001063": {
          "modelId": "gear:23001063",
          "model": [
            {
              "type": "resource",
              "operation": "consume",
              "condition": "always"
            },
            {
              "type": "shield",
              "operation": "self",
              "condition": "resource"
            },
            {
              "type": "control",
              "operation": "knockback",
              "condition": "always"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "Pierce will absorb all shells and gain x shield for each one, while also pushing back nearby enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000099",
          "sourceHash": "4d6d109733e903742319249b1fca888a114f13ea1e0438302e1c0e5c69388602",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000099"
          ]
        }
      },
      "modeSlots": false
    },
    "16000100": {
      "signature": "[[[23001070,\"Super charging area is bigger.\"],[23001071,\"Gigi creates an area that makes herself and allies invisible while inside. Lasts x secs.\"]],[[23001068,\"Increases Super charge rate by x% if no damage has been received for x secs\"],[23001069,\"SHADOW PUPPET now heals for x after charging up.\"]]]",
      "base": {
        "modelId": "base:16000100",
        "model": [
          {
            "type": "mobility",
            "operation": "dodge",
            "condition": "always"
          },
          {
            "type": "mobility",
            "operation": "jump",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Dodge enemies, then jump in to finish them.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "381cdf726d06446367627db5b1a41f06cbb0a6b8a76d9fbd155f178255821e91",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001068": {
          "modelId": "gear:23001068",
          "model": [
            {
              "type": "super",
              "operation": "rate",
              "condition": "undamaged"
            }
          ],
          "effects": [],
          "text": "Increases Super charge rate by x% if no damage has been received for x secs",
          "source": "https://api.brawlapi.com/v1/brawlers/16000100",
          "sourceHash": "dc4483c77968361025479d75cf390f758b3ea27e6c93ab5546d2f4a72f5dae3f",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000100"
          ]
        },
        "23001069": {
          "modelId": "gear:23001069",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "charged"
            }
          ],
          "effects": [],
          "text": "SHADOW PUPPET now heals for x after charging up.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000100",
          "sourceHash": "119e4fb989491b95bba4f522d4f0cdb89f07445143d1182b09953082a4e49700",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000100"
          ]
        },
        "23001070": {
          "modelId": "gear:23001070",
          "model": [
            {
              "type": "super",
              "operation": "radius",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Super charging area is bigger.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000100",
          "sourceHash": "aa13284d2311bc99d8e0171a065d73e182a38491b28043a28731600488174f26",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000100"
          ]
        },
        "23001071": {
          "modelId": "gear:23001071",
          "model": [
            {
              "type": "vision",
              "operation": "allyInvisible",
              "condition": "area"
            }
          ],
          "effects": [],
          "text": "Gigi creates an area that makes herself and allies invisible while inside. Lasts x secs.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000100",
          "sourceHash": "550fb82d9860ae7bbaac8e8a0b046fa0b1e27f3d36369cddc9851b578a01ed56",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000100"
          ]
        }
      },
      "modeSlots": false
    },
    "16000101": {
      "signature": "[[[23001183,\"Glowy dashes in a target direction, healing himself and teammates for x on arrival.\"],[23001184,\"Glowy supercharges his glowbeam tethers, doubling the damage/healing rate for x secs.\"]],[[23001181,\"If Glowy is tethered to an enemy and a teammate at the same time, it will reduce the enemy damage by x% and increase the teammate's damage by x%.\"],[23001182,\"Tethering to an enemy also heals Glowy for x% of the damage dealt.\"]]]",
      "base": {
        "modelId": "base:16000101",
        "model": [
          {
            "type": "heal",
            "operation": "ally",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "fear",
            "condition": "always"
          }
        ],
        "effects": [
          "healAlly"
        ],
        "text": "Heal teammates and fear enemies.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "8ced037dc7a1cdc2163175e99d8f7655f6e98319bc4165540707e24f61e6b28b",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001181": {
          "modelId": "gear:23001181",
          "model": [
            {
              "type": "control",
              "operation": "damageReduction",
              "condition": "dualTether"
            },
            {
              "type": "support",
              "operation": "damage",
              "condition": "dualTether"
            }
          ],
          "effects": [],
          "text": "If Glowy is tethered to an enemy and a teammate at the same time, it will reduce the enemy damage by x% and increase the teammate's damage by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000101",
          "sourceHash": "eebfab5429775f1cbf092d556c933a7aece1ce23ad6f844eb1df351d560b1d35",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000101"
          ]
        },
        "23001182": {
          "modelId": "gear:23001182",
          "model": [
            {
              "type": "heal",
              "operation": "lifesteal",
              "condition": "tether"
            }
          ],
          "effects": [],
          "text": "Tethering to an enemy also heals Glowy for x% of the damage dealt.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000101",
          "sourceHash": "39e9f6b1769a3952c9273b16077cf7b7d09045dd52de4fdcd167474c9cc0ce42",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000101"
          ]
        },
        "23001183": {
          "modelId": "gear:23001183",
          "model": [
            {
              "type": "mobility",
              "operation": "dash",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "self",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "ally",
              "condition": "always"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Glowy dashes in a target direction, healing himself and teammates for x on arrival.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000101",
          "sourceHash": "aa229187159848385729ea22b46e4bf9bbc0e9c5fbaaa7d58c9950a0cd7076be",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000101"
          ]
        },
        "23001184": {
          "modelId": "gear:23001184",
          "model": [
            {
              "type": "damage",
              "operation": "rate",
              "condition": "tether"
            },
            {
              "type": "heal",
              "operation": "rate",
              "condition": "tether"
            }
          ],
          "effects": [],
          "text": "Glowy supercharges his glowbeam tethers, doubling the damage/healing rate for x secs.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000101",
          "sourceHash": "165ba0890c3dc133e20203128b248a5c4819fa03de98884bf1a66c6c1e60818e",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000101"
          ]
        }
      },
      "modeSlots": false
    },
    "16000102": {
      "signature": "[[[23001191,\"Sirius fires a projectile that summons a Shadow on hit, also slowing the hit target by x% for x sec.\"],[23001192,\"Summoned Shadows return to Sirius, who heals them for 25% of their health.\"]],[[23001189,\"Shadows have +15% movement speed.\"],[23001190,\"Each hit with a Shadow Strike counts as 2 to collect Brawler Shadows, instead of 1.\"]]]",
      "base": {
        "modelId": "base:16000102",
        "model": [
          {
            "type": "summon",
            "operation": "create",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use shadows to control the map.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "e4cda89b50450fdd7991f0d52482bd72ebb27636dce7046ed2a5c00357bcdbea",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001189": {
          "modelId": "gear:23001189",
          "model": [
            {
              "type": "summon",
              "operation": "speed",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Shadows have +15% movement speed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000102",
          "sourceHash": "38c0c3552ba344be1e5b1fa2c02a49cc4089fe7e396f554b72bf077d220104e4",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000102"
          ]
        },
        "23001190": {
          "modelId": "gear:23001190",
          "model": [
            {
              "type": "resource",
              "operation": "gain",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "Each hit with a Shadow Strike counts as 2 to collect Brawler Shadows, instead of 1.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000102",
          "sourceHash": "f1a8dcfe6dbfa85535aa4b5d83d386f4182a6557e0045c2698d0f329cee0da3a",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000102"
          ]
        },
        "23001191": {
          "modelId": "gear:23001191",
          "model": [
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "summon",
              "operation": "create",
              "condition": "hit"
            },
            {
              "type": "control",
              "operation": "slow",
              "condition": "hit"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Sirius fires a projectile that summons a Shadow on hit, also slowing the hit target by x% for x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000102",
          "sourceHash": "0121a2043950ffea399c66cc084acf5fa7d1c0bec546d5b9b71c7517ea802465",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000102"
          ]
        },
        "23001192": {
          "modelId": "gear:23001192",
          "model": [
            {
              "type": "summon",
              "operation": "recall",
              "condition": "always"
            },
            {
              "type": "summon",
              "operation": "heal",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Summoned Shadows return to Sirius, who heals them for 25% of their health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000102",
          "sourceHash": "b571dc58f8275238a9c0f7c02ed5373caeb67326b8f44a5bf067591341f0dbee",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000102"
          ]
        }
      },
      "modeSlots": false
    },
    "16000103": {
      "signature": "[[[23001218,\"All enemies currently poisoned by Najia will create poisonous puddles for the next x sec.\"],[23001219,\"Najia hides inside a vase. Once the vase is broken, she will knock back any nearby enemies!\"]],[[23001216,\"Brawlers defeated while poisoned by Najia will spawn a snake in their place.\"],[23001217,\"Poison damage scales with the target Brawler's current percent health, dealing up to an extra x damage when a target is at 100% health.\"]]]",
      "base": {
        "modelId": "base:16000103",
        "model": [
          {
            "type": "damage",
            "operation": "poison",
            "condition": "always"
          },
          {
            "type": "projectile",
            "operation": "range",
            "condition": "always"
          }
        ],
        "effects": [
          "poison",
          "rangeBoost"
        ],
        "text": "Massive range with added poison!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "32d7bf774fccb73f56041ad49dc91adbfda3ef6879e2850bc48c0cb0bc4f7109",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001216": {
          "modelId": "gear:23001216",
          "model": [
            {
              "type": "summon",
              "operation": "create",
              "condition": "poisonKill"
            }
          ],
          "effects": [],
          "text": "Brawlers defeated while poisoned by Najia will spawn a snake in their place.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000103",
          "sourceHash": "22dde3e449792e042d3961b2507429bf8dfdf8c6266a9f14b1f697f25bb45ab1",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000103"
          ]
        },
        "23001217": {
          "modelId": "gear:23001217",
          "model": [
            {
              "type": "damage",
              "operation": "healthScale",
              "condition": "highTargetHealth"
            }
          ],
          "effects": [],
          "text": "Poison damage scales with the target Brawler's current percent health, dealing up to an extra x damage when a target is at 100% health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000103",
          "sourceHash": "90561bca26282fd957a11ec1d49a0b1eef9fc94bfefb511c136ef5c5c4a8c6c0",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000103"
          ]
        },
        "23001218": {
          "modelId": "gear:23001218",
          "model": [
            {
              "type": "damage",
              "operation": "poisonArea",
              "condition": "poisoned"
            }
          ],
          "effects": [],
          "text": "All enemies currently poisoned by Najia will create poisonous puddles for the next x sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000103",
          "sourceHash": "a1c05206e68f23305a530e76ac9a413f717d1628b4897e612e15e71ac055a2c4",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000103"
          ]
        },
        "23001219": {
          "modelId": "gear:23001219",
          "model": [
            {
              "type": "defense",
              "operation": "cover",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "knockback",
              "condition": "destroyed"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "Najia hides inside a vase. Once the vase is broken, she will knock back any nearby enemies!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000103",
          "sourceHash": "5508e8337f338bb4b57c92a747701b04a81f11c739b37f9c88a6c6dc84bd5626",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000103"
          ]
        }
      },
      "modeSlots": false
    },
    "16000104": {
      "signature": "[[[23001247,\"Damian throws his microphone to a target location. The first teammate to pick it up is healed for x health.\"],[23001248,\"Damian summons a temporary wall of indestructible amps!\"]],[[23001245,\"Knocking a target into a wall stuns them for 0.5 sec.\"],[23001246,\"Damian has a flaming fist during his Super, which burns enemies.\"]]]",
      "base": {
        "modelId": "base:16000104",
        "model": [
          {
            "type": "mobility",
            "operation": "jump",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "area",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Jump in to unleash chaos!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "4b9154ea8914b1a93758d1d8fce2e5e207f33253eea2e7c4163064a2d43226b4",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001245": {
          "modelId": "gear:23001245",
          "model": [
            {
              "type": "control",
              "operation": "stun",
              "condition": "wallHit"
            }
          ],
          "effects": [
            "stun"
          ],
          "text": "Knocking a target into a wall stuns them for 0.5 sec.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000104",
          "sourceHash": "2928b9ba28759ea729c43c2be2a23933e8d52bdf601efef5436d0365ec4d0fa0",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000104"
          ]
        },
        "23001246": {
          "modelId": "gear:23001246",
          "model": [
            {
              "type": "damage",
              "operation": "burn",
              "condition": "super"
            }
          ],
          "effects": [],
          "text": "Damian has a flaming fist during his Super, which burns enemies.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000104",
          "sourceHash": "b4744a51a7662f9db8b9f93cda243bdaa6c44c5032e973e7191591aab0c7ce65",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000104"
          ]
        },
        "23001247": {
          "modelId": "gear:23001247",
          "model": [
            {
              "type": "heal",
              "operation": "ally",
              "condition": "pickup"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Damian throws his microphone to a target location. The first teammate to pick it up is healed for x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000104",
          "sourceHash": "6fa5fb3c4f50103ddca231b54f690b3d50d0fd1f03af427bb834e3f279dbba2f",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000104"
          ]
        },
        "23001248": {
          "modelId": "gear:23001248",
          "model": [
            {
              "type": "terrain",
              "operation": "create",
              "condition": "always"
            }
          ],
          "effects": [
            "wallCreate"
          ],
          "text": "Damian summons a temporary wall of indestructible amps!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000104",
          "sourceHash": "ec5553904fb7f7703455344b166a6787d466f5999c6729bb603694f7e12a2b0e",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000104"
          ]
        }
      },
      "modeSlots": false
    },
    "16000105": {
      "signature": "[[[23001255,\"Starr Nova deploys an anti-gravity device, allowing teammates to float inside of the area!\"],[23001256,\"Starr Nova fires an energy ball that damages enemies and heals teammates for x. This energy ball can also be teleported to before it hits a target!\"]],[[23001253,\"Hitting an enemy Brawler while transformed increases your damage by 4% to a maximum of x%.\"],[23001254,\"Starr Nova's main attack also heals teammates for x, charging her Super based on healing.\"]]]",
      "base": {
        "modelId": "base:16000105",
        "model": [
          {
            "type": "transform",
            "operation": "form",
            "condition": "always"
          },
          {
            "type": "damage",
            "operation": "poke",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Poke, then transform and strike!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "0e575a88f8ec5b9d8ab7d0c7e413853d43cfa31e67f7344b0759e3ae59a0214f",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001253": {
          "modelId": "gear:23001253",
          "model": [
            {
              "type": "damage",
              "operation": "stacking",
              "condition": "formHit"
            }
          ],
          "effects": [],
          "text": "Hitting an enemy Brawler while transformed increases your damage by 4% to a maximum of x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000105",
          "sourceHash": "abfb1027e90fe77995d5362f936dac1402f758675ce999e34069714b8b4439b9",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000105"
          ]
        },
        "23001254": {
          "modelId": "gear:23001254",
          "model": [
            {
              "type": "heal",
              "operation": "ally",
              "condition": "attackHit"
            },
            {
              "type": "super",
              "operation": "charge",
              "condition": "heal"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Starr Nova's main attack also heals teammates for x, charging her Super based on healing.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000105",
          "sourceHash": "37b47e536da3b2b92520e5da0b49a2db83756dde6cabea00dd6e0cbef80ff011",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000105"
          ]
        },
        "23001255": {
          "modelId": "gear:23001255",
          "model": [
            {
              "type": "mobility",
              "operation": "allyFloat",
              "condition": "area"
            }
          ],
          "effects": [],
          "text": "Starr Nova deploys an anti-gravity device, allowing teammates to float inside of the area!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000105",
          "sourceHash": "0585319de258db6e86af05f5f58f265355fbf6e2c4f536101f0a22987391252a",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000105"
          ]
        },
        "23001256": {
          "modelId": "gear:23001256",
          "model": [
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "heal",
              "operation": "ally",
              "condition": "always"
            },
            {
              "type": "mobility",
              "operation": "teleport",
              "condition": "always"
            }
          ],
          "effects": [
            "healAlly"
          ],
          "text": "Starr Nova fires an energy ball that damages enemies and heals teammates for x. This energy ball can also be teleported to before it hits a target!",
          "source": "https://api.brawlapi.com/v1/brawlers/16000105",
          "sourceHash": "71eae960805d2d63a9169cbf6a48bf54dc7eecc84ecb2c7e0bdb15cbf46ccc84",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000105"
          ]
        }
      },
      "modeSlots": false
    },
    "16000106": {
      "signature": "[[[23001281,\"Bolt gains a x - x health shield based on his current speed.\"],[23001282,\"Bolt jumps to a target location and deals area damage. Breaks environments but loses all speed when landing.\"]],[[23001279,\"Bolt will knock enemies upwards when he's at full speed.\"],[23001280,\"Bolt is immune to crowd control for 1 seconds after activating his Super.\"]]]",
      "base": {
        "modelId": "base:16000106",
        "model": [
          {
            "type": "mobility",
            "operation": "momentum",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Avoid walls and sharp turns for speed!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "73f09b404e52c0e9a46e4e5ea07e4970b0241e695eb9518e38a43e744ba92d13",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001279": {
          "modelId": "gear:23001279",
          "model": [
            {
              "type": "control",
              "operation": "knockup",
              "condition": "maxSpeed"
            }
          ],
          "effects": [],
          "text": "Bolt will knock enemies upwards when he's at full speed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000106",
          "sourceHash": "9ebd63009097973e8ad21ef37ecd32a28eb8fc370e829b7738ec54bc93177733",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000106"
          ]
        },
        "23001280": {
          "modelId": "gear:23001280",
          "model": [
            {
              "type": "defense",
              "operation": "controlImmune",
              "condition": "super"
            }
          ],
          "effects": [
            "immunity"
          ],
          "text": "Bolt is immune to crowd control for 1 seconds after activating his Super.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000106",
          "sourceHash": "c67324218a4a002a4dcc72add6dfaba25ab3a465f58ac65e24a28df299a9a0bf",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000106"
          ]
        },
        "23001281": {
          "modelId": "gear:23001281",
          "model": [
            {
              "type": "shield",
              "operation": "self",
              "condition": "speed"
            }
          ],
          "effects": [],
          "text": "Bolt gains a x - x health shield based on his current speed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000106",
          "sourceHash": "4124cb5e5f3f3d87aba9aea160c0f78151d1f7d23d0f322ce255590639152047",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000106"
          ]
        },
        "23001282": {
          "modelId": "gear:23001282",
          "model": [
            {
              "type": "mobility",
              "operation": "jump",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "area",
              "condition": "always"
            },
            {
              "type": "terrain",
              "operation": "destroy",
              "condition": "always"
            },
            {
              "type": "cost",
              "operation": "speed",
              "condition": "always"
            }
          ],
          "effects": [
            "wallBreak"
          ],
          "text": "Bolt jumps to a target location and deals area damage. Breaks environments but loses all speed when landing.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000106",
          "sourceHash": "68fb79f08200e316e4ca8b8036c8e5748d3ee319ca3e9cc08ae93720b306ba3d",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000106"
          ]
        }
      },
      "modeSlots": false
    },
    "16000107": {
      "signature": "[[[23001297,\"Nori eats up to x fish to heal himself for x per fish.\"],[23001298,\"Aim a fishing net that roots the first Brawler hit for x sec and deals x damage.\"]],[[23001295,\"Nori catches 3 fish when his Super hits enemy Brawlers.\"],[23001296,\"Nori gains +20% speed for 1 sec whenever he hits an enemy with his Main Attack.\"]]]",
      "base": {
        "modelId": "base:16000107",
        "model": [
          {
            "type": "mobility",
            "operation": "jump",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Jump around the map and cause chaos!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "bf92e98ff0759bead5a1b77dc1d7738b0acab98d463ba9ed48d62c9a7b818851",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001295": {
          "modelId": "gear:23001295",
          "model": [
            {
              "type": "resource",
              "operation": "gain",
              "condition": "superHit"
            }
          ],
          "effects": [],
          "text": "Nori catches 3 fish when his Super hits enemy Brawlers.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000107",
          "sourceHash": "8d63c59124e0dd3957e970f1ec3c0e648f89e8f5d399401e8ba2f5b5a36a4537",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000107"
          ]
        },
        "23001296": {
          "modelId": "gear:23001296",
          "model": [
            {
              "type": "mobility",
              "operation": "speed",
              "condition": "hit"
            }
          ],
          "effects": [],
          "text": "Nori gains +20% speed for 1 sec whenever he hits an enemy with his Main Attack.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000107",
          "sourceHash": "01aba0670bb2fc0cc087251dad18f3e9668ffc9bddd5bea473443928f2a9b3e6",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000107"
          ]
        },
        "23001297": {
          "modelId": "gear:23001297",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "resource"
            },
            {
              "type": "cost",
              "operation": "resource",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Nori eats up to x fish to heal himself for x per fish.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000107",
          "sourceHash": "eefb81471e7f2ccb1b5f01136808bc601aa0ddec8bb65b2c59af245fca57bf75",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000107"
          ]
        },
        "23001298": {
          "modelId": "gear:23001298",
          "model": [
            {
              "type": "control",
              "operation": "root",
              "condition": "always"
            },
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Aim a fishing net that roots the first Brawler hit for x sec and deals x damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000107",
          "sourceHash": "a54b63d444db2718e580d1b7465e563ad906f307d89109d1af7b64b146092bda",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000107"
          ]
        }
      },
      "modeSlots": false
    },
    "16000108": {
      "signature": "[[[23001320,\"Wendy's platform gives her a boost and she jumps a short distance.\"],[23001321,\"Wendy launches a wind grenade that slows all enemies hit and stops them healing momentarily.\"]],[[23001318,\"Enemies in Wendy's shield generator are slowed.\"],[23001319,\"Wendy's shield generator gains an additional x health.\"]]]",
      "base": {
        "modelId": "base:16000108",
        "model": [
          {
            "type": "shield",
            "operation": "ally",
            "condition": "always"
          },
          {
            "type": "control",
            "operation": "zone",
            "condition": "always"
          }
        ],
        "effects": [
          "teamShield"
        ],
        "text": "Shield teammates and hold ground.",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "11e23649e8f649a3d26b6b2944a5d054d068166ef456f13c4aa76bc74aa6d778",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001318": {
          "modelId": "gear:23001318",
          "model": [
            {
              "type": "control",
              "operation": "slow",
              "condition": "summonArea"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Enemies in Wendy's shield generator are slowed.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000108",
          "sourceHash": "51a0274d1a5399f782432b4abedc63f8a4e13542b449cddbf8b345d9d2d7f174",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000108"
          ]
        },
        "23001319": {
          "modelId": "gear:23001319",
          "model": [
            {
              "type": "summon",
              "operation": "health",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Wendy's shield generator gains an additional x health.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000108",
          "sourceHash": "8bc2f25e5eeaf68e8df980d465facecf5165d810efc300dc1862f5e6cd27ab0a",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000108"
          ]
        },
        "23001320": {
          "modelId": "gear:23001320",
          "model": [
            {
              "type": "mobility",
              "operation": "jump",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Wendy's platform gives her a boost and she jumps a short distance.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000108",
          "sourceHash": "71cf5cf446edbc729cef3b64406add848f2e5ab10dcd01226cb1119e95eb44a6",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000108"
          ]
        },
        "23001321": {
          "modelId": "gear:23001321",
          "model": [
            {
              "type": "damage",
              "operation": "projectile",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "slow",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "antiHeal",
              "condition": "always"
            }
          ],
          "effects": [
            "slow",
            "antiHeal"
          ],
          "text": "Wendy launches a wind grenade that slows all enemies hit and stops them healing momentarily.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000108",
          "sourceHash": "79be31f7d9e3adbe3002e129eacf4a7c25bc8943124b87ccd1a0d2f98824e39b",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000108"
          ]
        }
      },
      "modeSlots": false
    },
    "16000109": {
      "signature": "[[[23001444,\"Cosmo knocks enemies back from the targeted area.\"],[23001445,\"Cosmo uses his telescope to reveal an area for xs sec, including invisible enemies. Enemy Brawlers inside this area cannot use movement abilities (dashes, jumps, teleports, etc.).\"]],[[23001442,\"Increases the orbit speed of Cosmo's main attack by x%.\"],[23001443,\"Hitting an enemy with Cosmo's Super reloads 2 ammo.\"]]]",
      "base": {
        "modelId": "base:16000109",
        "model": [
          {
            "type": "projectile",
            "operation": "orbit",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Use gravity to target enemies!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "9225bc1970bf96171146ca4b17f31fbb1ff53cf8d5d28fa8d7be72a06f96a9f3",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001442": {
          "modelId": "gear:23001442",
          "model": [
            {
              "type": "projectile",
              "operation": "orbitSpeed",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Increases the orbit speed of Cosmo's main attack by x%.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000109",
          "sourceHash": "0606aa84645d1239424748ff9520f137413de026fbf56c016425847f89bba091",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000109"
          ]
        },
        "23001443": {
          "modelId": "gear:23001443",
          "model": [
            {
              "type": "ammo",
              "operation": "refill",
              "condition": "superHit"
            }
          ],
          "effects": [],
          "text": "Hitting an enemy with Cosmo's Super reloads 2 ammo.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000109",
          "sourceHash": "6f19e51aab848774fd2866e08913f4f4f28bf8a6bfd1f323414f761ab92692db",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000109"
          ]
        },
        "23001444": {
          "modelId": "gear:23001444",
          "model": [
            {
              "type": "control",
              "operation": "knockback",
              "condition": "always"
            }
          ],
          "effects": [
            "knockback"
          ],
          "text": "Cosmo knocks enemies back from the targeted area.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000109",
          "sourceHash": "0f79217f6aa60b3028089128798cd5e6afeb083a16ba00676c32affddf41ffaf",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000109"
          ]
        },
        "23001445": {
          "modelId": "gear:23001445",
          "model": [
            {
              "type": "vision",
              "operation": "reveal",
              "condition": "always"
            },
            {
              "type": "control",
              "operation": "root",
              "condition": "area"
            }
          ],
          "effects": [
            "slow"
          ],
          "text": "Cosmo uses his telescope to reveal an area for xs sec, including invisible enemies. Enemy Brawlers inside this area cannot use movement abilities (dashes, jumps, teleports, etc.).",
          "source": "https://api.brawlapi.com/v1/brawlers/16000109",
          "sourceHash": "252fe2450dbadde7610a0ed3856cd455fb845655fe87e1122cf99551015a38ef",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000109"
          ]
        }
      },
      "modeSlots": false
    },
    "16000110": {
      "signature": "[[[23001452,\"Vince throws an explosive cappuccino, dealing area damage.\"],[23001453,\"Vince turns all nearby caterpillars into moths, gaining an additional moth for each collected.\"]],[[23001450,\"Nearby caterpillars crawl towards Vince.\"],[23001451,\"Turning a caterpillar into a moth heals Vince for x.\"]]]",
      "base": {
        "modelId": "base:16000110",
        "model": [
          {
            "type": "resource",
            "operation": "gather",
            "condition": "always"
          },
          {
            "type": "resource",
            "operation": "power",
            "condition": "always"
          }
        ],
        "effects": [],
        "text": "Collect caterpillars to become more powerful!",
        "source": "https://api.brawlapi.com/game/localization/texts",
        "sourceHash": "204b4623de28ce1f8aab45870b79152e6bb75255db91e5a3219d5b8939c116a7",
        "kind": "base",
        "modeSlot": false,
        "historical": false
      },
      "gear": {
        "23001450": {
          "modelId": "gear:23001450",
          "model": [
            {
              "type": "resource",
              "operation": "gather",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Nearby caterpillars crawl towards Vince.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000110",
          "sourceHash": "1ab6cfe66931913f63da1691928f67896dcad03ec794ef31e48074e80f3d32ca",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000110"
          ]
        },
        "23001451": {
          "modelId": "gear:23001451",
          "model": [
            {
              "type": "heal",
              "operation": "self",
              "condition": "convert"
            }
          ],
          "effects": [],
          "text": "Turning a caterpillar into a moth heals Vince for x.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000110",
          "sourceHash": "2a352794c7b8432ff08e8e3b40f3a123c6f7e1e1777a72cd6b2c74089900307c",
          "kind": "stars",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000110"
          ]
        },
        "23001452": {
          "modelId": "gear:23001452",
          "model": [
            {
              "type": "damage",
              "operation": "area",
              "condition": "always"
            }
          ],
          "effects": [],
          "text": "Vince throws an explosive cappuccino, dealing area damage.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000110",
          "sourceHash": "a19b9bb8eae55311669edcbe0147ee438c4e9b19dbd090a924224daf3645259f",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000110"
          ]
        },
        "23001453": {
          "modelId": "gear:23001453",
          "model": [
            {
              "type": "resource",
              "operation": "convert",
              "condition": "always"
            },
            {
              "type": "summon",
              "operation": "create",
              "condition": "resource"
            }
          ],
          "effects": [],
          "text": "Vince turns all nearby caterpillars into moths, gaining an additional moth for each collected.",
          "source": "https://api.brawlapi.com/v1/brawlers/16000110",
          "sourceHash": "bff64dd6c2db32c77094443a927d617efdfc94b7f38b1acde5a90dca5203944c",
          "kind": "gadgets",
          "modeSlot": false,
          "historical": false,
          "relatedSources": [
            "https://api.brawlapi.com/v1/brawlers/16000110"
          ]
        }
      },
      "modeSlots": false
    }
  }
};
