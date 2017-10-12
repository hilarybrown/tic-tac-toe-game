'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  store.game = data.game
  $('#game-board').show()
  $('#stats-message').hide()
  $('#user-action-message').hide()
  $('#winner-message').hide()
  $('.box').text('')
  // console.log(store.game)
  $('#game-message').text('Here is your game. Play on!')
}

const createGameFailure = function (data) {
  // console.log(data)
  $('#game-message').text('Error creating game. No game for you!')
}

const updateGameSuccess = function (data) {
  // console.log('game has been updated successfully')
  store.game = data.game
}

const updateGameFailure = function (data) {
  // console.log('error upating the game')
  $('#game-message').text('Error updating the game. Your move was not saved. Womp womp.')
}

const getStatsSuccess = function (data) {
  $('#stats-message').show()
  $('#stats-message').text('You have played ' + data.games.length + ' games under this account. Nice work!')
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
