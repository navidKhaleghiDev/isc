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
import { toastStyle } from './styles';

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
function CloseButton({ closeToast }: CloseButtonProps): JSX.Element {
  return (
    <button
      className="text-white ml-4 self-center justify-start"
      onClick={closeToast}
      aria-label="Close"
      type="button"
    >
      <BaseIcon icon={X} />
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
export function ToastCustomContainer(): JSX.Element {
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
        return <BaseIcon icon={Check} className="mr-2 shrink-0 w-5 h-5" />;
      case 'error':
        return <BaseIcon icon={Warning} size="md" className="mr-2 shrink-0" />;
      case 'info':
        return <BaseIcon icon={Info} size="md" className="mr-2 shrink-0" />;
      case 'warning':
        return <BaseIcon icon={Warning} className="mr-2 shrink-0 w-5 h-5" />;
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
    return `flex items-center flex-row-reverse px-5 sm:py-1 py-0.5 rounded-lg shadow-lg w-[16.25rem] sm:w-[37.5rem] font-kalameh text-base toast-custom ${toastStyle(
      { typeToast: type }
    )}`;
  };

  return (
    <ToastContainer
      closeButton={toastOptions.closeButton}
      closeOnClick={toastOptions.closeOnClick}
      transition={toastOptions.transition}
      hideProgressBar={toastOptions.hideProgressBar}
      className="toast-container-custom"
      toastClassName={(props) => getToastClassName(props)}
      bodyClassName="flex-row-reverse text-left p-0 sm:p-1.5 toast-body-custom"
      icon={(props) => getToastIcon(props)}
      rtl
    />
  );
}
