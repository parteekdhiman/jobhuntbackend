import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  pool: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const sendEmail = async (to, subject, text) => {
  await transporter.sendMail({
    from: `"newus Dharamshala" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    text,
  });
};
