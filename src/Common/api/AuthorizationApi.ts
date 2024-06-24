import { enviroment } from "../../enviroment";

export const AuthApi = {
  postApi: {
    loginApi: enviroment + "/login",
    register: enviroment + "/register",
  },
};
