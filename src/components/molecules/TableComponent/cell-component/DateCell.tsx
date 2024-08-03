import { persianDateNumber } from '@src/helper/utils/dateUtils';
import { Typography } from '@ui/atoms';
import { ICellProps } from '../types';

export function DateCell({ row, column, cellKey }: ICellProps) {
  const accessor = column.accessor as string;
  return (
    <td
      key={cellKey}
      className="first-of-type:rounded-tr-lg first-of-type:rounded-br-lg last-of-type:rounded-tl-lg last-of-type:rounded-bl-lg overflow-hidden"
    >
      <Typography size="body5" weight="normal">
        {persianDateNumber(row[accessor])}
      </Typography>
    </td>
  );
}
