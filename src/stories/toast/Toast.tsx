import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './toast.css';

export type ToastPropsType = {
  className?: string;
  status: 'success' | 'error' | 'default';
  message: string;
};

/**
 *
 * @param className
 * @param status ['success', 'error', 'default']
 * @param message notification messages
 * @returns button and toast container
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
