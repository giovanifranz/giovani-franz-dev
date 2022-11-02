import { useWindowSize } from 'react-use';
import dynamic from 'next/dynamic';
import { Logo } from '../Logo';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const Dropdown = dynamic(() => import('./Dropdown'));
const Navigation = dynamic(() => import('./Navigation'));

export function Header() {
  const { width } = useWindowSize();
  const [menu, setMenu] = useState(<Dropdown />);

  const MenuResize = useCallback(() => {
    if (width < 660) setMenu(<Dropdown />);
    else setMenu(<Navigation />);
  }, [width]);

  useEffect(() => {
    MenuResize();
  }, [MenuResize]);

  const Menu = () => menu;

  return (
    <header className="bg-black">
      <div className="flex items-center justify-between px-10 mx-auto max-w-[1920px] py-9">
        <Link href="/">
          <Logo />
        </Link>
        <Menu />
      </div>
    </header>
  );
}
