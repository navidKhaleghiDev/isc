import checkBold from '@iconify-icons/ph/check-bold';
import { BaseIcon } from '@ui/atoms/BaseIcon';
import { Typography } from '@ui/atoms/Typography';

import { baseCheckBoxStyles } from './styles';
import { BaseCheckBoxProps } from './types';
/**
 * BaseCheckBox component.
 * It provides a customizable checkbox input.
 *
 * @param {string} props.name
 * @param {string} props.id
 * @param {any} [props.defaultValue] - The default value for the checkbox if we set this it is not correct to set the value
 * @param {'default' | 'error'} [props.intent] Different type of checkbox. (style)
 * @param {'sm' | 'md'} [props.size]
 * @param {string} [props.label] - The label to display next to the checkbox.
 * @param {string} [props.className]
 * @param {function} [props.onChange] - Change handler for checking it.
 * @param {any} [props.value] - Note that when we use it we not have to use defaultValue.
 * @param {boolean} [props.checked] - when we want to set the checked active that DOM click event will not work (not recommended)
 * @param {boolean} [props.dir] - direction of the label
 *
 * @returns {JSX.Element} The rendered checkbox component.
 */
export function BaseCheckBox(props: BaseCheckBoxProps): JSX.Element {
  const {
    name,
    id,
    size,
    label,
    className,
    checked,
    value,
    defaultValue,
    defaultChecked,
    disabled,
    onChange,
    dir = 'ltr',
  } = props;

  // BaseIcon has been modified in other branch so i had to add this condition to size of icon
  return (
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
            className={`${disabled && 'opacity-50'} leading-4 dark:text-white`}
          >
            {label}
          </Typography>
        </label>
      )}
      <div className={`inline-flex items-center relative ${className ?? ''}`}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          name={name}
          defaultChecked={defaultChecked}
          value={value}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={onChange}
          className={baseCheckBoxStyles({
            size,
          })}
        />
        <span className="absolute text-neutral-100 dark:peer-disabled:hidden dark:peer-checked:text-neutral-100 dark:text-neutral-500 peer-disabled:opacity-50 transition-opacity pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <BaseIcon icon={checkBold} size={size === 'md' ? 'xs' : 'sm'} />
        </span>
      </div>
    </div>
  );
}
