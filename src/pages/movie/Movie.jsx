import React from "react";
import TvMovieHeroSec from "../../components/TvMovieHeroSec";
import MainSecMovie from "./MainSecMovie";

const Movie = () => {
  return (
    <div>
      <TvMovieHeroSec
        url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        title="Movies"
        urlGenre="https://api.themoviedb.org/3/genre/movie/list?language=en"
        api_route="movie"
        Categories={MainSecMovie}
      />
    </div>
  );
};

export default Movie;
