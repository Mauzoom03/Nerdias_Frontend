import React from 'react'
import "./_footer.scss"
const logo =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1730489697/Nerdias_App/Nerdias_whitoutBackgroundLogo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="license">
          Licencia: © 2024 Nerdias - Todos los derechos reservados.
        </p>
        <div className="social-media">
          <span className="pi pi-github"></span>
          <span className="pi pi-linkedin"></span>
          <span className="pi pi-envelope"></span>
        </div>
      </div>
      <div className="footer-right">
        <div className="column">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">NewsApi</a>
            </li>
            <li>
              <a href="#">Neumorphism.io</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Post Guidelines</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer
