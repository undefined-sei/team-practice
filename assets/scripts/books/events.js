'use strict'
const api = require('./api')
const ui = require('./ui')

const getBooks = function (event) {
  console.log('get books button')
  api.allBooks()

    .then(ui.getBooksSuccess)
    .catch(console.error)
}

module.exports = {
  getBooks
}
