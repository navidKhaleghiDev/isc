import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './toast.css';

export type ToastPropsType = {
  className?: string;
  status: 'success' | 'error' | 'default';
  message: string;
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
 * @param {'success' | 'error' | 'default'} status - Status of the toast notification (success, error, default).
 * @param {string} message - Message to be displayed in the toast notification.
 *
 * @returns {JSX.Element} Returns the rendered toast component.
 */

export function Toast({ className, status, message }: ToastPropsType) {
  const notify = () => {
    switch (status) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        toast(message);
    }
  };

  return (
    <div className={className}>
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
      <ToastContainer
        rtl
        position="top-right"
        style={{ direction: 'rtl', fontSize: 20 }}
        className="toast-storybook"
      />
    </div>
  );
}
