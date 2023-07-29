/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGet } from '@src/services/http/httpClient';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';
import { E_RULES_MY_RULES } from '@src/services/client/rules/endpoint';
import { MyRulesCard } from './MyRulesCard';
import { useCheckRuleVersion } from './hook/useCheckedRuleVersion';
import { NoResult } from '../NoResult';
import { LoadingSpinner } from '../Loading';

const headerItem: any = {
  rule_name: 'نام قانون',
  created_at: 'تاریخ ثبت ',
  creator: {
    email: 'سازنده',
  },
};

export function MyRulesList() {
  const { data, mutate, isLoading } =
    useGet<ResponseSwr<IMyRule[]>>(E_RULES_MY_RULES);

  const checkedRulesList = useCheckRuleVersion(data?.data);

  const handleMutate = () => {
    mutate();
  };

  return (
    <div className="w-full mt-8">
      <MyRulesCard
        mutateMyRulesList={handleMutate}
        myRule={headerItem}
        isHeader
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : checkedRulesList.length > 0 ? (
        checkedRulesList.map((item) => (
          <MyRulesCard
            key={item.id}
            mutateMyRulesList={handleMutate}
            myRule={item}
          />
        ))
      ) : (
        <NoResult />
      )}
    </div>
  );
}
