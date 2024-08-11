import React, { useRef, useState } from 'react';
import { useClickOutside } from '@src/helper/hooks/useClickOutside';

type BaseDropProp = {
  buttonContent: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

export function BaseDropDown({
  buttonContent,
  content,
  className,
}: BaseDropProp) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  useClickOutside({ ref, setValue: setIsOpen, value: isOpen });
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="mx-[0.313rem]">
        <button
          type="button"
          className={`flex justify-center w-full rounded-md ${
            isOpen
              ? 'bg-neutral-300'
              : 'bg-neutral-100 hover:bg-neutral-300 transition-all duration-500 ease-linear'
          }`}
          onClick={handleToggle}
        >
          {buttonContent}
        </button>
      </div>

      {isOpen && <div className="absolute left-0 mt-2 z-20">{content}</div>}
    </div>
  );
}
