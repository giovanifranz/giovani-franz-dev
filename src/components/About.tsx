import Link from 'next/link';

export function About() {
  return (
    <div className="font-light text-sm md:text-base md:font-normal max-w-[600px]">
      <h2 className="font-medium text-lg md:text-2xl">
        Eu sou<span className="text-red">...</span>
      </h2>
      <br />
      <p>
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
      </p>
    </div>
  );
}
