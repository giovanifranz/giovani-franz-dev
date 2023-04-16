type Props = {
  text: string
  ellipsisColor?: 'text-red' | 'text-black'
}

export function Subtitle({ ellipsisColor = 'text-red', text }: Props) {
  return (
    <h2 className="text-2xl font-medium md:text-3xl">
      {text}
      <span className={ellipsisColor}>...</span>
    </h2>
  )
}
