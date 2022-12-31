import Image from 'next/image'

type Props = {
  asDefault?: boolean
}

export function Logo({ asDefault = true }: Props) {
  return (
    <Image
      width={140}
      height={50}
      src={asDefault ? '/svgs/default_logo.svg' : '/svgs/variant_logo.svg'}
      alt="Franz Logo"
    />
  )
}
