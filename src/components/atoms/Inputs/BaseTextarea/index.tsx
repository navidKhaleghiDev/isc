import { Typography } from '@ui/atoms/Typography';

import { baseTextareaStyles } from './styles';
import { BaseTextareaProps } from './types';
import {
  baseInputTextStyles,
  baseInputWarperStyles,
} from '../BaseInput/styles';

/**
 * BaseTextarea component that integrates with react-hook-form.
 *
 * @param {string} props.name - The name of the field in the form.
 * @param {string} props.id - The id for the textarea element.
 * @param {string} [props.placeholder] - The placeholder text for the textarea.
 * @param {string} [props.className] - Additional class names for styling the textarea.
 * @param {boolean} [props.fullWidth] - Whether the textarea should take the full width of its container.
 * @param {'default' | 'error'} [props.intent = default] - The intent state of the textarea, determining its styling.
 * @param {'sm' | 'md' | 'lg'} [props.size] - The size of the textarea.
 * @param {(event: React.ChangeEvent<HTMLTextAreaElement>) => void} [props.onChange]
 * @param {string} [props.value] - The value assign for the component
 * @param {string} [props.helpText]
 * @param {boolean} [props.hiddenHelpText] - Show the visibility of helpText
 * @param {event:React.KeyboardEvent<HTMLInputElement>) => void} [props.onKeyDown] -The function that triggers whn clicked on the keyboard
 * @param {string} [props.error]
 * @param {rtl | ltr} [props.dir=rtl]
 *
 *
 * @returns {JSX.Element} The rendered textarea component.
 */

export function BaseTextarea(props: BaseTextareaProps): JSX.Element {
  const {
    name,
    id,
    placeholder,
    className,
    fullWidth,
    size,
    onChange,
    value,
    error,
    label,
    helpText,
    hiddenHelpText,
    disabled,
    hiddenError,
    intent = 'default',
    dir = 'rtl',
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
            color="neutralDark"
            variant="body6"
            className="dark:text-white disabled:text-gray-500"
          >
            {label}
          </Typography>
        </label>
      )}
      <textarea
        id={id}
        disabled={disabled}
        dir={dir}
        name={name}
        value={value}
        onChange={onChange}
        className={baseTextareaStyles({
          intent: error ? 'error' : intent,
          className,
          fullWidth,
          size,
        })}
        placeholder={placeholder}
      />
      <span className={baseInputTextStyles({ size, fullWidth })}>
        {!hiddenError && hiddenHelpText && (
          <Typography
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
