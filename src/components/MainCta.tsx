import classNames from "classnames";
import React from "react";

import "./MainCta.scss";
import OpenAppButton from "./OpenAppButton";

type MainCtaStyle = "blog" | "landing"

type MainCtaProps = {
    type: MainCtaStyle
}

const MainCta = ({ type } : MainCtaProps) => (
    <div className={classNames("main-cta-root", {
        landing: type === "landing"
    })}
    >
        <div className="main-cta-title">
            Expand your vocabulary, understand Japan.
        </div>
        <div className="main-cta-description">
            A Japanese learning app built from the ground-up to help you build your Japanese vocabulary, one day at a time.
        </div>
        <OpenAppButton
            className="main-cta-button"
            content="Sign up for free"
            href="/"
        />
    </div>
);

export default MainCta;
