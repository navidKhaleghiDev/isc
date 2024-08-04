import ToolTip from '../Tooltip';
import { BackButton, BackButtonProps } from './BackButton';

/**
<<<<<<< HEAD
 * PageBackButton component
 *
 * This component renders a back button that optionally displays that can be rendered with label and without label.
 *
 * @component
 *
 * @param {BackButtonProps} props - The props for the PageBackButton component.
 * @param {boolean} props.withLabel - Whether to show a label with the back button.
 * @param {() => void} [props.onClick] - The click handler for the back button.
 * @param {boolean} [props.backToReferrer] - Whether to navigate back to the referrer.
 *
 * @returns {JSX.Element} The rendered PageBackButton component.
=======
 * PageBackButton component.
 *
 * @component
 * @param {boolean} props.withLabel - Add label to backButton.
 * @param {function} props.onClick - BackButton is clicked functionality.
 * @param {boolean} props.backToReferrer - navigate back to the ref that u provide.
 * @returns {JSX.Element}
>>>>>>> 6b5e316e20f3d4ae876dd0aee9f4b6fe781e8f09
 */

export function PageBackButton({
  withLabel,
  onClick,
  backToReferrer,
}: BackButtonProps): JSX.Element {
  return !withLabel ? (
    <ToolTip tooltip="صفحه قبل" position="left">
      <BackButton />
    </ToolTip>
  ) : (
    <BackButton
      withLabel={withLabel}
      onClick={onClick}
      backToReferrer={backToReferrer}
    />
  );
}
