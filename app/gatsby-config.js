require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Badge Scanner App`,
    description: `The web app to scan and extract ID from employee badge.`,
    author: `@nguyen190887`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql", // see more https://www.gatsbyjs.org/packages/gatsby-source-graphql/
      options: {
        typeName: "AppSyncPosts",
        fieldName: "posts",
        url: `${process.env.APPSYNC_ENDPOINT}`,
        headers: {
          "x-api-key": `${process.env.APPSYNC_API_KEY}`,
        },
      },
    },
  ],
}
