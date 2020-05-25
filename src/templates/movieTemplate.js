import React from "react"
import Layout from "../components/layout"
import MovieItem from "../components/MovieItem"

const MovieTemplate = props => {
  return (
    <Layout>
      <MovieItem key={props.pageContext.id}>
        <h2>{props.pageContext.title}</h2>
        <h4>
          <span>Genre: {props.pageContext.genres.genre}</span> -{" "}
          <span>Year: {props.pageContext.year}</span>
        </h4>
        <hr />
        <p>{props.pageContext.description}</p>
        <p>Produced by: {props.pageContext.production}</p>
      </MovieItem>
    </Layout>
  )
}

export default MovieTemplate
