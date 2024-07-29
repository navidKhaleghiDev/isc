import { BaseIcon, Card, Typography } from '@ui/atoms';
import PhHardDrives from '@iconify-icons/ph/hard-drives';

export function ServerStatus() {
  return (
    <Card
      color="white"
      rounded="md"
      borderColor="neutral_light"
      shadow="sm"
      className="flex flex-col justify-center items-center h-[13.75rem] w-[14.06rem] "
    >
      <div className="flex flex-row justify-start items-center w-48 h-10 rounded-lg bg-red-100 ">
        <BaseIcon icon={PhHardDrives} color="red" className="m-2 w-6 h-6" />
        <Typography color="red" className="text-3 font-normal	">
          Server 1
        </Typography>
      </div>
      <div className="flex flex-row justify-start items-center w-48 h-10 rounded-lg bg-neutral-100 text-neutral-500 ">
        <BaseIcon icon={PhHardDrives} className="m-2 w-6 h-6" />
        <Typography className="text-3 font-normal	">Server 1</Typography>
      </div>
      <div className="flex flex-row justify-start items-center w-48 h-10 rounded-lg bg-teal-100">
        <BaseIcon icon={PhHardDrives} color="teal" className="m-2 w-6 h-6" />
        <Typography color="teal" className="text-3 font-normal	">
          Server 3
        </Typography>
      </div>
      <div className="flex flex-row justify-start items-center w-48 h-10 rounded-lg bg-teal-100">
        <BaseIcon icon={PhHardDrives} color="teal" className="m-2 w-6 h-6" />
        <Typography color="teal" className="text-3 font-normal">
          Server 4
        </Typography>
      </div>
    </Card>
  );
}
