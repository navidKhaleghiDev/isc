import { ChangeEvent } from 'react';

type PropsType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
export function CodeLineSelect({ value, onChange }: PropsType) {
  return (
    <select
      name="codeAction"
      id="code-action"
      className="bg-transparent text-teal-600 cursor-pointer font-bold"
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
