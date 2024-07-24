import { BaseButton, BaseInput } from '@ui/atoms';
import { FieldValues, useForm } from 'react-hook-form';
import { regexPattern } from '@ui/atoms/Inputs';
import { handelSubmitFormProp } from '@ui/Templates/FilterAndList/components/molecules/Filter/Ips';
import { EIpType } from '@src/services/client/rules/types';
import { BaseCheckBox } from '@ui/atoms/Inputs/BaseCheckBox';

// import { IIp } from '@src/services/client/rules/types';

type PropsType = {
  onSubmit: (formValue: handelSubmitFormProp) => void;
  onCloseModal: () => void;
  ipType: EIpType | null;
  loading?: boolean;
};

interface IAddIpValues extends FieldValues {
  ip: string;
}

const defaultValues = {
  ip: '',
};

export function AddIpForm({ onSubmit, onCloseModal, loading }: PropsType) {
  const { control, handleSubmit, reset } = useForm<IAddIpValues>({
    defaultValues,
  });

  // const handleFormSubmit = (formValues: IAddIpValues) => {
  //   if (formValues.ip) {
  //     onSubmit(formValues.ip);
  //     reset(defaultValues);
  //     onCloseModal();
  //   }
  // };

  const handelFormSubmit = () => {
    // onSubmit();
    onCloseModal();
  };

  return (
    <form
      onSubmit={handleSubmit(handelFormSubmit)}
      className="flex flex-col items-center"
    >
      <BaseInput
        size="lg"
        name="ip"
        placeholder="مثال: 192.168.1.1"
        id="ip"
        control={control}
        rules={{ pattern: regexPattern.ip, required: 'آی پی لازم است' }}
        fullWidth
      />
      {/* <BaseCheckBox label='ohv[d '/> */}
      <BaseButton
        className="mt-4"
        size="lg"
        label="ثبت آی پی"
        loading={loading}
        submit
      />
    </form>
  );
}
