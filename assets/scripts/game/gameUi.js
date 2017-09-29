'use strict'

const store = require('../store')
const gameEvents = require('./gameEvents')

const createGameSuccess = function (data) {
  store.game = data.game
  $('#game-board').show()
  $('#stats-message').hide()
  $('#user-action-message').hide()
  $('#winner-message').hide()
  $('.box').text('')
  console.log(store.game)
  $('#game-message').text('Here is your game. Play on!')
}

const createGameFailure = function (data) {
  console.log(data)
  $('#game-message').text('Error creating game. No game for you!')
}

const updateGameSuccess = function (data) {
  console.log('game has been updated successfully')
  store.game = data.game
}

const updateGameFailure = function (data) {
  console.log('error upating the game')
}

const getStatsSuccess = function (data) {
  const gamesWon = function (winner) {
    (gameEvents.findWinner.player = 'X')
  }
  // games won is not displaying amount of of games won. not yet at least.
  $('#stats-message').show()
  $('#stats-message').text('You have played ' + data.games.length + ' games under this account & have won ' + gamesWon.length + '. Nice work!')
}

const getStatsFailure = function (data) {
  $('#stats-message').text('Whoops! Something went wrong with retrieving your games. So sorry :(')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getStatsSuccess,
  getStatsFailure
}
