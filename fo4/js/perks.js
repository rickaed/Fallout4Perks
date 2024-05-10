const perks = [
    {
        special: 'st',
        perks: [
            {
                rank: 1,
                name: lang[userLang].st.l1.name,
                img: 'iron-fist.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].st.l1.rank1
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: lang[userLang].st.l1.rank2
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: lang[userLang].st.l1.rank3
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: lang[userLang].st.l1.rank4
                    },
                    {
                        rank: 5,
                        level: 46,
                        description: lang[userLang].st.l1.rank5
                    }
                ]
            },
            {
                rank: 2,
                name: lang[userLang].st.l2.name,
                img: 'big-leagues.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].st.l2.rank1
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: lang[userLang].st.l2.rank2
                    },
                    {
                        rank: 3,
                        level: 15,
                        description: lang[userLang].st.l2.rank3
                    },
                    {
                        rank: 4,
                        level: 27,
                        description: lang[userLang].st.l2.rank4
                    },
                    {
                        rank: 5,
                        level: 42,
                        description: lang[userLang].st.l2.rank5
                    }
                ]
            },
            {
                rank: 3,
                name: lang[userLang].st.l3.name,
                img: 'armorer.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].st.l3.rank1
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: lang[userLang].st.l3.rank2
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: lang[userLang].st.l3.rank3
                    },
                    {
                        rank: 4,
                        level: 39,
                        description: lang[userLang].st.l3.rank4
                    }
                ]
            },
            {
                rank: 4,
                name: lang[userLang].st.l4.name,
                img: 'blacksmith.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].st.l4.rank1
                    },
                    {
                        rank: 2,
                        level: 16,
                        description: lang[userLang].st.l4.rank2
                    },
                    {
                        rank: 3,
                        level: 29,
                        description: lang[userLang].st.l4.rank3
                    }
                ]
            },
            {
                rank: 5,
                name: lang[userLang].st.l5.name,
                img: 'heavy-gunner.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].st.l5.rank1
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: lang[userLang].st.l5.rank2
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: lang[userLang].st.l5.rank3
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: lang[userLang].st.l5.rank4
                    },
                    {
                        rank: 5,
                        level: 47,
                        description: lang[userLang].st.l5.rank5
                    }
                ]
            },
            {
                rank: 6,
                name: lang[userLang].st.l6.name,
                img: 'strong-back.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].st.l6.rank1
                    },
                    {
                        rank: 2,
                        level: 10,
                        description: lang[userLang].st.l6.rank2
                    },
                    {
                        rank: 3,
                        level: 20,
                        description: lang[userLang].st.l6.rank3
                    },
                    {
                        rank: 4,
                        level: 30,
                        description: lang[userLang].st.l6.rank4
                    },
                    {
                        rank: 5,
                        level: 40,
                        description: lang[userLang].st.l6.rank5
                    }
                ]
            },
            {
                rank: 7,
                name: lang[userLang].st.l7.name,
                img: 'steady-aim.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].st.l7.rank1
                    },
                    {
                        rank: 2,
                        level: 28,
                        description: lang[userLang].st.l7.rank2
                    },
                    {
                        rank: 3,
                        level: 49,
                        description: lang[userLang].st.l7.rank3
                    }
                ]
            },
            {
                rank: 8,
                name: lang[userLang].st.l8.name,
                img: 'basher.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].st.l8.rank1
                    },
                    {
                        rank: 2,
                        level: 5,
                        description: lang[userLang].st.l8.rank2
                    },
                    {
                        rank: 3,
                        level: 14,
                        description: lang[userLang].st.l8.rank3
                    },
                    {
                        rank: 4,
                        level: 26,
                        description: lang[userLang].st.l8.rank4
                    }
                ]
            },
            {
                rank: 9,
                name: lang[userLang].st.l9.name,
                img: 'rooted.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].st.l9.rank1
                    },
                    {
                        rank: 2,
                        level: 22,
                        description: lang[userLang].st.l9.rank2
                    },
                    {
                        rank: 3,
                        level: 43,
                        description: lang[userLang].st.l9.rank3
                    }
                ]
            },
            {
                rank: 10,
                name: lang[userLang].st.l10.name,
                img: 'pain-train.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].st.l10.rank1
                    },
                    {
                        rank: 2,
                        level: 24,
                        description: lang[userLang].st.l10.rank2
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: lang[userLang].st.l10.rank3
                    }
                ]
            }
        ]
    },
    {
        special: 'pe',
        perks: [
            {
                rank: 1,
                name: lang[userLang].pe.l1.name,
                img: 'pickpocket.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].pe.l1.rank1
                    },
                    {
                        rank: 2,
                        level: 6,
                        description: lang[userLang].pe.l1.rank2
                    },
                    {
                        rank: 3,
                        level: 17,
                        description: lang[userLang].pe.l1.rank3
                    },
                    {
                        rank: 4,
                        level: 30,
                        description: lang[userLang].pe.l1.rank4
                    }
                ]
            },
            {
                rank: 2,
                name: lang[userLang].pe.l2.name,
                img: 'rifleman.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].pe.l2.rank1
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: lang[userLang].pe.l2.rank2
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: lang[userLang].pe.l2.rank3
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: lang[userLang].pe.l2.rank4
                    },
                    {
                        rank: 5,
                        level: 46,
                        description: lang[userLang].pe.l2.rank5
                    }
                ]
            },
            {
                rank: 3,
                name: lang[userLang].pe.l3.name,
                img: 'awareness.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].pe.l3.rank1
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: lang[userLang].pe.l3.rank2
                    }
                ]
            },
            {
                rank: 4,
                name: lang[userLang].pe.l4.name,
                img: 'locksmith.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].pe.l4.rank1
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: lang[userLang].pe.l4.rank2
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: lang[userLang].pe.l4.rank3
                    },
                    {
                        rank: 4,
                        level: 41,
                        description: lang[userLang].pe.l4.rank4
                    }
                ]
            },
            {
                rank: 5,
                name: lang[userLang].pe.l5.name,
                img: 'demolition-expert.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].pe.l5.rank1
                    },
                    {
                        rank: 2,
                        level: 10,
                        description: lang[userLang].pe.l5.rank2
                    },
                    {
                        rank: 3,
                        level: 22,
                        description: lang[userLang].pe.l5.rank3
                    },
                    {
                        rank: 4,
                        level: 34,
                        description: lang[userLang].pe.l5.rank4
                    }
                ]
            },
            {
                rank: 6,
                name: lang[userLang].pe.l6.name,
                img: 'night-person.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].pe.l6.rank1
                    },
                    {
                        rank: 2,
                        level: 25,
                        description: lang[userLang].pe.l6.rank2
                    },
                    {
                        rank: 3,
                        level: 37,
                        description: lang[userLang].pe.l6.rank3
                    }
                ]
            },
            {
                rank: 7,
                name: lang[userLang].pe.l7.name,
                img: 'refractor.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].pe.l7.rank1
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: lang[userLang].pe.l7.rank2
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: lang[userLang].pe.l7.rank3
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: lang[userLang].pe.l7.rank4
                    },
                    {
                        rank: 5,
                        level: 42,
                        description: lang[userLang].pe.l7.rank5
                    }
                ]
            },
            {
                rank: 8,
                name: lang[userLang].pe.l8.name,
                img: 'sniper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].pe.l8.rank1
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: lang[userLang].pe.l8.rank2
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: lang[userLang].pe.l8.rank3
                    }
                ]
            },
            {
                rank: 9,
                name: lang[userLang].pe.l9.name,
                img: 'penetrator.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].pe.l9.rank1
                    },
                    {
                        rank: 2,
                        level: 28,
                        description: lang[userLang].pe.l9.rank2
                    }
                ]
            },
            {
                rank: 10,
                name: lang[userLang].pe.l10.name,
                img: 'concentrated-fire.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].pe.l10.rank1
                    },
                    {
                        rank: 2,
                        level: 26,
                        description: lang[userLang].pe.l10.rank2
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: lang[userLang].pe.l10.rank3
                    }
                ]
            }
        ]
    },
    {
        special: 'en',
        perks: [
            {
                rank: 1,
                name: lang[userLang].en.l1.name,
                img: 'toughness.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].en.l1.rank1
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: lang[userLang].en.l1.rank2
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: lang[userLang].en.l1.rank3
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: lang[userLang].en.l1.rank4
                    },
                    {
                        rank: 5,
                        level: 46,
                        description: lang[userLang].en.l1.rank5
                    }
                ]
            },
            {
                rank: 2,
                name: lang[userLang].en.l2.name,
                img: 'lead-belly.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].en.l2.rank1
                    },
                    {
                        rank: 2,
                        level: 6,
                        description: lang[userLang].en.l2.rank2
                    },
                    {
                        rank: 3,
                        level: 17,
                        description: lang[userLang].en.l2.rank3
                    }
                ]
            },
            {
                rank: 3,
                name: lang[userLang].en.l3.name,
                img: 'life-giver.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].en.l3.rank1
                    },
                    {
                        rank: 2,
                        level: 8,
                        description: lang[userLang].en.l3.rank2
                    },
                    {
                        rank: 3,
                        level: 20,
                        description: lang[userLang].en.l3.rank3
                    }
                ]
            },
            {
                rank: 4,
                name: lang[userLang].en.l4.name,
                img: 'chem-resistant.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].en.l4.rank1
                    },
                    {
                        rank: 2,
                        level: 22,
                        description: lang[userLang].en.l4.rank2
                    }
                ]
            },
            {
                rank: 5,
                name: lang[userLang].en.l5.name,
                img: 'aquaboy.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].en.l5.rank1
                    },
                    {
                        rank: 2,
                        level: 21,
                        description: lang[userLang].en.l5.rank2
                    }
                ]
            },
            {
                rank: 6,
                name: lang[userLang].en.l6.name,
                img: 'rad-resistant.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].en.l6.rank1
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: lang[userLang].en.l6.rank2
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: lang[userLang].en.l6.rank3
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: lang[userLang].en.l6.rank4
                    }
                ]
            },
            {
                rank: 7,
                name: lang[userLang].en.l7.name,
                img: 'adamantium-skeleton.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].en.l7.rank1
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: lang[userLang].en.l7.rank2
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: lang[userLang].en.l7.rank3
                    }
                ]
            },
            {
                rank: 8,
                name: lang[userLang].en.l8.name,
                img: 'cannibal.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].en.l8.rank1
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: lang[userLang].en.l8.rank2
                    },
                    {
                        rank: 3,
                        level: 38,
                        description: lang[userLang].en.l8.rank3
                    }
                ]
            },
            {
                rank: 9,
                name: lang[userLang].en.l9.name,
                img: 'ghoulish.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].en.l9.rank1
                    },
                    {
                        rank: 2,
                        level: 24,
                        description: lang[userLang].en.l9.rank2
                    },
                    {
                        rank: 3,
                        level: 48,
                        description: lang[userLang].en.l9.rank3
                    },
                    {
                        rank: 4,
                        level: 50,
                        description: lang[userLang].en.l9.rank4
                    }
                ]
            },
            {
                rank: 10,
                name: lang[userLang].en.l10.name,
                img: 'solar-powered.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].en.l10.rank1
                    },
                    {
                        rank: 2,
                        level: 27,
                        description: lang[userLang].en.l10.rank2
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: lang[userLang].en.l10.rank3
                    }
                ]
            }
        ]
    },
    {
        special: 'ch',
        perks: [
            {
                rank: 1,
                name: lang[userLang].ch.l1.name,
                img: 'cap-collector.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ch.l1.rank1
                    },
                    {
                        rank: 2,
                        level: 20,
                        description: lang[userLang].ch.l1.rank2
                    },
                    {
                        rank: 3,
                        level: 41,
                        description: lang[userLang].ch.l1.rank3
                    }
                ]
            },
            {
                rank: 2,
                name: lang[userLang].ch.l2.name,
                img: 'lady-killer-man-hunter.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ch.l2.rank1
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: lang[userLang].ch.l2.rank2
                    },
                    {
                        rank: 3,
                        level: 16,
                        description: lang[userLang].ch.l2.rank3
                    }
                ]
            },
            {
                rank: 3,
                name: lang[userLang].ch.l3.name,
                img: 'lone-wanderer.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ch.l3.rank1
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: lang[userLang].ch.l3.rank2
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: lang[userLang].ch.l3.rank3
                    },
                    {
                        rank: 4,
                        level: 50,
                        description: lang[userLang].ch.l3.rank4
                    }
                ]
            },
            {
                rank: 4,
                name: lang[userLang].ch.l4.name,
                img: 'attack-dog.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ch.l4.rank1
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: lang[userLang].ch.l4.rank2
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: lang[userLang].ch.l4.rank3
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: lang[userLang].ch.l4.rank4
                    }
                ]
            },
            {
                rank: 5,
                name: lang[userLang].ch.l5.name,
                img: 'animal-friend.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ch.l5.rank1
                    },
                    {
                        rank: 2,
                        level: 12,
                        description: lang[userLang].ch.l5.rank2
                    },
                    {
                        rank: 3,
                        level: 28,
                        description: lang[userLang].ch.l5.rank3
                    }
                ]
            },
            {
                rank: 6,
                name: lang[userLang].ch.l6.name,
                img: 'local-leader.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ch.l6.rank1
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: lang[userLang].ch.l6.rank2
                    }
                ]
            },
            {
                rank: 7,
                name: lang[userLang].ch.l7.name,
                img: 'party-boy-party-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ch.l7.rank1
                    },
                    {
                        rank: 2,
                        level: 15,
                        description: lang[userLang].ch.l7.rank2
                    },
                    {
                        rank: 3,
                        level: 37,
                        description: lang[userLang].ch.l7.rank3
                    }
                ]
            },
            {
                rank: 8,
                name: lang[userLang].ch.l8.name,
                img: 'inspiration.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ch.l8.rank1
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: lang[userLang].ch.l8.rank2
                    },
                    {
                        rank: 3,
                        level: 43,
                        description: lang[userLang].ch.l8.rank3
                    }
                ]
            },
            {
                rank: 9,
                name: lang[userLang].ch.l9.name,
                img: 'wasteland-whisperer.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ch.l9.rank1
                    },
                    {
                        rank: 2,
                        level: 21,
                        description: lang[userLang].ch.l9.rank2
                    },
                    {
                        rank: 3,
                        level: 49,
                        description: lang[userLang].ch.l9.rank3
                    }
                ]
            },
            {
                rank: 10,
                name: lang[userLang].ch.l10.name,
                img: 'intimidation.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ch.l10.rank1
                    },
                    {
                        rank: 2,
                        level: 23,
                        description: lang[userLang].ch.l10.rank2
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: lang[userLang].ch.l10.rank3
                    }
                ]
            }
        ]
    },
    {
        special: 'in',
        perks: [
            {
                rank: 1,
                name: lang[userLang].in.l1.name,
                img: 'vans.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].in.l1.rank1
                    },
                    {
                        rank: 2,
                        level: 36,
                        description: lang[userLang].in.l1.rank2
                    }
                ]
            },
            {
                rank: 2,
                name: lang[userLang].in.l2.name,
                img: 'medic.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].in.l2.rank1
                    },
                    {
                        rank: 2,
                        level: 18,
                        description: lang[userLang].in.l2.rank2
                    },
                    {
                        rank: 3,
                        level: 30,
                        description: lang[userLang].in.l2.rank3
                    },
                    {
                        rank: 4,
                        level: 49,
                        description: lang[userLang].in.l2.rank4
                    }
                ]
            },
            {
                rank: 3,
                name: lang[userLang].in.l3.name,
                img: 'gun-nut.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].in.l3.rank1
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: lang[userLang].in.l3.rank2
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: lang[userLang].in.l3.rank3
                    },
                    {
                        rank: 4,
                        level: 39,
                        description: lang[userLang].in.l3.rank4
                    }
                ]
            },
            {
                rank: 4,
                name: lang[userLang].in.l4.name,
                img: 'hacker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].in.l4.rank1
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: lang[userLang].in.l4.rank2
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: lang[userLang].in.l4.rank3
                    },
                    {
                        rank: 4,
                        level: 33,
                        description: lang[userLang].in.l4.rank4
                    }
                ]
            },
            {
                rank: 5,
                name: lang[userLang].in.l5.name,
                img: 'scrapper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].in.l5.rank1
                    },
                    {
                        rank: 2,
                        level: 23,
                        description: lang[userLang].in.l5.rank2
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: lang[userLang].in.l5.rank3
                    }
                ]
            },
            {
                rank: 6,
                name: lang[userLang].in.l6.name,
                img: 'science.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].in.l6.rank1
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: lang[userLang].in.l6.rank2
                    },
                    {
                        rank: 3,
                        level: 28,
                        description: lang[userLang].in.l6.rank3
                    },
                    {
                        rank: 4,
                        level: 41,
                        description: lang[userLang].in.l6.rank4
                    }
                ]
            },
            {
                rank: 7,
                name: lang[userLang].in.l7.name,
                img: 'chemist.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].in.l7.rank1
                    },
                    {
                        rank: 2,
                        level: 16,
                        description: lang[userLang].in.l7.rank2
                    },
                    {
                        rank: 3,
                        level: 32,
                        description: lang[userLang].in.l7.rank3
                    },
                    {
                        rank: 4,
                        level: 45,
                        description: lang[userLang].in.l7.rank4
                    }
                ]
            },
            {
                rank: 8,
                name: lang[userLang].in.l8.name,
                img: 'robotics-expert.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].in.l8.rank1
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: lang[userLang].in.l8.rank2
                    },
                    {
                        rank: 3,
                        level: 44,
                        description: lang[userLang].in.l8.rank3
                    }
                ]
            },
            {
                rank: 9,
                name: lang[userLang].in.l9.name,
                img: 'nuclear-physicist.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].in.l9.rank1
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: lang[userLang].in.l9.rank2
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: lang[userLang].in.l9.rank3
                    }
                ]
            },
            {
                rank: 10,
                name: lang[userLang].in.l10.name,
                img: 'nerd-rage.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].in.l10.rank1
                    },
                    {
                        rank: 2,
                        level: 31,
                        description: lang[userLang].in.l10.rank2
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: lang[userLang].in.l10.rank3
                    }
                ]
            }
        ]
    },
    {
        special: 'ag',
        perks: [
            {
                rank: 1,
                name: lang[userLang].ag.l1.name,
                img: 'gunslinger.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ag.l1.rank1
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: lang[userLang].ag.l1.rank2
                    },
                    {
                        rank: 3,
                        level: 15,
                        description: lang[userLang].ag.l1.rank3
                    },
                    {
                        rank: 4,
                        level: 27,
                        description: lang[userLang].ag.l1.rank4
                    },
                    {
                        rank: 5,
                        level: 42,
                        description: lang[userLang].ag.l1.rank5
                    }
                ]
            },
            {
                rank: 2,
                name: lang[userLang].ag.l2.name,
                img: 'commando.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ag.l2.rank1
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: lang[userLang].ag.l2.rank2
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: lang[userLang].ag.l2.rank3
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: lang[userLang].ag.l2.rank4
                    },
                    {
                        rank: 5,
                        level: 49,
                        description: lang[userLang].ag.l2.rank5
                    }
                ]
            },
            {
                rank: 3,
                name: lang[userLang].ag.l3.name,
                img: 'sneak.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ag.l3.rank1
                    },
                    {
                        rank: 2,
                        level: 5,
                        description: lang[userLang].ag.l3.rank2
                    },
                    {
                        rank: 3,
                        level: 12,
                        description: lang[userLang].ag.l3.rank3
                    },
                    {
                        rank: 4,
                        level: 23,
                        description: lang[userLang].ag.l3.rank4
                    },
                    {
                        rank: 5,
                        level: 38,
                        description: lang[userLang].ag.l3.rank5
                    }
                ]
            },
            {
                rank: 4,
                name: lang[userLang].ag.l4.name,
                img: 'mister-sandman.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ag.l4.rank1
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: lang[userLang].ag.l4.rank2
                    },
                    {
                        rank: 3,
                        level: 30,
                        description: lang[userLang].ag.l4.rank3
                    }
                ]
            },
            {
                rank: 5,
                name: lang[userLang].ag.l5.name,
                img: 'action-boy-action-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ag.l5.rank1
                    },
                    {
                        rank: 2,
                        level: 18,
                        description: lang[userLang].ag.l5.rank2
                    },
                    {
                        rank: 3,
                        level: 38,
                        description: lang[userLang].ag.l5.rank3
                    }
                ]
            },
            {
                rank: 6,
                name: lang[userLang].ag.l6.name,
                img: 'moving-target.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ag.l6.rank1
                    },
                    {
                        rank: 2,
                        level: 24,
                        description: lang[userLang].ag.l6.rank2
                    },
                    {
                        rank: 3,
                        level: 44,
                        description: lang[userLang].ag.l6.rank3
                    }
                ]
            },
            {
                rank: 7,
                name: lang[userLang].ag.l7.name,
                img: 'ninja.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ag.l7.rank1
                    },
                    {
                        rank: 2,
                        level: 16,
                        description: lang[userLang].ag.l7.rank2
                    },
                    {
                        rank: 3,
                        level: 33,
                        description:lang[userLang].ag.l7.rank3
                    }
                ]
            },
            {
                rank: 8,
                name: lang[userLang].ag.l8.name,
                img: 'quick-hands.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ag.l8.rank1
                    },
                    {
                        rank: 2,
                        level: 28,
                        description: lang[userLang].ag.l8.rank2
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: lang[userLang].ag.l8.rank3
                    }
                ]
            },
            {
                rank: 9,
                name: lang[userLang].ag.l9.name,
                img: 'blitz.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ag.l9.rank1
                    },
                    {
                        rank: 2,
                        level: 29,
                        description: lang[userLang].ag.l9.rank2
                    }
                ]
            },
            {
                rank: 10,
                name: lang[userLang].ag.l10.name,
                img: 'gun-fu.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].ag.l10.rank1
                    },
                    {
                        rank: 2,
                        level: 26,
                        description: lang[userLang].ag.l10.rank2
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: lang[userLang].ag.l10.rank3
                    }
                ]
            }
        ]
    },
    {
        special: 'lu',
        perks: [
            {
                rank: 1,
                name: lang[userLang].lu.l1.name,
                img: 'fortune-finder.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].lu.l1.rank1
                    },
                    {
                        rank: 2,
                        level: 5,
                        description: lang[userLang].lu.l1.rank2
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: lang[userLang].lu.l1.rank3
                    },
                    {
                        rank: 4,
                        level: 40,
                        description: lang[userLang].lu.l1.rank4
                    }
                ]
            },
            {
                rank: 2,
                name: lang[userLang].lu.l2.name,
                img: 'scrounger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].lu.l2.rank1
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: lang[userLang].lu.l2.rank2
                    },
                    {
                        rank: 3,
                        level: 24,
                        description:lang[userLang].lu.l2.rank3
                    },
                    {
                        rank: 4,
                        level: 37,
                        description: lang[userLang].lu.l2.rank4
                    }
                ]
            },
            {
                rank: 3,
                name: lang[userLang].lu.l3.name,
                img: 'bloody-mess.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].lu.l3.rank1
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: lang[userLang].lu.l3.rank2
                    },
                    {
                        rank: 3,
                        level: 31,
                        description: lang[userLang].lu.l3.rank3
                    },
                    {
                        rank: 4,
                        level: 47,
                        description: lang[userLang].lu.l3.rank4
                    }
                ]
            },
            {
                rank: 4,
                name: lang[userLang].lu.l4.name,
                img: 'mysterious-stranger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].lu.l4.rank1
                    },
                    {
                        rank: 2,
                        level: 22,
                        description: lang[userLang].lu.l4.rank2
                    },
                    {
                        rank: 3,
                        level: 41,
                        description:lang[userLang].lu.l4.rank3
                    },
                    {
                        rank: 4,
                        level: 49,
                        description: lang[userLang].lu.l4.rank4
                    }
                ]
            },
            {
                rank: 5,
                name: lang[userLang].lu.l5.name,
                img: 'idiot-savant.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].lu.l5.rank1
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: lang[userLang].lu.l5.rank2
                    },
                    {
                        rank: 3,
                        level: 34,
                        description: lang[userLang].lu.l5.rank3
                    }
                ]
            },
            {
                rank: 6,
                name: lang[userLang].lu.l6.name,
                img: 'better-criticals.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].lu.l6.rank1
                    },
                    {
                        rank: 2,
                        level: 15,
                        description: lang[userLang].lu.l6.rank2
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: lang[userLang].lu.l6.rank3
                    }
                ]
            },
            {
                rank: 7,
                name: lang[userLang].lu.l7.name,
                img: 'critical-banker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].lu.l7.rank1
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: lang[userLang].lu.l7.rank2
                    },
                    {
                        rank: 3,
                        level: 43,
                        description: lang[userLang].lu.l7.rank3
                    },
                    {
                        rank: 4,
                        level: 50,
                        description: lang[userLang].lu.l7.rank4
                    }
                ]
            },
            {
                rank: 8,
                name: lang[userLang].lu.l8.name,
                img: 'grim-reapers-sprint.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description:lang[userLang].lu.l8.rank1
                    },
                    {
                        rank: 2,
                        level: 19,
                        description:lang[userLang].lu.l8.rank2
                    },
                    {
                        rank: 3,
                        level: 46,
                        description: lang[userLang].lu.l8.rank3
                    }
                ]
            },
            {
                rank: 9,
                name: lang[userLang].lu.l9.name,
                img: 'four-leaf-clover.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: lang[userLang].lu.l9.rank1
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: lang[userLang].lu.l9.rank2
                    },
                    {
                        rank: 3,
                        level: 32,
                        description: lang[userLang].lu.l9.rank3
                    },
                    {
                        rank: 4,
                        level: 48,
                        description:lang[userLang].lu.l9.rank4
                    }
                ]
            },
            {
                rank: 10,
                name: lang[userLang].lu.l10.name,
                img: 'ricochet.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description:lang[userLang].lu.l10.rank1
                    },
                    {
                        rank: 2,
                        level: 29,
                        description: lang[userLang].lu.l10.rank2
                    },
                    {
                        rank: 3,
                        level: 50,
                        description:lang[userLang].lu.l10.rank3
                    }
                ]
            }
        ]
    }
];
