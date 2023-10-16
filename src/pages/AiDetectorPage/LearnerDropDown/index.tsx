import { Control, FieldValues, Path } from 'react-hook-form';
import { Dropdown } from '@ui/atoms/DropDown';
import { IOptionSelect } from '@ui/atoms/DropDown/type';
import { IMyLearner } from '@src/services/client/ai/types';
import { PaginationResponseSwr } from '@src/types/services';
import useSWR from 'swr';
import { E_AI_MY_LEARNER } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { persianDateNumber } from '@src/helper/utils/dateUtils';
import { regexPattern } from '@ui/atoms/Inputs';

type PropsType<T extends FieldValues> = {
  control: Control<T>;
  withoutLabel?: boolean;
};

function generateOption(list?: IMyLearner[]): IOptionSelect[] {
  if (!list) return [];

  return list.map((item: IMyLearner) => {
    return {
      id: item.id,
      label: `Learner: ${persianDateNumber(item.created_at)}`,
      value: item.id,
    };
  });
}

export function LearnerDropDown<T extends FieldValues>({
  control,
  withoutLabel,
}: PropsType<T>) {
  const { data, isLoading } = useSWR<PaginationResponseSwr<IMyLearner[]>>(
    E_AI_MY_LEARNER,
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );

  const list = generateOption(data?.data?.results);

  return (
    <Dropdown<T>
      options={list}
      placeHolder="انتخاب تحلیل کننده"
      control={control}
      rules={{
        required: regexPattern.required,
      }}
      fullWidth
      id="learner_id"
      label={!withoutLabel ? 'انتخاب تحلیل کننده' : undefined}
      name={`learner_id` as Path<T>}
      loading={isLoading}
      leftLabel
    />
  );
}
