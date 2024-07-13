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

/**
 * CardProductBox component displays a labeled value inside a styled card.
 *
 * @component
 *
 * @param {Object} props - The properties for the CardProductBox component.
 * @param {string} props.label - The label to display.
 * @param {string|number} props.value - The value to display next to the label.
 * @param {boolean} [props.isValueLeft=false] - Determines if the value should be aligned to the left.
 * @param {string} [props.className] - Additional class names for custom styling.
 * @param {DesignColorType} [props.valueColor] - Color of the value text.
 *
 *
 * @returns {JSX.Element} The CardProductBox component.
 */

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
