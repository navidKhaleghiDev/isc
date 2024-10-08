import { useState } from 'react';
import PhEye from '@iconify-icons/ph/eye';
import PhEyeSlash from '@iconify-icons/ph/eye-slash';
import { BaseInputController } from '@ui/atoms/Inputs/BaseInput/Controller';

import { BaseInputControllerProps } from '../BaseInput/types';
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
  BaseInputControllerProps<any>,
  'name' | 'control' | 'placeholder' | 'label' | 'fullWidth' | 'className'
>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BaseInputController
      name={name}
      size="lg"
      id={name}
      label={label}
      control={control}
      placeholder={placeholder}
      type={showPassword ? 'text' : 'password'}
      onClickIcon={() => setShowPassword(!showPassword)}
      startIcon={showPassword ? PhEye : PhEyeSlash}
      rules={{
        required: regexPattern.required,
        pattern: regexPattern.password,
      }}
      fullWidth={fullWidth}
      className={className}
    />
  );
}
