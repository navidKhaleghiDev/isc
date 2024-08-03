import DotsThreeVertical from '@iconify-icons/ph/dots-three-vertical';
import PencilSimple from '@iconify-icons/ph/pencil-simple';
import { Link } from 'react-router-dom';
import { IconButton } from '@ui/atoms/BaseButton';
import { useUserContext } from '@context/user/userContext';
import { ICellProps } from '../types';

export function ActionCell({ cellKey, column, row }: ICellProps) {
  const { user: currentUser } = useUserContext();

  if (column.type !== 'component') {
    return null;
  }

  let cellContent;

  switch (column.actionType) {
    case 'delete':
      cellContent = (
        <IconButton
          icon="ph:trash-simple"
          color="redNoBg"
          onClick={() => {
            column.onDelete(row.id);
            column.openModal(row);
          }}
          size="xxl"
        />
      );
      break;
    case 'add':
      cellContent = (
        <IconButton
          icon="ph:plus"
          color="teal"
          onClick={() => {
            column.onAdd(row.id);
            column.openModal();
          }}
          size="xxl"
        />
      );
      break;
    case 'more':
      cellContent = (
        <Link to={`${column.moreRoute}`} className="w-0">
          <IconButton
            icon={DotsThreeVertical}
            color="neutral"
            type="button"
            size="xxl"
          />
        </Link>
      );
      break;
    case 'edit':
      cellContent = (
        <Link to={`${column.editRoute} ${row.id}`} className="block w-8 m-auto">
          <IconButton
            icon={PencilSimple}
            color="neutral"
            type="button"
            size="xxl"
          />
        </Link>
      );
      break;
    default:
      cellContent = null;
  }

  return (
    <td
      key={cellKey}
      className="first-of-type:rounded-tr-lg first-of-type:rounded-br-lg last-of-type:rounded-tl-lg last-of-type:rounded-bl-lg overflow-hidden"
    >
      {row.email !== currentUser?.email && cellContent}
    </td>
  );
}
