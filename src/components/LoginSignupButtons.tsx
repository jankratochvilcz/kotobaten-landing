import React from "react";
import classNames from "classnames";

import OpenAppButton from "./OpenAppButton";

import "./LoginSignupButtons.css";

type ButtonsTheme = "dark" | "light";

type LoginSignupButtonsProps = {
    className?: string
    buttonTheme?: ButtonsTheme
}

const LoginSignupButtons = ({ className, buttonTheme }: LoginSignupButtonsProps) => (
    <div className={classNames("login-buttons-container", className)}>
        <OpenAppButton
            content="Start learning for free"
            className={classNames("login-buttons login-button", {
                "login-button-light": buttonTheme === "light"
            })}
        />
    </div>
);

export default LoginSignupButtons;
