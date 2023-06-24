import { EUserRole, WithPermission } from '@src/helper/hoc/withPermission';
import { Typography } from '@ui/atoms';
import { UsersList } from '@ui/molecules/UsersList';

function UsersPageCp() {
  return (
    <div className="w-full h-full flex flex-col pt-16 items-center px-32">
      <div className="mb-8 ml-auto">
        <Typography size="h4" color="teal">
          لیست کاربران
        </Typography>
      </div>
      <UsersList />
    </div>
  );
}

const UsersPage = WithPermission(UsersPageCp, EUserRole.SUPER_USER, true);
export { UsersPage };
