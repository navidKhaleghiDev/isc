import { Controller, FieldValues } from 'react-hook-form';

import { Typography } from '@ui/atoms/Typography';

import { baseTextareaStyles } from '../styles';
import { BaseTextareaControllerProps } from '../types';
import {
  baseInputTextStyles,
  baseInputWarperStyles,
} from '../../BaseInput/styles';

/**
 * BaseTextarea component that integrates with react-hook-form.
 * It provides a customizable textarea field with validation and error handling.
 *
 * @template T - The type of the form values.
 * @param {BaseTextareaProps<T>} props - The properties for the textarea component.
 * @param {object} props.control - The control object from react-hook-form.
 * @param {string} props.name - The name of the field in the form.
 * @param {string} props.id - The id for the textarea element.
 * @param {string} [props.placeholder] - The placeholder text for the textarea.
 * @param {object} [props.rules] - The validation rules for the textarea.
 * @param {string} [props.className] - Additional class names for styling the textarea.
 * @param {boolean} [props.fullWidth] - Whether the textarea should take the full width of its container.
 * @param {any} [props.defaultValue] - The default value for the textarea.
 * @param {'default' | 'error'} [props.intent] - The intent state of the textarea, determining its styling.
 * @param {'sm' | 'md' | 'lg'} [props.size] - The size of the textarea.
 * @param {boolean} [props.hiddenError] - Whether to hide the error message.
 *
 * @returns {JSX.Element} The rendered textarea component.
 */

export function BaseTextareaController<T extends FieldValues>(
  props: BaseTextareaControllerProps<T>
) {
  const {
    control,
    name,
    id,
    placeholder,
    rules,
    className,
    hiddenHelpText,
    helpText,
    disabled,
    fullWidth,
    label,
    size,
    showError,
    intent = 'default',
    dir = 'rtl',
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div
          className={baseInputWarperStyles({
            size,
            fullWidth,
            className: 'flex flex-col',
          })}
        >
          {label && (
            <label
              htmlFor={id}
              className={`mb-[0.13rem] ${
                dir === 'ltr' ? 'text-left' : 'text-right'
              }`}
            >
              <Typography
                variant="body6"
                className={`dark:${
                  error && !disabled ? 'text-gray-500' : 'text-white'
                } ${
                  error && !disabled
                    ? 'text-red-500 dark:text-red-500'
                    : 'text-gray-300'
                }  ${disabled ? 'text-gray-300' : 'text-gray-900'}`}
              >
                {label}
              </Typography>
            </label>
          )}
          <textarea
            id={id}
            rows={5}
            cols={50}
            dir={dir}
            name={field.name}
            disabled={disabled}
            value={field.value ?? ''}
            onChange={field.onChange}
            className={baseTextareaStyles({
              intent: error?.message ? 'error' : intent,
              className,
              fullWidth,
              size,
            })}
            placeholder={placeholder}
          />
          <span className={baseInputTextStyles({ size, fullWidth })}>
            {!showError && hiddenHelpText && (
              <Typography
                variant="body6"
                className={`${
                  dir === 'ltr' ? 'text-left' : 'text-right'
                } min-h-10`}
              >
                {helpText ?? ''}
              </Typography>
            )}
            {!field.disabled && showError && (
              <Typography
                color="red"
                variant="body6"
                className={`${
                  dir === 'ltr' ? 'text-left' : 'text-right'
                } min-h-10`}
              >
                {error?.message ?? ''}
              </Typography>
            )}
          </span>
        </div>
      )}
    />
  );
}
