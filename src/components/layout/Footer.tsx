import { useStaticQuery, graphql } from "gatsby";
import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <div id="footer" className="footer-wrapper">
            <hr />
            <div className="footer-root">
                <div className="footer-group">
                    <h4>Apps</h4>
                    <a href="https://web.kotobaten.app">Web</a>
                    <a href="https://apps.apple.com/us/app/kotobaten/id1618057300">iOS</a>
                    <a href="https://apps.apple.com/us/app/kotobaten/id1618057300">macOS</a>
                    <a href="https://play.google.com/store/apps/details?id=janjanxyz.kotobaten&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">Android</a>
                    <a href="https://www.microsoft.com/store/apps/9NLGLCP25QK8">Windows</a>
                </div>
                <div className="footer-group">
                    <h4>Legal</h4>
                    <a href="/privacy.html">Privacy policy</a>
                    <a href="/cookies.html">Cookie policy</a>
                    <a href="/terms.html">Terms of service</a>
                </div>
                <div className="footer-group">
                    <h4>About</h4>
                    <a href="https://twitter.com/kotobaten">Twitter</a>
                    <a href="https://github.com/jankratochvilcz/kotobaten-flutter/releases">What's new</a>
                    <a href="https://documenter.getpostman.com/view/20713058/UyrGBuQD">API</a>
                    <a href="mailto:hello@kotobaten.app">Support email</a>
                    <a href="https://janjan.xyz/">Jan Kratochvil, 2022</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
