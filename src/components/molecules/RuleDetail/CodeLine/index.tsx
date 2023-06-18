import { Card, Typography } from '@ui/atoms';
import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';

export function CodeLine({ code }: { code: SliceOrderCodeType }) {
  return (
    <Card className="my-2 font-sans flex text-left p-2">
      <Typography type="span" size="body3" className="text-neutral-400">
        <Typography type="span" color="teal" size="h6" className="mr-2">
          {code.order.toLocaleUpperCase()}
        </Typography>
        {code.code}
      </Typography>
    </Card>
  );
}
