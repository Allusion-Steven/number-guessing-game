import $ from 'jquery';
// Import stylesheets
import './style.css';

// Write Javascript code!

// //****************************************/
// //               SWITCH
// //****************************************/
// //appDiv.innerHTML = checkNum(1);
// //-----------------------------------------
// function checkNum(n){
//   switch(n){
//     case 0:
//       console.log('case 0')
//       return ('case 0')
//     case 1:
//       console.log('case 1')
//       return ('case 1')
//     case 2:
//       console.log('case 2')
//       return ('case 2')
//     default:
//       console.log('more than 2')
//       return ('case more than 2')
//   }
// }
// //-----------------------------------------
// //==========================================

// //****************************************/
// //             nested array
// //****************************************/
// var myList = [1, 2, 3, 'steven', [8, 9]];
// //-----------------------------------------
// // appDiv.innerHTML += myList[4][1];
// // appDiv.innerHTML += myList[4][0];
// // appDiv.innerHTML += myList[3];
// //-----------------------------------------
// //==========================================
// myList.forEach((item) => {
//   appDiv.innerHTML += myList[item];
// });

//****************************************/
//             game
//****************************************/
//-----------------------------------------
//    UI elements
//-----------------------------------------
const feedback = document.getElementById('feedback');
const guessCount = document.getElementById('guessCount');
const playBtn = $('#play-btn'); //play button
const quitBtn = $('#quit-btn'); //quit button
const playArea = $('#play-area'); //game container
const feedBack = $('#game-feedback');
let playerInput = $('player-guess-input');
let checkGuessBtn = $('#check-btn');
let highScore = 0;
//-----------------------------------------
//    state flags
//-----------------------------------------
let playFlag = 0;
//-----------------------------------------
//    listeners
//-----------------------------------------
/*
 * play btn
 */
playBtn.on('click', () => {
  if (playFlag == 0) {
    playFlag = 1; // toggle play flag on
    togglePlayUI();
    playGame();
  } else {
    console.log('game already playing');
  }
});
/*
 * quit btn
 */
quitBtn.on('click', () => {
  var quitPrompt = prompt('quit game? (y/n)').toLowerCase();
  if (playFlag == 1 && quitPrompt.charAt(0) == 'y') {
    playFlag = 0; // toggle play flag off
    toggleQuitUI();
  } else if (quitPrompt.charAt(0) == 'n') {
    console.log('not quitting');
  } else {
    console.log('game already stopped');
  }
});

//-----------------------------------------
function playGame() {
  console.log('game started');
  var guesses = 0;
  // get a random number 1-10
  var upperLimit = 10;
  var lowerLimit = 1;
  //todo: add random generated Num
  var targetNum = 5;

  $('#check-btn').on('click', () => {
    playerInput = $('#player-guess-input').val(); //get guess
    console.log(`playerInput = ${playerInput}`);
    if (playerInput == targetNum) {
      //check if correct guess
      feedback.innerHTML = `OH SHIT YOU GOT IT RIGHT`;
    } else if (playerInput > upperLimit || playerInput < lowerLimit) {
      //check if in limit
      feedback.innerHTML = `enter number from ${lowerLimit} to ${upperLimit}`;
    } else {
      feedback.innerHTML = `NOPE Guess A G a i  n`;
      guesses++;
      guessCount.innerHTML = guesses;
    }
  });

  //check if correct
  //if yes
  // win
  //else loop
}

//----------------------
//    helpers
//----------------------
function togglePlayUI() {
  playBtn.hide(); // hide play button
  playArea.show(); // show game area
}
function toggleQuitUI() {
  playBtn.show(); // show play button
  playArea.hide(); // hide game area
}
/*
 * Initalize Window
 */
function init() {
  guessCount.innerHTML = 0;
  playArea.hide();
}
init();
