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
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Update your metadata in gatsby-config.js`,
        description: `Make sure to fill this out too!`,
        start_url: `/`,
        lang: `en`,
        background_color: `#10111B`,
        theme_color: `#10111B`,
        display: `standalone`,
        icons: [
          {
            src: `favicons/fav-32.png`,
            sizes: `32x32`,
            type: `image/png`
          },
          {
            src: `favicons/fav-128.png`,
            sizes: `128x128`,
            type: `image/png`
          },{
            src: `favicons/fav-152.png`,
            sizes: `152x152`,
            type: `image/png`
          },{
            src: `favicons/fav-167.png`,
            sizes: `167x167`,
            type: `image/png`
          },{
            src: `favicons/fav-180.png`,
            sizes: `180x180`,
            type: `image/png`
          },{
            src: `favicons/fav-192.png`,
            sizes: `192x192`,
            type: `image/png`
          },{
            src: `favicons/fav-196.png`,
            sizes: `196x196`,
            type: `image/png`
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`
  ],
}