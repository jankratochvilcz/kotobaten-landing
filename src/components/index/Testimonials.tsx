import React from "react";

import "./Testimonials.css";

interface TestimonialProps {
    name: string;
    location: string;
    achievement: string;
    quote: string;
    avatarPlaceholder: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
    name, 
    location, 
    achievement, 
    quote, 
    avatarPlaceholder 
}) => (
    <div className="testimonial-card">
        <div className="testimonial-card__quote">
            <span className="testimonial-card__quote-mark" aria-hidden="true">"</span>
            <p className="testimonial-card__text">
                {quote}
            </p>
        </div>
        <div className="testimonial-card__author">
            <div className="testimonial-card__avatar" aria-label={`${name}'s profile picture`}>
                <span className="testimonial-card__avatar-placeholder">
                    {avatarPlaceholder}
                </span>
            </div>
            <div className="testimonial-card__info">
                <h4 className="testimonial-card__name">
                    {name}
                </h4>
                <p className="testimonial-card__location">
                    {location}
                </p>
                <p className="testimonial-card__achievement">
                    {achievement}
                </p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials: TestimonialProps[] = [
        {
            name: "Aisha Patel",
            location: "Mumbai, India",
            achievement: "JLPT N2 Passed",
            quote: "Kotobaten's vocabulary system was a game-changer for my JLPT N2 prep. The spaced repetition helped me retain over 2,000 kanji compounds that showed up on the actual exam. I finally passed after two previous attempts!",
            avatarPlaceholder: "[Avatar: Aisha]"
        },
        {
            name: "Marcus Johnson",
            location: "Chicago, USA",
            achievement: "365-day streak",
            quote: "I struggled with consistency until I found Kotobaten. The daily vocabulary practice became part of my morning routine. One year later, I have a 365-day streak and can finally read manga without constantly looking up words.",
            avatarPlaceholder: "[Avatar: Marcus]"
        },
        {
            name: "Elena Rossi",
            location: "Milan, Italy",
            achievement: "JLPT N1 Passed",
            quote: "The AI-generated practice questions were incredibly similar to the real JLPT N1 vocabulary section. Kotobaten helped me master the nuanced differences between similar words that make or break the exam.",
            avatarPlaceholder: "[Avatar: Elena]"
        },
        {
            name: "Hiroshi Tanaka",
            location: "São Paulo, Brazil",
            achievement: "Business Japanese Proficiency",
            quote: "As a Japanese-Brazilian, I thought I knew Japanese well. Kotobaten helped me learn business vocabulary I never encountered growing up. Now I can confidently participate in meetings with our Tokyo office.",
            avatarPlaceholder: "[Avatar: Hiroshi]"
        },
        {
            name: "Fatima Al-Zahra",
            location: "Dubai, UAE",
            achievement: "JLPT N3 Passed",
            quote: "The ability to add personal notes and context to each word was perfect for my learning style. I created connections between Arabic and Japanese that helped me remember vocabulary for my N3 exam.",
            avatarPlaceholder: "[Avatar: Fatima]"
        },
        {
            name: "James Thompson",
            location: "London, UK",
            achievement: "300+ day streak",
            quote: "Working long hours in finance, I needed something flexible. Kotobaten's quick review sessions fit perfectly into my tube commute. Small daily efforts over 300+ days transformed my Japanese comprehension.",
            avatarPlaceholder: "[Avatar: James]"
        }
    ];

    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials__container">
                <div className="testimonials__header">
                    <h2 className="testimonials__title">
                        Trusted by Japanese Learners Worldwide
                    </h2>
                    <p className="testimonials__subtitle">
                        From JLPT success to daily learning habits, see how Kotobaten transforms Japanese learning journeys
                    </p>
                </div>
                <div className="testimonials__grid">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            location={testimonial.location}
                            achievement={testimonial.achievement}
                            quote={testimonial.quote}
                            avatarPlaceholder={testimonial.avatarPlaceholder}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;