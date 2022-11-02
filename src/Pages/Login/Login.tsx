import { LoginStyled, RegisterStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../Providers/contexts/UserContext";

export interface iLoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({ resolver: yupResolver(formSchema) });

  const { handleLogin } = useContext(UserContext);

  return (
    <LoginStyled>
      <figure>
        <img src={Logo} alt="Logo Kenzie Hub" />
      </figure>

      <div className="loginContainer">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <span> {errors.email?.message} </span>
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <span> {errors.password?.message} </span>
          </div>
          <button className="login">Entrar</button>
          <h2>Ainda não possui uma conta?</h2>
        </form>
        <RegisterStyled to={"/register"}>Cadastre-se</RegisterStyled>
      </div>
    </LoginStyled>
  );
};

export default Login;
