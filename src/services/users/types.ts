export interface IBodyUsersLogin {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  last_login: string;
  first_name: string;
  last_name: string;
  // is_staff: string;
  is_active: boolean;
  date_joined: string;
  username: string;
  email: string;
  // password: string;
  device_serial: string;
  is_superuser: boolean;
  is_admin: boolean;
  // is_analyser: string;
  // groups: string;
  // user_permissions: string;
  is_authenticated: string;
  access_token: string;
  refresh_token: string;
}
