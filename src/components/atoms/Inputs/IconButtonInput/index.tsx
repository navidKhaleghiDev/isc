import { BaseIcon } from '@ui/atoms/BaseIcon';
import { IconType } from '@src/types/global';

import { ColorIndent } from '../types';
import { iconBaseInputStyles } from '../styles';

type IconButtonInputProps = {
  intent: ColorIndent;
  icon: IconType;
  onClick: () => void;
};

export function IconButtonInput({
  icon,
  intent,
  onClick,
}: IconButtonInputProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={iconBaseInputStyles({
        intent,
      })}
      aria-label="button"
    >
      <BaseIcon icon={icon} className="mx-1 text-gray-400" size="md" />
    </button>
  );
}
