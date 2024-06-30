import { ContainerDashboard } from '@ui/Templates/ContainerDashboard';
import { PageBackButton } from '@ui/atoms/BackButton';

import { PaginationResponseSwr } from '@src/types/services';
import { IMyListeners } from '@src/services/client/ai/types';
import useSWR from 'swr';
import { http } from '@src/services/http';
import { aiEndPoint } from '@src/services/client/ai/endpoint';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { Notification, Typography } from '@ui/atoms';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';

import { StartDetect } from './StartDetect';
import { DetectorList } from './DetectorList';

export function AiDetectorPage() {
  const { data, isLoading } = useSWR<PaginationResponseSwr<IMyListeners[]>>(
    aiEndPoint('my_learner'),
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );

  if (isLoading) {
    return <LoadingSpinner centerParent />;
  }

  const learnerList = data?.data.results || [];

  return (
    <ContainerDashboard>
      {learnerList.length < 1 ? (
        <div className="w-full flex flex-col items-center">
          <Notification
            title="تا قبل از ایجاد یک تحلیل کننده ، شما نمیتوانید به این بخش دسترسی داشته باشید."
            type="error"
          />
          <div className="">
            <Link to={ROUTES_PATH.myProductAiLearner}>
              <Typography>ایجاد یک تحلیل کننده</Typography>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <StartDetect />
          <DetectorList />
        </>
      )}

      <div className="absolute bottom-10 left-10">
        <PageBackButton withLabel />
      </div>
    </ContainerDashboard>
  );
}
