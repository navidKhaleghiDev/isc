import { VariantProps } from 'class-variance-authority';
import { IconType } from '@src/types/global';
import { BaseIcon } from '@ui/atoms/BaseIcon';

import { iconBaseInputStyles } from '../styles';
import { ColorIndent } from '../types';

interface IconInputProps extends VariantProps<typeof iconBaseInputStyles> {
  intent: ColorIndent;
  icon: IconType;
  dir?: 'rtl' | 'ltr';
}

export function IconInput({ icon, intent, dir }: IconInputProps) {
  return (
    <div
      className={iconBaseInputStyles({
        intent,
        className: `${dir === 'rtl' && 'right-0'} pointer-events-none`,
      })}
    >
      <BaseIcon icon={icon} size="xs" />
    </div>
  );
}
