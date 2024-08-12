import PhHardDrives from '@iconify-icons/ph/hard-drives';
import { BaseIcon } from '@ui/atoms';

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
export function StatusDropdownContent(): JSX.Element {
  const { data, loading } = useFetch<IHealthCheck>(E_HEALTH_CHECK, initState);

  // const statusStyle = (status: string) => {
  //   switch (status) {
  //     case 'expired':
  //       return 'bg-red-100 text-red-500 text-xs sm:text-base';
  //     case 'disable':
  //       return 'bg-neutral-100 text-neutral-500 text-xs sm:text-base';
  //     case 'active':
  //       return 'bg-teal-200	 text-teal-500 text-xs sm:text-base';
  //     default:
  //       return 'bg-neutral-100 text-neutral-500 text-xs sm:text-base';
  //   }
  // };
  return (
    <div className="absolute top-full left-2  z-50">
      <div className="flex flex-col justify-center items-center mt-2.5 shadow-md rounded-lg sm:rounded-[1.25rem] w-40 h-[7.25rem] sm:w-64 sm:h-[13.75rem] bg-white">
        {!loading ? (
          data &&
          Object.entries(data).map(([key, value]) => {
            return (
              <div key={key}>
                <div
                  className={`p-3 rounded-lg w-[8.75rem] h-6 sm:w-[12.1rem] sm:h-10 flex items-center cursor-default ${
                    value ? 'bg-teal-200' : 'bg-red-100'
                  } }`}
                >
                  <BaseIcon icon={PhHardDrives} className="ml-[1.1rem]" />
                  {/* {key} */}
                </div>
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
