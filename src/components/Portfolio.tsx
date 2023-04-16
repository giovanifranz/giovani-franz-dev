import { Subtitle } from './Subtitle'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
}

export function Portfolio() {
  return (
    <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-4 lg:grid-cols-4 ">
      <article className="col-span-1 mt-4 flex w-3/5 flex-col gap-4 px-10 py-4 lg:px-4">
        <header>
          <Subtitle ellipsisColor="text-black" text="Eu já" />
        </header>
        <p>Realizei projetos para clientes de todo o Brasil.</p>
        <span>(e alguns projetos pessoais.)</span>
        <p>Veja alguns deles aqui:</p>
      </article>
      <Carousel
        className="col-span-3 transition-all duration-500 ease-in-out [&>button]:z-20 [&>button]:bg-red"
        responsive={responsive}
        ssr
        infinite
        autoPlay
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        <Image width={330} height={400} src="/assets/agi.png" alt="Agibank" />
        <Image
          width={330}
          height={400}
          src="/assets/scoremilk.png"
          alt="Score Milk"
        />
        <Image
          width={330}
          height={400}
          src="/assets/oriental.png"
          alt="Oriental Wing Chun"
        />
        <Image
          width={330}
          height={400}
          src="/assets/kyra.png"
          alt="Kyra Pesquisa"
        />
        <Image
          width={330}
          height={400}
          src="/assets/entremalhas.png"
          alt="Entremalhas"
        />
        <Image
          width={330}
          height={400}
          src="/assets/highlander.png"
          alt="Highlander Tech"
        />
      </Carousel>
    </div>
  )
}
