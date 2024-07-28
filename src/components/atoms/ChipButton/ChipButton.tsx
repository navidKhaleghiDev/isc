import { useState } from 'react';
import { IconButton } from '../BaseButton';
import { IconType } from '@src/types/global';

const disabledClass = 'opacity-40';
type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;
interface ChipButtonType extends BaseButtonAttributes {
  label: string;
  iconLabel: IconType;
  status: 'default' | 'external' | 'internal';
  disabled?: boolean;
}
export function ChipButton({
  label,
  status,
  onClick,
  iconLabel,
  className,
  disabled,
}: ChipButtonType) {
  const [isHidden, setIsHidden] = useState(false);
  const typeColor = {
    default: 'bg-neutral-200 text-neutral-500',
    external: 'bg-teal-100 text-neutral-500',
    internal: 'bg-yellow-100 text-neutral-500',
  };
  if (isHidden) {
    return null;
  }
  return (
    <button
      disabled={disabled}
      className={`flex max-w-max justify-between items-center w-full px-3 max-h-5 rounded-full ${
        typeColor[status]
      } ${className} ${disabled === true && disabledClass}`}
      type="button"
      onClick={onClick}
    >
      {label}
      <IconButton
        icon={iconLabel}
        onClick={() => setIsHidden(true)}
        // size="sm"
        color="neutral"
      />
    </button>
  );
}
