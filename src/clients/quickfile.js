const request = require('./http')
const { quickfile } = require('../transformers')
const { quickfile: { API, CREATE_TRANSACTION } } = require('../constants')

const createTransaction = (transaction) =>
  request(
    API + CREATE_TRANSACTION,
    {
      method: 'POST',
      body: quickfile.createTransaction(transaction)
    }
  )
    .catch(console.error)

const createTransactions = transactions =>
  Promise.all(
    transactions.map(createTransaction)
  )

module.exports = { createTransactions }
