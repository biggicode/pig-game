'use strict';

//Selecting elements
const firstPlayer = document.querySelector('.player--0');
const secondPlayer = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');
const firstScoreEl = document.querySelector('#score--0');
const secondScoreEl = document.getElementById('score--1');
const firstCurrentEl = document.getElementById('current--0');
const secondCurrentEl = document.getElementById('current--1');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

//Start reset

let playersScores, currentScore, currentPlayer, working;

const resetFunction = function () {
  firstPlayer.classList.remove('player--winner');
  secondPlayer.classList.remove('player--winner');
  firstPlayer.classList.add('player--active');
  secondPlayer.classList.remove('player--active');
  diceImg.classList.add('hide');

  firstScoreEl.textContent = 0;
  secondScoreEl.textContent = 0;
  firstCurrentEl.textContent = 0;
  secondCurrentEl.textContent = 0;

  playersScores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  working = true;
};

resetFunction();

const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
  firstPlayer.classList.toggle('player--active');
  secondPlayer.classList.toggle('player--active');
};

//Rolling the dice function
buttonRoll.addEventListener('click', function () {
  if (working) {
    //Generating random dice number
    const dice = Math.trunc(Math.random() * 6 + 1);

    //Display the dice number
    diceImg.classList.remove('hide');
    diceImg.src = `dice-${dice}.png`;

    //If dice number is one switch to the next player
    if (dice !== 1) {
      // Add dice number to the current score
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (working) {
    //Add current score to active player's score and display it
    playersScores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      playersScores[currentPlayer];

    //Check if player won
    if (playersScores[currentPlayer] >= 50) {
      working = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      diceImg.classList.add('hide');
    } else {
      switchPlayer();
    }
  }
});

buttonNew.addEventListener('click', resetFunction);
