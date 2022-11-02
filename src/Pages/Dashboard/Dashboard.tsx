import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import ModalAdd from "../../components/ModalAdd/ModalAdd";
import Navbar from "../../components/Navbar/Navbar";
import TechContext from "../../Providers/contexts/TechContext";

const Dashboard = () => {
  const { showModal } = useContext(TechContext);

  return (
    <>
      {showModal && <ModalAdd />}
      <Navbar />
      <Header />
      <Main />
    </>
  );
};

export default Dashboard;
