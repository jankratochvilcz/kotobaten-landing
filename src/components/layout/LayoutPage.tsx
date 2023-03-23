import React, { ReactNode } from "react";
import classNames from "classnames";

import Footer from "./Footer";
import SEO from "./Seo";

import "./LayoutPage.scss";

type LayoutPageProps = {
    className?: string,
    children: ReactNode
}

const LayoutPage = ({ children, className }: LayoutPageProps) => (

    <div className={classNames("page-root", className)}>
        <SEO title="Kotobaten" />
        { children }
        <Footer />
    </div>

);

export default LayoutPage;
