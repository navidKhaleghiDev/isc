export type RoutePathType =
  | 'home'
  | 'ui'
  | 'services'
  | 'servicesProducts'
  | 'servicesRules'
  | 'servicesRulesCodeName'
  | 'support'
  | 'settings'
  | 'unauthorized'
  | 'login'
  | 'aboutUs'
  | 'contactUs'
  | 'dashboard'
  | 'profile'
  | 'addUser'
  | 'monitoringSystems'
  | 'myProduct'
  | 'myProductName'
  | 'myProductMyRules'
  | 'myProductMyRulesName'
  | 'blog'
  | 'ourServices'
  | 'resetPassword';

export const RoutesName = {
  HOME: 'home',
  SERVICES: 'services',
  PRODUCTS: 'products',
  OUR_SERVICES: 'our-services',
  RULES: 'rules',
  CODE_NAME: 'code-name',
  MY_PRODUCT: 'my-product',
  RULES_NAME: 'rules-name',
  SUPPORT: 'support',
  BLOG: 'blog',
  RULES_CODE: 'rules-code',
  MY_RULES: 'my-rules',
  DASHBOARD: 'dashboard',
  SETTINGS: 'settings',
  UI: 'ui',
  UNAUTHORIZED: 'unauthorized',
  LOGIN: 'login',
  RESET_PASSWORD: 'reset-password',
  ABOUT_US: 'about-us',
  CONTACT_US: 'contact-us',
  PROFILE: 'profile',
  MONITORING_SYSTEM: 'monitoring-systems',
  ADD_USER: 'add-user',
};

export const ROUTES_PATH: Record<RoutePathType, string> = {
  home: '/',
  ui: `/${RoutesName.UI}`,
  addUser: `/${RoutesName.ADD_USER}`,
  services: `/${RoutesName.SERVICES}`,
  servicesProducts: `/${RoutesName.SERVICES}/${RoutesName.PRODUCTS}`,
  servicesRules: `/${RoutesName.SERVICES}/${RoutesName.RULES}`,
  servicesRulesCodeName: `/${RoutesName.SERVICES}/${RoutesName.RULES}/:rulesCodeName`,
  support: `/${RoutesName.SUPPORT}`,
  ourServices: `/${RoutesName.OUR_SERVICES}`,
  blog: `/${RoutesName.BLOG}`,
  settings: `/${RoutesName.SETTINGS}`,
  unauthorized: `/${RoutesName.UNAUTHORIZED}`,
  login: `/${RoutesName.LOGIN}`,
  aboutUs: `/${RoutesName.ABOUT_US}`,
  contactUs: `/${RoutesName.CONTACT_US}`,
  dashboard: `/${RoutesName.DASHBOARD}`,
  profile: `/${RoutesName.PROFILE}`,
  monitoringSystems: `/${RoutesName.SERVICES}/${RoutesName.MONITORING_SYSTEM}`,
  myProduct: `/${RoutesName.MY_PRODUCT}`,
  myProductName: `/${RoutesName.MY_PRODUCT}/:productName`,
  myProductMyRules: `/${RoutesName.MY_PRODUCT}/my-rules`,
  myProductMyRulesName: `/${RoutesName.MY_PRODUCT}/my-rules/:rulesName`,
  resetPassword: `/${RoutesName.RESET_PASSWORD}`,
};
