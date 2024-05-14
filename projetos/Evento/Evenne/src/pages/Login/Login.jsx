// eslint-disable-next-line no-unused-vars
import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import "../Login/Login.css"; // Meu arquivo de estilo
const Login = () => {
  const auth = UseAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    auth["signin"](email, senha);

    navigate("/Carrinho");
  };
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>

        <div className="input-box">
          <input
            type="email"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <FaUserAlt className="icon" />
        </div>

        <div className="input-box">
          <input
            name="password"
            id="outlined-basic"
            type="password"
            placeholder="Digite a sua senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Lembrar de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <div>
          <Button onClick={handleLogin} variant="contained">
            Login
          </Button>
        </div>

        <div className="register-Link">
          <Link to={"./Cadastro"}>Não tem uma conta?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
