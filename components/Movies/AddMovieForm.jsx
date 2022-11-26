import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export default function AddMovieForm() {
  const { localId } = useSelector((state) => state.userSlice);

  const { register, handleSubmit, watch, resetField } = useForm();

  const [movieName, FavoriteCharacter] = watch([
    "movieName",
    "favoriteCharacter",
  ]);

  const [movieId, setMovieId] = useState(0);

  var x = new Date().valueOf();

  const movieData = {
    movieName: movieName,
    favoriteCharacter: FavoriteCharacter,
    movieId: movieId,
  };

  const onSubmit = () => {
    setMovieId((movieId) => x);

    fetch(
      `https://learning-react-24e93-default-rtdb.firebaseio.com/movies/${localId}/${movieId}.json`,
      {
        method: "POST",
        body: JSON.stringify(movieData),
        headers: {
          "Content-Type": `application/json`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then(() => {
        resetField("movieName");
        resetField("favoriteCharacter");
      });
  };

  return (
    <div>
      <h1>Choose Your Favorite Movie and Favorite Movie Character</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-2">
        <input
          {...register("movieName", { required: "Movie Name is required" })}
          placeholder="Movie Name"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
        />
        <input
          {...register("favoriteCharacter", {
            required: "Favorite Character is required",
          })}
          placeholder="Favorite Character"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}
