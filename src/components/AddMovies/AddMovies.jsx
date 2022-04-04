import React, { useState } from "react";
import { AlreadyAvailableMovies } from "../../utils/data";
import "./addMovies.css";

const AddMovie = (props) => {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [comment, setComment] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageURLChange = (event) => {
    setImageURL(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  /** used this fuction to clear text fields once clicked on Add Movie button */
  const clearAllFields = () => {
    setTitle("");
    setComment("");
    setImageURL("");
  };

  /** Used this function to add newly addded movie in the local storage */
  const addMovie = () => {
    const movie = {
      title,
      imageURL,
      comment,
      isWatched: false,
    };
    let newlyAddedMovies;
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      newlyAddedMovies = [...movies];
    } else {
      newlyAddedMovies = [...AlreadyAvailableMovies];
    }
    newlyAddedMovies.push(movie);
    props.updateMovies(newlyAddedMovies);
    localStorage.setItem("movies", JSON.stringify(newlyAddedMovies));
    clearAllFields();
  };

  return (
    <div className="form-container">
      <h1 className="header">Add movie!</h1>
      <div className="form-container-fields">
        <label className="badge badge-primary">TITLE:</label>
        <input
          name="title"
          placeholder="Please enter title..."
          value={title}
          onChange={handleTitleChange}
          required
        />

        <label className="badge badge-primary">IMAGE URL:</label>
        <input
          name="imageURL"
          placeholder="Please enter url..."
          value={imageURL}
          onChange={handleImageURLChange}
          required
        />

        <label className="badge badge-primary">COMMENT:</label>
        <input
          name="comments"
          placeholder="Add comments here..."
          value={comment}
          onChange={handleCommentChange}
          required
        />
        <div>
          <button
            className="btn btn-secondary btn-sm button-size"
            onClick={addMovie}
            disabled={!title || !imageURL || !comment}
          >
            ADD MOVIE
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AddMovie);
