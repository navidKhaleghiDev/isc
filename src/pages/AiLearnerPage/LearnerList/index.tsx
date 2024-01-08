import { useState } from 'react';
import { Typography } from '@ui/atoms';
import { DatePicker, convertI2ToAD } from '@ui/atoms/Inputs/DatePicker';
import useSWR from 'swr';
import { PaginationResponseSwr } from '@src/types/services';
import { E_AI_MY_LEARNER_PAGINATION } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { useForm } from 'react-hook-form';
import { LoadingWrapper } from '@ui/molecules/Loading/LoadingWrapper';
import Pagination from '@ui/molecules/Pagination';
import { IMyLearner } from '@src/services/client/ai/types';
import { NoResult } from '@ui/molecules/NoResult';

import { IStartListenerValues } from './types';
import { LearnerCard } from './LearnerListCard/LearnerCard';
import { ListenerDropDown } from '../ListenerDropDown';

const headerItem: Partial<Record<keyof IMyLearner, string>> = {
  created_at: 'نام',
  is_finished: 'وضعیت', // انجام شده True
  time_from: 'تاریخ شروع',
  time_to: 'تاریخ پایان',
};

const LIMIT_MU_LISTENER_LIST = 3;

export function LearnerList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { control, watch } = useForm<IStartListenerValues>({
    mode: 'onChange',
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const { data, isLoading, mutate } = useSWR<
    PaginationResponseSwr<IMyLearner[]>
  >(
    E_AI_MY_LEARNER_PAGINATION({
      page: currentPage,
      pageSize: LIMIT_MU_LISTENER_LIST,
      time_from: convertI2ToAD(watch('startDate'), 'YYYY-MM-DD'),
      time_to: convertI2ToAD(watch('endDate'), 'YYYY-MM-DD'),
      listener_id: watch('listener_id'),
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
    <div className="w-full mt-8">
      <div className="text-center mb-4">
        <Typography color="teal" size="h4">
          لیست مدل های آموزش دیده
        </Typography>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <ListenerDropDown control={control} withoutLabel />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <DatePicker
            control={control}
            placeholder="تاریخ شروع"
            id="startData"
            name="startDate"
            format="YYYY-MM-DD"
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
            format="YYYY-MM-DD"
            fullWidth
          />
        </div>
      </div>

      <LearnerCard isHeader item={headerItem} mutate={mutate} />
      <LoadingWrapper isLoading={isLoading}>
        {list.length > 0 ? (
          <>
            {list.map((item: IMyLearner) => (
              <LearnerCard key={item.id} item={item} />
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
