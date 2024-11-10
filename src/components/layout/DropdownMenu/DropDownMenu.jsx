import React, { useEffect, useRef } from 'react'
import "./_dropdownMenu.scss"

import "primeicons/primeicons.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
function DropDownMenu() {
  const { authState,logout } = useAuth();
  const [open, setOpen] = React.useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // Agregar y limpiar el event listener para clics fuera del menú
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="user_container">
      <a onClick={toggleMenu}>
        <span className="pi pi-bars"></span>
      </a>
      <div className={`dropdown-menu ${open ? "visible" : ""}`} ref={menuRef}>
        <ul>
          <Link to="/profile">
            <li className="pi pi-user"> Profile</li>{" "}
          </Link>
          <li className="pi pi-tags"> Tags</li>
          <li className="pi pi-eye-slash"> Privacy</li>
          <li className="pi pi-cog"> Settings</li>
          {authState.token && (
            <li className="pi pi-sign-out" onClick={logout}>
              {" "}
              Logout
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DropDownMenu
