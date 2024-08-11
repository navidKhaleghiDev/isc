import { Typography } from '@ui/atoms';

import { ICellProps } from '../types';
import { cellStyles } from '../styles';

export function FullNameCell({ cellKey, column, row }: ICellProps) {
  const [firstKey, secondKey] = column.accessor;
  return (
    <td key={cellKey} className={`${cellStyles()} ${column?.className}`}>
      <Typography size="body5" weight="normal">
        {row[firstKey]} {row[secondKey]}
      </Typography>
    </td>
  );
}
