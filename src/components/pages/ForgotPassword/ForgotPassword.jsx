// src/components/Auth/ForgotPassword.js
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const ForgotPassword = () => {
  const { requestReset } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await requestReset(email);
      setMessage(
        "Te hemos enviado un correo con un enlace para restablecer tu contraseña."
      );
    } catch (err) {
      setError("Hubo un error al enviar el correo. Intenta nuevamente.");
    }
  };

  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Enviar enlace</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
