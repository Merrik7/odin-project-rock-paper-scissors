'use strict';

const choices = ['rock', 'scissors', 'paper'];

const getComputerChoice = function () {
  return choices[Math.trunc(Math.random() * 3)];
};

const capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const logWinner = function (playerSelection, computerSelection, winOrLose) {
  return `You ${winOrLose}! (Your input: ${capitalizeFirstLetter(
    playerSelection
  )} vs Bot input: ${capitalizeFirstLetter(computerSelection)})`;
};

const whoWins = function (
  playerSelection,
  computerSelection = getComputerChoice()
) {
  playerSelection = playerSelection.toLowerCase();

  if (choices.indexOf(playerSelection) === -1) {
    console.log(choices.indexOf(playerSelection));
    return ['tie', `Not rock, paper or scissors!`];
  }

  if (playerSelection === computerSelection) {
    return ['tie', logWinner(playerSelection, computerSelection, 'tie')];
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return ['loss', logWinner(playerSelection, computerSelection, 'lose')];
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return ['win', logWinner(playerSelection, computerSelection, 'win')];
  }
};

const playGame = function () {
  const scores = [0, 0];
  for (let i = 0; i < 5; i++) {
    let winner = whoWins(prompt('Enter rock, paper or scissors: '));
    let [winOrLoss, stringToLog] = [winner[0], winner[1]];
    if (winOrLoss === 'win') {
      scores[0]++;
      console.log(stringToLog);
    } else if (winOrLoss === 'loss') {
      scores[1]++;
      console.log(stringToLog);
    } else {
      console.log(stringToLog);
    }
  }
  if (scores[0] > scores[1]) {
    console.log(`Player wins!`);
  } else if (scores[0] < scores[1]) {
    console.log(`Computer wins!`);
  } else {
    console.log(`Tie`);
  }
};
