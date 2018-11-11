const { starling, quickfile } = require('./clients')
const { starling: { convertTransactionsToQuickFile } } = require('./transformers')

module.exports = numberOfTransactions =>
  starling
    .getTransactions()
    .then(convertTransactionsToQuickFile(numberOfTransactions))
    .then(quickfile.createTransactions)
    .then(res => `Handled ${res.length} Starling transactions.`)
    .then(msg => console.log(msg) || msg)
