import React from "react";
import Link from "next/link";

import { useSelector } from "react-redux";

import SignOut from "../Sign Out/SignOut";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.signInOutSlice);

  return (
    <div className="w-11/12 m-auto flex justify-between py-4">
      <Link href="/">Home</Link>
      {!isLoggedIn && (
        <div className="flex gap-x-8">
          <Link href="/signup">Sign Up</Link>
          <Link href="/signin">Sign In</Link>
        </div>
      )}
      {isLoggedIn && <SignOut />}
    </div>
  );
}
