import { IRules } from '../rules/types';

export interface IBodyUsersLogin {
  email?: string;
  password: string;
}

export interface IBodyAddUser {
  first_name: string;
  last_name: string;
  // date_joined: string;
  email: string;
  is_admin: boolean;
  password: string;
  is_analyser: string;
}
export interface IUser {
  id?: string;
  device_serial: string;
  last_login: string | null;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  username: string | null;
  email: string;
  password: string;
  is_superuser: boolean;
  is_admin: boolean;
  is_analyser: boolean;
  groups: string[];
  user_permissions: string[];
}

export interface IProduct {
  id: string;
  device: {
    id: string;
    brand: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
    };
    category: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
    };
    model: string;
    description: string;
    created_at: string;
    updated_at: string;
  };
  creator: {
    id: string;
    username: string;
    email: string;
    phone_number: string;
    created_by: string;
  };
  owner: {
    id: string;
    username: string;
    email: string;
    phone_number: string;
    created_by: string;
  };
  recommended_rules: IRules[];
  address: string;
  organization_number: string;
  created_at: string;
}

export interface ResponseSwr<T> {
  data: T;
}
