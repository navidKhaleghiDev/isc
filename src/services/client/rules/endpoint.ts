import { IParamsRules } from './types';

type RulesEndPoints = 'invalid_ips' | 'logs' | 'assign_owner' | 'my_rules' | '';

export const E_RULES_MY_RULES_ID = (id: string) => `/rules/my_rules/${id}/`;

export const E_RULES_VALID_IPS_ID = (id: string) => `/rules/invalid_ips/${id}/`;
export const E_RULES_LIST = ({ pageSize, page, search }: IParamsRules) => {
  const api = `/rules${
    pageSize || page || (search && search !== '') ? '?' : ''
  }${pageSize ? `page_size=${pageSize}` : ''}${page ? `&page=${page}` : ''}${
    search && search !== '' ? `&search=${search}` : ''
  }`;

  return api;
};

// logs
export const E_RULES_LOGS_UPDATE = (id: number) => `${E_RULES('logs')}${id}/`;

export const E_RULES = (endpoint: RulesEndPoints, id?: string) =>
  `rules/${endpoint}/${id || ''} `;
