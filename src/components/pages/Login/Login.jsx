import React, { useState } from "react";
import "./_login.scss";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "primereact/checkbox";
import { useAuth } from "../../context/AuthContext";

const logo =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1730489697/Nerdias_App/Nerdias_whitoutBackgroundLogo.png";

function Login() {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/;
    return regexp.test(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validación antes de llamar a login
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be 8-12 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    try {
      await login({ email, password });
      setError(""); // Limpiar error después de login exitoso
      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.msg ||
          "Error al intentar iniciar sesión. Por favor, intenta nuevamente."
      );
    }
  };

  return (
    <div className="login_container">
      <div className="form_container">
        <form className="form" onSubmit={handleLogin}>
          <img className="logo" src={logo} alt="logo" />

          <div className="input-group">
            <input
              required
              type="email"
              name="email"
              autoComplete="off"
              className="input"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="user-label">Email:</label>
          </div>

          <div className="input-group">
            <input
              required
              type="password"
              name="password"
              autoComplete="off"
              className="input"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="user-label">Password</label>
          </div>

          <div className="checkbox-group">
            <Checkbox
              id="checkbox"
              onChange={(e) => setChecked(e.checked)}
              checked={checked}
            />
            <label htmlFor="checkbox" className="checkbox-label">
              Remember me
            </label>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button">
            Login
          </button>

          <Link className="register-link" to="/register">
            Don’t have an account? Sign Up
          </Link>
          <Link className="register-link" to="/forgot-password">
            Forgot Password?
          </Link>

          <div className="separator">
            <span className="line"></span>
            <span className="or-text">or</span>
            <span className="line"></span>
          </div>

          <button className="google-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              ></path>
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
