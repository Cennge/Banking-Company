import "./SignIn-Page.css";
import { useState } from "react";

export function SignInPage() {
  return (
    <div className="signInPage-page">
      <SignInSection />
    </div>
  );
}
export function SignInSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    <section className="SignIn-container">
      <div className="SignIn-box">
        <img className="SignIn-background" src="bg-object-sec6.png" />
        <h1 className="SignIn-title">Sign up</h1>
        <p className="SignIn-subtitle">
          Join our community today! Create an account to unlock exclusive
          features and personalized experiences.
        </p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
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
          <a href="#" className="forgot-link">
            Forgot Password?
          </a>
          <button type="submit" className="btn login-btn">
            Sign Up
          </button>
          <button type="button" className="btn signup-btn">
            Login
          </button>
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
