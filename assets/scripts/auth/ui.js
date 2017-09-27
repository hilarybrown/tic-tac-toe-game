'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up successfully')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed in successfully')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  console.log('Changed password successfully')
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error on password change')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
