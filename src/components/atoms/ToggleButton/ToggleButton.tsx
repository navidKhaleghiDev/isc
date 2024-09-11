import { useState } from 'react';

export interface ButtonOption {
  id: string | number;
  name?: string;
  label: string;
}

export interface ToggleButtonProps {
  buttonLabels: ButtonOption[];
  onChange: (selected: ButtonOption[]) => void;
}

/**
 * ToggleButton component renders a group of buttons that allow for single selection.
 * It accepts an array of button options and triggers an onChange callback when a button is selected.
 *
 * @component
 *
 * @param {Object} props - The properties for the ToggleButton component.
 * @param {Array<ButtonOption>} props.buttonLabels - An array of button options to display.
 * @param {(selected: ButtonOption[]) => void} props.onChange - Callback function triggered when a button is selected.
 *    It receives the currently selected button option(s) as an argument.
 *
 * @returns {JSX.Element} The ToggleButton component.
 */

export function ToggleButton({
  buttonLabels,
  onChange,
}: ToggleButtonProps): JSX.Element {
  const [selected, setSelected] = useState<string | number>();

  const handleClick = (id: string | number) => {
    const selectedButton = buttonLabels.filter((button) => button.id === id);
    if (selectedButton) {
      setSelected(id);
      onChange(selectedButton);
    }
  };

  return (
    <div className="flex w-full">
      <div className="flex h-10 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 py-1 font-kalameh">
        {buttonLabels.map(({ id, label, name }) => (
          <button
            type="button"
            key={id}
            id={`${id}`}
            name={name}
            onClick={() => handleClick(id)}
            className={`cursor-pointer rounded-md text-center w-16 mx-1 text-neutral-400 ${
              selected === id
                ? 'text-neutral-900 bg-white dark:text-white dark:bg-neutral-600'
                : ''
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
