'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    // contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getStats = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getStats
}
