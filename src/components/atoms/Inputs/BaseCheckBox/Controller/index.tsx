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
 * @param {string} [props.label] - The label to display next to the checkbox.
 * @param {default | error} [props.intent]
 * @param {boolean} [props.hiddenError] - Makes our error visible
 * @param {string} [props.className] - Additional class names for styling the checkbox.
 * @param {'sm' | 'md' | "responsive" } [props.size="md"] - The size of the checkbox.
 * @param {"rtl|ltr" } [props.dir="rtl"] - The size of the checkbox.
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
    label,
    intent,
    hiddenError,
    className,
    size = 'md',
    dir = 'rtl',
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col items-center justify-center">
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
                  className={` ${field.disabled && 'opacity-50'} ${
                    error && 'text-red-500'
                  } dark:text-white`}
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
                  intent: error ? 'error' : intent,
                  size,
                })}
              />
              <span className="absolute text-neutral-100 dark:peer-disabled:hidden dark:peer-checked:text-neutral-100 dark:text-neutral-500 peer-disabled:opacity-50 transition-opacity pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <BaseIcon icon={checkBold} size={size === 'md' ? 'xs' : 'sm'} />
              </span>
            </div>
          </div>
          {hiddenError && (
            <Typography
              color="red"
              variant="body6"
              className={`${
                dir === 'ltr' ? 'text-left' : 'text-right'
              } min-h-10`}
            >
              {error?.message || ''}
            </Typography>
          )}
        </div>
      )}
    />
  );
}
