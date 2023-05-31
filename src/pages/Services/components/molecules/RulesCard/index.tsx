import { ROUTES_PATH } from '@src/routes/routesConstants';
import { Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import { Link } from 'react-router-dom';

export function RulesCard() {
  return (
    <Card
      color="neutral"
      className="border-l-[0.2rem] border-teal-600 flex h-14 items-center px-2 my-2"
    >
      <div className="w-full flex justify-between items-center">
        <Link to={ROUTES_PATH['rules-code']}>
          <IconButton icon="jam:more-vertical" color="white" />
        </Link>
        <Typography color="teal" size="body2" type="div">
          Rule name
        </Typography>
      </div>
    </Card>
  );
}
