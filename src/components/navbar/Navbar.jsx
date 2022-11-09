import "./Navbar.css"
import EmailIcon from "@mui/icons-material/Email"

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="nav-logo">G.</span>
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
    </div>
  )
}

export default Navbar
