import React from "react"
import "./Platforms.scss"

import MicrosoftStoreBadge from "../../images/stores/microsoft-store.png"
import AppleStoreBadge from "../../images/stores/apple-store.png"

const Platforms = () => (
    <div className="platforms-root">
        <div className="description">
            Learn at home, in the subway, and everywhere in between.
            <br />
            <br />
            Small efforts count.
        </div>
        <div className="platforms">
            <a
                href="https://play.google.com/store/apps/details?id=janjanxyz.kotobaten&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
            >
                <img
                    alt="Get it on Google Play"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    className="android-platform-container"
                />
            </a>
            <a href="https://apps.apple.com/us/app/kotobaten/id1618057300">
                <img
                    alt="Get it on App Store"
                    src={AppleStoreBadge}
                    className="apple-platform-container"
                />
            </a>
            <a
                href="https://www.microsoft.com/store/apps/9NLGLCP25QK8"
                target="_blank"
            >
                <img
                    alt="Get it on Google Play"
                    src={MicrosoftStoreBadge}
                    className="microsoft-platform-container"
                />
            </a>
            <a className="web-button" href="https://web.kotobaten.app/">
                💻&nbsp;&nbsp;Web
            </a>
        </div>
    </div>
)

export default Platforms
