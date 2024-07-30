/* eslint-disable no-nested-ternary */

import { useGet } from '@src/services/http/httpClient';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';
import { E_RULES_MY_RULES } from '@src/services/client/rules/endpoint';
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

/**
 * MyRulesList Component
 *
 * This component fetches and displays a list of user's rules.
 * It handles loading state, no result state, and displays each rule using MyRulesCard component.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered MyRulesList component.
 */

export function MyRulesList() {
  const { data, mutate, isLoading } =
    useGet<ResponseSwr<IMyRule[]>>(E_RULES_MY_RULES);

  const checkedRulesList = useCheckRuleVersion(data?.data);

  const handleMutate = () => {
    mutate();
  };

  return (
    <div className="w-full grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[30px] gap-y-5 mt-[18px] md:mt-9">
      <MyRulesCard mutateMyRulesList={handleMutate} myRule={headerItem} />
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
