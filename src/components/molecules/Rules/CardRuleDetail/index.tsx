import { Card, Typography } from '@ui/atoms';

type PropsType = {
  label: string;
  value: string | number;
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
    <div className="text-right mt-[10px]">
      <Typography color="neutral_dark" weight="bold" size="body4">
        {label}
      </Typography>
      <Card
        color="neutral_light"
        className={`flex justify-center items-center mt-2 rounded-lg w-[255px] h-[30px] ${className}`}
      >
        <Typography size="body5" color="neutral">
          {value}
        </Typography>
      </Card>
    </div>
  );
}
