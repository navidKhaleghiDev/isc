import { Link } from 'react-router-dom';

import { useUserContext } from '@context/user/userContext';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { BaseButton, Card, Typography } from '@ui/atoms';
import ToolTip from '@ui/atoms/Tooltip';

type ProductBoxPropType = {
  labelHead: string;
  buttonLabel: string;
  linkAddress?: string;
};
export function ProductBox({
  labelHead,
  buttonLabel,
  linkAddress,
}: ProductBoxPropType) {
  const { user } = useUserContext();

  return (
    <Card shadow="sm" className="sm:p-7 p-5 flex flex-col">
      <Typography
        color="neutral_dark"
        size="body5"
        weight="medium"
        className="w-full sm:text-lg"
      >
        {labelHead}
      </Typography>
      <div className="flex">
        <Typography
          color="neutral_light"
          size="body6"
          className="w-full flex flex-col sm:text-sm"
        >
          <span> آخرین به روزرسانی </span>
          <span>
            {user?.last_login ? persianDateAndNumber(user?.last_login) : '-'}
          </span>
        </Typography>
        {linkAddress ? (
          <Link to={linkAddress}>
            <div className="h-10 w-28 sm:w-40 sm:translate-y-1/2 sm:my-7">
              <BaseButton label={buttonLabel} fullWidth />
            </div>
          </Link>
        ) : (
          <ToolTip tooltip="در حال توسعه" position="bottom">
            <div className="h-10 w-28 sm:w-40 sm:translate-y-1/2 sm:my-7">
              <BaseButton label={buttonLabel} fullWidth disabled />
            </div>{' '}
          </ToolTip>
        )}
      </div>
    </Card>
  );
}
