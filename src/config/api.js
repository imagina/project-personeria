/*
* In javascript the variables are declared in camelcase but I like use snake case,
* if you want you can rename them as you want and remove the rule in .eslintrc line 35
*/

/* const base_url = env('BASE_URL', 'http://localhost:8000');
const api_url = base_url + '/api';

export default {
  base_url,
  api_url,
  token_url: base_url + '/api/login',
  login_url: base_url + '/api/auth/login',
  logout_url: base_url + '/api/auth/logout'
} */

// eslint-disable-next-line no-undef
const baseUrl = env('BASE_URL', 'http://localhost:8000')
const apiUrl = baseUrl + '/api'

export default {
  baseUrl,
  apiUrl,
  token_url: baseUrl + '/api/login',
  login_url: baseUrl + '/api/auth/login',
  logout_url: baseUrl + '/api/auth/logout'
}
