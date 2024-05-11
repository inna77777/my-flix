import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import GenreSec from "./GenreSec";

const customStyles = {
  content: {
    top: "0%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    marginTop: "25%",
    transform: "translate(-50%, -50%)",
    width: "45%",
    padding: 0,
    borderRadius: "10px",
    backgroundColor: "#181818",
    color: "white",
    paddingBottom: "50px",
  },
  overlay: {
    zIndex: 100,
  },
};

function MovieModal({ movie, closeModal, type }) {
  const [genreNames, setGenreNames] = useState([]);

  const urlMovie = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const urlTv = "https://api.themoviedb.org/3/genre/tv/list?language=en";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQzMDdhMTczNTZlMWUwOTM2ODE2NmJkZmI0NzNlNyIsInN1YiI6IjY2MjIzODgzODdhZTdiMDE4OGQ5NTA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.unXtjrx3GoUvmyhcgnwE5cpfc6Hyzsj-UKTaE_a5FgQ",
    },
  };

  useEffect(() => {
    const fetchGenreNames = async () => {
      let url;
      if (type === "tv") {
        url = urlTv;
      }
      if (type === "movie") {
        url = urlMovie;
      }
      const response = await fetch(url, options);
      const data = await response.json();
      setGenreNames(data.genres);
      console.log(data);
      console.log(movie.genre_ids);
    };
    fetchGenreNames();
  }, [type]);

  console.log(genreNames);

  if (!movie) {
    return null;
  }
  let releaseDate;
  if (movie.release_date) {
    releaseDate = movie.release_date.split("-");
  } else {
    releaseDate = movie.first_air_date.split("-");
  }
  const genreIdsString = movie.genre_ids.join(",");
  const releaseYear = releaseDate[0];
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Movie Modal"
      style={customStyles}
    >
      <>
        <div className="relative flex flex-col justify-between h-[400px] p-5">
          <button onClick={closeModal} className=" text-3xl pr-2 z-40 self-end">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-no-repeat bg-center brightness-50"
            style={{
              backgroundImage: `url(${`https://image.tmdb.org/t/p/original${movie.poster_path}`})`,
            }}
          ></div>
          <div className="z-40  pb-10">
            <h2 className="name-font text-5xl w-50 mb-5">
              {movie.title ? movie.title : movie.name}
            </h2>
            <button className="bg-white text-black text-lg py-1 px-6 rounded mr-5 hover:bg-[#ffffffbf]">
              <i class="fa-solid fa-play mr-2"></i> Play
            </button>
          </div>
        </div>
        <div className="bg-[#181818]  p-5 flex">
          <div className="w-[60%]">
            <div className="flex gap-3 mb-3">
              <p>{Math.round(movie.vote_average)} ⭐</p>
              <p className="text-[#777]">{releaseYear}</p>
            </div>
            <p className="pr-10">{movie.overview}</p>
          </div>
          <div>
            <div className="z-50">
              <span className="text-[#777]">
                Genres:{" "}
                {movie.genre_ids.map((genre, index) => {
                  return (
                    <span key={index} className="text-white">
                      {genreNames.find((g) => genre === g.id)?.name}
                      {index != movie.genre_ids.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="p-5">More like this :</h3>
          <GenreSec
            page={2}
            col={5}
            type={type}
            url={`https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genreIdsString}&page=`}
          />
        </div>
      </>
    </Modal>
  );
}

export default MovieModal;
