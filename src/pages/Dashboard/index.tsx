import { useUserContext } from '@context/user/userContext';
import {
  persianDayLabel,
  persianDateNumber,
} from '@src/helper/utils/dateUtils';
import { BoxDashboard } from './BoxDashboard';
import { ProductBox } from './ProductBox';

export function DashboardPage() {
  const { user } = useUserContext();
  return (
    <div className="w-full flex flex-col h-full p-16">
      <div className="grid grid-cols-3 gap-6 mb-16">
        <BoxDashboard
          icon="ph:calendar-check"
          title={persianDayLabel()}
          description={persianDateNumber()}
        />
        <BoxDashboard
          icon="ph:sign-in"
          title="آخرین ورود"
          description={
            user?.last_login ? persianDateNumber(user?.last_login) : '-'
          }
        />
      </div>
      <ProductBox />
    </div>
  );
}
