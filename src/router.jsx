import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import TvShows from "./pages/tv/TvShows";
import Movie from "./pages/movie/Movie";
import GenreSec from "./components/GenreSec";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "movies", element: <Movie /> },
      { path: "tv-shows", element: <TvShows /> },
      // { path: "genres/:genreId", element: <GenreSec /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <SignUp /> },
    ],
  },
]);
