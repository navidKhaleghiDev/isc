import FilmScript from '@iconify-icons/ph/film-script';
import Plus from '@iconify-icons/ph/plus';
import x from '@iconify-icons/ph/x';
import { BaseButton, BaseIcon, BaseInput, Typography } from '@ui/atoms';
import { ChangeEvent, useState } from 'react';

import { regexPattern } from '@ui/atoms/Inputs';

import { FieldValues, useForm } from 'react-hook-form';

type PropsType = {
  onSubmit: (data: {
    ip: string;
    selectedOption: string;
    ipValue: string;
  }) => void;
  loading?: boolean;
};

interface IAddIpValues extends FieldValues {
  ip: string;
}

const defaultValues = {
  ip: '',
};

export function AddIpForm({ onSubmit, loading }: PropsType) {
  const { control, handleSubmit, reset } = useForm<IAddIpValues>({
    defaultValues,
  });

  const [ipValue, setIpValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const renderSelectedOption = () => {
    if (selectedOption === 'internal') {
      return (
        <div className="flex justify-between items-center w-full px-3 my-3 rounded-full bg-yellow-100 text-neutral-500">
          داخلی <BaseIcon icon={x} />
        </div>
      );
    }
    if (selectedOption === 'external') {
      return (
        <div className="flex justify-between items-center w-full px-3 my-3 rounded-full bg-teal-100 text-neutral-500">
          خارجی <BaseIcon icon={x} />
        </div>
      );
    }
    return '';
  };

  const handleFormSubmit = (formValues: IAddIpValues) => {
    if (formValues.ip) {
      onSubmit({
        ip: formValues.ip,
        selectedOption,
        ipValue,
      });
      reset(defaultValues);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const target = event.currentTarget as HTMLInputElement;
      setIpValue(target.value);
    }
  };

  const typographyClass = `w-full flex justify-between items-center p-2 rounded-md bg-neutral-100 font-semibold ${
    ipValue ? '' : 'hidden'
  }`;

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col">
      <BaseInput
        size="lg"
        name="ip"
        placeholder="جدید IP"
        control={control}
        id="ip"
        rules={{ pattern: regexPattern.ip, required: 'آی پی لازم است' }}
        endIcon={FilmScript}
        onKeyDown={handleKeyPress}
      />
      <div className="p-5 flex flex-col items-start">
        <h3 className="text-lg font-semibold">نوع IP را انتخاب کنید</h3>
        <ul className="flex w-full gap-2">
          <li>
            <label
              htmlFor="internal"
              className="flex items-center cursor-pointer w-full"
            >
              <input
                type="radio"
                id="internal"
                name="internal"
                value="internal"
                className="hidden peer"
                checked={selectedOption === 'internal'}
                onChange={handleOptionChange}
                required
              />
              <div
                className="flex justify-between items-center w-full px-3 my-3 rounded-full bg-neutral-100 text-neutral-300
                peer-checked:bg-neutral-200 peer-checked:text-neutral-500
              "
              >
                داخلی <BaseIcon icon={Plus} />
              </div>
            </label>
          </li>
          <li>
            <label
              htmlFor="external"
              className="flex items-center cursor-pointer w-full"
            >
              <input
                type="radio"
                id="external"
                name="external"
                value="external"
                className="hidden peer"
                checked={selectedOption === 'external'}
                onChange={handleOptionChange}
              />
              <div
                className="flex justify-between items-center w-full px-3 my-3 rounded-full bg-neutral-100 text-neutral-300
                peer-checked:bg-neutral-200 peer-checked:text-neutral-500
              "
              >
                خارجی <BaseIcon icon={Plus} />
              </div>
            </label>
          </li>
        </ul>
      </div>
      <Typography color="neutral_dark" size="body4" className={typographyClass}>
        <BaseIcon icon={x} color="neutral" />
        {ipValue}
      </Typography>
      <div>{renderSelectedOption()}</div>
      <BaseButton
        className="mt-4 self-end"
        size="sm"
        label="ثبت"
        loading={loading}
        type="inactive"
        submit
      />
    </form>
  );
}
