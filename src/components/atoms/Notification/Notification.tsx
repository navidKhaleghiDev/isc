import { BaseIcon } from '../BaseIcon';
import { Card } from '../Card';
import { Typography } from '../Typography';
import { notificationStyles } from './styles';
import { INotification } from './types';

export function Notification({ className, size, title, type }: INotification) {
  return (
    <Card
      className={notificationStyles({ size, className })}
      type="default"
      border
      borderColor={type}
    >
      <div className="flex items-center h-16 p-3">
        <BaseIcon icon="carbon:security" color={type} />
        <Typography className="mr-5" color={type}>
          {title}
        </Typography>
      </div>
    </Card>
  );
}
