import { Link } from 'react-router-dom';
import { useUserContext } from '@context/user/userContext';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { BaseButton, Card, Typography } from '@ui/atoms';

type PropsType = {
  labelHead: string;
  buttonLabel: string;
  linkAddress: string;
};
export function ProductBox({ labelHead, buttonLabel, linkAddress }: PropsType) {
  const { user } = useUserContext();

  return (
    <Card shadow="sm" className="sm:p-7 p-5 flex flex-col">
      <Typography color="neutral_dark" size="body3" className="w-full">
        {labelHead}
      </Typography>
      <div className="flex">
        {' '}
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
        <Link to={linkAddress}>
          <div className="h-10 w-28 sm:w-40 sm:translate-y-1/2 sm:my-7">
            {' '}
            <BaseButton label={buttonLabel} fullWidth />
          </div>
        </Link>
      </div>
    </Card>
  );
}
