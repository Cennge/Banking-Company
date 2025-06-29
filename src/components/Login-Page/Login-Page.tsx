import { useState } from "react";
import "./Login-Page.css"
import "./LoginSection.css";

export function LoginPage() {
    return (
        <div className="login-page">
 <LoginSection />
        </div>
    );
}

export function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields");
    } else {
      setError("");
      console.log("Login attempt:", { email, password });
     
    }
  };

  return (
    <section className="login-container">
      <div className="login-box" >
        <img className="login-background" src="bg-object-sec6.png" />
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Welcome back! Please log in to access your account.</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <a href="#" className="forgot-link">Forgot Password?</a>
          <button type="submit" className="btn login-btn">Login</button>
          <button type="button" className="btn signup-btn">Sign Up</button>
        </form>
        <div className="divider">
          <span>Or Continue with</span>
        </div>
        <div className="social-buttons">
  <a
    href="https://accounts.google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social"
  >
    <img src="/chrome.svg" alt="Google" className="social-icon" />
  </a>
  <a
    href="https://facebook.com/login"
    target="_blank"
    rel="noopener noreferrer"
    className="social"
  >
    <img src="/facebook.svg" alt="Facebook" className="social-icon" />
  </a>
  <a
    href="https://appleid.apple.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="social"
  >
    <img src="/apple.svg" alt="Apple" className="social-icon" />
  </a>
</div>
      </div>
    </section>
  );
}
