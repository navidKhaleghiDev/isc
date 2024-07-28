import { IconType } from '@src/types/global';
import { IconButton } from '../BaseButton';

const disabledClass = 'opacity-40';
const selectedClass = 'opacity-40';

type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;
interface ChipButtonType extends BaseButtonAttributes {
  label: string;
  iconLabel: IconType;
  status: 'default' | 'external' | 'internal';
  isSelected?: boolean;
}

export function ChipButton({
  label,
  status,
  onClick,
  iconLabel,
  className,
  disabled,
  isSelected = false,
}: ChipButtonType) {
  const typeColor = {
    default: 'bg-neutral-200 text-neutral-500',
    external: 'bg-teal-100 text-neutral-500',
    internal: 'bg-yellow-100 text-neutral-500',
  };

  return (
    <button
      disabled={disabled}
      className={`flex max-w-max justify-between items-center w-full px-3 max-h-5 rounded-full ${
        typeColor[status]
      } ${className} ${disabled ? disabledClass : ''} ${
        isSelected ? selectedClass : ''
      }`}
      type="button"
      onClick={onClick}
    >
      {label}
      <IconButton icon={iconLabel} color="neutral" />
    </button>
  );
}
