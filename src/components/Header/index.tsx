import { useWindowSize } from 'react-use'
import dynamic from 'next/dynamic'
import { Logo } from '../Logo'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

const Dropdown = dynamic(() => import('./Dropdown'))
const Navigation = dynamic(() => import('./Navigation'))

export function Header() {
  const { width } = useWindowSize()
  const [menu, setMenu] = useState(<Dropdown />)

  const MenuResize = useCallback(() => {
    if (width < 660) setMenu(<Dropdown />)
    else setMenu(<Navigation />)
  }, [width])

  useEffect(() => {
    MenuResize()
  }, [MenuResize])

  const Menu = () => menu

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between px-10 py-9">
        <Link href="/">
          <Logo />
        </Link>
        <Menu />
      </div>
    </header>
  )
}
