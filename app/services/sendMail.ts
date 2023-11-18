import nodemailer from 'nodemailer'

const { GOOGLE_USER, GOOGLE_PASSWORD } = process.env

export interface MailData {
  [k: string]: FormDataEntryValue
}

export default async function sendMail({ name, email, message }: MailData) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GOOGLE_USER,
      pass: GOOGLE_PASSWORD,
    },
  })

  let mailOptions = {
    from: GOOGLE_USER,
    to: 'jeffwilliams.dev23@gmail.com',
    subject: '✨ New Message from Portfolio',
    html: `
      <h1>🤩 New Message from Portfolio</h1>
      <p><strong>Name: </strong> ${name}</p>
      <p><strong>Email: </strong> ${email}</p>
      <p><strong>Message: </strong> ${message}</p>
    `,
  }

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email: ', error)
          reject(error)
        } else {
          console.log('Email sent successfully')
          resolve(info.messageId)
        }
      })
    })
    return true
  } catch (error) {
    console.log('Uh oh, something went wrong: ', error)
    return false
  }
}
