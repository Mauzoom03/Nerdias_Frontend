
import { Link } from "react-router-dom";
import DropDownMenu from "../DropdownMenu/DropDownMenu";
import "./_header.scss";
const logo =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1730489697/Nerdias_App/Nerdias_whitoutBackgroundLogo.png";
function Header() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header.header_container");

   
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  return (
    <header className="header_container">
      <div className="logo_container">
        <Link to="/">
          <img src={logo} className="logo_img" alt="logo" />
        </Link>
      </div>
      <div className="menu_container">
        <ul className="menu">
          <li>
            <Link to="/ais">AI</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li>
            <Link to="/aboutus">AboutUs</Link>
          </li>
        </ul>
      </div>
      <DropDownMenu />
    </header>
  );
}

export default Header;
