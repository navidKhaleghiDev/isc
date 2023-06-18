import { BaseButton, BaseInput } from '@ui/atoms';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { regexPattern } from '@ui/atoms/Inputs';
import { IIp } from '@src/services/client/rules/types';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_VALID_IPS } from '@src/services/client/rules/endpoint';
import { IconButton } from '@ui/atoms/BaseButton';
import { Dispatch, SetStateAction, memo } from 'react';
import { API_UPDATE_VALID_IPS } from '@src/services/client/rules';

type PropsType = {
  ip: IIp;
  onSubmit: (newIp: string) => void;
  onCloseModal: () => void;
};
interface IUpdateIpValues extends FieldValues {
  ip: string;
}

export function UpdateIp({ ip, onSubmit, onCloseModal }: PropsType) {
  console.log({ ip });

  const { control, handleSubmit } = useForm<IUpdateIpValues>({
    mode: 'onChange',
    defaultValues: {
      ip: ip.ip,
    },
  });
  // const { mutate } = useGet(E_RULES_VALID_IPS);

  const handelSubmitForm = async (formValues: IUpdateIpValues) => {
    onSubmit(formValues.ip);
    // await API_UPDATE_VALID_IPS(ip.id as string, { ip: formValues.ip })
    //   .then(() => {
    //     mutate();
    //     toast.success('با موفقیت ویرایش شد');
    //   })
    //   .catch((err) => {
    //     toast.error(err.data.error);
    //   });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="modal-close cursor-pointer z-50 w-full flex justify-end">
        <IconButton
          icon="iconamoon:close-bold"
          onClick={onCloseModal}
          classNameIcon="h-8 w-8 text-teal-600"
        />
      </div>
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className="flex flex-col items-center justify-center w-64 mt-3"
      >
        <BaseInput
          size="sm"
          name="ip"
          placeholder="بنویسید"
          id="ip"
          control={control}
          defaultValue={ip.ip}
          rules={{
            pattern: regexPattern.ip,
            required: regexPattern.required,
          }}
          fullWidth
        />
        <BaseButton label="ثبت تغییرات" submit />
      </form>
    </div>
  );
}
