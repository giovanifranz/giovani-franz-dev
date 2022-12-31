import type { HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'

type Props = {
  asChild?: boolean
} & HTMLAttributes<HTMLParagraphElement>

export function Text({ asChild, ...props }: Props) {
  const Component = asChild ? Slot : 'p'

  return <Component className="text-lg md:text-xl lg:text-2xl" {...props} />
}
