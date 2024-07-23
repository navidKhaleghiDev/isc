import { IconifyIcon } from '@iconify/react';
import { Card, Typography, BaseIcon } from '@ui/atoms';

type PropsType = {
  icon?: string | IconifyIcon;
  component?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

/**
 * BoxDashboard component displays a dashboard box with an icon, title, and description.
 *
 * @component
 *
 * @param {Object} props - The properties for the BoxDashboard component.
 * @param {string} props.icon - The icon name for the BaseIcon component.
 * @param {string} props.title - The title to display.
 * @param {string} props.description - The description to display.
 *
 * @returns {JSX.Element} The BoxDashboard component.
 */

export function BoxDashboard({
  icon,
  component,
  title,
  description,
  className,
}: PropsType) {
  const showIcon = () => {
    if (icon) {
      return <BaseIcon icon={icon} className="m-4" color="teal" size="md" />;
    }
    if (component) {
      return component;
    }
    return null;
  };

  return (
    <Card
      border
      shadow="sm"
      className={`flex items-center px-2 py-4 md:p-7 mb-5 col-span-2 ${className}`}
    >
      <>
        {showIcon()}
        <div>
          <Typography color="black" size="body4" weight="bold">
            {title}
          </Typography>
          <Typography color="neutral" size="body5">
            {description}
          </Typography>
        </div>
      </>
    </Card>
  );
}
