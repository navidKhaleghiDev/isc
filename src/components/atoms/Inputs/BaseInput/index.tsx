import { Typography } from '@ui/atoms/Typography';
import { IconButton } from '@ui/atoms/BaseButton';

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
 * @param {React.ReactNode} [props.startIcon] - Icon to display at the start of the input.
 * @param {React.ReactNode} [props.endIcon] - Icon to display at the end of the input.
 * @param {'sm' | 'md' | 'lg'} [props.size] - The size of the input.
 * @param {string} [props.type] - The type of the input.
 * @param {string} [props.label] - The label to display above the input.
 * @param {boolean} [props.hiddenError] - Whether to hide the error message.
 * @param {function} [props.onChange] - Change handler for uncontrolled component.
 * @param {function} [props.onClickIcon] - Click handler for the icon button input.
 * @param {string} [props.error] - Error message for uncontrolled component.
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
    intent,
    className,
    endIcon,
    value,
    disabled,
    size,
    type,
    helpText,
    label,
    hiddenError,
    onChange,
    onClickIcon,
    error,
    dir = 'rtl',
  } = props;
  const rtl = dir === 'rtl';
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
          className={`mb-[0.13rem] ${rtl ? 'text-right' : 'text-left'} `}
        >
          <Typography
            variant="body6"
            className={`dark:text-white ${
              error && !disabled
                ? 'text-red-500 dark:text-red-500'
                : 'text-gray-200'
            }  ${
              disabled ? 'text-gray-200 dark:text-gray-800' : 'text-gray-500'
            }`}
          >
            {label}
          </Typography>
        </label>
      )}
      <div className={`relative peer group ${className ?? ''}`}>
        {startIcon && (
          <IconButton
            icon={startIcon}
            onClick={onClickIcon}
            color={error ? 'redNoBgInput' : 'neutralMedium'}
            className="right-0"
          />
        )}
        {endIcon && (
          <IconButton
            icon={endIcon}
            onClick={onClickIcon}
            color={error ? 'redNoBgInput' : 'neutralMedium'}
            className="left-0"
          />
        )}
        <input
          id={id}
          type={type}
          dir="auto"
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseInputStyles({
            intent: error ? 'error' : intent,
            className: `${startIcon && `pr-8`} ${endIcon && 'pl-8'}`,
            fullWidth,
            size,
          })}
        />
      </div>
      <span className={baseInputTextStyles({ size, fullWidth })}>
        {helpText && <Typography>{helpText}</Typography>}
        {!disabled && !hiddenError && (
          <Typography
            color="red"
            variant="body6"
            className="text-left rtl:text-right min-h-10"
          >
            {error ?? ''}
          </Typography>
        )}
      </span>
    </div>
  );
}
