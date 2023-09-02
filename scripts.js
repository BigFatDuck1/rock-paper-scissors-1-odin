

//Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

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
console.log("Computer: ", computerChoice);

//Player Input
let playerInput = prompt("Please pick Rock, Paper, or Scissors: ").toLowerCase();
console.log("Player: ", playerInput)

//battleFunction
let battleFunction = (playerchoice) => {

    let winner = "";

    if (playerchoice == computerChoice) {
        //Draw
        console.log("Draw!")
        winner = "Draw!"
    }

    //Player picked "rock"
    if (playerchoice == "rock") {
        if (computerChoice == "scissors") {
            //Player wins
            console.log("Player wins")
            winner = "Player"
        }
        else if (computerChoice == "paper") {
            //Player loses
            console.log("Computer wins")
            winner = "Computer"
        }
    }
    
    //Player picked "paper"
    if (playerchoice == "paper") {
        if (computerChoice == "rock") {
            //Player wins
            console.log("Player wins")
            winner = "Player"
        }
        else if (computerChoice == "scissors") {
            //Player loses
            console.log("Computer wins")
            winner = "Computer"
        }
    }

    //Player picked "scissors"
    if (playerchoice == "scissors") {
        if (computerChoice == "paper") {
            //Player wins
            console.log("Player wins")
            winner = "Player"
        }
        else if (computerChoice == "rock") {
            //Player loses
            console.log("Computer wins")
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


