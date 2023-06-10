import { ROUTES_PATH } from '@src/routes/routesConstants';
import { Card, Typography } from '@ui/atoms';
import { BaseButton, IconButton } from '@ui/atoms/BaseButton';
import { Link } from 'react-router-dom';

type PropsType = { onClickAdd: (id: string) => void };
export function RulesCard({ onClickAdd }: PropsType) {
  const onClickAddButton = () => onClickAdd('1');
  return (
    <Card
      color="neutral"
      className="border-l-[0.2rem] border-teal-600 flex h-14 items-center px-2 my-2"
    >
      <div className="w-full flex justify-between items-center">
        <Link to={`${ROUTES_PATH.servicesRules}/codeName`}>
          <IconButton icon="jam:more-vertical" color="white" />
        </Link>
        <BaseButton
          label="افزودن"
          endIcon="ic:baseline-plus"
          className="ml-auto mr-2"
          type="shadow"
          size="sm"
          onClick={onClickAddButton}
        />
        <Typography color="teal" size="body2" type="div">
          Rule name
        </Typography>
      </div>
    </Card>
  );
}
