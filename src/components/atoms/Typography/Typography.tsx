import { createElement } from 'react';

import { typographyStyles } from './styles';
import { ITypography } from './types';

export function Typography({
  color,
  size,
  children,
  className,
  hoverColor,
  type = 'p',
  weight,
}: ITypography) {
  return createElement(
    type,
    {
      className: typographyStyles({
        color,
        weight,
        size,
        hoverColor,
        className,
      }),
    },
    children
  );
}
