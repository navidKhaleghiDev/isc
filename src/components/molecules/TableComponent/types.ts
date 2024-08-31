type NonEmptyString<T extends string> = T extends '' ? never : T;
type AlignType = 'left' | 'right' | 'center' | 'justify' | 'char';

interface BaseAction {
  type: 'component';
  header?: string;
  accessor: NonEmptyString<string>;
  className?: string;
  align?: AlignType;
}

interface DeleteAction extends BaseAction {
  actionType: 'delete';
  onDelete: (rowId: string | number) => void;
  openModal: (row?: IData) => void;
}

interface AddAction extends BaseAction {
  actionType: 'add';
  onAdd: (rowId: string | number) => void;
  openModal: () => void;
}

interface MoreAction extends BaseAction {
  actionType: 'more';
  onMore?: (rowId: string | number) => void;
  moreRoute: string;
}

interface EditAction extends BaseAction {
  actionType: 'edit';
  onEdit?: (rowId: string | number) => void;
  editRoute: string;
}

type ComponentAction = DeleteAction | AddAction | MoreAction | EditAction;

interface FullNameColumn {
  type: 'fullName';
  header: string;
  accessor: string[];
  className?: string;
  align?: AlignType;
}

interface DefaultColumn {
  type: 'default';
  header: string;
  accessor: NonEmptyString<string>;
  className?: string;
  align?: AlignType;
}

interface DateColumn {
  type: 'date';
  header: string;
  accessor: NonEmptyString<string>;
  className?: string;
  align?: AlignType;
}

export type Column =
  | ComponentAction
  | FullNameColumn
  | DefaultColumn
  | DateColumn;

export interface IData {
  [key: string]: any;
}

export interface ITableProps {
  columns: Column[];
  data: IData[];
  containerClassName?: string;
  tableClassName?: string;
}

export interface ICellProps {
  row: IData;
  column: Column;
  cellKey: string | number;
}
