import { Control, Path } from 'react-hook-form';
import { Dropdown } from '@ui/atoms/DropDown';
import { IOptionSelect } from '@ui/atoms/DropDown/type';
import { regexPattern } from '@ui/atoms/Inputs';
import useSWR from 'swr';
import { ResponseSwr } from '@src/services/client/rules/types';
import { aiEndpoint } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';
import { memo } from 'react';
import { EAiEndpoints } from '@src/services/client/ai/types';
import { IStartListenerValues } from '../StartListener/types';

type PropsType = {
  control: Control<IStartListenerValues>;
  withoutLabel?: boolean;
};

export const InterfaceDropDown = memo(function InterfaceDropDown({
  control,
  withoutLabel,
}: PropsType) {
  const { data, isLoading } = useSWR<ResponseSwr<string[]>>(
    aiEndpoint(EAiEndpoints.INTERFACE_LIST),
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );
  const interfacesList = data?.data ?? [];
  const options: IOptionSelect[] = interfacesList.map((item: string) => {
    return { id: item, label: item, value: item };
  });

  return (
    <Dropdown
      options={options}
      placeHolder="انتخاب رابط"
      control={control}
      rules={{
        required: regexPattern.required,
      }}
      fullWidth
      id="interface"
      label={!withoutLabel ? 'رابط' : undefined}
      name={`interface` as Path<IStartListenerValues>}
      loading={isLoading}
      leftLabel
    />
  );
});
