import { Card, Typography } from '@ui/atoms';
import { ContainerDashboard } from '@ui/Templates/ContainerDashboard';
import { useLocation } from 'react-router-dom';
import { PageBackButton } from '@ui/atoms/BackButton';
import { LoadingSpinner } from '@ui/molecules/Loading';
import useSWR from 'swr';
import { aiEndpoint } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import { EAiEndpoints, IMyLearner } from '@src/services/client/ai/types';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';

import { ChartImageLearningDiagram } from './ChartImageLearningDiagram';
import { LEARNER_NAME } from '../AiLearnerPage/LearnerList/LearnerListCard/LearnerCard';

function CardSimpleBox({ label, value, className }: any) {
  return (
    <Card
      color="neutral"
      className={`flex items-center px-4 h-8 ${className} `}
    >
      <div className="flex items-center w-1/3 border-l h-4 border-neutral-400">
        <Typography color="teal" size="h6" className="truncate">
          {label}
        </Typography>
      </div>
      <Typography size="h6" className=" w-2/3 text-center text-neutral-400">
        {value}
      </Typography>
    </Card>
  );
}

export function AiLearnerDetailsPage() {
  const { pathname } = useLocation();
  const slugs = pathname.split('/');
  const id = slugs[3];

  const { data, isLoading } = useSWR<IServerResponse<IMyLearner>>(
    id ? aiEndpoint(EAiEndpoints.MY_LEANER, id) : null,
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );

  if (isLoading) {
    return <LoadingSpinner centerParent />;
  }

  const myLearner: IMyLearner | undefined = data?.data;

  return (
    <ContainerDashboard>
      <Typography size="h3" color="teal" className="text-right ">
        {`${LEARNER_NAME} - ${persianDateAndNumber(myLearner?.created_at)}`}
      </Typography>
      <div className="grid grid-cols-12 gap-4">
        <CardSimpleBox
          label="تعداد داده"
          value={myLearner?.count}
          className="px-4 col-span-12 lg:col-span-4"
          valueColor="teal"
        />
        <CardSimpleBox
          label="تاریخ شروع"
          value={persianDateAndNumber(myLearner?.time_to)}
          className="px-4 col-span-12 lg:col-span-4"
          valueColor="teal"
        />
        <CardSimpleBox
          label="تاریخ پایان "
          value={persianDateAndNumber(myLearner?.time_from)}
          className="px-4 col-span-12 lg:col-span-4"
          valueColor="teal"
        />
        <CardSimpleBox
          label="وضعیت"
          value={
            myLearner?.is_finished === 'True' ? 'انجام شده' : 'در حال انجام'
          }
          className="px-4 col-span-12 lg:col-span-4"
          valueColor="teal"
        />
      </div>

      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-12 lg:col-span-6 lg:ml-6 gap-4">
          <Card className="flex items-center px-4 h-10 bg-yellow-600 mb-2">
            <Typography size="h5" color="white" className="text-center w-full">
              نمودار خطای مدل شما
            </Typography>
          </Card>
          <Card
            color="neutral"
            className="flex items-center justify-between px-4 h-8 mb-2"
          >
            <Typography size="body2" color="yellow">
              {myLearner?.mean_square_error &&
                parseFloat(myLearner?.mean_square_error.toFixed(2))}
            </Typography>
            <Typography size="body2" color="neutral">
              MSE
            </Typography>
          </Card>
          <Card
            color="neutral"
            className="flex items-center justify-between px-4 h-8 mb-2"
          >
            <Typography size="body2" color="yellow">
              {myLearner?.threshold_error &&
                parseFloat(myLearner?.threshold_error.toFixed(2))}
            </Typography>
            <Typography size="body2" color="neutral">
              MSLE
            </Typography>
          </Card>
          <Card
            color="neutral"
            className="flex items-center justify-center px-4 h-40"
          >
            <Typography size="body3" color="neutral" className="text-justify">
              همانطور که در شکل مشاهده می‌کنید، خطا در طول زمان تغییر کرده است.
              می‌توانید با مقایسه نمودار خطا و دو معیار خطای MSE و MSLE با مدل
              های دیگر، بهترین مدل خود را برای انجام تشخیص حمله انتخاب کنید.{' '}
            </Typography>
          </Card>
        </div>
        <Card
          className="col-span-12 lg:col-span-6 gap-4 lg:mr-6 p-2"
          color="neutral"
        >
          <ChartImageLearningDiagram learnerId={myLearner?.id} />
        </Card>
      </div>
      <div className="absolute bottom-10 left-10">
        <PageBackButton withLabel />
      </div>
    </ContainerDashboard>
  );
}
