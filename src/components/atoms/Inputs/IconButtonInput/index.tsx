import { BaseIcon } from '@ui/atoms/BaseIcon';
import { IconType } from '@src/types/global';

import { ColorIndent } from '../types';
import { iconBaseInputStyles } from '../styles';

type IconButtonInputProps = {
  intent: ColorIndent;
  icon: IconType;
  onClick: () => void;
  disabled?: boolean;
  error?: string | undefined;
  dir?: 'rtl' | 'ltr';
};

export function IconButtonInput({
  icon,
  intent = 'default',
  disabled,
  onClick,
  error,
  dir,
}: IconButtonInputProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={iconBaseInputStyles({
        intent: error ? 'error' : intent,
        className: `${dir === 'rtl' && 'right-0'}`,
      })}
      aria-label="button"
    >
      <BaseIcon icon={icon} size="xs" />
    </button>
  );
}
