import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MovieItem from "../components/MovieItem"
import styled from "styled-components"

const LinkButton = styled.div`
  text-align: right;
`

const IndexPage = props => {
  // console.log(props)
  return (
    <Layout>
      <SEO title="Movie Club - The Best Place To Choose A Movie." />
      {props.data.allMovies.edges.map(edge => {
        return (
          <MovieItem
            key={edge.node.id}
            movieTitle={edge.node.title}
            movieGenre={edge.node.genres.genre}
            movieYear={edge.node.year}
            movieDescription={edge.node.description}
            movieProduction={edge.node.production}
            movieImage={edge.node.localImage.publicURL}
          >
            <LinkButton>
              <Link to={`/movie/${edge.node.id}`}>Reviews & Comments</Link>
            </LinkButton>
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
          localImage {
            publicURL
          }
        }
      }
    }
  }
`

export default IndexPage
