import { Controller } from 'react-hook-form';
import { BaseRadioButtonControlProps } from './types';
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
 * @param {boolean} [props.checked] - Whether the radio button is checked or not.
 * @param {Object} props.control - Control object provided by React Hook Form to manage form states.
 * @param {Object} [props.rules] - Validation rules for the radio button input.
 * @param {any} [props.defaultValue] - The default value of the radio button.
 * @param {Function} props.onChange - Callback function to handle changes to the radio button's checked state.
 * @param {'ltr' | 'rtl'} [props.dir='rtl'] - The direction of the layout (left-to-right or right-to-left).
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
    checked,
    control,
    rules,
    defaultValue,
    onChange,
    dir = 'rtl',
    size,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div
          className={`inline-flex items-center relative gap-2 text-xs leading-4 font-normal ${
            dir === 'ltr' ? 'flex-row' : 'flex-row-reverse'
          } ${className}`}
        >
          <input
            id={id}
            type="radio"
            checked={checked}
            name={field.name}
            value={field.value ?? ''}
            onChange={(e) => {
              field.onChange(e.target.value);
              if (onChange) onChange(e.target.value);
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
