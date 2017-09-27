'use strict'

// the output of these functions is important for displaying win/loss message in tic-tac-toe

// const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up successfully')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}
module.exports = {
  signUpSuccess,
  signUpFailure
}
