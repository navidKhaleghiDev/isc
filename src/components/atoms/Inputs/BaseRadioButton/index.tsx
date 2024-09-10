import { Typography } from '@ui/atoms/Typography';

import { BaseRadioButtonProps } from '../types';
import { baseRadioButton } from '../styles';

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
 * @param {Function} props.pureOnChange - Callback function to handle changes to the radio button's checked state.
 * @param {string | number} props.pureValue - The value of the radio button.
 * @param {string} [props.pureError] - Error message to display if an error occurs.
 * @param {boolean} [props.checked] - Whether the radio button is checked or not.
 * @param {'ltr' | 'rtl'} [props.dir='rtl'] - The direction of the layout (left-to-right or right-to-left).
 *
 * @returns {JSX.Element} Returns the rendered BaseRadioButton component.
 */

export function BaseRadioButton(props: BaseRadioButtonProps<any>): JSX.Element {
  const {
    name,
    id,
    intent,
    size,
    hiddenError,
    label,
    className,
    pureOnChange,
    pureValue,
    pureError,
    checked,
    dir = 'rtl',
  } = props;

  return (
    <div
      className={`inline-flex items-center relative gap-2 ${
        dir === 'ltr' ? 'flex-row' : 'flex-row-reverse'
      } ${className}`}
    >
      <input
        id={id}
        type="radio"
        checked={checked}
        name={name}
        value={pureValue}
        onChange={pureOnChange}
        className={baseRadioButton({
          intent: pureError ? 'error' : intent,
          size,
        })}
      />
      <label
        className="relative flex items-center rounded-full cursor-pointer text-neutral-400 peer-checked:text-neutral-900 dark:text-neutral-300 dark:peer-checked:text-white"
        htmlFor="check"
      >
        {label}
      </label>
      {hiddenError && (
        <Typography color="red" size="body6" className="h-6">
          {pureError ?? ''}
        </Typography>
      )}
    </div>
  );
}
