import { baseTextareaStyles } from './styles';
import { Typography } from '../../Typography';
import { BaseTextareaProps } from './types';

/**
 * BaseTextarea component that integrates with react-hook-form.
 * It provides a customizable textarea field with validation and error handling.
 *
 * @template T - The type of the form values.
 * @param {BaseTextareaProps<T>} props - The properties for the textarea component.
 * @param {string} props.name - The name of the field in the form.
 * @param {string} props.id - The id for the textarea element.
 * @param {string} [props.placeholder] - The placeholder text for the textarea.
 * @param {string} [props.className] - Additional class names for styling the textarea.
 * @param {boolean} [props.fullWidth] - Whether the textarea should take the full width of its container.
 * @param {any} [props.defaultValue] - The default value for the textarea.
 * @param {'default' | 'error'} [props.intent] - The intent state of the textarea, determining its styling.
 * @param {'sm' | 'md' | 'lg'} [props.size] - The size of the textarea.
 * @param {(event: React.ChangeEvent<HTMLTextAreaElement>) => void} [props.onChange]
 * @param {string} [props.value] - The value assign for the component
 * @param {string} [props.error]
 * @param {rtl | ltr} [props.dir]
 *
 *
 * @returns {JSX.Element} The rendered textarea component.
 */

export function BaseTextarea(props: BaseTextareaProps): JSX.Element {
  const {
    name,
    onChange,
    value,
    label,
    error,
    disabled,
    id,
    placeholder,
    className,
    fullWidth,
    intent,
    size,
    hiddenError,
    dir = 'rtl',
  } = props;
  return (
    <div className={`flex-col items-center border-none ${className ?? ''}`}>
      {label && (
        <label
          htmlFor={id}
          className={`mb-2 ${dir === 'ltr' ? 'text-left' : 'text-right'}`}
        >
          <Typography color="neutralLight" variant="body4">
            {label}
          </Typography>
        </label>
      )}
      <textarea
        id={id}
        disabled={disabled}
        dir="auto"
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
      {hiddenError && (
        <Typography color="red" variant="body6" className="h-6">
          {error ?? ''}
        </Typography>
      )}
    </div>
  );
}
