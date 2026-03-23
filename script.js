let quotes = [
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The best and most beautiful things in the world cannot be seen or even heard, but must be felt with the heart.",
  "It’s not the years in your life that count. It’s the life in your years.",
  "Be yourself; everyone else is already taken.",
  "Injustice anywhere is a threat to justice everywhere.",
  "The unexamined life is not worth living.",
  "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
  "Life is what happens when you're busy making other plans."
]

let button = document.getElementById("button");
let paragraph = document.getElementById("paragraph");

// Generate the initial quote, just because I feel like the page should open with one.
paragraph.textContent = quotes[Math.floor(Math.random()*quotes.length)];

button.addEventListener("click", function() {
  paragraph.textContent = quotes[Math.floor(Math.random()*quotes.length)];
});
