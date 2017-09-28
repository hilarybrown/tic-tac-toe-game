'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#user-action-message').text('You have successfully signed up')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#user-action-message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#user-action-message').text('Signed in successfully')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#user-action-message').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  console.log('Changed password successfully')
  $('#user-action-message').text('Changed password successfully')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#user-action-message').text('Error on password change')
}

const signOutSuccess = function (data) {
  console.log('Signed out successfully')
  $('#user-action-message').text('Come back again soon!')
  store.user = null
}

const signOutFailure = function (data) {
  console.log('Error on sign out')
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
