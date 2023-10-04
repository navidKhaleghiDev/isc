import { useFetch } from '@src/helper/hooks/useFetch';
import { E_HEALTH_CHECK } from '@src/services/client/healthCheck/endpoint';
import { IHealthCheck } from '@src/services/client/healthCheck/types';
import { Typography } from '@ui/atoms';
import { Accordion } from '@ui/atoms/Accordion';
import { CircleBg } from '@ui/atoms/CircleBg';
import { LoadingSpinner } from '@ui/molecules/Loading';

const initState: IHealthCheck = {
  ids: false,
  ips: false,
  monitoringEngine: false,
  monitoringUi: false,
  shippingLogs: false,
};

function LabelsStatus() {
  const { data, loading } = useFetch<IHealthCheck>(E_HEALTH_CHECK, initState);
  return (
    <div className="w-full">
      {!loading ? (
        data &&
        Object.entries(data).map(([key, value]) => {
          return (
            <div key={key} className="flex justify-between items-center">
              <CircleBg bgColor={value ? 'bg-green-600' : 'bg-red-600'} />
              <Typography className="text-left" color="neutral">
                {key}
              </Typography>
            </div>
          );
        })
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export function StatusServices() {
  return (
    <Accordion
      id="status"
      title={<Typography color="teal">وضعیت سرویس ها</Typography>}
      content={<LabelsStatus />}
      classNameTittle="border border-teal-600"
    />
  );
}
