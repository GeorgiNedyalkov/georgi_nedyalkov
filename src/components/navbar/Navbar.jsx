import "./Navbar.css";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import Projects from "../../pages/Projects/Projects";
import Blog from "../../pages/Blog/Blog";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="nav-logo">G.</span>
      </Link>
      <ul className="nav-links">
        <Link to="/projects">
          <li className="nav-link">projects</li>
        </Link>
        <Link to="/blog">
          <li className="nav-link">writing</li>
        </Link>
        <Link to="/about">
          <li className="nav-link">about</li>
        </Link>
        <Link to="/contact">
          <li className="nav-link">contact</li>
        </Link>
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
