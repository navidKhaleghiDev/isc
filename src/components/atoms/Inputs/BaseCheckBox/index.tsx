import { Controller } from 'react-hook-form';
import { BaseIcon } from '@ui/atoms/BaseIcon';
import checkBold from '@iconify-icons/ph/check-bold';

import { baseCheckBoxStyles } from '../styles';
import { Typography } from '../../Typography';
import { BaseCheckBoxProps } from './types';
/**
 * BaseCheckBox component.
 * It provides a customizable checkbox input with validation and error handling note that for using this component you can  8 8 use two approaches (with react-hook-form & the basic method).
 *
 * @param {object} props.control - The control object .
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
export function BaseCheckBox(props: BaseCheckBoxProps<any>): JSX.Element {
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
          <div className={`inline-flex items-center relative ${className}`}>
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="check"
            >
              {label}
            </label>
            <div className="relative inline-flex items-center">
              <input
                id={id}
                type="checkbox"
                name={field.name}
                value={field.value ?? ''}
                onChange={field.onChange}
                className={baseCheckBoxStyles({
                  intent: error?.message ? 'error' : intent,
                  size,
                })}
              />
              <span className="absolute text-white transition-opacity pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <BaseIcon icon={checkBold} />
              </span>
            </div>
          </div>
          {hiddenError && (
            <Typography color="red" size="body6" className="h-6">
              {error?.message ?? ''}
            </Typography>
          )}
        </>
      )}
    />
  ) : (
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
      <span className="absolute text-white transition-opacity pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <BaseIcon icon={checkBold} />
      </span>
      {hiddenError && (
        <Typography color="red" size="body6" className="h-6">
          {pureError ?? ''}
        </Typography>
      )}
    </div>
  );
}
