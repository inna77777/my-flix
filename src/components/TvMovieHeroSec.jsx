import React, { useState, useEffect } from "react";
import GenreFetcher from "./GenreFetcher";
import MovieModal from "./MovieModal";
import GenreSec from "./GenreSec";

const TvMovieHeroSec = ({ url, title, urlGenre, api_route, Categories }) => {
  const [item, setItem] = useState({});
  const { genres } = GenreFetcher({ urlGenre });

  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleGenreChange = (event) => {
    setSelectedGenreId(event.target.value);
    console.log(selectedGenreId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQzMDdhMTczNTZlMWUwOTM2ODE2NmJkZmI0NzNlNyIsInN1YiI6IjY2MjIzODgzODdhZTdiMDE4OGQ5NTA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.unXtjrx3GoUvmyhcgnwE5cpfc6Hyzsj-UKTaE_a5FgQ",
          },
        });
        const itemDate = await data.json();
        setItem(itemDate.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(url);
  }, []);


  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <section
        className={`h-[93.5vh]  w-full  flex flex-col ${
          selectedGenreId ? "justify-start" : "justify-center"
        } relative mb-20`}
      >
        {!selectedGenreId && (
          <div>
            <div
              className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-no-repeat bg-center brightness-50"
              style={{
                backgroundImage: `url(${`https://image.tmdb.org/t/p/original${item.poster_path}`})`,
              }}
            ></div>
            <div className="z-10 flex items-center gap-10 absolute top-10 left-24">
              <h3 className="text-5xl text-white font-medium">{title}</h3>
              <select
                name="genres"
                id="mySelect"
                className="w-fit text-sm h-8 bg-black text-white border"
                onChange={handleGenreChange}
                value={selectedGenreId || ""}
              >
                <option value="Genres" selected>
                  Genres
                </option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {!selectedGenreId && (
          <div className="z-10 m-20">
            <h1 className="text-9xl text-white brightness-125 name-font mb-10">
              {item.name ? item.name : item.title}
            </h1>
            <div className="text-lg">
              <button className="bg-white py-3 px-12 rounded mr-5 hover:bg-[#ffffffbf]">
                <i class="fa-solid fa-play mr-2"></i> Play
              </button>
              <button
                className="bg-[#6d6d6eb3] text-white py-3 px-12 rounded hover:bg-[#6d6d6e66]"
                onClick={() => handleClick(item)}
              >
                <i class="fa-solid fa-circle-info mr-2"></i>
                More Info
              </button>
            </div>
          </div>
        )}
        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            closeModal={handleCloseModal}
            type={api_route}
          />
        )}
        {selectedGenreId && (
          <GenreSec
            page={5}
            col={8}
            title={title}
            type={api_route}
            genreName={genres.find((genre) => genre.id == selectedGenreId).name}
            setSelectedGenreId={setSelectedGenreId}
            url={`https://api.themoviedb.org/3/discover/${api_route}?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${selectedGenreId}&page=`}
          />
        )}
      </section>
      {!selectedGenreId && <Categories />}
    </>
  );
};

export default TvMovieHeroSec;
