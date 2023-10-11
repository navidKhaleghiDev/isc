import { Control, FieldValues, Path } from 'react-hook-form';
import { Dropdown } from '@ui/atoms/DropDown';
import { IOptionSelect } from '@ui/atoms/DropDown/type';
import { regexPattern } from '@ui/atoms/Inputs';
import { EProtocol } from '@src/services/client/ai/types';

export const optionsStatus: IOptionSelect[] = [
  {
    id: EProtocol.DNP3,
    label: EProtocol.DNP3,
    value: EProtocol.DNP3,
  },
  {
    id: EProtocol.MOD_BUS,
    label: EProtocol.MOD_BUS,
    value: EProtocol.MOD_BUS,
  },
];

type PropsType<T extends FieldValues> = {
  control: Control<T>;
  withoutLabel?: boolean;
};

export function ProtocolDropDown<T extends FieldValues>({
  control,
  withoutLabel,
}: PropsType<T>) {
  return (
    <Dropdown<T>
      options={optionsStatus}
      placeHolder="انتخاب پروتکل"
      control={control}
      rules={{
        required: regexPattern.required,
      }}
      fullWidth
      id="protocol"
      label={!withoutLabel ? 'پروتکل' : undefined}
      name={`protocol` as Path<T>}
    />
  );
}
