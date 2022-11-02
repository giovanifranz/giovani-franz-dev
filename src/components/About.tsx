import Link from 'next/link';
import { Subtitle, Text } from './';

export function About() {
  return (
    <div className="font-light text-sm md:text-base md:font-normal max-w-[600px]">
      <Subtitle text="Eu sou" />
      <br />
      <Text>
        Um <span className="text-red">desenvolvedor front-end</span> com 1 ano
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
          frontend software engineer
        </span> at{' '}
        <Link
          className="hover:underline text-red"
          href="https://agi.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Agi
        </Link>{' '}
        e{' '}
        <Link
          className="hover:underline text-red"
          href="https://www.highlandertech.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Highlander Tech
        </Link>
        .
      </Text>
    </div>
  );
}
