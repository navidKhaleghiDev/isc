import PhHardDrives from '@iconify-icons/ph/hard-drives';
import { BaseIcon, Typography } from '@ui/atoms';

import { LoadingSpinner } from '@ui/molecules/Loading';
import { IHealthCheck } from '@src/services/client/healthCheck/types';
import { useFetch } from '@src/helper/hooks/useFetch';
import { E_HEALTH_CHECK } from '@src/services/client/healthCheck/endpoint';

/**
 * @component
 * @param {DropdownProps} param The properties StatusDropdownContent component.
 * @param {Array} param.options The list of options
 * @returns {JSX.Element} render component
 */

const initState: IHealthCheck = {
  ids: false,
  ips: false,
  monitoringEngine: false,
  monitoringUi: false,
  shippingLogs: false,
};

function statusStyle(value: boolean | string) {
  if (value === true) {
    return {
      background: 'bg-teal-200',
      text: 'text-teal-500',
    };
  }
  if (value === 'expired') {
    return {
      background: 'bg-red-100',
      text: 'text-red-500',
    };
  }

  return {
    background: 'bg-neutral-100',
    text: 'text-neutral-500',
  };
}
export function StatusDropdownContent(): JSX.Element {
  const { data, loading } = useFetch<IHealthCheck>(E_HEALTH_CHECK, initState);

  return (
    <div className="absolute top-full left-2 z-50">
      <div className="flex flex-col justify-center items-center shadow-sm rounded-lg sm:rounded-[1.25rem] w-40 h-[12rem] sm:w-64 sm:h-[18.5rem] bg-white">
        {!loading ? (
          data &&
          Object.entries(data).map(([key, value]) => {
            const statusClass = statusStyle(value);

            return (
              <div
                key={key}
                className={`p-3 rounded-lg w-[8.75rem] h-6 sm:w-[12.1rem] sm:h-8 flex items-center cursor-default my-[0.188rem] ${statusClass.background} }`}
              >
                <BaseIcon
                  icon={PhHardDrives}
                  className={`ml-[1.1rem] ${statusClass.text} text-xs sm:text-base`}
                />
                <Typography
                  className={`${statusClass.text} text-xs sm:text-base`}
                >
                  {key}
                </Typography>
              </div>
            );
          })
        ) : (
          <LoadingSpinner centerParent />
        )}
      </div>
    </div>
  );
}
