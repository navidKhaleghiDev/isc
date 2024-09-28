import { Typography } from '@ui/atoms/Typography';

import { IconButtonInput } from '../IconButtonInput';
import { IconInput } from '../IconInput';
import {
  baseInputStyles,
  baseInputTextStyles,
  baseInputWarperStyles,
} from './styles';
import { BaseInputProps } from './types';

/**
 * Base input
 *
 * @template T - The type of the form values.
 * @param {string} props.name
 * @param {string} props.id
 * @param {string} [props.placeholder]
 * @param {string} [props.className]
 * @param {boolean} [props.fullWidth]
 * @param {any} [props.defaultValue]
 * @param {React.ReactNode} [props.startIcon] - Icon to display at the start of the input.
 * @param {React.ReactNode} [props.endIcon] - Icon to display at the end of the input.
 * @param {'default' | 'error'} [props.intent] - The intent state of the input (style)
 * @param {'sm' | 'md' | 'lg'} [props.size] - The size of the input.
 * @param {string} [props.type] - The type of the input.
 * @param {string} [props.label] - The label to display above the input.
 * @param {boolean} [props.hiddenError] - Whether to hide the error message.
 * @param {function} [props.onChange] - Change handler for uncontrolled component.
 * @param {function} [props.onClickIcon] - Click handler for the icon button input.
 * @param {string} [props.error] - Error message for uncontrolled component.
 * @param {number} [props.min] - Minimum value for the input.
 * @param {number} [props.max] - Maximum value for the input.
 * @param {boolean} [props.dir] - Whether the label should be left-to-right.
 * @param {string} [props.iconButtonIcon] - Icon for the icon button input (you should add the onClick func to see the icon).
 *
 * @returns {JSX.Element} The rendered input component.
 */

export function BaseInput(props: BaseInputProps): JSX.Element {
  const {
    name,
    id,
    placeholder,
    fullWidth,
    startIcon,
    className,
    endIcon,
    value,
    disabled,
    size,
    type,
    helpText,
    hiddenHelpText,
    label,
    hiddenError,
    onChange,
    onKeyDown,
    onClickIcon,
    error,
    min,
    max,
    intent = 'default',
    dir = 'rtl',
    iconButtonIcon = 'ph:x',
  } = props;

  return (
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
            className={`dark:text-white ${
              error && !disabled ? 'text-red-500' : 'text-gray-200'
            }  ${disabled ? 'text-gray-200' : 'text-gray-500'}`}
          >
            {label}
          </Typography>
        </label>
      )}
      <div className={`relative peer ${className ?? ''}`}>
        <input
          id={id}
          type={type}
          dir={dir}
          min={min}
          disabled={disabled}
          max={max}
          onKeyDownCapture={onKeyDown}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseInputStyles({
            intent: error ? 'error' : intent,
            className: `${
              (endIcon || (onClickIcon && dir === 'ltr')) && 'pl-7'
            } ${(startIcon || (onClickIcon && dir === 'rtl')) && 'pr-7'}`,
            fullWidth,
            size,
          })}
        />

        {startIcon && (
          <IconInput icon={startIcon} intent={intent} error={error} dir="rtl" />
        )}
        {endIcon && (
          <IconInput icon={endIcon} intent={intent} error={error} dir="ltr" />
        )}
        {onClickIcon && (
          <IconButtonInput
            icon={iconButtonIcon}
            intent={intent}
            onClick={onClickIcon}
            disabled={disabled}
            error={error}
            dir={dir}
          />
        )}
      </div>
      <span className={baseInputTextStyles({ size, fullWidth })}>
        {!hiddenError && hiddenHelpText && (
          <Typography
            variant="body6"
            className={`${dir === 'ltr' ? 'text-left' : 'text-right'} min-h-10`}
          >
            {helpText ?? ''}
          </Typography>
        )}
        {!disabled && hiddenError && (
          <Typography
            color="red"
            variant="body6"
            className={`${dir === 'ltr' ? 'text-left' : 'text-right'} min-h-10`}
          >
            {error ?? ''}
          </Typography>
        )}
      </span>
    </div>
  );
}
