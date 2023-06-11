import { Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';

export interface IMyRulesCard {
  id: string;
  ip: string;
  createdDate: string;
  updatedDate: string;
}
type PropsType = {
  onClickDelete: (id: string) => void;
  onClickedEdit: (id: string) => void;
  data: IMyRulesCard;
};

export function MyRulesCard({ onClickDelete, onClickedEdit, data }: PropsType) {
  const onClickDeleteButton = () => onClickDelete(data.id);
  const onClickEditButton = () => onClickedEdit(data.id);

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
            1402/02/23
          </Typography>
          <Typography color="neutral" size="body3" type="div" className="px-3">
            1402/02/23
          </Typography>
        </div>
        <Typography color="neutral" size="h5" weight="medium">
          192.186.1.1
        </Typography>
      </div>
    </Card>
  );
}
