import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { Slot } from '@radix-ui/react-slot';

type Props = {
  asChild?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

function Anchor({ asChild, ...props }: Props) {
  const Component = asChild ? Slot : 'a';

  return <Component className="hover:underline text-xl" {...props} />;
}

export default function Navigation() {
  return (
    <nav className="flex font-medium gap-7 font-display">
      <Anchor asChild>
        <Link href="/">Home</Link>
      </Anchor>
      <Anchor href="#sobre">Sobre</Anchor>
      {/*<Link href="#portfolio">Portfólio</Link>
      <Link href="#Contato">Contato</Link>*/}
    </nav>
  );
}
