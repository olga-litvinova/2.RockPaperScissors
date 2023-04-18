
function game(playerSelection, computerSelection){
  if (playerSelection===computerSelection) {
      result= "It is a tie";
      } 
  else if(
      playerSelection==="rock" && computerSelection==="scissors" ||
      playerSelection==="paper" && computerSelection==="rock" ||
      playerSelection==="scissors" && computerSelection==="paper"
  ) {
      result="You win! " + playerSelection + " beats "+ computerSelection; 
      playerScore++;
  }
  else {
      result= "You lost, " + computerSelection+ " beats "+ playerSelection; 
      computerScore++;}
  updateScoreMessage(result, playerSelection, computerSelection);
};

//Computer Choice
function getComputerChoice(){
var Random=Math.floor(Math.random() * 3);
if (Random===0) {return "rock";}
else if (Random===1) {return "paper";}
else {return "scissors";}
};

function isGameOver() {
  return playerScore === 5 || computerScore === 5
};

  game();
  
  function final() {
      if (playerScore>computerScore) {
          alert("You are a winner!")		
      } else {
          alert("You are a looser")		
      }
  };
  final()









function getPlayerChoice(){
 
  //click Rock
  const rock= document.getElementById("rock");
  function clickRock(e){
      playerSelection = "rock";
  }
  rock.addEventListener("click", clickRock);
  //click Paper
  const paper= document.getElementById("paper");
  function clickPaper(e){
      playerSelection = "paper";
  }
  paper.addEventListener("click", clickPaper);
  //click Scissors
  const scissors= document.getElementById("scissors");
  function clickScissors(e){
      playerSelection = "scissors";
  }
  scissors.addEventListener("click", clickScissors);
}

getPlayerChoice();
  
