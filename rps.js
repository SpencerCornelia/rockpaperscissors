# rockpaperscissors
'use strict';

var userChoice = prompt("Please choose either 'rock', 'paper', or 'scissors'.");

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
var playerWins = 0;
var computerWins = 0;


function getPlayerMove(userChoice) {
    var playerMove;
    if (userChoice === 'rock') {
        playerMove = 'rock';
    }
    if (userChoice === 'paper') {
        playerMove = 'paper';
    }
    if (userChoice === 'scissors') {
        playerMove = 'scissors';
    }
    else {
        prompt("Please enter either 'rock', 'paper', or 'scissors'.");
    }
}

function getComputerMove(move) {
    var computerMove = randomPlay();
}



function getWinner(playerMove,computerMove) {
    var winner;
    if (getWinner("rock","paper")) {
        winner = "computer";
        computerWins++;
    }
    if (getWinner("rock","scissors")) {
        winner = "player";
        playerWins++;
    }
    if (getWinner("paper","rock")) {
        winner = "player";
        playerWins++;
    }
    if (getWinner("paper","scissors")) {
        winner = "computer";
        computerWins++;
    }
    if (getWinner("scissors","rock")) {
        winner = "computer";
        computerWins++;
    }
    if (getWinner("scissors","paper")) {
        winner = "player";
        playerWins++;
    }
}
    
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    if (computerWins === 5) {
        console.log("Congrats to the Computer");
    }
    if (playerWins === 5) {
        console.log("Congrats to you!");
    }
    return [playerWins, computerWins];
}
