console.log("JS file is connected to HTML! Woo!")
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if(cardTwo === cardFour) {
// 	alert("You found a match!");
// } else {
// 	alert("Sorry, try again.");
// }

var cards = ['queen', 'queen', 'king', 'king']

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function () {
	for (var i = 0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className='card';
		cardElement.setAttribute('data-card',cards[i]);
		cardElement.addEventListener('click',isTwoCards);
		gameBoard.appendChild(cardElement);
	}
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="king.png" alt="King of Spades"/>';
	}
	else {
		this.innerHTML = '<img src="queen.png" alt="Queen of Diamonds"/>';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
	}

var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	// cardsInPlay.innerHTML = " ";
}

createBoard();



// var createCards = function() {
// 	for (var i = 0; i<4; i++) {
// 	var newCard = document.createElement('div');
// 	newCard.className = 'card';
// 	gameBoard.appendChild(newCard);
// };
// };

// createCards();
