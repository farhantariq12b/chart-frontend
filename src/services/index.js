const { default: axios } = require("axios");

const BASE_URL = process.env.REACT_APP_CORE_API;
const authInterceptor = [(config) => config, (error) => Promise.reject(error)];

console.log(BASE_URL, '1230912038129REACT_APP_CORE_API')
const Service = (url) => {
  return axios.create({
    baseURL: BASE_URL + url
  })
};

const AuthorizedService = (url) => {
  const authService = Service(url);
  authService.interceptors.request.use(...authInterceptor);
  return authService;
}

export const ModuleService = (url) => AuthorizedService(url);