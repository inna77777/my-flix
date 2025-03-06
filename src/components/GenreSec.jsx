/** @format */

import React, { useEffect, useState } from "react";
import MovieModal from "./MovieModal";
import noImage from "../assets/images/no-image.jpg";

const GenreSec = ({
  url,
  title,
  genreName,
  setSelectedGenreId,
  type,
  page,
  col,
}) => {
  const [items, setItems] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchData = async (fetchUrl) => {
      try {
        let index = 1;
        const fetchedItems = [];
        while (index !== page) {
          const data = await fetch(fetchUrl + index, {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQzMDdhMTczNTZlMWUwOTM2ODE2NmJkZmI0NzNlNyIsInN1YiI6IjY2MjIzODgzODdhZTdiMDE4OGQ5NTA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.unXtjrx3GoUvmyhcgnwE5cpfc6Hyzsj-UKTaE_a5FgQ",
            },
          });
          const itemsData = await data.json();
          fetchedItems.push(...itemsData.results);
          index++;
        }
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(url);
  }, [url]);

  const handleClick = (movie) => {
    console.log(movie);
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="w-full h-10 px-7 mt-10 mb-40px">
      {title && (
        <div className="text-2xl text-white mb-5">
          <a onClick={() => setSelectedGenreId(null)}>{title}</a> {">"}{" "}
          {genreName}
        </div>
      )}

      <div
        className={`grid gap-10 ${
          {
            1: "grid-cols-1",
            2: "grid-cols-2",
            3: "grid-cols-3",
            4: "grid-cols-4",
            5: "grid-cols-5",
            6: "grid-cols-6",
            7: "grid-cols-7",
            8: "grid-cols-8",
          }[col] || "grid-cols-4"
        }`}
      >
        {items.map((item, index) => (
          <div key={index} onClick={() => handleClick(item)}>
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                  : noImage
              }
              alt=""
              className="rounded-lg"
              style={{ minHeight: "100%" }}
            />
          </div>
        ))}
      </div>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          type={type}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default GenreSec;
