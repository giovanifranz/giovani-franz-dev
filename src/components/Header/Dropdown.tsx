import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';

type Props = {
  text: string;
  href: string;
};

function MenuItem({ text, href }: Props) {
  return (
    <DropdownMenu.Item className="text-2xl">
      <a href={href}>{text}</a>
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
          <MenuItem href="/" text="Home" />
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
