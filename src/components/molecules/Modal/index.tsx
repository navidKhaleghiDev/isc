import { useClickOutside } from '@src/helper/hooks/useClickOutside';
import { BaseIcon, Typography } from '@ui/atoms';
import { BaseButton, IconButton } from '@ui/atoms/BaseButton';
import { Dispatch, SetStateAction, useRef } from 'react';

type PropsType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export function Modal({ open, setOpen }: PropsType) {
  const ref = useRef(null);
  useClickOutside({ ref, setValue: setOpen, value: open });
  const handleToggle = () => setOpen(!open);
  return open ? (
    <div
      className={` main-modal fixed w-full h-100 inset-0 z-50 animated fadeIn faster main-modal  h-100  overflow-hidden flex justify-center items-center`}
      style={{ background: 'rgba(0, 0, 0, 0.2)' }}
    >
      <div
        ref={ref}
        className="rounded-lg shadow-lg modal-container bg-white w-[36rem] mx-auto z-50 overflow-y-auto"
      >
        <div className="modal-content text-center pb-4">
          <div className="flex justify-between items-center pb-3 bg-teal-600 p-2 h-12">
            <div className="modal-close cursor-pointer z-50">
              <IconButton
                icon="iconamoon:close-bold"
                onClick={handleToggle}
                classNameIcon="h-8 w-8 text-neutral-100"
              />
            </div>
            <BaseIcon
              icon="material-symbols:check"
              className="h-8 w-8 text-neutral-100"
            />
          </div>
          <Typography size="body2" color="neutral" className="my-6">
            قانون جدید با موفقیت اضافه شد.
          </Typography>
          <div className="flex justify-center pt-2">
            <BaseButton label="تایید" onClick={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
