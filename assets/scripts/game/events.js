'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const addHandlers = function () {
  $('#new-game').on('click', onCreateGame)
}

module.exports = {
  addHandlers
}
