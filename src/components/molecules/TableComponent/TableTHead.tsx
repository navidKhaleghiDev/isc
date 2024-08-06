import { Typography } from '@ui/atoms';

import { Column } from './types';
import { cellStyles } from './styles';

interface ITableTHeadProps {
  columns: Column[];
}

/**
 * TableTHead Component
 *
 * A component to render the header of the table.
 *
 * @component
 *
 * @param {Object} props - The props for the TableTHead component.
 * @param {Array} props.columns - An array of column definitions.
 *
 * @returns {JSX.Element} The rendered table header component.
 */
export function TableTHead({ columns }: ITableTHeadProps): JSX.Element {
  return (
    <thead className="bg-neutral-200 h-12 rounded-lg overflow-hidden">
      <tr className="overflow-hidden">
        {columns ? (
          columns.map((column) => (
            <th
              key={column.type + column.accessor}
              className={`${column?.className} ${cellStyles()}`}
            >
              <Typography size="body5" weight="medium">
                {column.header}
              </Typography>
            </th>
          ))
        ) : (
          <div>loading ...</div>
        )}
      </tr>
    </thead>
  );
}
