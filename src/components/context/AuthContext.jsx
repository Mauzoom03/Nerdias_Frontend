import { createContext, useContext, useState, useEffect } from "react";
import {
  registerReq,
  loginReq,
  updateUserRequest,
  logoutReq,
  reqPasswordReset,
  resetPassword,
} from "../../api/axios/auth";
import { API } from "../../api/axios/axios";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(!!sessionStorage.getItem("token"));

  const [authState, setAuthState] = useState({
    token: sessionStorage.getItem("token") || null,
    user: JSON.parse(sessionStorage.getItem("user")) || null,
    isAdmin: sessionStorage.getItem("isAdmin") || null,
  });

  const [usersState, setUsersState] = useState([]);

  useEffect(() => {
    if (authState.token) {
      API.defaults.headers.common["Authorization"] = authState.token;
    }
  }, [authState.token]);

  // Encapsular sessionStorage para lectura y limpieza de sesión
  const setSessionData = (data) => {
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user", JSON.stringify(data.user));
    sessionStorage.setItem("isAdmin", data.isAdmin);
  };

  const clearSessionData = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("isAdmin");
  };

  const register = async (user) => {
    try {
      const { data } = await registerReq(user);
      const { token } = data;
      setSessionData(data);
      setAuthState({ token: data.token, user: null, isAdmin: false });
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const login = async (user) => {
    try {
      const { data } = await loginReq(user);
      const { token } = data;
      setSessionData(data);
      setAuthState({ token, user: data });
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      console.log(
        "Authorization header:",
        API.defaults.headers.common["Authorization"]
      );

      setIsLogged(true);
      navigate("/");
    } catch (error) {
      console.error(
        "Error logging in:",
        error.response?.data?.msg ||
          "Error al intentar iniciar sesión. Por favor, intenta nuevamente."
      );
    }
  };

  const logout = async () => {
    try {
      setAuthState({ token: null, user: null, isAdmin: false });
      clearSessionData();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const patchUser = async (id, userData) => {
    try {
      const response = await updateUserRequest(id, userData);
      setAuthState((prevState) => ({
        ...prevState,
        user: response.data,
        isAdmin: response.data.isAdmin,
        token: response.data.token,
        id: response.data.id
      }));
      //console.log(id , userData)
      sessionStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };


const requestReset = async (email) => {
  try {
    await reqPasswordReset(email);
    alert("Correo de restablecimiento enviado. Por favor, revisa tu bandeja.");
  } catch (error) {
    console.error("Error al solicitar restablecimiento:", error);
  }
};

const updatePassword = async (token, newPassword) => {
  try {
    await resetPassword(token, newPassword);
    alert("Contraseña restablecida con éxito.");
    navigate("/login");
  } catch (error) {
    console.error("Error al restablecer la contraseña:", error);
  }
};

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        usersState,
        register,
        login,
        logout,
        patchUser,
        requestReset,
        updatePassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
