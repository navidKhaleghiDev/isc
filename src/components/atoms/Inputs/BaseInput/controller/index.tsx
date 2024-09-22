import { Controller, FieldValues } from 'react-hook-form';
import { Typography } from '@ui/atoms/Typography';

import { IconButtonInput } from '../../IconButtonInput';
import { IconInput } from '../../IconInput';
import {
  baseInputStyles,
  baseInputTextStyles,
  baseInputWarperStyles,
} from '../styles';
import { BaseInputControllerProps } from '../types';

/**
 * BaseInput component that integrates with react-hook-form.
 * It provides a customizable input field with validation and error handling.
 *
 * @template T - The type of the form values.
 * @param {BaseInputProps<T>} props - The properties for the input component.
 * @param {object} props.control - The control object from react-hook-form.
 * @param {string} props.name - The name of the field in the form.
 * @param {string} props.id - The id for the input element.
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @param {object} [props.rules] - The validation rules for the input.
 * @param {string} [props.className] - Additional class names for styling the input.
 * @param {boolean} [props.fullWidth] - Whether the input should take the full width of its container.
 * @param {any} [props.defaultValue] - The default value for the input.
 * @param {React.ReactNode} [props.startIcon] - Icon to display at the start of the input.
 * @param {React.ReactNode} [props.endIcon] - Icon to display at the end of the input.
 * @param {'default' | 'error'} [props.intent] - The intent state of the input, determining its styling.
 * @param {'sm' | 'md' | 'lg'} [props.size] - The size of the input.
 * @param {string} [props.type] - The type of the input.
 * @param {string} [props.label] - The label to display above the input.
 * @param {boolean} [props.hiddenError] - Whether to hide the error message.
 * @param {function} [props.pureOnChange] - Change handler for uncontrolled component.
 * @param {any} [props.pureValue] - Value for uncontrolled component.
 * @param {function} [props.onClickIcon] - Click handler for the icon button input.
 * @param {string} [props.pureError] - Error message for uncontrolled component.
 * @param {number} [props.min] - Minimum value for the input.
 * @param {number} [props.max] - Maximum value for the input.
 * @param {boolean} [props.ltrLabel] - Whether the label should be left-to-right.
 * @param {string} [props.iconButtonIcon] - Icon for the icon button input.
 *
 * @returns {JSX.Element} The rendered input component.
 */

export function BaseInput<T extends FieldValues>(
  props: BaseInputControllerProps<T>
): JSX.Element {
  const {
    control,
    name,
    id,
    placeholder,
    rules,
    className,
    startIcon,
    helpText,
    endIcon,
    fullWidth,
    defaultValue,
    hiddenHelpText,
    intent,
    size,
    type,
    label,
    hiddenError,
    onKeyDown,
    onClickIcon,
    min,
    max,
    dir = 'rtl',
    iconButtonIcon = 'ph:x',
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div
          className={baseInputWarperStyles({
            size,
            fullWidth,
            className: `flex flex-col ${className ?? ''}`,
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
                color="neutralDark"
                variant="body4"
                className="dark:text-white disabled:text-gray-500"
              >
                {label}
              </Typography>
            </label>
          )}
          <div className="relative peer">
            <input
              id={id}
              type={type}
              dir={dir}
              disabled={field.disabled}
              name={field.name}
              value={type !== 'file' ? field.value ?? '' : undefined}
              onChange={(e) => {
                if (type !== 'file') {
                  field.onChange(e);
                } else {
                  field.onChange(e.target.files);
                }
              }}
              onKeyDown={onKeyDown}
              className={baseInputStyles({
                intent: error?.message ? 'error' : intent,
                className: `${(endIcon || onClickIcon) && 'pl-7'} ${
                  startIcon || (onClickIcon && 'pr-7')
                }`,
                fullWidth,
                size,
              })}
              placeholder={placeholder}
              min={min}
              max={max}
            />
            {startIcon && (
              <IconInput
                icon={startIcon}
                intent={intent}
                dir="rtl"
                error={error?.message}
              />
            )}
            {endIcon && (
              <IconInput
                icon={endIcon}
                intent={intent}
                error={error?.message}
              />
            )}
            {onClickIcon && (
              <IconButtonInput
                icon={iconButtonIcon}
                intent={intent}
                onClick={onClickIcon}
                disabled={field.disabled}
                error={error?.message}
                dir={dir}
              />
            )}
          </div>
          <span className={baseInputTextStyles({ size, fullWidth })}>
            {!hiddenError && hiddenHelpText && (
              <Typography
                variant="body6"
                className={`${
                  dir === 'ltr' ? 'text-left' : 'text-right'
                } min-h-10`}
              >
                {helpText}
              </Typography>
            )}
            {!field.disabled && hiddenError && (
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
