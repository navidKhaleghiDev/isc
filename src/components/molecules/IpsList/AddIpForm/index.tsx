import FilmScript from '@iconify-icons/ph/film-script';
import Plus from '@iconify-icons/ph/plus';
import x from '@iconify-icons/ph/x';
import { BaseButton, BaseIcon, BaseInput, Card, Typography } from '@ui/atoms';
import { ChangeEvent, useState } from 'react';
import { regexPattern } from '@ui/atoms/Inputs';
import { FieldValues, useForm } from 'react-hook-form';
import { ChipButton } from '@ui/atoms/ChipButton/ChipButton';
import { IconButton } from '@ui/atoms/BaseButton';

type PropsType = {
  onSubmit: (data: { ip: string; ipType: string | undefined }) => void;
  loading?: boolean;
};

interface IAddIpValues extends FieldValues {
  ip: string;
  ip_type?: 'External' | 'Internal';
}

const defaultValues = {
  ip: undefined,
  ip_type: '',
};

export function AddIpForm({ onSubmit, loading }: PropsType) {
  const [isSelected, setIsSelected] = useState(false);

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    setValue,
    register,
    formState: { errors },
    watch,
  } = useForm<IAddIpValues>({});

  const [ipValue, setIpValue] = useState('');

  const handleFormSubmit = (formValues: IAddIpValues) => {
    if (formValues.ip) {
      onSubmit({
        ip: formValues.ip,
        ipType: formValues.ip_type,
      });
      // reset(defaultValues);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value !== '') {
        e.preventDefault();
        setValue('ip', e.currentTarget.value);
        setIpValue(e.currentTarget.value);
        register('ip_type', { required: true });
      }
    }
  };
  const ipType = watch('ip_type');
  const isInputSelected = getValues('ip');
  const onHandleIpStatus = (isExternal?: boolean) => {
    setValue('ip_type', isExternal ? 'External' : 'Internal', {
      shouldValidate: true,
    });
  };

  return (
    <form className="flex flex-col">
      <BaseInput
        size="lg"
        name="ip"
        placeholder="جدید IP"
        control={control}
        id="ip"
        rules={{ required: regexPattern.required }}
        endIcon={FilmScript}
        onKeyDown={handleKeyDown}
      />
      <div className="py-5 flex flex-col items-start">
        <h3 className=" text-sm font-semibold text-neutral-800 disabled:text-neutral-300">
          نوع IP را انتخاب کنید
        </h3>

        <div className="flex gap-1.5">
          <ChipButton
            disabled={isInputSelected === undefined}
            onClick={() => {
              setIsSelected(true);
              onHandleIpStatus(true);
            }}
            label="خارجی"
            status="default"
            iconLabel={Plus}
          />
          <ChipButton
            disabled={isInputSelected === undefined}
            onClick={() => {
              setIsSelected(true);
              onHandleIpStatus();
            }}
            label="داخلی"
            status="default"
            iconLabel={Plus}
          />
        </div>
      </div>

      {ipValue && (
        <Card
          color={'neutral_light'}
          className="w-full flex justify-between items-center px-2 rounded-md bg-neutral-100 font-semibold"
        >
          <IconButton
            icon={x}
            onClick={() => {
              setIpValue('');
              reset(defaultValues.ip);
            }}
            color="neutral"
          />
          {ipValue}
        </Card>
      )}
      {ipType && (
        <ChipButton
          label={ipType === 'External' ? 'خارجی' : 'داخلی'}
          status={ipType === 'External' ? 'external' : 'internal'}
          iconLabel={x}
          className="self-end"
          onClick={() => {
            reset({ ip_type: undefined });
          }}
        />
      )}
      <BaseButton
        onClick={handleSubmit(handleFormSubmit)}
        className="mt-4 self-end"
        size="sm"
        label="ثبت"
        loading={loading}
        type="default"
        disabled={!isSelected}
      />
    </form>
  );
}
