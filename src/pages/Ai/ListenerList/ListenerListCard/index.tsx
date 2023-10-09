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
import { NotCompletedAuth } from '@ui/molecules/NotCompletedAuth';
import { LoadingWrapper } from '@ui/molecules/Loading/LoadingWrapper';
import Pagination from '@ui/molecules/Pagination';
import { NoResult } from '@ui/molecules/NoResult';
import { PageBackButton } from '@ui/atoms/BackButton';

import useSWR from 'swr';
import { PaginationResponseSwr } from '@src/types/services';
import { E_AI_MY_LISTENERS_PAGINATION } from '@src/services/client/ai/endpoint';
import { IMyListeners } from '@src/services/client/ai/types';
import { http } from '@src/services/http';
import { ListenerCard } from './ListenerCard';

type PropsType = {
  buttonState: ButtonState;
  searchValue: string;
};

const headerItem: Partial<Record<keyof IMyListeners, string>> = {
  id: 'آیدی',
  protocol: 'پروتکل',
  interface: 'رابط',
  port: 'پورت',
  is_active: 'وضعیت', // انجام شده فالس
  created_at: 'تاریخ شروع',
  stoped_at: 'تاریخ پایان',
};

const LIMIT_MU_LISTENER_LIST = 3;

export function ListenerListCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   if (searchValue !== search) {
  //     setCurrentPage(1);
  //     setSearch(searchValue);
  //   }
  // }, [search, searchValue]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data, isLoading } = useSWR<PaginationResponseSwr<IMyListeners[]>>(
    E_AI_MY_LISTENERS_PAGINATION({
      page: currentPage,
      pageSize: LIMIT_MU_LISTENER_LIST,
      filter: search,
    }),
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );
  const list = data?.data?.results || [];
  const countPage = data?.data?.count || 0;

  return (
    <LoadingWrapper isLoading={isLoading}>
      <div className="w-full">
        {list.length > 0 ? (
          <>
            <ListenerCard isHeader item={headerItem} />
            {list.map((item: IMyListeners) => (
              <ListenerCard key={item.id} item={item} />
            ))}
            {!!countPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={Math.round(countPage / LIMIT_MU_LISTENER_LIST)}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <NoResult />
        )}
      </div>
      <div className="absolute bottom-10 left-10">
        <PageBackButton withLabel />
      </div>
    </LoadingWrapper>
  );
}
