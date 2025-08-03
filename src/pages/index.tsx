import React from "react";

import Header from "../components/index/Header";
import Hero from "../components/index/Hero";
import Features from "../components/index/Features";
import Testimonials from "../components/index/Testimonials";
import Screenshots from "../components/index/Screenshots";
import FinalCta from "../components/index/FinalCta";
import LayoutPage from "../components/layout/LayoutPage";
import SEO from "../components/layout/Seo";

const IndexPage = () => (
    <LayoutPage>
        <SEO 
            title="Kotobaten: Master Japanese Like Never Before" 
            description="The only flashcard app built specifically for Japanese learners who are ready to level up. Create smart flashcards, use AI-powered practice, and master Japanese vocabulary with purpose-built tools."
        />
        <Header />
        <main>
            <Hero />
            <Features />
            <Testimonials />
            <Screenshots />
            <FinalCta />
        </main>
    </LayoutPage>
);

export default IndexPage;
