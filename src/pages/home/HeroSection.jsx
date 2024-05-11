
import React, { useState, useEffect } from "react";
import MovieModal from "../../components/MovieModal";

const HeroSection = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieResponse = await fetch(
          "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQzMDdhMTczNTZlMWUwOTM2ODE2NmJkZmI0NzNlNyIsInN1YiI6IjY2MjIzODgzODdhZTdiMDE4OGQ5NTA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.unXtjrx3GoUvmyhcgnwE5cpfc6Hyzsj-UKTaE_a5FgQ",
            },
          }
        );
        const movieData = await movieResponse.json();
        setMovie(movieData.results[0]);

        const genresResponse = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQzMDdhMTczNTZlMWUwOTM2ODE2NmJkZmI0NzNlNyIsInN1YiI6IjY2MjIzODgzODdhZTdiMDE4OGQ5NTA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.unXtjrx3GoUvmyhcgnwE5cpfc6Hyzsj-UKTaE_a5FgQ",
            },
          }
        );

        const genresData = await genresResponse.json();
        setGenres(genresData.genres);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovieData();
  }, []);

  const getMovieGenres = () => {
    if (movie && movie.genre_ids && genres.length > 0) {
      return genres.filter((genre) => movie.genre_ids.includes(genre.id));
    } else {
      return [];
    }
  };
  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <section className="h-[93.5vh]  w-full  flex flex-col justify-center relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-no-repeat bg-center brightness-50"
        style={{
          backgroundImage: `url(${`https://image.tmdb.org/t/p/original${movie.poster_path}`})`,
        }}
      ></div>
      {/* <div>
        <span>{Math.round(movie.vote_average)}⭐️ </span>
      </div> */}
      <div className="z-10 m-20">
        <h1 className="text-9xl text-white brightness-125 name-font mb-10">
          {movie.name}
        </h1>
        <div className="text-lg">
          <button className="bg-white py-3 px-12 rounded mr-5 hover:bg-[#ffffffbf]">
            <i class="fa-solid fa-play mr-2"></i> Play
          </button>
          <button
            className="bg-[#6d6d6eb3] text-white py-3 px-12 rounded hover:bg-[#6d6d6e66]"
            onClick={() => handleClick(movie)}
          >
            <i class="fa-solid fa-circle-info mr-2"></i>
            More Info
          </button>
        </div>
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          closeModal={handleCloseModal}
          type="tv"
        />
      )}
    </section>
  );
};

export default HeroSection;
