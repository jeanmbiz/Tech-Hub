import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iTech } from "../../components/ModalAdd/ModalAdd";
import { iLoginFormData } from "../../Pages/Login/Login";
import { iRegisterFormData } from "../../Pages/Register/Register";
import api from "../../services/api";

export interface iChildrenProps {
  children: ReactNode;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: iTech[];
}

interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  handleLogin: (data: iLoginFormData) => void;
  handleRegister: (data: iRegisterFormData) => void;
  loading: boolean;
  techs: iTech[];
  setTechs: React.Dispatch<React.SetStateAction<iTech[]>>;
}

interface iLoadUserResponse {
  data: iUser;
  token: string;
}

interface iLoginResponse {
  user: iUser;
  token: string;
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iChildrenProps) => {
  const [techs, setTechs] = useState<iTech[]>([]);
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = async (data: iRegisterFormData) => {
    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error("Email já existe");
    }
  };

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenziehub: token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data }: iLoadUserResponse = await api.get("/profile");
          setUser(data);
          setTechs(data.techs);
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@kenziehub: token");
          localStorage.removeItem("@kenziehub: userID");
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [techs]);

  const handleLogin = async (data: iLoginFormData) => {
    try {
      const response = await api.post("/sessions", data);
      const { user: userResponse, token }: iLoginResponse = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(userResponse);
      setTechs(userResponse.techs);
      localStorage.setItem("@kenziehub: token", token);
      localStorage.setItem("@kenziehub: userID", userResponse.id);
      let toNavegate = location.state?.from?.pathname || "/dashboard";
      navigate(toNavegate, { replace: true });
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error("Usuário ou senha inválidos");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        handleRegister,
        loading,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
