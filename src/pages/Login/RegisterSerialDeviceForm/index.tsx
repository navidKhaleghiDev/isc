import { BaseButton, BaseInput, Typography } from '@ui/atoms';
import { FieldValues, useForm } from 'react-hook-form';
import { regexPattern } from '@ui/atoms/Inputs';
import { API_RULES_ASSIGN_OWNER } from '@src/services/client/rules';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { delay } from '@src/helper/utils';
import { PropsFormType } from '../types';

interface IUpdateIpValues extends FieldValues {
  serial: string;
}

export function RegisterSerialDeviceForm({ getProfile }: PropsFormType) {
  const { control, handleSubmit } = useForm<IUpdateIpValues>({
    mode: 'onChange',
  });

  const [error, setError] = useState<string | null>(null);
  const [isSuccessAddSerial, setIsSuccessAddSerial] = useState(false);

  const handelSubmitForm = async (dataForm: IUpdateIpValues) => {
    await API_RULES_ASSIGN_OWNER({ serial: dataForm.serial })
      .then(async () => {
        toast.success('سریال با موفقیت ثبت شد');
        delay(2000).then(() => {
          getProfile();
          setIsSuccessAddSerial(true);
        });
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Typography color="neutral" size="h5" className="my-10">
        شماره سریال مورد نظر را وارد کنید
      </Typography>
      {error && (
        <Typography color="red" size="body3" className="">
          {error}
        </Typography>
      )}
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className="flex flex-col w-full items-center"
      >
        <BaseInput
          size="sm"
          name="serial"
          placeholder="شماره سریال"
          id="serial"
          control={control}
          rules={{
            pattern: regexPattern.uuid4,
            required: regexPattern.required,
          }}
          fullWidth
        />
        {!isSuccessAddSerial ? (
          <BaseButton
            label="ارسال شماره سریال"
            size="lg"
            className="mt-10"
            submit
          />
        ) : (
          <BaseButton
            label="برو به داشبورد"
            size="lg"
            className="mt-10"
            onClick={() => getProfile()}
          />
        )}
      </form>
    </div>
  );
}
