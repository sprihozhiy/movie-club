import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MovieItem from "../components/MovieItem"

const IndexPage = props => {
  // console.log(props)
  return (
    <Layout>
      <SEO title="Movie Club - The Best Place To Choose A Movie." />
      {props.data.allMovies.edges.map(edge => {
        return (
          <MovieItem key={edge.node.id}>
            <h2>{edge.node.title}</h2>
            <h4>
              <span>Genre: {edge.node.genres.genre}</span> -{" "}
              <span>Year: {edge.node.year}</span>
            </h4>
            <hr />
            <p>{edge.node.description}</p>
            <p>Produced by: {edge.node.production}</p>
            <Link to={`/movie/${edge.node.id}`}>Reviews & Comments</Link>
          </MovieItem>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
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
        }
      }
    }
  }
`

export default IndexPage
