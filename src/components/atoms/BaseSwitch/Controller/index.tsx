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
    id,
    size,
    label,
    name,
    control,
    rules,
    defaultValue,
    disabled,
    dir = 'rtl',
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className="flex">
            {label && (
              <label
                htmlFor={id}
                className={`inline-flex items-center cursor-pointer 
            ${dir === 'ltr' && 'text-left'}
            ${disabled && 'opacity-50'}`}
              >
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <Typography color="black" variant="body6" className="mx-2">
                    {label}
                  </Typography>
                </span>
              </label>
            )}
            <label
              htmlFor={id}
              className={`inline-flex items-center cursor-pointer  
                ${dir === 'ltr' && 'text-left'}`}
              aria-label="none"
            >
              <input
                disabled={disabled}
                id={id}
                type="checkbox"
                className="sr-only peer"
                name={field.name}
                checked={Boolean(field.value)}
                onChange={field.onChange}
              />
              <div
                className={`${baseSwitchStyles({
                  size,
                })} ${disabled && 'opacity-40'} 
              ${disabled ? 'cursor-not-allowed' : 'cursor-default'}`}
              />
            </label>
            {error?.message && (
              <Typography color="red" variant="body6" className="h-6 ml-2">
                {error.message}
              </Typography>
            )}
          </div>
        );
      }}
    />
  );
}
