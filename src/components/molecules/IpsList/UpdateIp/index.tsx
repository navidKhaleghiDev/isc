import { BaseButton, Card, BaseInput } from '@ui/atoms';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { regexPattern } from '@ui/atoms/Inputs';
import { IIp } from '@src/services/client/rules/types';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_VALID_IPS } from '@src/services/client/rules/endpoint';
import { IconButton } from '@ui/atoms/BaseButton';
import { Dispatch, SetStateAction } from 'react';

type PropsType = {
  ip: IIp;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export function UpdateIp({ ip, setOpen }: PropsType) {
  const { control, handleSubmit, reset } = useForm({
    mode: 'onChange',
  });
  const { mutate } = useGet(E_RULES_VALID_IPS);

  const handelSubmitForm = async (formValues: any) => {
    console.log({ formValues });
    setOpen(false);
    // const dataArray = Object.values(formValues);
    // await API_ADD_VALID_IPS(body)
    //   .then(() => {
    //     toast.success('با موفقت اضافه شد');
    //     reset(defaultValues);
    //     mutate();
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
          onClick={() => setOpen(false)}
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
