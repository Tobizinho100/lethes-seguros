import React, { useState } from "react";
import "./Login.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>(""); // Para o registro
  const [error, setError] = useState<string>("");
  const [isRegistering, setIsRegistering] = useState<boolean>(false); // Estado para alternar entre Login e Register

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || (isRegistering && !name)) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    const url = isRegistering ? "http://localhost:5000/register" : "http://localhost:5000/login"; // URL dinâmica com base no tipo de formulário
    const body = JSON.stringify({ email, password, name: isRegistering ? name : undefined });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      if (!response.ok) {
        setError(isRegistering ? "Erro ao registrar." : "Email ou senha incorretos.");
        return;
      }

      const data = await response.json();
      console.log(isRegistering ? "Registro bem-sucedido" : "Login bem-sucedido", data);

      // Se o login ou registro for bem-sucedido, redirecionar ou armazenar token
      // Armazenar token (no caso de login)
      if (!isRegistering) {
        localStorage.setItem("token", data.token);
        // Redirecionar para a página inicial ou onde você precisar
        window.location.href = "/home"; // ou usar history.push
      }
    } catch (err) {
      setError("Erro ao processar sua solicitação. Tente novamente.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Registrar" : "Login"}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {isRegistering && (
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="login-button">
          {isRegistering ? "Registrar" : "Entrar"}
        </button>
      </form>
      <p>
        {isRegistering ? (
          <>
            Já tem uma conta?{" "}
            <span onClick={() => setIsRegistering(false)} className="switch-form">
              Faça login
            </span>
          </>
        ) : (
          <>
            Não tem uma conta?{" "}
            <span onClick={() => setIsRegistering(true)} className="switch-form">
              Registre-se
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default LoginPage;
