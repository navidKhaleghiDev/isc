import { DesignColorType } from '@src/types/theme';
import { Card, Typography } from '@ui/atoms';
import { TitleMyProduct } from '@ui/molecules/TitleMyProduct';

type PropsType = {
  label: string;
  value: string | number;
  isValueLeft?: boolean;
  className?: string;
  valueColor?: DesignColorType;
};

export function CardProductBox({
  label,
  value,
  className,
  isValueLeft,
  valueColor,
}: PropsType) {
  const mValueColor = valueColor
    ? `text-${valueColor}-600`
    : 'text-neutral-400';

  return (
    <Card color="neutral" className={`flex items-center px-4 h-8 ${className}`}>
      <TitleMyProduct title={label} />
      <div className="h-4 w-3 border-r border-neutral-400" />
      <Typography
        size="h6"
        className={`${!isValueLeft && 'mr-auto'} ${mValueColor}`}
      >
        {value}
      </Typography>
    </Card>
  );
}
