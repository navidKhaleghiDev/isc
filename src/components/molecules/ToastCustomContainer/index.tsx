import Check from '@iconify-icons/ph/check';
import Warning from '@iconify-icons/ph/warning';
import Info from '@iconify-icons/ph/info';
import X from '@iconify-icons/ph/x';
import { BaseIcon } from '@ui/atoms';

import {
  CloseButtonProps,
  Flip,
  IconProps,
  ToastContainer,
  ToastOptions,
  TypeOptions,
} from 'react-toastify';

import { toastIconStyle, toastStyle } from './styles';

interface ToastCustomContainerProps {
  dir?: 'rtl' | 'ltr';
  size?: 'sm' | 'md' | 'lg' | 'responsive';
}

/**
 * Custom close button component for the toast notification.
 *
 * @component
 *
 * @param {CloseButtonProps} props - The props for the close button component.
 * @param {Function} props.closeToast - Function to close the toast notification.
 *
 * @returns {JSX.Element} The rendered close button component.
 */
function CloseButton({ closeToast, type }: CloseButtonProps): JSX.Element {
  return (
    <button
      className="text-white self-center justify-start"
      onClick={closeToast}
      aria-label="Close"
      type="button"
    >
      <BaseIcon
        icon={X}
        color="neutralNoBg"
        size="md"
        className={`${toastIconStyle({ type })}`}
      />
    </button>
  );
}

/**
 * ToastCustomContainer Component
 *
 * A custom container for displaying toast notifications with custom icons and styles.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered ToastContainer component.
 */
export function ToastCustomContainer({
  dir = 'rtl',
  size = 'lg',
}: ToastCustomContainerProps): JSX.Element {
  const toastOptions: ToastOptions = {
    closeButton: CloseButton,
    closeOnClick: false,
    transition: Flip,
    hideProgressBar: true,
  };

  /**
   * Returns the appropriate icon for the toast notification based on its type.
   *
   * @param {IconProps} props - The props for the icon component.
   * @param {TypeOptions} props.type - The type of the toast notification.
   *
   * @returns {JSX.Element | null} The icon component or null if type is not recognized.
   */
  const getToastIcon = ({ type }: IconProps) => {
    switch (type) {
      case 'success':
        return (
          <BaseIcon
            icon={Check}
            size="md"
            color="neutralNoBg"
            className={`shrink-0 w-5 h-5 ${toastIconStyle({ type })}`}
          />
        );
      case 'error':
        return (
          <BaseIcon
            icon={Warning}
            size="md"
            color="neutralNoBg"
            className={`shrink-0 ${toastIconStyle({ type })}`}
          />
        );
      case 'info':
        return (
          <BaseIcon
            icon={Info}
            size="md"
            color="neutralNoBg"
            className={`shrink-0 ${toastIconStyle({ type })}`}
          />
        );
      case 'warning':
        return (
          <BaseIcon
            icon={Warning}
            size="md"
            color="neutralNoBg"
            className={`shrink-0 w-5 h-5 ${toastIconStyle({ type })}`}
          />
        );
      default:
        return null;
    }
  };

  /**
   * Returns the appropriate class name for the toast notification based on its type.
   *
   * @param {Object} [props] - The props for the toast notification.
   * @param {TypeOptions} [props.type] - The type of the toast notification.
   *
   * @returns {string} The class name for the toast notification.
   */
  const getToastClassName = (props?: { type?: TypeOptions }) => {
    const type = props?.type || 'default';
    return `flex items-center ${
      dir === 'rtl' ? 'flex-row' : 'flex-row-reverse'
    } px-5 rounded-2xl shadow-lg font-kalameh text-base gap-7 toast-custom ${toastStyle(
      { typeToast: type }
    )} ${toastIconStyle({ size })}`;
  };

  return (
    <ToastContainer
      closeButton={toastOptions.closeButton}
      closeOnClick={toastOptions.closeOnClick}
      transition={toastOptions.transition}
      hideProgressBar={toastOptions.hideProgressBar}
      className={`toast-container-custom ${toastIconStyle({ size, dir })}`}
      toastClassName={(props) => getToastClassName(props)}
      bodyClassName={`${
        dir === 'rtl' ? 'flex-row' : 'flex-row-reverse'
      } sm:text-lg text-xs text-left font-normal leading-7 gap-7 sm:p-1.5 toast-body-custom h-full overflow-hidden`}
      icon={(props) => getToastIcon(props)}
      rtl={dir === 'rtl'}
    />
  );
}
