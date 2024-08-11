import { BaseInput } from '@ui/atoms';

import { useState } from 'react';

import { BaseInputProps } from '../types';
import { regexPattern } from '../utils/regexPattern';

/**
 * PasswordInput component for handling password input fields with show/hide functionality.
 *
 * @param {object} props - The properties for the PasswordInput component.
 * @param {string} props.name - The name attribute for the input field.
 * @param {object} props.control - The control object from react-hook-form.
 * @param {string} [props.label] - The label for the input field.
 * @param {string} [props.placeholder] - The placeholder text for the input field.
 *
 */

export function PasswordInput({
  name,
  control,
  label,
  placeholder,
  fullWidth = false,
  className,
}: Pick<
  BaseInputProps<any>,
  'name' | 'control' | 'placeholder' | 'label' | 'fullWidth' | 'className'
>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BaseInput
      name={name}
      size="lg"
      id={name}
      label={label}
      control={control}
      placeholder={placeholder}
      type={showPassword ? 'text' : 'password'}
      onClickIcon={() => setShowPassword(!showPassword)}
      iconButtonIcon={showPassword ? 'ph:eye' : 'ph:eye-slash'}
      rules={{
        required: regexPattern.required,
        pattern: regexPattern.password,
      }}
      fullWidth={fullWidth}
      className={className}
    />
  );
}
