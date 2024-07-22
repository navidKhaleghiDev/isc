import { useUserContext } from '@context/user/userContext';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { BaseButton, Card, Typography } from '@ui/atoms';
import { Link } from 'react-router-dom';

type PropsType = {
  labelHead: string;
  buttonLabel: string;
  linkAddress: string;
};
export function ProductBox({ labelHead, buttonLabel, linkAddress }: PropsType) {
  const { user } = useUserContext();

  return (
    <Card shadow="sm" className="p-8 flex flex-col">
      <Typography color="neutral_dark" size="body3" className="w-full">
        {labelHead}
      </Typography>
      <Typography
        color="neutral_light"
        size="body5"
        className="w-full flex flex-col"
      >
        <span> آخرین به روزرسانی </span>
        <span>
          {user?.last_login ? persianDateAndNumber(user?.last_login) : '-'}
        </span>
      </Typography>
      <Link to={linkAddress} className="self-end">
        <BaseButton label={buttonLabel} size="lg" className="" />
      </Link>
    </Card>
  );
}
