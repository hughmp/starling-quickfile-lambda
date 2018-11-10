const secrets = [
  'STARLING_ACCESS_TOKEN',
  'QUICKFILE_ACCOUNT_NUMBER',
  'QUICKFILE_APPLICATION_ID',
  'QUICKFILE_API_KEY',
  'BANK_NOMINAL_CODE'
]

const toEnvMap = (map, item) => {
  const nextItem = process.env[item]
  if (!nextItem) throw new Error(`${item} missing from environment variables.`)
  return { ...map, [item]: nextItem }
}

module.exports = secrets.reduce(toEnvMap, {})
