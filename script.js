function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        return "Rock";
    }
    else if(randomNumber == 2){
        return "Paper";
    }
    else if(randomNumber == 3){
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        t++;
        return "Tied! " + playerSelection + " ties with " + computerSelection + ".";
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        w++;
        return "You won! Rock beats Scissors.";
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper"){
        l++;
        return "You lost! Rock doesn't beat Paper.";
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        w++;
        return "You won! Paper beats Rock.";
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        l++;
        return "You lost! Paper doesn't beat Scissors.";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        w++;
        return "You won! Scissors beats Paper.";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        l++;
        return "You lost! Scissors doesn't beat Rock.";
    }
}

function game(){
    let playerSelection, computerPlay1, again="Yes";
    while(again=="Yes" || again=="yes"){
        for(let i=0;i<5;i++){
            if(i==0){
                playerSelection = prompt("Hello! Welcome to my Rock Paper Scissors game. What do you want to play?");
            }
            else if(i==1){
                playerSelection = prompt("Hello again! This is yours second try. What do you want to play?");
            }
            else if(i==2){
                playerSelection = prompt("Hello again! This is yours third try. What do you want to play?");
            }
            else if(i==3){
                playerSelection = prompt("Hello again! This is yours fourth try. What do you want to play?");
            }
            else if(i==4){
                playerSelection = prompt("Hello again! This is yours fifth and last try. What do you want to play?");
            }
            if(playerSelection == undefined || playerSelection == null || playerSelection == 0){
                console.log("Please choose Rock, Paper or Scissors!");
                break;
            }
            playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
            computerPlay1 = computerPlay();
            console.log(playerSelection + " vs " + computerPlay1);
            console.log(playRound(playerSelection, computerPlay1) + "\nYou: " + w + "\nComputer: " + l);
        }
        if(w>l){
            console.log("Congrats, you are the WINNER!\n\nYour score is:\n" + w + " wins\n" + l + " loses\n" + t + " tied");
        }
        else if(w==l){
            console.log("It is tied!\n\nYour score is:\n" + w + " wins\n" + l + " loses\n" + t + " tied");
        }
        else{
            console.log("Unlucky, you are the LOSER!\n\nYour score is:\n" + w + " wins\n" + l + " loses\n" + t + " tied");
        }
        again = prompt("Do you want to play again?");
        w=0;
        l=0;
        t=0;
    }
}

let w=0, l=0, t=0;

console.log(game());