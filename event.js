let playerScore=0;
let computerScore=0;
let result="";
let playerSelection = "";

//Computer Choice
function getComputerChoice(){
    var Random=Math.floor(Math.random() * 3);
    if (Random===0) {return "rock";}
    else if (Random===1) {return "paper";}
    else {return "scissors";}
};
const rockBtn=document.getElementById('rockBtn');
const paperBtn=document.getElementById('paperBtn');
const scissorsBtn=document.getElementById('scissorsBtn');
rockBtn.addEventListener('click',playGame);
paperBtn.addEventListener('click',playGame);
scissorsBtn.addEventListener('click',playGame);




function playGame(playerSelection,computerSelection){
    let result="";
    computerSelection = getComputerChoice();
    if (rockBtn.contains(event.target)){
        playerSelection="rock"
    }
    else if (paperBtn.contains(event.target)){
        playerSelection="paper"
    }
    else{playerSelection="scissors"};

    if (playerSelection===computerSelection) {result= "It is a tie";} 
	else if(playerSelection==="rock" && computerSelection==="scissors" ||
			playerSelection==="paper" && computerSelection==="rock" ||
			playerSelection==="scissors" && computerSelection==="paper"
	) {result="You win! " + playerSelection + " beats "+ computerSelection; playerScore++;}
	else {result= "You lost, " + computerSelection+ " beats "+ playerSelection; computerScore++;};

    function yourScore(){
        document.getElementsByClassName("yourScore").innerHTML=playerScore;
    }

    function init() {
        document.getElementsByClassName("yourScore").addEventListener('click',changeHTMLContent);
      }
        
      function changeHTMLContent() {
        var neu = "neuer <b>fetter</b> Text";
         document.getElementById('absatz').innerHTML = neu;
      }
    yourScore();
	alert(playerSelection+computerSelection+result +  " Your Score: "+ playerScore);
   };
