require('dotenv').config({path: "./.env"})

module.exports = {
  siteMetadata: {
    siteName: `okin studio`,
    description: `okin studio is a multidisciplinary design studio based in Munich.`,
    author: `okin studio <info@okin.studio>`,
    keywords: ['Architekt', 'Design', 'Schreiner', 'Innenausbau']
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
    {
      resolve: `gatsby-source-dropbox`,
      options: {
        accessToken: process.env.DROPBOX_TOKEN,
        extensions: ['.jpg', '.png', '.md'],
        recursive: true,
        createFolderNodes: true,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-dropbox-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2000,
            },
          },
        ],
      },
    },
  ],
}
