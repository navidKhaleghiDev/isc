import { IData, Column } from './types';
import { FullNameCell } from './cell-component/FullNameCell';
import { DateCell } from './cell-component/DateCell';
import { DefaultCell } from './cell-component/DefaultCell';
import { ActionCell } from './cell-component/ActionCell';

interface ITableBodyProps {
  data: IData[];
  columns: Column[];
}

/**
 * TableTBody Component
 *
 * A component to render the body of the table.
 *
 * @component
 *
 * @param {Object} props - The props for the TableTBody component.
 * @param {Array} props.data - An array of data to be displayed in the table.
 * @param {Array} props.columns - An array of column definitions.
 *
 * @returns {JSX.Element} The rendered table body component.
 */
export function TableTBody({ data, columns }: ITableBodyProps): JSX.Element {
  return (
    <tbody className="text-center">
      {data.length > 0 &&
        data.map((row) => (
          <tr
            key={row.id}
            className="rounded-lg overflow-hidden even:bg-neutral-100 h-12 align-middle"
          >
            {columns.map((column) => {
              switch (column.type) {
                case 'fullName':
                  return (
                    <FullNameCell
                      column={column}
                      row={row}
                      cellKey={column.type}
                      key={column.type}
                    />
                  );
                case 'date':
                  return (
                    <DateCell
                      column={column}
                      row={row}
                      cellKey={column.accessor}
                      key={column.accessor}
                    />
                  );
                case 'component':
                  return (
                    <ActionCell
                      column={column}
                      row={row}
                      cellKey={column.accessor}
                      key={column.accessor}
                    />
                  );
                case 'default':
                  return (
                    <DefaultCell
                      column={column}
                      row={row}
                      cellKey={column.accessor}
                      key={column.accessor}
                    />
                  );
                default:
                  return null;
              }
            })}
          </tr>
        ))}
    </tbody>
  );
}
