const { STARLING_ACCESS_TOKEN } = require('../secrets')
const request = require('./http')

const { starling: { API, TRANSACTIONS } } = require('../constants')

const getTransactions = () =>
  request(
    API + TRANSACTIONS,
    {
      headers: {
        'Authorization': `Bearer ${STARLING_ACCESS_TOKEN}`
      }
    }
  )
    .then(({ _embedded: { transactions } }) => transactions)

module.exports = { getTransactions }
