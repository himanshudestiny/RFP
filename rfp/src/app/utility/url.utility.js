const API_BASE_URL = process.env.VUE_APP_API_URL;
const WEB_BASE_URL = window.location.origin;
export const GOOGLE_AUTH_URL =
  API_BASE_URL +
  'oauth2/authorize/google?redirect_uri=' +
  WEB_BASE_URL +
  '/oauth2/redirect';
  const URL_UTILITY = {
    getRfpAdminUrl: API_BASE_URL + 'rfp',
  }
  export default URL_UTILITY;