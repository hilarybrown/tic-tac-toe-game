'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const gameApi = require('./api')
const gameUi = require('./ui')

const onCreateGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  gameApi.createGame(data)
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const addGameHandlers = function () {
  $('#new-game').on('click', onCreateGame)
}

module.exports = {
  addGameHandlers
}
