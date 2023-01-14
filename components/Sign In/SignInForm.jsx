import React, { useRef } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import { signInOutActions } from "../../store/signInOutSlice";
import { userActions } from "../../store/userSlice";

export default function SignInForm() {
  const { isLoggedIn } = useSelector((state) => state.signInOutSlice);

  const dispatch = useDispatch();

  const router = useRouter();

  const loginHandler = () => {
    dispatch(signInOutActions.loginHandler());
  };

  const setIdToken = (payload) => {
    dispatch(userActions.setIdToken(payload));
  };

  const setLocalId = (payload) => {
    dispatch(userActions.setLocalId(payload));
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBePSB0EnjayeB5dQ7Xn8RYKd1RkWO9G-k",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (Object.values(data)[0].code == 400) {
          router.push("./signup");
        } else {
          loginHandler();
          setIdToken(data.idToken);
          setLocalId(data.localId);
          router.push("./myprofile");
        }
      });
  };

  return (
    <form>
      <input
        placeholder="email"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
        ref={emailRef}
      />
      <input
        placeholder="password"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
        ref={passwordRef}
      />
      <button
        type="button"
        className="w-full border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 mt-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}
