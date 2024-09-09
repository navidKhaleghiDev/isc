import { useState } from 'react';

interface ToggleButtonProps {
  buttonLabels: string[];
}

export function ToggleButton({ buttonLabels }: ToggleButtonProps) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <main className="grid min-h-screen w-full place-items-center">
      <div
        style={{ fontFamily: 'kalameh' }}
        className="flex gap-4 h-[42px] rounded-md bg-neutral-100 border border-neutral-200 p-1"
      >
        {buttonLabels.map((label) => (
          <button
            id={label}
            value={label}
            onClick={() => setSelected(label)}
            className={`cursor-pointer rounded-md text-center w-full px-[6px] ${
              selected === label ? 'bg-white' : ''
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </main>
  );
}
