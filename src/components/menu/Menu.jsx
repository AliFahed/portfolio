import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <nav className="nav">
        <ul className="nav-list">
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#header" className="nav-link">
              Home
            </a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
