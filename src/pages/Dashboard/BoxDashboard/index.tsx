import { IconifyIcon } from '@iconify/react';
import { Card, Typography, BaseIcon } from '@ui/atoms';

type PropsType = {
  icon?: string | IconifyIcon;
  component?: React.ReactNode;
  title: string;
  description: string;
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
    <Card color="white" border={true} borderColor="neutral" rounded="xxxl" className="flex items-center p-8 mb-5">
      <>
        {showIcon()}
        <div>
          <Typography color="teal" size="h6">
            {title}
          </Typography>
          <Typography className="text-neutral-400" size="body4">
            {description}
          </Typography>
        </div>
      </>
    </Card>
  );
}
