const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    maxConnections: 5, // Maximum number of simultaneous connections (default: 5)
    maxMessages: 100, // Messages per connection before reconnecting (default: 100)
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Send emails using the shared transporter.
  // Do NOT create a new transporter for each message - that defeats the purpose of pooling.
  const info = await transporter.sendMail({
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
    to: options.to,
    subject: options.subject,
    text: options.message,
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;
