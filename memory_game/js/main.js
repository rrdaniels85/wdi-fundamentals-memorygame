var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function (){
  if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};

var flipCard = function (cardId1, cardId2) {
	console.log("User flipped " + cards[cardId1]);
	cardsInPlay.push(cards[cardId1]);
	console.log("User flipped " + cards[cardId2]);
	cardsInPlay.push(cards[cardId2]);
	checkForMatch();
};

flipCard(0, 2);





