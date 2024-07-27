import { IIp } from '@src/services/client/rules/types';
import { BaseButton, BaseInput } from '@ui/atoms';
import { regexPattern } from '@ui/atoms/Inputs';
import { FieldValues, useForm } from 'react-hook-form';

type PropsType = {
  ip: IIp;
  onSubmit: (newIp: string) => void;
  // onCloseModal: () => void;
  loading?: boolean;
};
interface IUpdateIpValues extends FieldValues {
  ip: string;
}

export function UpdateIp({ ip, onSubmit, loading }: PropsType) {
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
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className="flex flex-col items-center justify-center w-full mt-3"
      >
        <BaseInput
          size="lg"
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
        <BaseButton
          className="self-end"
          size="lg"
          label="ثبت تغییرات"
          loading={loading}
          submit
        />
      </form>
    </div>
  );
}
