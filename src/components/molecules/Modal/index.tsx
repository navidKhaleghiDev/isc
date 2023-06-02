/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useClickOutside } from '@src/helper/hooks/useClickOutside';
import { useRef, useState } from 'react';

export function Modal() {
  const ref = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  useClickOutside({ ref, setValue: setOpen, value: open });
  const handleToggle = () => setOpen(!open);
  return (
    <>
      <div>
        <button
          type="button"
          onClick={handleToggle}
          className="bg-blue-500 text-white p-2 rounded text-2xl font-bold"
        >
          Open Modal
        </button>
      </div>

      {open && (
        <div
          className={` main-modal fixed w-full h-100 inset-0 z-50 animated fadeIn faster main-modal  h-100  overflow-hidden flex justify-center items-center`}
          style={{ background: 'rgba(0, 0, 0, 0.7)' }}
        >
          <div
            ref={ref}
            className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto"
          >
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Header</p>
                <div className="modal-close cursor-pointer z-50">
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                  </svg>
                </div>
              </div>
              <div className="my-5">
                <p>
                  Inliberali Persius Multi iustitia pronuntiaret expeteretur
                  sanos didicisset laus angusti ferrentur arbitrium arbitramur
                  huic desiderent.?
                </p>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleToggle}
                  type="button"
                  className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
