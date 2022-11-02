import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import { Slot } from '@radix-ui/react-slot';
import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type Props = {
  asChild?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

function MenuItem({ asChild, ...props }: Props) {
  const Component = asChild ? Slot : 'a';
  return (
    <DropdownMenu.Item className="text-2xl">
      <Component {...props} />
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
          <MenuItem asChild>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem href="#sobre">Sobre</MenuItem>
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
