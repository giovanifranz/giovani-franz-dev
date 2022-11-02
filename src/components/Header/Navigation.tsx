import NextLink, { LinkProps } from 'next/link';
import type { PropsWithChildren } from 'react';

function Link({ scroll = false, ...props }: PropsWithChildren<LinkProps>) {
  return (
    <NextLink scroll={scroll} className="hover:underline text-xl" {...props} />
  );
}

export default function Navigation() {
  return (
    <nav className="flex font-medium gap-7 font-display">
      <Link scroll href="/">
        Home
      </Link>
      <Link href="#sobre">Sobre</Link>
      {/*<Link href="#portfolio">Portfólio</Link>
      <Link href="#Contato">Contato</Link>*/}
    </nav>
  );
}
