import React from "react";

import Header from "../components/index/Header";
import LayoutPage from "../components/layout/LayoutPage";
import PageMeta from "../components/PageMeta";
import Author from "../components/index/Author";
import BeYourself from "../components/index/BeYourself";
import MainScreenshot from "../components/index/MainScreenshot";
import LoginSignupButtons from "../components/LoginSignupButtons";
import Platforms from "../components/index/Platforms";
import SEO from "../components/layout/Seo";

const IndexPage = () => (
    <LayoutPage>
        <SEO title="Kotobaten: Expand your vocablary, understand Japan" />
        <Header />
        <BeYourself />
        <LoginSignupButtons />
        <MainScreenshot />
        <Platforms />
        <Author />
        <PageMeta
            pageType="main"
            title="Expand your vocabulary, understand Japan"
            description="Kotobaten is an app for expanding your Japanese vocabulary. Build strong learning habits and stick to them."
        />
    </LayoutPage>
);

export default IndexPage;
