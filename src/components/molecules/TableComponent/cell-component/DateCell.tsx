import { persianDateNumber } from '@src/helper/utils/dateUtils';
import { Typography } from '@ui/atoms';

import { ICellProps } from '../types';
import { cellStyles } from '../styles';

export function DateCell({ row, column, cellKey }: ICellProps) {
  const accessor = column.accessor as string;
  return (
    <td
      key={cellKey}
      className={`${cellStyles()} ${column?.className}`}
      align={column.align}
    >
      <Typography size="body5" weight="normal">
        {persianDateNumber(row[accessor])}
      </Typography>
    </td>
  );
}
