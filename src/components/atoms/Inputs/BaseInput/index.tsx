import PhEye from '@iconify-icons/ph/eye';

import { Typography } from '../../Typography';
import { IconButtonInput } from '../IconButtonInput';
import { IconInput } from '../IconInput';
import { baseInputStyles } from '../styles';
import { BaseInputProps } from '../types';

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

export function BaseInput(props: BaseInputProps<any>): JSX.Element {
  const {
    name,
    id,
    placeholder,
    fullWidth,
    startIcon = true,
    className,
    endIcon,
    defaultValue,
    intent,
    size,
    type,
    label,
    hiddenError,
    pureOnChange,
    onKeyDown,
    pureValue,
    onClickIcon,
    pureError,
    min,
    max,
    ltrLabel = 'rtl',
    iconButtonIcon = 'ph:x',
  } = props;

  // Remember to check the input and the icon for iconButtonClick

  return (
    <div className="w-full flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className={`mb-[0.13rem] ${
            ltrLabel === 'ltr' ? 'text-left' : 'text-right'
          }`}
        >
          <Typography color="neutral_dark" size="body4">
            {label}
          </Typography>
        </label>
      )}
      {onClickIcon && (
        <IconButtonInput
          icon={iconButtonIcon}
          intent={intent}
          onClick={onClickIcon}
        />
      )}
      <div className={`relative ${className}`}>
        <input
          id={id}
          type={type}
          dir={ltrLabel}
          min={min}
          max={max}
          onKeyDownCapture={onKeyDown}
          name={name}
          value={pureValue}
          defaultValue={defaultValue}
          onChange={pureOnChange}
          className={baseInputStyles({
            intent: pureError ? 'error' : intent,
            className: `${endIcon && ' pl-7'} ${startIcon && 'pr-7'}`,
            fullWidth,
            size,
          })}
          placeholder={placeholder}
        />
        {startIcon && <IconInput icon={PhEye} intent={intent} dir="ltr" />}
        {endIcon && <IconInput icon={PhEye} intent={intent} />}
      </div>
      {hiddenError && (
        <Typography
          color="red"
          size="body6"
          className={`${
            ltrLabel === 'ltr' ? 'text-left' : 'text-right'
          } min-h-5`}
        >
          {pureError}
        </Typography>
      )}
    </div>
  );
}
