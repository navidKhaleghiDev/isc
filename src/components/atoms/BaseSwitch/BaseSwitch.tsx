/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from 'react';
import { Typography } from '@ui/atoms/Typography';
import { BaseSwitchProps } from './types';
import { baseSwitchStyles } from './styles';

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

export function BaseSwitch({
  size,
  label,
  name,
  ltrLabel,
  defaultValue,
  onClick,
  value,
  defaultChecked,
  error,
  disabled = false,
}: BaseSwitchProps<any>): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  const translateClass = size === 'small' ? 'translate-x-4' : 'translate-x-6';

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
            if (onClick) onClick(e.target.checked);
          }}
        />
        <span
          className={`${baseSwitchStyles({
            size,
          })} ${
            isChecked
              ? 'bg-teal-500 dark:bg-teal-400'
              : 'bg-neutral-200 dark:bg-neutral-800'
          }`}
        >
          <span
            className={`dot size-4 rounded-full bg-white duration-200 ${
              isChecked ? translateClass : ''
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
