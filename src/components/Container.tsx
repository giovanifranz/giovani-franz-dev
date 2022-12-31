import { HtmlHTMLAttributes } from 'react'

type Props = HtmlHTMLAttributes<HTMLDivElement>

export function Container(props: Props) {
  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-10 px-10 py-16 md:flex-row"
      {...props}
    />
  )
}
