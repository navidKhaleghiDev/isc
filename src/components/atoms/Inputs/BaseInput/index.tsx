import { Typography } from '@ui/atoms/Typography';

import { IconButtonInput } from '../IconButtonInput';
import { IconInput } from '../IconInput';
import { baseInputStyles, baseInputTextStyles } from './styles';
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
 * @param {any} [props.value] - Value for uncontrolled component.
 * @param {function} [props.onClickIcon] - Click handler for the icon button input.
 * @param {string} [props.error] - Error message for uncontrolled component.
 * @param {number} [props.min] - Minimum value for the input.
 * @param {number} [props.max] - Maximum value for the input.
 * @param {boolean} [props.dir] - Whether the label should be left-to-right.
 * @param {string} [props.iconButtonIcon] - Icon for the icon button input (you should add the onClick func to see the icon).
 *
 * @returns {JSX.Element} The rendered input component.
 */

/// I have error inside of how to handel helpText style in different classes

export function BaseInput(props: BaseInputProps<any>): JSX.Element {
  const {
    name,
    id,
    placeholder,
    fullWidth,
    startIcon,
    className,
    endIcon,
    defaultValue,
    intent,
    disabled,
    size,
    type,
    helpText,
    hiddenHelpText,
    label,
    hiddenError,
    onChange,
    onKeyDown,
    value,
    onClickIcon,
    error,
    min,
    max,
    dir = 'rtl',
    iconButtonIcon = 'ph:x',
  } = props;

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className={`mb-[0.13rem] ${
            dir === 'ltr' ? 'text-left' : 'text-right'
          }`}
        >
          <Typography color="neutralDark" variant="body4">
            {label}
          </Typography>
        </label>
      )}
      <div className={`relative base-input ${className || ''}`}>
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
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          className={baseInputStyles({
            intent: error ? 'error' : intent,
            className: `${(endIcon || onClickIcon) && 'pl-7'} ${
              startIcon && 'pr-7'
            }`,
            fullWidth,
            size,
          })}
        />
        {startIcon && (
          <IconInput icon={startIcon} intent={intent} error={error} dir="rtl" />
        )}
        {endIcon && <IconInput icon={endIcon} intent={intent} error={error} />}
        {onClickIcon && (
          <IconButtonInput
            icon={iconButtonIcon}
            intent={intent}
            onClick={onClickIcon}
          />
        )}
      </div>
      <span className={baseInputTextStyles({ size, fullWidth })}>
        {!hiddenError && hiddenHelpText && (
          <Typography
            color="neutralLight"
            variant="body6"
            className={`${dir === 'ltr' ? 'text-left' : 'text-right'} min-h-10`}
          >
            {helpText}
          </Typography>
        )}
        {!disabled && hiddenError && (
          <Typography
            color="red"
            variant="body6"
            className={`${dir === 'ltr' ? 'text-left' : 'text-right'} min-h-10`}
          >
            {error}
          </Typography>
        )}
      </span>
    </div>
  );
}
