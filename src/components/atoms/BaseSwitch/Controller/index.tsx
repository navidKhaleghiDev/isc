import { Controller, FieldValues } from 'react-hook-form';
import { Typography } from '@ui/atoms/Typography';

import { baseSwitchStyles } from '../styles';
import { BaseSwitchControllerProps } from '../types';

/**
 * BaseSwitch component renders a customizable toggle switch with optional labels and controlled states.
 * It supports integration with `react-hook-form` when the `control` prop is provided, and allows for custom onChange handling.
 *
 * @component
 *
 * @param {Object} props - The properties for the BaseSwitch component.
 * @param {'small' | 'medium' |'responsive' } props.size - Defines the size of the switch.
 * @param {string} [props.label] - Optional label displayed next to the switch.
 * @param {string} props.name - The name of the switch input, used as its identifier.
 * @param {Object} [props.control] - `react-hook-form` control object for controlled forms.
 * @param {Object} [props.rules] - Validation rules used with `react-hook-form`.
 * @param {string} [props.defaultValue] - Default value (used with `react-hook-form`).
 * @param {(checked: boolean) => void} [props.onChange] - Callback function to handle onChange events.
 * @param {boolean} [props.disabled=false] - If true, disables the switch and prevents user interaction.
 *
 * @returns {JSX.Element} The BaseSwitch component.
 */

export function BaseSwitchController<T extends FieldValues>(
  props: BaseSwitchControllerProps<T>
): JSX.Element {
  const {
    size,
    label,
    name,
    control,
    rules,
    defaultValue,
    disabled,
    error,
    dir = 'rtl',
  } = props;

  const translateClassMap = {
    sm: 'translate-x-4',
    md: 'translate-x-6',
    responsive: 'translate-x-4 sm:translate-x-6',
  };

  const translateClass = size
    ? translateClassMap[size]
    : 'translate-x-4 sm:translate-x-6';

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <div>
            <label
              htmlFor={`${name}_input`}
              className={`relative inline-flex cursor-pointer select-none items-center ${
                disabled ? 'cursor-not-allowed' : 'cursor-pointer'
              }${dir === 'ltr' ? 'text-left' : 'text-right'}`}
            >
              <Typography color="neutral" variant="body6" className="mx-2">
                {label}
              </Typography>
              <input
                disabled={disabled}
                id={`${name}_input`}
                type="checkbox"
                className="sr-only"
                value={field.value}
                name={field.name}
                checked={Boolean(field.value)}
                onChange={field.onChange}
              />
              <span
                className={`${baseSwitchStyles({
                  size,
                })} ${
                  field.value
                    ? 'bg-teal-500 dark:bg-teal-400'
                    : 'bg-gray-200 dark:bg-gray-800'
                } ${disabled && 'opacity-40'}`}
              >
                <span
                  className={`size-4 rounded-full bg-white duration-200 ${
                    field.value ? translateClass : ''
                  }`}
                />
              </span>
            </label>
            {error && (
              <Typography color="red" variant="body6" className="h-6">
                {error}
              </Typography>
            )}
          </div>
        );
      }}
    />
  );
}
