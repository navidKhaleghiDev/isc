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
 * @param {'sm' | 'md' | 'responsive'} props.size - Defines the size of the switch.
 * @param {string} props.className - className for optional style
 * @returns {JSX.Element} The ToggleButton component.
 */

export function ToggleButton(props: ToggleButtonProps): JSX.Element {
  const { buttonOption, onChange, className, size } = props;

  const handleClick = (index: number) => {
    onChange(index);
  };

  return (
    <div className="flex w-full">
      <div
        className={`${toggleStyles({
          size,
        })} bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 py-1 ${
          className ?? ''
        }`}
      >
        {buttonOption.map(({ id, label }, index) => (
          <button
            type="button"
            // autoFocus={id === 1}
            key={id}
            onClick={() => handleClick(index)}
            className="flex items-center justify-center cursor-pointer rounded-[0.25rem] text-center w-16 mx-1 text-gray-400 focus:text-gray-900 focus:bg-white dark:focus:text-white dark:focus:bg-gray-600 focus:outline-none"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
