import { Typography } from '@ui/atoms';

export function TitleSection({ label }: { label: string }) {
  return (
    <Typography
      color="neutral_dark"
      size="h4"
      weight="medium"
      className="w-full my-4 col-span-12"
    >
      {label}
    </Typography>
  );
}
