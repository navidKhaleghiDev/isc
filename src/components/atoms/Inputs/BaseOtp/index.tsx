import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Typography } from '@ui/atoms/Typography';
import { baseOtpStyles } from '../styles';
import { BaseOtpProp, THandleChange, THandleKeyDown } from '../types';
import { regexPattern } from '../utils/regexPattern';

export function BaseOtp({
  name,
  control,
  rules,
  valueLength = 6,
  className,
  intent,
  size,
  fullWidth,
  pureError,
  dir = 'ltr',
}: BaseOtpProp<any>) {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const handleChange: THandleChange = (e, index, field) => {
    const val = e.target.value;
    // if (/[^0-9]/.test(val)) return;

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
            <div className="flex items-center gap-[0.17rem]">
              {Array.from({ length: valueLength }).map((_, index) => (
                <input
                  key={index as number}
                  type="text"
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
