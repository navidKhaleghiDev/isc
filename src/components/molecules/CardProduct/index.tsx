import { Card, Typography } from '@ui/atoms';

type PropsType = {
  label: string;
  value: React.ReactNode;
  className?: string;
};

export function CardProduct({ label, value, className }: PropsType) {
  return (
    <Card
      className={`flex justify-start items-center mb-[6px] sm:mb-6  ${className}`}
    >
      <div className="flex flex-col justify-end items-start w-full">
        <Typography
          color="neutral_dark"
          size="body4"
          className="mb-[6px] font-semibold"
        >
          {label}
        </Typography>
        <Typography
          color="neutral"
          size="body5"
          weight="normal"
          className="
           bg-neutral-100 w-full px-2.5 rounded-lg"
        >
          {value}
        </Typography>
      </div>
    </Card>
  );
}
