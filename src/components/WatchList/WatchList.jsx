import React from "react";
import "./watchList.css";

const WatchList = (props) => {
  /** used this function to add movie in the already watched list */
  const addToWatchList = (movie) => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    const watchedMovie = movies.find(
      (element) => element.title === movie.title && !element.isWatched
    );
    if (watchedMovie) {
      watchedMovie.isWatched = true;
    }
    localStorage.setItem("movies", JSON.stringify(movies));
    props.updateMovies(movies);
  };

  return (
    <div className="form-container">
      <h1 className="header">WatchList</h1>
      {props.movies.map((movie, index) => (
        <div className="watch-list" key={`${movie.title}-${index}`}>
          <a href="#" onClick={() => addToWatchList(movie)}>
            {movie.title}
          </a>
          <img src={movie.imageUrl} alt="Not available" />
          <p>{movie.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(WatchList);
