import { enviroment } from "../../enviroment";

export const AuthApi = {
  postApi: {
    loginApi: enviroment.BaseURL + "/login",
    register: enviroment.BaseURL + "/register",
  },
};
