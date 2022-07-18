import React, { useEffect, useState } from "react";
import { landscape, portrait } from "../components/dummyData";
import MovieSlider from "../components/MovieSlider";
import MovieDetail from "../components/MovieDetail";
import tmdb from "../apis/tmdb";

export const DetailMovie = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

  const idMovie = 756999;
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const fetchedMovie = await tmdb.get(`movie/${idMovie}`);
        setMovie(fetchedMovie.data);
      } catch (error) {
        console.log(error);
      }
    };

  console.log(movie);

    fetchMovie();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/week");
        setMovies(fetchedMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <MovieDetail data={movie} />
      <MovieSlider title={"Popular Movies"} data={movies} />
      <MovieSlider title={"Portrait Movies"} data={movies} original={true} />
    </>
  );
};
