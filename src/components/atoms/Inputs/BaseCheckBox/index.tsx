import { Controller } from 'react-hook-form';

import { baseCheckBoxStyles } from '../styles';
import { Typography } from '../../Typography';
import { BaseCheckBoxProps } from './types';

/**
 * BaseCheckBox component that integrates with react-hook-form.
 * It provides a customizable checkbox input with validation and error handling.
 *
 * @template T - The type of the form values.
 * @param {BaseCheckBoxProps<T>} props - The properties for the checkbox component.
 * @param {object} props.control - The control object from react-hook-form.
 * @param {string} props.name - The name of the field in the form.
 * @param {string} props.id - The id for the checkbox input.
 * @param {object} [props.rules] - The validation rules for the checkbox.
 * @param {any} [props.defaultValue] - The default value for the checkbox.
 * @param {'default' | 'error'} [props.intent] - The intent state of the checkbox, determining its styling.
 * @param {'sm' | 'md' | 'lg'} [props.size] - The size of the checkbox.
 * @param {boolean} [props.hiddenError] - Whether to hide the error message.
 * @param {string} [props.label] - The label to display next to the checkbox.
 * @param {string} [props.className] - Additional class names for styling the checkbox.
 * @param {function} [props.pureOnChange] - Change handler for uncontrolled component.
 * @param {any} [props.pureValue] - Value for uncontrolled component.
 * @param {string} [props.pureError] - Error message for uncontrolled component.
 * @param {boolean} [props.checked] - Checked state for uncontrolled component.
 *
 * @returns {JSX.Element} The rendered checkbox component.
 */

export function BaseCheckBox(props: BaseCheckBoxProps<any>) {
  const {
    control,
    name,
    id,
    rules,
    defaultValue,
    intent,
    size,
    hiddenError,
    label,
    className,
    pureOnChange,
    pureValue,
    pureError,
    checked,
  } = props;
  return control ? (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <>
          <div className={`flex items-center ${className}`}>
            <input
              id={id}
              type="checkbox"
              name={field.name}
              value={field.value ?? ''}
              onChange={field.onChange}
              className={baseCheckBoxStyles({
                intent: error?.message ? 'error' : intent,
                className: 'pl-8',
                size,
              })}
            />
            <label
              htmlFor={id}
              className="mr-2 text-neutral-900 dark:text-neutral-300"
            >
              {label}
            </label>
          </div>
          {!hiddenError && (
            <Typography color="red" size="body6" className="h-6">
              {error?.message ?? ''}
            </Typography>
          )}
        </>
      )}
    />
  ) : (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      name={name}
      value={pureValue}
      onChange={pureOnChange}
      className={baseCheckBoxStyles({
        intent: pureError ? 'error' : intent,
        className: 'pl-8',
        size,
      })}
    />
  );
}
