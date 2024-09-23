import { Controller, FieldValues } from 'react-hook-form';
import { BaseIcon } from '@ui/atoms/BaseIcon';
import { Typography } from '@ui/atoms/Typography';
import checkBold from '@iconify-icons/ph/check-bold';

import { baseCheckBoxStyles } from '../styles';
import { BaseCheckBoxControllerProps } from '../types';
/**
 * BaseCheckBox component.
 *
 * @param {string} props.id - The id for the checkbox input.
 * @param {FieldPath<T>} props.name - The name of the field in the form.
 * @param {control<T>} props.control - The control object .
 * @param {RegisterOptions<T>} [props.rules] - The validation rules for the checkbox.
 * @param {PathValue<T, Path<T>>} [props.defaultValue] - The default value for the checkbox.
 * @param {'sm' | 'md' } [props.size] - The size of the checkbox.
 * @param {string} [props.label] - The label to display next to the checkbox.
 * @param {string} [props.className] - Additional class names for styling the checkbox.
 * @param {boolean} [props.checked] - Checked state for uncontrolled component.
 *
 * @returns {JSX.Element} The rendered checkbox component.
 */
export function BaseCheckBoxController<T extends FieldValues>(
  props: BaseCheckBoxControllerProps<T>
): JSX.Element {
  const {
    id,
    name,
    control,
    rules,
    defaultValue,
    label,
    className,
    size = 'md',
    dir = 'rtl',
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <div
          className={`flex gap-2 ${
            dir === 'rtl' && 'flex-row-reverse'
          } items-center justify-center`}
        >
          {label && (
            <label htmlFor={id}>
              <Typography
                color="neutralDark"
                variant="body6"
                className={` ${field.disabled && 'opacity-50'} dark:text-white`}
              >
                {label}
              </Typography>
            </label>
          )}
          <div
            className={`inline-flex items-center relative ${className ?? ''}`}
          >
            <input
              id={id}
              type="checkbox"
              checked={Boolean(field.value)}
              name={field.name}
              value={field.value}
              disabled={field.disabled}
              onChange={field.onChange}
              className={baseCheckBoxStyles({
                size,
              })}
            />
            <span className="absolute text-neutral-100 dark:peer-disabled:hidden dark:peer-checked:text-neutral-100 dark:text-neutral-500 peer-disabled:opacity-50 transition-opacity pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <BaseIcon icon={checkBold} size={size === 'md' ? 'xs' : 'sm'} />
            </span>
          </div>
        </div>
      )}
    />
  );
}
