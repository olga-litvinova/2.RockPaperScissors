let playerScore=0;
let computerScore=0;
let round=0;
let result="";
let playerSelection = "";
let notificationContainer=document.getElementById("notification-container");
let closeBtn=document.getElementById("close-btn");

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
        if (playerScore>computerScore) {
            notificationContainer.style.display="block";
            document.querySelector('.result1').innerHTML = "You are a winner!<br>Your score: " + playerScore;		
        } else {
            notificationContainer.style.display="block";
            document.querySelector('.result1').innerHTML = "You are a looser!<br>Your score: "+playerScore;		
        }
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
    
// Person choice
    if (playerSelection==="rock" ) 
    {document.querySelector('#rockChoice').style.display="block";
    document.querySelector('#paperChoice').style.display="none";
    document.querySelector('#scissorsChoice').style.display="none";
    document.querySelector('#question').style.display="none";}
    else if ( playerSelection==="paper") 
    {document.querySelector('#paperChoice').style.display="block";
    document.querySelector('#scissorsChoice').style.display="none";
    document.querySelector('#rockChoice').style.display="none";
    document.querySelector('#question').style.display="none";
    }
    else if (playerSelection==="scissors" ) 
    {document.querySelector('#scissorsChoice').style.display="block";
    document.querySelector('#paperChoice').style.display="none";
    document.querySelector('#rockChoice').style.display="none";
    document.querySelector('#question').style.display="none";
    }
        
// Computer Choice
    if (computerSelection==="rock" ) 
    {document.querySelector('#rockChoicee').style.display="block";
    document.querySelector('#paperChoicee').style.display="none";
    document.querySelector('#scissorsChoicee').style.display="none";
    document.querySelector('#questionn').style.display="none";}
    else if ( computerSelection==="paper") 
    {document.querySelector('#paperChoicee').style.display="block";
    document.querySelector('#scissorsChoicee').style.display="none";
    document.querySelector('#rockChoicee').style.display="none";
    document.querySelector('#questionn').style.display="none";
}
    else if (computerSelection==="scissors" ) 
    {document.querySelector('#scissorsChoicee').style.display="block";
    document.querySelector('#paperChoicee').style.display="none";
    document.querySelector('#rockChoicee').style.display="none";
    document.querySelector('#questionn').style.display="none";
}
   
        if (playerSelection===computerSelection) {result= "It is a tie";round++;} 
        else if(playerSelection==="rock" && computerSelection==="scissors" ||
                playerSelection==="paper" && computerSelection==="rock" ||
                playerSelection==="scissors" && computerSelection==="paper"
        ) {result="You win! " + playerSelection + " beats "+ computerSelection; playerScore++;round++;}
        else {result= "You lost, " + computerSelection+ " beats "+ playerSelection; computerScore++;round++;};
    
        document.querySelector('.yourScore').textContent = "Score: "+playerScore;
        document.querySelector('.computerScore').textContent = "Score: "+computerScore;
        document.querySelector('.result').textContent = result;
        document.querySelector('.round').textContent = "Round " +round;
        }   
};
   



closeBtn.addEventListener('click',function(){
    notificationContainer.style.display="none";
});

window.addEventListener('click',function(e){
    if(e.target===notificationContainer) {notificationContainer.style.display="none";}
});