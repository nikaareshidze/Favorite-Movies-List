import React from "react";
import { useSelector } from "react-redux";

export default function MovieCard({ item }) {
  const { localId } = useSelector((state) => state.userSlice);

  const deleteItem = () => {
    fetch(
      `https://learning-react-24e93-default-rtdb.firebaseio.com/movies/${localId}/${item.movieId}.json`,
      {
        method: "Delete",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <>
      <div className="border-2 border-black my-4 flex justify-between items-center h-16">
        <div className="flex">
          <h1 className="pl-4 w-64">{`${item.movieName}`}</h1>
          <h1>{`${item.favoriteCharacter}`}</h1>
        </div>
        <button className="text-red-900 underline pr-8" onClick={deleteItem}>
          წაშლა
        </button>
      </div>
    </>
  );
}
