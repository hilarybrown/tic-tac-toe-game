'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.createGame(data)
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

// this code is not working. need to take a look into why
const onUpdateGame = function (index, value, over) {
  console.log('onUpdateGame is ' + onUpdateGame)
  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': value
      },
      'over': over
    }
  }
  console.log(data)
  gameApi.updateGame(data)
    .then(gameUi.updateGameSuccess)
    .catch(gameUi.updateGameError)
}

// Begin Game Logic
// game board is made up of an empty array of 9
const gameBoard = ['', '', '', '', '', '', '', '', '']

const playerX = 'X'
const playerO = 'O'

// set first move on the board to be an X
let player = playerX

// switch players between X and O
const togglePlayer = function () {
  if (player === playerX) {
    player = playerO
  } else {
    player = playerX
  }
  onUpdateGame()
  // only display game message of next move if there is no current winner
  if (winner === false && moreMoves === true) {
    $('#game-message').text('Player ' + player + ' has the next move')
  }
  return store.player
}

// 'X' or 'O' shows in box when box is clicked
const setBoxSymbol = function (player, index) {
  const currentPlayer = player
  gameBoard[index] = currentPlayer
}

// when an empty box on the game board is clicked, set box value to "X" or "O"
const setClickValue = function () {
  $('#game-message').text('')
  const index = $(this).attr('id')
  console.log(index)
  if ($(this).text() === '') {
    $(this).text(player)
    // calls function to set player move in the box
    setBoxSymbol(player, index)
    // call function to look for a winning combo
    findWinner()
    // call toggle function to switch between 'X' and 'O'
    noWinner()
    togglePlayer()
  } else { // if box is not empty, display message
    $('#game-message').text('That box is taken. Choose another box.')
  }
  console.log('Player' + player)
}

let winner
// below code to find a winner and determine a draw not working
// if statements to find winning combinations for either player and display message
const findWinner = function () {
  // start with winner = false & when a winning combo is found, winner is then set to true
  winner = false
  if (((gameBoard[0] !== '') && (gameBoard[0] === gameBoard[3]) && (gameBoard[3] === gameBoard[6])) ||
     ((gameBoard[1] !== '') && (gameBoard[1] === gameBoard[4]) && (gameBoard[4] === gameBoard[7])) ||
     ((gameBoard[2] !== '') && (gameBoard[2] === gameBoard[5]) && (gameBoard[5] === gameBoard[8])) ||
     ((gameBoard[0] !== '') && (gameBoard[0] === gameBoard[1]) && (gameBoard[1] === gameBoard[2])) ||
     ((gameBoard[3] !== '') && (gameBoard[3] === gameBoard[4]) && (gameBoard[4] === gameBoard[5])) ||
     ((gameBoard[6] !== '') && (gameBoard[6] === gameBoard[7]) && (gameBoard[7] === gameBoard[8])) ||
     ((gameBoard[0] !== '') && (gameBoard[0] === gameBoard[4]) && (gameBoard[4] === gameBoard[8])) ||
     ((gameBoard[2] !== '') && (gameBoard[2] === gameBoard[4]) && (gameBoard[4] === gameBoard[6]))) {
    winner = true
    console.log('Player ' + player + ' won!')
    $('#winner-message').text('Player ' + player + ' won! Click New Game button to start a new game.')
    $('#game-message').text('')
    return winner
  }
}

let moreMoves
// determine if there's no winner in a game
const noWinner = function () {
  moreMoves = true
  if (winner === false && gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
    moreMoves = false
    console.log('Out of moves with no winner. Click New Game button to try again')
    $('#game-message').text('Out of moves with no winner. Click New Game button to try again')
    // can I make a function to make the board unclickable?
    // .off('click', '.box')
  }
  return moreMoves
}

const addHandlers = function () {
  $('#new-game').on('submit', onCreateGame)
  $('.box').on('click', setClickValue)
  // $('#game-board').on('click', onUpdateGame)
}

module.exports = {
  addHandlers
}
