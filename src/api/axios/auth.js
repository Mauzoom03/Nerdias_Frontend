import { API as axios } from "./axios";
import { headersWithFormDataContentType } from "./axios";

export const registerReq = (user) => axios.post("/users/register", user);

export const loginReq = (user) => axios.post("/users/login", user);

export const logoutReq = () => axios.post("/users/logout"); 

export const reqPasswordReset = (email) =>
  axios.post("/users/requestPasswordReset", { email });

export const resetPassword = (token, newPassword) =>
  axios.patch(`/users/resetPassword/${token}`, { password: newPassword });

export const isAdminReq = () => axios.get("/users/is-admin"); 

export const updateUserRequest = async (id, userData) => {
  try {
    const response = await axios.patch(
      `http://localhost:5000/api/users/edit/${id}`,
      userData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  } catch (error) {
    console.error("Error updating user request:", error);
    throw error;
  }
};
export const deleteUserReq = (id) => axios.delete(`/users/user/${id}`);
