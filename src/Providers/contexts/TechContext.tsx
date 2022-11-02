import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { iTech } from "../../components/ModalAdd/ModalAdd";
import api from "../../services/api";
import { iChildrenProps } from "./UserContext";

interface iTechContext {
  showModal: null | boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean | null>>;
  onSubmitFunction: (data: iTech) => void;
}

export const TechContext = createContext({} as iTechContext);

export const TechProvider = ({ children }: iChildrenProps) => {
  const [showModal, setShowModal] = useState<null | boolean>(null);

  const onSubmitFunction = async (data: iTech) => {
    try {
      await api.post("/users/techs", data);
      toast.success("Tecnologia cadastrada");
      setShowModal(null);
    } catch (error) {
      toast.error("Tecnoligia já cadastrada");
      console.log(error);
    }
  };

  return (
    <TechContext.Provider value={{ showModal, setShowModal, onSubmitFunction }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechContext;
