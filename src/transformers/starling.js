const { BANK_NOMINAL_CODE } = require('../secrets')

const convertTransactionsToQuickFile =
  transactions =>
    transactions
      .map(transaction => ({
        BankNominalCode: BANK_NOMINAL_CODE,
        Date: transaction.created.slice(0, 10),
        Reference: transaction.narrative,
        Amount: transaction.amount
      }))

module.exports = { convertTransactionsToQuickFile }
