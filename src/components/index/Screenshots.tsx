import React from "react";

import "./Screenshots.css";

import DesktopScreenshot from "../../images/screenshots/Desktop.png";
import MobileScreenshot from "../../images/screenshots/Phone.png";

const Screenshots = () => {
    return (
        <section className="screenshots" id="screenshots">
            <div className="screenshots__container">
                {/* Desktop Screenshots Section */}
                <div className="screenshots__section screenshots__section--desktop">
                    <div className="screenshots__content">
                        <h2 className="screenshots__title">
                            Create and Review Flashcards Designed for Japanese Learners
                        </h2>
                        <p className="screenshots__description">
                            Experience the power of purpose-built Japanese learning tools. Our interface 
                            understands the complexity of Japanese characters and provides the context 
                            you need to truly master the language.
                        </p>
                    </div>
                    <div className="screenshots__visual">
                        <img 
                            className="screenshots__image screenshots__image--desktop" 
                            src={DesktopScreenshot} 
                            alt="Kotobaten desktop interface showing Japanese flashcard creation and review features"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Mobile Screenshots Section */}
                <div className="screenshots__section screenshots__section--mobile">
                    <div className="screenshots__visual">
                        <div className="screenshots__mobile-group">
                            <img 
                                className="screenshots__image screenshots__image--mobile" 
                                src={MobileScreenshot} 
                                alt="Kotobaten mobile app showing portable Japanese learning experience"
                                loading="lazy"
                            />
                            <img 
                                className="screenshots__image screenshots__image--mobile screenshots__image--offset" 
                                src={MobileScreenshot} 
                                alt="Kotobaten mobile app additional screen"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="screenshots__content">
                        <h2 className="screenshots__title">
                            Practice On the Go with Our Upcoming Mobile Apps
                        </h2>
                        <p className="screenshots__description">
                            Take your Japanese learning everywhere. Our mobile apps (launching soon) 
                            will sync seamlessly with the web version, letting you practice during 
                            commutes, breaks, or whenever inspiration strikes.
                        </p>
                        <div className="screenshots__coming-soon">
                            <span className="screenshots__badge">Coming Soon</span>
                            <p className="screenshots__platforms">
                                Android • iOS • Windows • macOS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Screenshots;