import { Controller } from 'react-hook-form';

import { BaseInputProps } from '../types';
import { baseInputStyles } from '../styles';
import { Typography } from '../../Typography';
import { IOptionSelect, OptionSelect } from './OptionSelect';

/**
 * BaseSelect component that integrates with react-hook-form.
 * It provides a customizable select (dropdown) field with validation and error handling.
 *
 * @template T - The type of the form values.
 * @param {BaseInputProps<T>} props - The properties for the select component.
 * @param {object} props.control - The control object from react-hook-form.
 * @param {string} props.name - The name of the field in the form.
 * @param {string} props.id - The id for the select element.
 * @param {object} [props.rules] - The validation rules for the select.
 * @param {string} [props.className] - Additional class names for styling the select.
 * @param {boolean} [props.fullWidth] - Whether the select should take the full width of its container.
 * @param {any} [props.defaultValue] - The default value for the select.
 * @param {React.ReactNode} [props.startIcon] - Icon to display at the start of the select.
 * @param {React.ReactNode} [props.endIcon] - Icon to display at the end of the select.
 * @param {'default' | 'error'} [props.intent] - The intent state of the select, determining its styling.
 * @param {'sm' | 'md' | 'lg'} [props.size] - The size of the select.
 * @param {boolean} [props.hiddenError] - Whether to hide the error message.
 *
 * @returns {JSX.Element} The rendered select component.
 */

export function BaseSelect(props: BaseInputProps<any>) {
  const {
    control,
    name,
    id,
    rules,
    className,
    fullWidth,
    defaultValue,
    startIcon,
    endIcon,
    intent,
    size,
    hiddenError,
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div className={`${className} ${fullWidth && 'w-full'}`}>
          {/* {label && (
            <label
              htmlFor={id}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>
          )} */}

          <select
            id={id}
            dir="auto"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            className={baseInputStyles({
              intent: error?.message ? 'error' : intent,
              className: `${endIcon && 'pr-8'} ${startIcon && 'pl-8'}`,
              fullWidth,
              size,
            })}
          >
            <OptionSelect option={{ label: 'انتخاب کنید', value: '' }} />
            {[
              { id: '1', label: 'گزینه', value: 'tow' },
              { id: '2', label: 'گزینه', value: 'tow' },
            ].map((option: IOptionSelect) => (
              <OptionSelect key={option.id} option={option} />
            ))}
          </select>
          {!hiddenError && (
            <Typography color="red" size="caption" className="h-6">
              {error?.message ?? ''}
            </Typography>
          )}
        </div>
      )}
    />
  );
}
