import React, { useState, useEffect } from "react";

import "./Header.css";
import CTAButton from "../CTAButton";

import Logo from "../../images/logos/LogoColor.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <div className="header__logo">
                    <img src={Logo} alt="Kotobaten - Japanese Learning App" />
                </div>
                <nav className="header__nav" role="navigation" aria-label="Main navigation">
                    <button 
                        className="header__nav-link" 
                        onClick={() => scrollToSection('features')}
                        aria-label="Go to Features section"
                    >
                        Features
                    </button>
                    <button 
                        className="header__nav-link" 
                        onClick={() => scrollToSection('testimonials')}
                        aria-label="Go to Testimonials section"
                    >
                        Testimonials
                    </button>
                    <CTAButton 
                        href="https://web.kotobaten.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        variant="primary"
                    >
                        Get Started
                    </CTAButton>
                </nav>
            </div>
        </header>
    );
};

export default Header;
