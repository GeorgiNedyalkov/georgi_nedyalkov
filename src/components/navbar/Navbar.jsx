import "./Navbar.css"

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
      <span className="nav-contact"></span>
    </div>
  )
}

export default Navbar
