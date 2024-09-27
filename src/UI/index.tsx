import { ToastCustomContainer } from '@ui/molecules/ToastCustomContainer';
import { toast } from 'react-toastify';

export function ToastifyTest() {
  return (
    <div>
      <button
        type="button"
        onClick={() => toast.success('یک پیام موفقیت آمیز')}
      >
        toast success
      </button>
      <button type="button" onClick={() => toast.info('یک پیام عمومی')}>
        toast info
      </button>
      <button type="button" onClick={() => toast.error('یک پیام خطا')}>
        toast error
      </button>
      <ToastCustomContainer />
    </div>
  );
}
