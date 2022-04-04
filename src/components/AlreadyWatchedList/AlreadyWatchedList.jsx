import React from "react";
import "./alreadyWatchedList.css";

const AlreadyWatchedList = (props) => {
  /** used this function to remove movie name from the already watched list */
  const removeMovieFromWatchedList = (movie) => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    const watchedMovie = movies.find(
      (element) => element.title === movie.title && element.isWatched
    );
    watchedMovie.isWatched = false;
    localStorage.setItem("movies", JSON.stringify(movies));
    props.updateMovies(movies);
  };

  return (
    <div className="form-container">
      <h1 className="header">Already Watched</h1>
      {props.movies.map((movie, index) => {
        return (
          movie.isWatched && (
            <div
              className="already-watched-list"
              key={`${movie.title}-${index}`}
            >
              <a href="#" onClick={() => removeMovieFromWatchedList(movie)}>
                {movie.title}
              </a>
              <img src={movie.imageUrl} alt="Not available" />
              <p>{movie.comment}</p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default React.memo(AlreadyWatchedList);
