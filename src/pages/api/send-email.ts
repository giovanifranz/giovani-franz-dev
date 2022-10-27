import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Email = {
  name: string;
  email: string;
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data: Email = req.body;
    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
      port: 587,
      host: 'smtp.umbler.com',
      auth: {
        user: 'contato@giovanifranz.dev',
        pass: process.env.UMBLER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true,
        minVersion: 'TLSv1.2',
      },
    });

    const mailData = {
      to: 'contato@giovanifranz.dev',
      from: 'contato@giovanifranz.dev',
      cc: 'giovanifranz151@gmail.com',
      subject: `Nome: ${name}`,
      html: `E-mail: ${email} <br> Mensagem: ${message}`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          res.status(200).end();
          resolve(info);
        }
      });
    });
  }
};
