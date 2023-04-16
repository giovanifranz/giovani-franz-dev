import { Card } from './Card'
import {
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiVite,
  SiTailwindcss,
} from 'react-icons/si'
import { Subtitle } from '../Subtitle'

export function Tools() {
  return (
    <article className="flex w-full max-w-[600px] flex-col gap-4 text-sm font-light md:w-1/2 md:text-base md:font-normal">
      <header>
        <Subtitle text="Eu utilizo" />
      </header>
      <div className="flex flex-row flex-wrap gap-8">
        <Card
          Icon={SiJavascript}
          badgeColor="#323330"
          iconColor="#F7DF1E"
          tool="JavaScript"
        />
        <Card
          Icon={SiTypescript}
          badgeColor="#017ACC"
          iconColor="#FAFAFA"
          tool="TypeScript"
        />
        <Card
          Icon={SiReact}
          badgeColor="#5ADAFD"
          iconColor="#FAFAFA"
          tool="React"
        />
        <Card
          Icon={SiNextdotjs}
          badgeColor="#FAFAFA"
          iconColor="#000000"
          tool="NextJS"
        />
        <Card
          Icon={SiVite}
          badgeColor="#646CFF"
          iconColor="#FAFAFA"
          tool="ViteJS"
        />
        <Card
          Icon={SiTailwindcss}
          badgeColor="#38B2AC"
          iconColor="#FAFAFA"
          tool="Tailwindcss"
        />
        <Card
          Icon={SiNodedotjs}
          badgeColor="#7DBE42"
          iconColor="#FAFAFA"
          tool="NodeJS"
        />
        <Card
          Icon={SiNestjs}
          badgeColor="#E0234E"
          iconColor="#fff"
          tool="NestJS"
        />
      </div>
    </article>
  )
}
