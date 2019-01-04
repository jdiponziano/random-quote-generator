/******************************************
A Random Quote Generator
******************************************/

let quotes = [
  {
    quote: "Frankly, my dear, I don't give a damn.",
    source: "Rhett Butler",
    citation: "Gone With the Wind",
    year: 1939
  },
  {
    quote: "I'm going to make him an offer he can't refuse.",
    source: "Don Corleone",
    citation: "The Godfather",
    year: 1972
  },
  {
    quote:
      "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    source: "Terry Malloy",
    citation: "On the Waterfront",
    year: 1954
  },
  {
    quote: "They may take our lives, but they'll never take our freedom!",
    source: "William Wallace",
    citation: "Braveheart",
    year: 1995
  },
  {
    quote: "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
    source: 'Bandit Leader named "Gold Hat"',
    citation: "The Treasure of the Sierra Madre",
    year: 1948
  },
  {
    quote: "If my life wasn't funny it would just be true, and that is unacceptable.",
    source: "Carrie Fisher"
  },
  {
    quote: "Nothing is over until we decide it is! Was it over when the Germans bombed Pearl Harbor ? Hell, no!",
    source: "John Belushi"
  },
  {
    quote: "Cricket is basically baseball on valium.",
    source: "Robin Williams"
  }
];

function getRandomQuote(array) {
  return array[Math.floor(Math.random() * Math.floor(array.length))];
}

document.getElementById("loadQuote").addEventListener("click", printQuote, false);