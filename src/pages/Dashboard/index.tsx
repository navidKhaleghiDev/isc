import { useUserContext } from '@context/user/userContext';
import {
  persianDayLabel,
  persianDateNumber,
} from '@src/helper/utils/dateUtils';
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
          description={persianDateNumber(user?.last_login)}
        />
      </div>

      <ProductBox />

      {/* <div className="self-start flex flex-col w-full">
        <div className="flex w-full justify-between px-3 items-center h-16 bg-neutral-100 rounded-md">
          <Typography color="teal" size="h4">
            چهارشنبه
          </Typography>
          <Typography color="teal" size="h4">
            23 . اردیبهشت . 1402
          </Typography>
        </div>
        <BaseButton
          className="self-start w-96 mt-3"
          label="لیست مشتریان"
          endIcon="clarity:users-line"
        />
      </div> */}
      {/* <div className="mt-auto">
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
      </div> */}
    </div>
  );
}
