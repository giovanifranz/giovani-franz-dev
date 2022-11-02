import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  text: string;
  href: string;
  scroll?: boolean;
};

function MenuItem({ text, href, scroll = false }: Props) {
  return (
    <DropdownMenu.Item>
      <Link scroll={scroll} href={href}>
        {text}
      </Link>
    </DropdownMenu.Item>
  );
}

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="shadow-none focus:outline-0">
        <Image src="/svgs/menu.svg" alt="menu" width={56} height={48} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="flex flex-col w-screen px-10 py-4 mt-5 font-medium bg-black gap-4 font-display text-white">
          <MenuItem scroll href="/" text="Home" />
          <MenuItem href="#sobre" text="Sobre" />
          {/*<MenuItem>
            <Link href="#portfolio">Portfólio</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#Contato">Contato</Link>
          </MenuItem>*/}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
