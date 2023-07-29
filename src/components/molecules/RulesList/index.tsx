/* eslint-disable @typescript-eslint/ban-ts-comment */
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
import { RulesCard } from './RulesCard';
import { NoResult } from '../NoResult';
import { NotCompletedAuth } from '../NotCompletedAuth';
import { Pagination } from '../Pagination';
import { LoadingWrapper } from '../Loading/LoadingWrapper';

type PropsType = {
  buttonState: ButtonState;
  searchValue: string;
};

const LIMIT_RULES_LIST = 8;

export function RulesList({ buttonState, searchValue }: PropsType) {
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
      <div className="w-full h-full mt-8">
        {rules.length > 0 ? (
          <>
            {rules.map((item: IRules) => (
              <RulesCard key={item.id} rule={item} />
            ))}
            {!!countPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={Math.round(countPage / LIMIT_RULES_LIST)}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <NoResult />
        )}
      </div>
    </LoadingWrapper>
  );
}
