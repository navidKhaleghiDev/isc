import { EUserRole, WithPermission } from '@src/helper/hoc/withPermission';
import { Typography } from '@ui/atoms';
import { UsersList } from '@ui/molecules/UsersList';

function UsersPageCp() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="mb-7 ml-auto sm:hidden block">
        <Typography size="body1" color="neutral_dark" weight="bold">
          لیست کاربران
        </Typography>
      </div>

      <UsersList />
    </div>
  );
}

const UsersPage = WithPermission(UsersPageCp, EUserRole.SUPER_USER, true);
export { UsersPage };
