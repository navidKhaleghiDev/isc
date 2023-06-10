import { iconButtonStyles } from './styles';
import { IIconButton } from './types';
import { BaseIcon } from '../BaseIcon';

export function IconButton({
  onClick,
  className,
  classNameIcon,
  icon,
  size,
  color,
}: IIconButton) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={iconButtonStyles({
        color,
        size,
        className,
      })}
    >
      <BaseIcon icon={icon} size={size} className={classNameIcon} />
    </button>
  );
}
