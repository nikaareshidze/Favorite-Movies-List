import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";

export default function SignUpForm() {
  const dispatch = useDispatch();

  const setUserName = (payload) => {
    dispatch(userActions.setUserName(payload));
  };

  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBePSB0EnjayeB5dQ7Xn8RYKd1RkWO9G-k",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.name,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        setUserName(data.name);
      })
      .then(() => {
        router.push("/signin");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-2">
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Enter Your Name"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
      />
      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Enter Your Email"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
      />
      <input
        {...register("password", { required: "Password is required" })}
        placeholder="Set Up Your Password"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
      />
      <button
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
