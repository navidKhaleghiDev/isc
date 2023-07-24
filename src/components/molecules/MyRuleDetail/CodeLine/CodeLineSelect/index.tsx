import { ChangeEvent } from 'react';

type PropsType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
};
export function CodeLineSelect({ value, onChange, className }: PropsType) {
  return (
    <select
      name="codeAction"
      id="code-action"
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
