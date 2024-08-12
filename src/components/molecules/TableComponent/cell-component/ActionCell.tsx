import DotsThreeVertical from '@iconify-icons/ph/dots-three-vertical';
import PencilSimple from '@iconify-icons/ph/pencil-simple';
import PhPlus from '@iconify-icons/ph/plus';
import PhTrashSimple from '@iconify-icons/ph/trash-simple';
import { Link } from 'react-router-dom';
import { IconButton } from '@ui/atoms/BaseButton';
import { useUserContext } from '@context/user/userContext';

import { ICellProps } from '../types';
import { cellStyles } from '../styles';

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
          icon={PhTrashSimple}
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
          icon={PhPlus}
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
        <Link to={`${column.editRoute}`}>
          <IconButton
            icon={PencilSimple}
            color="default"
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
    <td key={cellKey} className={`${cellStyles()} ${column?.className}`} align="left">
      {row.email !== currentUser?.email && cellContent}
    </td>
  );
}
