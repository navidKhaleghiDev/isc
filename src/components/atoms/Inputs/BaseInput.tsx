/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form';

import { BaseInputProps } from './types';
import { baseInputStyles } from './styles';
import { Typography } from '../Typography';
import { IconInput } from './IconInput';

export function BaseInput(props: BaseInputProps<any>) {
  const {
    control,
    name,
    id,
    placeholder,
    rules,
    className,
    fullWidth,
    defaultValue,
    startIcon,
    endIcon,
    intent,
    size,
    hiddenError,
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div className={`${className} ${fullWidth && 'w-full'}`}>
          {/* {label && (
            <label
              htmlFor={id}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>
          )} */}

          <div className="relative">
            {startIcon && <IconInput icon={startIcon} intent={intent} />}
            <input
              id={id}
              type="text"
              dir="auto"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              className={baseInputStyles({
                intent: error?.message ? 'error' : intent,
                className: `${endIcon && 'pr-8'} ${startIcon && 'pl-8'}`,
                fullWidth,
                size,
              })}
              placeholder={placeholder}
            />
            {endIcon && <IconInput icon={endIcon} intent={intent} />}
          </div>
          {!hiddenError && (
            <Typography color="red" size="caption" className="h-6">
              {error?.message ?? ''}
            </Typography>
          )}
        </div>
      )}
    />
  );
}
