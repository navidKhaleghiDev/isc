import { useRef } from 'react';

import { useClickOutside } from '@src/helper/hooks/useClickOutside';
import { Typography } from '@ui/atoms';
import { BaseButton, IconButton } from '@ui/atoms/BaseButton';
import X from '@iconify-icons/ph/x';

import { containerStyles, contentStyles, headerStyles } from './styles';
import { IModal } from './types';

/**
 * Modal Component
 *
 * A component to display a modal dialog with customizable content, buttons, and styles.
 *
 * @component
 *
 * @param {Object} props - The props for the Modal component.
 * @param {boolean} open - Determines if the modal is open or closed.
 * @param {Function} setOpen - Function to toggle the modal open/close state.
 * @param {'none' | 'error' | 'success'} type - Type of modal (error, success, none).
 * @param {string} title - Title text displayed at the top of the modal.
 * @param {Object} buttonOne - Configuration for the first button in the modal.
 * @param {string} buttonOne.label - Label text for the first button.
 * @param {Function} buttonOne.onClick - Function to handle click events on the first button.
 * @param {boolean} buttonOne.loading - Determines if the first button is in a loading state.
 * @param {Object} buttonTow - Configuration for the second button in the modal.
 * @param {string} buttonTow.label - Label text for the second button.
 * @param {Function} buttonTow.onClick - Function to handle click events on the second button.
 * @param {boolean} buttonTow.loading - Determines if the second button is in a loading state.
 * @param {JSX.Element} content - Custom JSX content to display within the modal.
 * @param {string} description - Additional description text displayed in the modal.
 * @param {string} [classContainer] - Custom className for the modal container.
 *
 * @returns {JSX.Element | null} Returns the rendered modal component or null if not open.
 */

export function Modal({
  open,
  setOpen,
  size,
  type,
  title,
  buttonOne,
  buttonTow,
  content,
  description,
  classContainer,
}: IModal) {
  const ref = useRef(null);
  useClickOutside({ ref, setValue: setOpen, value: open });
  const handleToggle = () => setOpen(!open);

  return open ? (
    <div className="main-modal fixed w-full h-100 inset-0 z-50 animated fadeIn faster main-modal h-100 overflow-hidden flex justify-center sm:items-center items-end backdrop-blur-sm">
      <div
        ref={ref}
        className={`rounded-[1.25rem] shadow-lg modal-container bg-white ${containerStyles(
          { size }
        )} mx-auto z-50 overflow-y-auto shadow-sm ${classContainer}`}
      >
        <div className={contentStyles({ type })}>
          <div className={headerStyles()}>
            <div className="modal-close cursor-pointer z-50">
              <IconButton
                icon={X}
                onClick={handleToggle}
                className=""
                classNameIcon="h-6 w-6 text-gray-400"
                color="neutralNoBg"
              />
            </div>
          </div>
          <div className="sm:p-7 pt-0 max-w-64 m-auto sm:max-w-none">
            {title && (
              <Typography
                variant="body3"
                color="neutral"
                weight="medium"
                className="text-right"
              >
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="body3" color="neutral">
                {description}
              </Typography>
            )}
            {content && (
              <div className="flex justify-center items-center">{content}</div>
            )}
            {(buttonOne || buttonTow) && (
              <div className="flex sm:justify-end justify-center pt-7">
                {buttonOne && (
                  <BaseButton
                    label={buttonOne.label}
                    onClick={buttonOne.onClick}
                    type={buttonOne.color}
                    loading={buttonOne.loading}
                    size={buttonOne.size}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
