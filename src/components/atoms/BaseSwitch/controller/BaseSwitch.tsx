/* eslint-disable jsx-a11y/label-has-associated-control */
import { Controller } from 'react-hook-form';
import { Typography } from '@ui/atoms/Typography';
import { BaseSwitchProps } from './types';

/**
 * BaseSwitch component renders a customizable toggle switch with optional labels and controlled states.
 * It supports integration with `react-hook-form` when the `control` prop is provided, and allows for custom onChange handling.
 *
 * @component
 *
 * @param {Object} props - The properties for the BaseSwitch component.
 * @param {'small' | 'medium' } props.size - Defines the size of the switch.
 * @param {string} [props.label] - Optional label displayed next to the switch.
 * @param {string} props.name - The name of the switch input, used as its identifier.
 * @param {Object} [props.control] - `react-hook-form` control object for controlled forms.
 * @param {Object} [props.rules] - Validation rules used with `react-hook-form`.
 * @param {boolean} [props.ltrLabel] - If true, label is aligned to the left (LTR); otherwise, it's aligned to the right.
 * @param {string} [props.defaultValue] - Default value (used with `react-hook-form`).
 * @param {(checked: boolean) => void} [props.onChange] - Callback function to handle onChange events.
 * @param {boolean} [props.disabled=false] - If true, disables the switch and prevents user interaction.
 *
 * @returns {JSX.Element} The BaseSwitch component.
 */

export function BaseSwitch(props: BaseSwitchProps<any>): JSX.Element {
  const {
    label,
    name,
    control,
    rules,
    ltrLabel,
    defaultValue,
    onChange,
    disabled,
    error,
  } = props;
  return (
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
                <Typography color="teal" variant="body1">
                  {label}
                </Typography>
              </label>
            )}
            <label
              htmlFor={`${name}_input`}
              className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center"
            >
              <input
                disabled={disabled}
                id={`${name}_input`}
                type="checkbox"
                className="sr-only"
                checked={field.value}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  if (onChange) onChange(e.target.checked);
                }}
              />
              <span
                className={`slider flex items-center rounded-full p-1 duration-200 h-6 w-10 sm:w-12  ${
                  field.value
                    ? 'bg-teal-500 dark:bg-teal-400'
                    : 'bg-gray-200 dark:bg-gray-800'
                }`}
              >
                <span
                  className={`dot size-4 rounded-full bg-white duration-200 ${
                    field.value ? 'translate-x-4 sm:translate-x-6' : ''
                  }`}
                />
              </span>
            </label>
            {error && (
              <Typography color="red" variant="body1" className="h-6">
                {error}
              </Typography>
            )}
          </div>
        );
      }}
    />
  );
}
