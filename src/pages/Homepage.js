import React, { useEffect, useState } from "react";
import { landscape, portrait } from "../components/dummyData";
import { MovieCarousel } from "../components/MovieCarousel";
import MovieSlider from "../components/MovieSlider";
import tmdb from "../apis/tmdb";

export const Homepage = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [series, setSeries] = useState([]);

  console.log(trending);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedTrending = await tmdb.get("trending/all/week");
        const fetchedPopular = await tmdb.get("movie/popular");
        const fetchedTopRated = await tmdb.get("movie/top_rated");
        const fetchedSeries = await tmdb.get("trending/tv/week");
        setPopular(fetchedPopular.data.results);
        setTrending(fetchedTrending.data.results);
        setTopRated(fetchedTopRated.data.results);
        setSeries(fetchedSeries.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <MovieCarousel data={popular} />
      <MovieSlider title={"Trending This Week"} data={trending} />
      <MovieSlider title={"Popular Movies"} data={popular} />
      <MovieSlider title={"Top Rated Movies"} data={topRated} />
      <MovieSlider title={"Trending Series"} data={series} original={true} />
    </div>
  );
};
