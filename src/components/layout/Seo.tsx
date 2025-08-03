import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface MetaTag {
    name?: string;
    property?: string;
    content: string;
}

interface SEOProps {
    description?: string;
    lang?: string;
    meta?: MetaTag[];
    title: string;
}

const SEO: React.FC<SEOProps> = ({
    description = "",
    lang = "en",
    meta = [],
    title
}) => {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            description
            author
            title
          }
        }
      }
    `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={site.siteMetadata.title}
            meta={[
                {
                    name: "description",
                    content: metaDescription
                },
                {
                    property: "og:title",
                    content: title
                },
                {
                    property: "og:description",
                    content: metaDescription
                },
                {
                    property: "og:type",
                    content: "website"
                },
                {
                    name: "twitter:card",
                    content: "summary"
                },
                {
                    name: "twitter:creator",
                    content: site.siteMetadata.author
                },
                {
                    name: "twitter:title",
                    content: title
                },
                {
                    name: "twitter:description",
                    content: metaDescription
                }
            ].concat((meta || []) as any)}
        >
            <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
            <link rel="manifest" href="site.webmanifest" />
        </Helmet>
    );
};


export default SEO;
