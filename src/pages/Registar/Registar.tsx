import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Registar.css";

const Registar: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!email || !password || !name) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    const url = "http://localhost:3000/registar"; // URL da API

    const payload = { email, password, name };

    try {
      setIsSubmitting(true);
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.erro || "Ocorreu um erro ao registar.");
        setIsSubmitting(false);
        return;
      }

      alert("Registo bem-sucedido! Pode agora fazer login.");
      setIsSubmitting(false);
      setEmail("");
      setPassword("");
      setName("");
    } catch (err) {
      console.error(err);
      setError("Erro ao processar o registo. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Registar-se</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite o seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="register-button" disabled={isSubmitting}>
          {isSubmitting ? "A processar..." : "Registar"}
        </button>
      </form>
      <p>
        Já tem conta?{" "}
        <span onClick={() => window.location.href = "/login"} className="switch-form">
          Iniciar sessão
        </span>
      </p>
    </div>
  );
};

export default Registar;
