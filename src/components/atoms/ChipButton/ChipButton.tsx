import { IconButton, IIconButton } from '../BaseButton';

type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;
interface ChipButtonType extends BaseButtonAttributes {
  label: string;
  icon?: IIconButton['icon'];
  onClickIcon?: () => void;

  color: 'default' | 'green' | 'yellow' | 'lightGray';
}

export function ChipButton({
  label,
  color,
  onClick,
  icon,
  className,
  disabled,
  onClickIcon,
}: ChipButtonType) {
  const typeColor = {
    default: 'bg-neutral-200 text-neutral-500',
    lightGray: 'bg-neutral-200 text-neutral-500 opacity-40',
    green: 'bg-teal-100 text-neutral-500',
    yellow: 'bg-yellow-100 text-neutral-500',
  };

  return (
    <button
      disabled={disabled}
      className={`flex max-w-max justify-between items-center w-full px-3 max-h-5 rounded-full ${typeColor[color]} ${className} disabled:opacity-40 disabled:bg-teal-500 disabled:text-white`}
      type="button"
      onClick={onClick}
    >
      {label}
      {icon && <IconButton icon={icon} color="neutral" onClick={onClickIcon} />}
    </button>
  );
}
