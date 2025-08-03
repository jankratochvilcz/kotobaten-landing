import React from "react";

import "./Features.css";

interface FeatureCardProps {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle, description }) => (
    <div className="feature-card">
        <div className="feature-card__icon" aria-hidden="true">
            {icon}
        </div>
        <h3 className="feature-card__title">
            {title}
        </h3>
        <p className="feature-card__subtitle">
            {subtitle}
        </p>
        <p className="feature-card__description">
            {description}
        </p>
    </div>
);

const Features = () => {
    const features: FeatureCardProps[] = [
        {
            icon: "🎯",
            title: "Made for Japanese",
            subtitle: "Finally, an app that gets it",
            description: "Every feature is designed around Japanese's unique quirks—from kanji readings to grammar patterns. No more fighting with generic flashcard apps."
        },
        {
            icon: "📚",
            title: "Smart Flashcards",
            subtitle: "Your words, your way",
            description: "Create custom flashcards that actually make sense. Add context, readings, and personal notes that stick."
        },
        {
            icon: "⚡",
            title: "Lightning-Fast Dictionary",
            subtitle: "Look it up, learn it, own it",
            description: "Built-in Japanese dictionary with instant search. Found a new word? Add it to your collection in one tap."
        },
        {
            icon: "🤖",
            title: "AI-Powered Practice",
            subtitle: "Practice that adapts to you",
            description: "Get AI-generated multiple choice questions and sample sentences tailored to your learning level."
        },
        {
            icon: "🌐",
            title: "Learn Anywhere",
            subtitle: "Web now, everything soon",
            description: "Start on the web today. Desktop (Windows, macOS) and mobile (Android, iOS) apps launching soon."
        }
    ];

    return (
        <section className="features" id="features">
            <div className="features__container">
                <div className="features__header">
                    <h2 className="features__title">
                        Why Japanese Learners Choose Kotobaten
                    </h2>
                </div>
                <div className="features__grid">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            subtitle={feature.subtitle}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;