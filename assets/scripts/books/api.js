'use strict'
const config = require('../config')

const allBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.exports = {
  allBooks
}
