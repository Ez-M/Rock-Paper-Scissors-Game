var score = {
    wins: 0,
    losses: 0,
    ties: 0
}
var options = ["p", "s", "r"]
var playerChoice = prompt("rock, paper, scissors, please input R, P, or S")
var index = Math.floor(Math.random() * options.length)
var compChoice = options[index]



function startGame() {
if (playerChoice == compChoice) {
    score.ties++
    alert("Tie!")
}
    else if ((playerChoice == "p" && compChoice == "r") || (playerChoice == "s" && compChoice == "p") || (playerChoice == "r" && compChoice == "s")) {
        score.wins++;
        alert("Win!")
    } else { score.losses++ 
        alert("You Lose!")
    }
}


startGame()