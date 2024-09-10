import { memo } from 'react';
import MultiDatePicker, { DateObject } from 'react-multi-date-picker';
import xIcon from '@iconify-icons/ph/x';
import calendarIcon from '@iconify-icons/ph/calendar-blank';
import persian from 'react-date-object/calendars/persian';
import gregorian from 'react-date-object/calendars/gregorian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Controller } from 'react-hook-form';
import { Typography } from '@ui/atoms/Typography';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
// import TimePicker from 'react-multi-date-picker/plugins/analog_time_picker';

import { DatePickerProps } from '../types';
import { baseInputStyles } from '../styles';
import { IconInput } from '../IconInput';
import { IconButtonInput } from '../IconButtonInput';

/* note: convertI2ToAD may be used in some situations and is currently not used in this project and was commented out */

// export function convertI2ToAD(
//   i2Date?: DateObject | DateObject[] | undefined,
//   format?: string
// ): string | string[] | undefined {
//   if (!i2Date) return undefined;
//   // If i2Date is an array of DateObject(s)
//   if (Array.isArray(i2Date)) {
//     return i2Date.map((date) => {
//       const gregorianDate = new DateObject({
//         date: date.toDate(),
//         calendar: gregorian,
//       });
//       return gregorianDate.format(format ?? 'YYYY-MM-DD hh:mm:ss');
//     });
//   }

//   // If i2Date is a single DateObject
//   const gregorianDate = new DateObject({
//     date: i2Date.toDate(),
//     calendar: gregorian,
//   });

//   return gregorianDate.format(format ?? 'YYYY-MM-DD hh:mm:ss');
// }

/**
 * Converts an Islamic calendar date or an array of such dates to Gregorian calendar format.
 *
 * @param {DateObject | DateObject[] | undefined} [i2Date] - The Islamic calendar date(s) to convert. If undefined, the function returns undefined.
 * @param {string} [format='YYYY-MM-DD hh:mm:ss'] - The format string for the output date. Defaults to 'YYYY-MM-DD hh:mm:ss'.
 *
 * @returns {string | string[] | undefined} - The converted Gregorian date as a string, an array of such strings, or undefined if the input is undefined.
 *
 */

export function convertI2ToAD(
  i2Date?: DateObject | DateObject[] | undefined,
  format = 'YYYY-MM-DD hh:mm:ss'
): string | string[] | undefined {
  if (!i2Date) return undefined;

  const convertDate = (date: DateObject) =>
    new DateObject({
      date: date.toDate(),
      calendar: gregorian,
    }).format(format);

  return Array.isArray(i2Date) ? i2Date.map(convertDate) : convertDate(i2Date);
}

/**
 * DatePicker component that integrates with react-hook-form.
 * It provides a customizable date picker with optional time selection.
 *
 * @param {DatePickerProps} props - The properties for the DatePicker component.
 * @param {object} props.control - The control object from react-hook-form.
 * @param {string} props.name - The name of the field in the form.
 * @param {string} props.id - The id for the date picker element.
 * @param {string} [props.placeholder] - The placeholder text for the date picker.
 * @param {object} [props.rules] - The validation rules for the date picker.
 * @param {boolean} [props.fullWidth=false] - Whether the date picker should take the full width of its container.
 * @param {any} [props.defaultValue] - The default value for the date picker.
 * @param {'default' | 'error'} [props.intent] - The intent state of the date picker, determining its styling.
 * @param {string} [props.label] - The label for the date picker.
 * @param {boolean} [props.hiddenError] - Whether to hide the error message.
 * @param {string} [props.className] - Additional class names for styling the date picker.
 * @param {Date} [props.maxDate] - The maximum selectable date.
 * @param {Date} [props.minDate] - The minimum selectable date.
 * @param {boolean} [props.showTimePicker=false] - Whether to show the time picker.
 * @param {string} [props.format='YYYY/MM/DD'] - The date format.
 *
 * @returns {JSX.Element} The rendered date picker component.
 */
export const DatePicker = memo(function DatePicker({
  control,
  name,
  id,
  placeholder,
  rules,
  fullWidth = false,
  defaultValue,
  intent,
  label,
  hiddenError,
  className,
  maxDate,
  minDate,
  showTimePicker = false,
  format = 'YYYY/MM/DD',
}: DatePickerProps) {
  const containerClass = `${fullWidth ? 'w-full' : 'w-36'} ${className || ''}`;
  const inputClass = baseInputStyles({
    intent,
    className: `${fullWidth ? 'w-full' : 'w-36'} h-10 ${className || ''}`,
    fullWidth,
    size: 'none',
  });

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div className={containerClass}>
            {label && (
              <label htmlFor={id} className="block mb-1 h-8 text-right">
                <Typography color="neutral_dark" variant="body4">
                  {label}
                </Typography>
              </label>
            )}
            <div className="relative">
              {value ? (
                <IconButtonInput
                  icon={xIcon}
                  intent={intent}
                  onClick={() => onChange(null)}
                />
              ) : (
                <IconInput icon={calendarIcon} intent={intent} />
              )}

              <MultiDatePicker
                onFocusedDateChange={(newDate) =>
                  onChange(newDate?.isValid ? newDate : '')
                }
                value={value}
                format={format}
                calendar={persian}
                locale={persian_fa}
                placeholder={placeholder}
                calendarPosition="bottom-right"
                containerClassName={containerClass}
                inputClass={inputClass}
                minDate={minDate}
                maxDate={maxDate}
                plugins={
                  showTimePicker
                    ? [<TimePicker position="left" key="time-picker" />]
                    : undefined
                }
              />
            </div>
            {!hiddenError && (
              <Typography color="red" variant="body6" className="h-6">
                {error?.message ?? ''}
              </Typography>
            )}
          </div>
        );
      }}
    />
  );
});
