import { useRef, useState } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { useClickOutside } from '@src/helper/hooks/useClickOutside';
import PhCaretDown from '@iconify-icons/ph/caret-down';
import PhCaretLeft from '@iconify-icons/ph/caret-left';

import { DropdownProps, IOptionSelect, StateType } from './type';
import { optionSelectStyles, baseDropDownStyles } from './styles';
import { BaseIcon } from '../BaseIcon';
import { Typography } from '../Typography';
import { LoadingSvg } from '../Svgs/LoadingSvg';
import { BaseCheckBox } from '../Inputs/BaseCheckBox';
import { ChipButton } from '../ChipButton/ChipButton';

const initState: StateType = {
  activeOption: null,
  openOptions: false,
};

/**
 * Dropdown component that allows single or multiple option selection.
 *
 * @template T FieldValues for react-hook-form
 * @param {DropdownProps<T>} props - The props for the Dropdown component
 * @returns {JSX.Element} The Dropdown component
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
  multiple,
  disabled,
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

  const handleOnChange = (option: IOptionSelect, value: any, onChange: any) => {
    if (multiple) {
      const isSelected = value?.some((v: IOptionSelect) => v.id === option.id);
      const newValue = isSelected
        ? value.filter((v: IOptionSelect) => v.id !== option.id)
        : [...(value || []), option];

      onChange(newValue);
      setState({ activeOption: newValue, openOptions: false });
    } else {
      setState({ activeOption: option, openOptions: false });
      onChange(option);
    }
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
              <Typography color="teal" variant="h4">
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
            disabled={loading || disabled}
          >
            {loading ? (
              <div className="w-full flex justify-center">
                <LoadingSvg />
              </div>
            ) : (
              <>
                {multiple && value?.length >= 1 ? (
                  <>
                    {options
                      .filter((option) =>
                        value?.some((v: IOptionSelect) => v.id === option.id)
                      )
                      .slice(0, 2) // Display only the first two selected options
                      .map((option) => (
                        <Typography
                          className="overflow-hidden"
                          key={option.label}
                          variant="body6"
                          type="p"
                        >
                          <ChipButton
                            onClick={() => {
                              const filteredData = value.filter(
                                (v: IOptionSelect) => v.id !== option.id
                              );
                              setState({
                                activeOption: filteredData,
                                openOptions: false,
                              });
                              onChange(filteredData);
                            }}
                            label={option.label}
                            color="default"
                          />
                        </Typography>
                      ))}
                  </>
                ) : (
                  value?.label || placeHolder
                )}
                {value?.length >= 1 && (
                  <Typography variant="body6">{value?.length}</Typography>
                )}
                <BaseIcon
                  icon={state.openOptions ? PhCaretDown : PhCaretLeft}
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
                className={`w-[95%] hover:bg-gray-100 py-1 px-2 rounded-md ml-auto ${
                  leftLabel ? 'text-left' : 'text-right'
                }`}
                onClick={() => {
                  setState(initState);
                  onChange(multiple ? [] : undefined);
                }}
              >
                <Typography type="p" variant="body5">
                  حذف انتخاب
                </Typography>
              </button>
            )}

            {options.map((option: IOptionSelect) => (
              <div
                className="w-[95%] hover:bg-gray-100 py-1 px-2 rounded-md cursor-pointer"
                key={option.id}
              >
                {multiple ? (
                  <div className="flex items-center gap-3">
                    <BaseCheckBox
                      id={option.id.toString()}
                      name={option.label}
                      checked={value?.some(
                        (v: IOptionSelect) => v.id === option.id
                      )}
                      onChange={() => handleOnChange(option, value, onChange)}
                    />
                    <Typography type="p" variant="body5">
                      {option.label}
                    </Typography>
                  </div>
                ) : (
                  <button
                    type="button"
                    className={` w-full ${
                      leftLabel ? 'text-left' : 'text-right'
                    }`}
                    onClick={() => handleOnChange(option, value, onChange)}
                  >
                    <Typography type="p" variant="body5">
                      {option.label}
                    </Typography>
                  </button>
                )}
              </div>
            ))}
          </div>

          {error && (
            <Typography color="red" variant="body6" className="h-6">
              {error?.message ?? ''}
            </Typography>
          )}
        </div>
      )}
    />
  );
}
