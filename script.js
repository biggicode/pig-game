'use strict';

//Selecting elements
const diceImg = document.querySelector('.dice');
const firstScoreEl = document.querySelector('#score--0');
const secondScoreEl = document.getElementById('score--1');

//Start reset
firstScoreEl.textContent = 0;
secondScoreEl.textContent = 0;
diceImg.classList.add('hide');
