import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="shadow-none focus:outline-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="48"
          fill="none"
          viewBox="0 0 56 48"
        >
          <path fill="#FAFAFA" d="M4 4H52V12H4z" />
          <path fill="#FAFAFA" d="M4 20H52V28H4z" />
          <path fill="#FAFAFA" d="M4 36H52V44H4z" />
        </svg>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="flex flex-col w-screen px-10 py-4 mt-5 font-medium bg-black gap-4 font-display text-white">
          <DropdownMenu.Item>
            <Link href="/">Home</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href="#sobre">Sobre</Link>
          </DropdownMenu.Item>
          {/*<DropdownMenu.Item>
            <Link href="#portfolio">Portfólio</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href="#Contato">Contato</Link>
  </DropdownMenu.Item>*/}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
