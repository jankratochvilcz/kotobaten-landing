import React from "react";

import "./MainScreenshot.css";

import DesktopScreenshot from "../../images/screenshots/Desktop.png";
import MobileScreenshot from "../../images/screenshots/Phone.png";
import useWindowSize from "../../hooks/getWindowSize";

const MainScreenshot = () => {
    const { width } = useWindowSize();

    return (
        <div className="screenshot-section">
          <ul className="features">
            <li><b>Stay <u>immersed</u>.</b><br/><br/>Capture and learn vocabulary you discover yourself. No pre-built lists here.</li>
            <li><b>Stay <u>focused</u>.</b><br/><br/>The minimum you need to build your word collection, learn it, and retain it.</li>
            <li><b>Stay <u>consistent</u>.</b><br/><br/>Our spaced repetition algorithm balances learning the new and refreshing the old.</li>
          </ul>
          <img className="screenshot" src={!width || width > 767 ? DesktopScreenshot : MobileScreenshot} />
        </div>
    );
};

export default MainScreenshot;
