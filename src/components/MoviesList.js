import React, { useState, useEffect } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";
import {
  MoviesContainer,
  Title,
  CreateLink,
  MovieList,
  MovieItem,
  MovieLink,
  MovieImage,
  MovieTitle,
} from "../styles/MoviesListStyles";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/movies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <MoviesContainer>
      <Title>Movies</Title>
      <CreateLink to="/movies/create">Create Movie</CreateLink>
      <MovieList>
        {movies.map((movie) => (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movies/${movie.slug}`}>
              <MovieImage src={movie.photo} alt={movie.name} />
              <MovieTitle>{movie.name}</MovieTitle>
            </MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </MoviesContainer>
  );
};

export default MoviesList;
