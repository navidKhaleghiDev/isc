import { Card, Typography } from '@ui/atoms';
import { TitleMyProduct } from '@ui/molecules/TitleMyProduct';

type PropsType = {
  label: string;
  value: string;
  className?: string;
};

/**
 * CardRuleDetail Component
 *
 * This component renders a card from rules detail.
 *
 * @component
 *
 * @param {PropsType} props - The props for the CardRuleDetail component.
 * @param {string} label - Defines and displays the label title for the card.
 * @param {string} value - Defines and displays the value for the card.
 * @param {string} [className] - Set custom className
 *
 * @returns {JSX.Element} The returned a card detail.
 */

export function CardRuleDetail({ label, value, className }: PropsType) {
  return (
    <Card color="neutral" className={`flex items-center px-4 h-8 ${className}`}>
      <TitleMyProduct title={label} />
      <div className="h-4 w-3 border-r border-neutral-400" />
      <Typography size="h6" className="mr-auto text-neutral-400">
        {value}
      </Typography>
    </Card>
  );
}
