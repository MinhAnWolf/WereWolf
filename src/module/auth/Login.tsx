import { loginService } from "../../service/AuthService";
import { User } from "../../type/User";
import { useForm } from "react-hook-form";
import Cookies from "cookies-ts";
import { io } from "socket.io-client";
import { useEffect } from "react";
const cookies = new Cookies();
interface LoginProps {
  setScreen: React.Dispatch<React.SetStateAction<number>>
}

const Login:React.FC<LoginProps> = ({setScreen}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(data: any) {
    loginService(data).then((res) => {
      if (res) {
        cookies.set("access", res.data.access);
        cookies.set("refresh", res.data.refresh);

        // connect socket
        const socket = io("http://localhost:9999");
        socket.on("connect", () => {
          console.log(socket.id);
        });

        socket.on("disconnect", () => {
          console.log(socket.id);
        });

        localStorage.setItem('items', res.data.id);
        setScreen(0);
      }
    });
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit((data) => submit(data))}>
        <h3>Login</h3>
        <input {...register("username")} type="text" placeholder="username" />
        <input {...register("password")} type="password" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Login;
