import { BaseButton, Card, Typography, Notification } from '@ui/atoms';

export function DashboardPage() {
  return (
    <div className="w-full flex flex-col h-full p-16">
      <div className="self-start flex flex-col w-full">
        <div className="flex w-full justify-between px-3 items-center h-16 bg-neutral-100 rounded-md">
          <Typography color="primary" size="md" weight="bold">
            چهارشنبه
          </Typography>
          <Typography color="primary" size="md" weight="bold">
            23 . اردیبهشت . 1402
          </Typography>
        </div>
        <BaseButton
          className="self-start w-96 mt-3"
          label="لیست مشتریان"
          endIcon="clarity:users-line"
        />
      </div>
      <div className="mt-auto">
        <Typography className="mb-2" color="primary" weight="bold">
          اعلان ها
        </Typography>
        <Card className="h-96" type="gray">
          <div className="flex flex-col w-full p-5">
            <Notification
              type="error"
              title="به روز رسانی صفحه با خطا رو به رو شد."
            />
            <Notification type="success" title="ورود با موفقیت انجام شد." />
          </div>
        </Card>
      </div>
    </div>
  );
}
