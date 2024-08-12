import { useUserContext } from '@context/user/userContext';
import {
  persianDayLabel,
  persianDateAndNumber,
} from '@src/helper/utils/dateUtils';
// import { Card, Typography, Notification } from '@ui/atoms';
import { CalendarSvg } from '@ui/atoms/Svgs/CalendarSvg';
import { Suspense } from 'react';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { LoadingUpdateSvg } from '@ui/atoms/Svgs/LoadingUpdateSvg';
import { Card, Typography } from '@ui/atoms';
import { BoxDashboard } from './BoxDashboard';
import { ProductBox } from './ProductBox';

export function DashboardPage() {
  const { user } = useUserContext();
  return (
    <div className="w-full flex flex-col h-full">
      <div className="grid grid-cols-4 gap-7">
        <Card
          border
          className="col-span-4 border-none drop-shadow-none sm:shadow-sm sm:border order-1 lg:col-span-3 lg:order-none sm:p-16"
        >
          <Suspense fallback={<LoadingSpinner centerParent />}>
            <ProductBox />
          </Suspense>
        </Card>
        <Card className="grid grid-cols-4 gap-7 lg:block col-span-4 lg:col-span-1">
          <BoxDashboard
            component={<CalendarSvg className="ml-4 shrink-0 w-8 md:w-12" />}
            title={persianDayLabel()}
            description={persianDateAndNumber()}
          />
          <BoxDashboard
            component={
              <LoadingUpdateSvg className="ml-4 shrink-0 w-8 md:w-12" />
            }
            title="به روزرسانی قوانین"
            description={
              user?.last_login ? persianDateAndNumber(user?.last_login) : '-'
            }
            className=""
          />
          <div className="hidden lg:block">
            <Typography
              className="mb-2 "
              size="body3"
              color="black"
              weight="bold"
            >
              اعلان ها
            </Typography>
            <Card
              className="h-96 mb-5"
              border
              borderColor="neutral_light"
              rounded="md"
              shadow="sm"
            >
              <div className="flex justify-end flex-col w-full h-full p-7">
                <Typography
                  color="neutral"
                  size="body5"
                  weight="normal"
                  className="w-full p-3 bg-neutral-100 rounded-lg mb-3"
                >
                  ورود با موفقیت انجام شد.
                </Typography>
                <Typography
                  color="neutral"
                  size="body5"
                  weight="normal"
                  className="w-full p-3 bg-neutral-100 rounded-lg mb-3"
                >
                  خطا در اضافه کردن قانون.
                </Typography>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
