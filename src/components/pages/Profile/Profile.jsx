import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
const defaultUser = "https://res.cloudinary.com/duaztq3yf/image/upload/v1731019212/Nerdias_App/4154905-200_aywoqw.png";
import "./_profile.scss";
const Profile = () => {
  const { authState, patchUser } = useAuth();

  const [newUsername, setNewUsername] = useState("");
  const [newPicture, setNewPicture] = useState(null);

  const handleChangeUsername = (event) => {
    setNewUsername(event.target.value);
  };

  const handleFileChange = (event) => {
    setNewPicture(event.target.files[0]);
  };

  const handleUserEdit = async (event) => {
    event.preventDefault();

    try {
      const userData = {};

      if (newUsername) {
        userData.username = newUsername;
      }

      if (newPicture) {
        userData.image = newPicture;
      }

      await patchUser(authState.user.id, userData);
      console.log("AuthState User:", authState.user);

      console.log("User updated successfully");

      setNewUsername("");
      setNewPicture(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };


  if (!authState.user) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="profile-container">
      <div className="profile-content-container">
        <div className="profile-id-image-container">
          {authState.user.image ? (
            <img
              className="profile-id-image"
              alt="Profile"
              src={authState.user.image}
            />
          ) : (
            <img className="profile-id-image" alt="Profile" src={defaultUser} />
          )}
        </div>
        <div className="profile-info">
          <h3 className="profile-id-username">{authState.user.username}</h3>
          <h4 className="profile-id-name">{authState.user.name}</h4>
          <h4 className="profile-id-email">{authState.user.email}</h4>
        </div>

        <div className="edit-profile-form">
          <form onSubmit={handleUserEdit}>
            <div className="input-area">
              <label htmlFor="newUsername">Nuevo Username:</label>
              <input
                type="text"
                id="newUsername"
                name="newUsername"
                value={newUsername}
                onChange={handleChangeUsername}
              />
            </div>

            <div className="input-area">
              <label htmlFor="newPicture">Nueva Imagen de Perfil:</label>
              <input
                type="file"
                id="newPicture"
                name="newPicture"
                onChange={handleFileChange}
              />
            </div>

            <div className="edit-profile-form-buttons">
              <button type="submit" className="form-button">
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
