import { Card, Typography } from '@ui/atoms';
import { ContainerDashboard } from '@ui/Templates/ContainerDashboard';
import { useLocation } from 'react-router-dom';
import { PageBackButton } from '@ui/atoms/BackButton';
import { LoadingSpinner } from '@ui/molecules/Loading';
import useSWR from 'swr';
import { aiEndPoint } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import { AiEndPoints, IMyDetector } from '@src/services/client/ai/types';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';

import { DETECTOR_LABEL } from '../AiDetectorPage/constant';
import { ResultDetectorList } from './ResultDetectorList';

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

export function AiDetectorDetailsPage() {
  const { pathname } = useLocation();
  const slugs = pathname.split('/');
  const id = slugs[3];

  const { data, isLoading } = useSWR<IServerResponse<IMyDetector>>(
    id ? aiEndPoint(AiEndPoints.MY_DETECTION, id) : null,
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const myDetector: IMyDetector | undefined = data?.data;

  return (
    <ContainerDashboard>
      <Typography size="h3" color="teal" className="text-right ">
        {`${DETECTOR_LABEL} - ${persianDateAndNumber(myDetector?.created_at)}`}
      </Typography>
      <div className="grid grid-cols-12 gap-4">
        <CardSimpleBox
          label="تحلیل گر"
          value={myDetector?.learner}
          className="px-4 col-span-12 lg:col-span-4"
          valueColor="teal"
        />
        <CardSimpleBox
          label="آنالیز کننده"
          value={myDetector?.listener}
          className="px-4 col-span-12 lg:col-span-4"
          valueColor="teal"
        />
      </div>

      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-12 ">
          <Typography size="h4" color="teal" className="text-right w-full">
            نتایج
          </Typography>
          <ResultDetectorList detectionId={myDetector?.id} />
        </div>
      </div>
      <div className="absolute bottom-10 left-10">
        <PageBackButton withLabel />
      </div>
    </ContainerDashboard>
  );
}
