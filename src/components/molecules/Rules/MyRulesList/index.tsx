/* eslint-disable no-nested-ternary */

import { useGet } from '@src/services/http/httpClient';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';
import { E_RULES } from '@src/services/client/rules/endpoint';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { NoResult } from '@ui/molecules/NoResult';

import { MyRulesCard } from './MyRulesCard';
import { useCheckRuleVersion } from './hook/useCheckedRuleVersion';

const headerItem: any = {
  rule_name: 'نام قانون',
  created_at: 'تاریخ ثبت ',
  creator: {
    email: 'سازنده',
  },
};

export function MyRulesList() {
  const { data, mutate, isLoading } = useGet<ResponseSwr<IMyRule[]>>(
    E_RULES('my_rules')
  );

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
