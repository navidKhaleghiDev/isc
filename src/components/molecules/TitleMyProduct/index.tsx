import { Typography } from '@ui/atoms';

type TitleMyProductProps = {
  title: string;
};

export function TitleMyProduct({ title }: TitleMyProductProps) {
  return (
    <div className="flex items-center">
      <Typography color="teal" size="h4" className="w-[6rem]">
        {title}
      </Typography>
    </div>
  );
}
