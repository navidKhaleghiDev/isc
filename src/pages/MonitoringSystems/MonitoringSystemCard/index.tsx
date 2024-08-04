import { Typography, BaseButton, Card } from '@ui/atoms';
import { useNavigate } from 'react-router-dom';

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
      className="p-[1.875rem] h-[10.62rem] w-full flex flex-col justify-between"
    >
      <Typography type="h3" size="body1" weight="bold">
        {label}
      </Typography>
      <div className="self-end">
        <BaseButton label="ورود به سیستم" size="lg" onClick={handelBtnClick} />
      </div>
    </Card>
  );
}
