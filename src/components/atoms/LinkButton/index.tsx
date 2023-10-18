import { BaseButton } from '@ui/atoms';
import { Link } from 'react-router-dom';

import { IBaseButton } from '../BaseButton/types';

interface ILinkButtonProps extends IBaseButton {
  link: string;
  skip?: boolean;
}

export function LinkButton({
  link,
  skip,
  onClick,
  label,
  disabled,
  submit,
  className,
  startIcon,
  endIcon,
  loading,
  size,
  type,
  fullWidth,
}: ILinkButtonProps) {
  const button = (
    <BaseButton
      onClick={onClick}
      label={label}
      disabled={disabled}
      submit={submit}
      className={className}
      startIcon={startIcon}
      endIcon={endIcon}
      loading={loading}
      size={size}
      type={type}
      fullWidth={fullWidth}
    />
  );

  return !skip ? <Link to={link}>{button}</Link> : button;
}
