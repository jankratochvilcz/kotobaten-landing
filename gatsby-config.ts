import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Kotobaten: Expand your vocablary, understand Japan",
    description: "Kotobaten is an app for expanding your Japanese vocabulary. Build strong learning habits and stick to them.",
    author: "Jan Kratochvil",
    siteUrl: "https://kotobaten.app"
},
plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: `${__dirname}/src/images/`
        }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    {
        resolve: "gatsby-plugin-google-fonts",
        options: {
            fonts: [
                "Noto Serif JP"
            ],
            display: "swap"
        }
    }
]
}

export default config
