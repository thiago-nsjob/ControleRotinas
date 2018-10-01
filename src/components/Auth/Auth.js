import auth0 from 'auth0-js';
import AUTH_CONFIG from './auth0-variables'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain:  AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}