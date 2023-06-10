import { http } from '@src/services/http';
import { E_USERS_LOGIN } from './endpoint';
import { IBodyUsersLogin } from './types';

export const API_USERS_LOGIN = (body: IBodyUsersLogin) =>
  http.post(E_USERS_LOGIN, body);
