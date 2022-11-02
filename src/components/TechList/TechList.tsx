import React, { useContext } from "react";
import { VscTrash } from "react-icons/vsc";
import { toast } from "react-toastify";
import { UserContext } from "../../Providers/contexts/UserContext";
import api from "../../services/api";
import { TechListStyled } from "./styled";

const TechList = () => {
  const { techs } = useContext(UserContext);

  const handleRemoveTech = async (clickId: string) => {
    try {
      await api.delete(`/users/techs/${clickId}`);
      toast.success("Excluída com sucesso!");
    } catch (error) {
      toast.error("Ops! Não foi possível excluir!");
      console.log(error);
    }
  };

  return (
    <TechListStyled>
      {techs.map((tech) => (
        <li key={tech.id}>
          <h4> {tech.title} </h4>
          <div>
            <h5> {tech.status} </h5>
            <VscTrash onClick={() => handleRemoveTech(tech.id)} />
          </div>
        </li>
      ))}
    </TechListStyled>
  );
};

export default TechList;
