import { TableTHead } from './TableTHead';
import { TableTBody } from './TableTBody';
import { ITableProps } from './types';

/**
 * TableContainer Component
 *
 * A container component for rendering a table with a header and body.
 *
 * @component
 *
 * @param {Object} props - The props for the TableContainer component.
 * @param {Array} props.columns - An array of column definitions.
 * @param {Array} props.data - An array of data to be displayed in the table.
 *
 * @returns {JSX.Element} The rendered table container component.
 */
export function TableContainer({ columns, data }: ITableProps): JSX.Element {
  return (
    <div className="w-full relative overflow-x-scroll">
      <table className="min-w-[40rem] table-auto rounded-lg">
        <TableTHead columns={columns} />
        <TableTBody data={data} columns={columns} />
      </table>
    </div>
  );
}
