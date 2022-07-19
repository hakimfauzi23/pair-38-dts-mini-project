import React, { useEffect, useState } from "react";
import { landscape, portrait } from "../components/dummyData";
import { MovieCarousel } from "../components/MovieCarousel";
import MovieSlider from "../components/MovieSlider";
import tmdb from "../apis/tmdb";

export const Homepage = () => {
  const [movies, setMovies] = useState([]);

  console.log(movies);

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
    <div>
      <MovieCarousel data={movies} />
      <MovieSlider title={"Popular Movies"} data={movies} />
      <MovieSlider title={"Popular Movies"} data={movies} />
    </div>
  );
};
