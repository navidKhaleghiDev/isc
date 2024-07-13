import { useState } from 'react';
import { Typography } from '@ui/atoms';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { DatePicker, convertI2ToAD } from '@ui/atoms/Inputs/DatePicker';
import useSWR from 'swr';
import { PaginationResponseSwr } from '@src/types/services';
import { aiEndpoint } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { useForm } from 'react-hook-form';
import { LoadingWrapper } from '@ui/molecules/Loading/LoadingWrapper';
import Pagination from '@ui/molecules/Pagination';
import { EAiEndpoints, IMyDetector } from '@src/services/client/ai/types';
import { NoResult } from '@ui/molecules/NoResult';

import { IFilterDetectorValues } from './types';
import { DetectorCard } from './DetectorListCard/DetectorCard';
import { DETECTOR_LABEL } from '../constant';

const headerItem: Partial<Record<keyof IMyDetector, string>> = {
  id: DETECTOR_LABEL,
  is_running: 'وضعیت',
  created_at: 'تاریخ شروع',
  stoped_at: 'تاریخ پایان',
};

const LIMIT_MU_LISTENER_LIST = 3;

export function DetectorList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const { control, watch } = useForm<IFilterDetectorValues>({
    mode: 'onChange',
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data, isLoading, mutate } = useSWR<
    PaginationResponseSwr<IMyDetector[]>
  >(
    aiEndpoint(EAiEndpoints.MY_DETECTION, undefined, {
      page: currentPage,
      pageSize: LIMIT_MU_LISTENER_LIST,
      search,
      created_at: convertI2ToAD(watch('startDate'), 'YYYY-MM-DD'),
      stoped_at: convertI2ToAD(watch('endDate'), 'YYYY-MM-DD'),
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
    <div className="w-full">
      <div className="text-center mb-4">
        <Typography color="teal" size="h4">
          لیست شناسایی کنندگان
        </Typography>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4 gap-4 flex ">
          <DatePicker
            control={control}
            placeholder="تاریخ شروع"
            id="startData"
            name="startDate"
            fullWidth
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <DatePicker
            control={control}
            placeholder="تاریخ پایان"
            id="endData"
            name="endDate"
            startIcon="ph:x"
            fullWidth
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <SearchInput onChange={handleOnSearch} value={search} />
        </div>
      </div>

      <DetectorCard isHeader item={headerItem} />
      <LoadingWrapper isLoading={isLoading}>
        {list.length > 0 ? (
          <>
            {list.map((item: IMyDetector) => (
              <DetectorCard key={item.id} item={item} mutate={mutate} />
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
