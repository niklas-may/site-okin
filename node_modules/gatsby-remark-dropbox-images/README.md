# gatsby-remark-dropbox-images
[![npm version](https://badge.fury.io/js/gatsby-remark-dropbox-images.svg)](https://badge.fury.io/js/gatsby-remark-dropbox-images)

This plugin resolves image tags in markdown files sourced with gatsby-source-dropbox. It currently only supports images in markdown body but not in frontmatter.

## Requirements
The plugin depends on the following:
* gatsby-transformer-sharp
* gatsby-plugin-sharp
* gatsby-source-dropbox
* gatsby-transformer-remark
* gatsby-remark-images

`gatsby-source-dropbox` option `createFolderNodes` needs to be set to  `true`. 

## Installation
Yarn
`yarn add gatsby-remark-dropbox-image`

Npm
`npm i -S gatsby-remark-dropbox-image`

## Configuration
`gatsby-config.js` needs to have at least the following:

```javaScript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-dropbox`,
      options: {
        accessToken: `<Token>`,
        createFolderNodes: true,
      },
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
              maxWidth: 1000, // You need to specify the maxWidth 
            },
          },
        ],
      },
    },
  ],
}
```

