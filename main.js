/**
 * TODO
 * 1 - Check if the client is authenticated
 * 2 - If client is authenticated; redirect to Exchange with correct credentials.
 * 3 - Else;
 *      a. Redirect client to Keycloak
 *      b. Retrieve client login info from Keycloak token.
 *      c. Authenticate client to Exchange
 *      d. Redirect client to Exchange OWA with correct cookies.
 * 4 - Reset the procedure for further connections.
 */
const Keycloak = require('keycloak-js')

let initOptions = {
    url: 'http://localhost:8080', realm: 'Vuejs-Realm', clientId: 'Vuejs-Client', onLoad:'login-required'
}

let keycloak = new Keycloak(initOptions)
