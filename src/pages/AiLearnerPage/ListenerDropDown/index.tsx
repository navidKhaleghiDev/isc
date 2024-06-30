import { Control, FieldValues, Path } from 'react-hook-form';
import { Dropdown } from '@ui/atoms/DropDown';
import { IOptionSelect } from '@ui/atoms/DropDown/type';
import { IMyListeners } from '@src/services/client/ai/types';
import { PaginationResponseSwr } from '@src/types/services';
import useSWR from 'swr';
import { aiEndPoint } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { persianDateNumber } from '@src/helper/utils/dateUtils';
import { regexPattern } from '@ui/atoms/Inputs';

type PropsType<T extends FieldValues> = {
  control: Control<T>;
  withoutLabel?: boolean;
};

function generateOption(list?: IMyListeners[]): IOptionSelect[] {
  if (!list) return [];

  return list.map((item: IMyListeners) => {
    return {
      id: item.id,
      label: `${item.protocol} - start: ${persianDateNumber(item.created_at)}`,
      value: item.id,
    };
  });
}

export function ListenerDropDown<T extends FieldValues>({
  control,
  withoutLabel,
}: PropsType<T>) {
  const { data, isLoading } = useSWR<PaginationResponseSwr<IMyListeners[]>>(
    aiEndPoint('my_listeners'),
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
      placeHolder="انتخاب آنالیز کننده"
      control={control}
      rules={{
        required: regexPattern.required,
      }}
      fullWidth
      id="listener_id"
      label={!withoutLabel ? 'انتخاب آنالیز کننده' : undefined}
      name={`listener_id` as Path<T>}
      loading={isLoading}
      leftLabel
    />
  );
}
