import { DatePicker } from '@ui/atoms/Inputs/DatePicker';
import { IServerResponse } from '@src/types/services';
import useSWR from 'swr';
import { aiEndpoint } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { LoadingSvg } from '@ui/atoms/Svgs/LoadingSvg';
import { Typography } from '@ui/atoms';
import {
  gregorianDateOptions,
  persianDateAndNumber,
} from '@src/helper/utils/dateUtils';
import { EAiEndpoints } from '@src/services/client/ai/types';

type IResponseLearningDataPeriod = {
  first_record_time: string;
  last_record_time: string;
};
export function SetRunTimeDate({ control, idListener }: any) {
  const { data, isLoading } = useSWR<
    IServerResponse<IResponseLearningDataPeriod>
  >(
    idListener
      ? aiEndpoint(EAiEndpoints.LEARNING_DATA_PERIOD, idListener)
      : null,
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );

  const firstRecordTime = data?.data?.first_record_time;
  const lastRecordTime = data?.data?.last_record_time;

  return idListener ? (
    <div className="w-full flex justify-center">
      {isLoading ? (
        <LoadingSvg />
      ) : (
        <div className="w-full flex justify-between items-center gap-4">
          <DatePicker
            control={control}
            label="تاریخ شروع"
            placeholder="2023.09.22"
            id="startData"
            fullWidth
            name="startDate"
            minDate={persianDateAndNumber(
              firstRecordTime,
              gregorianDateOptions
            )}
            maxDate={persianDateAndNumber(lastRecordTime, gregorianDateOptions)}
            showTimePicker
          />
          <DatePicker
            control={control}
            label="تاریخ پایان"
            // placeholder="2023.09.22"
            id="endData"
            name="endDate"
            fullWidth
            startIcon="ph:x"
            minDate={persianDateAndNumber(
              firstRecordTime,
              gregorianDateOptions
            )}
            maxDate={persianDateAndNumber(lastRecordTime, gregorianDateOptions)}
          />
        </div>
      )}
    </div>
  ) : (
    <div className="flex items-center">
      <Typography color="red">لطفا یک آنالیز کننده انتخاب نماپید</Typography>
    </div>
  );
}
