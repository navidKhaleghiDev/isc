import { ButtonState } from '@src/pages/Services/Rules/types';
import { useGet } from '@src/services/http/httpClient';
import { IRules, ResponseSwr } from '@src/services/client/rules/types';
import { E_RULES_LIST } from '@src/services/client/rules/endpoint';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';
import { IProduct } from '@src/services/client/users/types';
import { useUserContext } from '@context/user/userContext';
import { RulesCard } from './RulesCard';
import { NoResult } from '../NoResult';
import { rulesListData } from './dataMock';
import { NotHaveDeviceSerial } from '../NotHaveDeviceSerial';

type PropsType = {
  buttonState: ButtonState;
};
export function RulesList({ buttonState }: PropsType) {
  const { user } = useUserContext();

  const { data: allData } = useGet<ResponseSwr<IRules[]>>(
    buttonState === 'all' ? E_RULES_LIST : null
  );

  const { data: suggestData } = useGet<ResponseSwr<IProduct>>(
    buttonState === 'suggest' && user?.device_serial ? E_USERS_PRODUCT : null
  );

  const rules =
    suggestData?.data.recommended_rules || allData?.data || rulesListData;

  if (!user?.device_serial && buttonState === 'suggest') {
    return <NotHaveDeviceSerial title="قوانین پیشنهادی" />;
  }

  return (
    <div className="w-full h-full mt-8">
      {rules.length > 0 ? (
        rules.map((item: IRules) => <RulesCard key={item.id} rule={item} />)
      ) : (
        <NoResult />
      )}
    </div>
  );
}
