let playerScore=0;
let computerScore=0;
let round=0;
let result="";
let playerSelection = "";

//Computer Choice
function getComputerChoice(){
    var Random=Math.floor(Math.random() * 3);
    if (Random===0) {return "rock";}
    else if (Random===1) {return "paper";}
    else {return "scissors";}
};

//Buttons
const rockBtn=document.getElementById('rockBtn');
const paperBtn=document.getElementById('paperBtn');
const scissorsBtn=document.getElementById('scissorsBtn');
rockBtn.addEventListener('click',playGame);
paperBtn.addEventListener('click',playGame);
scissorsBtn.addEventListener('click',playGame);

function playGame(playerSelection,computerSelection){
    if (round==5){
        alert("Game is finished")
    }
    else{   
        computerSelection = getComputerChoice();
        if (rockBtn.contains(event.target)){
            playerSelection="rock"
        }
        else if (paperBtn.contains(event.target)){
            playerSelection="paper"
        }
        else{playerSelection="scissors"};
    
        if (playerSelection===computerSelection) {result= "It is a tie";round++;} 
        else if(playerSelection==="rock" && computerSelection==="scissors" ||
                playerSelection==="paper" && computerSelection==="rock" ||
                playerSelection==="scissors" && computerSelection==="paper"
        ) {result="You win! " + playerSelection + " beats "+ computerSelection; playerScore++;round++;}
        else {result= "You lost, " + computerSelection+ " beats "+ playerSelection; computerScore++;round++;};
    
        document.querySelector('.yourScore').textContent = "You: "+playerScore;
        document.querySelector('.computerScore').textContent = "Computer : "+computerScore;
        document.querySelector('.yourChoice').textContent = "You picked: "+playerSelection;
        document.querySelector('.computerChoice').textContent = "Computer picked: "+computerSelection;
        document.querySelector('.result').textContent = result;
        document.querySelector('.round').textContent = "Round " +round;
        }   
};
   