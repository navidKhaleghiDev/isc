export enum ERoutes {
  HOME = 'home',
  DASHBOARD = 'dashboard',
  UI = 'ui',
  ERROR_403 = 'error403',
  LOGIN = 'login',
  RESET_PASSWORD = 'reset-password',
  ABOUT_US = 'aboutUs',
  CONTACT_US = 'contactUs',
  PROFILE = 'profile',
}
export const ROUTES_PATH: Record<ERoutes, string> = {
  home: '/',
  ui: `/${ERoutes.UI}`,
  error403: `/${ERoutes.ERROR_403}`,
  login: `/${ERoutes.LOGIN}`,
  'reset-password': `/${ERoutes.RESET_PASSWORD}`,
  aboutUs: `/${ERoutes.ABOUT_US}`,
  contactUs: `/${ERoutes.CONTACT_US}`,
  dashboard: `/${ERoutes.DASHBOARD}`,
  profile: `/${ERoutes.PROFILE}`,
};
