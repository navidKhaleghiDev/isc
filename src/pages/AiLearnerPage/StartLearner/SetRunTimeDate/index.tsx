import { DatePicker } from '@ui/atoms/Inputs/DatePicker';
import { IServerResponse } from '@src/types/services';
import useSWR from 'swr';
import { E_AI_LEARNING_DATA_PERIOD } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { LoadingSvg } from '@ui/atoms/Svgs/LoadingSvg';
import { Typography } from '@ui/atoms';

type IResponseLearningDataPeriod = {
  first_record: string;
  last_record: string;
};
export function SetRunTimeDate({ control, idListener }: any) {
  const { data, isLoading } = useSWR<
    IServerResponse<IResponseLearningDataPeriod>
  >(
    idListener ? E_AI_LEARNING_DATA_PERIOD(idListener) : null,
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );
  console.log({ data });

  return idListener ? (
    <div className="w-full flex justify-center">
      {isLoading ? (
        <LoadingSvg />
      ) : (
        <div className="w-full flex justify-between items-center gap-4">
          <DatePicker
            control={control}
            label="تاریخ شروع"
            // placeholder="2023.09.22"
            id="startData"
            fullWidth
            name="startDate"
            minDate="1402-7-18"
            maxDate="1402-7-18"
          />
          <DatePicker
            control={control}
            label="تاریخ پایان"
            // placeholder="2023.09.22"
            id="endData"
            name="endDate"
            fullWidth
            startIcon="ph:x"
            // minDate="1402-7-18"
            // maxDate="1402-7-18"
          />
        </div>
      )}
    </div>
  ) : (
    <div className="flex items-center">
      <Typography color="red">لطفا یک مشاهده گر انتخاب نماپید</Typography>
    </div>
  );
}
