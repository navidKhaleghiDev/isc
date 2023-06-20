import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import { BodyId, BodyUpdateIp, IIp } from './types';
import {
  E_RULES_VALID_IPS,
  E_RULES_MY_RULES,
  E_RULES_VALID_IPS_ID,
  E_RULES_MY_RULES_ID,
} from './endpoint';

export const API_ADD_VALID_IPS = (body: IIp[]) =>
  http.post<IIp[], IServerResponse<IIp[]>>(E_RULES_VALID_IPS, body);

export const API_DELETE_VALID_IPS = (id: string) =>
  http.delete<string>(E_RULES_VALID_IPS_ID(id));

export const API_UPDATE_VALID_IPS = (id: string, body: BodyUpdateIp) =>
  http.patch<BodyUpdateIp>(E_RULES_VALID_IPS_ID(id), body);

export const API_ADD_RULE = (body: BodyId) =>
  http.post<BodyId>(E_RULES_MY_RULES, body);

export const API_DELETE_MY_RULE = (id: string) =>
  http.delete<string>(E_RULES_MY_RULES_ID(id));
