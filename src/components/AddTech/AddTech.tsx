import { useContext } from "react";
import TechContext from "../../Providers/contexts/TechContext";

import { AddTechStyled } from "./styles";

const AddTech = () => {
  const { setShowModal } = useContext(TechContext);

  return (
    <AddTechStyled>
      <h2>Tecnologias</h2>
      <button onClick={() => setShowModal(true)}>+</button>
    </AddTechStyled>
  );
};

export default AddTech;
