const crypto = require('crypto')
const {
  QUICKFILE_APPLICATION_ID,
  QUICKFILE_ACCOUNT_NUMBER,
  QUICKFILE_API_KEY
} = require('../secrets')
const generateMd5 = submissionNumber =>
  crypto
    .createHash('md5')
    .update(
      QUICKFILE_ACCOUNT_NUMBER +
      QUICKFILE_API_KEY +
      submissionNumber
    )
    .digest('hex')
let sequence = 1
const generateSubmissionNumber = () =>
  `${new Date().getTime().toString()}:${sequence++}`

const createTransaction = ({
  BankNominalCode,
  Date,
  Reference,
  Notes,
  Amount
}) => {
  const SubmissionNumber = generateSubmissionNumber()
  const MD5Value = generateMd5(SubmissionNumber)

  return {
    payload: {
      Header: {
        MessageType: 'Request',
        SubmissionNumber,
        Authentication: {
          AccNumber: QUICKFILE_ACCOUNT_NUMBER,
          MD5Value,
          ApplicationID: QUICKFILE_APPLICATION_ID
        }
      },
      Body: {
        Transaction: {
          BankNominalCode, // : '1200',
          Date, // : '2017-03-13',
          Reference, // : 'My test bank entry',
          Notes, // : 'transaction notes..',
          Amount // : '35.65'
        },
        DuplicateFilterOn: 'true'
      }
    }
  }
}

module.exports = { createTransaction }
