// import React, { useState, useEffect } from "react";
// import CategoryList from "./CategoryList";

// const GenreList = ({ urlGenre }) => {
//   const [genres, setGenres] = useState([]);
//   // const [data, setData] = useState([]);

//   const options = {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQzMDdhMTczNTZlMWUwOTM2ODE2NmJkZmI0NzNlNyIsInN1YiI6IjY2MjIzODgzODdhZTdiMDE4OGQ5NTA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.unXtjrx3GoUvmyhcgnwE5cpfc6Hyzsj-UKTaE_a5FgQ",
//     },
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const genresResponse = await fetch(urlGenre, options);
//         const genresData = await genresResponse.json();
//         setGenres(genresData.genres);
//         return genresData;
//       } catch (error) {
//         setError("Error fetching data: " + error.message);
//       }
//     };

//     fetchData();
//   }, [urlGenre, options]);

//   return (
//     <div>
//       <div style={{ width: "100%" }}>
//         {genres.map((gn, index) => (
//           <CategoryList
//             key={index}
//             url={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${gn.id}&page=`}
//             title={`${gn.name} Movie`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GenreList;
