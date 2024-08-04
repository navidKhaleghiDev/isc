import { ButtonState } from '@src/pages/Services/Rules/types';
import { useGet } from '@src/services/http/httpClient';
import {
  IResponseRules,
  IRules,
  ResponseSwr,
} from '@src/services/client/rules/types';
import { E_RULES_LIST } from '@src/services/client/rules/endpoint';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';
import { IProduct } from '@src/services/client/users/types';
import { useUserContext } from '@context/user/userContext';
import { useEffect, useState } from 'react';
import { NotCompletedAuth } from '@ui/molecules/NotCompletedAuth';
import { LoadingWrapper } from '@ui/molecules/Loading/LoadingWrapper';
import Pagination from '@ui/molecules/Pagination';
import { NoResult } from '@ui/molecules/NoResult';

import { RulesCard } from './RulesCard';

/**
 * Props for RulesList component.
 *
 * @typedef {Object} PropsType
 * @property {ButtonState} buttonState - The state of the button indicating which rules to fetch (all or suggest).
 * @property {string} searchValue - The search value to filter the rules.
 */

type TRulesListProp = {
  buttonState: ButtonState;
  searchValue: string;
};

const LIMIT_RULES_LIST = 16;

/**
 * RulesList Component
 *
 * This component displays a list of rules with pagination and search functionality.
 *
 * @component
 *
 * @param {PropsType} props - Props for RulesList component.
 *
 * @returns {JSX.Element} The rendered RulesList component.
 */

export function RulesList({
  buttonState,
  searchValue,
}: TRulesListProp): JSX.Element {
  const { user } = useUserContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (searchValue !== search) {
      setCurrentPage(1);
      setSearch(searchValue);
    }
  }, [search, searchValue]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data: allData, isLoading: loadingAllData } = useGet<
    ResponseSwr<IResponseRules>
  >(
    buttonState === 'all'
      ? E_RULES_LIST({
          pageSize: LIMIT_RULES_LIST,
          page: search !== searchValue ? 1 : currentPage,
          search,
        })
      : null
  );

  const { data: suggestData, isLoading: loadingSuggestData } = useGet<
    ResponseSwr<IProduct>
  >(buttonState === 'suggest' && user?.device_serial ? E_USERS_PRODUCT : null);

  const rules =
    suggestData?.data.recommended_rules || allData?.data.results || [];
  const countPage = allData?.data?.count || 0;

  if (
    !user?.is_authenticated ||
    (!user?.device_serial && buttonState === 'suggest')
  ) {
    return (
      <NotCompletedAuth
        title="قوانین پیشنهادی"
        isUserAuth={!!user?.is_authenticated}
      />
    );
  }
  return (
    <LoadingWrapper isLoading={loadingAllData || loadingSuggestData}>
      <div className="flex flex-col items-center h-full ">
        <div className="w-full mt-11">
          {rules.length > 0 ? (
            <>
              <div className="w-full grid grid-cols-1 gap-x-[1.87rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-y-5 ">
                {rules.map((item: IRules) => (
                  <RulesCard key={item.id} rule={item} />
                ))}
              </div>
              <div className="hidden sm:block mt-[5.1rem]">
                {!!countPage && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.round(countPage / LIMIT_RULES_LIST)}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </>
          ) : (
            <NoResult />
          )}
        </div>
      </div>
    </LoadingWrapper>
  );
}
