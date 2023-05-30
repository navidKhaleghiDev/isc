import { BaseIcon } from '@ui/atoms/BaseIcon';
import { ColorIndent } from '../types';
import { iconBaseInputStyles } from '../styles';

type PropsType = {
  intent: ColorIndent;
  icon: string;
};

export function IconInput({ icon, intent }: PropsType) {
  return (
    <div className={iconBaseInputStyles({ intent })}>
      <BaseIcon icon={icon} className="ml-2" />
    </div>
  );
}
