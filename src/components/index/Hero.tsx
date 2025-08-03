import React from "react";

import "./Hero.css";
import CTAButton from "../CTAButton";

import DesktopScreenshot from "../../images/screenshots/desktop/image-home.png";
import MobileScreenshot from "../../images/screenshots/phone/image-home.png";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero__container">
                <div className="hero__content">
                    <h1 className="hero__headline">
                        Master Japanese Like Never Before
                    </h1>
                    <p className="hero__subheadline">
                        The only flashcard app built specifically for Japanese learners who are ready to level up
                    </p>
                    <div className="hero__cta-group">
                        <CTAButton 
                            href="https://web.kotobaten.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            variant="secondary"
                        >
                            Start Learning Now
                        </CTAButton>
                        <p className="hero__cta-secondary">
                            Available on web • Desktop &amp; mobile apps coming soon
                        </p>
                    </div>
                </div>
                <div className="hero__visual">
                    <div className="hero__image-container">
                        <img 
                            className="hero__image hero__image--desktop" 
                            src={DesktopScreenshot} 
                            alt="Kotobaten app interface showing Japanese flashcards and dictionary features"
                        />
                        <img 
                            className="hero__image hero__image--mobile" 
                            src={MobileScreenshot} 
                            alt="Kotobaten mobile app interface"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;