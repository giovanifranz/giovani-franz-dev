import Link from 'next/link'
import { Subtitle, Text } from './'

export function About() {
  return (
    <article className="w-11/12 max-w-[600px] text-sm font-light md:w-1/2 md:text-base md:font-normal">
      <header>
        <Subtitle text="Eu sou" />
      </header>
      <br />
      <Text>
        Um <span className="text-red">desenvolvedor full-stack</span> com 1 ano
        de experiência em desenvolvimento de softwares e ferramentas de
        desenvolvimento.
        <br />
        <br />
        Sou especializado em <span className="text-red">React</span>, e estou
        sempre aprendendo coisas novas - importante numa indústria onde as
        coisas mudam muito rapidamente.
        <br />
        Tenho experiência em <span className="text-red">front-end</span> e{' '}
        <span className="text-red">back-end</span>.
        <br />
        <br />
        Hoje <span className="text-red">
          full-stack software engineer
        </span> at{' '}
        <Link
          className="text-blue hover:underline"
          href="https://agi.com.br"
          aria-label="Visite o site Agi"
          target="_blank"
          rel="noreferrer"
        >
          Agi
        </Link>{' '}
        e{' '}
        <Link
          className="text-blue hover:underline"
          href="https://www.highlandertech.com.br"
          aria-label="Visite o site Highlander Tech"
          target="_blank"
          rel="noreferrer"
        >
          Highlander Tech
        </Link>
        .
      </Text>
    </article>
  )
}
