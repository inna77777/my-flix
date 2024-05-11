import React from "react";
import TvMovieHeroSec from "../../components/TvMovieHeroSec";
import MainSecTv from "./MainSecTv";

const TvShows = () => {
  return (
    <div>
      <TvMovieHeroSec
        url="https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
        title="TV Shows"
        urlGenre="https://api.themoviedb.org/3/genre/tv/list?language=en"
        api_route="tv"
        Categories={MainSecTv}
      />
    </div>
  );
};

export default TvShows;
