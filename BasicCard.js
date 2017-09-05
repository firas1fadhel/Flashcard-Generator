var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("Who was the first president of the United States", "george washington");
var card2 = new BasicCard("Who is the current president of the United States", "donald trump"); 

cards.push(card1);
cards.push(card2);


function studyCards() {

	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("correct");
						
						cardCount ++
						 
						studyCards();
					} 
					else {
						
						console.log("incorrect");
						console.log("BACK READS:  " + cards[cardCount].back);
						
						cardCount ++
					
						studyCards();
					}

				});

	}


}

studyCards();