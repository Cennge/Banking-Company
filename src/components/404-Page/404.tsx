
import './404.css';

export default function Error404() {
  return (
    <div className="error-page">
      <div className="background-circles circle1"></div>
      <div className="background-circles circle2"></div>
      <div className="background-circles circle3"></div>

      <div className="container">
        <div className="text-404">404</div>
        <div className="text-404 overlay">404</div>
      </div>

      <h2><span>Oops!</span> This page doesn’t exist.</h2>
    </div>
  );
}

