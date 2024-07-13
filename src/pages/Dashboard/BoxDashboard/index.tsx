import { Card, Typography, BaseIcon } from '@ui/atoms';

type PropsType = {
  icon: string;
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

export function BoxDashboard({ icon, title, description }: PropsType) {
  return (
    <Card color="white" shadow="xl" className="flex items-center">
      <>
        <BaseIcon icon={icon} className="m-4" color="teal" size="md" />
        <div>
          <Typography color="teal" size="h5">
            {title}
          </Typography>
          <Typography className="text-neutral-400" size="h6">
            {description}
          </Typography>
        </div>
      </>
    </Card>
  );
}
