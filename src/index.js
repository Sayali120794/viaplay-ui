import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/**  One should not add all the functinality in the entry point of the application i.e. index.js file. */

export function getWatchedMovies() {
  /** Instead of var use let or const keyword. */
  var movies = localStorage.getItem("movies-watched");

  /** Could have used ternary operator. */
  if (!movies) {
    return [];
  } else {
    return JSON.parse(movies);
  }
}

export function getAllMovies() {
  var movies = localStorage.getItem("movies-all");
  /** Could have provided this data in seperate file to modularize the code. */
  if (!movies) {
    return [
      {
        title: "The Avengers",
        image:
          "http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg",
        comment: "New York blows up in this!",
      },
      {
        title: "Dark City",
        image: "https://i.chzbgr.com/full/5569379584/hA96709E0/",
        comment: "This looks mysterious. Cool!",
      },
      {
        title: "Hot Tub Time Machine",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg",
        comment: "Someone said this was fun. Maybe!",
      },
    ];
  } else {
    return JSON.parse(movies);
  }
}

/** Comman names are used for functions. Naming conventions not followed properly. */
export function add(title, description, image) {
  var movie = {};
  movie.title = title;
  movie.description = description;
  movie.image = image;

  var movies = getAllMovies();
  movies.push(movie);

  localStorage.setItem("movies-all", JSON.stringify(movies));
  /** No need to call render method repeatedly for each function. */
  render();
}

export function addWatchedMovie(title, description, image) {
  var movie = {};
  movie.title = title;
  movie.description = description;
  movie.image = image;

  var movies = getWatchedMovies();
  movies.push(movie);

  localStorage.setItem("movies-watched", JSON.stringify(movies));
  /** No need to call render method repeatedly for each function. */
  render();
}

export function removeWatchedMovie(title) {
  var movies = getWatchedMovies();

  for (var i = 0; i < movies.length; i++) {
    if (!movies[i]) continue;
    /** Should have used === for strict checking. */
    if (movies[i].title == title) {
      movies[i] = null;
    }
  }

  localStorage.setItem("movies-watched", JSON.stringify(movies));
  /** No need to call render method repeatedly for each function. */
  render();
}

/** No need to use render as a function. */
function render() {
  ReactDOM.render(
    <App movies={getAllMovies()} watched={getWatchedMovies()} />,
    document.getElementById("root")
  );
}

render();
