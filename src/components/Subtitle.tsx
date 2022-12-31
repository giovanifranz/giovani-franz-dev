type Props = {
  text: string
}

export function Subtitle({ text }: Props) {
  return (
    <h2 className="text-2xl font-medium md:text-3xl">
      {text}
      <span className="text-red">...</span>
    </h2>
  )
}
