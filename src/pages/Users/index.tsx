import { EUserRole, WithPermission } from '@src/helper/hoc/withPermission';
import { Typography } from '@ui/atoms';
import { UsersList } from '@ui/molecules/UsersList';

function UsersPageCp() {
  return (
    <div className="w-full h-full flex flex-col items-center p-16">
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
