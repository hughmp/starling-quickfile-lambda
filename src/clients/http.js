const https = require('https')

const failure = (res, body) => ({
  statusCode: res.statusCode,
  statusMessage: res.statusMessage,
  body: JSON.parse(body)
})

const request = async (url, options) =>
  new Promise((resolve, reject) => {
    let data
    let payload
    const { body, ...opt } = options

    if (typeof body === 'object' && body !== null) {
      payload = JSON.stringify(body)
      opt.headers = {
        ...opt.headers,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }

    const req = https.request(url, opt, res => {
      res.on('data', (chunk) => {
        data === undefined
          ? data = chunk
          : data = data + chunk
      })

      res.on('end', () =>
        res.statusCode < 300
          ? resolve(JSON.parse(data))
          : reject(failure(res, data))
      )
    })

    if (payload) req.write(payload)
    req.on('error', reject)
    req.end()
  })

module.exports = request
