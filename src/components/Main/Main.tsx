import React from "react";
import { MainStyled } from "./styles";
import AddTech from "../AddTech/AddTech";
import TechList from "../TechList/TechList";

const Main = () => {
  return (
    <MainStyled className="mainContainer">
      <AddTech />
      <TechList />
    </MainStyled>
  );
};

export default Main;
