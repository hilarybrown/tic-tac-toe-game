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

// game board is made up of an empty array of 9
const gameBoard = ['', '', '', '', '', '', '', '', '']

const playerX = 'X'
const playerO = 'O'

// switch players between X and O
let player
const firstMove = function () {
  player = playerX
}

firstMove()

const togglePlayer = function () {
  if (player === playerX) {
    player = playerO
  } else {
    player = playerX
  }
  $('#game-message').text('Player ' + player + ' has the next move')
  return store.player
}

// let rounds = 0 // how many rounds have been played

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
    setBoxSymbol(player, index)
    //  setEntriesToWinCoord()
    findWinner()
    togglePlayer()
  } else {
    $('#game-message').text('That box already has a value. Choose another box.')
  }
  console.log(player)
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
    $('#winner-message').text('Player ' + player + ' won!')
    return winner
  }
}

let moveCount = 0 // start counter at 0 for moves in a game (0-8)
// determines if a game is a draw & displays message
// not working. because murphy's law.
const noWinner = function (moveCount, winner) {
  if (moveCount === 8 && winner === false) {
    console.log('Out of moves with no winner. Try again.')
    $('#winner-message').text('Out of moves with no winner. Try again.')
  }
  return noWinner
}

const addHandlers = function () {
  $('#new-game').on('click', onCreateGame)
  $('.box').on('click', setClickValue)
}

module.exports = {
  addHandlers
}
