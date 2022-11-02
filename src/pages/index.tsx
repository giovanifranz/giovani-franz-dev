import Head from 'next/head';
import Link from 'next/link';
import {
  About,
  Heading,
  Tools,
  Form,
  Header,
  Subtitle,
  Text,
} from '../components';

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
          <Text asChild>
            <article className="flex flex-col md:flex-row gap-10 justify-between max-w-7xl mx-auto">
              <div>
                <Subtitle text="Se precisar de mim" />
                <Form />
              </div>
              <div className="flex flex-col gap-2">
                <Text>
                  Se gostou do meu trabalho, basta chamar. <br />
                  Entrarei em contato assim que estiver disponível!
                </Text>
                <br />
                <span>
                  Meu telefone <span className="text-red">: </span>
                </span>
                <Link href="https://api.whatsapp.com/send?phone=5551991919753">
                  <>
                    <span className="text-red">(</span>
                    51 <span className="text-red">)</span> 9 9141 9753
                  </>
                </Link>

                <span className="mt-6">
                  Meu email <span className="text-red">: </span>
                </span>
                <Link href="mailto:contato@giovanifranz.dev">
                  contato<span className="text-red">@</span>giovanifranz
                  <span className="text-red">.</span>dev
                </Link>
              </div>
            </article>
          </Text>
        </section>
      </>
    </>
  );
}
