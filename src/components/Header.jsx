import React from "react";
import "./header.css";
import Tarefa from "../image/gerenciador-de-tarefas.jpg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 style={{ color: "#eee" }}>Minhas Tarefas</h1>
      </div>

      <div>
        <img src={Tarefa} alt="Tarefa" className="imagem" />
      </div>
    </div>
  );
};

export default Header;
