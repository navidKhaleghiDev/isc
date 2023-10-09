import { iconButtonStyles } from './styles';
import { LoadingSvg } from '../Svgs/LoadingSvg';

import { IIconButton } from './types';
import { BaseIcon } from '../BaseIcon';

export function IconButton({
  onClick,
  className,
  classNameIcon,
  icon,
  size,
  color,
  type,
  loading,
}: IIconButton) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={iconButtonStyles({
        color,
        size,
        className,
      })}
      disabled={loading}
    >
      {loading ? (
        <LoadingSvg />
      ) : (
        <BaseIcon icon={icon} size={size} className={classNameIcon} />
      )}
    </button>
  );
}
