import React from "react";
import SignInForm from "./SignInForm";

export default function SignIn() {
  return (
    <div className="flex w-11/12 m-auto mt-8">
      <div className="w-2/5">
        <h1 className="mb-4">Sign In</h1>
        <SignInForm />
        <button className="mt-4">
          I have an account <span className="underline">Sign Up</span>
        </button>
      </div>
      <div className="w-3/5"></div>
    </div>
  );
}
