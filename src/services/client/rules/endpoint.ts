import { IParamsRules } from './types';

export const E_RULES_VALID_IPS = '/rules/invalid_ips/';
export const E_RULES_VALID_IPS_ID = (id: string) => `/rules/invalid_ips/${id}/`;

export const E_RULES_LIST = ({ pageSize, page, search }: IParamsRules) =>
  `/rules${pageSize || page || search !== '' ? '?' : ''}${
    pageSize ? `page_size=${pageSize}` : ''
  }${page ? `&page=${page}` : ''}${search !== '' ? `&search=${search}` : ''}`;
export const E_RULES_RETRIEVE = (id: string) => `/rules/${id}/`;
export const E_RULES_MY_RULES = '/rules/my_rules/';
export const E_RULES_MY_RULES_ID = (id: string) => `/rules/my_rules/${id}/`;

export const E_RULES_ASSIGN_OWNER = `rules/assign_owner/`;
