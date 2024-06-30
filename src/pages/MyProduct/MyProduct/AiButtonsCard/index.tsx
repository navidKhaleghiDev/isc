import { Card, Typography } from '@ui/atoms';

import { ROUTES_PATH } from '@src/routes/routesConstants';
import numberOne from '@iconify-icons/ph/number-one';
import numberTwo from '@iconify-icons/ph/number-two';
import numberThree from '@iconify-icons/ph/number-three';
import { aiEndPoint } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import useSWR from 'swr';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { IServerResponse } from '@src/types/services';
import { IResponseAllObjectsInfo } from '@src/services/client/ai/types';
import { LinkButton } from '@ui/atoms/LinkButton';

export function AiButtonsCard() {
  const { data, isLoading } = useSWR<IServerResponse<IResponseAllObjectsInfo>>(
    aiEndPoint('all_objects_info'),
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );

  if (isLoading) {
    return <LoadingSpinner centerParent />;
  }

  return (
    <Card color="neutral" className="w-full text-center">
      <Typography color="teal" size="h5" className="my-1">
        سرویس هوش مصنوعی
      </Typography>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <LinkButton
          link={ROUTES_PATH.myProductAiListener}
          fullWidth
          label="آنالیز کننده"
          size="lg"
          startIcon={numberOne}
          disabled={!data?.data?.has_listener}
          skip={!data?.data?.has_listener}
        />

        <LinkButton
          link={ROUTES_PATH.myProductAiLearner}
          fullWidth
          label="یادگیری داده"
          size="lg"
          startIcon={numberTwo}
          disabled={!data?.data?.has_learner}
          skip={!data?.data?.has_learner}
        />
        <LinkButton
          link={ROUTES_PATH.myProductAiDetector}
          fullWidth
          label="تشخیص حمله"
          size="lg"
          startIcon={numberThree}
          disabled={!data?.data?.has_detectors}
          skip={!data?.data?.has_detectors}
        />
      </div>
    </Card>
  );
}
