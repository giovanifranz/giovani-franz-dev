import Head from 'next/head'
import Link from 'next/link'
import {
  About,
  Heading,
  Tools,
  Form,
  Header,
  Text,
  Footer,
  Container,
  Portfolio,
} from '../components'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiOutlineGithub } from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <Head>
        <title>Giovani Franz </title>
      </Head>
      <Header />
      <main>
        <Heading />
        <Container id="sobre">
          <About />
          <Tools />
        </Container>
        <section id="portfolio" className="w-full bg-red">
          <Portfolio />
        </section>
        <Container id="contato">
          <Form />
          <article className="flex w-11/12 max-w-[600px] flex-col gap-4 md:w-1/2">
            <div>
              <Text>Se gostou do meu trabalho, basta chamar. </Text>
              <Text>Entrarei em contato assim que estiver disponível!</Text>
            </div>
            <div>
              <Text asChild>
                <span>
                  Meu telefone <span className="text-red">: </span>
                </span>
              </Text>
              <Link
                href="https://api.whatsapp.com/send?phone=5551991919753"
                aria-label="Whatsapp Giovani Franz"
                className="hover:underline"
              >
                <Text>
                  <span className="text-red">(</span>
                  51<span className="text-red">)</span> 9 9141 9753
                </Text>
              </Link>
            </div>
            <div>
              <Text asChild>
                <span className="mt-6">
                  Meu email <span className="text-red">: </span>
                </span>
              </Text>
              <Link
                href="mailto:contato@giovanifranz.dev"
                aria-label="E-mail para contato Giovani Franz"
                className="hover:underline"
              >
                <Text>
                  contato<span className="text-red">@</span>giovanifranz
                  <span className="text-red">.</span>dev
                </Text>
              </Link>
            </div>
          </article>
        </Container>
        <Container id="social">
          <article className="mx-auto flex flex-row items-center gap-4 text-white">
            <Link
              href="https://www.linkedin.com/in/giovanifranz"
              aria-label="Linkedin Giovani Franz"
              className="hover:brightness-50"
            >
              <TiSocialLinkedinCircular size={60} />
            </Link>
            <Link
              href="https://github.com/giovanifranz"
              aria-label="Github Giovani Franz"
              className="hover:brightness-50"
            >
              <AiOutlineGithub size={50} />
            </Link>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}
