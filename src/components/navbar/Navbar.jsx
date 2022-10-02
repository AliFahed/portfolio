import "./navbar.scss";
import { Menu } from "@material-ui/icons";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#header" className="logo">
            Ali Fahed
          </a>
          <div className="navbarContainer">
            <nav className="nav">
              <ul className="navbar-list">
                <li>
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="nav-link">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="nav-link">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="right">
          <Menu
            className="icon"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
