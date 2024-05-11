// HeroSecTv.js
import React from "react";
import CategoryList from "../../components/CategoryList";

const MainSecTv = () => {
  const urls = [
    {
      url: "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=",
      title: "Airing Today",
    },
    {
      url: "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=",
      title: "On the air",
    },
    {
      url: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=",
      title: "Popular TV",
    },
    {
      url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=",
      title: "Top Rated TV",
    },
  ];
  return (
    <div>
      {urls.map(({ url, title }) => (
        <CategoryList key={title} url={`${url}`} title={title} type="tv" />
      ))}
    </div>
  );
};

export default MainSecTv;
