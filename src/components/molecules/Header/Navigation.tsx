import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex font-medium gap-7 font-display">
      <Link href="/">Home</Link>
      <Link href="#sobre">Sobre</Link>
      {/*<Link href="#portfolio">Portfólio</Link>
      <Link href="#Contato">Contato</Link>*/}
    </nav>
  );
}
