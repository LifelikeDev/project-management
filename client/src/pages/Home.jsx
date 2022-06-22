import React from "react";
import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="container">
      <div className="d-flex gap-3">
        <AddClientModal />
      </div>
      <Projects />
      <Clients />
    </div>
  );
};

export default Home;
