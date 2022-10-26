import type { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  badgeColor: `#${string}`;
  iconColor: `#${string}`;
  tool: string;
};

function Card({ Icon, tool, badgeColor, iconColor }: Props) {
  return (
    <div className="flex flex-col items-center gap-2 w-20">
      <div
        style={{ backgroundColor: badgeColor }}
        className={
          'rounded-full w-[55px] h-[55px] flex justify-center items-center'
        }
      >
        <Icon size={32} style={{ color: iconColor }} />
      </div>
      <span>{tool}</span>
    </div>
  );
}

export { Card };
export type { Props as CardProps };
