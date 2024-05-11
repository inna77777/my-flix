// GenreFetcher.jsx
import React, { useState, useEffect } from "react";

const GenreFetcher = ({ urlGenre }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQzMDdhMTczNTZlMWUwOTM2ODE2NmJkZmI0NzNlNyIsInN1YiI6IjY2MjIzODgzODdhZTdiMDE4OGQ5NTA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.unXtjrx3GoUvmyhcgnwE5cpfc6Hyzsj-UKTaE_a5FgQ",
      },
    };

    const fetchData = async () => {
      try {
        const genresResponse = await fetch(urlGenre, options);
        const genresData = await genresResponse.json();
        setGenres(genresData.genres);
      } catch (error) {
        throw new Error("Error fetching data: " + error.message);
      }
    };

    fetchData();
  }, [urlGenre]);

  return { genres };
};

export default GenreFetcher;
