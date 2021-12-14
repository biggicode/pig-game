'use strict';

//Selecting elements
const diceImg = document.querySelector('.dice');
const firstScoreEl = document.querySelector('#score--0');
const secondScoreEl = document.getElementById('score--1');
const firstCurrentEl = document.getElementById('current--0');
const secondCurrentEl = document.getElementById('current--1');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

//Start reset
firstScoreEl.textContent = 0;
secondScoreEl.textContent = 0;
diceImg.classList.add('hide');

const playersScores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;

//Rolling the dice function
buttonRoll.addEventListener('click', function () {
  //Generating random dice number
  const dice = Math.trunc(Math.random() * 6 + 1);

  //Display the dice number
  diceImg.classList.remove('hide');
  diceImg.src = `dice-${dice}.png`;

  //If dice number is one switch to the next player
  if (dice !== 1) {
    // Add dice number to the current score
    currentScore += dice;
    firstCurrentEl.textContent = currentScore; //Change it later
  } else {
  }
});
