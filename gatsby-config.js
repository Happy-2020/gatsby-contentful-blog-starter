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
        icons: [ // manually, so they go to static folder:
          {
            src: `/static/icons/android-icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/static/icons/android-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/static/icons/android-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/static/icons/android-icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          }
        ],
        cache_busting_mode: 'none',
      },
    },    
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blogposts/`],
        workboxConfig: {
          cacheId: `cmpV0.0.2a`,
           globPatterns: ['**/*.{js,json,html,woff2,ttf,svg,png,jpg,pdf}'],
           maximumFileSizeToCacheInBytes: 50000000,
           cleanupOutdatedCaches: true,
           runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$\/)/,
              handler: `CacheFirst`,
            },
          ],        
        } 
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
