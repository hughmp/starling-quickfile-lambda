const request = require('./http')
const { STARLING_ACCESS_TOKEN } = require('../secrets')
const { starling: { API, TRANSACTIONS } } = require('../constants')

const getTransactions = () =>
  request({
    hostname: API,
    port: 443,
    path: TRANSACTIONS,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${STARLING_ACCESS_TOKEN}`
    }
  })
    .then(({ _embedded: { transactions } }) => transactions)

module.exports = { getTransactions }
