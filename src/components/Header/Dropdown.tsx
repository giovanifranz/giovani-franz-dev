import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  text: string
  href: string
  scroll?: boolean
}

function MenuItem({ text, href, scroll = false }: Props) {
  return (
    <DropdownMenu.Item>
      <Link scroll={scroll} href={href}>
        {text}
      </Link>
    </DropdownMenu.Item>
  )
}

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="shadow-none focus:outline-0">
        <Image src="/svgs/menu.svg" alt="menu" width={56} height={48} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-5 flex w-screen flex-col gap-4 bg-black py-4 pl-10 font-display font-medium text-white">
          <MenuItem scroll href="/" text="Home" />
          <MenuItem href="#sobre" text="Sobre" />
          <MenuItem href="#portfolio" text="Portfólio" />
          <MenuItem href="#contato" text="Contato" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
