import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { UserContext } from "../../Providers/contexts/UserContext";
import { NavStyled } from "./styles";

const Navbar = () => {
  const { setUser, setTechs } = useContext(UserContext);

  const navigate = useNavigate();

  const backAndClear = () => {
    setUser(null);
    setTechs([]);
    localStorage.removeItem("@kenziehub: token");
    localStorage.removeItem("@kenziehub: userID");
    navigate("/login");
  };

  return (
    <NavStyled>
      <div className="headerContainer mainContainer">
        <figure>
          <img src={Logo} alt="Logo Kenzie Hub" />
        </figure>
        <button onClick={() => backAndClear()}>Voltar</button>
      </div>
    </NavStyled>
  );
};

export default Navbar;
