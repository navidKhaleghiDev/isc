import { useLocation, useNavigate } from 'react-router-dom';
import { BaseButton, IconButton } from '../BaseButton';

export type BackButtonProps = {
  withLabel?: boolean;
  onClick?: () => void;
  backToReferrer?: boolean;
};

/**
 * This BackButton component allows navigation to the previous page.
 * It can optionally display a label and handle custom click events.
 * If no custom click handler is provided, it navigates back using React Router.
 *
 * @component
 *
 * @param {Object} props - The properties for the BackButton component.
 * @param {boolean} props.withLabel - Determines if the button should have a label.
 * @param {() => void} [props.onClick] - Optional click handler function.
 * @param {boolean} [props.backToReferrer] - If true, navigate back to referrer.
 *
 * @returns {JSX.Element} The BackButton component.
 */

export function BackButton({
  withLabel,
  onClick,
  backToReferrer,
}: BackButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (!onClick) {
      // Navigate to the new path
      if (backToReferrer) {
        navigate(-1);
      } else {
        const segments = location.pathname.split('/');
        const backSlug = segments.slice(0, -1).join('/');
        navigate(backSlug);
      }
    } else {
      onClick();
    }
  };

  return !withLabel ? (
    <IconButton
      onClick={handleClick}
      icon="ep:back"
      size="xl"
      type="button"
      color="teal"
    />
  ) : (
    <BaseButton
      label="صفحه قبل"
      onClick={handleClick}
      endIcon="ph:arrow-line-left"
    />
  );
}
