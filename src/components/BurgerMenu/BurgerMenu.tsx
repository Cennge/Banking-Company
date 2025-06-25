import React, { useState } from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";

const BurgerMenu: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="burger-button"
                aria-label="Открыть меню"
                onClick={() => setOpen(true)}
            >
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.875C0.5 0.391751 0.891751 0 1.375 0H20.625C21.1082 0 21.5 0.391751 21.5 0.875C21.5 1.35825 21.1082 1.75 20.625 1.75H1.375C0.891751 1.75 0.5 1.35825 0.5 0.875ZM0.5 7C0.5 6.51675 0.891751 6.125 1.375 6.125H20.625C21.1082 6.125 21.5 6.51675 21.5 7C21.5 7.48325 21.1082 7.875 20.625 7.875H1.375C0.891751 7.875 0.5 7.48325 0.5 7ZM10.125 13.125C10.125 12.6418 10.5168 12.25 11 12.25H20.625C21.1082 12.25 21.5 12.6418 21.5 13.125C21.5 13.6082 21.1082 14 20.625 14H11C10.5168 14 10.125 13.6082 10.125 13.125Z" fill="#333333" />
                </svg>
            </button>
            {open && (
                <div className="burger-modal"
                    onClick={() => setOpen(false)}>
                    <div className="burger-modal-content"
                        onClick={e => e.stopPropagation()}>
                        <button className="burger-modal-close" onClick={() => setOpen(false)}>&times;</button>
                        <nav className="burger-modal-nav">
                            <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
                            <Link to="/careers" onClick={() => setOpen(false)}>Careers</Link>
                            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                            <Link to="/security" onClick={() => setOpen(false)}>Security</Link>
                            <div className="burger-modal-divider" />

                            <Link to="/sign-in" className="burger-modal-auth-links" onClick={() => setOpen(false)}>Sign In</Link>
                            <Link to="/login" className="burger-modal-auth-links" onClick={() => setOpen(false)}>Login</Link>

                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default BurgerMenu;