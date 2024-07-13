import { ChangeEvent } from 'react';

type PropsType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  id: string;
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

export function CodeLineSelect({ value, onChange, className, id }: PropsType) {
  return (
    <select
      name="codeAction"
      id={id}
      className={`bg-transparent text-teal-600 cursor-pointer font-bold ${className}`}
      value={value}
      onChange={onChange}
    >
      <option value="alert">ALERT</option>
      <option value="drop">DROP</option>
      <option value="block">BLOCK</option>
      <option value="pass">PASS</option>
      <option value="reject">REJECT</option>
    </select>
  );
}
