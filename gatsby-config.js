module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-source-firestore`,
    {
      resolve: `gatsby-source-firestore`,
      options: {
        credential: require(`./firebase.json`),
        types: [
          {
            type: `Movies`,
            collection: `movies`,
            map: doc => ({
              title: doc.title,
              description: doc.description,
              year: doc.year,
              production: doc.production,
              genres___NODE: doc.genres.id,
            }),
          },
          {
            type: `Genres`,
            collection: `genres`,
            map: doc => ({
              genre: doc.genre,
              // movies___NODE: doc.books.map(movies => movies.id),
            }),
          },
        ],
      },
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
