const sync = require('..')

const handler = (event, context, callback) => {
  const { queryStringParameters: { number } } = event
  sync(number)
    .then(msg => callback(null, {
      statusCode: 200,
      body: msg
    }))
    .catch(error => console.error(error) || callback(error))
}

module.exports = { handler }
