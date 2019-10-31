'use strict'

const booksTemplate = require('../templates/book-fill.handlebars')

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = booksTemplate({ books: data.books })
  console.log(showBooksHtml)
  $('#handlebar-div').html('')
  $('#handlebar-div').append(showBooksHtml)
}

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

module.exports = {
  successMessage,
  failureMessage,
  getBooksSuccess
}
