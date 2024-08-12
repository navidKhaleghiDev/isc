import { useNavigate } from 'react-router-dom';
import { Typography, BaseButton, Card } from '@ui/atoms';

type TMonitoringSystemCard = {
  label: string;
  refUrl: string;
};

export function MonitoringSystemCard({
  label,
  refUrl,
}: TMonitoringSystemCard): JSX.Element {
  const navigate = useNavigate();
  const handelBtnClick = () => navigate(refUrl);

  return (
    <Card
      border
      rounded="md"
      shadow="sm"
      className="p-[1.875rem] h-20 sm:h-[10.62rem] w-full items-center sm:items-baseline flex justify-between sm:flex-col"
    >
      <Typography
        type="h3"
        size="body1"
        weight="bold"
        className="text-sm sm:text-2xl"
      >
        {label}
      </Typography>
      <div className="sm:self-end">
        <BaseButton label="ورود به سیستم" size="lg" onClick={handelBtnClick} />
      </div>
    </Card>
  );
}
