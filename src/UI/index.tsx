import { ToastCustomContainer } from '@ui/molecules/ToastCustomContainer';
import { toast } from 'react-toastify';

export function ToastifyTest() {
  return (
    <div>
      <button
        type="button"
        onClick={() => toast.success('یک پیام موفقیت آمیز')}
        className="bg-gray-400 m-2 p-1 rounded-md"
      >
        toast success
      </button>
      <button
        type="button"
        onClick={() => toast.info('یک پیام عمومی')}
        className="bg-gray-400 m-2 p-1 rounded-md"
      >
        toast info
      </button>
      <button
        type="button"
        onClick={() => toast.error('یک پیام خطا')}
        className="bg-gray-400 m-2 p-1 rounded-md"
      >
        toast error
      </button>
      <ToastCustomContainer />
    </div>
  );
}
