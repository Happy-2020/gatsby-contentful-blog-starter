module.exports = {
  siteMetadata: {
    title: `My Gatsby Demo Site`,
    description: `An awesome post does have some cool description.`,
    author: `@gatsbyjs`,
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
        cache_busting_mode: 'none',
      },
    },    
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blogposts/`],
        globPatterns: ['**/icon-path*'],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
      spaceId: `p5ef1xcxky1t`,
      accessToken: `QUdpkKU53d6pX6uDdYpycZ6UkiMr0TunLsmhdXC6njI`
      }
    },
    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-plugin-sw',
      options: {
        swPath: 'src/utils/my-service-worker.js', // Default to 'src/sw.js'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
