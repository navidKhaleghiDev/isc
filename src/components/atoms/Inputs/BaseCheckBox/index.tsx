import { BaseIcon } from '@ui/atoms/BaseIcon';
import checkBold from '@iconify-icons/ph/check-bold';

import { baseCheckBoxStyles } from '../styles';
import { Typography } from '../../Typography';
import { BaseCheckBoxProps } from './types';
/**
 * BaseCheckBox component.
 * It provides a customizable checkbox input and error handling note that for using this component.
 *
 * @param {string} props.name - The name of the field in the form.
 * @param {string} props.id - The id for the checkbox input.
 * @param {any} [props.defaultValue] - The default value for the checkbox.
 * @param {'default' | 'error'} [props.intent] - The intent state of the checkbox, determining its styling.
 * @param {'sm' | 'md'} [props.size] - The size of the checkbox.
 * @param {boolean} [props.hiddenError] - Whether to hide the error message.
 * @param {string} [props.label] - The label to display next to the checkbox.
 * @param {string} [props.className] - Additional class names for styling the checkbox.
 * @param {function} [props.pureOnChange] - Change handler for.
 * @param {any} [props.pureValue] - Value for.
 * @param {string} [props.pureError] - Error message .
 * @param {boolean} [props.checked] - Checked state .
 *
 * @returns {JSX.Element} The rendered checkbox component.
 */
export function BaseCheckBox(props: BaseCheckBoxProps<any>): JSX.Element {
  const {
    name,
    id,
    intent,
    size,
    hiddenError,
    label,
    className,
    checked,
    pureValue,
    pureError,
    pureOnChange,
    ltrLabel = true,
  } = props;

  return (
    <div
      className={`flex gap-2 ${
        ltrLabel && 'flex-row-reverse'
      } items-center justify-center`}
    >
      {label && (
        <label htmlFor={id}>
          <Typography
            color={checked ? `neutral_dark` : 'neutral_light'}
            size="body6"
            weight="light"
          >
            {label}
          </Typography>
        </label>
      )}
      <div className={`inline-flex items-center relative ${className}`}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          name={name}
          value={pureValue}
          onChange={pureOnChange}
          className={baseCheckBoxStyles({
            intent: pureError ? 'error' : intent,
            size,
          })}
        />
        <span className="absolute text-neutral-100  transition-opacity pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <BaseIcon icon={checkBold} size={size === 'md' ? 'xs' : 'sm'} />
        </span>
        {hiddenError && (
          <Typography color="red" size="body6" className="h-6">
            {pureError ?? ''}
          </Typography>
        )}
      </div>
    </div>
  );
}
