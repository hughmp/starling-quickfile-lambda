const sync = require('..')

const handler = (event, context, callback) => {
  sync()
    .then(msg => callback(null, {
      statusCode: 200,
      body: msg
    }))
    .catch(error => console.error(error) || callback(error))
}

module.exports = { handler }
