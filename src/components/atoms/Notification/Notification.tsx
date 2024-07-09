import { BaseIcon } from '../BaseIcon';
import { Card } from '../Card';
import { Typography } from '../Typography';
import { notificationStyles } from './styles';
import { INotification } from './types';

/**
 * Notification Component
 *
 * This component renders a notification card with an icon and title.
 *
 * @component
 *
 * @param {Object} props - The props for the Notification component.
 * @param {string} [className] - Custom className for the notification card.
 * @param {boolean} [outline] - Determines if the card should have an outline.
 * @param {string} [size] - Size of the notification card (e.g., xs, sm, md, lg).
 * @param {string} title - Title text to be displayed in the notification.
 * @param {'error' | 'info' | 'warning'} type - Type of notification (error, info, warning).
 *
 * @returns {JSX.Element} Returns the rendered notification component.
 */

export function Notification({
  className,
  outline,
  size,
  title,
  type,
}: INotification) {
  return (
    <Card
      className={notificationStyles({ size, type, outline, className })}
      border
    >
      <div className="flex items-center">
        <BaseIcon
          icon={type === 'error' ? 'ph:shield-warning' : 'carbon:security'}
          className="ml-4"
        />
        <Typography size="body3" weight="medium">
          {title}
        </Typography>
      </div>
    </Card>
  );
}
