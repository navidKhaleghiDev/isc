import { ChangeEvent, useRef } from 'react';
import PhCaretUpDownBold from '@iconify-icons/ph/caret-up-down-bold';
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
    { id: 1, label: 'Alert', value: 'Alert' },
    { id: 2, label: 'Drop', value: 'Drop' },
    { id: 3, label: 'Block', value: 'Block' },
    { id: 4, label: 'Pass', value: 'Pass' },
    { id: 5, label: 'Reject', value: 'Reject' },
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
        className={`${className}`}
      />
      <IconButton
        icon={PhCaretUpDownBold}
        color="neutralNoBg"
        className="size-1 absolute top-1 -right-6"
        onClick={handelSelectClick}
      />
    </div>
  );
}
