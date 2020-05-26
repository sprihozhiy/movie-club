const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const movieTemplate = path.resolve("./src/templates/movieTemplate.js")

  return graphql(`
    {
      allMovies {
        edges {
          node {
            title
            year
            production
            id
            genres {
              genre
            }
            description
            image
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allMovies.edges.forEach(movie => {
      createPage({
        path: `/movie/${movie.node.id}`,
        component: movieTemplate,
        context: movie.node,
      })
    })
  })
}
