import React from "react";
import "./App.css";

import {
  addWatchedMovie,
  add,
  removeWatchedMovie,
  getWatchedMovies,
  getAllMovies,
} from "./index.js";

const getMoviesComponents = (movies) => {
  var components = [];
  {
    /** Instead of coping movies from one array to onother could have used Array.map() method */
  }
  movies.forEach(function (movie) {
    components.push(
      <div className="all">
        <div>
          {/** should have provided with alt if the url for image does not work */}
          {/** Instead of using inline stlye could have used it in seperate css file */}
          <img src={movie.image} height="100px" />
        </div>
        <span>
          {/* href does not have any link to navigate here. Link should have been given and also could have used routers. */}
          {/**Instead of writing function here could have wrote it seperately and paased from here so that can be used as props in other compoent. */}
          <a
            className="movie-watched"
            href="#"
            onClick={function () {
              addWatchedMovie(movie.title, movie.comment, movie.image);
            }}
          >
            {movie.title}
          </a>
        </span>
        <br />
        <span>{movie.comment}</span>
        <br />
        <br />
      </div>
    );
  });

  return components;
};

function getWatchedMoviesComponents(movies) {
  var components = [];

  movies.forEach(function (movie) {
    components.push(
      movie && (
        <div className="watched">
          <div>
            {/** should have provided with alt if the url for image does not work */}
            {/** Instead of using inline stlye could have used it in seperate css file */}
            <img src={movie.image} height="100px" />
          </div>
          <span>
            {/* href does not have any link to navigate here. Link should have been given and also could have used routers. */}
            {/**Instead of writing function here could have wrote it seperately and paased from here so that can be used as props in other compoent. */}
            <a
              className="movie-watched"
              href="#"
              onClick={function () {
                removeWatchedMovie(movie.title);
              }}
            >
              {movie.title}
            </a>
          </span>
          <br />
          <span>{movie.comment}</span>
          <br />
          <br />
        </div>
      )
    );
  });

  return components;
}

function App(props) {
  return (
    <div className="App">
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>
      {/** For all the below tags instead of writing function here could have wrote it seperately and paased from here so that can be used as props in other compoent. */}
      <b>
        TITLE:
        <br />
        <input
          type="text"
          onChange={function (e) {
            title = e.target.value;
          }}
        />
      </b>
      <br />
      {/** Instead of breaks could have used flexbox */}
      <b>
        IMAGE URL:
        <br />
        <input
          type="text"
          onChange={function (e) {
            image = e.target.value;
          }}
        />
      </b>
      <br />
      <b>
        COMMENT:
        <br />
        <input
          type="text"
          onChange={function (e) {
            comment = e.target.value;
          }}
        />
      </b>
      <br />
      <input
        type="button"
        onClick={function (e) {
          add(title, image, comment);
        }}
        value="ADD MOVIE"
      />

      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

/** Instead of using these variables as global could have used it as state */
var title = "";
var image = "";
var comment = "";

export default App;
