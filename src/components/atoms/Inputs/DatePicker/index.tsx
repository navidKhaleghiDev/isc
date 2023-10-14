import MultiDatePicker, { DateObject } from 'react-multi-date-picker';
import xIcon from '@iconify-icons/ph/x';
import calendarIcon from '@iconify-icons/ph/calendar';
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

export function convertI2ToAD(
  i2Date?: DateObject | DateObject[] | undefined,
  format?: string
): string | string[] | undefined {
  if (!i2Date) return undefined;
  // If i2Date is an array of DateObject(s)
  if (Array.isArray(i2Date)) {
    return i2Date.map((date) => {
      const gregorianDate = new DateObject({
        date: date.toDate(),
        calendar: gregorian,
      });
      return gregorianDate.format(format ?? 'YYYY-MM-DD hh:mm:ss');
    });
  }

  // If i2Date is a single DateObject
  const gregorianDate = new DateObject({
    date: i2Date.toDate(),
    calendar: gregorian,
  });

  return gregorianDate.format(format ?? 'YYYY-MM-DD hh:mm:ss');
}

export function DatePicker(props: DatePickerProps) {
  const {
    control,
    name,
    id,
    placeholder,
    rules,
    fullWidth,
    defaultValue,
    intent,
    label,
    hiddenError,
    className,
    maxDate,
    minDate,
    showTimePicker,
    format,
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className={`${fullWidth ? 'w-full' : 'w-36'} ${className ?? ''}`}>
          {label && (
            <label htmlFor={id} className="block mb-1">
              <Typography color="teal" size="h5">
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
              value={value || ''}
              onChange={(newDate) => {
                // console.log('date.toDate()', newDate.toDate());

                onChange(newDate ?? '');
              }}
              format={format ?? 'HH:mm:ss YYYY/MM/DD'}
              calendar={persian}
              locale={persian_fa}
              placeholder={placeholder}
              calendarPosition="bottom-right"
              containerClassName={fullWidth ? 'w-full' : 'w-36'}
              inputClass={baseInputStyles({
                intent: error?.message ? 'error' : intent,
                className: `${
                  fullWidth ? 'w-full' : 'w-36'
                } h-10 ${className} ${value ? 'pr-8' : ''}`,
                fullWidth,
                size: 'none',
              })}
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
            <Typography color="red" size="caption" className="h-6">
              {error?.message ?? ''}
            </Typography>
          )}
        </div>
      )}
    />
  );
}
