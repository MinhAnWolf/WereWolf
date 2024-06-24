import axios from "axios";
import { User } from "../type/User";
import { AuthApi } from "../common/api/AuthorizationApi";

export async function registerService(payLoad: User) {
  return await axios.post(AuthApi.postApi.register, payLoad);
}

export async function loginService(payLoad: User) {
  return await axios.post(AuthApi.postApi.loginApi, payLoad);
}
