import { Card, Typography } from '@ui/atoms';
import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';
import { CodeLineSelect } from './CodeLineSelect';

type PropsType = { code: SliceOrderCodeType; onChangeOrder: any; id: string };

export function CodeLine({ code, onChangeOrder, id }: PropsType) {
  if (!code?.order || !code?.code) {
    return null;
  }
  return (
    <div dir="ltr">
      <Card className="my-2 font-sans text-left p-2">
        <CodeLineSelect value={code.order} onChange={onChangeOrder} id={id} />
        <Typography type="span" size="body3" className="text-neutral-400">
          {code?.code}
        </Typography>
      </Card>
    </div>
  );
}
