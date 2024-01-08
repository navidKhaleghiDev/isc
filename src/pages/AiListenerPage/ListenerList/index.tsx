import { useState } from 'react';
import { Typography } from '@ui/atoms';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { convertI2ToAD, DatePicker } from '@ui/atoms/Inputs/DatePicker';
import useSWR from 'swr';
import { PaginationResponseSwr } from '@src/types/services';
import { E_AI_MY_LISTENERS_PAGINATION } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { useForm } from 'react-hook-form';
import { LoadingWrapper } from '@ui/molecules/Loading/LoadingWrapper';
import Pagination from '@ui/molecules/Pagination';
import { IMyListeners } from '@src/services/client/ai/types';
import { NoResult } from '@ui/molecules/NoResult';

import { IStartListenerValues } from './types';
import { ListenerCard } from './ListenerListCard/ListenerCard';
import { ProtocolDropDown } from '../ProtocolDropDown';

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

export function ListenerList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const { control, watch } = useForm<IStartListenerValues>({
    mode: 'onChange',
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const { data, isLoading, mutate } = useSWR<
    PaginationResponseSwr<IMyListeners[]>
  >(
    E_AI_MY_LISTENERS_PAGINATION({
      page: currentPage,
      pageSize: LIMIT_MU_LISTENER_LIST,
      search,
      created_at: convertI2ToAD(watch('startDate'), 'YYYY-MM-DD'),
      stoped_at: convertI2ToAD(watch('endDate'), 'YYYY-MM-DD'),
      protocol: watch('protocol'),
    }),
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );
  const list = data?.data?.results || [];
  const countPage = data?.data?.count || 0;

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="w-full mt-8">
      <div className="text-center mb-4">
        <Typography color="teal" size="h4">
          لیست آنالیز کنندگان
        </Typography>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <ProtocolDropDown control={control} withoutLabel />
        </div>

        <div className="col-span-12 lg:col-span-4 gap-4 flex ">
          <DatePicker
            control={control}
            placeholder="تاریخ شروع"
            id="startData"
            name="startDate"
            format="YYYY/MM/DD"
            fullWidth
          />
          <DatePicker
            control={control}
            placeholder="تاریخ پایان"
            id="endData"
            name="endDate"
            format="YYYY/MM/DD"
            fullWidth
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <SearchInput onChange={handleOnSearch} value={search} />
        </div>
      </div>

      <ListenerCard isHeader item={headerItem} />
      <LoadingWrapper isLoading={isLoading}>
        {list.length > 0 ? (
          <>
            {list.map((item: IMyListeners) => (
              <ListenerCard key={item.id} item={item} mutate={mutate} />
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
      </LoadingWrapper>
    </div>
  );
}
