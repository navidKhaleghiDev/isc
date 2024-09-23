import { Controller } from 'react-hook-form';

import { BaseRadioButtonControlProps } from '../types';
import { inputRadioButtonStyles, labelRadioButtonStyles } from '../styles';

/**
 * BaseRadioButton Component (Atomic Design - Atom)
 *
 * A customizable radio button component with optional error handling, dynamic direction, and label support.
 *
 * @component
 *
 * @param {Object} props - The props for the BaseRadioButton component.
 * @param {string} props.name - The name attribute for the radio input.
 * @param {string} props.id - The unique ID for the radio input.
 * @param {string} [props.label] - The text label to display next to the radio button.
 * @param {string} [props.className] - Additional custom className for styling the component.
 * @param {Object} props.control - Control object provided by React Hook Form to manage form states.
 * @param {Object} [props.rules] - Validation rules for the radio button input.
 * @param {Function} props.onChange - Callback function to handle changes to the radio button's checked state.
 * @param {'ltr' | 'rtl'} [props.dir='rtl'] - The direction of the layout (left-to-right or right-to-left).
 * @param {'sm' | 'md' | 'responsive'} [props.size] - Determining the size of the radio button in three modes, which are both manually selected between sm and md, and responsive, which changes automatically according to the size of the device.
 * @param {boolean} [props.disabled] - The radio button is disabled input or not.
 *
 * @returns {JSX.Element} Returns the rendered BaseRadioButton component.
 */

export function BaseRadioButton(
  props: BaseRadioButtonControlProps<any>
): JSX.Element {
  const {
    name,
    id,
    label,
    className,
    control,
    rules,
    onChange,
    dir = 'rtl',
    size,
    disabled = false,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field }) => (
        <div
          className={`inline-flex items-center relative gap-2 text-xs leading-4 font-normal ${
            dir === 'ltr' ? 'flex-row' : 'flex-row-reverse'
          } ${className}`}
        >
          <input
            id={id}
            type="radio"
            checked={Boolean(field.value)}
            name={field.name}
            value={field.value ?? false}
            onChange={(e) => {
              field.onChange(e.target.checked);
              if (onChange) onChange(e.target.checked);
            }}
            className={inputRadioButtonStyles({ size })}
          />
          <label className={labelRadioButtonStyles()} htmlFor={id}>
            {label}
          </label>
        </div>
      )}
    />
  );
}
