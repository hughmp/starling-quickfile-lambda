const { BANK_NOMINAL_CODE } = require('../secrets')

const convertTransactionsToQuickFile =
  (numberOfTransactions = 5) =>
    transactions =>
      transactions
        .slice(0, numberOfTransactions)
        .map(transaction => ({
          BankNominalCode: BANK_NOMINAL_CODE,
          Date: transaction.created.slice(0, 10),
          Reference: transaction.narrative,
          Amount: transaction.amount
        }))

module.exports = { convertTransactionsToQuickFile }
