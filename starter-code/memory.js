//******************************************************************
// Game Logic
var cards = [
  aquaman="img/aquaman.jpg",
  batman="img/batman.jpg",
  captain_america="img/captain-america.jpg",
  fantastic_four="img/fantastic-four.jpg",
  flash="img/flash.jpg",
  green_arrow="img/green_arrow.jpg",
  green_lantern="img/green_lantern.jpg",
  ironman="img/ironman.jpg",
  spiderman="img/spiderman.jpg",
  superman="img/superman.jpg",
  the_avengers="img/the-avengers.jpg",
  thor="img/thor.jpg"
];


function shuffle(cards) {
  var m = cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = cards[m];
    cards[m] = cards[i];
    cards[i] = t;
  }

  return array;
}

console.log(array);
//******************************************************************

//******************************************************************
// HTML/CSS Interactions
//******************************************************************


$(document).ready(function(){
});
