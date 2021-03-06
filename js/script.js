/******************************************
A Random Quote Generator
******************************************/

// Declaring the variables
const quoteBox = document.getElementById('quote-box');
const body = document.getElementsByTagName('body')[0];
const quoteBtn = document.getElementById('loadQuote');
let timer = window.setInterval(printQuote, 5000);

// Array of quote objects
let quotes = [
  {
    quote: "Frankly, my dear, I don't give a damn.",
    source: 'Rhett Butler',
    citation: 'Gone With the Wind',
    year: 1939,
    tags: ['Movie', 'Romance', 'Classic']
  },
  {
    quote: "I'm going to make him an offer he can't refuse.",
    source: 'Don Corleone',
    citation: 'The Godfather',
    year: 1972,
    tags: ['Family Drama', 'Gangster Film']
  },
  {
    quote:
      "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    source: 'Terry Malloy',
    citation: 'On the Waterfront',
    year: 1954,
    tags: ['Crime', 'Drama']
  },
  {
    quote: "They may take our lives, but they'll never take our freedom!",
    source: 'William Wallace',
    citation: 'Braveheart',
    year: 1995,
    tags: ['Action', 'Drama']
  },
  {
    quote: "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
    source: 'Bandit Leader named "Gold Hat"',
    citation: 'The Treasure of the Sierra Madre',
    year: 1948,
    tags: ['Action', 'Drama']
  },
  {
    quote: "If my life wasn't funny it would just be true, and that is unacceptable.",
    source: 'Carrie Fisher'
  },
  {
    quote: 'Nothing is over until we decide it is! Was it over when the Germans bombed Pearl Harbor ? Hell, no!',
    source: 'John Belushi'
  },
  {
    quote: 'Cricket is basically baseball on valium.',
    source: 'Robin Williams',
    tags: ['Humor']
  }
];

// Select random quote from the quotes array
function getRandomQuote(array) {
  return array[Math.floor(Math.random() * Math.floor(array.length))];
}

// Generate random hex color: code from https://css-tricks.com/examples/RandomHexColor/
function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Print quote to the document
function printQuote() {
  let selectedQuote = getRandomQuote(quotes);
  let randomColor = getRandomHexColor();
  let message = '';

  message += '<p class="quote">' + selectedQuote.quote + '</p>';
  message += '<p class="source">' + selectedQuote.source;

  if (selectedQuote.citation) {
    message += '<span class="citation">' + selectedQuote.citation + '</span>';
  }

  if (selectedQuote.year) {
    message += '<span class="year">' + selectedQuote.year + '</span>';
  }

  if (selectedQuote.tags) {
    message += '<br /><span class="tags">' + selectedQuote.tags.join(', ') + '</span>';
  }

  message += '</p>';
  quoteBox.innerHTML = message;
  body.style.backgroundColor = randomColor;
  quoteBtn.style.backgroundColor = randomColor;
}

// Reset timer that auto-changes the background color
function resetTimer() {
  clearInterval(timer);
  timer = window.setInterval(printQuote, 5000);
}

// Change quote event for new quote button
quoteBtn.addEventListener('click', function() {
  printQuote();
  resetTimer();
});
