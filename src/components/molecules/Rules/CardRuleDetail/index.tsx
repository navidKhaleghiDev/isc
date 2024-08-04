import { Card, Typography } from '@ui/atoms';

type TCardRuleDetailPropType = {
  label: string;
  value: string | number;
  className?: string;
};

/**
 * CardRuleDetail Component
 *
 * This component renders a card from rules detail that the value from the card comes from the prop of it.
 *
 * @component
 *
 * @param {string} label - Defines and displays the label title for the card.
 * @param {string} value - Defines and displays the value for the card.
 * @param {string} [className] - Set custom className
 *
 * @returns {JSX.Element} The returned a card detail.
 */

export function CardRuleDetail({
  label,
  value,
  className,
}: TCardRuleDetailPropType) {
  return (
    <div className="text-center sm:text-start mt-[10px]">
      <Typography
        color="neutral_dark"
        weight="light"
        size="body4"
        className="text-xs sm:text-base sm:font-bold"
      >
        {label}
      </Typography>
      <Card
        color="neutral_light"
        className={`flex justify-center w-[6.438rem] items-center mt-2 rounded-lg md:w-[15.9rem] h-[1.87rem] ${className}`}
      >
        <Typography size="body5" color="neutral">
          {value}
        </Typography>
      </Card>
    </div>
  );
}
