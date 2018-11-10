const { starling, quickfile } = require('./clients')
const { starling: { convertTransactionsToQuickFile } } = require('./transformers')

starling
  .getTransactions()
  .then(convertTransactionsToQuickFile)
  .then(quickfile.createTransactions)
  .then((res) => console.log(`Handled ${res.length} Starling transactions.`))
  .catch(err => console.error(JSON.stringify(err, null, 2)))
