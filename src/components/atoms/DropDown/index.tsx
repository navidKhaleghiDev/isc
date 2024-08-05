import { useRef, useState } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { useClickOutside } from '@src/helper/hooks/useClickOutside';

import { DropdownProps, IOptionSelect, StateType } from './type';
import { optionSelectStyles, baseDropDownStyles } from './styles';
import { BaseIcon } from '../BaseIcon';
import { Typography } from '../Typography';
import { LoadingSvg } from '../Svgs/LoadingSvg';

const initState = {
  activeOption: null,
  openOptions: false,
};

/**
 * Dropdown component that integrates with react-hook-form.
 * It provides a customizable dropdown/select input with loading state and validation.
 *
 * @template T - The type of the form values.
 * @param {DropdownProps<T>} props - The properties for the dropdown component.
 * @param {Array<IOptionSelect>} props.options - The list of options to display in the dropdown.
 * @param {boolean} props.fullWidth - Whether the dropdown should take the full width of its container.
 * @param {string} props.placeHolder - The placeholder text to display when no option is selected.
 * @param {object} [props.rules] - The validation rules for the dropdown.
 * @param {object} props.control - The control object from react-hook-form.
 * @param {string} props.name - The name of the field in the form.
 * @param {any} [props.defaultValue] - The default value for the dropdown.
 * @param {string} [props.className] - Additional class names for styling the dropdown.
 * @param {string} [props.label] - The label to display above the dropdown.
 * @param {boolean} [props.loading] - Whether to display a loading spinner instead of the options.
 * @param {boolean} [props.leftLabel] - Whether to align the option labels to the left.
 *
 * @returns {JSX.Element} The rendered dropdown component.
 */

export function Dropdown<T extends FieldValues>({
  options,
  fullWidth,
  placeHolder,
  rules,
  control,
  name,
  defaultValue,
  className,
  size,
  label,
  loading,
  leftLabel,
  valueOnChange,
}: DropdownProps<T>): JSX.Element {
  const ref = useRef(null);
  const [state, setState] = useState<StateType>(initState);

  const toggleOpen = () =>
    setState((prev) => ({ ...prev, openOptions: !prev.openOptions }));

  useClickOutside({
    ref,
    setValue: () => {
      setState((prev) => ({ ...prev, openOptions: false }));
    },
    value: state.openOptions,
  });

  const handleOnChange = (option: IOptionSelect) => {
    setState({ activeOption: option, openOptions: false });
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="relative" ref={ref}>
          {label && (
            <label htmlFor={name} className="block mb-1">
              <Typography color="teal" size="h5">
                {label}
              </Typography>
            </label>
          )}
          <button
            type="button"
            onClick={toggleOpen}
            className={baseDropDownStyles({
              fullWidth,
              size,
              selected: !!value,
              intent: error ? 'error' : 'default',
              className,
            })}
            disabled={loading}
          >
            {loading ? (
              // <LoadingSpinner />
              <div className="w-full flex justify-center">
                <LoadingSvg />
              </div>
            ) : (
              <>
                {options.find((option) => option.id === value)?.label ??
                  placeHolder}
                {/* <BaseIcon icon="ic:round-close" /> */}
                <BaseIcon
                  icon={state.openOptions ? `ph:caret-down` : `ph:caret-left`}
                />
              </>
            )}
          </button>

          <div
            className={optionSelectStyles({
              isShow: state.openOptions,
              fullWidth,
            })}
          >
            {value && (
              <button
                type="button"
                className="w-full p-3 text-right text-gray-600 hover:bg-gray-200"
                onClick={() => {
                  setState(initState);
                  onChange(undefined);
                }}
              >
                حذف انتخاب
              </button>
            )}
            {options.map((option: IOptionSelect) => (
              <button
                type="button"
                key={option.id}
                className={`w-full p-3 hover:bg-gray-200 ${
                  leftLabel ? 'text-left' : 'text-right'
                }`}
                onClick={() => {
                  handleOnChange(option);
                  onChange(option.id);

                  if (valueOnChange) {
                    valueOnChange(option);
                  }
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
          {error && (
            <Typography color="red" size="body6" className="h-6">
              {error?.message ?? ''}
            </Typography>
          )}
        </div>
      )}
    />
  );
}
