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
import { useState } from 'react';
// import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { RulesCard } from './RulesCard';
import { NoResult } from '../NoResult';
import { NotCompletedAuth } from '../NotCompletedAuth';
import { Pagination } from '../Pagination';

type PropsType = {
  buttonState: ButtonState;
};

const LIMIT_RULES_LIST = 10;

export function RulesList({ buttonState }: PropsType) {
  const { user } = useUserContext();
  const [currentPage, setCurrentPage] = useState(1);
  // const [search, setSearch] = useState('');

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // const handleOnSearch = (value: string) => {
  //   setSearch(value);
  // };

  const { data: allData } = useGet<ResponseSwr<IResponseRules>>(
    buttonState === 'all'
      ? E_RULES_LIST({
          pageSize: LIMIT_RULES_LIST,
          page: currentPage,
          search: '',
        })
      : null
  );

  const { data: suggestData } = useGet<ResponseSwr<IProduct>>(
    buttonState === 'suggest' && user?.device_serial ? E_USERS_PRODUCT : null
  );

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
    <div className="w-full h-full mt-8">
      {rules.length > 0 ? (
        <>
          {/* <SearchInput onChange={handleOnSearch} value={search} /> */}
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
  );
}
