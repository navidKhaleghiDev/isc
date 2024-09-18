import { Icon } from '@iconify/react';

import { baseIconStyles } from './styles';
import { BaseIconProps } from './types';

/**
 * BaseIcon Component
 *
 * This component renders a icon from Iconify library.
 *
 * @component
 *
 * @param {BaseIconProps} props - The props for the BaseIcon component.
 * @param {neutral | teal | yellow | red | tealLink} color - Determine the color of the icon between [neutral, teal, ...]
 * @param {default | xs | sm | md | lg | xl | xxl | xxxl} size - Determine the size of the icon between [default, xs, sm, md, ...]
 * @param {primary | default} hoverColor - Determine the hover color of the icon between [primary, default]
 * @param {string} [className] - Set custom className
 * @param {string} [icon="fa:home"] - Set icon name from iconify library
 *
 * @returns {JSX.Element} The returned a base icon component.
 */
export function BaseIcon(props: BaseIconProps): JSX.Element {
  const { color, size, hoverColor, className, icon = 'fa:home' } = props;
  return (
    <Icon
      className={baseIconStyles({ size, color, hoverColor, className })}
      icon={icon}
    />
  );
}
