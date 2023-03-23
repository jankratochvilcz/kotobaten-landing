import React from "react";
import { Helmet } from "react-helmet";

type PageType = "main" | "blog";

type PageMetaProps = {
    title: string,
    description: string
    pageType: PageType
}

const PageMeta = ({ title, description, pageType }: PageMetaProps) => (
    <Helmet>
        <meta name="description" content={description} />
        {pageType === "main" && <title>{`${title} | Kotobaten`}</title>}
        {pageType === "blog" && <title>{title}</title>}
    </Helmet>
);

export default PageMeta;
