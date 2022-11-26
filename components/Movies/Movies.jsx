import React, { useEffect, useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieCard from "./MovieCard";

import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../store/moviesSlice";

export default function Movies() {
  const dispatch = useDispatch();

  const { localId, userName } = useSelector((state) => state.userSlice);
  const { movies } = useSelector((state) => state.moviesSlice);

  const setMovies = (payload) => {
    dispatch(moviesActions.setMovies(payload));
  };

  useEffect(() => {
    fetch(
      `https://learning-react-24e93-default-rtdb.firebaseio.com/movies/${localId}.json`,
      {
        method: "GET",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data
          ? setMovies([
              ...Object.values(data)
                .map((item) => Object.values(item))
                .map((item) => item[0]),
            ])
          : setMovies([]);
      });
  }, [movies]);

  return (
    <div>
      <h1 className="my-8">{`Hi ${userName}`}</h1>
      <AddMovieForm />

      <div className="mt-8">
        {movies.length > 0 && (
          <div>
            <div className="flex">
              <h1 className="pl-4 w-64">Movie Name</h1>
              <h1>Favorite Character</h1>
            </div>
            <h1></h1>
          </div>
        )}
        {}
        <div className="my-4 flex justify-between items-center"></div>
        {movies.map((item) => (
          <MovieCard item={item} />
        ))}
      </div>
    </div>
  );
}
