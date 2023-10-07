import MultiDatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Controller } from 'react-hook-form';
import { Typography } from '@ui/atoms/Typography';
import { BaseInputProps } from '../types';
import { baseInputStyles } from '../styles';
import { IconInput } from '../IconInput';

export function DatePicker(props: BaseInputProps<any>) {
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
            <IconInput icon="ph:calendar" intent={intent} />
            <MultiDatePicker
              value={value || ''}
              onChange={(date) => {
                onChange(date?.isValid ? date?.toDate?.() : '');
              }}
              format="YYYY/MM/DD"
              calendar={persian}
              locale={persian_fa}
              placeholder={placeholder}
              calendarPosition="bottom-right"
              containerClassName={fullWidth ? 'w-full' : 'w-36'}
              inputClass={baseInputStyles({
                intent: error?.message ? 'error' : intent,
                className: `${fullWidth ? 'w-full' : 'w-36'} h-10 ${className}`,
                fullWidth,
                size: 'none',
              })}
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
