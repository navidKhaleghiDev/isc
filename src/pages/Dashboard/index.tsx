import { useUserContext } from '@context/user/userContext';
import {
  persianDayLabel,
  persianDateNumber,
} from '@src/helper/utils/dateUtils';
import { Card, Typography, Notification } from '@ui/atoms';
import { BoxDashboard } from './BoxDashboard';
import { ProductBox } from './ProductBox';

export function DashboardPage() {
  const { user } = useUserContext();
  return (
    <div className="w-full flex flex-col h-full p-16">
      <div className="grid grid-cols-3 gap-6 mb-16">
        <BoxDashboard
          icon="ph:calendar-check"
          title={persianDayLabel()}
          description={persianDateNumber()}
        />
        <BoxDashboard
          icon="ph:sign-in"
          title="آخرین ورود"
          description={
            user?.last_login ? persianDateNumber(user?.last_login) : '-'
          }
        />
      </div>
      <ProductBox />
      <div className="mt-auto">
        <Typography className="mb-2" size="h5" color="teal">
          اعلان ها
        </Typography>
        <Card className="h-96" color="neutral">
          <div className="flex flex-col w-full p-5">
            <Notification
              outline="success"
              title="به روز رسانی صفحه با خطا رو به رو شد."
            />
            <Notification outline="error" title="ورود با موفقیت انجام شد." />
          </div>
        </Card>
      </div>
    </div>
  );
}
