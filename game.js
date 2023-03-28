function getComputerChoice(){
	var Random=Math.floor(Math.random() * 3);
	if (Random===0) {return "Rock";}
	else if (Random===1) {return "Paper";}
	else {return "Scissors";}
};

let playerScore=0;
let computerScore=0;
function getMyChoice(){
	for (let index = 0; index < 5; index++) {
	let playerSelection = prompt("Please enter your choice: Rock, Paper or Scissors");
	let computerSelection = getComputerChoice();
	let result="";
	if (playerSelection.toLowerCase()===computerSelection.toLowerCase()) {result= "It is a tie";} 
	else if(playerSelection.toLowerCase()==="rock" && computerSelection.toLowerCase()==="scissors" ||
			playerSelection.toLowerCase()==="paper" && computerSelection.toLowerCase()==="rock" ||
			playerSelection.toLowerCase()==="scissors" && computerSelection.toLowerCase()==="paper"
	) {result="You win! " + playerSelection + " beats "+ computerSelection; playerScore++;}
	else {result= "You lost, " + computerSelection+ " beats "+ playerSelection; computerScore++;}
	alert(result +  " Your Score: "+ playerScore);
	};
};
getMyChoice();

function final() {
	if (playerScore>computerScore) {
		alert("You are a winner!")		
	} else {
		alert("You are a looser")		
	}
};
final()
