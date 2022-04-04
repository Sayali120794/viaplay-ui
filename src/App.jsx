import React, { useEffect, useState } from "react";
import "./App.css";
import AddMovies from "./components/AddMovies/AddMovies";
import AlreadyWatchedList from "./components/AlreadyWatchedList/AlreadyWatchedList";
import WatchList from "./components/WatchList/WatchList";
import { AlreadyAvailableMovies } from "./utils/data";

const App = () => {
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || AlreadyAvailableMovies
  );

  const updateMovies = (data) => {
    setMovies(data);
  };

  /**used this react hook to render updated local storage */
  useEffect(() => {
    const isLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if (!isLocalStorage) {
      localStorage.setItem("movies", JSON.stringify(AlreadyAvailableMovies));
    }
  });

  return (
    <div className="App">
      <AddMovies updateMovies={updateMovies} />
      <WatchList movies={movies} updateMovies={updateMovies} />
      <AlreadyWatchedList movies={movies} updateMovies={updateMovies} />
    </div>
  );
};

export default App;
