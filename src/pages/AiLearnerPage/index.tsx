import { ContainerDashboard } from '@ui/Templates/ContainerDashboard';
import { PaginationResponseSwr } from '@src/types/services';
import { EAiEndpoints, IMyListeners } from '@src/services/client/ai/types';
import useSWR from 'swr';
import { PageBackButton } from '@ui/atoms/BackButton';
import { aiEndpoint } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { Notification, Typography } from '@ui/atoms';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';

import { StartLearner } from './StartLearner';
import { LearnerList } from './LearnerList';

export function AiLearnerPage() {
  const { data, isLoading } = useSWR<PaginationResponseSwr<IMyListeners[]>>(
    aiEndpoint(EAiEndpoints.MY_LISTENER),
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );

  if (isLoading) {
    return <LoadingSpinner centerParent />;
  }

  const listenerList = data?.data.results || [];

  return (
    <ContainerDashboard>
      {listenerList.length < 1 ? (
        <div className="w-full flex flex-col items-center">
          <Notification
            title="تا قبل از ایجاد یک آنالیزور ، شما نمیتوانید به این بخش دسترسی داشته باشید."
            type="error"
          />
          <div className="">
            <Link to={ROUTES_PATH.myProductAiListener}>
              <Typography>ایجاد یک آنالیزور</Typography>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <StartLearner />
          <LearnerList />
        </>
      )}

      <div className="absolute bottom-10 left-10">
        <PageBackButton withLabel />
      </div>
    </ContainerDashboard>
  );
}
