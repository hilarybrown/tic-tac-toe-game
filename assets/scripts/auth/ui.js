'use strict'

const store = require('../store')

// store user's data upon successful sign up
// hide sign-up fields after sucessful sign-up
const signUpSuccess = function (data) {
  store.user = data.user
  $('#sign-up').hide()
  $('#new-game').hide()
  $('#sign-in-message').hide()
  $('#user-action-message').text('Thank you for signing up! Please now sign in below with your email and password to play the game.')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#user-action-message').text('Error on sign up')
}

// hide sign-in fields after successful sign-in until player signs out
// hide 'sign in to play' message
// show success message
const signInSuccess = function (data) {
  // console.log(data)
  $('#sign-in-message').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#game-stats').show()
  $('#new-game').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#user-action-message').text('Signed in successfully. Click the New Game button to start playing!')
  store.user = data.user
}

const signInFailure = function (data) {
  // console.error(data)
  $('#user-action-message').text('Error on sign in')
}

// show success message and clear the input fields
const changePasswordSuccess = function (data) {
  $('#change-password')[0].reset()
  $('#user-action-message').show()
  $('#user-action-message').text('Password successfully changed')
  console.log(data)
}

const changePasswordFailure = function (data) {
  // console.error(data)
  $('#user-action-message').text('Error on password change')
}

// once signed out, sign up fields and sign in fields are accessible again
// sign in and sign up input fields are cleared
// board is hidden after sign out
const signOutSuccess = function (data) {
  $('#user-action-message').text('Come back again soon!')
  store.user = null
  $('#new-game').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#game-stats').hide()
  $('#stats-message').hide()
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  $('#sign-in-message').show()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#game-board').hide()
  $('#game-message').text('')
  $('#winner-message').text('')
}

const signOutFailure = function (data) {
  // console.log('Error on sign out')
  $('#user-action-message').text('Error on sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
