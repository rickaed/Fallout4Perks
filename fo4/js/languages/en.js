console.log('DEBUG EN');
const en = {
    st: {
        l1: {
            name: 'Iron Fist',
            rank1: 'Channel your chi to unleash devastating fury! Punching attacks now do 20% more damage.',
            rank2: 'Punching attacks now do 40% more damage and can disarm your opponent.',
            rank3: 'Punching attacks now do 60% more damage. Unarmed Power Attacks have a chance to cripple one of your opponent\'s limbs.',
            rank4: 'Attacks made with fists or weapons worn on the hands 80% more damage. Unarmed Power Attacks have an increased chance to cripple one of your opponent\'s limbs.',
            rank5: 'Attacks made with fists or weapons worn on the hands inflict 100% more damage. Criticals in V.A.T.S. will paralyse your opponents.'
        },
        l2: {
            name: 'Big Leagues',
            rank1: 'Swing for the fences! Do 20% more melee weapon damage.',
            rank2: 'You now do 40% more melee weapon damage and gain a chance to disarm your opponent.',
            rank3: 'You now do 60% more melee weapon damage and gain an increased chance to disarm your opponent.',
            rank4: 'You now do 80% more melee weapon damage and hit all targets in front of you.',
            rank5: 'You now do double damage with a melee weapon, and gain a chance to cripple your opponent, or grand slam their head clean off!'
        },
        l3: {
            name: 'Armorer',
            rank1: 'Protect yourself from the dangers of the Wasteland with access to base level and Rank 1 armor mods.',
            rank2: 'You gain access to Rank 2 armor mods',
            rank3: 'You gain access to Rank 3 armor mods',
            rank4: 'You gain access to Rank 4 armor mods'
        },
        l4: {
            name: 'Blacksmith',
            rank1: 'Fire up the forge and gain access to base level and Rank 1 melee weapon mods.',
            rank2: 'You gain access to Rank 2 melee weapon mods',
            rank3: 'You gain access to Rank 3 melee weapon mods'
        },
        l5: {
            name: 'Heavy Gunner',
            rank1: 'Thanks to practice and conditioning, heavy guns do 20% more damage.',
            rank2: 'Heavy guns now do 40% more damage, and have improved hip fire accuracy.',
            rank3: 'Heavy guns now do 60% more damage. Hip fire accuracy is increased even more.',
            rank4: 'Heavy guns now do 80% more damage and have a chance to stagger your opponent.',
            rank5: 'Heavy guns now do double damage.'
        },
        l6: {
            name: 'Strong Back',
            rank1: 'What are you, part pack mule? Gain +25 to carry weight',
            rank2: 'You now have +50 to carry weight.',
            rank3: 'When overencumbered, you can use Action Points to run.',
            rank4: 'When overencumbered, you can fast travel.',
            rank5: 'When overencumbered, running costs 50% less action points.(Far Harbor DLC)'
        },
        l7: {
            name: 'Steady Aim',
            rank1: 'Stay on target! Hip-fire accuracy is improved when firing any gun.',
            rank2: 'Hip-fire accuracy is improved even more when firing any gun.',
            rank3: 'Hip-fire accuracy is improved when firing any gun.(Nuka-World DLC)'
        },
        l8: {
            name: 'Basher',
            rank1: 'Get up close and personal! Gun bashing does 25% more damage.',
            rank2: 'Gun bashing now does 50% more damage and possibly cripples your opponent.',
            rank3: 'Gun bashing now does 75% more damage and has an increased chance to cripple your opponent.',
            rank4: 'Gun bashing does double damage and has an increased chance to cripple your opponent. It may also inflict a Critical Hit.'
        },
        l9: {
            name: 'Rooted',
            rank1: 'You\'re part tree! While standing still, you gain +25 Damage Resistance and your melee and unarmed attacks deal 25% more damage.',
            rank2: 'While standing still, you now gain +50 Damage Resistance and your melee and unarmed attacks deal 50% more damage.',
            rank3: 'While standing still, you may automatically disarm enemies that use melee weapons against you.'
        },
        l10: {
            name: 'Pain Train',
            rank1: 'Choo Choo! All aboard! While wearing Power Armor,sprinting into enemies hurts and staggers them. (Robots and oversized enemies are immune to the stagger.)',
            rank2: 'Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger. (Robots and oversized enemies are immune to the stagger.)',
            rank3: 'Sprinting into enemies while wearing Power Armor now causes massive damage and knocks them down. Impact landing near enemies inflicts even more damage.'
        }
    },
    pe: {
        l1: {
            name: 'Pickpocket',
            rank1: 'Your quick hands and sticky fingers make picking pockets 25% easier.',
            rank2: 'Picking pockets is now 50% easier. You can place a live grenade in a person\'s inventory.',
            rank3: 'Picking pockets is now 75% easier, and you can steal equipped weapons.',
            rank4: 'Picking pockets is now twice as easy, and you can steal equipped items.'
        },
        l2: {
            name: 'Rifleman',
            rank1: 'Keep your distance long and your kill-count high. Attacks with non-automatic rifles do 20% more damage',
            rank2: 'Attacks with non-automatic rifles do 40% more damage and ignore 15% of a target\'s armor.',
            rank3: 'Attacks with non-automatic rifles do 60% more damage and ignore 20% of a target\'s armor.',
            rank4: 'Attacks with non-automatic rifles do 80% more damage and ignore 25% of a target\'s armor. They also have a slight chance of crippling a limb.',
            rank5: 'Attacks with non-automatic rifles do double damage and ignore 30% of a target\'s armor. They also have a slightly higher chance of crippling a limb.'
        },
        l3: {
            name: 'Awareness',
            rank1: 'To defeat your enemies, know their weaknesses! You can view a target\'s specific damage resistances in V.A.T.S.',
            rank2: 'Knowing their weaknesses lets you attack more efficiently. 5% increase to hit chance and damage dealt to VATS targets.(Nuka-World DLC)'
        },
        l4: {
            name: 'Locksmith',
            rank1: 'Your nimble fingers allow you to pick advanced locks.',
            rank2: 'You can pick Expert locks.',
            rank3: 'You can pick Master locks.',
            rank4: 'Your bobby pins never break during lockpicking.'
        },
        l5: {
            name: 'Demolition Expert',
            rank1: 'The bigger the boom, the better! Your explosives do 25% more damage, and you can craft explosives at any Chemistry Station.',
            rank2: 'Your explosives do 50% more damage, and grenades gain a throwing arc.',
            rank3: 'Your explosives do 75% more damage and affect a larger area.',
            rank4: 'Your explosives now do double damage. Mines and grenades shot in V.A.T.S explode for double damage, too.'
        },
        l6: {
            name: 'Night Person',
            rank1: 'You are a creature of the night! Gain +2 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m.',
            rank2: 'You now have +3 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m., and night vision when sneaking.',
            rank3: 'You have 30 extra health between the hours of 6:00 PM and 6:00 AM.(Far Harbor DLC)'
        },
        l7: {
            name: 'Refractor',
            rank1: 'You must be part mirror! Instantly gain +10 Energy Resistance.',
            rank2: 'You now have +20 Energy Resistance.',
            rank3: 'You now have +30 Energy Resistance.',
            rank4: 'You now have +40 Energy Resistance.',
            rank5: 'You now have +50 Energy Resistance.'
        },
        l8: {
            name: 'Sniper',
            rank1: 'It\'s all about focus. You have improved control and can hold your breath longer when aiming with scopes.',
            rank2: 'Non-automatic, scoped rifles have a chance of knocking down your target.',
            rank3: 'Non-automatic, scoped rifles gain +25% accuracy to head shot in V.A.T.S.'
        },
        l9: {
            name: 'Penetrator',
            rank1: 'There\'s no place to hide! In V.A.T.S you can target an enemy\'s body parts that are blocked by cover, with a decrease in accuracy.',
            rank2: 'In V.A.T.S when you target an enemy\'s body parts that are blocked by cover, there is no decrease in accuracy.'
        },
        l10: {
            name: 'Concentrated Fire',
            rank1: 'Stay Focused! In V.A.T.S every attack on the same body part gains +10% accuracy.',
            rank2: 'In V.A.T.S every attack on the same body part gains +15% accuracy.',
            rank3: 'In V.A.T.S every attack on the same body part gains +20% accuracy and does 20% more damage.'
        }
    },
    en: {
        l1: {
            name: 'Toughness',
            rank1: 'If nothing else, you can take a beating! Instantly gain +10 Damage Resistance',
            rank2: 'You now have +20 damage resistance.',
            rank3: 'You now have +30 damage resistance.',
            rank4: 'You now have +40 damage resistance.',
            rank5: 'You now have +50 damage resistance.'
        },
        l2: {
            name: 'Lead Belly',
            rank1: 'Your digestive tract has adjusted to the weirdness of the Wasteland! Take less radiation from eating or drinking.',
            rank2: 'You take even less radiation from eating or drinking.',
            rank3: 'You take no radiation from eating or drinking.'
        },
        l3: {
            name: 'Life Giver',
            rank1: 'You embody wellness! Instantly gain +20 maximum Health.',
            rank2: 'You instantly gain another +20 maximum Health.',
            rank3: 'You instantly gain another +20 maximum Health, and slowly regenerate lost Health.'
        },
        l4: {
            name: 'Chem Resistant',
            rank1: 'All the rush without the hassle! You\'re 50% less likely to get addicted when consuming Chems.',
            rank2: 'You gain complete immunity to chem addiction.'
        },
        l5: {
            name: 'Aquaboy',
            rank1: 'Water is your ally. You no longer take radiation damage from swimming, and can breathe underwater',
            rank2: 'You become totally undetectable while submerged.'
        },
        l6: {
            name: 'Rad Resistant',
            rank1: 'Exposure to the Wasteland has made you more resilient, instantly granting +10 Radiation Resistance.',
            rank2: 'You now have +20 Radiation Resistance.',
            rank3: 'You now have +30 Radiation Resistance.',
            rank4: 'You now have +40 Radiation Resistance. (Far Harbor DLC)'
        },
        l7: {
            name: 'Adamantium Skeleton',
            rank1: 'Your skeleton has been infused with indestructible metal, reducing limb damage by 30%.',
            rank2: 'Your limb damage is now reduced by 60%.',
            rank3: 'Your limb damage is completely eliminated.'
        },
        l8: {
            name: 'Cannibal',
            rank1: 'Feast on mortal flesh to heal your wounds! Eating human corpses restores Health.',
            rank2: 'Eating Ghoul or Super Mutant corpses restores Health.',
            rank3: 'Eating human, Ghoul or Super Mutant corpses now restores a significant amount of Health.'
        },
        l9: {
            name: 'Ghoulish',
            rank1: 'Sure, you\'re still human - on the outside! Radiation now regenerates your lost Health.',
            rank2: 'Radiation now regenerates even more of your lost Health.',
            rank3: 'Radiation now regenerates even more of your lost Health, and some Feral Ghouls will randomly become friendly.',
            rank4: 'Rad damage will now begin to slowly heal, restoring health in the process. (Nuka-World DLC)'
        },
        l10: {
            name: 'Solar Powered',
            rank1: 'Catch some rays! Gain +2 to Strength and Endurance between the hours of 6:00a.m. and 6:00p.m.',
            rank2: 'Sunlight slowly heals your radiation damage.',
            rank3: 'Sunlight slowly regenerates your lost Health.'
        }
    },
    ch: {
        l1: {
            name: 'Cap Collector',
            rank1: 'You\'ve mastered the art of the deal! Buying and selling prices at vendors are better.',
            rank2: 'Buying and selling prices of vendors are now much better.',
            rank3: 'You can now invest a total of 500 caps to raise a store\'s buying capacity.'
        },
        l2: {
            name: 'Lady Killer',
            rank1: 'You\'re charming... and dangerous. Men/Women suffer +5% damage in combat, and are easier to persuade in dialogue.',
            rank2: 'Men/Women now suffer +10% damage in combat, and are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk.',
            rank3: 'Men/Women now suffer +15% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.'
        },
        l3: {
            name: 'Lone Wanderer',
            rank1: 'Who needs friends, anyway? When adventuring without a companion, you take 15% less damage and carry weight increases by 50.',
            rank2: 'When adventuring without a companion, you take 20% less damage and carry weight increases by 100',
            rank3: 'When adventuring without a companion, you do 25% more damage.',
            rank4: 'When adventuring without a companion, you have 25 more action points.(Far Harbor DLC)'
        },
        l4: {
            name: 'Attack Dog',
            rank1: 'Your faithful canine companion can hold an enemy, giving you a greater chance to hit them in V.A.T.S.',
            rank2: 'When your dog holds an enemy, there\'s a chance he\'ll cripple the limb he\'s biting.',
            rank3: 'When your dog holds an enemy, there\'s a chance he\'ll cause them to bleed.',
            rank4: 'When adventuring with your dog, you take 10% less damage. (Nuka-World DLC)'
        },
        l5: {
            name: 'Animal Friend',
            rank1: 'Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it.',
            rank2: 'When you successfully pacify an animal, you can incite it to attack',
            rank3: 'When you successfully pacify an animal, you can give it specific commands'
        },
        l6: {
            name: 'Local Leader',
            rank1: 'As the ruler everyone turns to, you are able to establish supply lines between your workshop settlements.',
            rank2: 'You can build stores and workstations at workshop settlements.'
        },
        l7: {
            name: 'Party Boy',
            rank1: 'Nobody has a good time like you! There\'s no chance you\'ll get addicted to alcohol.',
            rank2: 'The effects of alcohol are doubled.',
            rank3: 'Your Luck is increased by 3 while you\'re under the influence of alcohol.'
        },
        l8: {
            name: 'Inspiration',
            rank1: 'Because you lead by example, your companion does more damage in combat, and cannot hurt you.',
            rank2: 'Your companion resists more damage in combat, and can\'t be harmed by your attacks.',
            rank3: 'Your companion can carry more items.'
        },
        l9: {
            name: 'Wasteland Whisperer',
            rank1: 'Master the post-apocalypse! With your gun, aim at any Wasteland creature below your level and gain a chance to pacify it.',
            rank2: 'When you successfully pacify a creature, you can incite it to attack.',
            rank3: 'When you successfully pacify a creature, you can give it specific commands.'
        },
        l10: {
            name: 'Intimidation',
            rank1: 'Time to show everyone who\'s boss! With your gun, aim at any human opponent below your level and gain a chance to pacify them.',
            rank2: 'When you successfully pacify someone, you can incite them to attack.',
            rank3: 'When you successfully pacify someone, you can give them specific commands.'
        }
    },
    in: {
        l1: {
            name: 'V.A.N.S.',
            rank1: 'Let Vault-Tec guide you! The path to your closest quest target is displayed in V.A.T.S.',
            rank2: 'Gain +2 to Perception. (Nuka-World DLC)'
        },
        l2: {
            name: 'Medic',
            rank1: 'Is there a doctor in the house? Stimpaks restore 40% of lost Health, and RadAway removes 40% of radiation.',
            rank2: 'Stimpaks restore 60% of lost Health, and RadAway removes 60% of radiation.',
            rank3: 'Stimpaks restore 80% of lost Health, and RadAway removes 80% of radiation.',
            rank4: 'Stimpaks and RadAway restore all lost health and radiation, and work much more quickly.'
        },
        l3: {
            name: 'Gun Nut',
            rank1: 'You gain access to base level and Rank 1 gun mods.',
            rank2: 'You gain access to Rank 2 gun mods.',
            rank3: 'You gain access to Rank 3 gun mods.',
            rank4: 'You gain access to Rank 4 gun mods.'
        },
        l4: {
            name: 'Hacker',
            rank1: 'Knowledge of cutting-edge computer encryption allows you to hack Advanced terminals.',
            rank2: 'You can hack Expert terminals.',
            rank3: 'You can hack Master terminals.',
            rank4: 'When hacking, you never get locked out of a terminal when things go wrong.'
        },
        l5: {
            name: 'Scrapper',
            rank1: 'Waste not, want not! You can salvage uncommon components like screws, aluminum, and copper when scrapping weapons and armor.',
            rank2: 'You can salvage rare components like circuitry, nuclear material, and fiber optics when scrapping weapons and armor. Items with favorited components are highlighted.',
            rank3: 'You get more from salvaging. Appears to only apply to uncommon components, i.e., those affected by the first level of the perk. (Far Harbor DLC)',
        },
        l6: {
            name: 'Science',
            rank1: 'Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods.',
            rank2: 'You gain access to Rank 2 high-tech mods.',
            rank3: 'You gain access to Rank 3 high-tech mods.',
            rank4: 'You gain access to Rank 4 high-tech mods.'
        },
        l7: {
            name: 'Chemist',
            rank1: 'Any chems you take last 50% longer. Far out.',
            rank2: 'Any chems you take now last twice as long.',
            rank3: 'Any chems you take now last an additional 150% longer.',
            rank4: 'Any chems you take now last an additional 200% longer.'
        },
        l8: {
            name: 'Robotics Expert',
            rank1: 'Machines will always serve humans, if you have anything to say about it. Hack a robot, and gain a chance to power it on or off, or initiate a self-destruct.',
            rank2: 'When you successfully hack a robot, you can incite it to attack.',
            rank3: 'When you successfully hack a robot, you can give it specific commands.'
        },
        l9: {
            name: 'Nuclear Physicist',
            rank1: 'You\'ve learned to split the atom... and command it. Radiation weapons do 50% more damage and Fusion Cores last an extra 25% longer.',
            rank2: 'Radiation weapons now do double damage and Fusion Cores last an extra 50% longer.',
            rank3: 'Fusion Cores can be ejected from Power Armor like devastating grenades and Fusion Cores last twice as long.'
        },
        l10: {
            name: 'Nerd Rage',
            rank1: 'Genius. Is. ANGRY! When your Health drops below 20%, time slows and you gain +20 Damage resistance and do 20% more damage while the effect lasts.',
            rank2: 'You now gain 30 more Damage Resistance and do 30% more damage while Nerd Rage is in effect.',
            rank3: 'You now gain 40 more Damage Resistance and do 40% more damage while Nerd Rage is in effect. Kills you make while enraged restore some lost Health.'
        }
    },
    ag: {
        l1: {
            name: 'Gunslinger',
            rank1: 'Channel the spirit of the old west! Non-automatic pistols do 20% more damage.',
            rank2: 'Non-automatic pistols now do 40% more damage and have increased range.',
            rank3: 'Non-automatic pistols now do 60% more damage and range is increased even further.',
            rank4: 'Non-automatic pistols now do 80% more damage and their attacks can disarm opponents.',
            rank5: 'Non-automatic pistols now do double damage. Their attacks have a much better chance to disarm opponents, and may even cripple a limb.'
        },
        l2: {
            name: 'Commando',
            rank1: 'Rigorous combat training means automatic weapons do 20% more damage',
            rank2: 'Attacks with automatic weapons do 40% more damage, with improved hip fire accuracy.',
            rank3: 'Attacks with automatic weapons do 60% more damage. Hip fire accuracy is improved even more.',
            rank4: 'Attacks with automatic weapons do 80% more damage and gain a chance to stagger opponents.',
            rank5: 'Your automatic weapons now do double damage and have a greater chance to stagger opponents.'
        },
        l3: {
            name: 'Sneak',
            rank1: 'Become whisper, become shadow. You are 20% harder to detect while sneaking.',
            rank2: 'You are now 30% harder to detect while sneaking, and no longer trigger floor-based traps.',
            rank3: 'You are now 40% harder to detect while sneaking, and no longer trigger enemy mines.',
            rank4: 'You are now 50% harder to detect while sneaking, and running no longer adversely affects stealth.',
            rank5: 'Engaging stealth causes distant enemies to lose you.'
        },
        l4: {
            name: 'Mister Sandman',
            rank1: 'As an agent of death, you can instantly kill a sleeping person. Your silenced weapons do an additional 15% sneak attack damage.',
            rank2: 'Your silenced weapons do an additional 30% sneak attack damage.',
            rank3: 'Your silenced weapons now do 50% more sneak attack damage.'
        },
        l5: {
            name: 'Action Boy',
            rank1: 'There\'s no time to waste! Action Points regenerate 25% faster.',
            rank2: 'Your Action Points now regenerate 50% faster.',
            rank3: 'Your Action Points now regenerate 75% faster. (Far Harbor DLC)'
        },
        l6: {
            name: 'Moving Target',
            rank1: 'They can\'t hurt what they can\'t hit! Get 25+ Damage Resistance and 25+ Energy Resistance when you\'re sprinting.',
            rank2: 'You now get +50 Damage Resistance and +50 Energy Resistance when you\'re sprinting.',
            rank3: 'Sprinting costs 50% fewer Action Points.'
        },
        l7: {
            name: 'Ninja',
            rank1: 'Trained as a shadow warrior, your ranged sneak attack do 2.5x normal damage and your melee attacks do 4x normal damage.',
            rank2: 'Your ranged sneak attacks do 3x normal damage and your melee sneak attacks do 5x normal damage.',
            rank3: 'Your ranged sneak attacks do 3.5x normal damage and your melee sneak attacks do 10x normal damage.'
        },
        l8: {
            name: 'Quick Hands',
            rank1: 'In combat, there\'s no time to hesitate. You can reload all guns faster.',
            rank2: 'Reloading guns costs no Action Points in V.A.T.S.',
            rank3: 'Quick and efficient. You gain 10 additional Action Points. (Nuka-World DLC)'
        },
        l9: {
            name: 'Blitz',
            rank1: 'Find the gap and make the tackle! V.A.T.S. melee distance is increased significantly.',
            rank2: 'V.A.T.S. melee distance is increased even more, and the farther the Blitz distance, the greater the damage.'
        },
        l10: {
            name: 'Gun Fu',
            rank1: 'You\'ve learned to apply ancient martial arts to gunplay! Do 25% more damage to your second V.A.T.S. target and beyond.',
            rank2: 'In V.A.T.S. you do 50% more damage to your third target and beyond.',
            rank3: 'In V.A.T.S. you instantly do a Critical Hit against your fourth target and beyond.'
        }
    },
    lu: {
        l1: {
            name: 'Fortune Finder',
            rank1: 'You find more bottle caps in containers.',
            rank2: 'You find even more bottle caps in containers.',
            rank3: 'You find even more bottle caps in containers.',
            rank4: 'You find even more bottle caps in containers, and there is a chance of enemies exploding into a shower of caps when you kill them.'
        },
        l2: {
            name: 'Scrounger',
            rank1: 'You find more ammunition in containers.',
            rank2: 'You find even more ammunition in containers.',
            rank3: 'You find even more ammunition in containers.',
            rank4: 'There is a chance to gain ammo when firing the last round in your clip.'
        },
        l3: {
            name: 'Bloody Mess',
            rank1: '+5% bonus damage means enemies will sometimes explode into a gory red paste. Watch out for flying eyeballs!',
            rank2: 'You now inflict +10% damage in combat.',
            rank3: 'You now inflict +15% damage in combat.',
            rank4: 'When an enemy explodes, nearby enemies may suffer the same fate.'
        },
        l4: {
            name: 'Mysterious Stranger',
            rank1: 'Who is he? Why does he help? Who cares! The Mysterious Stranger will appear occasionally in V.A.T.S. to lend a hand, with deadly efficiency...',
            rank2: 'The Mysterious Stranger appears more often in V.A.T.S.',
            rank3: 'The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a chance your Critical meter gets filled.',
            rank4: 'The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a high chance your Critical meter gets filled. (Nuka-World DLC)'
        },
        l5: {
            name: 'Idiot Savant',
            rank1: 'You\'re not stupid! Just... different. Randomly receive 3x XP from any action, and the lower your Intelligence, the greater the chance.',
            rank2: 'You now randomly receive 5x XP from any action. The lower your Intelligence, the greater the chance.',
            rank3: 'Randomly receiving bonus XP from any action may trigger 3x XP for all kills for a short period of time. The lower your Intelligence, the greater the chance.'
        },
        l6: {
            name: 'Better Criticals',
            rank1: 'Advanced training for enhanced combat effectiveness! Criticals do 50% more extra damage.',
            rank2: 'Your criticals now do twice as much extra damage.',
            rank3: 'Your criticals now do 2.5x as much extra damage.'
        },
        l7: {
            name: 'Critical Banker',
            rank1: 'You\'re a patient battlefield tactician, and can save a Critical Hit, to be used in V.A.T.S. when you need it most.',
            rank2: 'You can now save 2 Critical Hits, to be used in V.A.T.S. when you need them the most.',
            rank3: 'You can now save 3 Critical Hits, to be used in V.A.T.S. when you need them the most. Banking a Critical has a chance to save an additional Critical.',
            rank4: 'You can now save 4 Critical Hits, to be used in V.A.T.S. when you need them the most. (Far Harbor DLC)'
        },
        l8: {
            name: 'Grim Reaper\'s Sprint',
            rank1: 'Death becomes you! Any kill in V.A.T.S. has a 15% chance to restore all Action Points.',
            rank2: 'Any kill in V.A.T.S. now has a 25% chance to restore all Action Points.',
            rank3: 'Any kill in V.A.T.S. has a 35% chance to restore all Action Points and refill your Critical meter.'
        },
        l9: {
            name: 'Four Leaf Clover',
            rank1: 'Feeling Lucky? You should! Each hit in V.A.T.S. has a chance of filling your Critical meter.',
            rank2: 'Each hit in V.A.T.S. now has an even better chance of filling your Critical meter.',
            rank3: 'Each hit in V.A.T.S. now has a very good chance of filling your Critical meter.',
            rank4: 'Each hit in V.A.T.S. now has an excellent chance of filling your Critical meter.'
        },
        l10: {
            name: 'Ricochet',
            rank1: 'What goes around comes around! Any enemy\'s ranged attacks will sometimes ricochet back and instantly kill them. The closer you are to death, the higher the chance.',
            rank2: 'There\'s an increased chance that an enemy\'s shot will ricochet back and kill them.',
            rank3: 'When an enemy\'s shot ricochets back and kills them, there is a chance your Critical meter gets filled.'
        }
    }
}