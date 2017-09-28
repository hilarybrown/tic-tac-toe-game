'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  store.game = data.game
  $('#game-board').show()
  console.log(store.game)
  $('#game-message').text('Here is your game. Play on!')
}

const createGameFailure = function (error) {
  console.log(error)
  $('#game-message').text('Error creating game. No game for you!')
}

const updateGameSuccess = function (data) {
  console.log('game has been updated successfully')
  store.game = data.game
}

const updateGameError = function (data) {
  console.log('error upating the game')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameError
}
