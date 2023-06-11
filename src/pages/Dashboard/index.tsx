import {
  BaseButton,
  Card,
  Typography,
  Notification,
  BaseIcon,
} from '@ui/atoms';
import { BoxDashboard } from './BoxDashboard';

export function DashboardPage() {
  return (
    <div className="w-full flex flex-col h-full p-16">
      <div className="grid grid-cols-3 gap-6 mb-16">
        <BoxDashboard
          icon="ph:calendar-check"
          title="چهارشنبه"
          description="23 . اردیبهشت . 1402"
        />
        <BoxDashboard
          icon="ph:sign-in"
          title="آخرین ورود"
          description="23 . اردیبهشت . 1402"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mb-16">
        <div className="col-span-2">
          <Card color="neutral" className="flex justify-end items-center">
            <div className="flex flex-col justify-end items-end ml-4">
              <Typography color="neutral" size="h4">
                Ptoduct name
              </Typography>
              <Typography color="neutral" size="body3">
                Short Description
              </Typography>
            </div>
          </Card>
          <Typography
            color="neutral"
            size="h6"
            className="bg-teal-600 text-white py-1 rounded-md my-4 text-center"
          >
            465656489954165416541564698
          </Typography>
          <div className="grid grid-cols-3 gap-6">
            <Card
              color="neutral"
              className="flex justify-start items-center pr-4"
            >
              <div className="flex flex-col justify-end items-start ml-4">
                <Typography color="teal" size="h6">
                  تاریخ ثبت محصول
                </Typography>
                <Typography color="neutral" size="body3">
                  23 . اردیبهشت . 1402
                </Typography>
              </div>
            </Card>
            <Card
              color="neutral"
              className="flex justify-start items-center pr-4"
            >
              <div className="flex flex-col justify-end items-start ml-4">
                <Typography color="teal" size="h6">
                  تاریخ انقضا لایسنس
                </Typography>
                <Typography color="neutral" size="body3">
                  23 . اردیبهشت . 1402
                </Typography>
              </div>
            </Card>
            <Card
              color="neutral"
              className="flex justify-start items-center pr-4"
            >
              <div className="flex flex-col justify-end items-start ml-4">
                <Typography color="teal" size="h6">
                  تعداد قوانین
                </Typography>
                <Typography color="neutral" size="body3">
                  20
                </Typography>
              </div>
            </Card>
          </div>
        </div>

        <Card
          color="neutral"
          className="flex justify-center items-center bg-neutral-200"
        >
          <BaseIcon
            icon="mdi:panorama-variant-outline"
            size="xxl"
            className="text-neutral-300"
          />
        </Card>
      </div>

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
