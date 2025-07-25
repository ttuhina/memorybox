import schedule from 'node-schedule';
import nodemailer from 'nodemailer';
import fs from 'fs';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const scheduleEmail = ({ email, message, filePath, sendDate }) => {
  const date = new Date(sendDate);

  schedule.scheduleJob(date, () => {
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: '⏳ Your Time Capsule Has Arrived!',
      text: message,
      attachments: [{ path: filePath }]
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) return console.error('Email failed:', err);
      console.log('Email sent:', info.response);
      fs.unlink(filePath, () => {}); // Cleanup after sending
    });
  });
};

export default scheduleEmail;
