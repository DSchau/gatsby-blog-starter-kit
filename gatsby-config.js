const { name } = require('./package.json');

module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/`,
  siteMetadata: {
    author: 'You!',
    title: `Gatsby Default (Blog) Starter`,
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp'
  ],
}
