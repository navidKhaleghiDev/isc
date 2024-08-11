import { ChangeEvent, useRef } from 'react';
import { BaseSelect } from '@ui/atoms/Inputs/BaseSelect';
import { IconButton } from '@ui/atoms/BaseButton';

type TCodeLineSelectProp = {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  id: string;
  disableSelect?: boolean;
};

/**
 * CodeLineSelect Component
 *
 * This component renders a select & options for code action in rule list
 *
 * @component
 *
 * @param {PropsType} props - The props for the CodeLineSelect component.
 * @param {string} value - Includes value for display to selected option
 * @param {(e: ChangeEvent<HTMLSelectElement>) => void} onChange - handler change function
 * @param {string} [className] - Set custom className
 * @param {string} id - id for changed management
 * @param {boolean} disableSelect - for making the select disable
 *
 *
 * @returns {JSX.Element} The rendered a select & options.
 */

export function CodeLineSelect({
  value,
  onChange,
  className,
  id,
  disableSelect,
}: TCodeLineSelectProp): JSX.Element {
  const selectOptions = [
    { id: 1, label: 'ALERT', value: 'alert' },
    { id: 2, label: 'DROP', value: 'drop' },
    { id: 3, label: 'BLOCK', value: 'block' },
    { id: 4, label: 'PASS', value: 'pass' },
    { id: 5, label: 'REJECT', value: 'reject' },
  ];

  const selectRef = useRef<HTMLSelectElement>(null);
  const handelSelectClick = () => {
    selectRef.current?.showPicker();
  };

  return (
    <div className="relative">
      <BaseSelect
        id={id}
        intent="primary"
        ref={selectRef}
        pureOnChange={onChange}
        pureValue={value}
        disabled={disableSelect}
        selectOptions={selectOptions}
        name="selectAllPolicy"
        className={className}
      />
      <IconButton
        icon="ph:caret-up-down-bold"
        color="white"
        className="size-1 absolute top-1 -right-6"
        onClick={handelSelectClick}
      />
    </div>
  );
}
