import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import {
  Poppins,
  Montserrat_Alternates as MontserratAlternates,
} from '@next/font/google'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { axeAccessibilityReporter } from '../utils/axeAccessibilityReporter'
import Head from 'next/head'

const montserratAlternates = MontserratAlternates({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return (
    <>
      <Head>
        <title>Giovani Franz</title>
        <style jsx global>
          {`
            :root {
              --poppins-font: ${poppins.style.fontFamily};
              --montserrat-alternates-font: ${montserratAlternates.style
                .fontFamily};
            }
          `}
        </style>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
