import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import FilmScript from '@iconify-icons/ph/film-script';
import Plus from '@iconify-icons/ph/plus';
import x from '@iconify-icons/ph/x';
import { BaseButton, BaseInput, Card } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import { ChipButton } from '@ui/atoms/ChipButton/ChipButton';
import { regexPattern } from '@ui/atoms/Inputs';

/**
 * AddIpForm component for adding a new IP address & IP-Type.
 *
 * @component
 * @param {AddIpPropType} props - Props containing onCloseModal, onSubmit, and optional loading.
 * @returns {JSX.Element}
 */

type AddIpPropType = {
  onCloseModal: () => void;
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

export function AddIpForm({
  onSubmit,
  loading,
  onCloseModal,
}: AddIpPropType): JSX.Element {
  const { control, handleSubmit, getValues, reset, setValue, register, watch } =
    useForm<IAddIpValues>({ mode: 'onChange' });

  const [ipValue, setIpValue] = useState('');

  const handleFormSubmit = (formValues: IAddIpValues) => {
    onSubmit({
      ip: formValues.ip,
      ipType: formValues.ip_type,
    });
    reset(defaultValues.ip && defaultValues.ip_type);
    onCloseModal();
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
        rules={{
          required: regexPattern.required,
          pattern: regexPattern.ip,
        }}
        endIcon={FilmScript}
        onKeyDown={handleKeyDown}
      />
      <div className="py-5 flex flex-col items-start">
        <h3
          className={`text-sm font-semibold ${
            isInputSelected === undefined
              ? 'text-neutral-300'
              : 'text-neutral-800'
          }`}
        >
          نوع IP را انتخاب کنید
        </h3>

        <div className="flex gap-1.5">
          <ChipButton
            onClick={() => {
              onHandleIpStatus(true);
            }}
            disabled={isInputSelected === undefined}
            label="خارجی"
            color={
              ipType === 'External' || ipType === undefined
                ? 'default'
                : 'lightGray'
            }
            icon={Plus}
          />
          <ChipButton
            onClick={() => {
              onHandleIpStatus();
            }}
            disabled={isInputSelected === undefined}
            label="داخلی"
            color={
              ipType === 'Internal' || ipType === undefined
                ? 'default'
                : 'lightGray'
            }
            icon={Plus}
          />
        </div>
      </div>

      {ipValue && (
        <Card
          color="neutral_light"
          className="w-full flex justify-between items-center px-2 mt-[52px] rounded-md bg-neutral-100 font-semibold"
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
          color={ipType === 'External' ? 'green' : 'yellow'}
          icon={x}
          className="self-end"
          onClickIcon={() => {
            setValue('ip_type', undefined);
          }}
        />
      )}
      <div className="mt-4 sm:self-end sm:w-16 w-40 self-center">
        <BaseButton
          onClick={handleSubmit(handleFormSubmit)}
          label="ثبت"
          loading={loading}
          type="default"
          disabled={ipType === undefined}
          fullWidth
        />
      </div>
    </form>
  );
}
