import React, { useState } from "react";
import "./_register.scss";
import { Message } from "primereact/message";
import { Link } from "react-router-dom";
import { registerReq } from "../../../api/axios/auth";

const logo =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1730489697/Nerdias_App/Nerdias_whitoutBackgroundLogo.png";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación para confirmar que ambas contraseñas coinciden
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      // Validación de campos vacíos
      if (!email || !username || !password) {
        setError("¡No puedes dejar campos vacíos!");
        return;
      }

      // Validación de seguridad de la contraseña
      if (password.length < 8) {
        setError(
          "¡La contraseña es demasiado corta! Debe tener al menos 8 caracteres."
        );
        return;
      }
      const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$/;
      if (!regexp.test(password)) {
        setError(
          "¡La contraseña no cumple con los requisitos mínimos de seguridad! Debe tener de 8 a 12 caracteres, al menos una letra mayúscula, una letra minúscula, y un número."
        );
        return;
      }

      const user = { email, username, password };
      await registerReq(user);

      // Mensaje de éxito y limpieza de campos
      setSuccessMessage(
        "Registro exitoso. Por favor inicia sesión para continuar."
      );
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    } catch (error) {
      setError("Error al registrar: " + error.message);
    }
  };

  return (
    <div className="register_container">
      <div className="form_container">
        <form className="form" onSubmit={handleSubmit}>
          <img className="logo" src={logo} alt="logo" />

          <div className="input-group">
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              autoComplete="off"
              className="input"
              placeholder=" "
            />
            <label className="user-label">Username</label>
          </div>

          <div className="input-group">
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              autoComplete="off"
              className="input"
              placeholder=" "
            />
            <label className="user-label">Email</label>
          </div>

          <div className="input-group">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              autoComplete="off"
              className="input"
              placeholder=" "
            />
            <label className="user-label">Password</label>
          </div>

          <div className="input-group">
            <input
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="confirmPassword"
              autoComplete="off"
              className="input"
              placeholder=" "
            />
            <label className="user-label">Repeat your password</label>
          </div>

          {error && <Message severity="error" text={error} />}
          {successMessage && (
            <Message severity="success" text={successMessage} />
          )}

          <button type="submit" className="submit-button" onClick={handleSubmit}>
            Register
          </button>
        </form>
        <Link className="login-link" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
