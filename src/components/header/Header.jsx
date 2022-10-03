import "./header.scss";
import { KeyboardArrowDown } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="hero-section">
        <h1 className="greet">Hi, I am Ali Fahed</h1>
        <p className="interest">A Web Developer</p>
      </div>
      <a href="#about">
        <KeyboardArrowDown className="arrow-down" />
      </a>
    </div>
  );
};

export default Header;
