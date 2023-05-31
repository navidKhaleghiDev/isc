/* eslint-disable @typescript-eslint/no-unused-vars */
import { cardStyles } from './styles';
import { ICard } from './types';

export function Select({
  children,
  className,
  rounded,
  borderColor,
  border,
  color,
  shadow,
}: ICard) {
  const [label, setLabel];
  return (
    <div className="relative w-[30rem]">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300"
      >
        <span className="text-2xl w-5 h-5 grid place-content-center">
          <i className="bx bx-chevron-down" />
        </span>
      </button>

      <ul className="z-2 absolute mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300">
        <li className="cursor-pointer select-none p-2 hover:bg-gray-200">
          Python
        </li>
        <li className="cursor-pointer select-none p-2 hover:bg-gray-200">
          PHP
        </li>
        <li className="cursor-pointer select-none p-2 hover:bg-gray-200">C#</li>
      </ul>
    </div>
  );
}
