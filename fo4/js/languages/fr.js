console.log('DEBUG FR');
const fr ={
    st:{
        l1:{
            name:'Poing de fer',
            rank1:'Canalisez votre chi pour déchaîner la fureur du dragon ! Les coups de poing infligent 20% de dégâts supplémentaires.',
            rank2:'Les coups de poing infligent 40% de dégâts supplémentaires et peuvent désarmer la cible.',
            rank3:'Les coups de poing infligent 60% de dégâts supplémentaires. Les attaques puissantes à mains nues ont une chance de rendre infirme.',
            rank4:'Les coups de poing infligent 80% de dégâts supplémentaires et les attaques puissantes à mains nues ont plus de chances de rendre infirme.',
            rank5:'Les coups de poing infligent deux fois plus de dégâts. Les coups critiques en mode SVAV paralysent la cible.'
        },
        l2:{
            name:'Force de frappe',
            rank1:'Travaillez votre swing pour frapper un grand coup ! Les armes de corps à corps infligent 20% de dégâts supplémentaires.',
            rank2:'Les armes de corps à corps infligent 40% de dégâts supplémentaires et ont une chance de désarmer la cible.',
            rank3:'Les armes de corps à corps infligent 60% de dégâts supplémentaires et ont une meilleure chance de désarmer la cible.',
            rank4:'Les armes de corps à corps infligent 80% de dégâts supplémentaires et touchent toutes les cibles situées devant vous.',
            rank5:'Les armes de corps à corps infligent deux fois plus de dégâts et ont une chance de rendre infirme ou d\'exploser la tête de la cible façon grand chelem !'
        },
        l3:{
            name: 'Armurier',
            rank1:'Protégez-vous des dangers des Terres désolées avec les modules d\'armure de base et de rang 1.',
            rank2:'Vous pouvez accéder aux modules d\'armure de rang 2.',
            rank3:'Vous pouvez accéder aux modules d\'armure de rang 3.',
            rank4:'Vous pouvez accéder aux modules d\'armure de rang 4.'
        },
        l4:{
            name: 'Forgeron',
            rank1:'Allumez la forge et accédez aux modules d\'armes de corps à corps de base et de rang 1.',
            rank2: 'Vous pouvez accéder aux modules d\'armes de corps à corps de rang 2.',
            rank3: 'Vous pouvez accéder aux modules d\'armes de corps à corps de rang 3.'
        },
        l5:{
            name:'Artillerie lourde',
            rank1:'Grâce à un conditionnement et un entraînement rigoureux, les armes lourdes infligent 20% de dégâts supplémentaires.',
            rank2:'Les armes lourdes infligent 40% de dégâts supplémentaires et ont une meilleure précision au tir au jugé.',
            rank3:'Les armes lourdes infligent 60% de dégâts supplémentaires et ont une précision encore meilleure au tir au jugé.',
            rank4:'Les armes lourdes infligent 80% de dégâts supplémentaires et ont une chance de faire vaciller la cible.',
            rank5:'Les armes lourdes infligent deux fois plus de dégâts.'
        },
        l6:{
            name: 'Reins d\'acier',
            rank1: 'Un vrai cheval de trait ! Votre charge maximale augmente de 25.',
            rank2:'Votre charge maximale augmente de 50.',
            rank3: 'Quand vous êtes en surcharge, vous pouvez utiliser des points d\'action pour courir.',
            rank4:'Vous pouvez voyager rapidement tout en étant en surcharge.',
            rank5:'Réduit de 20% le nombre de points d\'actions nécessaires pour sprinter quand vous êtes en surcharge.(Far Harbor DLC)'
        },
        l7:{
            name: 'Visée stable',
            rank1:'Restez sur votre cible ! Votre précision au tir au jugé est meilleure avec toutes les armes.',
            rank2:'Votre précision de tir au jugé est encore meilleure avec toutes les armes.',
            rank3:'Vos dégâts de tir au jugé sont améliorés avec toutes les armes.(Nuka-World DLC)'
        },
        l8: {
            name: 'Cogneur',
            rank1:'Plongez dans la mêlée ! Les coups de crosse infligent 25% de dégâts supplémentaires.',
            rank2:'Les coups de crosse infligent 50% de dégâts supplémentaires et ont une chance de rendre infirme.',
            rank3:'Les coups de crosse infligent 75% de dégâts supplémentaires et ont une meilleure chance de rendre infirme.',
            rank4:'Les coups de crosse infligent deux fois plus de dégâts, ont une meilleure chance de rendre infirme et peuvent infliger un coup critique.',
        },
        l9:{
            name:'Stabilité',
            rank1:'Lorsque vous êtes immobile, votre résistance aux dégâts augmente de 25 et vos attaques au corps à corps et à mains nues infligent 25% de dégâts supplémentaires.',
            rank2:'Lorsque vous êtes immobile, votre résistance aux dégâts augmente de 50 et vos attaques au corps à corps et à mains nues infligent 50% de dégâts supplémentaires. ',
            rank3:'Lorsque vous êtes immobile, il se peut que vous désarmiez automatiquement les ennemis qui utilisent des armes de corps à corps contre vous. '
        },
        l10:{
            name:'Locomotive',
            rank1:'Tchou tchou ! Équipé de votre armure assistée, foncez sur les ennemis pour leur infliger des dégâts et les faire vaciller. ne fonctionne pas sur les robots et ennemis de très grand taille.',
            rank2:'Foncer sur une cible en sprintant avec une armure assistée inflige des dégâts et la fait vaciller plus efficacement. Ne fonctionne pas sur les robots et ennemis de très grande taille.',
            rank3:'Foncer dans une cible en sprintant avec une armure assistée inflige d\'énormes dégâts et la renverse. L\'impact au sol est encore plus dévastateur.'
        }
    },
    pe:{
        l1:{
            name:'Pickpocket',
            rank1:'Grâce à vos doigts agiles et crochus, faire les poches est 25% plus facile.',
            rank2:'Faire les poches est 50% plus facile et vous pouvez placer une grande dégoupillée dans l\'inventaire de la cible.',
            rank3:'Faire les poches est 50% plus facile et vous pouvez voler les armes équipées par la cible.',
            rank4:'Faire les poches est deux fois plus facile et vous pouvez voler les objets équipés par la cible.'
        },
        l2:{
            name:'Fusilier',
            rank1: 'Restez à bonne distance de l\'ennemi et visez toujours dans le mille. Les fusils non automatiques infligent 20% de dégâts supplémentaires. ',
            rank2:'Les fusils non automatiques infligent 40% de dégâts supplémentaires et ignorent 15% de l\'armure de la cible.',
            rank3:'Les fusils non automatiques infligent 60% de dégâts supplémentaires et ignorent 20% de l\'armure de la cible. ',
            rank4:'Les fusils non automatiques infligent 80% de dégâts supplémentaires, ignorent 25% de l\'armure de la cible et ont une petite chance de rendre infirme.',
            rank5:'Les fusils non automatiques infligent deux fois plus de dégâts, ignorent 30% de l\'armure de la cible et ont légèrement plus de chances de rendre infirme.'
        },
        l3:{
            name:'Sens affûtés',
            rank1:'Pour vaincre l\'ennemi, il faut connaître ses faiblesses ! Les résistances de la cible sont affichées en SVAV.',
            rank2:'Connaître leurs faiblesses vous permet d\'attaquer plus efficacement. Chances de toucher la cible et dégâts infligés aux cibles SVAV augmentés de 5%.(Nuka-World DLC)'
        },
        l4:{
            name:'Serrurier',
            rank1:'Vos doigts de fée vous permettent de crocheter les serrures de niveau Avancé.',
            rank2:'Vous pouvez crocheter les serrures de niveau Expert.',
            rank3:'Vous pouvez crocheter les serrures de niveau Maître.',
            rank4:'Vos épingles à cheveux ne cassent jamais pendant les crochetages.'
        },
        l5:{
            name:'Expert en démolition',
            rank1:'Plus ça fait boum, plus vous aimez ça ! Vos explosifs infligent 25% de dégâts supplémentaires et vous pouvez fabriquer des explosifs aux postes de chimie.',
            rank2:'Vos explosifs infligent 50% de dégâts supplémentaires, et la trajectoire des grenades est indiquée par un arc de lancer.',
            rank3:'Les explosifs infligent 75% de dégâts supplémentaires et ont une zone d\'effet plus grande.',
            rank4:'Les explosifs infligent deux fois plus de dégâts. En mode SVAV, les mines et les grenades infligent également deux fois plus de dégâts.'
        },
        l6:{
            name:'Nyctalope',
            rank1:'Vous êtes une créature de la nuit ! Vous recevez un bonus d\'intelligence et de perception de 2 points entre 18 heures et 6 heures du matin.',
            rank2:'Votre intelligence et votre perception augmentent de 3 entre 18h00 et 6h00, et vous bénéficiez de la vision nocturne en mode furtif.',
            rank3:'Votre intelligence augmente de 30 entre 18h00 et 6h00.(Far Harbor DLC)'
        },
        l7:{
            name:'Réfracteur',
            rank1:'Votre père était vitrier ? Les rayons rebondissent sur vous ! Votre résistance à l\'énergie augmente de 10.',
            rank2:'Votre résistance à l\'énergie augmente de 20.',
            rank3:'Votre résistance à l\'énergie augmente de 30.',
            rank4:'Votre résistance à l\'énergie augmente de 40.',
            rank5:'Votre résistance à l\'énergie augmente de 50.'
        },
        l8:{
            name:'Sniper',
            rank1:'Sans maîtrise, la puissance n\'est rien. Vous tremblez moins et vous pouvez retenir votre souffle plus longtemps quand vous visez avec une lunette.',
            rank2:'Les fusils à lunette non automatiques ont une chance de renverser la cible.',
            rank3:'Les fusils à lunette non automatiques reçoivent un bonus de précision de 25% pour les tirs à la tête en mode SVAV.'
        },
        l9:{
            name:'Transperceur',
            rank1: 'Rien ne peut vous échapper ! En mode SVAV, vous pouvez viser les parties du corps d\'un ennemi cachées derrière un élément de l\'environnement, mais avec une pénalité de précision.',
            rank2: 'Pas de pénalité de précision en mode SVAV lorsque vous visez une partie du corps de l\'ennemi cachée par un élément de l\'environnement.'
        },
        l10:{
            name:'Tir groupé',
            rank1:'Appuyez là où ça fait mal ! En mode SVAV, chaque attaque visant la même partie du corps bénéficie d\'un bonus de précision de 10%.',
            rank2:'En mode SVAV, chaque attaque visant la même partie du corps bénéficie d\'un bonus de précision de 15%.',
            rank3:'En mode SVAV, chaque attaque visant la même partie du corps bénéficie d\'un bonus de précision de 20% et inflige 20% de dégâts supplémentaires.'
        }
    },
    en:{
        l1:{
            name:'Robustesse',
            rank1: 'La meilleure attaque, c\'est la défense ! Votre résistance aux dégâts augmente de 10.',
            rank2: 'Votre résistance aux dégâts augmente de 20.',
            rank3: 'Votre résistancec aux dégâts augmente de 30.',
            rank4: 'Votre résistance aux dégâts augmente de 40.',
            rank5: 'Votre résistance aux dégâts augmente de 50.'
        },
        l2:{
            name:'Boyaux plombés',
            rank1: 'Votre système digestif s\'est adapté à la nourriture exotique des Terres désolées ! Vous recevez moins de radiations quand vous buvez ou mangez.',
            rank2: 'Vous recevez encore moins de radiations quand vous buvez ou mangez.',
            rank3: 'Vous ne recevez pas de radiations quand vous buvez ou mangez.'
        },
        l3:{
            name: 'Vitalité',
            rank1:'Vous êtes dans une forme olympique ! Votre santé maximum augmente de 20.',
            rank2:'Votre santé maximum augmente de 20.',
            rank3:'Votre santé maximum augmente de 20 et vous récupérez lentement la santé perdue.'
        },
        l4:{
            name: 'Résistance chimique',
            rank1:'Le trip sans les effets secondaires ! Le risque de développer une dépendance à la drogue est réduit de 50%.',
            rank2:'Annule tout risque de dépendance lorsque vous consommez de la drogue.'
        },
        l5:{
            name: 'Amphibie',
            rank1:'L\'eau est votre alliée. Vous ne recevez plus de dégâts liés aux radiations quand vous nagez et vous pouvez respirer sous l\'eau.',
            rank2:'Vous devenez totalement indétectable lorsque vous vous trouvez sous l\'eau.'
        },
        l6:{
            name: 'Antiradiations',
            rank1:'Votre connaissance des Terres désolées a amélioré votre robustesse, augmentant instantanément de 10 votre résistance aux radiations.',
            rank2:'Votre résistance aux radiations augmente de 20.',
            rank3:'Votre résistance aux radiations augmente de 30.',
            rank4:'Votre résistance aux radiations augmente de 40.(Far Harbor DLC)'
        },
        l7:{
            name: 'Squelette adamantin',
            rank1:'Votre squelette a été renforcé par un alliage en métal indestructible, réduisant de 30% les dégâts aux membres.',
            rank2:'Les dégâts infligés à vos membres sont réduits de 60%.',
            rank3:'Les dégâts infligés à vos membres sont réduits à zéro.'
        },
        l8:{
            name: 'Cannibale',
            rank1:'Dévorez la chair encore fumante de vos victimes pour soigner vos blessures ! Vous récupérez des points de santé en mangeant des cadavres humains.',
            rank2:'L\'ingestion de chair de goules ou de super mutants morts restaure votre santé.',
            rank3:'L\'ingestion de chair de goules,de super mutants ou d\'êtres humains morts restaure fortement votre santé.'
        },
        l9:{
            name: 'Goule-Attitude',
            rank1:'Vous êtes encore un être humain, c\'est vrai... mais uniquement en apparence ! Les radiations régénèrent votre santé.',
            rank2:'Les radiations régénèrent votre santé encore plus.',
            rank3:'Les radiations régénèrent votre santé encore plus et certaines goules sauvages peuvent se montrer amicales.',
            rank4:'Les dégâts de radiations commenceront désormais à soigner lentement, restaurant de la santé par la même occasion. (Nuka-World DLC)'
        },
        l10:{
            name: 'Énergie solaire',
            rank1:'N\'oubliez pas la crème solaire ! Vous recevez un bonus de force et d\'endurance +2 entre 6 heures du matin et 18 heures.',
            rank2:'La lumière du jour soigne lentement vos dégâts subis à cause de radiations.',
            rank3:'La lumière du jour régénère votre santé perdue.'
        }
    },
    ch:{
        l1:{
            name: 'Fana de capsules',
            rank1:'Vous maîtrisez l\'art du marchandage comme personne. Les prix d\'achat et de vente des marchands baissent et augmentent en votre faveur.',
            rank2:'Les prix d\'achat et de vente des marchands baissent et augmentent sensiblement en votre faveur.',
            rank3:'Vous pouvez investir un total de 500 capsules pour augmenter la capacité d\'achat d\'un magasin.'
        },
        l2:{
            name: 'Veuve noire',
            rank1:'Vous savez jouer de vos charmes... et de la gâchette / Suivez-moi dans mon boudoir... Face à une femme/un homme, vos dégâts augmentent de 5% et vos chances de persuasion sont plus importantes.',
            rank2:'Les dégâts infligés aux femmes/aux hommes en combat augmentent de 10%, tout comme vos chances de les persuader. Elles/Ils sont aussi plus faciles à calmer avec l\'aptitude Indimidation.',
            rank3:'Les dégâts infligés aux femmes/aux hommes en combat augmentent de 15%, tout comme vos chances de les persuader. Elles/Ils sont aussi beaucoup plus faciles à calmer avec l\'aptitude Indimidation.'
        },
        l3:{
            name: 'Nomade solitaire',
            rank1: 'Des amis ? Pour quoi faire ? Vous subissez 15% de dégâts en moins et votre charge maximale augmente de 50 quand vous voyagez sans compagnon.',
            rank2: 'Vous subissez 30% de dégâts en moins et votre charge maximale augmente de 100 quand vous voyagez sans compagnon.',
            rank3: 'Vous infligez 25% de dégâts supplémentaires quand vous voyagez sans compagnon.',
            rank4: 'Vous avez 25 points d\'action en plus quand vous voyagez sans compagnon.(Far Harbor DLC)'
        },
        l4:{
            name: 'Chien d\'attaque',
            rank1:'Votre fidèle compagnon canin peut retenir un ennemi avec ses crocs, améliorant vos chances de le toucher en mode SVAV.',
            rank2:'Quand votre chien mord un ennemi, il peut provoquer une infirmité au membre qu\'il tient entre ses dents.',
            rank3:'Quand votre chien mord un ennemi, il peut provoquer une hémorragie.',
            rank4:'Lors de vos aventures avec votre chien, les dégâts que vous subissez sont réduits de 10%.(Nuka-World DLC)'
        },
        l5:{
            name: 'Ami des animaux',
            rank1:'Domptez les animaux sauvages ! Vous pouvez tenter d\'apprivoiser les animaux d\'un niveau inférieur au vôtre en poitant une arme sur eux.',
            rank2:'Quand vous arrivez à apprivoiser un animal, vous pouvez l\'inciter à attaquer.',
            rank3:'Quand vous arrivez à apprivoiser un animal, vous pouvez lui donner des ordres précis.'
        },
        l6:{
            name: 'Chef local',
            rank1:'En tant que leader et chef naturel, vous pouvez établir des voies de ravitaillement entre vos colonies disposant d\'ateliers.',
            rank2:'Vous pouvez construire des magasins et des postes de travail dans les colonies disposant d\'un atelier.'
        },
        l7:{
            name: 'Fêtard / Fêtarde',
            rank1:'La modération, connaît pas! Vous ne pouvez pas développer de dépendance à l\'alcool.',
            rank2:'Les effets de l\'acool sont doublés.',
            rank3:'Votre Chance augmente de 3 lorsque vous êtes sous l\'effet de l\'acool.'
        },
        l8:{
            name: 'Source d\'inspiration',
            rank1:'Parce que vous montrez le bon exemple, votre compagnon inflige plus de dégâts au combat et ne peut pas vous blesser.',
            rank2:'Votre compagnon résiste mieux aux dégâts des combats et est invulnérable à vos attaques.',
            rank3:'Votre compagnon peut porter plus d\'objets.'
        },
        l9:{
            name: 'Dompteur',
            rank1:'Domptez le monde post-apocalyptique! Vous pouvez tenter de pacifier une créature des Terres désolées d\'un niveau inférieur au vôtre en pointant votre arme sur elle.',
            rank2:'Quand vous arrivez à pacifier une créature des Terres désolées, vous pouvez l\'inciter à attaquer.',
            rank3:'Quand vous arrivez à pacifier une créature des Terres désolées, vous pouvez lui donner des ordres précis.'
        },
        l10:{
            name: 'Intimidation',
            rank1:'Il est temps de montrer à tout le monde qui est le patron! Vous pouvez tenter de pacifier un adversaire humain d\'un niveau inférieur au vôtre en pointant votre arme sur lui.',
            rank2:'Quand vous arrivez à pacifier quelqu\'un, vous pouvez l\'inciter à attaquer.',
            rank3:'Quand vous arrivez à pacifier quelqu\'un, vous pouvez lui donner des ordres précis.'
        }
    },
    in:{
        l1:{
            name: 'S.V.A.V.',
            rank1:'Laissez-vous guider par Vault-Tec! Le chemin qui mène à votre objectif de quête le plus proche s\'affiche en mode SVAV.',
            rank2:'+2 points de perception.(Nuka-World DLC)'
        },
        l2:{
            name: 'Infirmier',
            rank1:'Y\'a-t-il un médecin dans la salle? Les Stimpaks rendent 40% de santé et le RadAway dissipe 40% des radiations.',
            rank2:'Les Stimpaks rendent 60% de santé et le RadAway dissipe 60% des radiations.',
            rank3:'Les Stimpaks rendent 80% de santé et le RadAway dissipe 80% des radiations.',
            rank4:'Les Stimpaks et le RadAway restaurent la totalité de la santé et dissipent complètement les radiations. Ils agissent également bien plus vite.'
        },
        l3:{
            name: 'Fana d\'armes',
            rank1:'C\'est le premier qui dégaine qui l\'emporte! Vous pouvez accéder aux modules d\'armes de base et de rang 1.',
            rank2:'Vous pouvez accéder aux modules d\'armes de rang 2.',
            rank3:'Vous pouvez accéder aux modules d\'armes de rang 3.',
            rank4:'Vous pouvez accéder aux modules d\'armes de rang 4.'
        },
        l4:{
            name: 'Pirate',
            rank1:'Votre maîtrise des algorithmes de chiffrement sophistiqués vous permet de pirater les terminaux de niveau Avancé.',
            rank2:'Vous pouvez pirater les terminaux de niveau Expert.',
            rank3:'Vous pouvez pirater les terminaux de niveau Maître.',
            rank4:'Vous ne vous faites jamais éjecter des terminaux pendant les piratages lorsque la situation vous échappe.'
        },
        l5:{
            name: 'Recycleur',
            rank1:'Faut pas gâcher! Vous pouvez récupérer des matériaux rares, comme des vis, de l\'aluminium et du cuivre, en recyclant des armes et armures.',
            rank2:'Vous récupérez des matériaux rares (circuits imprimés, matériaux nucléaires...) quand vous démantelez des objets. Les objets à base de matériaux prisés sont mis en évidence.',
            rank3:'Les fouilles permettent d\'obtenir plus.'
        },
        l6:{
            name: 'Scientifique',
            rank1:'Profitez des meilleures technologies de pointe avec les modules high-tech de base et de rang 1.',
            rank2:'Vous pouvez accéder aux modules high-tech de rang 2.',
            rank3:'Vous pouvez accéder aux modules high-tech de rang 3.',
            rank4:'Vous pouvez accéder aux modules high-tech de rang 4.'
        },
        l7:{
            name: 'Chimie',
            rank1:'Rallonge de 50% la durée des drogues que vous consommez. Trop bien, le trip!',
            rank2:'L\'effet des drogues que vous consommez dure deux fois plus longtemps. ',
            rank3:'Rallonge de 150% la durée des drogues que vous consommez.',
            rank4:'Rallonge de 200% la durée des drogues que vous consommez.'
        },
        l8:{
            name: 'Expert en robotique',
            rank1:'Avec vous, l\'homme triomphe toujours de la machine! Vous pouvez pirater un robot et tenter de l\'allumer, de l\'éteindre ou de déclencher son autodestruction.',
            rank2:'Quand vous arrivez à pirater un robot, vous pouvez l\'inciter à attaquer.',
            rank3:'Quand vous arrivez à pirater un robot, vous pouvez lui donner des ordres précis.'
        },
        l9:{
            name: 'Physicien nucléaire',
            rank1:'Vous avez appris à fissionner l\'atome... et à le plier à votre volonté. Vos armes à radiations infligent 50% de dégâts supplémentaires et vos réacteurs à fusion durent 25% plus longtemps.',
            rank2:'Vos armes à radiations infligent 2 fois plus de dégâts et vos réacteurs à fusion durent 50% plus longtemps.',
            rank3:'Les réacteurs à fusion durent deux fois plus longtemps et peuvent être éjectés des armures assistées pour servir de grenades.'
        },
        l10:{
            name: 'Rage de nerd !',
            rank1:'Le geek se rebelle! Quand votre santé passe sous la barre des 20%, le temps ralentit, votre résistance aux dégâts augmente de 20 et vous infligez 20% de dégâts supplémentaires.',
            rank2:'Votre résistance aux dégâts augmente de 30 et vous infligez 30% de dégâts supplémentaires tant que Rage de nerd est active.',
            rank3:'Votre résistance aux dégâts augmente de 40 et vous infligez 40% de dégâts supplémentaires tant que Rage de nerd est active. Chaque cible tuée restaure partiellement votre santé.'
        }
    },
    ag:{
        l1:{
            name: 'Pistolero',
            rank1:'Retrouvez l\'esprit de la conquête de l\'Ouest! Les pistolets non automatiques infligent 20% de dégâts supplémentaires.',
            rank2:'Les pistolets non automatiques infligent 40% de dégâts supplémentaires et ont une meilleure portée.',
            rank3:'Les pistolets non automatiques infligent 60% de dégâts supplémentaires et ont une portée encore meilleure.',
            rank4:'Les pistolets non automatiques infligent 80% de dégâts supplémentaires et peuvent désarmer la cible.',
            rank5:'Les pistolets non automatiques infligent deux fois plus de dégâts, leurs attaques ont plus de chances de désarmer la cible et peuvent même rendre infirme.'
        },
        l2:{
            name: 'Commando',
            rank1:'Grâce à un entraînement rigoureux, les armes automatiques infligent 20% de dégâts supplémentaires.',
            rank2:'Les armes automatiques infligent 40% de dégâts supplémentaires et ont une meilleure précision au tir au jugé.',
            rank3:'Les armes automatiques infligent 60% de dégâts supplémentaires et ont une précision encore meilleure au tir au jugé.',
            rank4:'Vos armes automatiques infligent 80% de dégâts supplémentaires et ont une chance de faire vaciller la cible.',
            rank5:'Vos armes automatiques infligent deux fois plus de dégâts et ont une meilleure chance de faire vaciller la cible.'
        },
        l3:{
            name: 'Furtivité',
            rank1:'Pour se cacher dans l\'obscurité, il faut devenir l\'obscurité. Vous êtes plus difficiles à détecter de 20% quand vous vous déplacez de manière furtive.',
            rank2:'Quand vous vous déplacez de manière furtive, vous êtes plus difficile à détecter de 30% et vous ne déclenchez plus les pièges posés au sol.',
            rank3:'Quand vous vous déplacez de manière furtive, vous êtes plus difficile à détecter de 40% et vous ne déclenchez plus les mines ennemies.',
            rank4:'Quand vous vous déplacez de manière furtive, vous êtes plus difficile à détecter de 50% et courir n\'affecte plus votre discrétion.',
            rank5:'Les ennemis lointains perdent votre trace quand vous vous déplacez de manière furtive.'
        },
        l4:{
            name: 'Marchand de sable',
            rank1:'Fusion entre le marchand de sable et la faucheuse, vous pouvez tuer une personne dans son sommeil. Les armes équipées d\'un silencieux infligent 15% de dégâts furtifs supplémentaires.',
            rank2:'Les armes équipées d\'un silencieux infligent 30% de dégâts furtifs supplémentaires.',
            rank3:'Les armes équipées d\'un silencieux infligent 50% de dégâts furtifs supplémentaires.'
        },
        l5:{
            name: 'Homme d\'action / Femme d\'action',
            rank1:'Chaque seconde compte! Les points d\'action se régénèrent 25% plus rapidement.',
            rank2:'Vos points d\'action se régénèrent 50% plus rapidement.',
            rank3:'Vos points d\'action se régénèrent 75% plus rapidement.(Far Harbor DLC)'
        },
        l6:{
            name: 'Cible mouvante',
            rank1:'Attrape-moi si tu peux! Votre résistance aux dégâts et votre résistance à l\'énergie augmentent de 25 lorsque vous sprintez.',
            rank2:'Votre résistance aux dégâts et votre résistance à l\'énergie augmentent de 50 lorsque vous sprintez.',
            rank3:'Réduit de 50% le nombre de points d\'actions nécessaires pour sprinter.'
        },
        l7:{
            name: 'Ninja',
            rank1:'Tel un tueur de l\'ombre post-apocalyptique, vos attaques furtives à distance infligent 2,5 fois plus de dégâts, et vos attaques furtives au corps-à-corps, 4 fois plus.',
            rank2:'Les attaques furtives à distance infligent 3 fois plus de dégâts et les attaques furtives au corps-à-corps, 5 fois plus.',
            rank3:'Les attaques furtives à distance infligent 3,5 fois plus de dégâts et les attaques furtives au corps-à-corps, 10 fois plus.'
        },
        l8:{
            name: 'Mains lestes',
            rank1:'Dans le feu de l\'action, la moindre seconde d\'hésitation peut être fatale. Vos armes se rechargent plus rapidement.',
            rank2:'Recharger vos armes en mode SVAV ne consomme pas de points d\'action.',
            rank3:'Rapide et efficace. Vous gagnez 10 points d\'action supplémentaires.(Nuka-World DLC)'
        },
        l9:{
            name: 'Blitz',
            rank1:'Trouvez la brèche et passez à l\'attaque! La distance de corps à corps augmente considérablement en mode SVAV.',
            rank2:'La distance de corps à corps augmente encore plus en mode SVAV, et plus la distance de blitz est élevée, plus les dégâts sont importants.'
        },
        l10:{
            name: 'Tonton flingueur',
            rank1:'Appliquez les enseignements des arts martiaux anciens au maniement des armes à feu! En mode SVAV, vous infligez 25% de dégâts supplémentaires à votre deuxième cible et aux suivantes.',
            rank2:'En mode SVAV, vous infligez 50% de dégâts supplémentaires à votre troisième cible et aux suivantes.',
            rank3:'En mode SVAV, votre quatrième cible et les suivantes subissent instantanément un coup critique.'
        }
    },
    lu:{
        l1:{
            name: 'Dénicheur de trésors',
            rank1:'Vous avez appris à puiser dans les richesses les plus insoupçonnables du Commonwealth et trouvez davantage de capsules dans les contenants.',
            rank2:'Vous trouvez encore plus de capsules dans les contenants.',
            rank3:'Vous trouvez encore plus de capsules dans les contenants.',
            rank4:'Vous trouvez encore plus de capsules dans les contenants et quand vous tuez des ennemis, vous avez une chance que des capsules jaillissent d\'eux.'
        },
        l2:{
            name: 'Farfouilleur',
            rank1:'Pour survivre, il faut savoir récupérer tout ce qui nous tombe sous la main! Vous trouvez plus de munitions dans les contenants.',
            rank2:'Vous trouvez encore plus de munitions dans les contenants.',
            rank3:'Vous trouvez encore plus de munitions dans les contenants.',
            rank4:'Il est possible d\'obtenir des munitions lorsque vous tirez la toute dernière balle de votre chargeur.'
        },
        l3:{
            name: 'Sanguinaire',
            rank1:'Vous bénéficiez d\'un bonus de dégâts de 5% et vos ennemis explosent parfois en un feu d\'artifice d\'os et d\'organes internes.',
            rank2:'Vous infligez 10% de dégâts supplémentaires au combat.',
            rank3:'Vous infligez 15% de dégâts supplémentaires au combat.',
            rank4:'Quand un ennemi explose, les ennemis à proximité peuvent subir le même sort.'
        },
        l4:{
            name: 'Mystérieux étranger',
            rank1:'Qui est-il? D\'où vient-il? On s\'en fiche! Le mystérieux étranger apparaîtra de temps à autre en mode SVAV pour vous prêter main-forte... avec une efficacité mortelle.',
            rank2:'Le mystérieux étranger apparaît plus souvent en mode SVAV.',
            rank3:'Le mystérieux étranger apparaît plus souvent en mode SVAV. Votre jauge de coup critique a une chance de se remplir lorsqu\'il tue un ennemi.',
            rank4:'Le mystérieux étranger apparaît plus souvent en mode SVAV. Votre jauge de coup critique a une grande chance de se remplir lorsqu\'il tue un ennemi.(Nuka-World DLC)'
        },
        l5:{
            name: 'Savant idiot',
            rank1:'Vous n\'êtes pas stupide! C\'est juste que... vous n\'êtes pas comme les autres. Plus votre intelligence est faible, plus vous avez de chance de gagner 3 fois plus de PE à chaque action.',
            rank2:'Plus votre intelligence est faible, plus vous avez de chance de gagner 5 fois plus de PE à chaque action.',
            rank3:'Quand une action rapporte des PE, les victimes suivantes vous font gagner 3x plus de PE lors d\'une courte période. Les chances d\'activation sont plus élevées si votre intelligence est faible.'
        },
        l6:{
            name: 'Coups super critiques',
            rank1:'Vos longues heures d\'entraînement au combat portent leurs fruits! Les coups critiques infligent 50% de dégâts supplémentaires.',
            rank2:'Vos coups critiques infligent deux fois plus de dégâts.',
            rank3:'Vos coups critiques infligent 2,5 fois plus de dégâts supplémentaires.'
        },
        l7:{
            name: 'Réserve critique',
            rank1:'Vos talents de stratège cous permettent de garder un coup critique en réserve pour l\'utiliser en mode SVAV quand le besoin d\'en fait sentir.',
            rank2:'Vous pouvez maintenant garder 2 coups critiques en réserve pour les utiliser en mode SVAV quand le besoin d\'en fait sentir.',
            rank3:'Vous pouvez garder 3 coups critiques en réserve pour les utiliser en mode SVAV en cas de besoin. Chaque coup critique réussi a une chance d\'en ajouter un nouveau à votre réserve.',
            rank4:'Vous pouvez maintenant garder 4 coups critiques en réserve pour les utiliser en mode SVAV quand le besoin s\'en fait sentir.(Far Harbor DLC)'
        },
        l8:{
            name: 'Tueur en série',
            rank1:'La grande faucheuse peut aller se rhabiller ! Vous avez 15% de chance de récupérer tous vos points d\'action quand vous tuez une cible en mode SVAV.',
            rank2:'25% de chance de récupérer tous vos points d\'action quand vous tuez une cible en mode SVAV.',
            rank3:'35% de chance de récupérer tous vos points d\'action et de remplir la jauge de coup critique quand vous tuez une cible en mode SVAV.'
        },
        l9:{
            name: 'Trèfle à quatre feuilles',
            rank1:'Vous vous sentez en veine? Vous avez raison! Les attaques réussies en mode SVAV ont une chance de remplir votre jauge de coup critique.',
            rank2:'Les attaques réussies en mode SVAV ont une meilleure chance de remplir votre jauge de coup critique.',
            rank3:'Les attaques réussies en mode SVAV ont de très grandes chances de remplir votre jauge de coup critique.',
            rank4:'Les attaques réussies en mode SVAV ont de grandes chances de remplir votre jauge de coup critique. '
        },
        l10:{
            name: 'Ricochet',
            rank1:'L\'arroseur arrosé! L\'attaque à distance d\'un ennemi reviendra parfois sur lui et le tuera instantanément. Plus vous êtes proche de la mort, plus vos chances sont élevées.',
            rank2:'Augmentation des chances pour que le tir d\'un ennemi revienne sur lui et le tue.',
            rank3:'Votre jauge de coup critique a une chance de se remplir lorsque le tir d\'un ennemi revient sur lui et le tue.'
        }
    }
}