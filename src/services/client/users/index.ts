import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import {
  E_USERS_LOGIN,
  E_USERS_PATCH,
  E_USERS_SERVER_AUTH,
  E_USERS,
  E_USERS_PROFILE,
} from './endpoint';
import { IBodyAddUser, IBodyUsersLogin, IUser } from './types';

export const API_USERS_LOGIN = (body: IBodyUsersLogin) =>
  http.post<IBodyUsersLogin, IServerResponse<IUser>>(E_USERS_LOGIN, body);

export const API_USERS_ADD = (body: IBodyAddUser) =>
  http.post<IBodyAddUser, IServerResponse<IUser>>(E_USERS, body);

export const API_USERS_PATCH = (userId: string, body: IBodyUsersLogin) =>
  http.patch<IBodyUsersLogin, IServerResponse<IUser>>(
    E_USERS_PATCH(userId),
    body
  );

export const API_USERS_SERVER_AUTH = (body: IBodyUsersLogin) =>
  http.post<IBodyUsersLogin, IServerResponse<string>>(
    E_USERS_SERVER_AUTH,
    body
  );

export const API_USERS_PROFILE = () => http.get<IUser>(E_USERS_PROFILE);
