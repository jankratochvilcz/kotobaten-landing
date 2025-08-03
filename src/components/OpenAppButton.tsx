import React from "react";
import classNames from "classnames";

import "./OpenAppButton.css";

type OpenAppButtonProps = {
    content?: string,
    className?: string,
    href?: string
}

const OpenAppButton = ({ content, className, href }: OpenAppButtonProps) => (
    <a className={classNames("open-app-button", className)} href={'https://web.kotobaten.app'} type="button">
        {content || "Open App"}
    </a>
);

export default OpenAppButton;
