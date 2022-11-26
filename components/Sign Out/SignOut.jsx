import React from "react";

import { useDispatch } from "react-redux";
import { signInOutActions } from "../../store/signInOutSlice";

import { useRouter } from "next/router";

export default function SignOut() {
  const router = useRouter();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(signInOutActions.logoutHandler());
    router.push("/signin");
  };

  return <button onClick={logoutHandler}>Sign Out</button>;
}
