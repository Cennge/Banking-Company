import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./Footer.css"
import { Link, Outlet } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTopOnRouteChange() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    return null;
}

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <div className="logo-text">
                        <img
                            src="/logo4epuha-white.png"
                            className="logo"
                        />
                        <span className="site-name">4epuBank</span>
                    </div></div>
                <div className="footer-nav">
                    <Link to="/home" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
                    <Link to="/careers" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Careers</Link>
                    <Link to="/about" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About</Link>
                    <Link to="/security" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Security</Link>
                    <Outlet />
                </div>
            </div>

            <div className="footer-contact">
                <div className="contact-item">
                    <MdEmail style={{ color: '#CAFF33' }} /> 4epuBank@banking.com
                </div>
                <div className="contact-item">
                    <MdPhone style={{ color: '#CAFF33' }} /> +91 91813 23 2309
                </div>
                <div className="contact-item">
                    <MdLocationOn style={{ color: '#CAFF33' }} /> Somewhere in the World
                </div>
            </div>

            <div className="footer-bottom">
                <div className="social-icons">
                    <div className="logo-circle">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF style={{ color: '#1C1C1C' }} />
                        </a>
                    </div>
                    <div className="logo-circle">
                        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter style={{ color: '#1C1C1C' }} />
                        </a>
                    </div>
                    <div className="logo-circle">
                        <a href="https://ua.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn style={{ color: '#1C1C1C' }} />
                        </a>
                    </div>
                </div>
                <div className="rights">4epuBank All Rights Reserved</div>
                <div className="legal-links">
                    <a href="https://github.com/Cennge/Banking-Company" target="_blank">Privacy Policy</a>
                    <span>|</span>
                    <a href="https://github.com/Cennge/Banking-Company" target="_blank">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
