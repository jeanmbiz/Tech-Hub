import { useContext } from "react";
import { UserContext } from "../../Providers/contexts/UserContext";
import { HeaderStyled } from "./styles";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <HeaderStyled>
      <div className="headerContainer mainContainer">
        <h1>Olá, {user?.name} </h1>
        <h2> {user?.course_module} </h2>
      </div>
    </HeaderStyled>
  );
};

export default Header;
