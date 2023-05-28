import { Controller } from 'react-hook-form';
import { Icon } from '@iconify/react';

import { BaseInputProps } from './types';
import { baseInputStyles } from './styles';
import { Typography } from '../Typography';

export function BaseInput(props: BaseInputProps<any>) {
  const {
    control,
    name,
    label,
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
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div className={`${fullWidth && 'w-full'}`}>
          {label && (
            <label
              htmlFor={id}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>
          )}

          <div className="relative w-full">
            {startIcon && (
              <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none">
                <Icon
                  icon={startIcon}
                  className="fill-current text-black ml-2"
                  width="18"
                  height="18"
                />
              </div>
            )}
            <input
              id={id}
              type="text"
              dir="auto"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              className={baseInputStyles({
                intent,
                className: `${className} ${endIcon && 'pr-8'} ${
                  startIcon && 'pl-8'
                }`,
                fullWidth,
                size,
              })}
              placeholder={placeholder}
            />
            {endIcon && (
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <Icon
                  icon={endIcon}
                  className="fill-current text-black "
                  width="18"
                  height="18"
                />
              </div>
            )}
          </div>
          <Typography size="sm" color="error" className="h-6">
            {error?.message ?? ''}
          </Typography>
        </div>
      )}
    />
  );
}
