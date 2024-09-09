import { IconButton } from '../BaseButton';
import { badgeStyles } from './styles';
import { BadgeProps } from './types';

export function Badge({
  content,
  icon,
  className,
  classNameIcon,
  color,
  loading,
  onClick,
  size,
  type,
}: BadgeProps) {
  return (
    <div className="relative">
      {content && (
        <span className={`${badgeStyles({ size })}`}>
          {size === 'md' && content}
        </span>
      )}
      <IconButton
        icon={icon}
        className={className}
        classNameIcon={classNameIcon}
        color={color}
        loading={loading}
        onClick={onClick}
        size={size}
        type={type}
      />
    </div>
  );
}
