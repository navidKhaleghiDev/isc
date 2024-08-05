import { Typography } from '@ui/atoms';
import { ROUTES_PATH } from '@src/routes/routesConstants';

import { MonitoringSystemCard } from './MonitoringSystemCard';

export function MonitoringSystemsGuidePage() {
  return (
    <div className="flex flex-col gap-[3.125rem]">
      <Typography size="body1" weight="medium" className="block sm:hidden">
        سیستم نظارتی امنیتی
      </Typography>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[1.875rem] h-full">
        <MonitoringSystemCard
          label="سیستم نظارتی امنیتی 1 "
          refUrl={ROUTES_PATH.monitoringSystemsOne}
        />
        <MonitoringSystemCard
          label="سیستم نظارتی امنیتی 2"
          refUrl={ROUTES_PATH.monitoringSystemsTow}
        />
      </div>
    </div>
  );
}
