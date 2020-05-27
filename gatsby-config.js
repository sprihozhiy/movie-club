module.exports = {
  siteMetadata: {
    title: `Movie Club`,
    description: `Find the right fit movie for you using Movie Club!`,
    author: `@serhiica`,
  },
  plugins: [
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
              image: doc.image,
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
    `gatsby-plugin-styled-components`,
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "Movies",
        imagePath: "image",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
