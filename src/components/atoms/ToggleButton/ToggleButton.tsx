import { useState } from 'react';
import { ToggleButtonProps } from './types';
import { toggleStyles } from './styles';

/**
 * ToggleButton component renders a group of buttons that allow for single selection.
 * It accepts an array of button options and triggers an onChange callback when a button is selected.
 *
 * @component
 *
 * @param {Object} props - The properties for the ToggleButton component.
 * @param {Array<ButtonOption>} props.buttonLabels - An array of button options to display.
 * @param {(selected: ButtonOption) => void} props.onChange - Callback function triggered when a button is selected.
 *    It receives the currently selected button option(s) as an argument.
 *
 * @returns {JSX.Element} The ToggleButton component.
 */

export function ToggleButton(props: ToggleButtonProps): JSX.Element {
  const { buttonLabels, onChange, className, size } = props;

  const [selected, setSelected] = useState<string | number>();

  const handleClick = (id: string | number) => {
    const selectedButton = buttonLabels.find((button) => button.id === id);
    if (selectedButton) {
      setSelected(id);
      onChange(selectedButton);
    }
  };

  return (
    <div className="flex w-full">
      <div
        className={`${toggleStyles({
          size,
        })} bg-gray-100 dark:bg-gray-800 border border-gray-200 py-1 font-kalameh  ${className}`}
      >
        {buttonLabels.map(({ id, label, name }) => (
          <button
            type="button"
            key={id}
            id={`${id}`}
            name={name}
            onClick={() => handleClick(id)}
            className={`flex items-center justify-center cursor-pointer rounded-[0.25rem] text-center w-16 mx-1  text-gray-400 ${
              selected === id
                ? 'text-gray-900 bg-white dark:text-white dark:bg-gray-600'
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
