const ROLE_SUPER_USER = 'ادمین ارشد';
const ROLE_ADMIN = 'ادمین';
const ROLE_ANALYSER = 'تحلیل گر';

/**
 * Gets the role of the user based on their admin and superuser status.
 *
 * @param {boolean} [is_superuser] - Indicates if the user is a superuser.
 * @param {boolean} [is_admin] - Indicates if the user is an admin.
 * @returns {string} The role of the user.
 */

export function getRoleUser(is_superuser?: boolean, is_admin?: boolean) {
  if (is_admin && is_superuser) {
    return ROLE_SUPER_USER;
  }
  if (is_admin) {
    return ROLE_ADMIN;
  }
  return ROLE_ANALYSER;
}
