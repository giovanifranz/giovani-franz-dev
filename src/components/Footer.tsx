import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-16 flex h-8 w-screen items-center justify-center bg-gray px-10 text-sm">
      <p>
        Design by{' '}
        <Link
          href={'https://www.linkedin.com/in/iago-paz-2164a2220/'}
          aria-label="Linkedin Iago Paz"
          className="hover:text-yellow hover:underline"
        >
          <span className="text-yellow">Iago Paz</span>
        </Link>
      </p>
    </footer>
  )
}
