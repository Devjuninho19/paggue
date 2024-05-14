import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { RiMailLockFill } from "react-icons/ri";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nome);
    console.log(email);
    console.log(password);
  };
  return (
    <div className="wrapper">
      <form action="">
        <h1>Cadastro</h1>
        <div className="input-box">
          <input
            type="nome"
            placeholder="Nome"
            required
            className={nome !== "" ? "has-val input" : "input"}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <FaUserAlt className="icon" />
        </div>

        <div className="input-box">
          <input
            type="email"
            placeholder="E-mail"
            required
            className={email !== "" ? "has-val input" : "input"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <RiMailLockFill className="icon" />
        </div>

        <div className="input-box">
          <input
            id="outlined-basic"
            type="password"
            placeholder="Senha"
            required
            className={password !== "" ? "has-val input" : "input"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <Button onClick={handleSubmit} variant="contained">
          Cadastrar
        </Button>
        <div className="register-Link"></div>
      </form>
    </div>
  );
};
export default Cadastro;
