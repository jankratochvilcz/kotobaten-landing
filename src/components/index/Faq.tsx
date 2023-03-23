import React from "react";

import "./Faq.scss";

const Faq = () => (
    <div id="faq">
        <h2>
            What is the price?
        </h2>
        <div className="response">
            <b>Free.</b>
            <br />
            <br />

            We will introduce a monthly subscription with extra features in the future.
        </div>
        <h2>
            How is it different from Duolingo, Memrise, or Drops? 🤔
        </h2>
        <div className="response">
            Most apps need to support a broad range of languages.
            <br />
            <b>We focus 100% on Japanese.</b>
            <br />
            <br />
            Thanks to our focus, Kotobaten can offer best-in-class support for the Japanese's unique quirks, like the need to learn the kanji
            {" "}
            <i>and</i>
            {" "}
            the reading separately.
            <br />
            <br />

            Other apps are optimized to kick-start your journey in a fun way.
            <br />
            <b>Kotobaten is here for the long-run.</b>
            <br />
            <br />
            The hard truth is that learning Japanese takes years, not months.
            <br />
            Kotobaten is for ambitious people who don&apos;t want to stop at learning how to order at a restaurant.
        </div>
    </div>
);

export default Faq;
