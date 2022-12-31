export function Heading() {
  return (
    <section className="flex h-[600px] w-screen items-center justify-center bg-[url('/bg-mobile.png')] bg-cover bg-no-repeat md:h-[768px] md:bg-[url('/bg-desktop.png')]">
      <header className="relative m-auto font-display font-medium">
        <span className="text-base  md:text-2xl">Olá, meu nome é</span>
        <h1 className="text-2xl leading-10 md:text-6xl md:leading-[90px]">
          Giovani Simões Franz
        </h1>
        <span className="absolute right-0">Desenvolvedor Full-Stack</span>
      </header>
    </section>
  )
}
