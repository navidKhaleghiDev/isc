import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import { IUserWithAuth } from '@context/user/userContext';
import {
  E_USERS_LOGIN,
  E_USERS_ID,
  E_USERS_SERVER_AUTH,
  E_USERS,
  E_USERS_PROFILE,
} from './endpoint';
import { IBodyAddUser, IBodySetting, IBodyUsersLogin, IUser } from './types';

export const API_USERS_LOGIN = (body: IBodyUsersLogin) =>
  http.post<IBodyUsersLogin, IServerResponse<IUserWithAuth>>(
    E_USERS_LOGIN,
    body
  );

export const API_USERS_ADD = (body: IBodyAddUser) =>
  http.post<IBodyAddUser, IServerResponse<IUser>>(E_USERS, body);

export const API_USERS_PATCH = (userId: string, body: IBodyUsersLogin) =>
  http.patch<IBodyUsersLogin, IServerResponse<IUser>>(E_USERS_ID(userId), body);

export const API_USERS_UPDATE = (userId: string, body: IBodySetting) =>
  http.patch<IBodySetting, IServerResponse<IUser>>(E_USERS_ID(userId), body);

export const API_USERS_SERVER_AUTH = (body: IBodyUsersLogin) =>
  http.post<IBodyUsersLogin, IServerResponse<string>>(
    E_USERS_SERVER_AUTH,
    body
  );

export const API_USERS_PROFILE = () => http.get<IUserWithAuth>(E_USERS_PROFILE);

export const API_USERS_DELETE = (userId: string) =>
  http.delete(E_USERS_ID(userId));
