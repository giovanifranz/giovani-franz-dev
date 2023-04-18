import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type Email = {
  name: string
  email: string
  message: string
}

export const config = {
  runtime: 'edge',
}

export default async function SendEmail(req: NextRequest) {
  if (req.method === 'POST') {
    const contentType = req.headers.get('content-type') || ''
    if (contentType.includes('application/json')) {
      const data: Email = await req.json()

      const { name, email, message } = data

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
      })

      const mailData = {
        to: 'contato@giovanifranz.dev',
        from: 'contato@giovanifranz.dev',
        cc: 'giovanifranz151@gmail.com',
        subject: `Nome: ${name}`,
        html: `E-mail: ${email} <br> Mensagem: ${message}`,
      }

      try {
        const result = await transporter.sendMail(mailData)
        return NextResponse.json(result, {
          status: 200,
          statusText: 'E-mail enviado com sucesso',
        })
      } catch (err) {
        console.error(err)
        return NextResponse.json(null, {
          status: 500,
          statusText: 'Ocorreu um erro ao enviar o e-mail',
        })
      }
    } else {
      return NextResponse.json(null, {
        status: 400,
        statusText: 'Método não permitido',
      })
    }
  }
}
