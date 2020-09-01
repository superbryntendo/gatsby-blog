module.exports = {
  siteMetadata: {
    title: `Update your metadata in gatsby-config.js`,
    author: `idk, you?`,
    description: `Make sure to fill this out too!`,
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
    `gatsby-plugin-styled-components`,
  ],
}
