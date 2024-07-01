import { loginService } from "../../service/AuthService";
import { useForm } from "react-hook-form";
import Cookies from "cookies-ts";
const cookies = new Cookies();
interface LoginProps {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
}

const Login: React.FC<LoginProps> = ({ setScreen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(data: any) {
    loginService(data).then(async (res) => {
      if (res.data.errorCode === 0) {
        cookies.set("access", res.data.data.access);
        cookies.set("refresh", res.data.data.rf);
        localStorage.setItem("uid", res.data.data.userid);
        localStorage.setItem("username", res.data.data.username);
        setScreen(2);
      }
    });
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit((data) => submit(data))}>
        <h3>Login</h3>
        <input {...register("username")} type="text" placeholder="username" />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Login;
