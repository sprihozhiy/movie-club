import React from "react"
import styled from "styled-components"

const MovieItemWrapper = styled.section`
  border: 1px solid grey;
  box-shadow: 0 0 2px 2px darkgrey;
  margin-bottom: 15px;
  padding: 2em;
  h4 {
    span {
      color: red;
    }
  }
  a {
    text-decoration: none;
    color: firebrick;
    border: 1px solid firebrick;
    padding: 3px;

    &:hover {
      color: white;
      background-color: firebrick;
    }
  }
`

const MovieItem = ({
  movieTitle,
  movieGenre,
  movieYear,
  movieDescription,
  movieProduction,
  movieImage,
  children,
}) => {
  return (
    <MovieItemWrapper>
      <h2>{movieTitle}</h2>
      <h4>
        <span>Genre: {movieGenre}</span> - <span>Year: {movieYear}</span>
      </h4>
      <hr />
      <div>
        <img alt={movieTitle} src={movieImage} />
      </div>
      <p>{movieDescription}</p>
      <p>Produced by: {movieProduction}</p>
      <div>{children}</div>
    </MovieItemWrapper>
  )
}

export default MovieItem
