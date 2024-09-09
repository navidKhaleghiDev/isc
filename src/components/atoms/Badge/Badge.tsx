import { IconButton } from '../BaseButton';
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
        <span
          className={`absolute flex justify-center items-center bg-red-500 rounded-full text-xs leading-3 text-white normal px-1 ${
            size === 'xl'
              ? 'size-2 -top-0.5 -right-0.5'
              : 'size-5 -top-2 -right-2'
          }`}
        >
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
