/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form';

import { BaseInputProps } from '../types';
import { baseInputStyles } from '../styles';
import { Typography } from '../../Typography';
import { IconInput } from '../IconInput';
import { IconButtonInput } from '../IconButtonInput';

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
    type,
    label,
    hiddenError,
    onClickIcon,
    iconButtonIcon = 'fa-home',
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div className={`${className} ${fullWidth && 'w-full'}`}>
          {label && (
            <label htmlFor={id} className="block mb-1">
              <Typography color="teal" size="h5">
                {label}
              </Typography>
            </label>
          )}

          <div className="relative">
            {startIcon && <IconInput icon={startIcon} intent={intent} />}
            <input
              id={id}
              type={type}
              dir="auto"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              className={baseInputStyles({
                intent: error?.message ? 'error' : intent,
                className: `${endIcon && 'pr-8'} ${
                  (startIcon || onClickIcon) && 'pl-8'
                }`,
                fullWidth,
                size,
              })}
              placeholder={placeholder}
            />

            {onClickIcon && (
              <IconButtonInput
                icon={iconButtonIcon}
                intent={intent}
                onClick={onClickIcon}
              />
            )}
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
