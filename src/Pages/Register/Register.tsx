import { LinkStyled, MainStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../Providers/contexts/UserContext";

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .matches(/[A-Z]/, "Deve conter pelo menos 1 letra maiúscula")
      .matches(/[a-z]/, "Deve conter pelo menos 1 letra minúscula")
      .matches(/(\d)/, "Deve conter pelo menos 1 número")
      .matches(/(\W)|_/, "Deve conter pelo menos 1 caracter especial")
      .matches(/.{8,}/, "Deve conter pelo menos 8 caracteres")
      .required("Senha é obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Confirmação de senha inválida")
      .required("Confirmação de senha obrigatória"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({ resolver: yupResolver(formSchema) });

  const { handleRegister } = useContext(UserContext);

  return (
    <MainStyled>
      <div className="headerContainer">
        <figure>
          <img src={Logo} alt="Logo Kenzie Hub" />
        </figure>
        <LinkStyled to={"/"}>Voltar</LinkStyled>
      </div>

      <div className="registerContainer">
        <h1>Crie sua conta</h1>
        <h2>Rapido e grátis, vamos nessa</h2>

        <form onSubmit={handleSubmit(handleRegister)}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <span> {errors.name?.message} </span>
          </div>

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

          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("confirmPassword")}
            />
            <span> {errors.confirmPassword?.message} </span>
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <span> {errors.bio?.message} </span>
          </div>

          <div>
            <label htmlFor="contact">Contato</label>
            <input
              id="contact"
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <span> {errors.contact?.message} </span>
          </div>

          <div className="select">
            <label>Selecionar módulo</label>
            <select id="" {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
          </div>

          <button className="register">Cadastrar</button>
        </form>
      </div>
    </MainStyled>
  );
};

export default Register;
