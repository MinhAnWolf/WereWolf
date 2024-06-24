import { useForm } from "react-hook-form";
import { registerService } from "../../service/AuthService";
import { User } from "../../type/User";
interface RegisterProps {
  setScreen: React.Dispatch<React.SetStateAction<number>>
}

const Register:React.FC<RegisterProps> = ({setScreen}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(data: any) {
    console.log(data);
    
    registerService(data).then((res) => {
      if (res) {
        setScreen(2);
      }
    });
  }
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit((data) => submit(data))}>
        <h3>Register</h3>
        <input {...register("username")} type="text" placeholder="username" />
        <input {...register("password")} type="password" placeholder="password" />
        <input {...register("confirmPassword")} type="password" placeholder="confirm" />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Register;
