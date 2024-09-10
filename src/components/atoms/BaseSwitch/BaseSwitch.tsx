/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import { Controller } from 'react-hook-form';
import { Typography } from '@ui/atoms/Typography';
import { BaseSwitchProps } from './types';
import { baseSwitchStyles } from './styles';

export function BaseSwitch({
  size,
  label,
  name,
  control,
  rules,
  ltrLabel,
  defaultValue,
  pureOnChange,
  pureValue,
  defaultChecked,
  pureError,
  disabled = false,
}: BaseSwitchProps<any>) {
  return control ? (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue || false}
      render={({ field }) => {
        return (
          <div dir="ltr">
            {label && (
              <label
                htmlFor={name}
                className={`block mb-1 ${
                  ltrLabel ? 'text-left uppercase' : 'text-right'
                }`}
              >
                <Typography color="teal">{label}</Typography>
              </label>
            )}
            <label
              htmlFor={`${name}_input`}
              className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center"
            >
              <input
                id={`${name}_input`}
                type="checkbox"
                className="sr-only"
                checked={field.value}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  if (pureOnChange) pureOnChange(e.target.checked);
                }}
              />
              <span
                className={`${baseSwitchStyles({
                  size,
                })} ${field.value ? 'bg-teal-500' : 'bg-neutral-200'}`}
              >
                <span
                  className={`dot size-4 rounded-full bg-white duration-200 ${
                    field.value
                      ? size === 'small'
                        ? 'translate-x-4'
                        : 'translate-x-6'
                      : ''
                  }`}
                />
              </span>
            </label>
          </div>
        );
      }}
    />
  ) : (
    <div dir="ltr">
      {label && (
        <label
          htmlFor={name}
          className={`block mb-1 ${ltrLabel && 'text-left uppercase'}`}
        >
          <Typography color="teal">{label}</Typography>
        </label>
      )}
      <label
        htmlFor={name}
        className={`select-none items-center autoSaverSwitch relative inline-flex ${
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <input
          disabled={disabled}
          type="checkbox"
          className="sr-only"
          checked={pureValue}
          defaultValue={defaultValue}
          defaultChecked={defaultChecked}
        />
        <span
          className={`${baseSwitchStyles({
            size,
          })} ${pureValue ? 'bg-teal-500' : 'bg-neutral-200'}`}
        >
          <span
            className={`dot size-4 rounded-full bg-white duration-200 ${
              pureValue
                ? size === 'small'
                  ? 'translate-x-4'
                  : 'translate-x-6'
                : ''
            }`}
          />
        </span>
      </label>
      {pureError && (
        <Typography color="red" className="h-6">
          {pureError}
        </Typography>
      )}
    </div>
  );
}
