import { Card, Typography, BaseButton } from '@ui/atoms';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';

type PropsType = { title: string };
export function NotHaveIsAuthenticated({ title }: PropsType) {
  const navigate = useNavigate();

  return (
    <Card
      color="neutral"
      className="flex flex-col justify-around items-center bg-neutral-200 h-48"
    >
      <Typography color="neutral" size="body3">
        {`برای مشاهده ${title} ابتدا احراز هویت خود را انجام دهید `}
      </Typography>
      <BaseButton
        label="احراز هویت"
        size="lg"
        type="secondary"
        onClick={() => navigate(`${ROUTES_PATH.dashboard}?step=authenticate`)}
      />
    </Card>
  );
}
