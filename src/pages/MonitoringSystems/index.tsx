import { BaseButton, Card, Typography } from '@ui/atoms';

export function MonitoringSystemsGuidePage() {
  return (
    <div className="w-full grid grid-cols-2 gap-[1.875rem] h-full">
      <Card
        border
        rounded="md"
        shadow="sm"
        className="p-[1.875rem] h-[10.62rem] w-full flex flex-col justify-between"
      >
        <Typography type="h3" size="body1" weight="bold">
          سیستم نظارتی 1
        </Typography>
        <div className="self-end">
          <BaseButton label="ورود به سیستم" size="lg" />
        </div>
      </Card>
    </div>
  );
}
