import { useForm } from "react-hook-form";
import { registerService } from "../../service/AuthService";
import { User } from "../type/User";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(data: User) {
    registerService(data).then((res) => {});
  }
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit((data) => submit(data))}>
        <h3>Register</h3>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm" />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Register;
