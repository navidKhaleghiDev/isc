import useSWR from 'swr';
import { aiEndPoint } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import { LoadingSvg } from '@ui/atoms/Svgs/LoadingSvg';

export function ChartImageLearningDiagram({ learnerId }: any) {
  const { data, isLoading } = useSWR<IServerResponse<{ plot: string }>>(
    learnerId ? aiEndPoint('model_learning_diagram', learnerId) : null,
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );
  return (
    <div className="w-full h-full flex justify-center items-center">
      {isLoading ? (
        <LoadingSvg />
      ) : (
        <img
          src={`data:image/png;base64,${data?.data?.plot}`}
          alt="Generated Plot"
          className="lg:h-64 h-auto"
        />
      )}
    </div>
  );
}
