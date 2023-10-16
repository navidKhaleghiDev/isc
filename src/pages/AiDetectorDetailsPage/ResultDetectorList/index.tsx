import { useState } from 'react';
// import { Typography } from '@ui/atoms';
// import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
// import { DatePicker, convertI2ToAD } from '@ui/atoms/Inputs/DatePicker';
import useSWR from 'swr';
import { PaginationResponseSwr } from '@src/types/services';
import { E_AI_MY_DETECTOR_DATA } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
// import { useForm } from 'react-hook-form';
import { LoadingWrapper } from '@ui/molecules/Loading/LoadingWrapper';
import Pagination from '@ui/molecules/Pagination';
import { IMyDetectorData } from '@src/services/client/ai/types';
import { NoResult } from '@ui/molecules/NoResult';

// import { IFilterDetectorValues } from './types';
import { ResultDetectorCard } from './ResultDetectorCard';

const headerItem: Partial<Record<keyof IMyDetectorData, string>> = {
  id: 'id',
  time: 'time',
  src_ip: 'آی پی مبدا',
  dst_ip: 'آی پی مقصد',
  src_port: 'پورت مبدا',
  dst_port: 'پورت مقصد',
  src_mac: 'مک آدرس مبدا',
  dst_mac: 'مک آدرس مقصد',
  fc_request: 'نام درخواست',
  is_attack: 'وضعیت شناسایی',
};

const LIMIT_MU_LISTENER_LIST = 3;

export function ResultDetectorList({ detectionId }: { detectionId?: number }) {
  const [currentPage, setCurrentPage] = useState(1);
  // const [search, setSearch] = useState('');
  // const { control, watch } = useForm<IFilterDetectorValues>({
  //   mode: 'onChange',
  // });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data, isLoading, mutate } = useSWR<
    PaginationResponseSwr<IMyDetectorData[]>
  >(
    detectionId
      ? E_AI_MY_DETECTOR_DATA(detectionId, {
          page: currentPage,
          pageSize: LIMIT_MU_LISTENER_LIST,
          // search,
          // created_at: convertI2ToAD(watch('startDate')),
          // stoped_at: convertI2ToAD(watch('endDate')),
        })
      : null,
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );
  const list = data?.data?.results || [];
  const countPage = data?.data?.count || 0;

  // const handleOnSearch = (value: string) => {
  //   setSearch(value);
  // };

  return (
    <div className="w-full">
      {/* <div className="grid grid-cols-12 gap-4">
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
      </div> */}

      <ResultDetectorCard isHeader item={headerItem} />
      <LoadingWrapper isLoading={isLoading}>
        {list.length > 0 ? (
          <>
            {list.map((item: IMyDetectorData) => (
              <ResultDetectorCard key={item.id} item={item} />
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
