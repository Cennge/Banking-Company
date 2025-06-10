import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <button  className="nav-link">Home</button>
        <button  className="nav-link">Careers</button>
        <button  className="nav-link">About</button>
        <button  className="nav-link">Security</button>
      </nav>
      <div className="actions">
        <button className="sign-up">Sign Up</button>
        <button className="login">Login</button>
      </div>
    </header>
  );
};

export default Header;
