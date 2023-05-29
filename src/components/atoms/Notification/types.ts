import { ColorType } from '@src/types/theme';
import { VariantProps } from 'class-variance-authority';

import { notificationStyles } from './styles';

export interface INotification extends VariantProps<typeof notificationStyles> {
  type: ColorType;
  className?: string;
  title: string;
}
