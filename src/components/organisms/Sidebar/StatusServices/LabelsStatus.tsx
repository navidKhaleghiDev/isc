import { useFetch } from '@src/helper/hooks/useFetch';
import { E_HEALTH_CHECK } from '@src/services/client/healthCheck/endpoint';
import { IHealthCheck } from '@src/services/client/healthCheck/types';
import { Typography } from '@ui/atoms';
import { CircleBg } from '@ui/atoms/CircleBg';
import { LoadingSpinner } from '@ui/molecules/Loading';

const initState: IHealthCheck = {
  ids: false,
  ips: false,
  monitoringEngine: false,
  monitoringUi: false,
  shippingLogs: false,
};

/**
 * LabelsStatus Component
 *
 * This component fetches health check data and displays the status of various services.
 * Each service's status is represented by a colored circle (green for active, red for inactive)
 * and a label indicating the service name.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered LabelsStatus component.
 */

export function LabelsStatus() {
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
        <LoadingSpinner centerParent />
      )}
    </div>
  );
}
