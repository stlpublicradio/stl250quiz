// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "STL 250 Quiz",
        "main":    "<p>If all you know about St. Louis is that we hosted the 1904 World's Fair, you <em>might</em> get <em>one</em> of these questions right. See how much else you know about St. Louis' past 250 years. And, you might even learn something.</p>",
        "results": "<h5>Thanks for taking our quiz; be on the lookout for more about St. Louis' past throughout the year.</h5>",
        "level1":  "You’re not just a native; you are super-native.  You liberally add an “R” to any vowel that remotely resembles an “ah” sound. You probably spent every other weekend of your youth in the archives of the Missouri History Museum. Or, you’ve learned that the more Budweiser and Ted Drewes you consume, the more you know about St. Louis.",
        "level2":  "Pretty darn good.  You’ve lived here at least 10 years and are perhaps are a bit of history buff. You could almost pass for native, but every now and then you slip up and add the “s” sound to Gravois or forget to call them the baseball Cardinals.",
        "level3":  "You’re a newbie to these parts or you’ve been too busy comparing toasted ravioli to learn about the city’s history. You haven’t lived here long enough to realize that I-64 is actually Highway 40, but you know the fastest way to your favorite micro-brewery from the Fox Theater." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "A traveling companion of my mother’s, William Clark, nicknamed me Pompy.  I attended high school at St. Louis Academy (SLUH). My likeness can be found on a piece of U.S. currency.  Who am I?",
            "a": [
                {"option": "Jacques Blaques Chiraque",      "correct": false},
                {"option": "Phillipe Kahn",     "correct": false},
                {"option": "Jean Baptiste Charbonneau",      "correct": true},
                {"option": "Auguste Chouteau",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p> <p>Charbonneau is the son of Sacagawea and Toussaint Charbonneau, who worked as a trapper and interpreter for the Lewis and Clark expedition.  Clark paid for Charbonneau (aka “Pompy”) to attend SLUH, and Pompy lived with Clark’s family in St. Louis for several years. In his life, Charbonneau was an explorer, fur trapper trader and a military scout doring the Mexican-American War. His image appears along with his mother on the Sacagewea dollar coin.</p>",
            "incorrect": "<p><span>Incorrect.</span></p> <p>Jean Baptiste Charbonneau is the son of Sacagawea and Toussaint Charbonneau, who worked as a trapper and interpreter for the Lewis and Clark expedition.  Clark paid for Charbonneau (aka “Pompy”) to attend SLUH, and Pompy lived with Clark’s family in St. Louis for several years. In his life, Charbonneau was an explorer, fur trapper trader and a military scout doring the Mexican-American War. His image appears along with his mother on the Sacagewea dollar coin.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What St. Louis cafeteria closed its doors on December 23, 2005 after 57 years in business and three different locations on Lindell Boulevard?",
            "a": [
                {"option": "Rigazzi’s",               "correct": false},
                {"option": "Salad Bowl",   "correct": true},
                {"option": "Al’s Restaurant",               "correct": false},
                {"option": "Stix, Baer & Fuller", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Correct!</span></p> <p>A St. Louis institution for so many years and no one knows for sure how many business deals went down there.  It was one of the few cafeterias leftover from the hey-day of cafeterias that featured comfort food like fried catfish, baked beans and macaroni and cheese.</p>",
            "incorrect": "<p><span>Incorrect.</span></p> <p>The Salad Bowl was a St. Louis institution for so many years and no one knows for sure how many business deals went down there.  It was one of the few cafeterias leftover from the hey-day of cafeterias that featured comfort food like fried catfish, baked beans and macaroni and cheese..</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " Who was the first African American to play for the St. Louis Cardinals?",
            "a": [
                {"option": "Tom Alston",           "correct": true},
                {"option": "Jackie Robinson",                  "correct": false},
                {"option": "Hank Thompson",  "correct": false},
                {"option": "Pumpsie Green",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p> <p>Alston was a first baseman who joined the Cards in 1954, when the team was playing at Sportsman’s Park.  He played 66 games during his first season, batting .426 with 4 home runs and 34 runs batted in.</p>",
            "incorrect": "<p><span>Incorrect.</span></p> <p>Tom Alston was a first baseman who joined the Cards in 1954, when the team was playing at Sportsman’s Park.  He played 66 games during his first season, batting .426 with 4 home runs and 34 runs batted in.</p>" // no comma here
        },
        { // Question 4
            "q": "Who, in 1873, opened the United States’ first public kindergarten in St. Louis at Des Peres School in Carondelet?",
            "a": [
                {"option": "Joseph Lancaster",    "correct": false},
                {"option": "Susan Elizabeth Blow",     "correct": true},
                {"option": "John Dewey",      "correct": false},
                {"option": "Edna Krabappel",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p> <p>One of the first advocates for university kindergarten. Her influence was wide-spread. Between opening the first kindergarten in 1873 and her death in 1916, more than 400 cities had kindergartens in their public schools.</p>",
            "incorrect": "<p><span>Incorrect.</span></p><p>Susan Elizabeth Blow was one of the first advocates for university kindergarten. Her influence was wide-spread. Between opening the first kindergarten in 1873 and her death in 1916, more than 400 cities had kindergartens in their public schools.</p>" // no comma here
        },
        { // Question 5
            "q": "What St. Louis area country club used to occupy the grounds of what is now the campus of the University of Missouri-St. Louis?",
            "a": [
                {"option": "Westwood C.C.",    "correct": false},
		{"option": "Sunset C.C.",    "correct": false},
		{"option": "Bellerive C.C.",    "correct": true},
                {"option": "Congressional C.C.",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p> <p>The club opened in 1897 as the Field Club. It moved to Normandy, and to what is now UMSL in 1910. The club opened at its current site in Town and Country in 1960. It’s golf course, known as the “Green Monster of Ladue” has hosted four men’s Major Championships in its history.</p>",
            "incorrect": "<p><span>Incorrect.</span> </p><p>Bellerive Country Club opened in 1897 as the Field Club. It moved to Normandy, and to what is now UMSL in 1910. The club opened at its current site in Town and Country in 1960. Its golf course, known as the “Green Monster of Ladue” has hosted four men’s Major Championships in its history.</p>" // no comma here
        },
        { // Question 6
            "q": "In what year was construction of the Gateway Arch completed?",
            "a": [
                {"option": "1965",    "correct": true},
		{"option": "1966",    "correct": false},
		{"option": "1967",    "correct": false},
		{"option": "1970",    "correct": false},              
		{"option": "1980",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p> <p>The monument to Thomas Jefferson and U.S. westward expansion was completed after two-and-a-half years of construction and cost $51,300,373 to build (including development of the area around the arch).</p>",
            "incorrect": "<p><span>Incorrect.</span> </p><p>The monument to Thomas Jefferson and U.S. westward expansion was completed in 1965 after two-and-a-half years of construction and cost $51,300,373 to build (including development of the area around the arch).</p>" // no comma here
        },
        { // Question 6
            "q": "What was the official name of the 1904 World’s Fair held in St. Louis?",
            "a": [
                {"option": "World’s Columbian Exposition",    "correct": false},
		{"option": "Louisiana Purchase Exposition",    "correct": true},
		{"option": "Flushing Meadow Exposition",    "correct": false},
		{"option": "The Great Exhibition of Works of Industry of All Nations",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p> <p>The Fair was a celebration of the Louisiana Purchase and of human ingenuity in the arts, sciences and industry.  In order to pull of the highly orchestrated event, more than 10,000 laborers cleared more than 1,200 acres of thickets and swamps in Forest Park and Clayton to create the grand landscape. Opening day of the Fair was April 30 and the event drew more than 200,000 people. The World’s Fair was also the host to the 1904 Olympic Games.</p>",
            "incorrect": "<p><span>Incorrect.</span> </p><p>The Fair was called the &quot;Louisiana Purchase Exposition&quot;, a celebration of the Louisiana Purchase and of human ingenuity in the arts, sciences and industry.  In order to pull of the highly orchestrated event, more than 10,000 laborers cleared more than 1,200 acres of thickets and swamps in Forest Park and Clayton to create the grand landscape. Opening day of the Fair was April 30 and the event drew more than 200,000 people. The World’s Fair was also the host to the 1904 Olympic Games.</p>   <p>The World's Columbian Exposition was Chicago, 1893; The Flushing Meadow Exposition was New York, 1939; and The Great Exhibition... was the World Expo for short and held in Hyde Park, London in 1851.</p>" // no comma here
        },
        { // Question 6
            "q": "Who served as the first Mayor of St. Louis?",
            "a": [
                {"option": "Henry Kiel",    "correct": false},
		{"option": "Pierre Laclede",    "correct": false},
		{"option": "Francis Slay",    "correct": false},
		{"option": "William Carr Lane",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p> <p>He was mayor from 1823-1829.</p>",
            "incorrect": "<p><span>Incorrect.</span> </p><p>William Carr Lane first held that office, from 1823-1829.</p> <p>Henry Kiel was mayor from 1913 to 1925, Fracis Slay is the current mayor, since 2001 and Pierre Laclede was never mayor at all." // no comma here
        },
        { // Question 6
            "q": "What was the name of the roller coaster at the Forest Park Highlands amusement park?",
            "a": [
                {"option": "Screamin' Eagle",    "correct": false},
		{"option": "Millenium Force",    "correct": false},
		{"option": "Comet",    "correct": true},
		{"option": "The Boss",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p> <p>Forest Park Highlands existed for 67 years and sat on 14 acres of land along Oakland Avenue that is now home to Forest Park Community College. The amusement park was destroyed by a massive fire in 1963.</p>",
            "incorrect": "<p><span>Incorrect.</span> </p><p>The coaster was the Comet. Forest Park Highlands existed for 67 years and sat on 14 acres of land along Oakland Avenue that is now home to Forest Park Community College. The amusement park was destroyed by a massive fire in 1963.</p>" // no comma here
        },
        { // Question 6
            "q": "What was the name of the Ulysses S. Grant’s farm--the farm that is now known Grant’s Farm?",
            "a": [
                {"option": "Hardscrabble",    "correct": true},
		{"option": "The Farmhouse",    "correct": false},
		{"option": "Terra",    "correct": false},
		{"option": "Monticello",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p> <p>Hardscrabble (House - White Haven) – the farm is the ancestral home of the Busch family and is home to more than 900 animals, representing 100 different species. It opened to the public in 1954. Grant founded the farm in the 1850s. Hardscrabble was just a small portion of the 281-acre site that exists today.</p>",
            "incorrect": "<p><span>Incorrect.</span> </p><p>Hardscrabble (House - White Haven) – the farm is the ancestral home of the Busch family and is home to more than 900 animals, representing 100 different species. It opened to the public in 1954. Grant founded the farm in the 1850s. Hardscrabble was just a small portion of the 281-acre site that exists today.</p>" // no comma here
        },
        { // Question 6
            "q": "What 1990 film, shot in St. Louis, starred Susan Sarandon as Nora Baker and James Spader as Max Baron?",
            "a": [
                {"option": "Planes, Trains and Automobiles",    "correct": false},
		{"option": "King Of The Hill",    "correct": false},
		{"option": "Meet Me In St. Louis",    "correct": false},
		{"option": "White Palace",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p> <p>It wasn’t exactly a smash hit, but it definitely put St. Louis on the silver screen – if only for a while.</p>",
            "incorrect": "<p><span>Incorrect.</span> </p><p>White Palace wasn’t exactly a smash hit, but it definitely put St. Louis on the silver screen – if only for a while.</p>" // no comma here
        },
        { // Question 6
            "q": " What was the name of the Saturday morning children’s quiz show that aired on KMOX-TV (now KMOV) from 1977 – 1988 and featured, among others, Young Bobby Day as its host along with a sidekick puppet co-host for which the show was named?",
            "a": [
                {"option": "D.B.’s Delight",    "correct": true},
		{"option": "Romper Room",    "correct": false},
		{"option": "Howdy Doody",    "correct": false},
		{"option": "Salvage City",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p> <p>Other local celebrities to who hosted the show were Julius Hunter and Guy Philips.  In addition to prize give-aways for the quizzes, the show featured comedy sketches and appearance by St. Louis child celebrities Mickey Dougherty and Ryan Bollman.  The show’s theme song: “Freeze Frame” by the J. Geils Band.</p>",
            "incorrect": "<p><span>Incorrect.</span> </p><p>It was D.B.'s Delight. Other local celebrities to who hosted the show were Julius Hunter and Guy Philips.  In addition to prize give-aways for the quizzes, the show featured comedy sketches and appearance by St. Louis child celebrities Mickey Dougherty and Ryan Bollman.  The show’s theme song: “Freeze Frame” by the J. Geils Band.</p>" // no comma here
        }
    ]
};
