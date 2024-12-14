import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Students Xerox</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="#contactus">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;