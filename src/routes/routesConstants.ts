export enum ERoutes {
  HOME = 'home',
  SERVICES = 'services',
  MY_PRODUCT = 'my-product',
  PRODUCT = 'product',
  SUPPORT = 'support',
  RULES = 'rules',
  RULES_CODE = 'rules-code',
  MY_RULES = 'my-rules',
  DASHBOARD = 'dashboard',
  SETTINGS = 'settings',
  UI = 'ui',
  ERROR_403 = 'error403',
  LOGIN = 'login',
  RESET_PASSWORD = 'reset-password',
  ABOUT_US = 'aboutUs',
  CONTACT_US = 'contactUs',
  PROFILE = 'profile',
  MONITORING_SYSTEM = 'monitoring-systems',
}

export const ROUTES_PATH: Record<ERoutes, string> = {
  home: '/',
  ui: `/${ERoutes.UI}`,
  services: `/${ERoutes.SERVICES}`,
  product: `/${ERoutes.SERVICES}/${ERoutes.PRODUCT}`,
  'rules-code': `/${ERoutes.SERVICES}/${ERoutes.RULES}/${ERoutes.RULES_CODE}`,
  support: `/${ERoutes.SUPPORT}`,
  settings: `/${ERoutes.SETTINGS}`,
  rules: `/${ERoutes.SERVICES}/${ERoutes.RULES}`,
  error403: `/${ERoutes.ERROR_403}`,
  login: `/${ERoutes.LOGIN}`,
  aboutUs: `/${ERoutes.ABOUT_US}`,
  contactUs: `/${ERoutes.CONTACT_US}`,
  dashboard: `/${ERoutes.DASHBOARD}`,
  profile: `/${ERoutes.PROFILE}`,
  'monitoring-systems': `/${ERoutes.SERVICES}/${ERoutes.MONITORING_SYSTEM}`,
  'my-product': `/${ERoutes.MY_PRODUCT}`,
  'my-rules': `/${ERoutes.MY_RULES}`,
  'reset-password': `/${ERoutes.RESET_PASSWORD}`,
};
