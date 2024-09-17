import { Typography } from '@ui/atoms/Typography';

import { BaseRadioButtonProps } from './types';

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
 * @param {'primary' | 'secondary' | 'error'} [props.intent] - The intent or style of the radio button (e.g., primary, secondary, error).
 * @param {'sm' | 'md' | 'lg'} [props.size] - The size of the radio button.
 * @param {boolean} [props.hiddenError] - If true, hides the error message.
 * @param {string} [props.label] - The text label to display next to the radio button.
 * @param {string} [props.className] - Additional custom className for styling the component.
 * @param {Function} props.onChange - Callback function to handle changes to the radio button's checked state.
 * @param {string | number} props.value - The value of the radio button.
 * @param {string} [props.error] - Error message to display if an error occurs.
 * @param {boolean} [props.checked] - Whether the radio button is checked or not.
 * @param {'ltr' | 'rtl'} [props.dir='rtl'] - The direction of the layout (left-to-right or right-to-left).
 *
 * @returns {JSX.Element} Returns the rendered BaseRadioButton component.
 */

export function BaseRadioButton(props: BaseRadioButtonProps<any>): JSX.Element {
  const {
    name,
    id,
    hiddenError,
    label,
    className,
    onChange,
    value,
    error,
    checked,
    dir = 'rtl',
  } = props;

  return (
    <div
      className={`inline-flex items-center relative gap-2 text-xs leading-4 font-normal ${
        dir === 'ltr' ? 'flex-row' : 'flex-row-reverse'
      } ${className}`}
    >
      <input
        id={id}
        type="radio"
        checked={checked}
        name={name}
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
        className="peer relative cursor-pointer appearance-none rounded-full transition-colors duration-300
                  bg-white dark:bg-neutral-500 checked:bg-teal-500 dark:checked:bg-teal-500
                  border border-neutral-300 checked:border-teal-500
                  before:content[''] before:w-2 before:h-2 before:block before:bg-white before:rounded before:opacity-0 checked:before:opacity-100 dark:checked:border-teal-500
                  sm:size-5 sm:before:translate-y-[0.313rem] sm:before:translate-x-[0.313rem] size-4 before:translate-y-[0.188rem] before:translate-x-[0.188rem]"
      />
      <label
        className="relative flex items-center rounded-full cursor-pointer text-neutral-400 peer-checked:text-neutral-900 dark:text-neutral-300 dark:peer-checked:text-white"
        htmlFor={id}
      >
        {label}
      </label>
      {!hiddenError && error && (
        <Typography color="red" variant="body6" className="h-6">
          {error}
        </Typography>
      )}
    </div>
  );
}
