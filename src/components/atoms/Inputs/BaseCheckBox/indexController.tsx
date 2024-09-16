import { Controller } from 'react-hook-form';
import { BaseIcon } from '@ui/atoms/BaseIcon';
import checkBold from '@iconify-icons/ph/check-bold';

import { baseCheckBoxStyles } from '../styles';
import { Typography } from '../../Typography';
import { BaseCheckBoxProps } from './types';
/**
 * BaseCheckBox component.
 * It provides a customizable checkbox input with validation and error handling note that the method that we are using is react-hook-form.
 *
 * @param {object} props.control - The control object .
 * @param {string} props.name - The name of the field in the form.
 * @param {string} props.id - The id for the checkbox input.
 * @param {object} [props.rules] - The validation rules for the checkbox.
 * @param {any} [props.defaultValue] - The default value for the checkbox.
 * @param {'default' | 'error'} [props.intent] - The intent state of the checkbox, determining its styling.
 * @param {'sm' | 'md' } [props.size] - The size of the checkbox.
 * @param {boolean} [props.hiddenError] - Whether to hide the error message.
 * @param {string} [props.label] - The label to display next to the checkbox.
 * @param {string} [props.className] - Additional class names for styling the checkbox.
 * @param {boolean} [props.checked] - Checked state for uncontrolled component.
 *
 * @returns {JSX.Element} The rendered checkbox component.
 */
export function BaseCheckBox(props: BaseCheckBoxProps<any>): JSX.Element {
  const {
    id,
    name,
    control,
    rules,
    defaultValue,
    intent,
    size,
    hiddenError,
    label,
    className,
    ltrLabel = false,
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div
          className={`flex gap-2 ${
            ltrLabel && 'flex-row-reverse'
          } items-center justify-center`}
        >
          {label && (
            <label htmlFor={id}>
              <Typography
                color={field.value ? `neutralDark` : 'neutralLight'}
                variant="body6"
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
              checked={Boolean(field.value)}
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              className={baseCheckBoxStyles({
                intent: error ? 'error' : intent,
                size,
              })}
            />
            <span className="absolute text-gray-100 transition-opacity pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <BaseIcon icon={checkBold} size={size === 'md' ? 'xs' : 'sm'} />
            </span>
            {hiddenError && (
              <Typography color="red" variant="body6" className="h-6">
                {error?.message ?? ''}
              </Typography>
            )}
          </div>
        </div>
      )}
    />
  );
}
