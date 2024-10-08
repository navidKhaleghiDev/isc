import { IconButtonProps } from '../BaseButton';

export interface BadgeProps extends IconButtonProps {
  content?: number | string;
  disabled?: boolean;
}
