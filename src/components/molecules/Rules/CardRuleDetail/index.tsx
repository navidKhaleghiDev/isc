import { Card, Typography } from '@ui/atoms';
import { TitleMyProduct } from '@ui/molecules/TitleMyProduct';

type PropsType = {
  label: string;
  value: string;
  className?: string;
};

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
