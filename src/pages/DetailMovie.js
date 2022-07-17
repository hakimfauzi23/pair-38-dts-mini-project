import React from "react";
import { landscape, portrait } from "../components/dummyData";
import MovieSlider from "../components/MovieSlider";
import MovieDetail from "../components/MovieDetail";

export const DetailMovie = () => {
  return (
    <>
      <MovieDetail />
      <MovieSlider title={"Popular Movies"} data={landscape} />
      <MovieSlider title={"Landscape Movies"} data={landscape} />
      <MovieSlider title={"Landscape Movies"} data={landscape} />
      <MovieSlider title={"Portrait Movies"} data={portrait} original={true} />
    </>
  );
};
