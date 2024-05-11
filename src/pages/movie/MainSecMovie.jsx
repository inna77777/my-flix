// HeroSecTv.js
import React, { useState, useEffect } from "react";
import CategoryList from "../../components/CategoryList";

const MainSecMovie = () => {
  const urls = [
    {
      url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=",
      title: "Upcoming Movies",
    },
    {
      url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=",
      title: "Top Rated Movies",
    },
    {
      url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=",
      title: "Popular Movies",
    },
    {
      url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=",
      title: "Now Playing",
    },
  ];
  return (
    <div>
      {urls.map(({ url, title }) => (
        <CategoryList key={title} url={`${url}`} title={title} type="movie" />
      ))}
    </div>
  );
};

export default MainSecMovie;
