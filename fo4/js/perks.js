console.log('DEBUG PERK');
console.log('perk =>',lang[userLang].st.l1.name);
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
                        description:lang[userLang].st.l7.rank1
                    },
                    {
                        rank: 2,
                        level: 28,
                        description:lang[userLang].st.l7.rank2
                    },
                    {
                        rank: 3,
                        level: 49,
                        description:lang[userLang].st.l7.rank3
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
                        description:lang[userLang].st.l10.rank1
                    },
                    {
                        rank: 2,
                        level: 24,
                        description:lang[userLang].st.l10.rank2
                    },
                    {
                        rank: 3,
                        level: 50,
                        description:lang[userLang].st.l10.rank3
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
                        description:  lang[userLang].pe.l2.rank3
                    },
                    {
                        rank: 4,
                        level: 31,
                        description:  lang[userLang].pe.l2.rank4
                    },
                    {
                        rank: 5,
                        level: 46,
                        description:  lang[userLang].pe.l2.rank5
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
                        description: {
                            en:'Your nimble fingers allow you to pick advanced locks.',
                            fr:'Vos doigts de fée vous permettent de crocheter les serrures de niveau Avancé.'
                        },
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: {
                            en:'You can pick Expert locks.',
                            fr:'Vous pouvez crocheter les serrures de niveau Expert.'
                        },
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: {
                            en:'You can pick Master locks.',
                            fr:'Vous pouvez crocheter les serrures de niveau Maître.'
                        },
                    },
                    {
                        rank: 4,
                        level: 41,
                        description: {
                            en:'Your bobby pins never break during lockpicking.',
                            fr:'Vos épingles à cheveux ne cassent jamais pendant les crochetages.'
                        },
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
                        description: {
                            en:'The bigger the boom, the better! Your explosives do 25% more damage, and you can craft explosives at any Chemistry Station.',
                            fr:'Plus ça fait boum, plus vous aimez ça ! Vos explosifs infligent 25% de dégâts supplémentaires et vous pouvez fabriquer des explosifs aux postes de chimie.'
                        },
                    },
                    {
                        rank: 2,
                        level: 10,
                        description: {
                            en:'Your explosives do 50% more damage, and grenades gain a throwing arc.',
                            fr:'Vos explosifs infligent 50% de dégâts supplémentaires, et la trajectoire des grenades est indiquée par un arc de lancer.'
                        },
                    },
                    {
                        rank: 3,
                        level: 22,
                        description: {
                            en:'Your explosives do 75% more damage and affect a larger area.',
                            fr:'Les explosifs infligent 75% de dégâts supplémentaires et ont une zone d\'effet plus grande.'
                        },
                    },
                    {
                        rank: 4,
                        level: 34,
                        description: {
                            en:'Your explosives now do double damage. Mines and grenades shot in V.A.T.S explode for double damage, too.',
                            fr:'Les explosifs infligent deux fois plus de dégâts. En mode SVAV, les mines et les grenades infligent également deux fois plus de dégâts.'
                        },
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
                        description: {
                            en:'You are a creature of the night! Gain +2 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m.',
                            fr:'Vous êtes une créature de la nuit ! Vous recevez un bonus d\'intelligence et de perception de 2 points entre 18 heures et 6 heures du matin.'
                        },
                    },
                    {
                        rank: 2,
                        level: 25,
                        description: {
                            en:'You now have +3 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m., and night vision when sneaking.',
                            fr:'Votre intelligence et votre perception augmentent de 3 entre 18h00 et 6h00, et vous bénéficiez de la vision nocturne en mode furtif.'
                        },
                    },
                    {
                        rank: 3,
                        level: 37,
                        description: {
                            en:'You have 30 extra health between the hours of 6:00 PM and 6:00 AM.(Far Harbor DLC)',
                            fr:'Votre intelligence augmente de 30 entre 18h00 et 6h00.(Far Harbor DLC)'
                        },
                    }
                ]
            },
            {
                rank: 7,
                name: {
                    en:'Refractor',
                    fr:'Réfracteur'
                },
                img: 'refractor.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You must be part mirror! Instantly gain +10 Energy Resistance.',
                            fr:'Votre père était vitrier ? Les rayons rebondissent sur vous ! Votre résistance à l\'énergie augmente de 10.'
                        },
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: {
                            en:'You now have +20 Energy Resistance.',
                            fr:'Votre résistance à l\'énergie augmente de 20.'
                        },
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: {
                            en:'You now have +30 Energy Resistance.',
                            fr:'Votre résistance à l\'énergie augmente de 30.'
                        },
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: {
                            en:'You now have +40 Energy Resistance.',
                            fr:'Votre résistance à l\'énergie augmente de 40.'
                        },
                    },
                    {
                        rank: 5,
                        level: 42,
                        description: {
                            en:'You now have +50 Energy Resistance.',
                            fr:'Votre résistance à l\'énergie augmente de 50.'
                        },
                    }
                ]
            },
            {
                rank: 8,
                name: {
                    en:'Sniper',
                    fr:'Sniper'
                },
                img: 'sniper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'It\'s all about focus. You have improved control and can hold your breath longer when aiming with scopes.',
                            fr:'Sans maîtrise, la puissance n\'est rien. Vous tremblez moins et vous pouvez retenir votre souffle plus longtemps quand vous visez avec une lunette.'
                        },
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: {
                            en:'Non-automatic, scoped rifles have a chance of knocking down your target.',
                            fr:'Les fusils à lunette non automatiques ont une chance de renverser la cible.'
                        },
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: {
                            en:'Non-automatic, scoped rifles gain +25% accuracy to head shot in V.A.T.S.',
                            fr:'Les fusils à lunette non automatiques reçoivent un bonus de précision de 25% pour les tirs à la tête en mode SVAV.'
                        },
                    }
                ]
            },
            {
                rank: 9,
                name: {
                    en:'Penetrator',
                    fr:'Transperceur'
                },
                img: 'penetrator.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'There\'s no place to hide! In V.A.T.S you can target an enemy\'s body parts that are blocked by cover, with a decrease in accuracy.',
                            fr:'Rien ne peut vous échapper ! En mode SVAV, vous pouvez viser les parties du corps d\'un ennemi cachées derrière un élément de l\'environnement, mais avec une pénalité de précision.'
                        },
                    },
                    {
                        rank: 2,
                        level: 28,
                        description: {
                            en:'In V.A.T.S when you target an enemy\'s body parts that are blocked by cover, there is no decrease in accuracy.',
                            fr:'Pas de pénalité de précision en mode SVAV lorsque vous visez une partie du corps de l\'ennemi cachée par un élément de l\'environnement.'
                        },
                    }
                ]
            },
            {
                rank: 10,
                name: {
                    en:'Concentrated Fire',
                    fr:'Tir groupé'
                },
                img: 'concentrated-fire.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Stay Focused! In V.A.T.S every attack on the same body part gains +10% accuracy.',
                            fr:'Appuyez là où ça fait mal ! En mode SVAV, chaque attaque visant la même partie du corps bénéficie d\'un bonus de précision de 10%.'
                        },
                    },
                    {
                        rank: 2,
                        level: 26,
                        description: {
                            en:'In V.A.T.S every attack on the same body part gains +15% accuracy.',
                            fr:'En mode SVAV, chaque attaque visant la même partie du corps bénéficie d\'un bonus de précision de 15%.'
                        },
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: {
                            en:'In V.A.T.S every attack on the same body part gains +20% accuracy and does 20% more damage.',
                            fr:'En mode SVAV, chaque attaque visant la même partie du corps bénéficie d\'un bonus de précision de 20% et inflige 20% de dégâts supplémentaires.'
                        },
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
                name: {
                    en:'Toughness',
                    fr:'Robustesse'
                },
                img: 'toughness.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'If nothing else, you can take a beating! Instantly gain +10 Damage Resistance',
                            fr:'La meilleure attaque, c\'est la défense ! Votre résistance aux dégâts augmente de 10.'
                        },
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: {
                            en:'You now have +20 damage resistance.',
                            fr:'Votre résistance aux dégâts augmente de 20.'
                        },
                    },
                    {
                        rank: 3,
                        level: 18,
                        description: {
                            en:'You now have +30 damage resistance.',
                            fr:'Votre résistancec aux dégâts augmente de 30.'
                        },
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: {
                            en:'You now have +40 damage resistance.',
                            fr:'Votre résistance aux dégâts augmente de 40.'
                        },
                    },
                    {
                        rank: 5,
                        level: 46,
                        description: {
                            en:'You now have +50 damage resistance.',
                            fr:'Votre résistance aux dégâts augmente de 50.'
                        },
                    }
                ]
            },
            {
                rank: 2,
                name: {
                    en:'Lead Belly',
                    fr:'Boyaux plombés'
                },
                img: 'lead-belly.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Your digestive tract has adjusted to the weirdness of the Wasteland! Take less radiation from eating or drinking.',
                            fr:'Votre système digestif s\'est adapté à la nourriture exotique des Terres désolées ! Vous recevez moins de radiations quand vous buvez ou mangez.'
                        },
                    },
                    {
                        rank: 2,
                        level: 6,
                        description: {
                            en:'You take even less radiation from eating or drinking.',
                            fr:'Vous recevez encore moins de radiations quand vous buvez ou mangez.'
                        },
                    },
                    {
                        rank: 3,
                        level: 17,
                        description: {
                            en:'You take no radiation from eating or drinking.',
                            fr:'Vous ne recevez pas de radiations quand vous buvez ou mangez.'
                        },
                    }
                ]
            },
            {
                rank: 3,
                name: {
                    en:'Life Giver',
                    fr:'Vitalité'
                },
                img: 'life-giver.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You embody wellness! Instantly gain +20 maximum Health.',
                            fr:'Vous êtes dans une forme olympique ! Votre santé maximum augmente de 20.'
                        },
                    },
                    {
                        rank: 2,
                        level: 8,
                        description: {
                            en:'You instantly gain another +20 maximum Health.',
                            fr:'Votre santé maximum augmente de 20.'
                        },
                    },
                    {
                        rank: 3,
                        level: 20,
                        description: {
                            en:'You instantly gain another +20 maximum Health, and slowly regenerate lost Health.',
                            fr:'Votre santé maximum augmente de 20 et vous récupérez lentement la santé perdue.'
                        },
                    }
                ]
            },
            {
                rank: 4,
                name: {
                    en:'Chem Resistant',
                    fr:'Résistance chimique'
                },
                img: 'chem-resistant.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'All the rush without the hassle! You\'re 50% less likely to get addicted when consuming Chems',
                            fr:'Le trip sans les effets secondaires ! Le risque de développer une dépendance à la drogue est réduit de 50%.'
                        },
                    },
                    {
                        rank: 2,
                        level: 22,
                        description: {
                            en:'You gain complete immunity to chem addiction.',
                            fr:'Annule tout risque de dépendance lorsque vous consommez de la drogue.'
                        },
                    }
                ]
            },
            {
                rank: 5,
                name: {
                    en:'Aquaboy',
                    fr:'Amphibie'
                },
                img: 'aquaboy.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Water is your ally. You no longer take radiation damage from swimming, and can breathe underwater',
                            fr:'L\'eau est votre alliée. Vous ne recevez plus de dégâts liés aux radiations quand vous nagez et vous pouvez respirer sous l\'eau.'
                        },
                    },
                    {
                        rank: 2,
                        level: 21,
                        description: {
                            en:'You become totally undetectable while submerged.',
                            fr:'Vous devenez totalement indétectable lorsque vous vous trouvez sous l\'eau.'
                        },
                    }
                ]
            },
            {
                rank: 6,
                name: {
                    en:'Rad Resistant',
                    fr:'Antiradiations'
                },
                img: 'rad-resistant.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Exposure to the Wasteland has made you more resilient, instantly granting +10 Radiation Resistance.',
                            fr:'Votre connaissance des Terres désolées a amélioré votre robustesse, augmentant instantanément de 10 votre résistance aux radiations.'
                        },
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: {
                            en:'You now have +20 Radiation Resistance.',
                            fr:'Votre résistance aux radiations augmente de 20.'
                        },
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: {
                            en:'You now have +30 Radiation Resistance.',
                            fr:'Votre résistance aux radiations augmente de 30.'
                        },
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: {
                            en:'You now have +40 Radiation Resistance. (Far Harbor DLC)',
                            fr:'Votre résistance aux radiations augmente de 40.(Far Harbor DLC)'
                        },
                    }
                ]
            },
            {
                rank: 7,
                name: {
                    en:'Adamantium Skeleton',
                    fr:'Squelette adamantin'
                },
                img: 'adamantium-skeleton.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Your skeleton has been infused with indestructible metal, reducing limb damage by 30%.',
                            fr:'Votre squelette a été renforcé par un alliage en métal indestructible, réduisant de 30% les dégâts aux membres.'
                        },
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: {
                            en:'Your limb damage is now reduced by 60%.',
                            fr:'Les dégâts infligés à vos membres sont réduits de 60%.'
                        },
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: {
                            en:'Your limb damage is completely eliminated.',
                            fr:'Les dégâts infligés à vos membres sont réduits à zéro.'
                        },
                    }
                ]
            },
            {
                rank: 8,
                name: {
                    en:'Cannibal',
                    fr:'Cannibale'
                },
                img: 'cannibal.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Feast on mortal flesh to heal your wounds! Eating human corpses restores Health.',
                            fr:'Dévorez la chair encore fumante de vos victimes pour soigner vos blessures ! Vous récupérez des points de santé en mangeant des cadavres humains.'
                        },
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: {
                            en:'Eating Ghoul or Super Mutant corpses restores Health.',
                            fr:'L\'ingestion de chair de goules ou de super mutants morts restaure votre santé.'
                        },
                    },
                    {
                        rank: 3,
                        level: 38,
                        description: {
                            en:'Eating human, Ghoul or Super Mutant corpses now restores a significant amount of Health.',
                            fr:'L\'ingestion de chair de goules,de super mutants ou d\'êtres humains morts restaure fortement votre santé.'
                        },
                    }
                ]
            },
            {
                rank: 9,
                name: {
                    en:'Ghoulish',
                    fr:'Goule-Attitude'
                },
                img: 'ghoulish.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Sure, you\'re still human - on the outside! Radiation now regenerates your lost Health.',
                            fr:'Vous êtes encore un être humain, c\'est vrai... mais uniquement en apparence ! Les radiations régénèrent votre santé.'
                        },
                    },
                    {
                        rank: 2,
                        level: 24,
                        description: {
                            en:'Radiation now regenerates even more of your lost Health.',
                            fr:'Les radiations régénèrent votre santé encore plus.'
                        },
                    },
                    {
                        rank: 3,
                        level: 48,
                        description: {
                            en:'Radiation now regenerates even more of your lost Health, and some Feral Ghouls will randomly become friendly.',
                            fr:'Les radiations régénèrent votre santé encore plus et certaines goules sauvages peuvent se montrer amicales.'
                        },
                    },
                    {
                        rank: 4,
                        level: 50,
                        description: {
                            en:'Rad damage will now begin to slowly heal, restoring health in the process. (Nuka-World DLC)',
                            fr:'Les dégâts de radiations commenceront désormais à soigner lentement, restaurant de la santé par la même occasion. (Nuka-World DLC)'
                        },
                    } 
                ]
            },
            {
                rank: 10,
                name: {
                    en:'Solar Powered',
                    fr:'Énergie solaire'
                },
                img: 'solar-powered.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Catch some rays! Gain +2 to Strength and Endurance between the hours of 6:00a.m. and 6:00p.m.',
                            fr:'N\'oubliez pas la crème solaire ! Vous recevez un bonus de force et d\'endurance +2 entre 6 heures du matin et 18 heures.'
                        },
                    },
                    {
                        rank: 2,
                        level: 27,
                        description: {
                            en:'Sunlight slowly heals your radiation damage.',
                            fr:'La lumière du jour soigne lentement vos dégâts subis à cause de radiations.'
                        },
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: {
                            en:'Sunlight slowly regenerates your lost Health.',
                            fr:'La lumière du jour régénère votre santé perdue.'
                        },
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
                name: {
                    en:'Cap Collector',
                    fr:'Fana de capsules'
                },
                img: 'cap-collector.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You\'ve mastered the art of the deal! Buying and selling prices at vendors are better.',
                            fr:'Vous maîtrisez l\'art du marchandage comme personne. Les prix d\'achat et de vente des marchands baissent et augmentent en votre faveur.'
                        },
                    },
                    {
                        rank: 2,
                        level: 20,
                        description: {
                            en:'Buying and selling prices of vendors are now much better.',
                            fr:'Les prix d\'achat et de vente des marchands baissent et augmentent sensiblement en votre faveur.'
                        },
                    },
                    {
                        rank: 3,
                        level: 41,
                        description: {
                            en:'You can now invest a total of 500 caps to raise a store\'s buying capacity.',
                            fr:'Vous pouvez investir un total de 500 capsules pour augmenter la capacité d\'achat d\'un magasin.'
                        },
                    }
                ]
            },
            {
                rank: 2,
                name: {
                    en:'Lady Killer',
                    fr:'Veuve noire'
                },
                img: 'lady-killer-man-hunter.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You\'re charming... and dangerous. Men/Women suffer +5% damage in combat, and are easier to persuade in dialogue.',
                            fr:'Vous savez jouer de vos charmes... et de la gâchette / Suivez-moi dans mon boudoir... Face à une femme/un homme, vos dégâts augmentent de 5% et vos chances de persuasion sont plus importantes.'
                        },
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: {
                            en:'Men/Women now suffer +10% damage in combat, and are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk.',
                            fr:'Les dégâts infligés aux femmes/aux hommes en combat augmentent de 10%, tout comme vos chances de les persuader. Elles/Ils sont aussi plus faciles à calmer avec l\'aptitude Indimidation.'
                        },
                    },
                    {
                        rank: 3,
                        level: 16,
                        description: {
                            en:'Men/Women now suffer +15% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk.',
                            fr:'Les dégâts infligés aux femmes/aux hommes en combat augmentent de 15%, tout comme vos chances de les persuader. Elles/Ils sont aussi beaucoup plus faciles à calmer avec l\'aptitude Indimidation.'
                        },
                    }
                ]
            },
            {
                rank: 3,
                name: {
                    en:'Lone Wanderer',
                    fr:'Nomade solitaire'
                },
                img: 'lone-wanderer.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Who needs friends, anyway? When adventuring without a companion, you take 15% less damage and carry weight increases by 50.',
                            fr:'Des amis ? Pour quoi faire ? Vous subissez 15% de dégâts en moins et votre charge maximale augmente de 50 quand vous voyagez sans compagnon.'
                        },
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: {
                            en:'When adventuring without a companion, you take 20% less damage and carry weight increases by 100',
                            fr:'Vous subissez 30% de dégâts en moins et votre charge maximale augmente de 100 quand vous voyagez sans compagnon.'
                        },
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: {
                            en:'When adventuring without a companion, you do 25% more damage.',
                            fr:'Vous infligez 25% de dégâts supplémentaires quand vous voyagez sans compagnon.'
                        },
                    },
                    {
                        rank: 4,
                        level: 50,
                        description: {
                            en:'When adventuring without a companion, you have 25 more action points.(Far Harbor DLC)',
                            fr:'Vous avez 25 points d\'action en plus quand vous voyagez sans compagnon.(Far Harbor DLC)'
                        },
                    }
                ]
            },
            {
                rank: 4,
                name: {
                    en:'Attack Dog',
                    fr:'Chien d\'attaque'
                },
                img: 'attack-dog.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Your faithful canine companion can hold an enemy, giving you a greater chance to hit them in V.A.T.S.',
                            fr:'Votre fidèle compagnon canin peut retenir un ennemi avec ses crocs, améliorant vos chances de le toucher en mode SVAV.'
                        },
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: {
                            en:'When your dog holds an enemy, there\'s a chance he\'ll cripple the limb he\'s biting.',
                            fr:'Quand votre chien mord un ennemi, il peut provoquer une infirmité au membre qu\'il tient entre ses dents.'
                        },
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: {
                            en:'When your dog holds an enemy, there\'s a chance he\'ll cause them to bleed.',
                            fr:'Quand votre chien mord un ennemi, il peut provoquer une hémorragie.'
                        },
                    },
                    {
                        rank: 4,
                        level: 31,
                        description: {
                            en:'When adventuring with your dog, you take 10% less damage. (Nuka-World DLC)',
                            fr:'Lors de vos aventures avec votre chien, les dégâts que vous subissez sont réduits de 10%.(Nuka-World DLC)'
                        },
                    }
                ]
            },
            {
                rank: 5,
                name: {
                    en:'Animal Friend',
                    fr:'Ami des animaux'
                },
                img: 'animal-friend.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it.',
                            fr:'Domptez les animaux sauvages ! Vous pouvez tenter d\'apprivoiser les animaux d\'un niveau inférieur au vôtre en poitant une arme sur eux.'
                        },
                    },
                    {
                        rank: 2,
                        level: 12,
                        description: {
                            en:'When you successfully pacify an animal, you can incite it to attack',
                            fr:'Quand vous arrivez à apprivoiser un animal, vous pouvez l\'inciter à attaquer.'
                        },
                    },
                    {
                        rank: 3,
                        level: 28,
                        description: {
                            en:'When you successfully pacify an animal, you can give it specific commands',
                            fr:'Quand vous arrivez à apprivoiser un animal, vous pouvez lui donner des ordres précis.'
                        },
                    }
                ]
            },
            {
                rank: 6,
                name: {
                    en:'Local Leader',
                    fr:'Chef local'
                },
                img: 'local-leader.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'As the ruler everyone turns to, you are able to establish supply lines between your workshop settlements.',
                            fr:'En tant que leader et chef naturel, vous pouvez établir des voies de ravitaillement entre vos colonies disposant d\'ateliers.'
                        },
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: {
                            en:'You can build stores and workstations at workshop settlements.',
                            fr:'Vous pouvez construire des magasins et des postes de travail dans les colonies disposant d\'un atelier.'
                        },
                    }
                ]
            },
            {
                rank: 7,
                name: {
                    en:'Party Boy',
                    fr:'Fêtard / Fêtarde'
                },
                img: 'party-boy-party-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Nobody has a good time like you! There\'s no chance you\'ll get addicted to alcohol.',
                            fr:'La modération, connaît pas! Vous ne pouvez pas développer de dépendance à l\'alcool.'
                        },
                    },
                    {
                        rank: 2,
                        level: 15,
                        description: {
                            en:'The effects of alcohol are doubled.',
                            fr:'Les effets de l\'acool sont doublés.'
                        },
                    },
                    {
                        rank: 3,
                        level: 37,
                        description: {
                            en:'Your Luck is increased by 3 while you\'re under the influence of alcohol.',
                            fr:'Votre Chance augmente de 3 lorsque vous êtes sous l\'effet de l\'acool.'
                        },
                    }
                ]
            },
            {
                rank: 8,
                name: {
                    en:'Inspiration',
                    fr:'Source d\'inspiration'
                },
                img: 'inspiration.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Because you lead by example, your companion does more damage in combat, and cannot hurt you.',
                            fr:'Parce que vous montrez le bon exemple, votre compagnon inflige plus de dégâts au combat et ne peut pas vous blesser.'
                        },
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: {
                            en:'Your companion resists more damage in combat, and can\'t be harmed by your attacks.',
                            fr:'Votre compagnon résiste mieux aux dégâts des combats et est invulnérable à vos attaques.'
                        },
                    },
                    {
                        rank: 3,
                        level: 43,
                        description: {
                            en:'Your companion can carry more items.',
                            fr:'Votre compagnon peut porter plus d\'objets.'
                        },
                    }
                ]
            },
            {
                rank: 9,
                name: {
                    en:'Wasteland Whisperer',
                    fr:'Dompteur'
                },
                img: 'wasteland-whisperer.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Master the post-apocalypse! With your gun, aim at any Wasteland creature below your level and gain a chance to pacify it.',
                            fr:'Domptez le monde post-apocalyptique! Vous pouvez tenter de pacifier une créature des Terres désolées d\'un niveau inférieur au vôtre en pointant votre arme sur elle.'
                        },
                    },
                    {
                        rank: 2,
                        level: 21,
                        description: {
                            en:'When you successfully pacify a creature, you can incite it to attack.',
                            fr:'Quand vous arrivez à pacifier une créature des Terres désolées, vous pouvez l\'inciter à attaquer.'
                        },
                    },
                    {
                        rank: 3,
                        level: 49,
                        description: {
                            en:'When you successfully pacify a creature, you can give it specific commands.',
                            fr:'Quand vous arrivez à pacifier une créature des Terres désolées, vous pouvez lui donner des ordres précis.'
                        },
                    }
                ]
            },
            {
                rank: 10,
                name: {
                    en:'Intimidation',
                    fr:'Intimidation'
                },
                img: 'intimidation.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Time to show everyone who\'s boss! With your gun, aim at any human opponent below your level and gain a chance to pacify them.',
                            fr:'Il est temps de montrer à tout le monde qui est le patron! Vous pouvez tenter de pacifier un adversaire humain d\'un niveau inférieur au vôtre en pointant votre arme sur lui.'
                        },
                    },
                    {
                        rank: 2,
                        level: 23,
                        description: {
                            en:'When you successfully pacify someone, you can incite them to attack.',
                            fr:'Quand vous arrivez à pacifier quelqu\'un, vous pouvez l\'inciter à attaquer.'
                        },
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: {
                            en:'When you successfully pacify someone, you can give them specific commands.',
                            fr:'Quand vous arrivez à pacifier quelqu\'un, vous pouvez lui donner des ordres précis.'
                        },
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
                name: {
                    en:'V.A.N.S.',
                    fr:'S.V.A.V.'
                },
                img: 'vans.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Let Vault-Tec guide you! The path to your closest quest target is displayed in V.A.T.S.',
                            fr:'Laissez-vous guider par Vault-Tec! Le chemin qui mène à votre objectif de quête le plus proche s\'affiche en mode SVAV.'
                        },
                    },
                    {
                        rank: 2,
                        level: 36,
                        description: {
                            en:'Gain +2 to Perception. (Nuka-World DLC)',
                            fr:'+2 points de perception.(Nuka-World DLC)'
                        },
                    }
                ]
            },
            {
                rank: 2,
                name: {
                    en:'Medic',
                    fr:'Infirmier'
                },
                img: 'medic.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Is there a doctor in the house? Stimpaks restore 40% of lost Health, and RadAway removes 40% of radiation.',
                            fr:'Y\'a-t-il un médecin dans la salle? Les Stimpaks rendent 40% de santé et le RadAway dissipe 40% des radiations.'
                        },
                    },
                    {
                        rank: 2,
                        level: 18,
                        description: {
                            en:'Stimpaks restore 60% of lost Health, and RadAway removes 60% of radiation',
                            fr:'Les Stimpaks rendent 60% de santé et le RadAway dissipe 60% des radiations.'
                        },
                    },
                    {
                        rank: 3,
                        level: 30,
                        description: {
                            en:'Stimpaks restore 80% of lost Health, and RadAway removes 80% of radiation',
                            fr:'Les Stimpaks rendent 80% de santé et le RadAway dissipe 80% des radiations.'
                        },
                    },
                    {
                        rank: 4,
                        level: 49,
                        description: {
                            en:'Stimpaks and RadAway restore all lost health and radiation, and work much more quickly.',
                            fr:'Les Stimpaks et le RadAway restaurent la totalité de la santé et dissipent complètement les radiations. Ils agissent également bien plus vite.'
                        },
                    }
                ]
            },
            {
                rank: 3,
                name: {
                    en:'Gun Nut',
                    fr:'Fana d\'armes'
                },
                img: 'gun-nut.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You gain access to base level and Rank 1 gun mods',
                            fr:'C\'est le premier qui dégaine qui l\'emporte! Vous pouvez accéder aux modules d\'armes de base et de rang 1.'
                        },
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: {
                            en:'You gain access to Rank 2 gun mods',
                            fr:'Vous pouvez accéder aux modules d\'armes de rang 2.'
                        },
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: {
                            en:'You gain access to Rank 3 gun mods',
                            fr:'Vous pouvez accéder aux modules d\'armes de rang 3.'
                        },
                    },
                    {
                        rank: 4,
                        level: 39,
                        description: {
                            en:'You gain access to Rank 4 gun mods',
                            fr:'Vous pouvez accéder aux modules d\'armes de rang 4.'
                        },
                    }
                ]
            },
            {
                rank: 4,
                name: {
                    en:'Hacker',
                    fr:'Pirate'
                },
                img: 'hacker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Knowledge of cutting-edge computer encryption allows you to hack Advanced terminals',
                            fr:'Votre maîtrise des algorithmes de chiffrement sophistiqués vous permet de pirater les terminaux de niveau Avancé.'
                        },
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: {
                            en:'You can hack Expert terminals.',
                            fr:'Vous pouvez pirater les terminaux de niveau Expert.'
                        },
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: {
                            en:'You can hack Master terminals.',
                            fr:'Vous pouvez pirater les terminaux de niveau Maître.'
                        },
                    },
                    {
                        rank: 4,
                        level: 33,
                        description: {
                            en:'When hacking, you never get locked out of a terminal when things go wrong.',
                            fr:'Vous ne vous faites jamais éjecter des terminaux pendant les piratages lorsque la situation vous échappe.'
                        },
                    }
                ]
            },
            {
                rank: 5,
                name: {
                    en:'Scrapper',
                    fr:'Recycleur'
                },
                img: 'scrapper.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Waste not, want not! You can salvage uncommon components like screws, aluminum, and copper when scrapping weapons and armor.',
                            fr:'Faut pas gâcher! Vous pouvez récupérer des matériaux rares, comme des vis, de l\'aluminium et du cuivre, en recyclant des armes et armures.'
                        },
                    },
                    {
                        rank: 2,
                        level: 23,
                        description: {
                            en:'You can salvage rare components like circuitry, nuclear material, and fiber optics when scrapping weapons and armor. Items with favorited components are highlighted.',
                            fr:'Vous récupérez des matériaux rares (circuits imprimés, matériaux nucléaires...) quand vous démantelez des objets. Les objets à base de matériaux prisés sont mis en évidence.'
                        },
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: {
                            en:'You get more from salvaging. Appears to only apply to uncommon components, i.e., those affected by the first level of the perk. (Far Harbor DLC)',
                            fr:'Les fouilles permettent d\'obtenir plus.'
                        },
                    }
                ]
            },
            {
                rank: 6,
                name: {
                    en:'Science',
                    fr:''
                },
                img: 'science.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: {
                            en:'You gain access to Rank 2 high-tech mods.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 28,
                        description: {
                            en:'You gain access to Rank 3 high-tech mods.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 41,
                        description: {
                            en:'You gain access to Rank 4 high-tech mods.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 7,
                name: {
                    en:'Chemist',
                    fr:''
                },
                img: 'chemist.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Any chems you take last 50% longer. Far out.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 16,
                        description: {
                            en:'Any chems you take now last twice as long.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 32,
                        description: {
                            en:'Any chems you take now last an additional 150% longer.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 45,
                        description: {
                            en:'Any chems you take now last an additional 200% longer.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 8,
                name: {
                    en:'Robotics Expert',
                    fr:''
                },
                img: 'robotics-expert.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Machines will always serve humans, if you have anything to say about it. Hack a robot, and gain a chance to power it on or off, or initiate a self-destruct.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: {
                            en:'When you successfully hack a robot, you can incite it to attack.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 44,
                        description: {
                            en:'When you successfully hack a robot, you can give it specific commands.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 9,
                name: {
                    en:'Nuclear Physicist',
                    fr:''
                },
                img: 'nuclear-physicist.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You\'ve learned to split the atom... and command it. Radiation weapons do 50% more damage and Fusion Cores last an extra 25% longer.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 14,
                        description: {
                            en:'Radiation weapons now do double damage and Fusion Cores last an extra 50% longer.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 26,
                        description: {
                            en:'Fusion Cores can be ejected from Power Armor like devastating grenades and Fusion Cores last twice as long.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 10,
                name: {
                    en:'Nerd Rage',
                    fr:''
                },
                img: 'nerd-rage.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Genius. Is. ANGRY! When your Health drops below 20%, time slows and you gain +20 Damage resistance and do 20% more damage while the effect lasts.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 31,
                        description: {
                            en:'You now gain 30 more Damage Resistance and do 30% more damage while Nerd Rage is in effect.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: {
                            en:'You now gain 40 more Damage Resistance and do 40% more damage while Nerd Rage is in effect. Kills you make while enraged restore some lost Health.',
                            fr:''
                        },
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
                name: {
                    en:'Gunslinger',
                    fr:''
                },
                img: 'gunslinger.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Channel the spirit of the old west! Non-automatic pistols do 20% more damage.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: {
                            en:'Non-automatic pistols now do 40% more damage and have increased range.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 15,
                        description: {
                            en:'Non-automatic pistols now do 60% more damage and range is increased even further.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 27,
                        description: {
                            en:'Non-automatic pistols now do 80% more damage and their attacks can disarm opponents.',
                            fr:''
                        },
                    },
                    {
                        rank: 5,
                        level: 42,
                        description: {
                            en:'Non-automatic pistols now do double damage. Their attacks have a much better chance to disarm opponents, and may even cripple a limb.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 2,
                name: {
                    en:'Commando',
                    fr:''
                },
                img: 'commando.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Rigorous combat training means automatic weapons do 20% more damage',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: {
                            en:'Attacks with automatic weapons do 40% more damage, with improved hip fire accuracy.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 21,
                        description: {
                            en:'Attacks with automatic weapons do 60% more damage. Hip fire accuracy is improved even more.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 35,
                        description: {
                            en:'Attacks with automatic weapons do 80% more damage and gain a chance to stagger opponents.',
                            fr:''
                        },
                    },
                    {
                        rank: 5,
                        level: 49,
                        description: {
                            en:'Your automatic weapons now do double damage and have a greater chance to stagger opponents.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 3,
                name: {
                    en:'Sneak',
                    fr:''
                },
                img: 'sneak.png',
                ranks: 5,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Become whisper, become shadow. You are 20% harder to detect while sneaking.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 5,
                        description: {
                            en:'You are now 30% harder to detect while sneaking, and no longer trigger floor-based traps.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 12,
                        description: {
                            en:'You are now 40% harder to detect while sneaking, and no longer trigger enemy mines.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 23,
                        description: {
                            en:'You are now 50% harder to detect while sneaking, and running no longer adversely affects stealth.',
                            fr:''
                        },
                    },
                    {
                        rank: 5,
                        level: 38,
                        description: {
                            en:'Engaging stealth causes distant enemies to lose you.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 4,
                name: {
                    en:'Mister Sandman',
                    fr:''
                },
                img: 'mister-sandman.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'As an agent of death, you can instantly kill a sleeping person. Your silenced weapons do an additional 15% sneak attack damage.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: {
                            en:'Your silenced weapons do an additional 30% sneak attack damage.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 30,
                        description: {
                            en:'Your silenced weapons now do 50% more sneak attack damage.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 5,
                name: {
                    en:'Action Boy',
                    fr:''
                },
                img: 'action-boy-action-girl.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'There\'s no time to waste! Action Points regenerate 25% faster.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 18,
                        description: {
                            en:'Your Action Points now regenerate 50% faster.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 38,
                        description: {
                            en:'Your Action Points now regenerate 75% faster. (Far Harbor DLC)',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 6,
                name: {
                    en:'Moving Target',
                    fr:''
                },
                img: 'moving-target.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'They can\'t hurt what they can\'t hit! Get 25+ Damage Resistance and 25+ Energy Resistance when you\'re sprinting.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 24,
                        description: {
                            en:'You now get +50 Damage Resistance and +50 Energy Resistance when you\'re sprinting.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 44,
                        description: {
                            en:'Sprinting costs 50% fewer Action Points.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 7,
                name: {
                    en:'Ninja',
                    fr:''
                },
                img: 'ninja.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Trained as a shadow warrior, your ranged sneak attack do 2.5x normal damage and your melee attacks do 4x normal damage.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 16,
                        description: {
                            en:'Your ranged sneak attacks do 3x normal damage and your melee sneak attacks do 5x normal damage.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 33,
                        description: {
                            en:'Your ranged sneak attacks do 3.5x normal damage and your melee sneak attacks do 10x normal damage.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 8,
                name: {
                    en:'Quick Hands',
                    fr:''
                },
                img: 'quick-hands.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'In combat, there\'s no time to hesitate. You can reload all guns faster.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 28,
                        description: {
                            en:'Reloading guns costs no Action Points in V.A.T.S.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: {
                            en:'Quick and efficient. You gain 10 additional Action Points. (Nuka-World DLC)',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 9,
                name: {
                    en:'Blitz',
                    fr:''
                },
                img: 'blitz.png',
                ranks: 2,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Find the gap and make the tackle! V.A.T.S. melee distance is increased significantly.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 29,
                        description: {
                            en:'V.A.T.S. melee distance is increased even more, and the farther the Blitz distance, the greater the damage.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 10,
                name: {
                    en:'Gun Fu',
                    fr:''
                },
                img: 'gun-fu.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You\'ve learned to apply ancient martial arts to gunplay! Do 25% more damage to your second V.A.T.S. target and beyond.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 26,
                        description: {
                            en:'In V.A.T.S. you do 50% more damage to your third target and beyond.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: {
                            en:'In V.A.T.S. you instantly do a Critical Hit against your fourth target and beyond.',
                            fr:''
                        },
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
                name: {
                    en:'Fortune Finder',
                    fr:''
                },
                img: 'fortune-finder.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You find more bottle caps in containers.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 5,
                        description: {
                            en:'You find even more bottle caps in containers.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 25,
                        description: {
                            en:'You find even more bottle caps in containers.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 40,
                        description: {
                            en:'You find even more bottle caps in containers, and there is a chance of enemies exploding into a shower of caps when you kill them.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 2,
                name: {
                    en:'Scrounger',
                    fr:''
                },
                img: 'scrounger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You find more ammunition in containers.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 7,
                        description: {
                            en:'You find even more ammunition in containers.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 24,
                        description: {
                            en:'You find even more ammunition in containers.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 37,
                        description: {
                            en:'There is a chance to gain ammo when firing the last round in your clip.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 3,
                name: {
                    en:'Bloody Mess',
                    fr:''
                },
                img: 'bloody-mess.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'+5% bonus damage means enemies will sometimes explode into a gory red paste. Watch out for flying eyeballs!',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 9,
                        description: {
                            en:'You now inflict +10% damage in combat.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 31,
                        description: {
                            en:'You now inflict +15% damage in combat.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 47,
                        description: {
                            en:'When an enemy explodes, nearby enemies may suffer the same fate.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 4,
                name: {
                    en:'Mysterious Stranger',
                    fr:''
                },
                img: 'mysterious-stranger.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Who is he? Why does he help? Who cares! The Mysterious Stranger will appear occasionally in V.A.T.S. to lend a hand, with deadly efficiency...',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 22,
                        description: {
                            en:'The Mysterious Stranger appears more often in V.A.T.S.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 41,
                        description: {
                            en:'The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a chance your Critical meter gets filled.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 49,
                        description: {
                            en:'The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a high chance your Critical meter gets filled. (Nuka-World DLC)',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 5,
                name: {
                    en:'Idiot Savant',
                    fr:''
                },
                img: 'idiot-savant.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You\'re not stupid! Just... different. Randomly receive 3x XP from any action, and the lower your Intelligence, the greater the chance.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 11,
                        description: {
                            en:'You now randomly receive 5x XP from any action. The lower your Intelligence, the greater the chance.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 34,
                        description: {
                            en:'Randomly receiving bonus XP from any action may trigger 3x XP for all kills for a short period of time. The lower your Intelligence, the greater the chance.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 6,
                name: {
                    en:'Better Criticals',
                    fr:''
                },
                img: 'better-criticals.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Advanced training for enhanced combat effectiveness! Criticals do 50% more extra damage.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 15,
                        description: {
                            en:'Your criticals now do twice as much extra damage.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 40,
                        description: {
                            en:'Your criticals now do 2.5x as much extra damage.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 7,
                name: {
                    en:'Critical Banker',
                    fr:''
                },
                img: 'critical-banker.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'You\'re a patient battlefield tactician, and can save a Critical Hit, to be used in V.A.T.S. when you need it most.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 17,
                        description: {
                            en:'You can now save 2 Critical Hits, to be used in V.A.T.S. when you need them the most.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 43,
                        description: {
                            en:'You can now save 3 Critical Hits, to be used in V.A.T.S. when you need them the most. Banking a Critical has a chance to save an additional Critical.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 50,
                        description: {
                            en:'You can now save 4 Critical Hits, to be used in V.A.T.S. when you need them the most. (Far Harbor DLC)',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 8,
                name: {
                    en:'Grim Reaper\'s Sprint',
                    fr:''
                },
                img: 'grim-reapers-sprint.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Death becomes you! Any kill in V.A.T.S. has a 15% chance to restore all Action Points.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 19,
                        description: {
                            en:'Any kill in V.A.T.S. now has a 25% chance to restore all Action Points.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 46,
                        description: {
                            en:'Any kill in V.A.T.S. has a 35% chance to restore all Action Points and refill your Critical meter.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 9,
                name: {
                    en:'Four Leaf Clover',
                    fr:''
                },
                img: 'four-leaf-clover.png',
                ranks: 4,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'Feeling Lucky? You should! Each hit in V.A.T.S. has a chance of filling your Critical meter.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 13,
                        description: {
                            en:'Each hit in V.A.T.S. now has an even better chance of filling your Critical meter.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 32,
                        description: {
                            en:'Each hit in V.A.T.S. now has a very good chance of filling your Critical meter.',
                            fr:''
                        },
                    },
                    {
                        rank: 4,
                        level: 48,
                        description: {
                            en:'Each hit in V.A.T.S. now has an excellent chance of filling your Critical meter.',
                            fr:''
                        },
                    }
                ]
            },
            {
                rank: 10,
                name: {
                    en:'Ricochet',
                    fr:''
                },
                img: 'ricochet.png',
                ranks: 3,
                ranked: [
                    {
                        rank: 1,
                        level: 0,
                        description: {
                            en:'What goes around comes around! Any enemy\'s ranged attacks will sometimes ricochet back and instantly kill them. The closer you are to death, the higher the chance.',
                            fr:''
                        },
                    },
                    {
                        rank: 2,
                        level: 29,
                        description: {
                            en:'There\'s an increased chance that an enemy\'s shot will ricochet back and kill them.',
                            fr:''
                        },
                    },
                    {
                        rank: 3,
                        level: 50,
                        description: {
                            en:'When an enemy\'s shot ricochets back and kills them, there is a chance your Critical meter gets filled.',
                            fr:''
                        },
                    }
                ]
            }
        ]
    }
];
