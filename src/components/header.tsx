import { Link, Outlet } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-text">
        <img
          src="/logo4epuha-white.png"
          className="logo"
        />
        <span className="site-name">4epuBank</span>
      </div>
      <nav className="nav">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/careers" className="nav-link">Careers</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/security" className="nav-link">Security</Link>

        <Outlet />
      </nav>
      <div className="actions">
        <button className="sign-up">Sign Up</button>
        <button className="login">Login</button>
      </div>
    </header>
  );
};

export default Header;
