import React from "react";
import HeroSection from "./HeroSection";
// import MovieModal from "../../components/home/MovieModal";
import MainSecTv from "../tv/MainSecTv";
import MainSecMovie from "../movie/MainSecMovie";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MainSecMovie />
      <MainSecTv />

      {/* <MovieModal /> */}
    </div>
  );
};

export default Home;
