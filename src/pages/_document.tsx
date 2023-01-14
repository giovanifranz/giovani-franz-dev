import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR" className="scroll-smooth antialiased" color="#202020">
        <Head>
          <link rel="canonical" href="https://www.giovanifranz.dev" />
          <meta
            name="description"
            content="Um desenvolvedor front-end com experiência em desenvolvimento de software especializado em React e NodeJS. Tenho experiência em front-end e back-end."
          />
        </Head>
        <body className="overflow-x-hidden bg-black text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
