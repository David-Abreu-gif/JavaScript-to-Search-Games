// Listado de Sugerencias para el buscador

const list_game = [

    "4Story","5Street","8BitMMO","9Dragons",

    "Aberoth","Ace Online","AdventureQuest 3D","AdventureQuest Worlds","Age of Conan: Unchained","Age of Wushu","Aika Online","AION","AirMech Strike","Albion Online","Alien Swarm: Reactive Drop","Allods Online","America’s Army: Proving Grounds","Anarchy Online","Angels Online","APB Reloaded","Apex Legends","ArcheAge","Archeblade","Argo","Armor Valor","Armored Warfare","Artifact","Asda Global","Astellia Royal","Astral Heroes","Astro Empires","Atlantica Online","Atom Universe","Audition Online","Aura Kingdom","Awesomenauts",

    "Battle Breakers","Battlerite","Battlerite Royale","Big Farm","Black Squad","BlackShot: Revolution","Blade and Soul","Blankos Block Party","Bleach Online","Bless Online","Block N Load","Blockade 3D","Blood of Steel","Bloodline Champions","Bombergrounds: Battle Royale","Bombtag","Brawlhalla","Brink"

    ,"Cabal Online","Cabals: Card Blitz","Call Of Duty: Warzone","Caller’s Bane","Card Hunter","Catan Universe","Champions of Regnum","Champions Of Titan","Champions Online","Chroma: Bloom And Blight","Chronicles of Eidola","Clash of Avatars","Closers","Codename CURE","Combat Arms: Reloaded","Conqueror's Blade","Continent of the Ninth Seal","Cosmos Invictus","Counter-Strike Nexon: Studio","Counter-Strike: Global Offensive","Creativerse","Crossfire","Crossout","CRSED: F.O.A.D.","Crucible","Crusaders Of Light","Crystal Clash","Crystal Saga","Cubic Castles",

    "Dark Knight","Dark Orbit Reloaded","Darwin Project","Dauntless","DC Universe Online","Dead Maze","Deceit","Defiance 2050","Destiny 2","Digimon Masters Online","Dino Storm","Dirty Bomb","Divine Souls","Dofus","Dogs of War Online","Dota 2","Dota Underlords","Double Action","Dragon Awaken","Dragon Blood","Dragon Evo","Dragon Nest","Dragon Saga","Drakensang Online","Dreadnought","Dream of Mirror Online","Drifters Loot the Galaxy","Dungeon Defenders 2","Dungeon Fighter Online","Dungeons and Dragons Online",

    "Echo of Soul","Eden Eternal","Eldevin","Elsword","Elvenar","Empire: World War 3","Enlisted","Entropia Universe","Epic Cards Battle","Eternal","Eternal Fury","Eternal Return: Black Survival","Everquest","Everquest 2",

    "Fallout Shelter","Fantasy Tales Online","Felspire","Fer.al","Fiesta Online","Firestone Idle RPG","Fishing Planet","Fistful of Frags","Florensia","Flyff: Fly For Fun","Forge of Empires","Forsaken World","Fortnite","Forza Motorsport 6: Apex","Freestyle2: Street Basketball",

    "Game Of Thrones Winter Is Coming","Gear Up","Genshin Impact","GetAmped 2","Global Adventures","Gods Origin Online","Goodgame Empire","Gotham City Impostors","Granado Espada Online","Grand Fantasia","Grand Prix Racing Online","Grepolis","Grimoire: Manastorm","Guild Wars 2","Guns and Robots","GunZ 2: The Second Duel","Gwent: The Witcher Card Game",

    "Habbo","Halo Infinite","Hearthstone: Heroes of Warcraft","Heavy Metal Machines","Heroes & Generals","Heroes of Newerth","Heroes of the Storm","Heroes Showdown","Hex","Holodrive","Hunter X Hunter Online","Hyper Scape",

    "Ikariam","Immortal Empire","Imperia Online","Inferna","Infestation: The New Z","Infinity Wars","Insidia","Ironsight",

    "Jade Goddess",

    "Kal Online","Kards","Kingdom Wars","Kritika: REBOOT","Krosmaga","KurtzPel",

    "La Tale Evolved","League of Angels","League of Angels - Heaven's Fury","League of Angels 2","League of Angels 3","League of Legends","Legends of Aria","Legends of Honor","Legends of Runeterra","Line of Sight","Lineage 2"
    ,"Lord’s Road","Lost Ark","Lucent Heart","LuckCatchers","Luna Online: Reborn",

    "Mabinogi","Magic: Legends","Magic: The Gathering Arena","MapleStory","MapleStory 2","MechWarrior Online","Metal War Online: Retribution","Metin2","Might And Magic Heroes Online","Minion Masters","Mission Against Terror","Mortal Online","MU Legend","Mu Online","My Soul","Mythgard",

    "Naruto Online","Neverwinter","No More Room in Hell"
    ,"Nords: Heroes of the North",

    "Omega Zodiac","One Piece Online","One Piece Online 2","One Tower","Otherland",

    "Paladins","Panzar","Path of Exile","PC Futbol Legends","Perfect World International","Phantasy Star Online 2","Phantasy Star Online 2 New Genesis","Pirate 101","Pirates: Tides of Fortune","Pixel Worlds","PlanetSide 2","Pocket Starships","Pox Nora","Prime World","Primordials: Battle of Gods","Priston Tale","PUBG: BATTLEGROUNDS",

    "Quake Champions",

    "Ragnarok Online","Ragnarok Online 2","Rail Nation","Rappelz","Realm of the Mad God","Realm Royale","Red Stone Online","Revelation Online","RF Online","Riders of Icarus","Riding Club Championships","RIFT","Ring of Elysium","Roblox","Robocraft","Rocket League","Rogue Company","Rohan: Blood Feud","Royal Quest","RPG MO","Rumble Fighter","Runes of Magic","RuneScape","Ryzom",

    "S4 league","Saga","Salem","SAO’s Legend","Scions of Fate","Seal Online","Second Life","Secret World Legends","Shadow Arena","Shadowverse","Shaiya","Sherwood Extreme","Shop Titans","Shot Online","Siegelord","Skydome","Skyforge","Slapshot: Rebound","Smash Legends","Smite","SNOW","Soldiers Inc.","SoulWorker","Spacelords","Sparta: War of Empires","Spellbreak","Spellsworn","Spellweaver","Sphere 3: Enchanted World","Spiral Knights","Splitgate: Arena Warfare","Star Conflict","Star Crusade","Star Trek Online","Star Trek: Alien Domain","Star Wars: The Old Republic","Starbreak","StarColony","Stay Out","Steel Legions","Stein.world","Stormfall: Age of War","Stronghold Kingdoms","Super Mecha Champions","Super Squad","Survarium","Survivor Legacy","Swords of Legends Online",

    "Tale Of Toast","Team Fortress 2","Teeworlds","Tera","The Banner Saga: Factions","The Elder Scrolls: Legends","The Lord of the Rings Online","The Settlers Online","The Third Age","The Ultimatest Battle","theHunter","Therian Saga","Tibia","Totally Accurate Battlegrounds","Transformice","Travian","Tree of Savior","Tribal Wars 2","Trove","Twelve Sky 2","Twin Saga",

    "UFO Online: Invasion","Ultimate Pirates","Uncharted Waters Online","Unfortunate Spacemen","Unturned","Urban Rivals",

    "Vainglory","Valorant","Vampire Empire","VEGA Conflict","Vikings: War Of Clans","Villagers and Heroes","Vindictus","Voyage Century Online",

    "WAKFU","War Thunder","War Trigger 3","Warface","Warframe","WARMODE","Wartune","Weapons Of Mythology","Wild Terra Online","Will To Live","Wizard101","WolfTeam","World of Tanks","World of Warplanes","World of Warships",

    "Z1 Battle Royale","Zula"

];

export {list_game}