import React from "react";

import "./FinalCta.css";
import CTAButton from "../CTAButton";

const FinalCta = () => {
    return (
        <section className="final-cta" id="final-cta">
            <div className="final-cta__container">
                <div className="final-cta__content">
                    <h2 className="final-cta__headline">
                        Ready to Transform Your Japanese Learning?
                    </h2>
                    <p className="final-cta__subtext">
                        Join advanced learners who are already mastering Japanese with Kotobaten
                    </p>
                    <div className="final-cta__actions">
                        <CTAButton 
                            href="https://web.kotobaten.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            variant="secondary"
                        >
                            Launch Web App
                        </CTAButton>
                        <p className="final-cta__secondary">
                            Free to start • No credit card required
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCta;