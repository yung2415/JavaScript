'use strict';

let currentScore = 20;
let generateNumber = '';
let message = '';
let highestScore = 0;
let guessNumber = '';
let messageEl = document.querySelector('.message');
let highestScoreEl = document.querySelector('.highscore');
let currentScoreEl = document.querySelector('.score');
let bodyEl = document.querySelector('body');
let endGame = false;

function generate() {
  generateNumber = Math.floor(Math.random() * 20) + 1;
}

function checkNumber() {
  if (currentScore === 20) {
    generate();
  }
  guessNumber = Number(document.querySelector('.guess').value);
  if (generateNumber > guessNumber) {
    message = 'Too low!';
    currentScore--;
  } else if (generateNumber < guessNumber) {
    message = 'Too high!';
    currentScore--;
  } else {
    message = 'Correct Number!😄';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = generateNumber;
    endGame = true;
  }
  messageEl.textContent = message;
  currentScoreEl.textContent = currentScore;
  if (currentScore === 0) {
    messageEl.textContent = 'You lose the game! Press again to replay!';
  }
  return currentScore;
}

function restart() {
  if (endGame === true && currentScore > highestScore) {
    highestScore = currentScore;
  }
  highestScoreEl.textContent = highestScore;
  currentScore = 20;
  currentScoreEl.textContent = currentScore;
  endGame = false;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}
