/* eslint-disable no-nested-ternary */

import { useGet } from '@src/services/http/httpClient';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';
import { E_RULES_MY_RULES } from '@src/services/client/rules/endpoint';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { NoResult } from '@ui/molecules/NoResult';

import { MyRulesCard } from './MyRulesCard';
import { useCheckRuleVersion } from './hook/useCheckedRuleVersion';

// const headerItem: any = {
//   rule_name: 'نام قانون',
//   created_at: 'تاریخ ثبت ',
//   creator: {
//     email: 'سازنده',
//   },
// };

type TMyRulesListProp = {
  searchValue?: string;
};

/**
 * MyRulesList Component
 *
 * This component fetches and displays a list of user's rules.
 * It handles loading state, no result state, and displays each rule using MyRulesCard component.
 *
 * @component
 * @param {searchValue}  prop.searchValue search value
 * @returns {JSX.Element} The rendered MyRulesList component.
 */

export function MyRulesList({ searchValue }: TMyRulesListProp): JSX.Element {
  const { data, mutate, isLoading } =
    useGet<ResponseSwr<IMyRule[]>>(E_RULES_MY_RULES);

  const checkedRulesList = useCheckRuleVersion(data?.data);

  const handleMutate = () => {
    mutate();
  };
  const filterData = checkedRulesList.filter((item) =>
    item.rule_name
      .toLocaleLowerCase()
      .includes(searchValue?.toLocaleLowerCase() as string)
  );

  console.log(isLoading);
  return (
    <div className="w-full sm:grid grow items-center justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-5 mt-9">
      {isLoading ? (
        <LoadingSpinner />
      ) : filterData.length > 0 ? (
        filterData.map((item) => (
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
