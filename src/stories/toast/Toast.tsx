import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './toast.css';

import { ToastCustomContainer } from '@ui/molecules/ToastCustomContainer';

export type ToastPropsType = {
  className?: string;
  status: 'success' | 'error' | 'info';
  size: 'sm' | 'md' | 'lg' | 'responsive';
  message: string;
  dir: 'rtl' | 'ltr';
};

/**
 * Toast Component
 *
 * This component renders a button to trigger toast notifications using ReactToastify library.
 *
 * @component
 *
 * @param {Object} props - The props for the Toast component.
 * @param {string} [className] - Custom className for the container of the Toast component.
 * @param {'success' | 'error' | 'info'} status - Status of the toast notification (success, error, default).
 * @param {string} message - Message to be displayed in the toast notification.
 *
 * @returns {JSX.Element} Returns the rendered toast component.
 */

export function Toast({
  className,
  status,
  message,
  dir,
  size,
}: ToastPropsType) {
  const notify = () => {
    switch (status) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        toast.info(message);
    }
  };

  return (
    <div className={`${className}`}>
      <button
        onClick={notify}
        style={{
          border: '1px solid #000000',
          padding: '5px',
          borderRadius: '5px',
        }}
        type="submit"
      >
        نمایش نوتیفیکیشن
      </button>
      <ToastCustomContainer dir={dir} size={size} />
    </div>
  );
}
