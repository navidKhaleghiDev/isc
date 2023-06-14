import { IIp } from '@src/services/client/rules/types';
import { Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';

type PropsType = {
  onClickDelete: (id: string) => void;
  onClickedEdit: (id: string) => void;
  item: IIp;
};

export function IpCard({ onClickDelete, onClickedEdit, item }: PropsType) {
  const onClickDeleteButton = () => onClickDelete(item.id);
  const onClickEditButton = () => onClickedEdit(item.id);

  return (
    <Card
      color="neutral"
      className="border-l-[0.2rem] border-teal-600 flex h-14 items-between px-2 my-2"
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex">
          <IconButton
            icon="ph:note-pencil"
            color="white"
            className="ml-2"
            onClick={onClickEditButton}
          />
          <IconButton
            icon="ph:trash-simple"
            color="red"
            onClick={onClickDeleteButton}
          />
        </div>
        <div className="flex ">
          <Typography color="neutral" size="body3" type="div" className="px-3">
            {item.created_at}
          </Typography>
          <Typography color="neutral" size="body3" type="div" className="px-3">
            {item.updated_at}
          </Typography>
        </div>
        <div className="flex items-center">
          <Typography
            color="neutral"
            size="body3"
            weight="medium"
            className="ml-2"
          >
            ({item.ip_type})
          </Typography>
          <Typography color="neutral" size="h5" weight="medium">
            {item.ip}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
