import React, { useState, useEffect } from "react";
import MovieModal from "./MovieModal";
import noImage from "../assets/images/no-image.jpg";

const CategoryList = ({ url, title, type }) => {
  const [categoriesData, setCategoriesData] = useState({
    results: [],
    total_results: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQzMDdhMTczNTZlMWUwOTM2ODE2NmJkZmI0NzNlNyIsInN1YiI6IjY2MjIzODgzODdhZTdiMDE4OGQ5NTA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.unXtjrx3GoUvmyhcgnwE5cpfc6Hyzsj-UKTaE_a5FgQ",
    },
  };

  useEffect(() => {
    const fetchData = async (url, options) => {
      try {
        const response1 = await fetch(url + 1, options);
        const data1 = await response1.json();
        const response2 = await fetch(url + 2, options);
        const data2 = await response2.json();
        const allData = {
          results: [...data1.results, ...data2.results],
          total_results: data1.results.length + data2.results.length,
        };
        setCategoriesData(allData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(url, options);
  }, []);

 
  const handlePreviousPage = (totalPages) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(totalPages);
    }
  };

  const handleNextPage = (totalPages) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <div style={{ width: "100%" }} className="px-3">
        <h3 className="text-4xl mt-12 mb-5 text-[#e5e5e5] category-font">
          {title}
        </h3>
        <div className="relative group">
          <button
            className="opacity-75 absolute top-0 left-0 bottom-0 text-white px-3 bg-[#6d6d6e66] hover:bg-[#6d6d6eb3] hidden group-hover:block text-2xl"
            onClick={() =>
              handlePreviousPage(Math.ceil(categoriesData.total_results / 10))
            }
          >
            <i class="fa-solid fa-chevron-left brightness-200 "></i>
          </button>
          <ul className="flex gap-2">
            {categoriesData.results
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((movie, movieIndex) => (
                <li key={movieIndex} onClick={() => handleClick(movie)}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                        : noImage
                    }
                    alt=""
                    className="rounded-lg"
                    style={{ minHeight: "100%" }}
                  />
                </li>
              ))}
          </ul>
          <button
            className="opacity-75 absolute top-0 right-0 bottom-0 text-white px-3 bg-[#6d6d6e66] hover:bg-[#6d6d6eb3] hidden group-hover:block text-2xl"
            onClick={() =>
              handleNextPage(Math.ceil(categoriesData.total_results / 10))
            }
          >
            <i class="fa-solid fa-chevron-right brightness-200"></i>{" "}
          </button>
        </div>
      </div>
      {selectedMovie && (
        <MovieModal
          type={type}
          movie={selectedMovie}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default CategoryList;
