import type { IconType } from 'react-icons'

type Props = {
  Icon: IconType
  badgeColor: `#${string}`
  iconColor: `#${string}`
  tool: string
}

function Card({ Icon, tool, badgeColor, iconColor }: Props) {
  return (
    <div className="flex w-20 flex-col items-center gap-2">
      <div
        style={{ backgroundColor: badgeColor }}
        className={
          'flex h-[55px] w-[55px] items-center justify-center rounded-full'
        }
      >
        <Icon size={32} style={{ color: iconColor }} title={tool} />
      </div>
      <span>{tool}</span>
    </div>
  )
}

export { Card }
export type { Props as CardProps }
