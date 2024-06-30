import axios, { InternalAxiosRequestConfig } from "axios";
import Cookies from "cookies-ts";
const cookies = new Cookies();

export const requestInterceptor = (
  config: InternalAxiosRequestConfig<any>
):
  | InternalAxiosRequestConfig<any>
  | Promise<InternalAxiosRequestConfig<any>> => {
  console.log("interceptor FE");

  if (config.url?.includes("/login") || config.url?.includes("/register")) {
    return config;
  }

  let accessToken = cookies.get("access");
  let refreshToken = cookies.get("refresh");
  if (accessToken == null || refreshToken == null) {
    const error = new Error("Authentication fail");
    return Promise.reject(error);
  }
  config.headers.access = accessToken;
  config.headers.refresh = refreshToken;
  return config;
};

axios.interceptors.response.use(
  (reponse) => {
    return reponse;
  },
  (error) => {
    return Promise.reject(error);
  }
);
