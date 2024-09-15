/* eslint-disable jsx-a11y/label-has-associated-control */
import { Controller } from 'react-hook-form';
import { Typography } from '@ui/atoms/Typography';
import { BaseSwitchProps } from './types';
import { baseSwitchStyles } from '../styles';

/**
 * BaseSwitch component renders a customizable toggle switch with optional labels and controlled/uncontrolled states.
 * It supports integration with `react-hook-form` when the `control` prop is provided, and allows for custom onChange handling.
 *
 * @component
 *
 * @param {Object} props - The properties for the BaseSwitch component.
 * @param {'small' | 'medium' | 'large'} props.size - Defines the size of the switch.
 * @param {string} [props.label] - Optional label displayed next to the switch.
 * @param {string} props.name - The name of the switch input, used as its identifier.
 * @param {Object} [props.control] - `react-hook-form` control object for controlled forms.
 * @param {Object} [props.rules] - Validation rules used with `react-hook-form`.
 * @param {boolean} [props.ltrLabel] - If true, label is aligned to the left (LTR); otherwise, it's aligned to the right.
 * @param {boolean} [props.defaultValue] - Default value for the controlled state (used with `react-hook-form`).
 * @param {(checked: boolean) => void} [props.pureOnChange] - Callback function to handle onChange events.
 * @param {boolean} [props.pureValue] - External value for uncontrolled switch state.
 * @param {boolean} [props.defaultChecked] - Default checked state for the uncontrolled switch.
 * @param {string} [props.pureError] - Error message displayed when validation fails.
 * @param {boolean} [props.disabled=false] - If true, disables the switch and prevents user interaction.
 *
 * @returns {JSX.Element} The BaseSwitch component.
 */

export function BaseSwitch({
  size,
  label,
  name,
  control,
  rules,
  ltrLabel,
  defaultValue,
  onChange,
}: BaseSwitchProps<any>): JSX.Element {
  const translateClass = size === 'small' ? 'translate-x-4' : 'translate-x-6';

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
                <Typography color="teal" size="h4">
                  {label}
                </Typography>
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
                  if (onChange) onChange(e.target.checked);
                }}
              />
              <span
                className={`${baseSwitchStyles({
                  size,
                })} ${
                  field.value
                    ? 'bg-teal-500 dark:bg-teal-400'
                    : 'bg-neutral-200 dark:bg-neutral-800'
                }`}
              >
                <span
                  className={`dot size-4 rounded-full bg-white duration-200 ${
                    field.value ? translateClass : ''
                  }`}
                />
              </span>
            </label>
          </div>
        );
      }}
    />
  );
}
