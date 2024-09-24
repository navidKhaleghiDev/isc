import { BaseIcon } from '@ui/atoms/BaseIcon';
import { Typography } from '@ui/atoms/Typography';
import checkBold from '@iconify-icons/ph/check-bold';

import { baseCheckBoxStyles } from './styles';
import { BaseCheckBoxProps } from './types';
/**
 * BaseCheckBox component.
 *
 * @param {string} props.name
 * @param {string} props.id
 * @param {string} [props.label] - The label to display next to the checkbox.
 * @param {string} [props.className]
 * @param {boolean} [props.checked] - To handel the input  with state.
 * @param {string} [props.error]
 * @param {'default' | 'error'} [props.intent] Different type of checkbox. (style)
 * @param {boolean} [props.hiddenError] - makes our error visible
 * @param {boolean} [props.disabled]
 * @param {function} [props.onChange] - Change handler for checking it.
 * @param {'sm' | 'md' | "responsive"} [props.size = "md"]
 * @param {boolean} [props.dir = "rtl"] - direction of the label
 *
 * @returns {JSX.Element} The rendered checkbox component.
 */

export function BaseCheckBox(props: BaseCheckBoxProps): JSX.Element {
  const {
    name,
    id,
    label,
    className,
    checked,
    error,
    intent,
    hiddenError,
    disabled,
    onChange,
    size = 'md',
    dir = 'rtl',
  } = props;

  // BaseIcon has been modified in other branch so i had to add this condition to size of icon
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`flex gap-2 ${
          dir === 'ltr' && 'flex-row-reverse'
        } items-center justify-center`}
      >
        {label && (
          <label htmlFor={id} className="cursor-pointer">
            <Typography
              color="neutralDark"
              variant="body6"
              className={`${
                disabled && 'opacity-50'
              } leading-4 dark:text-white ${
                error && 'text-red-500 dark:text-red-500'
              } `}
            >
              {label}
            </Typography>
          </label>
        )}
        <div className={`inline-flex items-center relative ${className ?? ''}`}>
          <input
            id={id}
            type="checkbox"
            name={name}
            disabled={disabled}
            checked={checked}
            onChange={(event) => onChange(event.target.checked)}
            className={baseCheckBoxStyles({
              intent: error ? 'error' : intent,
              size,
            })}
          />
          {checked && (
            <span className="absolute text-neutral-100 dark:peer-disabled:hidden dark:peer-checked:text-neutral-100 dark:text-neutral-500 peer-disabled:opacity-50 transition-opacity pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <BaseIcon icon={checkBold} size={size === 'md' ? 'xs' : 'sm'} />
            </span>
          )}
        </div>
      </div>
      {hiddenError && (
        <Typography
          color="red"
          variant="body6"
          className={`${dir === 'ltr' ? 'text-left' : 'text-right'} min-h-10`}
        >
          {error || ''}
        </Typography>
      )}
    </div>
  );
}
