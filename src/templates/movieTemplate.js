import React from "react"
import Layout from "../components/layout"
import MovieItem from "../components/MovieItem"

const MovieTemplate = props => {
  return (
    <Layout>
      <MovieItem
        key={props.pageContext.id}
        movieTitle={props.pageContext.title}
        movieGenre={props.pageContext.genres.genre}
        movieYear={props.pageContext.year}
        movieDescription={props.pageContext.description}
        movieProduction={props.pageContext.production}
        movieImage={props.pageContext.localImage.publicURL}
      />
    </Layout>
  )
}

export default MovieTemplate
