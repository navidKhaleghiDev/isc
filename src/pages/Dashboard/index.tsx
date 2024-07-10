import { useUserContext } from '@context/user/userContext';
import {
  persianDayLabel,
  persianDateAndNumber,
} from '@src/helper/utils/dateUtils';
// import { Card, Typography, Notification } from '@ui/atoms';
import { BoxDashboard } from './BoxDashboard';
import { ProductBox } from './ProductBox';

export function DashboardPage() {
  const { user } = useUserContext();
  return (
    <div className="w-full flex flex-col h-full p-16">
      <div className="grid grid-cols-4 gap-6 mb-16">
        <BoxDashboard
          icon="ph:calendar-check"
          title={persianDayLabel()}
          description={persianDateAndNumber()}
        />
        <BoxDashboard
          icon="ph:sign-in"
          title="آخرین ورود"
          description={
            user?.last_login ? persianDateAndNumber(user?.last_login) : '-'
          }
        />
        <BoxDashboard
          icon="ph:cube"
          title="آخرین به روزرسانی قوانین"
          description={
            user?.last_login ? persianDateAndNumber(user?.last_login) : '-'
          }
        />
        <BoxDashboard
          icon="ph:code-block-bold"
          title="ورژن"
          description="1.0.1"
        />
      </div>
      <ProductBox />
      {/* <div className="mt-auto">
        <Typography className="mb-2" size="h5" color="teal">
          اعلان ها
        </Typography>
        <Card className="h-96" color="neutral">
          <div className="flex flex-col w-full p-5">
            <Notification
              outline="error"
              title="به روز رسانی صفحه با خطا رو به رو شد."
              type="error"
            />
            <Notification outline="success" title="ورود با موفقیت انجام شد." />
          </div>
        </Card>
      </div> */}
    </div>
  );
}
