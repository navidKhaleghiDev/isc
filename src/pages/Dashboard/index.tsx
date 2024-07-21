import { useUserContext } from '@context/user/userContext';
import {
  persianDayLabel,
  persianDateAndNumber,
} from '@src/helper/utils/dateUtils';
// import { Card, Typography, Notification } from '@ui/atoms';
import { CalendarSvg } from '@ui/atoms/Svgs/CalendarSvg';
import { Suspense } from 'react';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { BoxDashboard } from './BoxDashboard';
import { ProductBox } from './ProductBox';
import { LoadingUpdateSvg } from '@ui/atoms/Svgs/LoadingUpdateSvg';
import { Card, Notification, Typography } from '@ui/atoms';
import { LabelsStatus } from '@ui/organisms/Sidebar/StatusServices';

export function DashboardPage() {
  const { user } = useUserContext();
  return (
    <div className="w-full flex flex-col h-full p-16">
      <div className="grid grid-cols-4 gap-7">
        <div className="col-span-3 shadow-[0_0_5px_0_rgba(33,37,41,0.15)] rounded-xl">
          <Suspense fallback={<LoadingSpinner centerParent />}>
            <ProductBox />
          </Suspense>
        </div>
        <div>
          <BoxDashboard
            component={<CalendarSvg className="ml-4" />}
            title={persianDayLabel()}
            description={persianDateAndNumber()}
          />
          <BoxDashboard
            component={
              <LoadingUpdateSvg className="ml-4 animate-[spin_1.5s_linear_infinite]" />
            }
            title="آخرین به روزرسانی قوانین"
            description={
              user?.last_login ? persianDateAndNumber(user?.last_login) : '-'
            }
          />
          <div>
            <Typography className="mb-2" size="h5" color="black" weight="bold">
              وضعیت سرورها
            </Typography>
            <Card
              className="h-96 mb-5"
              border={true}
              borderColor="neutral"
              rounded="xxxl"
            >
              <LabelsStatus />
            </Card>
          </div>
          <div>
            <Typography className="mb-2" size="h5" color="black" weight="bold">
              اعلان ها
            </Typography>
            <Card
              className="h-96 mb-5"
              border={true}
              borderColor="neutral"
              rounded="xxxl"
            >
              <div className="flex flex-col w-full p-5">
                <Notification
                  outline="error"
                  title="به روز رسانی صفحه با خطا رو به رو شد."
                  type="error"
                />
                <Notification
                  outline="success"
                  title="ورود با موفقیت انجام شد."
                />
              </div>
            </Card>
          </div>
          <BoxDashboard
            icon="ph:sign-in"
            title="آخرین ورود"
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
      </div>
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
