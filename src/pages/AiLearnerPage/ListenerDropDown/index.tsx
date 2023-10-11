import { Control, FieldValues, Path } from 'react-hook-form';
import { Dropdown } from '@ui/atoms/DropDown';
import { IOptionSelect } from '@ui/atoms/DropDown/type';
import { IMyListeners } from '@src/services/client/ai/types';
import { PaginationResponseSwr } from '@src/types/services';
import useSWR from 'swr';
import { E_AI_MY_LISTENERS } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { persianDateNumber } from '@src/helper/utils/dateUtils';

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
    E_AI_MY_LISTENERS,
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
      placeHolder="انتخاب مشاهده گر"
      control={control}
      fullWidth
      id="listener"
      label={!withoutLabel ? 'انتخاب مشاهده گر' : undefined}
      name={`listener` as Path<T>}
      loading={isLoading}
      leftLabel
    />
  );
}
