import { Typography } from '@ui/atoms';
import { collectButtonsStyles } from './styles';

export enum ECollectButtonsValue {
  ALL = 'all',
  PERIOD = 'period',
}
type PropsType = {
  value: ECollectButtonsValue;
  setValue: (value: ECollectButtonsValue) => void;
};

export function CollectButtons({ value, setValue }: PropsType) {
  return (
    <div className="w-full flex flex-col">
      <Typography color="teal" size="h5" className="mb-1">
        انتخاب زمان آموزش داده
      </Typography>
      <div
        className="w-full h-10 inline-flex rounded-md shadow-sm"
        role="group"
      >
        <button
          type="button"
          className={collectButtonsStyles({
            active: value === ECollectButtonsValue.ALL,
            className: `border-2 rounded-r-lg`,
          })}
          onClick={() => setValue(ECollectButtonsValue.ALL)}
        >
          کل زمان
        </button>

        <button
          type="button"
          className={collectButtonsStyles({
            active: value === ECollectButtonsValue.PERIOD,
            className: `border-2 border-r-0 rounded-l-md`,
          })}
          onClick={() => setValue(ECollectButtonsValue.PERIOD)}
        >
          بازه زمانی
        </button>
      </div>
    </div>
  );
}
