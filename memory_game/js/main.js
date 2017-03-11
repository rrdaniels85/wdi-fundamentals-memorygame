var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function (){
  if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};

var flipCard = function (cardId1, cardId2) {
	console.log("User flipped " + cards[cardId1].rank);
	console.log(cards[cardId1].cardImage);
	console.log(cards[cardId1].suit);
	cardsInPlay.push(cards[cardId1].rank);
	console.log("User flipped " + cards[cardId2].rank);
	console.log(cards[cardId2].cardImage);
	console.log(cards[cardId2].suit);
	cardsInPlay.push(cards[cardId2].rank);
	checkForMatch();
};

flipCard (0, 2);





