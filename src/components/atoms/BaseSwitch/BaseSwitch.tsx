/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from 'react';
import { Typography } from '@ui/atoms/Typography';
import { BaseSwitchProps } from './types';

/**
 * BaseSwitch component renders a customizable toggle switch with optional labels and uncontrolled states.
 *
 * @component
 *
 * @param {Object} props - The properties for the BaseSwitch component.
 * @param {'small' | 'medium'} props.size - Defines the size of the switch.
 * @param {string} [props.label] - Optional label displayed next to the switch.
 * @param {string} props.name - The name of the switch input, used as its identifier.
 * @param {boolean} [props.ltrLabel] - If true, label is aligned to the left (LTR); otherwise, it's aligned to the right.
 * @param {boolean} [props.defaultValue] - Default value for the controlled state (used with `react-hook-form`).
 * @param {(checked: boolean) => void} [props.onClick] - Callback function to handle onChange events.
 * @param {string} [props.value] - External value
 * @param {boolean} [props.defaultChecked] - Default checked state for the uncontrolled switch.
 * @param {boolean} [props.disabled=false] - If true, disables the switch and prevents user interaction.
 *
 * @returns {JSX.Element} The BaseSwitch component.
 */

export function BaseSwitch(props: BaseSwitchProps<any>): JSX.Element {
  const {
    label,
    name,
    ltrLabel,
    defaultValue,
    onChange,
    value,
    defaultChecked,
    error,
    disabled = false,
  } = props;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div dir="ltr">
      {label && (
        <label
          htmlFor={name}
          className={`block mb-1 ${ltrLabel && 'text-left uppercase'}`}
        >
          <Typography color="black" variant="body1">
            {label}
          </Typography>
        </label>
      )}
      <label
        htmlFor={`${name}_input`}
        className={`select-none items-center autoSaverSwitch relative inline-flex ${
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <input
          id={`${name}_input`}
          disabled={disabled}
          type="checkbox"
          className="sr-only pear"
          checked={isChecked}
          value={value}
          defaultValue={defaultValue}
          defaultChecked={defaultChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            if (onChange) onChange(e.target.checked);
          }}
        />
        <span
          className={`slider flex items-center rounded-full p-1 duration-200 h-6 w-10 sm:w-12 ${
            isChecked
              ? 'bg-teal-500 dark:bg-teal-400'
              : 'bg-gray-200 dark:bg-gray-800'
          }`}
        >
          <span
            className={`dot size-4 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-4 sm:translate-x-6' : ''
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
}
