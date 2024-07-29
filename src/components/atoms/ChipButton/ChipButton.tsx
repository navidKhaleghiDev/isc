import x from '@iconify-icons/ph/x';
import { IconType } from '@src/types/global';
import { IconButton } from '../BaseButton';
import { useState } from 'react';

const disabledClass = 'opacity-40';

type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;
interface ChipButtonType extends BaseButtonAttributes {
  label: string;
  iconLabel: IconType;
  status: 'default' | 'green' | 'yellow' | 'disabled';
}

export function ChipButton({
  label,
  status,
  onClick,
  iconLabel,
  className,
  disabled,
}: ChipButtonType) {
  const typeColor = {
    default: 'bg-neutral-200 text-neutral-500',
    disabled: 'bg-neutral-200 text-neutral-500 opacity-40',
    green: 'bg-teal-100 text-neutral-500',
    yellow: 'bg-yellow-100 text-neutral-500',
  };
  const [isHidden, setIsHidden] = useState(false);
  if (isHidden) {
    return null;
  }
  const handleIconClick = (icon: IconType) => {
    if (icon === x) {
      setIsHidden(true);
    }
  };

  return (
    <button
      disabled={disabled}
      className={`flex max-w-max justify-between items-center w-full px-3 max-h-5 rounded-full ${
        typeColor[status]
      } ${className} ${disabled ? disabledClass : ''} `}
      type="button"
      onClick={onClick}
    >
      {label}
      <IconButton
        icon={iconLabel}
        color="neutral"
        onClick={() => handleIconClick(iconLabel)}
      />
    </button>
  );
}
