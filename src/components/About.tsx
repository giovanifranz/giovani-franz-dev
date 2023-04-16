import Link from 'next/link'
import { Subtitle, Text } from './'

export function About() {
  const years = new Date().getFullYear() - 2021

  return (
    <article className="w-11/12 max-w-[600px] text-sm font-light md:w-1/2 md:text-base md:font-normal">
      <header>
        <Subtitle text="Eu sou" />
      </header>
      <br />
      <Text>
        Um <span className="text-red">desenvolvedor full-stack</span> com{' '}
        {years} ano de experiência em desenvolvimento de softwares e ferramentas
        de desenvolvimento.
        <br />
        <br />
        Sou especializado em <span className="text-red">React.JS</span> e{' '}
        <span className="text-red">Node.JS</span>, eestou sempre aprendendo
        coisas novas, o que é importante em uma indústria onde as coisas mudam
        rapidamente. Tenho experiência tanto em{' '}
        <span className="text-red">front-end</span> e{' '}
        <span className="text-red">back-end</span>.
        <br />
        <br />
        Atualmente sou um{' '}
        <span className="text-red">
          engenheiro de software full-stack
        </span> no{' '}
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
