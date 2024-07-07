import { http } from '@src/services/http';
import { IServerResponse } from '@src/types/services';
import {
  BodyUpdateIp,
  IRulesLogs,
  IBodyAddRule,
  IBodyAssignOwner,
  IBodyUpdateMyRule,
  IIp,
} from './types';
import {
  E_RULES_VALID_IPS,
  E_RULES_MY_RULES,
  E_RULES_VALID_IPS_ID,
  E_RULES_MY_RULES_ID,
  E_RULES_ASSIGN_OWNER,
  E_RULES_LOGS,
  E_RULES_LOGS_UPDATE,
} from './endpoint';

export const API_ADD_VALID_IPS = (body: IIp[]) =>
  http.post<IIp[], IServerResponse<IIp[]>>(E_RULES_VALID_IPS, body);

export const API_DELETE_VALID_IPS = (id: string) =>
  http.delete<string>(E_RULES_VALID_IPS_ID(id));

export const API_UPDATE_VALID_IPS = (id: string, body: BodyUpdateIp) =>
  http.patch<BodyUpdateIp>(E_RULES_VALID_IPS_ID(id), body);

export const API_ADD_RULE = (body: IBodyAddRule) =>
  http.post<IBodyAddRule>(E_RULES_MY_RULES, body);

export const API_DELETE_MY_RULE = (id: string) =>
  http.delete<string>(E_RULES_MY_RULES_ID(id));

export const API_UPDATE_MY_RULE = (id: string, body: IBodyUpdateMyRule) =>
  http.patch<IBodyUpdateMyRule>(E_RULES_MY_RULES_ID(id), body);

export const API_RULES_ASSIGN_OWNER = (body: IBodyAssignOwner) =>
  http.post<IBodyAssignOwner>(E_RULES_ASSIGN_OWNER, body);

// export const API_CONFIG_ANALYZE_LOG = () =>
//   http.get<IAxiosResponse<IAddConfigAnalyze[]>>(E_RULES_LOGS);

export const API_RULES_LOGS_UPDATE = (body: Partial<IRulesLogs>) =>
  http.patch<IRulesLogs>(E_RULES_LOGS_UPDATE(body.id as number), body);

export const API_RULES_LOGS_CREATE = (body: IRulesLogs) =>
  http.post<IRulesLogs>(E_RULES_LOGS, body);
