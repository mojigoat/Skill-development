const questions = [
    {
        //1
        question: 'What is Joe Exotic a.k.a the Tiger King\'s real name?',
        answers: [
          { text: 'Joey William Sasha McDonald-Beau', correct: false },
          { text: 'Joaquin Oliver Elijah King', correct: false },
          { text: 'Joseph Allen Maldonado-Passage', correct: true },
          { text: 'Jodin Noah Williams', correct: false },
          { text: 'Joel Alex Atticus-Sterling', correct: false },
          { text: 'Abraham Joffrey MacMilan', correct: false }
      ]
    },
    {
      //2
      question: 'Which actor voiced both Darth Vader and The Lion King\'s Mufasa?',
      answers: [
        { text: 'Morgan Freeman', correct: false },
        { text: 'Rowan Atkinson', correct: false },
        { text: 'Dave Batista', correct: false },
        { text: 'Robert Guillaume', correct: false },
        { text: 'Donald Glover', correct: false },
        { text: 'James Earl Jones', correct: true }
      ]
    },
    {
      //3
      question: 'What does the acronym "SMH" stand for?',
      answers: [
        { text: 'Shave my head', correct: false },
        { text: 'Shaking my head', correct: true },
        { text: 'Show my head', correct: false },
        { text: 'Shook my head', correct: false },
        { text: 'Shake my head', correct: false },
        { text: 'Shakes my head', correct: false }
      ]
    },
    {
      //4
      question: 'What year did the "Friends" TV sitcom premier on NBC?',
      answers: [
        { text: '1993', correct: false },
        { text: '1994', correct: true },
        { text: '1995', correct: false },
        { text: '1996', correct: false },
        { text: '1997', correct: false },
        { text: '1998', correct: false }
      ]
    },
    {
      //5
      question: 'Based on the HenricoM 2021 Q&A stream, What was your answer to "If you could change your name, what would it be?',
      answers: [
        { text: 'Josh', correct: false },
        { text: 'Henry', correct: false },
        { text: 'Marlin', correct: false },
        { text: 'Billy', correct: false },
        { text: 'Chad', correct: true },
        { text: 'Nancy', correct: false }
      ]
    },
    {
      //6
      question: 'In DayZ, What is the capital city of the populer map, Livonia?',
      answers: [
        { text: 'Stokowsko', correct: false },
        { text: 'Lomnica', correct: false },
        { text: 'Andrzejow', correct: true },
        { text: 'Kaliningrad', correct: false },
        { text: 'Chwoszcz', correct: false },
        { text: 'Swietoszowice', correct: false }
      ]
    },
    {
      //7
      question: 'In DayZ, what ammunition is used by the Deagle?',
      answers: [
        { text: '.357 Rounds', correct: true },
        { text: '.45 ACP Rounds', correct: false },
        { text: '7.62x39MM Rounds', correct: false },
        { text: '.380 ACP Rounds', correct: false },
        { text: '.22 LR Rounds', correct: false },
        { text: '9x19MM Rounds', correct: false }
      ]
    },
    {
      //8
      question: 'Who won the 2021 CS:GO Winter Intel Extreme Masters XVI?',
      answers: [
        { text: 'Ninjas in Pyjamas', correct: false },
        { text: 'Team Vitality', correct: true },
        { text: 'G2 Esports', correct: false },
        { text: 'FaZe Clan', correct: false },
        { text: 'Fnatic', correct: false },
        { text: 'Virtus.pro', correct: false }
      ]
    },
    {
      //9
      question: 'Who won the 2022 CS:GO Blast Premier World Finals?',
      answers: [
        { text: 'FaZe Clan', correct: false },
        { text: 'Team Vitality', correct: false },
        { text: 'Natus Vincere', correct: false },
        { text: 'Heroic', correct: false },
        { text: 'Team liquid', correct: false },
        { text: 'G2 Esports', correct: true }
      ]
    },
    {
      //10
      question: 'To which country does the capital of Bangkok belong?',
      answers: [
        { text: 'Cambodia', correct: false },
        { text: 'Vietnam', correct: false },
        { text: 'China', correct: false },
        { text: 'Malaysia', correct: false },
        { text: 'Thailand', correct: true },
        { text: 'Philippines', correct: false }
      ]
    },
    {
      //11
      question: 'What month in 2022, did Elon Musk become CEO of Twitter?',
      answers: [
        { text: 'November', correct: false },
        { text: 'August', correct: false },
        { text: 'October', correct: true },
        { text: 'December', correct: false },
        { text: 'September', correct: false },
        { text: 'July', correct: false }
      ]
    },
    {
      //12
      question: 'In 2021, what channel was not apart of Zassie\'s #TwitchRecap Top Watched Channels?',
      answers: [
        { text: 'ImKibitz', correct: false },
        { text: 'PUBG_BATTLEGROUNDS', correct: false },
        { text: 'zolh', correct: false },
        { text: 'CamCeej', correct: true },
        { text: 'HenricoM', correct: false },
        { text: 'Pacman10154', correct: false }
      ]
    },
    {
      //13
      question: 'What is the Original French Name of Clumsy Smurf from the cartoon series "The Smurfs"?',
      answers: [
        { text: 'Schtroumpf Maladroit', correct: true },
        { text: 'Schtroumpf à Lunettes', correct: false },
        { text: 'Schtroumpf Grognon', correct: false },
        { text: 'Grand Schtroumpf', correct: false },
        { text: 'Schtroumpf Cuisinier', correct: false },
        { text: 'Mémé Schtroumpf', correct: false }
      ]
    },
    {
      //14
      question: 'In the Pokemon series, What colour is Voltorb?',
      answers: [
        { text: 'Blue and Red', correct: false },
        { text: 'White and black', correct: false },
        { text: 'Orange and Green', correct: false },
        { text: 'Yellow and Black', correct: false },
        { text: 'Black and white', correct: false },
        { text: 'Red and White', correct: true }
      ]
    },
    {
      //15
      question: 'In the Pokemon series, which of the below is not an evolution of Eevee?',
      answers: [
        { text: 'Glaceon', correct: false },
        { text: 'Vaporeon', correct: false },
        { text: 'Umbreon', correct: false },
        { text: 'Sylveon', correct: false },
        { text: 'Leafeon', correct: false },
        { text: 'Aereon', correct: true }
      ]
    },
    {
      //16
      question: 'In the Yu-Gi-Oh! series, What is the name of Yugi\'s ace monster?',
      answers: [
        { text: 'Dark Magician', correct: true },
        { text: 'Blue-Eyes White Dragon', correct: false },
        { text: 'Exodia The Forbidden One', correct: false },
        { text: 'Celtic Guardian', correct: false },
        { text: 'Big Shield Gardna', correct: false },
        { text: 'Dark Magician Girl', correct: false }
      ]
    },
    {
      //17
      question: 'Which city below is the capital of Georgia?',
      answers: [
        { text: 'Batumi', correct: false },
        { text: 'Kutaisi', correct: false },
        { text: 'Zugdidi', correct: false },
        { text: 'Tbilisi', correct: true },
        { text: 'Gori', correct: false },
        { text: 'Samtredia', correct: false }
      ]
    },
    {
      //18
      question: 'What was the most popular TV show in 1994?',
      answers: [
        { text: 'Friends', correct: false },
        { text: 'Seinfeld', correct: true },
        { text: 'ER', correct: false },
        { text: 'Frasier', correct: false },
        { text: 'The Simpsons', correct: false },
        { text: 'Law & Order', correct: false }
      ]
    },
    {
      //19
      question: 'Who won the CSGO DreamHack Winter 2013 Championship?',
      answers: [
        { text: 'Cloud9', correct: false },
        { text: 'Astralis', correct: false },
        { text: 'OG', correct: false },
        { text: 'Fnatic', correct: true },
        { text: 'Natus Vincere', correct: false },
        { text: 'Gambit', correct: false }
      ]
    },
    {
      //20
      question: 'What is the real name of the rapper known as "Snoop Dogg"?',
      answers: [
        { text: 'Curtis Jackson', correct: false },
        { text: 'Dwayne Michael Carter, Jr.', correct: false },
        { text: 'Sean Combs', correct: false },
        { text: 'Earl Simmons', correct: false },
        { text: 'Calvin Broadus', correct: true },
        { text: 'Amaru Shakur', correct: false }
      ]
    },
    {
      //21
      question: 'Who won the 1994 FIFA World Cup?',
      answers: [
        { text: 'Germany', correct: false },
        { text: 'Italy', correct: false },
        { text: 'Brazil', correct: true },
        { text: 'Argentina', correct: false },
        { text: 'Spain', correct: false },
        { text: 'France', correct: false }
      ]
    },
    {
      //22
      question: 'When was the first release of Counter-strike released?',
      answers: [
        { text: 'November 9, 2000', correct: true },
        { text: 'December 12, 1998', correct: false },
        { text: 'January 12, 1994', correct: false },
        { text: 'April 27, 2002', correct: false },
        { text: 'June 26, 1995', correct: false },
        { text: 'August 10, 1999', correct: false }
      ]
    },
    {
      //23
      question: 'In 2022, what category was apart of datass_991\'s #TwitchRecap Top 4 watched Categories?',
      answers: [
        { text: 'Overwatch', correct: true },
        { text: 'League of legends', correct: false },
        { text: 'Rust', correct: false },
        { text: 'Music', correct: false },
        { text: 'Apex Legends', correct: false },
        { text: 'Elden Ring', correct: false }
      ]
    },
    {
      //24
      question: 'Of the below, which Creator/Pro did not play in Chapter III of The #ThendoPlaysInvitational?',
      answers: [
        { text: 'TheCaramelGamer', correct: false },
        { text: 'Hutchie', correct: false },
        { text: 'Binkz', correct: false },
        { text: 'Tenbees', correct: false },
        { text: 'Papa Capes', correct: true },
        { text: 'Mama Succubus', correct: false }
      ]
    },
    {
      //25
      question: 'in 2022, What song was not apart of HenricM\'s #SpotifyWrapped Top 5 list?',
      answers: [
        { text: 'Phantom - Makari', correct: false },
        { text: 'Mend - Makari', correct: false },
        { text: 'Opiate - Monuments', correct: false },
        { text: 'Serotonin - Nic D', correct: false },
        { text: 'Let Go - Makari', correct: false },
        { text: 'Labyrinth - Makari', correct: true }
      ]
    },
    {
      //26
      question: 'What is not a role recogonised in the game "Among us"?',
      answers: [
        { text: 'Sheriff', correct: false },
        { text: 'Shapeshifter', correct: false },
        { text: 'Engineer', correct: false },
        { text: 'Gaurdian Angel', correct: false },
        { text: 'Scientist', correct: false },
        { text: 'Mechanic', correct: true }
      ]
    },
    {
      //27
      question: 'It is illegal to do what in the French vineyards?',
      answers: [
        { text: 'Land a flying saucer', correct: true },
        { text: 'Eat a croissant', correct: false },
        { text: 'Sing the national anthem', correct: false },
        { text: 'Play a piano', correct: false },
        { text: 'Tackle the scarecrows', correct: false },
        { text: 'Sing a sonnet', correct: false }
      ]
    },
    {
      //28
      question: 'Coprastastaphobia is the fear of what?',
      answers: [
        { text: 'Corpses', correct: false },
        { text: 'Copium', correct: false },
        { text: 'Static Noise', correct: false },
        { text: 'Constipation', correct: true },
        { text: 'Fried Chicken', correct: false },
        { text: 'Needles', correct: false }
      ]
    },
    {
      //29
      question: 'It was illegal for women to wear what in 19th century Florence?',
      answers: [
        { text: 'Socks', correct: false },
        { text: 'Buttons', correct: true },
        { text: 'Braces', correct: false },
        { text: 'Bonnets', correct: false },
        { text: 'Underwear', correct: false },
        { text: 'Floral Dresses', correct: false }
      ]
    },
    {
      //30
      question: 'What flavour is Cointreau?',
      answers: [
        { text: 'Orange', correct: true },
        { text: 'Lavender', correct: false },
        { text: 'Cardamom', correct: false },
        { text: 'Saffron', correct: false },
        { text: 'Vanilla', correct: false },
        { text: 'Tamarind', correct: false }
      ]
    },
    {
      //31
      question: 'What do you call a group of unicorns?',
      answers: [
        { text: 'A prance of unicorns', correct: false },
        { text: 'A sparkle of unicorns', correct: false },
        { text: 'A herd of unicorns', correct: false },
        { text: 'A glitter of unicorns', correct: false },
        { text: 'A unicornado of unicorns', correct: false },
        { text: 'A blessing of unicorns', correct: true }
      ]
    },
    {
      //32
      question: 'What is the name of the knife that was added to CS:GO as part of the Operation Breakout update in 2014?',
      answers: [
        { text: 'Karambit', correct: false },
        { text: 'The Butterfly Knife', correct: true },
        { text: 'Huntsman', correct: false },
        { text: 'Bayonet', correct: false },
        { text: 'Gut Knife', correct: false },
        { text: 'Stiletto Knife', correct: false }
      ]
    },
    {
      //33
      question: 'Which Colors Do Colorblind People Have Trouble Distinguishing?',
      answers: [
        { text: 'Red and Blue', correct: false },
        { text: 'Black and white', correct: false },
        { text: 'Red and green', correct: true },
        { text: 'Orange and Yellow', correct: false },
        { text: 'Red and Black', correct: false },
        { text: 'Blue and green', correct: false }
      ]
    },
    {
      //34
      question: 'As of 2023, Which Nigerian ethnic group obtains the highest percentage of the population?',
      answers: [
        { text: 'Hausa', correct: true },
        { text: 'Yoruba', correct: false },
        { text: 'Igbo', correct: false },
        { text: 'Fulani', correct: false },
        { text: 'Tiv', correct: false },
        { text: 'Kanuri', correct: false }
      ]
    },
    {
      //35
      question: 'Which language does the onomatopoeia word "KEK" derive from, meaning "LOL" or "Haha"?',
      answers: [
        { text: 'Japanese', correct: false },
        { text: 'Syrian', correct: false },
        { text: 'Russian', correct: false },
        { text: 'Spanish', correct: false },
        { text: 'Korean', correct: true },
        { text: 'German', correct: false }
      ]
    },
    {
      //36
      question: 'What country is the language "Burmese" predominantly spoken?',
      answers: [
        { text: 'Myanmar', correct: true },
        { text: 'Nicaragua', correct: false },
        { text: 'Papua New Guinea', correct: false },
        { text: 'Bolivia', correct: false },
        { text: 'Moldova', correct: false },
        { text: 'Nepali', correct: false }
      ]
    },
    {
      //37
      question: 'Select the correctly spelt option.',
      answers: [
        { text: 'Necessary', correct: true },
        { text: 'Nesessary', correct: false },
        { text: 'Nessecary', correct: false },
        { text: 'Necessery', correct: false },
        { text: 'Nessessery', correct: false },
        { text: 'Necesary', correct: false }
      ]
    },
    {
      //38
      question: 'What was the number that displayed on the fictional sentient 1963 Volkswagen Beetle, known as "Herbie"?',
      answers: [
        { text: '49', correct: false },
        { text: '58', correct: false },
        { text: '51', correct: false },
        { text: '69', correct: false },
        { text: '61', correct: false },
        { text: '53', correct: true }
      ]
    },
    {
      //39
      question: 'In the show "7de Laan", What is the full name of "Oubaas"?',
      answers: [
        { text: 'Septimus van Zyl', correct: true },
        { text: 'Tjaart Viljee', correct: false },
        { text: 'Neville Meintjies', correct: false },
        { text: 'Tokkie le Roux', correct: false },
        { text: 'Leon de Lange', correct: false },
        { text: 'Terry de Klerk', correct: false }
      ]
    },
    {
      //40
      question: 'Where was Joshua "Nobodyyyyyyy" Bott born?',
      answers: [
        { text: 'Alberton, Johannesburg', correct: false },
        { text: 'Bluff, Durban', correct: false },
        { text: 'Philippi, Cape Town', correct: false },
        { text: 'Westville, Durban', correct: true },
        { text: 'Wilsonia, East London', correct: false },
        { text: 'Sandton, Johannesburg', correct: false }
      ]
    },
    {
      //41
      question: 'In Harry Potter, What does the Imperius Curse do?',
      answers: [
        { text: 'Tortures a victim', correct: false },
        { text: 'Kills a victim', correct: false },
        { text: 'Severs a victim', correct: false },
        { text: 'Controls a victim', correct: true },
        { text: 'Burns a victim', correct: false },
        { text: 'Teleports a victim', correct: false }
      ]
    },
    {
      //42
      question: 'Natural vaginal lubricant contains a substance called squalene, which is also found in the liver of which animal?',
      answers: [
        { text: 'Possum', correct: false },
        { text: 'Mouse', correct: false },
        { text: 'Snake', correct: false },
        { text: 'Shark', correct: true },
        { text: 'Hippopotamus', correct: false },
        { text: 'Panda', correct: false }
      ]
    },
    {
      //43
      question: 'What species of whale, named after a part of its body, is the second largest animal in the world?',
      answers: [
        { text: 'Fin Whale', correct: true },
        { text: 'Flipper Whale', correct: false },
        { text: 'Fluke Whale', correct: false },
        { text: 'Rostrum Whale', correct: false },
        { text: 'Baleen Whale', correct: false },
        { text: 'Blowhole Whale', correct: false }
      ]
    },
    {
      //44
      question: 'What color is the "black box" in an airplane?',
      answers: [
        { text: 'Black', correct: false },
        { text: 'Orange', correct: true },
        { text: 'White', correct: false },
        { text: 'Green', correct: false },
        { text: 'Red', correct: false },
        { text: 'Yellow', correct: false }
      ]
    },
    {
      //45
      question: 'What was Hugh Hefner\'s jet plane named?',
      answers: [
        { text: 'The Pimp Daddy', correct: false },
        { text: 'The Love Machine', correct: false },
        { text: 'The Rough Rider', correct: false },
        { text: 'The Money Maker', correct: false },
        { text: 'The Huge Hefner', correct: false },
        { text: 'The Big Bunny', correct: true }
      ]
    },
    {
      //46
      question: 'What country banned hula hoops for imitating a "stimulating passion"?',
      answers: [
        { text: 'Indonesia', correct: true },
        { text: 'North Korea', correct: false },
        { text: 'Japan', correct: false },
        { text: 'Kyrgyzstan', correct: false },
        { text: 'Singapore', correct: false },
        { text: 'Tajikistan', correct: false }
      ]
    },
    {
      //47
      question: 'In 2001, which CSGO team earned the highest return based on prize pool winnings?',
      answers: [
        { text: 'SK Gaming', correct: false },
        { text: 'Ninjas in Pyjamas', correct: true },
        { text: 'Xtreme 3', correct: false },
        { text: 'Spirit of Amiga', correct: false },
        { text: 'Fnatic', correct: false },
        { text: 'Allstars', correct: false }
      ]
    },
    {
      //48
      question: 'What is 20 to the power of 0?',
      answers: [
        { text: '1', correct: true },
        { text: '0', correct: false },
        { text: '20', correct: false },
        { text: '4', correct: false },
        { text: '2', correct: false },
        { text: '10', correct: false }
      ]
    },
    {
      //49
      question: 'What is the name of an angle of more than 90 degrees but less than 180 degrees?',
      answers: [
        { text: 'Straight angle', correct: false },
        { text: 'Left angle', correct: false },
        { text: 'Right angle', correct: false },
        { text: 'Acute angle', correct: false },
        { text: 'Reflex angle', correct: false },
        { text: 'Obtuse angle', correct: true }
      ]
    },
    {
      //50
      question: 'Which CSGO team, won the ESL One: Cologne 2016 championship?',
      answers: [
        { text: 'Team Liquid', correct: false },
        { text: 'Virtus.pro', correct: false },
        { text: 'Fnatic', correct: false },
        { text: 'SK Gaming', correct: true },
        { text: 'Astralis', correct: false },
        { text: 'Team Dignitas', correct: false }
      ]
    },
    {
      //51
      question: 'What is the name of the national currency of Hungary?',
      answers: [
        { text: 'Forint', correct: true },
        { text: 'Baht', correct: false },
        { text: 'Koruna', correct: false },
        { text: 'Pula', correct: false },
        { text: 'Krona', correct: false },
        { text: 'Lev', correct: false }
      ]
    },
    {
      //52
      question: 'What was the total number of "Games Played", based on HericoM\'s 2022 Steam Replay results?',
      answers: [
        { text: '56', correct: false },
        { text: '72', correct: false },
        { text: '81', correct: false },
        { text: '69', correct: true },
        { text: '44', correct: false },
        { text: '101', correct: false }
      ]
    },
    {
      //53
      question: 'Which continent is the country "Benin" apart of?',
      answers: [
        { text: 'Africa', correct: true },
        { text: 'Asia', correct: false },
        { text: 'Europe', correct: false },
        { text: 'Australia', correct: false },
        { text: 'South America', correct: false },
        { text: 'Antarctica', correct: false }
      ]
    },
    {
      //54
      question: 'What geometric shape is generally used for stop signs?',
      answers: [
        { text: 'Decagon', correct: false },
        { text: 'Megatron', correct: false },
        { text: 'Pentagon', correct: false },
        { text: 'Hexagon', correct: false },
        { text: 'Octagon', correct: true },
        { text: 'Decepticon', correct: false }
      ]
    },
    {
      //55
      question: 'Which afrikaans idiom, is said to mean "Do not overdo it."',
      answers: [
        { text: 'So ń bek moet jem kry', correct: false },
        { text: 'Dis ń feit soos n koei', correct: false },
        { text: 'Wors in die hondestal soek', correct: false },
        { text: 'Die aap uit die mou laat', correct: false },
        { text: 'Moenie die hoender ruk nie', correct: true },
        { text: 'Lepel in die dak steek', correct: false }
      ]
    },
    {
      //56
      question: 'What are the names of Cinderella\'s two stepsisters?',
      answers: [
        { text: 'Annebelle and Pamela', correct: false },
        { text: 'Anastasia and Drizella', correct: true },
        { text: 'Anaseed and Godzilla', correct: false },
        { text: 'Gabrielle and Azalea', correct: false },
        { text: 'Ariella and Tasia', correct: false },
        { text: 'Fantasia and Novella', correct: false }
      ]
    },
    {
      //57
      question: 'What is the national animal of Sctoland?',
      answers: [
        { text: 'Loch Ness Monster', correct: false },
        { text: 'Griffin', correct: false },
        { text: 'Minotaur', correct: false },
        { text: 'Phoenix', correct: false },
        { text: 'Basilisk', correct: false },
        { text: 'Unicorn', correct: true }
      ]
    },
    {
      //58
      question: 'Based on the HenricoM\'s steam profile, who was the first person to leave a comment?',
      answers: [
        { text: 'Reaper69', correct: false },
        { text: 'Boneless', correct: false },
        { text: 'Anoxia', correct: false },
        { text: 'Stiglet', correct: false },
        { text: 'Filly', correct: true },
        { text: 'Booteri', correct: false }
      ]
    },
    {
      //59
      question: 'In Harry Potter, Who is "Nagini"?',
      answers: [
        { text: 'Ron\'s owl', correct: false },
        { text: 'Hermione\'s cat', correct: false },
        { text: 'Voldemort\'s snake', correct: true },
        { text: 'Severes Black\'s elf', correct: false },
        { text: 'Neville\'s toad', correct: false },
        { text: 'Hagrid\'s dog', correct: false }
      ]
    },
    {
      //60
      question: 'Where was Oleksandr “s1mple” Kostyliev born?',
      answers: [
        { text: 'Bucharest, Romania', correct: false },
        { text: 'Balti, Moldova', correct: false },
        { text: 'Zugdidi, Georgia', correct: false },
        { text: 'Moscow, Russia', correct: false },
        { text: 'Misk, Belarus', correct: false },
        { text: 'Kiev, Ukraine', correct: true }
      ]
    },
    {
      //61
      question: 'What type of animal is a Flemish giant?',
      answers: [
        { text: 'A Rabbit', correct: true },
        { text: 'A Toad', correct: false },
        { text: 'A Bird', correct: false },
        { text: 'A Spider', correct: false },
        { text: 'A Bear', correct: false },
        { text: 'A Mouse', correct: false }
      ]
    },
    {
      //62
      question: 'What is a duel between three people called?',
      answers: [
        { text: 'A duel', correct: false },
        { text: 'A try-duel', correct: false },
        { text: 'A truel', correct: true },
        { text: 'A crule', correct: false },
        { text: 'A trial', correct: false },
        { text: 'A three way', correct: false }
      ]
    },
    {
      //63
      question: 'Based on Transformers, Which Autobot could create holographic illusions?',
      answers: [
        { text: 'Optimus Prime', correct: false },
        { text: 'Bumblebee', correct: false },
        { text: 'Ratchet', correct: false },
        { text: 'Ramjack', correct: false },
        { text: 'Jazz', correct: false },
        { text: 'Mirage', correct: true }
      ]
    },
    {
      //64
      question: 'From what grain is the Japanese spirit Sake made?',
      answers: [
        { text: 'Wheat', correct: false },
        { text: 'Rice', correct: true },
        { text: 'Barley', correct: false },
        { text: 'Quinoa', correct: false },
        { text: 'Bulgar', correct: false },
        { text: 'Rye', correct: false }
      ]
    },
    {
      //65
      question: 'In the original arcade version of Donkey Kong, what was the name of the character that would later be known as Mario?',
      answers: [
        { text: 'Jumpman', correct: true },
        { text: 'Sergio', correct: false },
        { text: 'Hero boy', correct: false },
        { text: 'Journey man', correct: false },
        { text: 'Super boy', correct: false },
        { text: 'Luigi', correct: false }
      ]
    },
    {
      //66
      question: 'Which of the below, is an example of a cruciferous vegetable?',
      answers: [
        { text: 'Broccoli', correct: true },
        { text: 'Cucumber', correct: false },
        { text: 'Asparagus', correct: false },
        { text: 'Zucchini', correct: false },
        { text: 'Carrots', correct: false },
        { text: 'Sweet Potatoes', correct: false }
      ]
    },
    {
      //67
      question: 'Who is the protagonist in "The Legend of Zelda"?',
      answers: [
        { text: 'Midna', correct: false },
        { text: 'Ganon', correct: false },
        { text: 'Impa', correct: false },
        { text: 'Ravio', correct: false },
        { text: 'Link', correct: true },
        { text: 'Tingle', correct: false }
      ]
    },
    {
      //68
      question: 'In Pokemon, What is the final evolution of Weedle?',
      answers: [
        { text: 'Butterfree', correct: false },
        { text: 'Venomoth', correct: false },
        { text: 'Bellossom', correct: false },
        { text: 'Clefable', correct: false },
        { text: 'Fearow', correct: false },
        { text: 'Beedrill', correct: true }
      ]
    },
    {
      //69
      question: 'Pacman was designed to resemble which food?',
      answers: [
        { text: 'A Pie', correct: false },
        { text: 'A Pizza', correct: true },
        { text: 'A Burger', correct: false },
        { text: 'A Pancake', correct: false },
        { text: 'A Doughnut', correct: false },
        { text: 'An Egg', correct: false }
      ]
    },
    {
      //70
      question: 'Based on the HenricoM\'s steam profile, which game out of the below did you leave a review for in February 2021?',
      answers: [
        { text: 'Hellblade: Senua\'s Sacrifice', correct: true },
        { text: 'Tell Me Why', correct: false },
        { text: 'DayZ', correct: false },
        { text: 'PUBG: BATTLEGROUNDS', correct: false },
        { text: 'Counter-strike: Global Offence', correct: false },
        { text: 'God of War', correct: false }
      ]
    },
    {
      //71
      question: 'Which band sang the song "Hospital For Souls"?',
      answers: [
        { text: 'Bad Omens', correct: false },
        { text: 'We came as Romans', correct: false },
        { text: 'Beartooth', correct: false },
        { text: 'While she sleeps', correct: false },
        { text: 'Bring Me The Horizon', correct: true },
        { text: 'The Amity Affliction', correct: false }
      ]
    },
    {
      //72
      question: 'Who is the sidekick of Sonic the Hedgehog?',
      answers: [
        { text: 'Mighty', correct: false },
        { text: 'Shadow', correct: false },
        { text: 'Knuckles', correct: false },
        { text: 'Tails', correct: true },
        { text: 'Bean', correct: false },
        { text: 'Rouge', correct: false }
      ]
    },
    {
      //73
      question: 'In Mortal Kombat universe, What unique special power does Shang Tsung possess?',
      answers: [
        { text: 'He is a shapeshifter', correct: true },
        { text: 'He can freeze his enemies', correct: false },
        { text: 'He has godlike strength', correct: false },
        { text: 'He can control the dead', correct: false },
        { text: 'He can manipulate fire', correct: false },
        { text: 'He wields a magical whip', correct: false }
      ]
    },
    {
      //74
      question: 'In the Afrikaans language, How do you say "How old are you"?',
      answers: [
        { text: 'Het jy my lief?', correct: false },
        { text: 'Sal jy met my trou?', correct: false },
        { text: 'Die hond blaf', correct: false },
        { text: 'Wat is jou naam?', correct: false },
        { text: 'How oud is jy?', correct: true },
        { text: 'Poesklap', correct: false }
      ]
    },
    {
      //75
      question: 'Which former Beatle narrated the TV adventures of Thomas the Tank Engine?',
      answers: [
        { text: 'John Lennon', correct: false },
        { text: 'Paul McCartney', correct: false },
        { text: 'George Harrison', correct: false },
        { text: 'Matthew McConaughey', correct: false },
        { text: 'Ringo Starr', correct: true },
        { text: 'Boy George', correct: false }
      ]
    },
    {
      //76
      question: 'What is the Celsius equivalent of 77 degrees Fahrenheit?',
      answers: [
        { text: '25', correct: true },
        { text: '15', correct: false },
        { text: '33', correct: false },
        { text: '50', correct: false },
        { text: '77', correct: false },
        { text: '42', correct: false }
      ]
    },
    {
      //77
      question: 'What does “HTTP” stand for?',
      answers: [
        { text: 'HyperTranfer Text Protocol', correct: false },
        { text: 'Hyperbolic TransText Process', correct: false },
        { text: 'HyperText Techincal Procurement', correct: false },
        { text: 'Hotdog Tasting Party Squad', correct: false },
        { text: 'Transfer Protocal of Hyper Text', correct: false },
        { text: 'HyperText Transfer Protocol', correct: true }
      ]
    },
    {
      //78
      question: 'What is the symbol for potassium?',
      answers: [
        { text: 'Pt', correct: false },
        { text: 'Ar', correct: false },
        { text: 'Sr', correct: false },
        { text: 'Na', correct: false },
        { text: 'Ag', correct: false },
        { text: 'K', correct: true }
      ]
    },
    {
      //79
      question: 'Which movie kicked off the Skywalker saga in 1977?',
      answers: [
        { text: 'Episode IV – A New Hope', correct: true },
        { text: 'Episode VI – Return of the Jedi', correct: false },
        { text: 'Episode I – The Phantom Menace', correct: false },
        { text: 'Episode VIII – The Last Jedi', correct: false },
        { text: 'Episode II – Attack of the Clones', correct: false },
        { text: 'Episode III - Star trek se bek', correct: false }
      ]
    },
    {
      //80
      question: 'What is the real name of Mia Khalifa?',
      answers: [
        { text: 'Sarty Craig Dicemet', correct: false },
        { text: 'Masul Gaty Lamoun', correct: false },
        { text: 'Sahil El Khoury', correct: false },
        { text: 'Jessica Khalifa Rizk', correct: false },
        { text: 'Sarah Joe Chamoun', correct: true },
        { text: 'Miarul Nadia Qasim', correct: false }
      ]
    },
    {
      //81
      question: 'In 2020, Netflix aired a reality show that required participants to remain celibate. What was it called?',
      answers: [
        { text: 'Are you the one', correct: true },
        { text: '90 Day Fiance', correct: false },
        { text: 'Love Is Blind', correct: false },
        { text: 'Too Hot To Handle', correct: true },
        { text: 'Love Island', correct: false },
        { text: 'The Circle', correct: false }
      ]
    },
    {
      //82
      question: 'Popular yourtuber Olajide Olayinka Williams "JJ" Olatunji goes by the name "KSI", What does it stand for?',
      answers: [
        { text: 'Kourage, Solokills & Internet', correct: false },
        { text: 'Knowledge, Strength & Integrity', correct: true },
        { text: 'Kinship, Success & Inspiration', correct: false },
        { text: 'Karmic, Serenity & Intuition', correct: false },
        { text: 'Kindness, Solitude & Inner Peace', correct: false },
        { text: 'Karmic, Synergy & Imagination', correct: false }
      ]
    },
    {
      //83
      question: 'Minecraft follows a day and night cycle. How long does the defualt full cycle last in real-time?',
      answers: [
        { text: '25 Minutes', correct: false },
        { text: '45 Minutes', correct: false },
        { text: '30 Minutes', correct: false },
        { text: '15 Minutes', correct: false },
        { text: '60 Minutes', correct: false },
        { text: '20 Minutes', correct: true }
      ]
    },
    {
      //84
      question: 'In the comic book world, what does DC stand for?',
      answers: [
        { text: 'Dark Crimes', correct: false },
        { text: 'Dark Comics', correct: false },
        { text: 'Detective Comics', correct: true },
        { text: 'Daily Comics', correct: false },
        { text: 'Dubious Comics', correct: false },
        { text: 'Detective Crimes', correct: false }
      ]
    },
    {
      //85
      question: 'Which of these is NOT one of the 13 countries crossed by the Equator?',
      answers: [
        { text: 'Egypt', correct: true },
        { text: 'Kenya', correct: false },
        { text: 'Indonesia', correct: false },
        { text: 'Ecuador', correct: false },
        { text: 'Somalia', correct: false },
        { text: 'Maldives', correct: false }
      ]
    },
    {
      //86
      question: 'Who wrote the Lord of the Rings?',
      answers: [
        { text: 'George R. R. Martin', correct: false },
        { text: 'Stephen King', correct: false },
        { text: 'K. K. Rowling', correct: false },
        { text: 'J. R. R. Tolkien', correct: true },
        { text: 'Stephenie Meyer', correct: false },
        { text: 'Neil Gaiman', correct: false }
      ]
    },
    {
      //87
      question: 'An octothorpe is the official name for which famous symbol?',
      answers: [
        { text: 'A hyphen', correct: true },
        { text: 'A full stop', correct: false },
        { text: 'A question mark', correct: false },
        { text: 'An ampersand', correct: false },
        { text: 'A hashtag', correct: true },
        { text: 'An asterisk', correct: false }
      ]
    },
    {
      //88
      question: 'Which continent is the country "Lebanon" apart of?',
      answers: [
        { text: 'Africa', correct: false },
        { text: 'Asia', correct: true },
        { text: 'Europe', correct: false },
        { text: 'Australia', correct: false },
        { text: 'South America', correct: false },
        { text: 'Antarctica', correct: false }
      ]
    },
    {
      //89
      question: 'In the Mortal Kombat universe, Who is the leader of the Lin Kuei faction?',
      answers: [
        { text: 'Sub-Zero', correct: true },
        { text: 'Shang Tsung', correct: false },
        { text: 'Shao Kahn', correct: false },
        { text: 'Shinnok', correct: false },
        { text: 'Raiden', correct: false },
        { text: 'Scorpion', correct: false }
      ]
    },
    {
      //90
      question: 'In the cartoon series "Asterix and Obelix", What is the village druid\'s name?',
      answers: [
        { text: 'Sauron', correct: false },
        { text: 'Getafix', correct: true },
        { text: 'Jafar', correct: false },
        { text: 'Rahl', correct: false },
        { text: 'Agarwain', correct: false },
        { text: 'Jarrathix', correct: false }
      ]
    },
    {
      //91
      question: 'What was the original name of the now known jelly candy, "Gummy Bears"',
      answers: [
        { text: 'Jumping Bears', correct: false },
        { text: 'Candy Bears', correct: false },
        { text: 'Dancing Bears', correct: true },
        { text: 'Haribo Bears', correct: false },
        { text: 'Wobbly Bobblies', correct: false },
        { text: 'Wiggly Waggles', correct: false }
      ]
    },
    {
      //92
      question: 'In Minecraft, How many sets of wool must you have to make a bed?',
      answers: [
        { text: '3', correct: true },
        { text: '4', correct: false },
        { text: '1', correct: false },
        { text: '5', correct: false },
        { text: '2', correct: false },
        { text: '6', correct: false }
      ]
    },
    {
      //93
      question: 'Where in the world would you find the "Spanish Steps"?',
      answers: [
        { text: 'Rome, Italy', correct: true },
        { text: 'Cuenca, Ecuador', correct: false },
        { text: 'Brasilia, Brazil', correct: false },
        { text: 'Cambridge, England', correct: false },
        { text: 'Toulouse, France', correct: false },
        { text: 'Barcelona, Spain', correct: false }
      ]
    },
    {
      //94
      question: 'In the Disney Series "Adventures of the Gummi Bears", What below is not an ingredient of the famous Gummiberry juice?',
      answers: [
        { text: 'Red Berries', correct: false},
        { text: 'Orange Berries', correct: false },
        { text: 'Blue Berries', correct: false },
        { text: 'Green Berries', correct: false },
        { text: 'Purple Berries', correct: false },
        { text: 'Black Berries', correct: true }
      ]
    },
    {
      //95
      question: 'What does a "wether" describe when referencing a goat?',
      answers: [
        { text: 'A shaved goat', correct: false },
        { text: 'A goat that controls the weather', correct: false },
        { text: 'A baby goat', correct: false },
        { text: 'A castrated goat', correct: true },
        { text: 'A dehorned goat', correct: false },
        { text: 'A elderly goat', correct: false }
      ]
    },
    {
      //96
      question: 'Meaning "clever, original, and inventive", Choose the correctly spelt word?',
      answers: [
        { text: 'Ingenious', correct: true },
        { text: 'Ingeneous', correct: false },
        { text: 'Inginious', correct: false },
        { text: 'Ingenous', correct: false },
        { text: 'Ingenius', correct: false },
        { text: 'Ingineous', correct: false }
      ]
    },
    {
      //97
      question: 'In mathematic, What is the smallest perfect number?',
      answers: [
        { text: 'The number 10', correct: false },
        { text: 'The number 1', correct: false },
        { text: 'The number 6', correct: true },
        { text: 'The number 32', correct: false },
        { text: 'The number 2', correct: false },
        { text: 'The number 105', correct: false }
      ]
    },
    {
      //98
      question: 'What is the real name of Lana Rhoades?',
      answers: [
        { text: 'Amara Lynee Maple', correct: true },
        { text: 'Elizabeth Rose Watson', correct: false },
        { text: 'Grace Ann Cooper', correct: false },
        { text: 'Sarah Jean Davis', correct: false },
        { text: 'Abigail Louise Baker', correct: false },
        { text: 'Summer Jean Johnson', correct: false }
      ]
    },
    {
      //99
      question: 'What car was refered to as "General Lee" in the Dukes of Hazzard?',
      answers: [
        { text: '1970 Chevrolet Chevelle', correct: false},
        { text: '1969 Chevrolet Camaro', correct: false },
        { text: '1971 Plymouth Baracuda', correct: false },
        { text: '1968 Ford Mustang', correct: false },
        { text: '1974 Pontiac Firebird', correct: false },
        { text: '1969 Dodge Charger', correct: true }
      ]
    },
    {
      //100
      question: 'What was the first question of this quiz?',
      answers: [
        { text: 'What does the acronym "SMH" stand for?', correct: false },
        { text: 'Which continent is the country "Lebanon" apart of?', correct: false },
        { text: 'What year did the "Friends" TV sitcom premier on NBC?', correct: false },
        { text: 'When did world war II end?', correct: false },
        { text: 'What is Joe Exotic a.k.a the Tiger King\'s real name?', correct: true },
        { text: 'Who was the first president of Malawi?', correct: false }
      ]
    }
  ]