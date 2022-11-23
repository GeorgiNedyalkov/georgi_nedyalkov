import "./Navbar.css";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="nav-logo">G.</span>
      </Link>
      <ul className="nav-links">
        <li className="nav-link">projects</li>
        <li className="nav-link">writing</li>
        <li className="nav-link">about</li>
        <li className="nav-link">contact</li>
      </ul>
      <span className="nav-contact">
        <a href="mailto: gnedyalkov94@gmail.com" className="nav-email">
          <EmailIcon className="nav-icon" />
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
