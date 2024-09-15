import X from '@iconify-icons/ph/x';

import { chipButtonStyles } from './styles';
import { BaseIcon, IBaseIcon } from '../BaseIcon';

type ChipButtonProps = {
  label: string;
  icon?: IBaseIcon['icon'];
  onClick?: () => void;
  color: IBaseIcon['color'];
  dir?: 'rtl' | 'ltr';
  className?: string;
  disabled?: boolean;
};

export function ChipButton({
  label,
  color,
  onClick,
  icon,
  className,
  disabled,
  dir = 'rtl',
}: ChipButtonProps) {
  return (
    <button
      dir={dir}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={chipButtonStyles({ className, color })}
    >
      {icon && <BaseIcon color={color} icon={icon} />}
      {label}
      {onClick && <BaseIcon icon={X} color={color} />}
    </button>
  );
}
