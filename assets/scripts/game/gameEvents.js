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

// switch players between X and O
let player
const firstMove = function () {
  player = 'X'
}

firstMove()

const togglePlayer = function () {
  if (player === 'X') {
    store.player = 'O'
  } else {
    store.player = 'X'
  }
  $('#game-message').text(store.currentPiece + ' has the next move')
  return store.currentPiece
}

// let rounds = 0 // how many rounds have been played
// let moveCount = 0 // start counter at 0 for moves in a game (0-8)

// when box clicked, push player value to the correct index in the array
const pushToGameArray = function (player, index) {
  const currentPlayer = player
  gameBoard[index] = currentPlayer
  console.log('boxes selected are ' + gameBoard)
}

// when a box on the game board is clicked, set value within box to "X" or "O"
const setClickValue = function () {
  // ... only if the box is empty.
  $('#game-message').text('')
  const index = $(this).attr('id')
  console.log(index)
  if ($(this).text() === '') {
    $(this).text(player)
    pushToGameArray(player, index)
    //  setEntriesToWinCoord()
    findWinner()
    togglePlayer()
  } else {
    $('#game-message').text('That box already has a value. Choose another box.')
  }
  console.log(player)
}

// if statements to find winning combinations for either player and display message
const findWinner = function () {
  // start with winner = false & when a winning combo is found, winner is then set to true
  let winner = false
  if ((gameBoard[0] === gameBoard[3] === gameBoard[6] === 'O') ||
     (gameBoard[1] === gameBoard[4] === gameBoard[7] === 'O') ||
     (gameBoard[2] === gameBoard[5] === gameBoard[8] === 'O') ||
     (gameBoard[0] === gameBoard[1] === gameBoard[2] === 'O') ||
     (gameBoard[3] === gameBoard[4] === gameBoard[5] === 'O') ||
     (gameBoard[6] === gameBoard[7] === gameBoard[8] === 'O') ||
     (gameBoard[0] === gameBoard[4] === gameBoard[8] === 'O') ||
     (gameBoard[2] === gameBoard[4] === gameBoard[6] === 'O')) {
    winner = true
    console.log('Player O won!')
    $('#game-message').text('Player O won!')
    return 'Player O won!'
  } else if ((gameBoard[0] === gameBoard[3] === gameBoard[6] === 'X') ||
             (gameBoard[1] === gameBoard[4] === gameBoard[7] === 'X') ||
             (gameBoard[2] === gameBoard[5] === gameBoard[8] === 'X') ||
             (gameBoard[0] === gameBoard[1] === gameBoard[2] === 'X') ||
             (gameBoard[3] === gameBoard[4] === gameBoard[5] === 'X') ||
             (gameBoard[6] === gameBoard[7] === gameBoard[8] === 'X') ||
             (gameBoard[0] === gameBoard[4] === gameBoard[8] === 'X') ||
             (gameBoard[2] === gameBoard[4] === gameBoard[6] === 'X')) {
    winner = true
    console.log('Player X won!')
    $('#game-message').text('Player X won!')
    return 'Player X won!'
  }
}

// determines if a game is a draw & displays message
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
