import React, { useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory(); // Corrigido: useHistory deve ser chamado aqui

  // Função para redirecionar para a página de registo
  const goToRegister = useCallback(() => {
    history.push('./Registar');
  }, [history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // URL de login da API em Node.js
    const url = "http://localhost:3000/login";

    // Corpo da request
    const payload = { email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.erro || "Ocorreu um erro.");
        return;
      }

      // Se o login for bem-sucedido, guardar o token e redirecionar
      localStorage.setItem("token", data.token);
      window.location.href = "/home"; // Redireciona para a página inicial
    } catch (err) {
      console.error(err);
      setError("Erro ao processar o pedido. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite o seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Palavra-passe</label>
          <input
            type="password"
            id="password"
            placeholder="Digite a sua palavra-passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <p>Para criar uma nova conta</p> 
          <strong onClick={goToRegister}>Clica aqui!</strong> {/* Alterado para usar o goToRegister */}
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
