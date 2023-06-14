import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import { E_USERS_LOGIN, E_USERS_PATCH, E_USERS_SERVER_AUTH } from './endpoint';
import { IBodyUsersLogin, IUser } from './types';

export const API_USERS_LOGIN = (body: IBodyUsersLogin) =>
  http.post<IBodyUsersLogin, IServerResponse<IUser>>(E_USERS_LOGIN, body);

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
