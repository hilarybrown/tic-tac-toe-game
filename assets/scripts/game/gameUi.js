'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  store.game = data.game
  console.log(store.game)
}

const createGameFailure = function (error) {
  console.log(error)
  $('#message').text('Error creating game')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
