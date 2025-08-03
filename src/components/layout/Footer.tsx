import React from "react";

import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__container">
                <div className="footer__content">
                    <p className="footer__copyright">
                        © {currentYear} Kotobaten. Made with ❤️ for Japanese learners.
                    </p>
                    <div className="footer__links">
                        <a 
                            href="/privacy.html" 
                            className="footer__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy
                        </a>
                        <a 
                            href="/terms.html" 
                            className="footer__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Terms
                        </a>
                        <a 
                            href="mailto:hello@kotobaten.app" 
                            className="footer__link"
                        >
                            Contact
                        </a>
                        <a 
                            href="https://twitter.com/kotobaten" 
                            className="footer__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow Kotobaten on Twitter"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
