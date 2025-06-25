import { Link, Outlet } from 'react-router-dom';
import './Header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <header className="header">
      <Link to="/home" className="logo-text">
        <div className="logo-text">
          <img
            src="/logo4epuha-white.png"
            className="logo"
            alt="4epuBank Logo"
          />
          <span className="site-name">4epuBank</span>
        </div>
      </Link>

      <nav className="nav">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/careers" className="nav-link">Careers</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/security" className="nav-link">Security</Link>

        <Outlet />
      </nav>

      <div className='burger-menu-header'><BurgerMenu /></div>

      <div className="actions">
        <Link to="/sign-in" className="sign-up" style={{ textDecoration: 'none' }}>Sign In</Link>
        <Link to="/login" className="login" style={{ textDecoration: 'none' }}>Login</Link>
      </div>
    </header>
  );
};

export default Header;
