import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import { IIp } from './types';
import { E_RULES_VALID_IPS } from './endpoint';

export const API_ADD_VALID_IPS = (body: IIp[]) =>
  http.post<IIp[], IServerResponse<IIp[]>>(E_RULES_VALID_IPS, body);
