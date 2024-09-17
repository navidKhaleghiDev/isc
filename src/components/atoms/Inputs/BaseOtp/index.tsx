import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Typography } from '@ui/atoms/Typography';

import { baseOtpStyles } from './styles';
import { BaseOtpProp, THandleChange, THandleKeyDown } from './types';
import { regexPattern } from '../utils/regexPattern';

/**
 * BaseOtp is a form component for OTP (One-Time Password) input handling.
 *
 * @param {string} props.name
 * @param {any} props.control - The control object provided by `react-hook-form` for managing form state.
 * @param {object} [props.rules] - Validation rules for the OTP input using `react-hook-form`.
 * @param {number} [props.valueLength=6] - The number of OTP input fields (defaults to 6).
 * @param {string} [props.className]
 * @param {string} [props.intent] - The visual intent of the component (style).
 * @param {string} [props.size] - The size of the OTP input fields.
 * @param {boolean} [props.fullWidth]
 * @param {string} [props.pureError] - A custom error message passed from the parent.
 * @param {string} [props.dir='ltr'] - The text direction, default is `ltr` (left-to-right).
 *
 * @returns {JSX.Element} - The BaseOtp component.
 */

export function BaseOtp({
  name,
  control,
  rules,
  valueLength = 6,
  className,
  intent,
  disabled,
  size,
  fullWidth,
  pureError,
  dir = 'ltr',
}: BaseOtpProp<any>) {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const handleChange: THandleChange = (e, index, field) => {
    const val = e.target.value;

    const currentOtp = field.value || '';
    const newOtp = currentOtp.split('');
    newOtp[index] = val;
    const updatedOtp = newOtp.join('');
    field.onChange(updatedOtp);

    if (val && index < valueLength - 1) {
      const nextElement = e.target
        .nextElementSibling as HTMLInputElement | null;
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  const handleKeyDown: THandleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      const previousElement = e.currentTarget
        .previousElementSibling as HTMLInputElement | null;
      if (previousElement) {
        previousElement.focus();
      }
    }
  };

  return (
    <div dir={dir}>
      <Controller
        name={name}
        control={control}
        disabled={disabled}
        rules={{
          required: regexPattern.required,
          ...rules,
          pattern: regexPattern.numbers,
        }}
        render={({ field, fieldState: { error } }) => {
          const otpValue = field.value || '';
          if (error?.message) {
            setErrorMessage(error?.message);
          } else {
            setErrorMessage('');
          }
          return (
            <div className="flex items-center justify-center w-full gap-[0.17rem]">
              {Array.from({ length: valueLength }).map((_, index) => (
                <input
                  dir={dir}
                  key={index as number}
                  type="text"
                  disabled={disabled}
                  className={baseOtpStyles({
                    intent: error?.message || pureError ? 'error' : intent,
                    className,
                    fullWidth,
                    size,
                  })}
                  maxLength={1}
                  value={otpValue[index] || ''}
                  onChange={(e) => handleChange(e, index, field)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
          );
        }}
      />
      <Typography
        color="red"
        variant="body6"
        className=" mt-[0.375rem ] text-center"
      >
        {(pureError || errorMessage) ?? ''}
      </Typography>
    </div>
  );
}
