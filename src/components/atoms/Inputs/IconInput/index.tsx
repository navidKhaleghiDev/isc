import { IconType } from '@src/types/global';
import { BaseIcon } from '@ui/atoms/BaseIcon';

import { ColorIndent } from '../types';
import { iconBaseInputStyles } from '../styles';

type IconInputProps = {
  intent: ColorIndent;
  icon: IconType;
  dir?: 'ltr' | 'rtl';
};

export function IconInput({ icon, intent, dir = 'rtl' }: IconInputProps) {
  return (
    <div
      className={iconBaseInputStyles({
        intent,
        className: ` ${dir === 'ltr' && 'left-auto'} pointer-events-none`,
      })}
    >
      <BaseIcon icon={icon} className="text-neutral-400" size="md" />
    </div>
  );
}
