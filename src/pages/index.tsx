import Head from 'next/head';

import { About, Heading, Tools, Form, Header } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Giovani Franz </title>
      </Head>
      <>
        <Header />
        <Heading />
        <section id="sobre" className="px-10 py-16 w-screen">
          <article className="flex flex-col md:flex-row gap-10 justify-between max-w-7xl mx-auto">
            <About />
            <Tools />
          </article>
        </section>
        <div className="h-20 bg-red w-full" />
        <section className="px-10 py-16 w-screen">
          <article className="flex flex-col md:flex-row gap-10 justify-between max-w-7xl mx-auto">
            <div>
              <h2 className="font-medium text-lg md:text-2xl">
                Se precisar de mim...
              </h2>
              <Form />
            </div>
            <div></div>
          </article>
        </section>
      </>
    </>
  );
}
