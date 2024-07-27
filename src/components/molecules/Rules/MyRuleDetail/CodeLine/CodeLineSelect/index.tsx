import { ChangeEvent } from 'react';

type PropsType = {
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
 *
 * @returns {JSX.Element} The rendered a select & options.
 */

export function CodeLineSelect({
  value,
  onChange,
  className,
  id,
  disableSelect,
}: PropsType) {
  // const selectOptions = [
  //   { id: 1, label: 'ALERT', value: 'alert' },
  //   { id: 2, label: 'DROP', value: 'drop' },
  //   { id: 3, label: 'BLOCK', value: 'block' },
  //   { id: 4, label: 'PASS', value: 'pass' },
  //   { id: 5, label: 'REJECT', value: 'reject' },
  // ];
  // const { control } = useForm();
  return (
    <>
      <select
        name="codeAction"
        id={id}
        className={`bg-white disabled:text-neutral-300 rounded-md text-xs text-neutral-600 cursor-pointer ${className}`}
        value={value}
        onChange={onChange}
        disabled={disableSelect}
      >
        <option value="alert">ALERT</option>
        <option value="drop">DROP</option>
        <option value="block">BLOCK</option>
        <option value="pass">PASS</option>
        <option value="reject">REJECT</option>
      </select>
      {/* <BaseSelect
        id="selectAllPolicy"
        intent="default"
        selectOptions={selectOptions}
        name="selectAllPolicy"
        control={control}
        defaultValue="alret"
      /> */}
    </>
  );
}
