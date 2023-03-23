import React from "react";
import authorImage from "../../images/jan.png";

import "./Author.scss";

const Author = () => (
    <div className="author-card">
        <img src={authorImage} alt="Author" />
        <div className="response">
            👋, I&apos;m Jan.
            <br />
            <br />
            Some people magically remember words after hearing them twice.
            <br />
            Not me. 😅
            <br />
            <br />
            I made Kotobaten to help me learn and retain the words I ran into when exploring Japanese language and culture.
            <br />
            <br />
            Since I started using it, it helps me learn around a thousand words per year.
            <br />
            <br />
            I hope it can supercharge your Japanese journey the same way!
            <br />
            <br />
            ～よろしくな～
        </div>
    </div>
);

export default Author;
