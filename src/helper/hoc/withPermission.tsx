/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import { useUserContext } from '@context/user/userContext';
import { IUser } from '@src/services/client/users/types';
import { Notification } from '@src/components/atoms';

export enum EUserRole {
  SUPER_USER = 'superUser',
  ADMIN = 'admin',
  ANALYSER = 'analyser',
}

function checkUserRole(user: IUser, userRole: EUserRole): boolean {
  if (!user) {
    return false;
  }
  let hasPermission = false;
  switch (userRole) {
    case EUserRole.SUPER_USER:
      hasPermission = user.is_superuser;
      break;

    case EUserRole.ADMIN:
      hasPermission = user.is_admin;
      break;

    case EUserRole.ANALYSER:
      hasPermission = user.is_analyser;
      break;

    default:
      break;
  }
  return hasPermission;
}

export function WithPermission<T extends Partial<T>>(
  WrappedComponent: React.ComponentType<T>,
  userRole: EUserRole,
  showMessage?: boolean
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  function ComponentWithPermission(props: T) {
    const { user } = useUserContext();

    return checkUserRole(user as IUser, userRole) ? (
      <WrappedComponent {...props} />
    ) : showMessage ? (
      <div className="p-16">
        <Notification title="شما دسترسی به این بخش ندارید" type="error" />
      </div>
    ) : null;
  }

  ComponentWithPermission.displayName = `withPermission(${displayName})`;

  return ComponentWithPermission;
}
