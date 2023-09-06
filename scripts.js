
//Store each button into a variable
const rock_button = document.querySelector("#rock_button");
const paper_button = document.querySelector("#paper_button");
const scissors_button = document.querySelector("#scissors_button");

//Store all computer icons into one variable
let computer_icons = document.querySelectorAll(".computer_icons");

//Log player score
let player_score = 0;
let current_winner = "";

//Updates player information with each round
let updatePlayerInfo;

//Updates UI with computer choice
let displayComputerChoice;
let global_computer_choice = "";

//Code for one round of rock, paper, scissors
let oneRound = (passed_player_input) => {

//Computer makes a choice

let getComputerChoice = () => {
    //Generate random interger 0,1,2
    let rand012func = (max) => {
        return Math.floor(Math.random() * max);
    }

    let rand012int = rand012func(3);
    //console.log(rand012int)

    //Convert interger to rock, papers or scissors
    let computerOutcome = 0; //Default value is rock

    switch(rand012int) {
        case 0:
            computerOutcome = "rock";
            break;
        case 1:
            computerOutcome = "paper";
            break;
        case 2:
            computerOutcome = "scissors";
            break;
    }

    return computerOutcome;
}

let computerChoice = getComputerChoice();
global_computer_choice = computerChoice;
//Function that updates UI with computer choice (displays computer choice)
displayComputerChoice();
console.log("Computer: ", computerChoice);

//Player Input
//let playerInput = prompt("Please pick Rock, Paper, or Scissors: ").toLowerCase();
//console.log("Player: ", playerInput)
let playerInput = passed_player_input;
console.log(`Player: ${playerInput}`);

//battleFunction
let battleFunction = (playerchoice) => {

    let winner = "";

    if (playerchoice == computerChoice) {
        //Draw
        //console.log("Draw!")
        winner = "Draw"
    }

    //Player picked "rock"
    if (playerchoice == "rock") {
        if (computerChoice == "scissors") {
            //Player wins
            //console.log("Player wins")
            winner = "Player"
        }
        else if (computerChoice == "paper") {
            //Player loses
            //console.log("Computer wins")
            winner = "Computer"
        }
    }
    
    //Player picked "paper"
    if (playerchoice == "paper") {
        if (computerChoice == "rock") {
            //Player wins
            //console.log("Player wins")
            winner = "Player"
        }
        else if (computerChoice == "scissors") {
            //Player loses
            //console.log("Computer wins")
            winner = "Computer"
        }
    }

    //Player picked "scissors"
    if (playerchoice == "scissors") {
        if (computerChoice == "paper") {
            //Player wins
            //console.log("Player wins")
            winner = "Player"
        }
        else if (computerChoice == "rock") {
            //Player loses
            //console.log("Computer wins")
            winner = "Computer"
        }
    }

    return winner

}

let winnerStore = "";

//Send to respective function
switch(playerInput) {
    case "rock":
        winnerStore = battleFunction("rock");
        break;
    case "paper":
        winnerStore = battleFunction("paper");
        break;
    case "scissors":
        winnerStore = battleFunction("scissors");
        break;
    default:
        console.log("Your input was invalid.");
}

console.log("Winner is: ", winnerStore);

if (winnerStore == "Player") {
    player_score += 1;
}

current_winner = winnerStore;
return winnerStore


}

//For loop to loop number of rounds
// let runGame = (number_of_rounds) => {
//     for (let i = 0; i < number_of_rounds; i++) {
//         let result = oneRound().toLowerCase();
//         //Log score
//         if (result == "player") {
//             player_score += 1;
//         }
//         else if (result == "draw") {
//             player_score += 0.5;
//         }
//     }
// }

// runGame(3);
// console.log("Player score: ", player_score);
// let browserScore = document.querySelector("#score");
// browserScore.textContent = player_score;

//Function that updates player info
updatePlayerInfo = () => {
    document.querySelector(".winner_whois").textContent = `Winner: ${current_winner}`;
    document.querySelector(".scoreboard").textContent = `Your score: ${player_score}`;
}

//Function that updates UI with computer choice
displayComputerChoice = () => {

    //Remove .activated classes from all computer icons
    computer_icons.forEach((element) => {
        element.classList.remove("activated")
    })

    let computer_choice_class = "";

    //Find appropiate icon
    switch(global_computer_choice) {
        case("rock"):
            computer_choice_class = "computer_rock";
            break;
        case("paper"):
            computer_choice_class = "computer_paper";
            break;
        case("scissors"):
            computer_choice_class = "computer_scissors";
            break;
    }

    document.querySelector(`.${computer_choice_class}`).classList.add("activated");



} 

//Code for translating click into player choice
let buttonToPlayerChoice = () => {

    rock_button.addEventListener("click", () => {
        oneRound("rock");
        updatePlayerInfo();
        return 0;
    });

    paper_button.addEventListener("click", () => {
        oneRound("paper");
        updatePlayerInfo();
        return 0;
    });

    scissors_button.addEventListener("click", () => {
        oneRound("scissors");
        updatePlayerInfo();
        return 0;
    });
}

buttonToPlayerChoice();