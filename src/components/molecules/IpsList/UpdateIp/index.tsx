import { BaseButton, Card, BaseInput } from '@ui/atoms';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { regexPattern } from '@ui/atoms/Inputs';
import { IIp } from '@src/services/client/rules/types';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_VALID_IPS } from '@src/services/client/rules/endpoint';

type PropsType = {
  ip: IIp;
};
export function UpdateIp({ ip }: PropsType) {
  const { control, handleSubmit, reset } = useForm({
    mode: 'onChange',
  });
  const { mutate } = useGet(E_RULES_VALID_IPS);

  const handelSubmitForm = async (formValues: any) => {
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
    <form
      onSubmit={handleSubmit(handelSubmitForm)}
      className="flex flex-col items-center justify-center w-64"
    >
      <BaseInput
        size="xs"
        name="ip"
        placeholder="بنویسید"
        id="ip"
        control={control}
        rules={{
          pattern: regexPattern.ip,
          required: regexPattern.required,
        }}
        fullWidth
      />
      <BaseButton label="ثبت تغییرات" submit />
    </form>
  );
}
