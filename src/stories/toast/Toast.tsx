import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './toast.css';

import { ToastCustomContainer } from '@ui/molecules/ToastCustomContainer';

export type ToastProps = {
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
 * @param {string} [props.className] - Custom className for the container of the Toast component.
 * @param {'success' | 'error' | 'info'} props.status - Status of the toast notification (success, error, default).
 * @param {string} props.message - Message to be displayed in the toast notification.
 * @param {'rtl'| 'ltr'} props.dir - The direction of the component for right to left and left to right.
 * @param {'sm' | 'md' | 'lg' | 'responsive'} props.size - The size in four modes, which can be manually selected between sm, md, and lg, and responsive, which changes automatically according to the size of the device.
 *
 * @returns {JSX.Element} Returns the rendered toast component.
 */

export function Toast(props: ToastProps): JSX.Element {
  const { className, status, message, dir, size } = props;
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
    <div className={`${className} toast-storybook`}>
      <button
        onClick={notify}
        style={{
          border: '1px solid #000000',
          padding: '5px',
          borderRadius: '5px',
          alignItems: 'flex-end',
          alignSelf: 'end',
        }}
        type="submit"
      >
        نمایش نوتیفیکیشن
      </button>
      <ToastCustomContainer dir={dir} size={size} />
    </div>
  );
}
