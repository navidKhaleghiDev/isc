import { Card, Typography } from '@ui/atoms';

type TCardRuleDetailPropType = {
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
        className={`flex justify-center w-[103px] items-center mt-2 rounded-lg md:w-[255px] h-[30px] ${className}`}
      >
        <Typography size="body5" color="neutral">
          {value}
        </Typography>
      </Card>
    </div>
  );
}
