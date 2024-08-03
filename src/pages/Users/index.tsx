import { EUserRole, WithPermission } from '@src/helper/hoc/withPermission';
import { UsersList } from '@ui/molecules/UsersList';

function UsersPageCp() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <UsersList />
    </div>
  );
}

const UsersPage = WithPermission(UsersPageCp, EUserRole.SUPER_USER, true);
export { UsersPage };
