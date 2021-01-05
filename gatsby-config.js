module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    title: 'KMU SSC ICT CLUB',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'KMU SSC ICT CLUB',
        short_name: 'ICT',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
