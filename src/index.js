const { starling, quickfile } = require('./clients')
const { starling: { convertTransactionsToQuickFile } } = require('./transformers')

module.exports = () =>
  starling
    .getTransactions()
    .then(convertTransactionsToQuickFile)
    .then(quickfile.createTransactions)
    .then((res) => `Handled ${res.length} Starling transactions.`)
    .then((msg) => console.log(msg) || msg)
