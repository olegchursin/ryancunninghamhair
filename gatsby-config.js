module.exports = {
  siteMetadata: {
    title: 'Ryan Cunningham Hair - Official',
    description: 'Official Website for Ryan Cunningham Hair',
    author: 'Oleg Chursin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-background-image Test Site',
        short_name: 'gbitest',
        start_url: '/',
        background_color: '#00446f',
        theme_color: '#00446f',
        display: 'minimal-ui',
        icon: 'src/images/rch-favicon@2x.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
