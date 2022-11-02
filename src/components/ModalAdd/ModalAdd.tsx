import { useForm } from "react-hook-form";
import { ModalAddStyled } from "./styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import TechContext from "../../Providers/contexts/TechContext";

export interface iTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

const ModalAdd = () => {
  const { setShowModal, onSubmitFunction } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup
      .string()
      .max(17, "Máximo 17 caracteres")
      .required("Nome obrigatório"),
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTech>({ resolver: yupResolver(formSchema) });

  return (
    <ModalAddStyled>
      <div className="overlay">
        <div className="content">
          <div className="header">
            <h2>Cadastrar Tecnologia</h2>
            <button
              onClick={() => {
                setShowModal(null);
              }}
            >
              X
            </button>
          </div>
          <div className="mainContent">
            <div>
              <label>
                {" "}
                Nome{" "}
                <input
                  type="text"
                  placeholder="Nome"
                  {...register("title")}
                />{" "}
              </label>
              <span> {errors.title?.message} </span>
            </div>

            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <div>
                <label>Adiicionar status</label>
                <select {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>
              <button>Cadastrar Tecnologia</button>
            </form>
          </div>
        </div>
      </div>
    </ModalAddStyled>
  );
};

export default ModalAdd;
